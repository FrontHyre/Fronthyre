import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

const benefits = [
  'Early access',
  'Build your professional profile',
  'Be considered for future opportunities',
  'Stay connected with Fronthyre',
];

export default function EarlyAccessCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-fr-border bg-gradient-to-b from-fr-elevated to-fr-card p-8 sm:p-12 lg:p-16">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-cyan-500/3 blur-[80px] rounded-full" />
          <div className="absolute inset-0 dot-pattern opacity-20" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-accent mb-4 block">
                Early Access
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fr-text">
                Get in early.
              </h2>
              <p className="mt-4 text-lg text-fr-secondary leading-relaxed max-w-md">
                Join the Fronthyre talent network before the platform officially launches.
              </p>
              <div className="mt-8">
                <Button to="/early-access" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Join Early Access
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                    <Check size={14} className="text-fr-accent" />
                  </div>
                  <span className="text-sm sm:text-base text-fr-text">{benefit}</span>
                </div>
              ))}
              <p className="pt-4 text-xs text-fr-muted leading-relaxed">
                Joining early access does not guarantee a job, interview, placement, or recruiter contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
