import { Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import EarlyAccessForm from '@/components/form/EarlyAccessForm';
import Card from '@/components/ui/Card';
import LegalDisclosure from '@/components/ui/LegalDisclosure';

export default function EarlyAccessPage() {
  return (
    <>
      <SEO
        title="Join Early Access — Fronthyre"
        description="Get early access to Fronthyre as we build a frontend-focused talent network for developers and UI professionals."
        path="/early-access"
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-12 pb-8 sm:pt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fr-card border border-fr-border mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fr-accent" />
              </span>
              <span className="text-xs font-mono font-medium text-fr-secondary">Pre-launch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fr-text">
              Get Early Access to Fronthyre
            </h1>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              Be among the first to hear about Fronthyre as we build a focused talent network for the frontend ecosystem.
            </p>
          </div>

          {/* Pre-launch disclosure */}
          <div className="max-w-2xl mx-auto mb-8">
            <LegalDisclosure variant="privacy" title="Pre-launch & privacy information">
              Fronthyre is in pre-launch. If you register, we will store the details you submit securely and use them only as described in our Privacy Notice. Registration is free. It does not guarantee any interview, job, placement or contact from an employer. You can withdraw and delete your data at any time at{' '}
              <Link to="/privacy-requests" className="text-fr-accent hover:underline">Privacy Requests</Link>.
            </LegalDisclosure>
          </div>

          {/* Audience sections */}
          <div className="max-w-3xl mx-auto mb-10 grid sm:grid-cols-2 gap-4">
            <Card hover={false}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                  <Users size={18} className="text-fr-accent" />
                </div>
                <h2 className="text-sm font-semibold text-fr-text">For Frontend Professionals</h2>
              </div>
              <p className="text-sm text-fr-secondary leading-relaxed">
                Build your professional presence and stay informed as Fronthyre develops.
              </p>
            </Card>
            <Card hover={false}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                  <Briefcase size={18} className="text-fr-accent" />
                </div>
                <h2 className="text-sm font-semibold text-fr-text">For Employers</h2>
              </div>
              <p className="text-sm text-fr-secondary leading-relaxed">
                Stay connected as Fronthyre develops its employer-facing experience.
              </p>
            </Card>
          </div>

          <EarlyAccessForm />
        </div>
      </section>
    </>
  );
}
