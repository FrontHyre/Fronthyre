import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { EVENT_CONFIG } from '@/config/event';
import Button from '@/components/ui/Button';
import Logo from '@/components/brand/Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-fr-bg/80 backdrop-blur-xl border-b border-fr-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo variant="header" showStatus={false} showTagline={false} className="mr-2 max-w-[58%] sm:max-w-none md:mr-0" />

          <div className="hidden md:flex items-center gap-1">
            {SITE_CONFIG.nav.map((item) => {
              const isActive = location.pathname === item.path;
              const isCampaign = 'campaign' in item && item.campaign;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-fr-text bg-fr-card'
                      : 'text-fr-secondary hover:text-fr-text hover:bg-fr-card/50'
                  } ${isCampaign && !isActive ? 'text-fr-accent' : ''}`}
                >
                  {item.label}
                  {isCampaign && (
                    <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-fr-accent animate-pulse align-middle" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button href={EVENT_CONFIG.registrationUrl} size="sm" rightIcon={<ExternalLink size={14} />} className="shadow-lg shadow-cyan-500/20">
              Register for Buildathon
            </Button>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-fr-text hover:bg-fr-card transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-fr-border bg-fr-bg/95 backdrop-blur-xl animate-slide-down">
          <div className="px-6 py-6 space-y-1">
            {SITE_CONFIG.nav.map((item) => {
              const isActive = location.pathname === item.path;
              const isCampaign = 'campaign' in item && item.campaign;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'text-fr-text bg-fr-card'
                      : 'text-fr-secondary hover:text-fr-text hover:bg-fr-card/50'
                  } ${isCampaign && !isActive ? 'text-fr-accent' : ''}`}
                >
                  <span>{item.label}</span>
                  {isCampaign && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-fr-accent animate-pulse" />
                  )}
                </Link>
              );
            })}
            <div className="pt-3 space-y-3">
              <Button href={EVENT_CONFIG.registrationUrl} size="lg" fullWidth rightIcon={<ExternalLink size={16} />} className="shadow-lg shadow-cyan-500/20">
                Register for Buildathon
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
