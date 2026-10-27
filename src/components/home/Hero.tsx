import { ArrowRight, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import HeroVisual from './HeroVisual';
import { SITE_CONFIG } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern fade-mask-b opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fr-card border border-fr-border mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fr-accent" />
              </span>
              <span className="text-xs font-mono font-medium text-fr-secondary">
                {SITE_CONFIG.status}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] animate-fade-in-up whitespace-pre-line">
              <span className="text-fr-text">Frontend talent.</span>
              {'\n'}
              <span className="text-accent-gradient">Better opportunities.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-fr-secondary leading-relaxed max-w-xl animate-fade-in-delay-1">
              {SITE_CONFIG.heroSubtext}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-delay-2">
              <Button to="/early-access" size="lg" rightIcon={<ArrowRight size={18} />}>
                Join Early Access
              </Button>
              <Button to="/buildathon" size="lg" variant="secondary" leftIcon={<Calendar size={18} />}>
                Explore Buildathon
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 animate-fade-in-delay-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-fr-muted">What</span>
                <span className="text-sm text-fr-secondary">Frontend talent network</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-fr-border" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-fr-muted">Where</span>
                <span className="text-sm text-fr-secondary">India</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-fr-border" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-fr-muted">Who</span>
                <span className="text-sm text-fr-secondary">Frontend professionals</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-delay-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
