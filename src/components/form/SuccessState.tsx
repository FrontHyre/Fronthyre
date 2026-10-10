import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function SuccessState() {
  return (
    <div className="max-w-lg mx-auto text-center py-12">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 animate-scale-in">
            <svg viewBox="0 0 52 52" className="w-10 h-10">
              <circle
                cx="26"
                cy="26"
                r="24"
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
                opacity="0.3"
                className="animate-draw"
              />
              <path
                d="M16 27 L23 34 L37 18"
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw"
              />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-fr-text tracking-tight animate-fade-in-up">
        You're on the Fronthyre Early Access list.
      </h2>
      <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed animate-fade-in-delay-1">
        Thank you for joining Fronthyre. We&rsquo;ll keep you informed about launch updates and opportunities.
      </p>
      <p className="mt-3 text-sm text-fr-muted animate-fade-in-delay-2">
        Fronthyre is currently in pre-launch.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
        <Button to="/buildathon" variant="secondary" size="lg">
          Back to Home
        </Button>
        <Button to="/fronthyre" size="lg" rightIcon={<ArrowRight size={18} />}>
          Explore Fronthyre
        </Button>
      </div>
    </div>
  );
}
