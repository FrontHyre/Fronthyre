import SEO from '@/components/SEO';
import Card from '@/components/ui/Card';

const cookieRows = [
  {
    cookie: '[session/security/form-state cookies — list each by name]',
    purpose: 'Strictly necessary operation and security of the website/forms',
    duration: '[list duration]',
  },
];

const sections = [
  ['1. Consent for non-essential cookies', 'If we introduce analytics or advertising technologies we will first display a cookie banner with \u2018Accept\u2019 and \u2018Reject\u2019 options of equal prominence, set such cookies only after you accept, and update this Policy.'],
  ['2. Managing cookies', 'You can delete or block cookies in your browser settings; blocking strictly necessary cookies may affect functioning of the forms.'],
  ['3. Third parties', 'Embedded third-party content or hosting providers may set their own cookies; we list them in the table above where known. We do not use cookies to monitor children.'],
] as const;

export default function CookiePolicyPage() {
  return (
    <>
      <SEO title="Cookie Policy — Fronthyre" description="Cookie Policy for Fronthyre." path="/cookie-policy" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-20" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-10 sm:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-muted mb-5">Effective date: [date]</p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fr-text">Cookie Policy</h1>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              Cookies are small files stored on your device.
            </p>
            <p className="mt-3 text-sm sm:text-base text-fr-secondary leading-relaxed">
              This website uses [only strictly necessary cookies and local storage needed to operate the site and keep it secure (for example, [session/security/form-state cookies — list each by name, purpose, duration])].
            </p>
            <p className="mt-3 text-sm sm:text-base text-fr-secondary leading-relaxed">
              We do not currently use analytics, advertising or tracking cookies, pixels or similar technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-5">
          {/* Cookie table */}
          <Card hover={false} padding="lg">
            <h2 className="text-lg font-semibold text-fr-text mb-4">Cookies and local storage we use</h2>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-fr-border">
                    <th className="text-left font-semibold text-fr-text py-3 pr-4 w-[35%]">Cookie / Storage</th>
                    <th className="text-left font-semibold text-fr-text py-3 pr-4 w-[45%]">Purpose</th>
                    <th className="text-left font-semibold text-fr-text py-3 w-[20%]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map((row, i) => (
                    <tr key={i} className="border-b border-fr-border/60 last:border-b-0">
                      <td className="py-3 pr-4 text-fr-secondary align-top leading-relaxed">{row.cookie}</td>
                      <td className="py-3 pr-4 text-fr-secondary align-top leading-relaxed">{row.purpose}</td>
                      <td className="py-3 text-fr-muted align-top leading-relaxed">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked rows */}
            <div className="sm:hidden space-y-3">
              {cookieRows.map((row, i) => (
                <div key={i} className="p-3 rounded-lg border border-fr-border/60 bg-fr-elevated/50">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Cookie / Storage</p>
                  <p className="text-sm text-fr-secondary leading-relaxed mb-3">{row.cookie}</p>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Purpose</p>
                  <p className="text-sm text-fr-secondary leading-relaxed mb-3">{row.purpose}</p>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Duration</p>
                  <p className="text-sm text-fr-muted leading-relaxed">{row.duration}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Sections 1–3 */}
          {sections.map(([title, body]) => (
            <Card key={title} hover={false} padding="lg">
              <h2 className="text-lg font-semibold text-fr-text">{title}</h2>
              <p className="mt-3 text-sm text-fr-secondary leading-7">
                {title === '1. Consent for non-essential cookies' ? (
                  <>
                    If we introduce analytics or advertising technologies we will first display a cookie banner with{' '}
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold text-fr-text bg-fr-elevated border border-fr-border">&lsquo;Accept&rsquo;</span>
                    {' '}and{' '}
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold text-fr-text bg-fr-elevated border border-fr-border">&lsquo;Reject&rsquo;</span>
                    {' '}options of equal prominence, set such cookies only after you accept, and update this Policy.
                  </>
                ) : (
                  body
                )}
              </p>
            </Card>
          ))}

          {/* Section 4 — Contact */}
          <Card hover={false} padding="lg">
            <h2 className="text-lg font-semibold text-fr-text">4. Contact</h2>
            <p className="mt-3 text-sm text-fr-secondary leading-7">
              <a href="mailto:support@fronthyre.com" className="text-fr-accent hover:underline">support@fronthyre.com</a>.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
