import {
  ArrowRight,
  Check,
  Users,
  Network,
  Layers,
  Target,
  TrendingUp,
  ShieldAlert,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';
import HeroVisual from '@/components/home/HeroVisual';
import ModernFrontendSkills from '@/components/home/ModernFrontendSkills';
import DeveloperCommunity from '@/components/home/DeveloperCommunity';
import { SITE_CONFIG } from '@/config/site';

const valueProps = [
  {
    icon: Layers,
    title: 'Frontend-First',
    description: 'Designed specifically around the frontend and UI ecosystem.',
  },
  {
    icon: Target,
    title: 'Relevant Opportunities',
    description: 'Built to help professionals discover opportunities relevant to their skills and experience.',
  },
  {
    icon: TrendingUp,
    title: 'Built for a Changing Ecosystem',
    description: 'Frontend technology continues to evolve, and Fronthyre is being designed to evolve with it.',
  },
  {
    icon: Network,
    title: 'Focused Talent Network',
    description: 'A dedicated environment for professionals and companies connected to modern frontend development and digital experiences.',
  },
];

const developerSkills = [
  'Frontend development',
  'UI engineering',
  'Web development',
  'Mobile development',
  'Frontend architecture',
  'Design systems',
  'Accessibility',
  'Performance',
  'Modern frameworks and libraries',
  'Developer tools and frontend technologies',
];

const audienceCards = [
  { label: 'Frontend Developers' },
  { label: 'UI Engineers' },
  { label: 'Mobile Developers' },
  { label: 'Frontend Architects' },
  { label: 'Design Systems Professionals' },
  { label: 'Web & Digital Product Professionals' },
];

export default function FronthyrePage() {
  return (
    <>
      <SEO
        title="Fronthyre — Frontend Talent Network"
        description="Fronthyre is building a frontend-focused talent network for developers and UI professionals working across modern web and mobile technologies."
        path="/fronthyre"
      />

      {/* ===== HERO ===== */}
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
                Fronthyre is building a dedicated talent network for frontend developers, UI engineers, mobile developers, and professionals shaping modern digital experiences.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-delay-2">
                <Button to="/early-access" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Explore Early Access
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-delay-2">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS FRONTHYRE ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="What is Fronthyre?"
            title="A frontend-focused talent network"
          />
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              Fronthyre is a frontend-focused talent network currently in pre-launch.
            </p>
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              The platform is being designed to help professionals across the frontend and UI ecosystem discover relevant career opportunities and help companies connect with talent whose skills align with their frontend and digital product needs.
            </p>
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              Fronthyre is currently developing its initial platform and launch experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY FRONTEND ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why frontend?"
            title="More than a job title"
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              Frontend is more than a job title — it is a broad engineering and product discipline spanning web experiences, mobile interfaces, UI engineering, design systems, accessibility, performance, and evolving technologies.
            </p>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              Fronthyre is being built specifically around this ecosystem rather than treating frontend as just another category within a broad job marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOR DEVELOPERS ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Developers"
            title="Your skills deserve a focused place"
            align="left"
          />
          <div className="mt-10 grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
                Build your professional presence. Discover relevant opportunities. Stay connected to the frontend ecosystem.
              </p>
              <div className="mt-8">
                <Button to="/early-access" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Explore Early Access
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {developerSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-lg bg-fr-card border border-fr-border text-sm font-medium text-fr-text hover:border-fr-border-hover transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR EMPLOYERS ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Employers"
            title="Built around frontend hiring"
            align="left"
          />
          <div className="mt-10 max-w-3xl">
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              Fronthyre is being designed with frontend and UI hiring in mind — helping companies discover professionals across modern frontend technologies, product environments, and skill areas.
            </p>
            <p className="mt-4 text-base text-fr-secondary leading-relaxed">
              Employer-facing capabilities are currently being developed as part of Fronthyre's pre-launch roadmap.
            </p>
            <div className="mt-8">
              <Button to="/early-access" size="lg" variant="outline" rightIcon={<ArrowRight size={18} />}>
                Explore Fronthyre
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO IS IT FOR ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Audience"
            title="Who is Fronthyre for?"
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {audienceCards.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-fr-card border border-fr-border"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                  <Users size={16} className="text-fr-accent" />
                </div>
                <span className="text-sm font-medium text-fr-text">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-fr-secondary leading-relaxed max-w-2xl mx-auto">
            and other professionals working across modern frontend technologies, frameworks, libraries, tools and related disciplines.
          </p>
        </div>
      </section>

      {/* ===== VALUE PROPOSITION ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Value Proposition"
            title="Why Fronthyre"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="group">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Icon size={20} className="text-fr-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-fr-text mb-2">{item.title}</h3>
                  <p className="text-sm text-fr-secondary leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MODERN FRONTEND SKILLS ===== */}
      <section className="border-t border-fr-border">
        <ModernFrontendSkills />
      </section>

      {/* ===== DEVELOPER COMMUNITY ===== */}
      <DeveloperCommunity />

      {/* ===== WHERE ARE WE TODAY ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Current Status"
            title="Where are we today?"
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              Fronthyre is currently in pre-launch.
            </p>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              We are developing the initial Fronthyre experience, including the talent network, professional profiles, opportunity discovery, and employer-facing capabilities.
            </p>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              The platform is not yet fully launched. The Early Access experience is being developed as part of the initial launch process.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S NEXT ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Roadmap"
            title="What's next?"
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              We are working toward launching a dedicated frontend talent network where professionals can:
            </p>
            <ul className="mt-6 space-y-3">
              {['Build their professional presence', 'Discover relevant opportunities', 'Connect with the frontend ecosystem'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                    <Check size={14} className="text-fr-accent" />
                  </div>
                  <span className="text-base text-fr-text">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-fr-secondary leading-relaxed">
              For companies, Fronthyre is working toward an employer experience designed around discovering frontend and UI professionals.
            </p>
            <p className="mt-4 text-base text-fr-secondary leading-relaxed">
              Early Access will provide updates as new Fronthyre capabilities become available.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <section className="py-12 border-t border-fr-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-3 p-5 rounded-xl bg-fr-card border border-fr-border">
            <ShieldAlert size={18} className="text-fr-muted flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-fr-muted leading-relaxed">
                Fronthyre is currently in pre-launch. Fronthyre does not guarantee employment, interviews, job offers, compensation, placement, or any particular outcome from participation in the platform. Availability of features, opportunities, employer services, and other platform capabilities may change as Fronthyre develops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EARLY ACCESS CTA ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-fr-border bg-gradient-to-b from-fr-elevated to-fr-card p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />

            <div className="relative">
              <Badge variant="accent" className="mb-6">Early Access</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fr-text">
                Get in early.
              </h2>
              <p className="mt-4 text-lg text-fr-secondary leading-relaxed max-w-md mx-auto">
                Join the Fronthyre talent network before the platform officially launches.
              </p>
              <div className="mt-8">
                <Button to="/early-access" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Explore Early Access
                </Button>
              </div>
              <p className="mt-4 text-xs text-fr-muted">
                Joining early access does not guarantee a job, interview, placement, or recruiter contact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
