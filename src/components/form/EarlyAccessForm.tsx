import { useState, useCallback, useEffect } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import FormField from './FormField';
import ResumeUploader from './ResumeUploader';
import SuccessState from './SuccessState';
import Button from '@/components/ui/Button';
import {
  fetchEarlyAccessFormOptions,
  submitEarlyAccess,
  type FormOption,
} from '@/lib/api';
import { errorsByField, isApiErrorBody } from '@/lib/apiError';
import { appendIfPresent, appendUrl } from '@/lib/earlyAccessFormData';

interface EarlyAccessFields {
  fullName: string;
  email: string;
  mobile: string;
  currentRole: string;
  yearsExperience: string;
  experienceLevel: string;
  primarySkills: string;
  secondarySkills: string;
  preferredLocation: string;
  workPreference: string;
  jobSearchStatus: string;
  noticePeriod: string;
  linkedin: string;
  github: string;
  portfolio: string;
  otherLink: string;
  ageConfirm: boolean;
  privacyConsent: boolean;
  marketingConsent: boolean;
  talentMatchingConsent: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success';

const FIELD_API: Partial<Record<keyof EarlyAccessFields, string>> = {
  fullName: 'full_name',
  email: 'email',
  mobile: 'mobile_number',
  currentRole: 'current_role',
  yearsExperience: 'years_of_experience',
  experienceLevel: 'experience_level',
  primarySkills: 'primary_skills',
  secondarySkills: 'secondary_skills',
  preferredLocation: 'pref_location',
  workPreference: 'work_preference',
  jobSearchStatus: 'job_search_status',
  noticePeriod: 'notice_period',
  linkedin: 'linkedin_url',
  github: 'github_url',
  portfolio: 'portfolio_url',
  otherLink: 'other_relevant_url',
  ageConfirm: 'consent_age_18_or_older',
  privacyConsent: 'consent_privacy_and_data_processing',
  marketingConsent: 'consent_marketing_communications',
  talentMatchingConsent: 'consent_job_matching',
};

function inlineFieldErrors(map: Record<string, string>): Record<string, string> {
  const inline: Record<string, string> = {};
  for (const [key, message] of Object.entries(map)) {
    if (key !== '_form' && key !== '_auth') inline[key] = message;
  }
  return inline;
}

const initialData: EarlyAccessFields = {
  fullName: '',
  email: '',
  mobile: '',
  currentRole: '',
  yearsExperience: '',
  experienceLevel: '',
  primarySkills: '',
  secondarySkills: '',
  preferredLocation: '',
  workPreference: '',
  jobSearchStatus: '',
  noticePeriod: '',
  linkedin: '',
  github: '',
  portfolio: '',
  otherLink: '',
  ageConfirm: false,
  privacyConsent: false,
  marketingConsent: false,
  talentMatchingConsent: false,
};

const emptyOptions = {
  experience_level: [] as FormOption[],
  work_preference: [] as FormOption[],
  job_search_status: [] as FormOption[],
  notice_period: [] as FormOption[],
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-accent">
        {children}
      </span>
      <div className="flex-1 h-px bg-fr-border" />
    </div>
  );
}

const checkboxClass =
  'mt-0.5 w-5 h-5 rounded border-2 border-fr-border bg-fr-elevated text-fr-accent focus:ring-2 focus:ring-fr-accent/40 focus:ring-offset-0 cursor-pointer flex-shrink-0 transition-colors';

const requiredBadge = 'inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-fr-error bg-fr-error/10 border border-fr-error/20';
const optionalBadge = 'inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-fr-muted bg-fr-muted/10 border border-fr-muted/20';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  text: string;
  required: boolean;
  error?: string;
}

