export interface Plan {
  id: 'essential' | 'casa' | 'total';
  name: string;
  tagline: string;
  priceSemiannualMonthly: number; // equivalent monthly price when billed semiannually
  priceAnnualMonthly: number;     // equivalent monthly price when billed annually
  totalSemiannual: number;        // total billed every 6 months
  totalAnnual: number;            // total billed every 12 months
  isPopular?: boolean;
  benefits: string[];
  notIncluded?: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProblemItem {
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  avatar: string;
  content: string;
  plan: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Geral' | 'Planos' | 'Cobertura' | 'Pagamento';
}

export type BillingCycle = 'semiannual' | 'annual';
export type PaymentGateway = 'stripe' | 'asaas' | 'mercadopago';

export interface HardwareProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  sku: string;
  category: string;
  imageUrl: string;
}
