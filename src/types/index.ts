export type StyleCategory = 'executivo' | 'jovem' | 'casual' | 'athleisure';

export interface Product {
  id: string;
  name: string;
  category: string;
  style: StyleCategory;
  price: number;
  image: string;
  tag: string;
  description: string;
}

export interface EmailCopy {
  subject: string;
  preheader: string;
  body: string;
  callToAction: string;
}

export interface SocialCopy {
  platform: 'Instagram' | 'TikTok';
  caption: string;
  hashtags: string[];
  callToAction: string;
}

export interface SegmentProfile {
  id: string;
  segmentId: string;
  title: string;
  personaName: string;
  personaAge: number;
  personaBio: string;
  avatarUrl: string;
  dominantStyle: StyleCategory;
  recommendedProducts: Product[];
  emailMarketing: EmailCopy;
  socialMediaPost: SocialCopy;
  isCustomGenerated?: boolean;
}

export interface SegmentData {
  id: string;
  name: string;
  percentage: number;
  color: string;
  description: string;
  audienceShare: string;
  estimatedGrowth: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  linkedinUrl: string;
}
