import { Users, Code2, Briefcase, Network } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';

const features = [
  {
    icon: Users,
    title: 'Frontend Talent',
    description: 'Connect with professionals focused on frontend and UI engineering.',
  },
  {
    icon: Code2,
    title: 'Modern Skills',
    description: 'Discover talent across modern frontend technologies and development practices.',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Create a future-facing network for frontend professionals and employers.',
  },
  {
    icon: Network,
    title: 'Developer Community',
    description: 'Build a community around frontend development and modern technology.',
  },
];

export default function WhatFronthyreIs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Fronthyre Is"
          title="A network built for frontend professionals"
          description="Not another generic job board. Fronthyre is focused on frontend talent and the teams that need them."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card key={i} className="group">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Icon size={20} className="text-fr-accent" />
                </div>
                <h3 className="text-base font-semibold text-fr-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-fr-secondary leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
