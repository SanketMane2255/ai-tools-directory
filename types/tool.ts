export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  website: string;
  logo: string;
  featured: boolean;
  rating: number;
  tags: string[];
}

export type PricingType = 'Free' | 'Freemium' | 'Paid';
