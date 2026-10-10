import SectionHeading from '@/components/ui/SectionHeading';
import { SITE_CONFIG } from '@/config/site';

const skills = [
  'React',
  'React Native',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'HTML',
  'CSS',
  'UI Engineering',
  'Frontend Architecture',
  'Web Development',
  'Mobile Development',
];

export default function ModernFrontendSkills() {
  return (
    <section className="py-20 sm:py-28 border-t border-fr-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Coverage"
          title="Modern frontend skills"
          description="Fronthyre is designed around professionals working across modern frontend technologies."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl bg-fr-card border border-fr-border text-sm font-medium text-fr-text hover:border-fr-border-hover hover:bg-fr-elevated transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-fr-muted max-w-2xl mx-auto leading-relaxed">
          {SITE_CONFIG.techDisclaimer}
        </p>

        <div className="mt-4 max-w-2xl mx-auto rounded-xl border border-fr-border bg-fr-card/50 px-5 py-4">
          <p className="text-center text-xs text-fr-muted leading-relaxed">
            Technology names are referenced only to describe relevant skills, technologies and areas of expertise. Fronthyre is independently operated and is not affiliated with or endorsed by the respective technology owners unless expressly stated.
          </p>
        </div>
      </div>
    </section>
  );
}
