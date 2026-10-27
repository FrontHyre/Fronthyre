import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Card from '@/components/ui/Card';

const sections = [
  ['1. Acceptance and eligibility', 'By accessing the Service or registering for Early Access you agree to these Terms. You must be at least 18 years old and capable of entering into a binding contract. If you do not agree, do not use the Service.'],
  ['2. Pre-launch status', 'The Service is in pre-launch. The talent network, opportunity discovery and employer features described are planned, may change, be delayed or be withdrawn, and are provided on an \u2018as is\u2019 and \u2018as available\u2019 basis. Early Access is free.'],
  ['3. No guarantee of employment or contact', 'Fronthyre is not an employer, recruiter on behalf of any employer or agent of any employer. Registration, Early Access membership and profile completeness do not guarantee any interview, job offer, placement, recruiter contact, response or outcome. Fronthyre does not charge job seekers any fee for registration.'],
  ['4. Your information', 'You must provide accurate, current and lawful information and only information you are entitled to share. You must not upload another person\u2019s data, confidential information of any employer, malware or unlawful content. You are responsible for the contents of your resume and links.'],
  ['5. Licence to us', 'You grant Fronthyre a non-exclusive, royalty-free, worldwide licence, for the duration of your membership and as needed thereafter to comply with law, to store, process and use the information you submit solely for the purposes described in the Privacy Policy. You retain ownership of your information. This licence does not permit sharing with employers without your separate consent.'],
  ['6. Acceptable use', 'You shall not: (a) scrape, crawl, harvest or systematically extract data; (b) attempt unauthorised access, probe or disrupt the Service; (c) impersonate any person or misrepresent affiliation; (d) submit false or misleading information; (e) use the Service to send spam or unsolicited messages; (f) infringe any intellectual property or privacy right; (g) use the Service in violation of any law including the Information Technology Act, 2000.'],
  ['7. Intellectual property', 'The Service, the name and logo \u2018Fronthyre\u2019, software, design and content are owned by or licensed to Fronthyre and protected by the Trade Marks Act, 1999, the Copyright Act, 1957 and other laws. No right is granted except a limited, revocable, non-transferable right to use the Service as permitted. Third-party names and marks (including NitroStack and LinkedIn) belong to their owners; Fronthyre is not affiliated with, sponsored or endorsed by LinkedIn Corporation.'],
  ['8. Third-party websites and events', 'The Service may link to third-party sites and events, including the NitroStack buildathon. Such events are organised and operated solely by the third party under its own rules and privacy notice; registration, eligibility, prizes, judging and disputes are the responsibility of that third party. Fronthyre does not control, endorse or accept liability for third-party content, services or prizes.'],
  ['9. Intermediary', 'Fronthyre acts as an intermediary in respect of user-submitted content and observes the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Report unlawful content to the Grievance Officer in clause 15.'],
  ['10. Warranties', 'To the fullest extent permitted by law, Fronthyre disclaims all warranties, express or implied, including fitness for a particular purpose, uninterrupted or error-free operation, and accuracy of third-party content. Nothing in these Terms excludes any right you have under the Consumer Protection Act, 2019 or any liability that cannot be excluded by law.'],
  ['11. Liability', 'Subject to clause 10, Fronthyre\u2019s aggregate liability arising out of the Service is limited to INR 10,000 (the Service being free), and Fronthyre is not liable for indirect, incidental, special or consequential loss, loss of opportunity or loss of data. This clause does not limit liability for fraud, wilful default or gross negligence.'],
  ['12. Indemnity', 'You shall indemnify Fronthyre against third-party claims, losses and reasonable legal costs arising from your breach of clauses 4 or 6 or your unlawful submission of data.'],
  ['13. Suspension and termination', 'We may suspend or terminate access, or remove content, if you breach these Terms or if required by law, with notice where practicable. You may stop using the Service and request deletion of your data at any time (see the Privacy Policy). Clauses that by nature survive will survive termination.'],
  ['14. Changes', 'We may modify the Service and these Terms. Material changes will be notified by e-mail or on the website at least [7] days before taking effect; continued use constitutes acceptance. Changes to data uses requiring consent will be made only with fresh consent.'],
  ['15. Grievance Officer', '[Name], [Designation], [Address], e-mail: support@fronthyre.com. Complaints will be acknowledged within 24 hours and resolved within 15 days.'],
  ['16. Governing law', 'These Terms are governed by the laws of India. The parties shall first attempt to resolve any dispute amicably within 30 days. Failing that, the courts at [City], India shall have exclusive jurisdiction, without prejudice to your statutory rights as a consumer to approach the competent Consumer Commission.'],
  ['17. Entire agreement', 'These Terms with the Privacy Policy and Cookie Policy are the entire agreement on the Service. If any provision is invalid the rest continues. Failure to enforce is not a waiver. You may not assign these Terms; we may assign them to a successor. Notices to you may be sent to your registered e-mail.'],
] as const;

export default function TermsPage() {
  return (
    <>
      <SEO title="Terms of Use — Fronthyre" description="Terms of Use for the Fronthyre pre-launch service." path="/terms" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern fade-mask-b opacity-20" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-10 sm:pt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-muted mb-5">Last updated: [date]</p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-fr-text">Terms of Use</h1>
            <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
              These Terms of Use (&lsquo;Terms&rsquo;) govern your access to and use of the website www.fronthyre.com and the Fronthyre Early Access programme (together, the &lsquo;Service&rsquo;), operated by [Legal Entity Name], a company incorporated under the Companies Act, 2013 (CIN [__]) having its registered office at [address] (&lsquo;Fronthyre&rsquo;, &lsquo;we&rsquo;, &lsquo;us&rsquo;).
            </p>
          </div>
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 space-y-4">
          {sections.map(([title, body]) => (
            <Card key={title} hover={false} padding="lg">
              <h2 className="text-lg font-semibold text-fr-text">{title}</h2>
              <p className="mt-3 text-sm text-fr-secondary leading-7">{body}</p>
            </Card>
          ))}
          <div className="p-4 rounded-xl bg-fr-card border border-fr-border">
            <p className="text-xs text-fr-muted leading-relaxed">Final legal entity, contacts, court jurisdiction and effective date remain to be confirmed.</p>
            <Link to="/privacy" className="inline-block mt-3 text-xs font-medium text-fr-accent hover:underline">Read the Privacy Policy &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
