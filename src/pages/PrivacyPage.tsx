import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Card from '@/components/ui/Card';

const section1Rows = [
  {
    data: 'Full name, e-mail address',
    purpose: 'Register you for Early Access; verify your e-mail; send service updates about the launch',
    status: 'Required',
  },
  {
    data: 'Mobile number',
    purpose: 'Contact you by call/WhatsApp about Fronthyre if you choose',
    status: 'Optional',
  },
  {
    data: 'Current role, years/level of experience, primary and secondary skills',
    purpose: 'Maintain your Early Access profile; (if you consent) assess and match you with relevant opportunities after launch',
    status: 'Optional',
  },
  {
    data: 'Preferred location, work preference, job-search status, notice period',
    purpose: 'We treat job-search status and notice period as confidential and will not disclose them to any employer without your separate consent',
    status: 'Optional',
  },
  {
    data: 'LinkedIn, GitHub, portfolio links',
    purpose: 'Review publicly available professional work you point us to',
    status: 'Optional',
  },
  {
    data: 'Resume (PDF/DOCX)',
    purpose: 'Not displayed publicly',
    status: 'Optional',
  },
  {
    data: 'Marketing preference and consent record (time, version, IP address)',
    purpose: 'Send promotional communications',
    status: 'Optional',
  },
  {
    data: 'Technical data (IP address, device/browser type, logs)',
    purpose: 'Secure and operate the website; detect abuse; retained for security logs',
    status: 'Automatic',
  },
];

const section6Rows = [
  {
    data: 'Early Access profile and contact data',
    retention: 'Until you withdraw consent or ask for erasure, or 12 months after your last interaction (we will e-mail you at least 15 days before erasing), whichever is earlier',
  },
  {
    data: 'Resume',
    retention: 'Deleted within 30 days of withdrawal/erasure request or with the profile, whichever is earlier',
  },
  {
    data: 'Marketing preferences and unsubscribe list',
    retention: 'Unsubscribe e-mail kept in suppression list for as long as needed to honour your choice',
  },
  {
    data: 'Consent records',
    retention: '3 years after withdrawal, as legal evidence',
  },
  {
    data: 'Security and access logs',
    retention: 'At least 1 year as required by law',
  },
  {
    data: 'Data we must retain by law',
    retention: 'For the period the applicable law requires',
  },
];

const statusStyles: Record<string, string> = {
  Required: 'text-fr-error bg-fr-error/10 border-fr-error/20',
  Optional: 'text-fr-accent bg-fr-accent/10 border-fr-accent/20',
  Automatic: 'text-fr-muted bg-fr-muted/10 border-fr-muted/20',
};

const tableNav = [
  '1. Personal data we collect and why',
  '2. Legal basis',
  '3. Who we share data with',
  '4. Talent matching',
  '5. Marketing',
  '6. Retention and erasure',
  '7. Security',
  '8. Children',
  '9. Your rights and how to exercise them',
  '10. Service providers',
  '11. Cookies',
  '12. Grievance Officer / Data Protection contact',
  '13. Changes',
];

const standardSections: Record<string, string> = {
  '2': 'We process your data only on the basis of your consent given by a clear affirmative action. Consent for each purpose is separate. You may withdraw consent at any time as easily as you gave; withdrawal does not affect processing done before withdrawal.',
  '3': 'We do not sell your personal data. We share it only with (a) service providers (processors) acting on our instructions under written contracts, such as hosting, storage, e-mail delivery and security providers listed in section 10; (b) regulators, courts or law-enforcement agencies where required by law; (c) a successor entity in a merger or business transfer, with notice to you; and (d) employers or recruiters only after you give separate consent.',
  '4': 'If you provide an affirmative consent, we may use your profile to assess and match you with relevant opportunities when the Fronthyre platform launches.',
  '5': 'If you opt in, we will send news, offers and event information by the channels you selected. Every message has an unsubscribe option; you may also withdraw through the Privacy Requests page. Registration for the NitroStack buildathon is handled by NitroStack under its own notice; Fronthyre receives that data only if you separately agree on NitroStack\u2019s form.',
  '7': 'We use reasonable safeguards including encryption in transit and at rest, access control limited to authorised personnel, logging and monitoring, malware scanning of uploads, regular backups and vendor due diligence. If a personal data breach occurs we will notify the Data Protection Board of India and affected persons as required by law.',
  '8': 'The Service is for persons aged 18 years or above. We do not knowingly process data of children. If we learn that a user is under 18 we will delete the data.',
  '9': 'You may (a) obtain a summary of your personal data and the processors/recipients; (b) correct, complete or update it; (c) request erasure; (d) withdraw consent; (e) seek grievance redressal; and (f) nominate another person to exercise your rights in the event of your death or incapacity. Write to support@fronthyre.com or use the Privacy Requests page. We will verify your identity, acknowledge your request within 72 hours and respond within 30 days (in any case within 90 days). If you are not satisfied with our response you may complain to the Data Protection Board of India after first using our grievance process.',
  '10': 'Our processors include [hosting provider, location], [e-mail service], [storage/database provider]. Your data may be processed outside India with these providers, subject to contractual safeguards and any restriction notified by the Government of India under s.16 DPDP Act. [Insert final list.]',
  '11': 'See our Cookie Policy.',
  '12': '[Name], [Designation], [Entity], [Address]; e-mail support@fronthyre.com; phone [__]. Acknowledgement within 24 hours; resolution within 15 days.',
  '13': 'We will post changes with a new effective date and notify you by e-mail if they are material or require your fresh consent.',
};

const sectionTitle = (num: string): string =>
  tableNav.find((t) => t.startsWith(num + '.')) ?? num;

