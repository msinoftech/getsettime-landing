import { BASE_URL } from "@/lib/config";

export type PricingFaqItem = {
  title: string;
  content: string;
  contentText?: string;
};

export const pricingFaqItems: PricingFaqItem[] = [
  {
    title: "What’s included in the Free plan?",
    content: "The Free plan gives you 1 seat, a public booking page, email notifications, and up to <strong>250 bookings per month</strong> — with no payment required. Upgrade to Starter or Professional when you need more bookings, calendar sync, or automation.",
  },
  {
    title: "What does “250 bookings included” mean on Starter?",
    content: "Every Starter workspace includes 250 confirmed appointments per calendar month at no extra booking fee. After that, you can continue on unlimited booking volume as part of your plan — upgrade seats or tiers when your team grows.",
  },
  {
    title: "Is GST included in the listed prices?",
    content: "Paid plan prices are exclusive of 18% GST. Your invoice will reflect GST as per Indian tax regulations. The Free plan has no charges. Annual billing on Professional and Enterprise saves 10% before GST.",
  },
  {
    title: "Can I add more staff (seats) later?",
    content: "Yes. Add extra provider seats anytime at a regional monthly rate per seat (plus GST) on paid plans. Your workspace scales as you hire stylists, doctors, or therapists without switching platforms.",
  },
  {
    title: "Does Starter get an annual discount?",
    content: "Annual billing with 10% savings applies to Professional and Enterprise plans. Free and Starter stay on simple pricing so you can start lean and upgrade when ready.",
  },
  {
    title: "Can I change or cancel my plan?",
    content: "You can upgrade, downgrade, or add seats from your workspace settings. Contact support for Enterprise changes or custom contracts — we aim for flexible, transparent billing.",
  },
  {
    title: "Do you offer a demo before I pay?",
    content: `Yes. Start on Free, <a href="${BASE_URL}/contact-us" class="text-indigo-600 font-semibold hover:underline">book a demo</a>, or sign in to explore the product. Many teams start free and move to Professional when they need WhatsApp automation and branding.`,
  },
];