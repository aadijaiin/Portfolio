export interface CareerItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  year: number;
  description: string;
  repoLink?: string;
  liveLink?: string;
  tech: string[];
}

export interface ContactItem {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'file' | 'twitter';
}

export const EXPERIENCE: CareerItem[] = [
  {
    role: 'Developer',
    company: 'Self Driven',
    period: 'Sep 2024 - Present',
    points: [
      'Building full-stack apps by learning through shipping real projects.',
      'Exploring Frontend, Backend, and Cloud based systems by actually using them in production-style apps.',
      'Turning random ideas into working products while figuring things out along the way.',
      'Constantly learning new tools, patterns, and better ways to build things that don’t break easily.'
    ]
  }
];

export const CONTACT_LINKS: ContactItem[] = [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/aadijaiin' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/aadi-jain-15462a327/',
  },
  { label: 'Email', icon: 'mail', url: 'mailto:aadijain363@gmail.com' },
  { label: 'Resume', icon: 'file', url: '/Aadi_jain_resume.pdf' },
];
