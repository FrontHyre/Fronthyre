import { SITE_CONFIG } from '@/config/site';
import { X, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

const iconMap = {
  x: X,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
} as const;

const brandColors: Record<string, { default: string; hover: string }> = {
  x: { default: 'text-fr-secondary', hover: 'hover:text-white hover:border-white/40 hover:bg-white/10' },
  linkedin: { default: 'text-fr-secondary', hover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10' },
  github: { default: 'text-fr-secondary', hover: 'hover:text-white hover:border-white/40 hover:bg-white/10' },
  instagram: { default: 'text-fr-secondary', hover: 'hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10' },
  youtube: { default: 'text-fr-secondary', hover: 'hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10' },
};

export function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {SITE_CONFIG.social.map((social) => {
        const Icon = iconMap[social.icon as keyof typeof iconMap];
        const isPlaceholder = social.url === '#';
        const colors = brandColors[social.icon] ?? brandColors.x;
        return (
          <a
            key={social.platform}
            href={social.url}
            aria-label={isPlaceholder ? `${social.platform} (coming soon)` : social.platform}
            title={isPlaceholder ? `${social.platform} — coming soon` : `${social.platform} / ${social.handle}`}
            className={`flex items-center justify-center w-9 h-9 rounded-lg border border-fr-border bg-fr-card transition-all ${colors.default} ${colors.hover} ${
              isPlaceholder ? 'cursor-not-allowed opacity-50 hover:opacity-70' : ''
            }`}
            {...(isPlaceholder ? { onClick: (e: React.MouseEvent) => e.preventDefault() } : {})}
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
