import { ArrowRight, Users, Briefcase, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import LegalDisclosure from '@/components/ui/LegalDisclosure';

const sections: { label?: string; title: string; body: string; note?: string }[] = [
  {
    title: 'What is Fronthyre?',
    body: 'Fronthyre is a frontend-focused talent network being built for professionals across the frontend and UI ecosystem. The platform is designed to help frontend talent discover relevant career opportunities and help companies connect with professionals with frontend-focused skills. Fronthyre is currently in pre-launch.',
  },
  {
    title: 'Why frontend?',
    body: 'Frontend is more than a job title — it is a broad engineering and product discipline spanning web experiences, mobile interfaces, UI engineering, design systems, accessibility, performance, and many evolving technologies. Fronthyre is being built specifically around this ecosystem rather than treating frontend as just another category within a broad job marketplace.',
  },
  {
    title: 'Who is it for?',
    body: 'Fronthyre is for frontend developers, UI engineers, mobile developers, frontend architects, and other professionals working across modern web, mobile, UI, frameworks, libraries, tools, and frontend technology stacks.',
    note: 'Technology coverage is intentionally broad and will evolve with the frontend ecosystem.',
  },
  {
    label: 'For companies',
    title: 'Built with frontend hiring in mind',
    body: 'Fronthyre is being designed to help companies discover frontend and UI professionals across a broad range of modern technology stacks and skill areas. Employer-facing capabilities are currently being developed as part of the platform\u2019s pre-launch roadmap.',
  },
  {
    title: 'Where are we today?',
    body: 'Fronthyre is currently in pre-launch. The Early Access experience is being developed as part of the platform\u2019s initial launch. The full talent network and opportunity-discovery experience are still being built.',
  },
  {
    title: "What's next?",
    body: 'Fronthyre is working toward launching a dedicated frontend talent network where professionals can build their presence, discover relevant opportunities, and stay connected with the evolving frontend ecosystem. Early Access is intended to provide updates as Fronthyre develops and launches new capabilities.',
    note: 'Features described are planned and may change. Fronthyre does not guarantee any interview, job offer or placement.',
  },
];

const buildingAreas = [
  {
    icon: Users,
    title: 'For Frontend Professionals',
    description: 'A focused professional environment.',
  },
  {
    icon: Briefcase,
    title: 'For Employers',
    description: 'A frontend-focused talent discovery experience.',
  },
  {
    icon: Globe,
    title: 'For the Ecosystem',
    description: 'A place designed around the evolving frontend technology landscape.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About — Fronthyre"
        description="Fronthyre is building a focused talent network for the frontend ecosystem. Learn about what we're building and why."
        path="/about"
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-12 sm:pt-24">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="accent" className="mb-6">About Fronthyre</Badge>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fr-text">
              Building a focused talent network for the frontend ecosystem.
            </h1>
            <p className="mt-6 text-lg text-fr-secondary leading-relaxed">
              Fronthyre is being built around the rapidly evolving frontend and UI ecosystem. Frontend professionals increasingly work across web, mobile, UI engineering, design systems, accessibility, performance and many technologies. Fronthyre aims to create a focused environment for professionals and companies connected to this ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHERE WE ARE TODAY ===== */}
      <section className="py-16 sm:py-24 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Current Status"
            title="Where we are today"
          />
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              Fronthyre is currently in pre-launch. The talent network, professional experience, opportunity discovery and employer-facing capabilities are being developed.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE ARE BUILDING ===== */}
      <section className="py-16 sm:py-24 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Are Building"
            title="Three focus areas"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {buildingAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <Card key={i} hover={false}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-5">
                    <Icon size={22} className="text-fr-accent" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-fr-text">{area.title}</h3>
                    <Badge variant="accent">PLANNED</Badge>
                  </div>
                  <p className="text-sm text-fr-secondary leading-relaxed">{area.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <LegalDisclosure variant="info" title="Planned features">
              Features described are planned and may change. Fronthyre does not guarantee any interview, job offer or placement.
            </LegalDisclosure>
          </div>
        </div>
      </section>

      {/* ===== DETAILED SECTIONS ===== */}
      <section className="py-16 sm:py-24 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((section, i) => (
              <Card key={i} hover={false} padding="lg">
                {section.label && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 block">
                    {section.label}
                  </span>
                )}
                <h2 className="text-xl font-semibold text-fr-text mb-3">{section.title}</h2>
                <p className="text-base text-fr-secondary leading-relaxed">{section.body}</p>
                {section.note && (
                  <p className="mt-3 text-sm text-fr-muted leading-relaxed italic">{section.note}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 sm:py-24 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-fr-border bg-gradient-to-b from-fr-elevated to-fr-card p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative">
              <SectionHeading
                title="Join the network"
                description="Be among the first frontend professionals to join Fronthyre."
              />
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/early-access" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Join Early Access
                </Button>
                <Button to="/fronthyre" size="lg" variant="outline" rightIcon={<ArrowRight size={18} />}>
                  Explore Fronthyre
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
