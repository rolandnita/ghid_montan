export interface Tour {
  id: string;
  slug: string;
  title: string;
  location: string;
  difficulty: 'Ușor' | 'Moderat' | 'Dificil' | 'Foarte dificil';
  duration: string;
  distance: string;
  elevationGain: string;
  groupSize: string;
  season: string[];
  status: 'disponibil' | 'sold-out' | 'pe-cerere';
  description: string;
  equipment: string[];
  image: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: Date;
  readingTime: number;
  image: string;
}

export interface SiteConfig {
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  author: string;
  email: string;
  location: string;
  phone: string;
  baseUrl: string;
}
