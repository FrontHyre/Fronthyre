import { Mail, Shield, Calendar, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import LegalDisclosure from '@/components/ui/LegalDisclosure';
import { SocialIcons } from '@/components/ui/SocialIcons';
import { EVENT_CONFIG } from '@/config/event';
import { SITE_CONFIG } from '@/config/site';
import LinkifiedText from '@/components/ui/LinkifiedText';
import { mdLink } from '@/utils/mdLink';

const c = SITE_CONFIG.contacts;

const contactTypes = [
  {
    icon: MessageSquare,
    title: 'General Enquiries',
    description: 'Questions about Fronthyre, the Early Access network, or anything else.',
    contact: c.general,
  },
  {
    icon: Shield,
    title: 'Privacy / Data Enquiries',
    description: 'Requests to access, correct, or delete your personal data, or withdraw consent.',
    contact: c.privacy,
  },
  {
    icon: Mail,
    title: 'Early Access Enquiries',
    description: 'Questions about Early Access, the pre-launch service, or your profile choices.',
    contact: c.general,
  },
  {
    icon: Calendar,
    title: 'Buildathon / Event Enquiries',
    description: 'Questions about the Buildathon, eligibility, prizes or judging should be sent to NitroStack. Registration is handled by NitroStack.',
    contact: c.buildathon,
    isBuildathon: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact — Fronthyre"
        description="Get in touch with the Fronthyre team. General, privacy, and buildathon enquiries."
        path="/contact"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-16 sm:pt-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fr-text">
              Contact
            </h1>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              Have a question about Fronthyre or the Early Access network? We'd love to hear from you.
            </p>
            <p className="mt-3 text-sm text-fr-muted">Fronthyre is currently in pre-launch.</p>
          </div>

          {/* Contact types */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch">
            {contactTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <Card
                  key={i}
                  hover={false}
                  padding="lg"
                  className={`flex h-full min-h-0 flex-col ${type.isBuildathon ? 'border-cyan-500/20' : ''}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon size={20} className="text-fr-accent" />
                  </div>
                  <h2 className="mt-5 text-base font-semibold leading-snug text-fr-text">
                    {type.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fr-secondary">
                    {type.description}
                  </p>
                  <div className="mt-5 shrink-0 space-y-3 border-t border-fr-border/60 pt-5">
                    <LinkifiedText
                      text={mdLink('Connect with us', type.contact)}
                      as="p"
                      className="text-sm"
                    />
                    {type.isBuildathon && (
                      <p className="text-xs font-medium leading-relaxed text-fr-accent">
                        Fronthyre is a promotional partner and does not operate the event.
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Buildathon contact disclosure */}
          <div className="mt-8 max-w-2xl mx-auto">
            <LegalDisclosure variant="info" title="Buildathon enquiries">
              {`Questions about the Buildathon, eligibility, prizes or judging should be sent to NitroStack — ${mdLink('Connect with us', SITE_CONFIG.contacts.buildathon)}. Registration is handled by NitroStack on ${mdLink('Community', EVENT_CONFIG.registrationUrl)}. Fronthyre is a promotional partner and does not operate the event.`}
            </LegalDisclosure>
          </div>

          {/* Quick links */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card hover={false} padding="md">
              <h3 className="text-sm font-semibold text-fr-text mb-4">Quick links</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Button to="/early-access" variant="secondary" size="sm" fullWidth>
                  Join Early Access
                </Button>
                <Button to="/buildathon" variant="secondary" size="sm" fullWidth>
                  View Buildathon
                </Button>
                <Button to="/about" variant="ghost" size="sm" fullWidth>
                  About Fronthyre
                </Button>
                <Button to="/privacy" variant="ghost" size="sm" fullWidth>
                  Privacy Policy
                </Button>
              </div>
            </Card>
          </div>

          {/* Social */}
          <div className="mt-8 max-w-2xl mx-auto text-center">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-muted mb-4">
              Follow Fronthyre
            </h3>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
            <p className="mt-3 text-xs text-fr-muted">Social links will be activated — Stay Tuned with us!</p>
          </div>
        </div>
      </section>
    </>
  );
}
