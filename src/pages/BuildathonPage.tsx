import {
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  Globe,
  User,
  Code2,
  Trophy,
  Briefcase,
  Rocket,
  Users,
  ShieldAlert,
  Zap,
  Terminal,
  Network,
  Cpu,
  GitBranch,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQ from '@/components/ui/FAQ';
import LegalDisclosure from '@/components/ui/LegalDisclosure';
import NitroStackLogo from '@/components/brand/NitroStackLogo';
import FronthyreBrandLockup from '@/components/brand/FronthyreBrandLockup';
import { useLocation } from 'react-router-dom';
import { EVENT_CONFIG } from '@/config/event';

const eventInfoItems = [
  { icon: Calendar, label: 'Date', value: EVENT_CONFIG.eventDates },
  { icon: Clock, label: 'Duration', value: EVENT_CONFIG.duration },
  { icon: Globe, label: 'Format', value: EVENT_CONFIG.mode },
  { icon: User, label: 'Participation', value: EVENT_CONFIG.participation },
];

const whyJoinIcons = [Code2, Trophy, Briefcase, Rocket, Users];

export default function BuildathonPage() {
  const { pathname } = useLocation();
  const seoPath = pathname === '/' ? '/' : '/buildathon';

  return (
    <>
      <SEO
        title="NitroStack Buildathon — MCP to the Moon | Fronthyre"
        description="A 3-day online solo Buildathon organised by NitroStack, promoted by Fronthyre. October 30 – November 1, 2026. Register on NitroStack."
        path={seoPath}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/8 blur-[140px] rounded-full" />
        <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full" />

        {/* Floating tech icons */}
        <div className="absolute top-[18%] left-[8%] hidden lg:block">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-fr-card border border-fr-border opacity-40 hover:opacity-70 transition-opacity duration-700">
            <Terminal size={24} className="text-fr-accent" />
          </div>
        </div>
        <div className="absolute top-[30%] right-[10%] hidden lg:block">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-fr-card border border-fr-border opacity-30 hover:opacity-60 transition-opacity duration-700 delay-100">
            <Network size={20} className="text-fr-accent" />
          </div>
        </div>
        <div className="absolute bottom-[22%] left-[12%] hidden lg:block">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-fr-card border border-fr-border opacity-30 hover:opacity-60 transition-opacity duration-700 delay-200">
            <Cpu size={20} className="text-fr-accent" />
          </div>
        </div>
        <div className="absolute bottom-[30%] right-[8%] hidden lg:block">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-fr-card border border-fr-border opacity-40 hover:opacity-70 transition-opacity duration-700 delay-300">
            <GitBranch size={24} className="text-fr-accent" />
          </div>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="text-center max-w-3xl mx-auto">
            {/* Partner lockup */}
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-fr-card border border-cyan-500/20 mb-8 animate-fade-in">
              <span aria-label="Fronthyre">
                <FronthyreBrandLockup size="compact" />
              </span>
              <span className="text-sm font-mono font-semibold text-fr-muted">×</span>
              <div className="flex items-center gap-2">
                <img
                  src="/assets/brand/Logo_(2).svg"
                  alt="NitroStack"
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain rounded-lg shrink-0"
                />
                <span className="text-sm sm:text-base font-semibold text-fr-text whitespace-nowrap">
                  NitroStack
                </span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight leading-[0.95] animate-fade-in-up">
              <span className="text-accent-gradient">{EVENT_CONFIG.heroHeadline}</span>
            </h1>

            <div className="flex justify-center mt-8 mb-6 animate-fade-in-up">
              <img
                src="/assets/brand/Mcp_to_the_moon_or_BD-8.png"
                alt="MCP to the Moon"
                className="w-full max-w-[170px] sm:max-w-[210px] h-auto object-contain"
              />
            </div>

            {/* Supporting headline */}
            <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-semibold text-fr-text tracking-tight animate-fade-in-delay-1">
              {EVENT_CONFIG.heroSupportingHeadline}
            </p>

            {/* Supporting description */}
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed max-w-2xl mx-auto animate-fade-in-delay-2">
              {EVENT_CONFIG.heroDescription}
            </p>
            <p className="mt-5 text-sm font-medium text-fr-text animate-fade-in-delay-2">
              {EVENT_CONFIG.organiserAttribution}
            </p>

            {/* Event info row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-in-delay-2">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-fr-card border border-fr-border">
                <Calendar size={16} className="text-fr-accent" />
                <span className="text-sm font-semibold text-fr-text">{EVENT_CONFIG.eventDatesShort}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-fr-card border border-fr-border">
                <Clock size={16} className="text-fr-accent" />
                <span className="text-sm font-semibold text-fr-text">{EVENT_CONFIG.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-fr-card border border-fr-border">
                <Globe size={16} className="text-fr-accent" />
                <span className="text-sm font-semibold text-fr-text">{EVENT_CONFIG.mode}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-fr-card border border-fr-border">
                <User size={16} className="text-fr-accent" />
                <span className="text-sm font-semibold text-fr-text">{EVENT_CONFIG.participation}</span>
              </div>
            </div>

            {/* Primary CTA with external registration */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
              <Button
                href={EVENT_CONFIG.registrationUrl}
                size="lg"
                rightIcon={<ExternalLink size={20} />}
                className="text-base sm:text-lg px-10 sm:px-12 py-4 sm:py-5 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
              >
                Register for the Buildathon
              </Button>
              <Button href={EVENT_CONFIG.officialRulesUrl} size="md" variant="secondary" rightIcon={<ExternalLink size={16} />}>
                View Official Rules
              </Button>
            </div>
            <p className="mt-4 text-xs text-fr-muted animate-fade-in-delay-3 max-w-md mx-auto">
              {EVENT_CONFIG.registrationNote}
            </p>

            {/* Event disclosure card */}
            <div className="mt-8 max-w-2xl mx-auto text-left animate-fade-in-delay-3">
              <LegalDisclosure variant="info" title="Important event information">
                {EVENT_CONFIG.eventDisclosure}
              </LegalDisclosure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVENT INFORMATION ===== */}
      <section className="py-16 sm:py-20 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {eventInfoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-fr-card border border-fr-border hover:border-fr-border-hover transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
                    <Icon size={22} className="text-fr-accent" />
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-muted mb-2">
                    {item.label}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-fr-text">{item.value}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm text-fr-secondary leading-relaxed max-w-2xl mx-auto">
            {EVENT_CONFIG.eventInfoNote}
          </p>
        </div>
      </section>

      {/* ===== ABOUT THE BUILDATHON ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="About the Buildathon"
          />
          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-fr-secondary leading-relaxed">
              {EVENT_CONFIG.aboutDescription}
            </p>
            <div className="mt-6">
              <LegalDisclosure variant="info" title="Event organiser">
                {EVENT_CONFIG.aboutLegalPositioning}
              </LegalDisclosure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVENT DETAILS ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Details" title="Everything you need to know" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['Eligibility', EVENT_CONFIG.eligibility],
              ['Submission', EVENT_CONFIG.submission],
              ['Judging', EVENT_CONFIG.judging],
              ['Prizes', EVENT_CONFIG.prizes],
            ].map(([title, description]) => (
              <Card key={title} hover={false}>
                <h3 className="text-base font-semibold text-fr-text mb-3">{title}</h3>
                <p className="text-sm text-fr-secondary leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            <LegalDisclosure variant="info" title="Prizes">
              {EVENT_CONFIG.prizeDisclosure}
            </LegalDisclosure>
            <LegalDisclosure variant="info" title="Judging">
              {EVENT_CONFIG.judgingDisclosure}
            </LegalDisclosure>
          </div>
          <p className="mt-6 text-center text-xs text-fr-muted leading-relaxed max-w-3xl mx-auto">
            {EVENT_CONFIG.communityPromotion}
          </p>
        </div>
      </section>

      {/* ===== WHY JOIN THE BUILDATHON ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="Why Join the Buildathon?"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENT_CONFIG.whyJoin.map((item, i) => {
              const Icon = whyJoinIcons[i] ?? Code2;
              const isLast = i === EVENT_CONFIG.whyJoin.length - 1;
              return (
                <Card
                  key={i}
                  className={isLast ? 'sm:col-span-2 lg:col-span-1' : ''}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                      <Icon size={20} className="text-fr-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-fr-accent">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-fr-text mb-2">{item.title}</h3>
                      <p className="text-sm text-fr-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== EVENT FLOW ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="Event Flow"
            description="From registration to closing — your Buildathon journey."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fr-border to-transparent" />
            {EVENT_CONFIG.howItWorks.map((item) => (
              <Card key={item.step} hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-mono font-bold text-fr-accent">{item.step}</span>
                  <span className="w-px h-8 bg-fr-border" />
                  <h3 className="text-base font-semibold text-fr-text">{item.title}</h3>
                </div>
                <p className="text-sm text-fr-secondary leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <LegalDisclosure variant="info" title="Judging">
              {EVENT_CONFIG.judgingDisclosure}
            </LegalDisclosure>
          </div>
        </div>
      </section>

      {/* ===== EVENT TIMELINE ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Timeline"
            title="Three Days of Building"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fr-border to-transparent" />
            {EVENT_CONFIG.timeline.map((item, i) => (
              <div key={i} className="relative">
                <Card>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-accent">
                      {item.day}
                    </span>
                    <span className="text-xs text-fr-muted">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fr-text mb-2">{item.title}</h3>
                  <p className="text-sm text-fr-secondary leading-relaxed">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BUILD WITH NITROSTACK ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology"
            title="Build with NitroStack"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <Card hover={false} padding="lg" className="text-center">
              <div className="flex justify-center mb-6">
                <NitroStackLogo size="lg" />
              </div>
              <p className="text-base sm:text-lg text-fr-text leading-relaxed font-medium">
                {EVENT_CONFIG.nitrostackInfo}
              </p>
              <p className="mt-4 text-sm text-fr-secondary leading-relaxed">
                Participants build using NitroStack technology during the Buildathon.
              </p>

              {/* Token allocation highlight */}
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <Zap size={18} className="text-fr-accent" />
                <span className="text-sm font-semibold text-fr-text">
                  [1.5 million] NitroStack Tokens
                </span>
              </div>
              <p className="mt-3 text-xs text-fr-muted leading-relaxed">
                {EVENT_CONFIG.nitrostackTokenAllocation}
              </p>
            </Card>

            <div className="mt-6">
              <LegalDisclosure variant="warning" title="Third-party platform">
                {EVENT_CONFIG.nitrostackThirdPartyDisclosure}
              </LegalDisclosure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTICIPANT RESPONSIBILITY ===== */}
      <section className="py-12 border-t border-fr-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <LegalDisclosure variant="info" title="Participant responsibility">
            {EVENT_CONFIG.participantResponsibility}
          </LegalDisclosure>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-fr-elevated to-fr-card p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-cyan-500/8 blur-[100px] rounded-full" />
            <div className="absolute inset-0 dot-pattern opacity-20" />

            <div className="relative text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Calendar size={14} className="text-fr-accent" />
                <span className="text-xs font-mono font-semibold text-fr-accent">{EVENT_CONFIG.eventDatesShort}</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fr-text">
                {EVENT_CONFIG.finalCtaHeading}
              </h2>
              <p className="mt-6 text-lg text-fr-secondary leading-relaxed">
                {EVENT_CONFIG.finalCtaDescription}
              </p>

              {/* Primary CTA — external registration */}
              <div className="mt-10 space-y-4">
                <div className="flex flex-col items-center gap-3">
                  <Button
                    href={EVENT_CONFIG.registrationUrl}
                    size="lg"
                    rightIcon={<ExternalLink size={20} />}
                    className="text-base sm:text-lg px-10 sm:px-12 py-4 sm:py-5 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
                  >
                    Register for the Buildathon
                  </Button>
                  <p className="text-xs text-fr-muted">
                    Opens NitroStack&rsquo;s registration page — external site
                  </p>
                </div>

                {/* Secondary CTA — Fronthyre Early Access */}
                <div className="flex flex-col items-center gap-3 pt-2">
                  <p className="text-xs text-fr-muted">Optional:</p>
                  <Button to="/early-access" size="md" variant="outline" rightIcon={<ArrowRight size={16} />}>
                    Join the Fronthyre Early Access list
                  </Button>
                </div>

                <p className="text-sm text-fr-secondary leading-relaxed max-w-lg mx-auto">
                  {EVENT_CONFIG.dualCtaStatement}
                </p>
              </div>

              {/* External registration disclosure */}
              <div className="mt-8 text-left">
                <LegalDisclosure variant="external" title="External registration & privacy">
                  {EVENT_CONFIG.externalRegistrationDisclosure}
                </LegalDisclosure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <section className="py-12 border-t border-fr-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-3 p-5 rounded-xl bg-fr-card border border-fr-border">
            <ShieldAlert size={18} className="text-fr-muted flex-shrink-0 mt-0.5" />
            <p className="text-xs text-fr-muted leading-relaxed">
              {EVENT_CONFIG.finalDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 sm:py-28 border-t border-fr-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FAQ items={[...EVENT_CONFIG.faq]} title="Buildathon FAQ" />
          <div className="mt-10 text-center">
            <Button
              href={EVENT_CONFIG.registrationUrl}
              size="lg"
              rightIcon={<ExternalLink size={18} />}
            >
              Register for the Buildathon
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