function ConsentCheckbox({ checked, onChange, label, text, required, error }: CheckboxProps) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={checkboxClass}
          aria-required={required}
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={required ? requiredBadge : optionalBadge}>{label}</span>
          </div>
          <p className="text-sm text-fr-secondary leading-relaxed">{text}</p>
        </div>
      </label>
      {error && (
        <p className="mt-2 ml-8 text-xs text-fr-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function EarlyAccessForm() {
  const [data, setData] = useState<EarlyAccessFields>(initialData);
  const [resume, setResume] = useState<File | null>(null);
  const [options, setOptions] = useState(emptyOptions);
  const [optionsLoading, setOptionsLoading] = useState(true);
  const [optionsError, setOptionsError] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [publicId, setPublicId] = useState<string | undefined>();

  const clearApiFieldError = useCallback((apiField: string) => {
    setFieldErrors((prev) => {
      if (!prev[apiField]) return prev;
      const next = { ...prev };
      delete next[apiField];
      return next;
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setOptionsLoading(true);
      setOptionsError(null);
      try {
        const fetched = await fetchEarlyAccessFormOptions();
        if (!cancelled) setOptions(fetched);
      } catch (err) {
        if (!cancelled) {
          setOptionsError(
            isApiErrorBody(err) ? err.error : 'Could not load form options.',
          );
        }
      } finally {
        if (!cancelled) setOptionsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const update = useCallback(
    (key: keyof EarlyAccessFields, value: string) => {
      setData((prev) => ({ ...prev, [key]: value }));
      const apiField = FIELD_API[key];
      if (apiField) clearApiFieldError(apiField);
    },
    [clearApiFieldError],
  );

  const toggleCheckbox = useCallback(
    (key: keyof EarlyAccessFields) => {
      setData((prev) => ({ ...prev, [key]: !prev[key] }));
      const apiField = FIELD_API[key];
      if (apiField) clearApiFieldError(apiField);
    },
    [clearApiFieldError],
  );

  const handleResumeChange = useCallback(
    (file: File | null) => {
      setResume(file);
      clearApiFieldError('resume');
    },
    [clearApiFieldError],
  );

  const validate = (): boolean => {
    const next: Record<string, string> = {};

    if (!data.fullName.trim()) {
      next.full_name = 'Please enter your full name.';
    }
    if (!data.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!data.ageConfirm) {
      next.consent_age_18_or_older = 'Please confirm you are 18 years of age or older.';
    }
    if (!data.privacyConsent) {
      next.consent_privacy_and_data_processing =
        'Please read the Privacy Notice and provide consent to continue.';
    }

    setFieldErrors(next);
    if (Object.keys(next).length > 0) {
      setFormError('Please correct the errors below.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFieldErrors({});

    if (!validate()) return;

    const fd = new FormData();
    fd.append('full_name', data.fullName.trim());
    fd.append('email', data.email.trim());
    fd.append('consent_age_18_or_older', 'true');
    fd.append('consent_privacy_and_data_processing', 'true');

    appendIfPresent(fd, 'mobile_number', data.mobile);
    appendIfPresent(fd, 'current_role', data.currentRole);
    if (data.yearsExperience.trim()) {
      appendIfPresent(fd, 'years_of_experience', data.yearsExperience.trim());
    }
    appendIfPresent(fd, 'experience_level', data.experienceLevel);
    appendIfPresent(fd, 'primary_skills', data.primarySkills);
    appendIfPresent(fd, 'secondary_skills', data.secondarySkills);
    appendIfPresent(fd, 'pref_location', data.preferredLocation);
    appendIfPresent(fd, 'work_preference', data.workPreference);
    appendIfPresent(fd, 'job_search_status', data.jobSearchStatus);
    appendIfPresent(fd, 'notice_period', data.noticePeriod);

    const setUrlFieldError = (key: string, message: string) => {
      setFieldErrors((prev) => ({ ...prev, [key]: message }));
    };
    const urlOk =
      appendUrl(fd, 'linkedin_url', data.linkedin, setUrlFieldError) &&
      appendUrl(fd, 'github_url', data.github, setUrlFieldError) &&
      appendUrl(fd, 'portfolio_url', data.portfolio, setUrlFieldError) &&
      appendUrl(fd, 'other_relevant_url', data.otherLink, setUrlFieldError);

    if (!urlOk) {
      setFormError('Please correct the errors below.');
      return;
    }

    fd.append('consent_marketing_communications', data.marketingConsent ? 'true' : 'false');
    fd.append('consent_job_matching', data.talentMatchingConsent ? 'true' : 'false');
    if (resume) {
      fd.append('resume', resume);
    }

    setStatus('submitting');

    try {
      const result = await submitEarlyAccess(fd);
      setFieldErrors({});
      setFormError(null);
      setPublicId(result.public_id);
      setStatus('success');
    } catch (err) {
      if (isApiErrorBody(err)) {
        setFormError(err.error);
        setFieldErrors(inlineFieldErrors(errorsByField(err.errors ?? [])));
      } else {
        setFormError('Something went wrong. Please try again.');
      }
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return <SuccessState publicId={publicId} />;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto" noValidate>
      {optionsError && (
        <div className="mb-6 p-4 rounded-xl border border-fr-error/30 bg-fr-error/5 text-sm text-fr-error" role="alert">
          {optionsError}
        </div>
      )}
      {formError && (
        <div className="mb-6 p-4 rounded-xl border border-fr-error/30 bg-fr-error/5 text-sm text-fr-error" role="alert">
          {formError}
        </div>
      )}
      {/* Basic Information */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Basic Information</SectionLabel>
        <div className="space-y-5">
          <FormField
            label="Full Name"
            name="fullName"
            required
            value={data.fullName}
            onChange={(v) => update('fullName', v)}
            placeholder="Your full name"
            error={fieldErrors.full_name}
            autoComplete="name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            required
            value={data.email}
            onChange={(v) => update('email', v)}
            placeholder="you@example.com"
            error={fieldErrors.email}
            autoComplete="email"
            inputMode="email"
          />
          <FormField
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={data.mobile}
            onChange={(v) => update('mobile', v)}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            inputMode="tel"
            error={fieldErrors.mobile_number}
          />
        </div>
      </div>

      {/* Professional Information */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Professional Information</SectionLabel>
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              label="Current Role"
              name="currentRole"
              value={data.currentRole}
              onChange={(v) => update('currentRole', v)}
              placeholder="e.g. Frontend Engineer"
              error={fieldErrors.current_role}
            />
            <FormField
              label="Years of Experience"
              name="yearsExperience"
              value={data.yearsExperience}
              onChange={(v) => update('yearsExperience', v)}
              placeholder="e.g. 3"
              inputMode="numeric"
              error={fieldErrors.years_of_experience}
            />
          </div>
          <FormField
            label="Experience Level"
            name="experienceLevel"
            type="select"
            value={data.experienceLevel}
            onChange={(v) => update('experienceLevel', v)}
            options={options.experience_level}
            placeholder={optionsLoading ? 'Loading...' : 'Select experience level'}
            error={fieldErrors.experience_level}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Skills</SectionLabel>
        <div className="space-y-5">
          <FormField
            label="Primary Skills"
            name="primarySkills"
            value={data.primarySkills}
            onChange={(v) => update('primarySkills', v)}
            placeholder="e.g. React, TypeScript, CSS"
            hint="Comma-separated list of your strongest skills."
            error={fieldErrors.primary_skills}
          />
          <FormField
            label="Secondary Skills"
            name="secondarySkills"
            value={data.secondarySkills}
            onChange={(v) => update('secondarySkills', v)}
            placeholder="e.g. Node.js, GraphQL, Testing"
            hint="Additional skills you're comfortable with."
            error={fieldErrors.secondary_skills}
          />
        </div>
      </div>

      {/* Career Preferences */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Career Preferences</SectionLabel>
        <div className="space-y-5">
          <FormField
            label="Preferred Location"
            name="preferredLocation"
            value={data.preferredLocation}
            onChange={(v) => update('preferredLocation', v)}
            placeholder="e.g. Bangalore, Mumbai, Remote"
            error={fieldErrors.pref_location}
          />
          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              label="Work Preference"
              name="workPreference"
              type="select"
              value={data.workPreference}
              onChange={(v) => update('workPreference', v)}
              options={options.work_preference}
              placeholder={optionsLoading ? 'Loading...' : 'Select preference'}
              error={fieldErrors.work_preference}
            />
            <FormField
              label="Job Search Status"
              name="jobSearchStatus"
              type="select"
              value={data.jobSearchStatus}
              onChange={(v) => update('jobSearchStatus', v)}
              options={options.job_search_status}
              placeholder={optionsLoading ? 'Loading...' : 'Select status'}
              error={fieldErrors.job_search_status}
            />
          </div>
          <FormField
            label="Notice Period"
            name="noticePeriod"
            type="select"
            value={data.noticePeriod}
            onChange={(v) => update('noticePeriod', v)}
            options={options.notice_period}
            placeholder={optionsLoading ? 'Loading...' : 'Select notice period'}
            error={fieldErrors.notice_period}
          />
        </div>
      </div>

      {/* Professional Links */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Professional Links</SectionLabel>
        <div className="space-y-5">
          <FormField
            label="LinkedIn"
            name="linkedin"
            value={data.linkedin}
            onChange={(v) => update('linkedin', v)}
            placeholder="https://linkedin.com/in/username"
            error={fieldErrors.linkedin_url}
          />
          <FormField
            label="GitHub"
            name="github"
            value={data.github}
            onChange={(v) => update('github', v)}
            placeholder="https://github.com/username"
            error={fieldErrors.github_url}
          />
          <FormField
            label="Portfolio"
            name="portfolio"
            value={data.portfolio}
            onChange={(v) => update('portfolio', v)}
            placeholder="https://yourportfolio.com"
            error={fieldErrors.portfolio_url}
          />
          <FormField
            label="Other relevant link"
            name="otherLink"
            value={data.otherLink}
            onChange={(v) => update('otherLink', v)}
            placeholder="https://..."
            error={fieldErrors.other_relevant_url}
          />
        </div>
      </div>

      {/* Resume */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Resume</SectionLabel>
        <ResumeUploader onFileChange={handleResumeChange} error={fieldErrors.resume} />
      </div>

      {/* Your Information — Privacy/data-use text */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Your Information</SectionLabel>
        <p className="text-sm text-fr-secondary leading-relaxed">
          We collect the information you enter (name, e-mail, [mobile number], professional details, skills, location, work preferences, notice period, links and optional resume) to register you for Fronthyre Early Access, maintain your profile and send you launch updates. We will not share your details with any employer without your separate consent. You can withdraw consent or erase your data at any time at <a href="/privacy-requests" className="text-fr-accent hover:underline">[link]</a>. Read the full <a href="/privacy" className="text-fr-accent hover:underline">Privacy Notice</a>. You may complain to the Data Protection Board of India.
        </p>
      </div>

      {/* Your Consent — 4 checkboxes */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Your Consent</SectionLabel>
        <div className="space-y-6">
          <ConsentCheckbox
            checked={data.ageConfirm}
            onChange={() => toggleCheckbox('ageConfirm')}
            label="Required"
            text="I confirm that I am 18 years of age or older."
            required
            error={fieldErrors.consent_age_18_or_older}
          />
          <ConsentCheckbox
            checked={data.privacyConsent}
            onChange={() => toggleCheckbox('privacyConsent')}
            label="Required"
            text="I have read the Privacy Notice and consent to Fronthyre processing the personal data I submit for Early Access registration and service updates."
            required
            error={fieldErrors.consent_privacy_and_data_processing}
          />
          <ConsentCheckbox
            checked={data.marketingConsent}
            onChange={() => toggleCheckbox('marketingConsent')}
            label="Optional"
            text="I would also like to receive news, offers and event information from Fronthyre by [e-mail / WhatsApp / SMS]. I can unsubscribe at any time."
            required={false}
            error={fieldErrors.consent_marketing_communications}
          />
          <ConsentCheckbox
            checked={data.talentMatchingConsent}
            onChange={() => toggleCheckbox('talentMatchingConsent')}
            label="Optional"
            text="I consent to Fronthyre using my profile to assess and match me with relevant job opportunities when its platform launches. Fronthyre will ask separately before sharing my details with any employer."
            required={false}
            error={fieldErrors.consent_job_matching}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col items-center gap-3">
        <Button
          type="submit"
          size="lg"
          fullWidth
          disabled={status === 'submitting' || optionsLoading}
          rightIcon={status === 'submitting' ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Early Access'}
        </Button>
        <p className="text-xs text-fr-muted text-center">
          Your information is kept private. No public profiles or resume listings.
        </p>
      </div>
    </form>
  );
}
