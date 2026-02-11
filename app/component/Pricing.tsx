"use client";
import { BASE_URL } from "@/lib/config";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

export const CheckIcon: FC = () => (
  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const PricingCard: FC<{ tier: PricingTier; isAnnual: boolean }> = ({ tier, isAnnual }) => {
  const annualDiscount = tier.name !== "Starter" ? 0.8 : 1; // 20% discount for annual billing
  const displayPrice = isAnnual && tier.price !== "Free" ? `$${Math.round(parseInt(tier.price.replace('$', '')) * annualDiscount)}` : tier.price;

  return (
    <div className={`relative h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
      tier.popular ? 'bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl shadow-2xl ring-1 ring-indigo-500/20 scale-105' : 'bg-white/60 backdrop-blur-md shadow-md ring-1 ring-gray-400/20' }`}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">Most Popular</div>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-neutral-900">{displayPrice}</span>
          {tier.price !== "Free" && (
            <span className="text-neutral-600 ml-1">
              /{isAnnual ? 'year' : tier.period}
            </span>
          )}
          {isAnnual && tier.price !== "Free" && (
            <div className="text-sm text-emerald-600 font-medium mt-1">Save 20% annually</div>
          )}
        </div>
        <p className="text-neutral-600 text-sm mb-6">{tier.description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <CheckIcon />
            </div>
            <span className="text-sm text-neutral-700">{feature}</span>
          </div>
        ))}
      </div>

      <Link href={tier.buttonLink} target="_blank" className="inline-flex items-center justify-center w-full py-3 px-6 cursor-pointer rounded-2xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 bg-indigo-600 hover:bg-indigo-600/90 text-white shadow-lg hover:shadow-gray-400/30">{tier.buttonText}</Link>
    </div>
  );
};

export const BillingToggle: FC<{ isAnnual: boolean; onChange: (annual: boolean) => void }> = ({ isAnnual, onChange }) => (
  <div className="flex items-center justify-center gap-4 mb-10 sm:mb-20 lg:mb-20">
    <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-indigo-600' : 'text-neutral-500'}`}>Monthly</span>
    <button onClick={() => onChange(!isAnnual)} className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${ isAnnual ? 'bg-indigo-600' : 'bg-neutral-300'}`}>
      <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${ isAnnual ? 'translate-x-5' : 'translate-x-1' }`}/>
    </button>
    <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-indigo-600' : 'text-neutral-500'}`}>Annual</span>
    <div className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">Save 20%</div>
  </div>
);

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers: Array<PricingTier> = [
    {
      name: "Starter",
      price: "Free",
      period: "month",
      description: "Perfect for small businesses just getting started with appointment scheduling.",
      features: [
        "Up to 50 appointments/month",
        "Basic calendar integration",
        "Email notifications",
        "Mobile-responsive booking page",
        "Basic reporting",
        "Community support"
      ],
      buttonText: "Get Started Free",
      buttonLink: `${BASE_URL}/contact-us`
    },
    {
      name: "Professional",
      price: "$29",
      period: "month",
      description: "Ideal for growing businesses that need advanced features and customization.",
      features: [
        "Unlimited appointments",
        "Advanced calendar sync",
        "SMS & email reminders",
        "Custom branding",
        "Payment processing",
        "Staff management",
        "Advanced analytics",
        "API access",
        "Priority support"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonLink: `${BASE_URL}`
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "For large organizations requiring advanced security, compliance, and support.",
      features: [
        "Everything in Professional",
        "Multi-location support",
        "Advanced user roles",
        "HIPAA compliance",
        "SSO integration",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      buttonLink: `${BASE_URL}/contact-us`
    }
  ];

  return (
    <section id="pricing" className="relative pt-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-2 mb-16">
          <div className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Pricing Plans</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">GetSetTime: Free for First Month</h2>
          <p className="text-neutral-600">Try advanced scheduling features risk-free —no credit card required. Pay later only when you need it.</p>
        </div>

        {/* Billing Toggle */}
        <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6">
          {pricingTiers.map((tier: PricingTier) => (
            <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Get a Customized Scheduling App</h3>
            <p className="text-neutral-600 mb-6">Contact our support team to personalize the appointment booking system to fit your needs. Whether you operate a small business, a salon, or you are a professional doctor, wellness instructor, gym trainer, or similar.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${BASE_URL}/contact-us`} className="bg-indigo-600 text-white px-8 py-3 rounded-2xl">Schedule a Demo</Link>
              <Link href={`${BASE_URL}/contact-us`} className="bg-indigo-600 text-white px-8 py-3 rounded-2xl">Contact Sales</Link>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="text-sm text-neutral-500 mb-4">Trusted by 50,000+ businesses worldwide</div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-600"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