export default function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy — Fronthyre" description="Privacy Policy for Fronthyre Early Access." path="/privacy" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-20" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-10 sm:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-muted mb-5">Effective date: [date]</p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fr-text">Privacy Policy</h1>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              Fronthyre ([Legal Entity Name], address) is the &lsquo;Data Fiduciary&rsquo; for personal data collected through this website. This notice is issued under the Digital Personal Data Protection Act, 2023 (DPDP Act), the DPDP Rules, 2025 and, until they apply, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. It is available in English; on request we will provide it in any language in the Eighth Schedule to the Constitution.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[220px_1fr] gap-8">
          <aside className="lg:sticky lg:top-24 h-fit">
            <p className="text-xs font-mono uppercase tracking-widest text-fr-muted mb-3">On this page</p>
            <div className="space-y-2">
              {tableNav.map((title) => (
                <a key={title} href={`#${title.split('.')[0]}`} className="block text-xs text-fr-secondary hover:text-fr-accent transition-colors">{title}</a>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            {/* Section 1 — Table */}
            <Card hover={false} padding="lg">
              <h2 id="1" className="text-lg font-semibold text-fr-text">1. Personal data we collect and why</h2>

              {/* Desktop table */}
              <div className="hidden sm:block mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-fr-border">
                      <th className="text-left font-semibold text-fr-text py-3 pr-4 w-[25%]">Data</th>
                      <th className="text-left font-semibold text-fr-text py-3 pr-4 w-[60%]">Purpose</th>
                      <th className="text-left font-semibold text-fr-text py-3 w-[15%]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section1Rows.map((row, i) => (
                      <tr key={i} className="border-b border-fr-border/60 last:border-b-0">
                        <td className="py-3 pr-4 text-fr-text align-top leading-relaxed">{row.data}</td>
                        <td className="py-3 pr-4 text-fr-secondary align-top leading-relaxed">{row.purpose}</td>
                        <td className="py-3 align-top">
                          <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border ${statusStyles[row.status] ?? ''}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile stacked rows */}
              <div className="sm:hidden mt-4 space-y-3">
                {section1Rows.map((row, i) => (
                  <div key={i} className="p-3 rounded-lg border border-fr-border/60 bg-fr-elevated/50">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Data</p>
                    <p className="text-sm text-fr-text leading-relaxed mb-3">{row.data}</p>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Purpose</p>
                    <p className="text-sm text-fr-secondary leading-relaxed mb-3">{row.purpose}</p>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Status</p>
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border ${statusStyles[row.status] ?? ''}`}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-fr-secondary leading-relaxed">
                We do not collect current or expected compensation, government identifiers, financial data, health data or other sensitive data, and ask you not to include them in your resume.
              </p>
            </Card>

            {/* Section 2–5 */}
            {['2', '3', '4', '5'].map((num) => (
              <Card key={num} hover={false} padding="lg">
                <h2 id={num} className="text-lg font-semibold text-fr-text">{sectionTitle(num)}</h2>
                <p className="mt-3 text-sm text-fr-secondary leading-7">{standardSections[num]}</p>
                {num === '11' && (
                  <Link to="/cookie-policy" className="inline-block mt-2 text-sm text-fr-accent hover:underline">Cookie Policy &rarr;</Link>
                )}
              </Card>
            ))}

            {/* Section 6 — Table */}
            <Card hover={false} padding="lg">
              <h2 id="6" className="text-lg font-semibold text-fr-text">6. Retention and erasure</h2>

              {/* Desktop table */}
              <div className="hidden sm:block mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-fr-border">
                      <th className="text-left font-semibold text-fr-text py-3 pr-4 w-[30%]">Data</th>
                      <th className="text-left font-semibold text-fr-text py-3 w-[70%]">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section6Rows.map((row, i) => (
                      <tr key={i} className="border-b border-fr-border/60 last:border-b-0">
                        <td className="py-3 pr-4 text-fr-text align-top leading-relaxed">{row.data}</td>
                        <td className="py-3 text-fr-secondary align-top leading-relaxed">{row.retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile stacked rows */}
              <div className="sm:hidden mt-4 space-y-3">
                {section6Rows.map((row, i) => (
                  <div key={i} className="p-3 rounded-lg border border-fr-border/60 bg-fr-elevated/50">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Data</p>
                    <p className="text-sm text-fr-text leading-relaxed mb-3">{row.data}</p>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-fr-muted mb-1">Retention</p>
                    <p className="text-sm text-fr-secondary leading-relaxed">{row.retention}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Section 7–11 */}
            {['7', '8', '9', '10', '11'].map((num) => (
              <Card key={num} hover={false} padding="lg">
                <h2 id={num} className="text-lg font-semibold text-fr-text">{sectionTitle(num)}</h2>
                <p className="mt-3 text-sm text-fr-secondary leading-7">{standardSections[num]}</p>
                {num === '11' && (
                  <Link to="/cookie-policy" className="inline-block mt-2 text-sm text-fr-accent hover:underline">Cookie Policy &rarr;</Link>
                )}
              </Card>
            ))}

            {/* Section 12–13 */}
            {['12', '13'].map((num) => (
              <Card key={num} hover={false} padding="lg">
                <h2 id={num} className="text-lg font-semibold text-fr-text">{sectionTitle(num)}</h2>
                <p className="mt-3 text-sm text-fr-secondary leading-7">{standardSections[num]}</p>
              </Card>
            ))}

            <div className="p-4 rounded-xl bg-fr-card border border-fr-border">
              <p className="text-xs text-fr-muted leading-relaxed">Final legal entity, contacts, providers, retention wording and effective date remain to be confirmed.</p>
              <Link to="/privacy-requests" className="inline-block mt-3 text-xs font-medium text-fr-accent hover:underline">Make a privacy request &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
