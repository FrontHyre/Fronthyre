import { Code2, Smartphone, Layers, Zap, GitBranch, Terminal } from 'lucide-react';

const profileCards = [
  {
    name: 'Frontend Engineer',
    skills: ['UI Engineering', 'Web Development'],
    icon: Code2,
    top: '8%',
    left: '4%',
    delay: '0.1s',
  },
  {
    name: 'Mobile Engineer',
    skills: ['Mobile Development', 'UI Engineering'],
    icon: Smartphone,
    top: '14%',
    right: '4%',
    delay: '0.25s',
  },
  {
    name: 'UI Engineer',
    skills: ['Design Systems', 'Accessibility'],
    icon: Layers,
    top: '52%',
    left: '0%',
    delay: '0.4s',
  },
  {
    name: 'Frontend Architect',
    skills: ['Frontend Architecture', 'Component Libraries'],
    icon: Zap,
    top: '58%',
    right: '2%',
    delay: '0.55s',
  },
];

const floatingSkills = [
  { label: 'UI Engineering', top: '40%', left: '42%', delay: '0.3s' },
  { label: 'Frontend Architecture', top: '25%', left: '38%', delay: '0.5s' },
  { label: 'Design Systems', top: '72%', left: '40%', delay: '0.7s' },
  { label: 'Accessibility', top: '45%', right: '38%', delay: '0.6s' },
  { label: 'Responsive Design', top: '30%', right: '20%', delay: '0.45s' },
  { label: 'Performance', top: '65%', right: '30%', delay: '0.65s' },
  { label: 'Component Libraries', top: '50%', left: '15%', delay: '0.55s' },
  { label: 'Developer Experience', top: '20%', right: '8%', delay: '0.75s' },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern fade-mask-radial opacity-40 rounded-3xl" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-soft" />

      {/* Connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <line x1="60" y1="50" x2="200" y2="200" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse-soft" />
        <line x1="340" y1="80" x2="200" y2="200" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse-soft" />
        <line x1="40" y1="250" x2="200" y2="200" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse-soft" />
        <line x1="360" y1="270" x2="200" y2="200" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse-soft" />
        <circle cx="200" cy="200" r="4" fill="#22d3ee" />
        <circle cx="200" cy="200" r="12" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="200" cy="200" r="24" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.15" />
      </svg>

      {/* Central node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-fr-card border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-500/10">
          <Terminal size={16} className="text-fr-accent" />
          <span className="text-sm font-semibold text-fr-text">Fronthyre</span>
        </div>
      </div>

      {/* Profile cards */}
      {profileCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={i}
            className={`absolute z-20 animate-fade-in-up opacity-0 ${card.right ? 'right-0' : 'left-0'}`}
            style={{ top: card.top, [card.right ? 'right' : 'left']: card.right ?? card.left, animationDelay: card.delay, animationFillMode: 'forwards' }}
          >
            <div className="w-[140px] sm:w-[160px] p-3.5 bg-fr-card/90 backdrop-blur-sm border border-fr-border rounded-2xl hover:border-fr-accent/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10">
                  <Icon size={14} className="text-fr-accent" />
                </div>
                <span className="text-xs font-semibold text-fr-text truncate">{card.name}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-fr-elevated text-fr-secondary border border-fr-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating skill labels */}
      {floatingSkills.map((skill, i) => (
        <div
          key={i}
          className="absolute z-15 animate-fade-in opacity-0"
          style={{ top: skill.top, [skill.right ? 'right' : 'left']: skill.right ?? skill.left, animationDelay: skill.delay, animationFillMode: 'forwards' }}
        >
          <span className="text-[10px] font-mono text-fr-muted hidden sm:inline-block">{skill.label}</span>
        </div>
      ))}

      {/* Git branch indicator */}
      <div className="absolute bottom-4 right-4 z-20 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-fr-card/90 border border-fr-border rounded-lg">
          <GitBranch size={12} className="text-fr-accent" />
          <span className="text-[10px] font-mono text-fr-secondary">main</span>
        </div>
      </div>
    </div>
  );
}
