import { useState, useCallback } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import FormField from './FormField';
import ResumeUploader from './ResumeUploader';
import SuccessState from './SuccessState';
import Button from '@/components/ui/Button';

interface FormData {
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

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialData: FormData = {
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

const experienceLevels = [
  { value: 'entry', label: 'Entry (0-1 years)' },
  { value: 'junior', label: 'Junior (1-3 years)' },
  { value: 'mid', label: 'Mid (3-5 years)' },
  { value: 'senior', label: 'Senior (5-8 years)' },
  { value: 'lead', label: 'Lead / Staff (8+ years)' },
];

const workPreferences = [
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'onsite', label: 'On-site' },
  { value: 'open', label: 'Open to all' },
];

const jobSearchStatuses = [
  { value: 'actively', label: 'Actively looking' },
  { value: 'passively', label: 'Passively exploring' },
  { value: 'not-looking', label: 'Not looking right now' },
];

const noticePeriods = [
  { value: 'immediate', label: 'Immediately available' },
  { value: '15', label: '15 days' },
  { value: '30', label: '30 days' },
  { value: '60', label: '60 days' },
  { value: '90', label: '90 days' },
];

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
  const [data, setData] = useState<FormData>(initialData);
  const [, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = useCallback((key: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }, [errors]);

  const toggleCheckbox = useCallback((key: keyof FormData) => {
    setData((prev) => ({ ...prev, [key]: !prev[key] }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }, [errors]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!data.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!data.ageConfirm) {
      newErrors.ageConfirm = 'Please confirm you are 18 years of age or older.';
    }
    if (!data.privacyConsent) {
      newErrors.privacyConsent = 'Please read the Privacy Notice and provide consent to continue.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1800);
  };

  if (status === 'success') {
    return <SuccessState />;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto" noValidate>
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
            error={errors.fullName}
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
            error={errors.email}
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
            />
            <FormField
              label="Years of Experience"
              name="yearsExperience"
              value={data.yearsExperience}
              onChange={(v) => update('yearsExperience', v)}
              placeholder="e.g. 3"
              inputMode="numeric"
            />
          </div>
          <FormField
            label="Experience Level"
            name="experienceLevel"
            type="select"
            value={data.experienceLevel}
            onChange={(v) => update('experienceLevel', v)}
            options={experienceLevels}
            placeholder="Select experience level"
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
          />
          <FormField
            label="Secondary Skills"
            name="secondarySkills"
            value={data.secondarySkills}
            onChange={(v) => update('secondarySkills', v)}
            placeholder="e.g. Node.js, GraphQL, Testing"
            hint="Additional skills you're comfortable with."
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
          />
          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              label="Work Preference"
              name="workPreference"
              type="select"
              value={data.workPreference}
              onChange={(v) => update('workPreference', v)}
              options={workPreferences}
              placeholder="Select preference"
            />
            <FormField
              label="Job Search Status"
              name="jobSearchStatus"
              type="select"
              value={data.jobSearchStatus}
              onChange={(v) => update('jobSearchStatus', v)}
              options={jobSearchStatuses}
              placeholder="Select status"
            />
          </div>
          <FormField
            label="Notice Period"
            name="noticePeriod"
            type="select"
            value={data.noticePeriod}
            onChange={(v) => update('noticePeriod', v)}
            options={noticePeriods}
            placeholder="Select notice period"
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
          />
          <FormField
            label="GitHub"
            name="github"
            value={data.github}
            onChange={(v) => update('github', v)}
            placeholder="https://github.com/username"
          />
          <FormField
            label="Portfolio"
            name="portfolio"
            value={data.portfolio}
            onChange={(v) => update('portfolio', v)}
            placeholder="https://yourportfolio.com"
          />
          <FormField
            label="Other relevant link"
            name="otherLink"
            value={data.otherLink}
            onChange={(v) => update('otherLink', v)}
            placeholder="https://..."
          />
        </div>
      </div>

      {/* Resume */}
      <div className="card-fr p-6 sm:p-8 mb-6">
        <SectionLabel>Resume</SectionLabel>
        <ResumeUploader onFileChange={setResume} />
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
            error={errors.ageConfirm}
          />
          <ConsentCheckbox
            checked={data.privacyConsent}
            onChange={() => toggleCheckbox('privacyConsent')}
            label="Required"
            text="I have read the Privacy Notice and consent to Fronthyre processing the personal data I submit for Early Access registration and service updates."
            required
            error={errors.privacyConsent}
          />
          <ConsentCheckbox
            checked={data.marketingConsent}
            onChange={() => toggleCheckbox('marketingConsent')}
            label="Optional"
            text="I would also like to receive news, offers and event information from Fronthyre by [e-mail / WhatsApp / SMS]. I can unsubscribe at any time."
            required={false}
          />
          <ConsentCheckbox
            checked={data.talentMatchingConsent}
            onChange={() => toggleCheckbox('talentMatchingConsent')}
            label="Optional"
            text="I consent to Fronthyre using my profile to assess and match me with relevant job opportunities when its platform launches. Fronthyre will ask separately before sharing my details with any employer."
            required={false}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col items-center gap-3">
        <Button
          type="submit"
          size="lg"
          fullWidth
          disabled={status === 'submitting'}
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
