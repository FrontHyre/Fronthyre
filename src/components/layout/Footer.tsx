import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/config/site';
import Logo from '@/components/brand/Logo';
import { SocialIcons } from '@/components/ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-fr-border bg-fr-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Logo variant="footer" showStatus={false} showTagline={false} />
            <SocialIcons className="mt-5" />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-muted mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {SITE_CONFIG.footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-fr-secondary hover:text-fr-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-muted mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {SITE_CONFIG.footerLegal.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-fr-secondary hover:text-fr-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-fr-card border border-fr-border">
          <p className="text-xs font-medium text-fr-text leading-relaxed">
            Organised by NitroStack, in association with Fronthyre.
          </p>
          <p className="mt-1 text-xs text-fr-muted leading-relaxed">
            NitroStack handles Buildathon registration, Official Rules, judging, participant support, and prizes. Fronthyre is a promotional partner only.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-fr-border">
          <p className="text-xs text-fr-muted leading-relaxed">
            &copy; 2026 Fronthyre is a pre-launch service.
          </p>
        </div>
      </div>
    </footer>
  );
}
