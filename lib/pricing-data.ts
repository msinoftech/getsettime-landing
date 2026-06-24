import { BASE_URL, LOGIN_URL } from "@/lib/config";

export type PricingTier = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  seatTitle?: string;
  seatDescription?: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "Great for getting started",
    price: "999",
    period: "month",
    description: "Perfect for solo providers and small teams launching online booking.",
    seatTitle: "1 seat included",
    seatDescription: "First 250 bookings/month included",
    features: [
      "250 bookings/unlimited bookings",
      "Public booking page",
      "Basic calendar integration",
      "Email notifications",
      "Mobile-responsive booking",
      "Basic reporting",
      "Community support",
    ],
    buttonText: "Get Started",
    buttonLink: LOGIN_URL,
  },
  {
    name: "Professional",
    subtitle: "Best for scaling businesses",
    price: "1499",
    period: "month",
    description: "Ideal for growing clinics and salons that need automation and branding.",
    seatTitle: "2 seats included",
    seatDescription: "First 250 bookings/month included",
    features: [
      "Unlimited appointments",
      "Advanced calendar sync",
      "WhatsApp & email reminders",
      "Custom branding",
      "Payment processing",
      "Staff management",
      "Advanced analytics",
      "API access",
      "Priority support",
    ],
    popular: true,
    buttonText: "Get Started",
    buttonLink: LOGIN_URL,
  },
  {
    name: "Enterprise",
    subtitle: "For advanced operations",
    price: "2999",
    period: "month",
    description: "For multi-location teams needing security, roles, and dedicated support.",
    seatTitle: "5 seats included",
    seatDescription: "First 250 bookings/month included",
    features: [
      "Everything in Professional",
      "Multi-location support",
      "Advanced user roles",
      "SSO integration",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    buttonLink: `${BASE_URL}/contact-us`,
  },
];

export type ComparisonCell = boolean | string;

export type ComparisonRow = {
  feature: string;
  starter: ComparisonCell;
  professional: ComparisonCell;
  enterprise: ComparisonCell;
  highlight?: boolean;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Monthly price (excl. GST)", starter: "₹999", professional: "₹1,499", enterprise: "₹2,999", highlight: true },
  { feature: "Seats included", starter: "1", professional: "2", enterprise: "5" },
  { feature: "Bookings / month", starter: "250 included", professional: "Unlimited", enterprise: "Unlimited" },
  { feature: "Online booking page", starter: true, professional: true, enterprise: true },
  { feature: "Google Calendar sync", starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
  { feature: "WhatsApp reminders", starter: false, professional: true, enterprise: true },
  { feature: "Email notifications", starter: true, professional: true, enterprise: true },
  { feature: "Custom branding", starter: false, professional: true, enterprise: true },
  { feature: "Payment processing", starter: false, professional: true, enterprise: true },
  { feature: "Staff management", starter: "Basic", professional: true, enterprise: true },
  { feature: "Advanced analytics", starter: false, professional: true, enterprise: true },
  { feature: "API access", starter: false, professional: true, enterprise: true },
  { feature: "Multi-location", starter: false, professional: false, enterprise: true },
  { feature: "SSO & custom integrations", starter: false, professional: false, enterprise: true },
  { feature: "Support", starter: "Community", professional: "Priority", enterprise: "24/7 + SLA" },
];

export const pricingFaqItems = [
  {
    title: "What does “250 bookings included” mean on Starter?",
    content: "Every Starter workspace includes 250 confirmed appointments per calendar month at no extra booking fee. After that, you can continue on unlimited booking volume as part of your plan — upgrade seats or tiers when your team grows.",
  },
  {
    title: "Is GST included in the listed prices?",
    content: "Prices shown are exclusive of 18% GST. Your invoice will reflect GST as per Indian tax regulations. Annual billing on Professional and Enterprise saves 10% before GST.",
  },
  {
    title: "Can I add more staff (seats) later?",
    content: "Yes. Add extra provider seats anytime at <strong>₹799/month per seat</strong> (plus GST). Your workspace scales as you hire stylists, doctors, or therapists without switching platforms.",
  },
  {
    title: "Does Starter get an annual discount?",
    content: "Annual billing with 10% savings applies to Professional and Enterprise plans. Starter stays on simple monthly pricing at ₹999/month so you can start lean and upgrade when ready.",
  },
  {
    title: "Can I change or cancel my plan?",
    content: "You can upgrade, downgrade, or add seats from your workspace settings. Contact support for Enterprise changes or custom contracts — we aim for flexible, transparent billing.",
  },
  {
    title: "Do you offer a demo before I pay?",
    content: `Yes. <a href="${BASE_URL}/contact-us" class="text-indigo-600 font-semibold hover:underline">Book a demo</a> or sign in to explore the product. Many teams start on Starter and move to Professional when they need WhatsApp automation and branding.`,
  },
];

export const EXTRA_SEAT_PRICE = 799;
