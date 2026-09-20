export interface ProjectItem {
  id: string;
  name: string;
  company: string;
  client?: string;
  industry?: string;
  tagline: string;
  description: string;
  contributions: string[];
  technologies: string[];
  highlightBadge?: string;
  category: 'AI' | 'Enterprise Analytics' | 'Commercial Real Estate' | 'Internal EdTech' | 'Retail POS';
  architectureFlow?: {
    step: string;
    label: string;
    sublabel: string;
    icon: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isPrimary?: boolean;
  summary: string;
  projects?: string[];
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategoryItem {
  category: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface EducationItem {
  degree: string;
  fullTitle: string;
  period: string;
  institution: string;
  location: string;
}

export interface CertificationItem {
  code: string;
  title: string;
  issuer: string;
  category: 'Azure AI' | 'Cloud Infrastructure' | 'Frontend Architecture';
  badgeColor: string;
}
