export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  unit: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface ProfessionalProfile {
  id: 'pedreiro' | 'eletricista' | 'encanador';
  roleName: string;
  defaultName: string;
  tagline: string;
  avatar: string;
  aboutTitle: string;
  aboutText: string;
  experienceYears: number;
  skills: string[];
  services: Service[];
  portfolio: Project[];
  reviews: Review[];
  whatsappPitch: string;
  heroHeadline: string;
  heroSubheadline: string;
  accentColor: string; // hex or tailwind classes
  accentBg: string;
  accentBorder: string;
}
