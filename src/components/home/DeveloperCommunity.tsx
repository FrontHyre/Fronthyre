import { ExternalLink, Users, Info } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const COMMUNITY_URL = 'https://www.linkedin.com/groups/10447580/';

export default function DeveloperCommunity() {
  return (
    <section className="py-20 sm:py-28 border-t border-fr-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Community"
          title="Frontend Developer Community"
          description="Fronthyre manages an independent developer community on LinkedIn® focused on React JS, React Native and modern frontend development."
        />

        <div className="mt-14 max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-fr-border bg-gradient-to-b from-fr-elevated to-fr-card p-8 sm:p-10">
            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full" />
            <div className="absolute inset-0 dot-pattern opacity-10" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                  <Users size={26} className="text-fr-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fr-text">
                    React JS & React Native Developers — India
                  </h3>
                  <p className="mt-1 text-sm text-fr-secondary">
                    A developer community focused on React JS, React Native and modern frontend development.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-8">
                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-fr-text tracking-tight">
                    240K+
                  </p>
                  <p className="mt-1 text-sm text-fr-secondary">members</p>
                  <p className="mt-2 text-xs font-mono text-fr-muted">
                    Community on LinkedIn&reg; · Member count as of October 2026
                  </p>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2">
                  <Button
                    href={COMMUNITY_URL}
                    size="lg"
                    rightIcon={<ExternalLink size={16} />}
                  >
                    Visit the community
                  </Button>
                  <p className="text-[11px] text-fr-muted">
                    Community size shown for reference and may change over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-2xl mx-auto space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-fr-card border border-fr-border text-left">
            <Info size={16} className="text-fr-muted flex-shrink-0 mt-0.5" />
            <p className="text-xs text-fr-secondary leading-relaxed">
              React JS & React Native Developers &mdash; India is an independent professional community on LinkedIn, administered by Fronthyre. It has approximately 240,000 members. Fronthyre and the community are not affiliated with, sponsored or endorsed by LinkedIn Corporation. LinkedIn is a registered trademark of LinkedIn Corporation.
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-fr-card border border-fr-border text-left">
            <Info size={16} className="text-fr-muted flex-shrink-0 mt-0.5" />
            <p className="text-xs text-fr-secondary leading-relaxed">
              React is a trademark of the React Foundation/Linux Foundation. This website is independent and not affiliated with or endorsed by the React Foundation.
            </p>
          </div>
          <p className="text-[11px] font-mono text-fr-muted text-center">
            Technology names are referenced only to describe relevant skills, technologies and areas of expertise. Fronthyre is independently operated and is not affiliated with or endorsed by the respective technology owners unless expressly stated.
          </p>
        </div>
      </div>
    </section>
  );
}
