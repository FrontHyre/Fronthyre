export const SITE_CONFIG = {
  name: 'Fronthyre',
  product: 'Fronthyre Talent Network',
  tagline: 'Frontend talent Better opportunities',
  positioning:
    'Fronthyre is building a frontend-focused talent network for developers and UI professionals working across modern web and mobile technologies.',
  heroHeadline: 'Frontend talent.\nBetter opportunities.',
  heroSubtext:
    'A dedicated talent network for frontend developers, UI professionals, and engineers shaping modern web, mobile, and digital experiences.',
  status: 'PRE-LAUNCH',
  domain: 'fronthyre.com',
  email: 'support@fronthyre.com',
  contacts: {
    general: 'support@fronthyre.com',
    privacy: 'support@fronthyre.com',
    buildathon: 'contact@nitrostack.ai',
    legalEntity: 'Fronthyre Inc',
    privacyContact: 'support@fronthyre.com',
    grievanceOfficer: 'support@fronthyre.com',
    jurisdiction: '[GOVERNING LAW / JURISDICTION — TO BE CONFIRMED BY LEGAL COUNSEL]',
    retentionPeriod: '[RETENTION PERIOD — TO BE CONFIRMED BY LEGAL ADVISOR]',
    privacyNoticeVersion: '[Effective date — to be confirmed]',
    termsVersion: '[Effective date — to be confirmed]',
    isPrototype: true,
    prototypeNotice:
      'Fronthyre is currently in pre-launch. This prototype does not store submitted information.',
  },
  social: [
    {
      platform: 'LinkedIn',
      handle: 'fronthyre',
      url: 'https://www.linkedin.com/company/fronthyre/home/',
      icon: 'linkedin',
    },
    // { platform: 'GitHub', handle: 'fronthyre', url: '#', icon: 'github' },
    { platform: 'Instagram', handle: '@fronthyre', url: '#', icon: 'instagram' },
    { platform: 'YouTube', handle: '@fronthyre', url: '#', icon: 'youtube' },
  ],
  techDisclaimer:
    'Technology names are referenced only to describe relevant skills, technologies and areas of expertise. Fronthyre is independently operated and is not affiliated with or endorsed by the respective technology owners unless expressly stated.',
  nav: [
    { label: 'Buildathon', path: '/buildathon', campaign: true },
    { label: 'Fronthyre', path: '/fronthyre' },
    { label: 'Early Access', path: '/early-access' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  footerLinks: [
    { label: 'Buildathon', path: '/buildathon' },
    { label: 'Fronthyre', path: '/fronthyre' },
    { label: 'Early Access', path: '/early-access' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  footerLegal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
    { label: 'Privacy Requests', path: '/privacy-requests' },
    { label: 'Contact', path: '/contact' },
  ],
} as const;
