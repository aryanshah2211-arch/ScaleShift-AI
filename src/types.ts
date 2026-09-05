export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  tag: string;
  features?: string[];
}

export interface BuildGroup {
  name: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface OutcomeMapping {
  prompt: string;
  outcome: string;
  category: string;
}

export interface CaseStudy {
  title: string;
  badge: string;
  achievement: string;
  problem: string;
  solution: string;
  tools: string[];
  workflow: string[];
  deliveryTime: string;
  result: string;
  category: string;
}

export interface SecondaryProject {
  id: string;
  title: string;
  description: string;
  skills: string[];
  type: string;
  category: string;
}

export interface LeadSubmission {
  name: string;
  business_name: string;
  email: string;
  whatsapp: string;
  business_description: string;
  project_type: string;
  project_description: string;
  website_url?: string;
}

