export interface Project {
  id: string;
  title: string;
  category: 'Contabilidad' | 'Automatización' | 'Desarrollo' | 'Análisis';
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillData {
  subject: string;
  A: number; // Skill level
  fullMark: number;
}
