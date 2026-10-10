import { useState } from 'react';
import { CheckCircle2, ShieldQuestion, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/config/site';

const requestTypes = ['Access my data', 'Correct my data', 'Update my data', 'Delete my data', 'Withdraw consent', 'Grievance', 'Other privacy request'];

const privacyRights = [
  { label: 'a', text: 'Access a summary of your personal data' },
  { label: 'b', text: 'Correct or update it' },
  { label: 'c', text: 'Erase it' },
  { label: 'd', text: 'Withdraw consent (as easily as it was given)' },
  { label: 'e', text: 'Nominate another person to exercise your rights in the event of death or incapacity' },
  { label: 'f', text: 'Raise a grievance' },
];

export default function PrivacyRequestsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [requestType, setRequestType] = useState(requestTypes[0]);
  const [email, setEmail] = useState('');

  return (
    <>
      <SEO title="Privacy Requests — Fronthyre" description="Exercise your privacy rights with Fronthyre — access, correct, erase, withdraw consent, or raise a grievance." path="/privacy-requests" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-20" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-10 sm:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-warning mb-5">Privacy support</p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fr-text">Privacy Requests</h1>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">Choose what you need and we&rsquo;ll show the intended request flow for the Fronthyre design.</p>
          </div>
        </div>
      </section>

      {/* Privacy rights section */}
      <section className="pb-6">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Card hover={false} padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <ShieldCheck className="text-fr-success flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-semibold text-fr-text">Your privacy rights</h2>
                <p className="mt-2 text-sm text-fr-secondary leading-relaxed">
                  You may at any time:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {privacyRights.map((right) => (
                    <li key={right.label} className="flex items-start gap-3">
                      <span className="text-xs font-mono font-semibold text-fr-accent mt-0.5 flex-shrink-0">({right.label})</span>
                      <span className="text-sm text-fr-secondary leading-relaxed">{right.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 p-3 rounded-xl bg-fr-elevated border border-fr-border">
                  <Mail size={16} className="text-fr-accent flex-shrink-0" />
                  <span className="text-sm text-fr-secondary">Email </span>
                  <a href="mailto:support@fronthyre.com" className="text-sm text-fr-accent hover:underline font-medium">support@fronthyre.com</a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Request form */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-5">
          {submitted ? (
            <Card hover={false} padding="lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-fr-success flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-xl font-semibold text-fr-text">Request received in the prototype</h2>
                  <p className="mt-3 text-sm text-fr-secondary leading-relaxed">This is a simulated success state. No request was transmitted. Your identity may need to be verified before a request is processed.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-5 text-sm font-medium text-fr-accent hover:underline">Submit another request</button>
                </div>
              </div>
            </Card>
          ) : (
            <Card hover={false} padding="lg">
              <div className="flex items-start gap-4 mb-6">
                <ShieldQuestion className="text-fr-accent flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-xl font-semibold text-fr-text">How can we help?</h2>
                  <p className="mt-2 text-sm text-fr-secondary">You can request access, correction, update, deletion, consent withdrawal, grievance handling, or another privacy action.</p>
                </div>
              </div>
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <label className="block">
                  <span className="text-sm font-medium text-fr-text">Request type</span>
                  <select value={requestType} onChange={(event) => setRequestType(event.target.value)} className="mt-2 w-full rounded-xl border border-fr-border bg-fr-elevated px-4 py-3 text-sm text-fr-text focus:border-fr-accent focus:outline-none">
                    {requestTypes.map((type) => <option key={type}>{type}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-fr-text">Email</span>
                  <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-fr-border bg-fr-elevated px-4 py-3 text-sm text-fr-text placeholder:text-fr-muted focus:border-fr-accent focus:outline-none" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-fr-text">Details</span>
                  <textarea rows={5} placeholder="Tell us what you need help with" className="mt-2 w-full rounded-xl border border-fr-border bg-fr-elevated px-4 py-3 text-sm text-fr-text placeholder:text-fr-muted focus:border-fr-accent focus:outline-none" />
                </label>
                <Button type="submit" fullWidth>Submit privacy request</Button>
              </form>
            </Card>
          )}
          <Card hover={false} padding="md">
            <p className="text-sm text-fr-secondary leading-relaxed">Identity verification may be required before a request is processed. Privacy contact: {SITE_CONFIG.contacts.privacyContact}. Grievance Officer: {SITE_CONFIG.contacts.grievanceOfficer}.</p>
            <p className="mt-3 text-xs text-fr-muted">Response timelines and final contact details: [Final legal wording to be inserted].</p>
          </Card>
          <div className="flex flex-wrap gap-3">
            <Link to="/privacy" className="text-sm text-fr-accent hover:underline">Privacy Policy</Link>
            <span className="text-fr-muted">·</span>
            <Link to="/contact" className="text-sm text-fr-accent hover:underline">Contact</Link>
            <span className="text-fr-muted">·</span>
            <Link to="/terms" className="text-sm text-fr-accent hover:underline">Terms</Link>
            <span className="text-fr-muted">·</span>
            <Link to="/cookie-policy" className="text-sm text-fr-accent hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </>
  );
}
