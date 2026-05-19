"use client";
import { BASE_URL, LOGIN_URL } from "@/lib/config";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";

interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

interface PricingHeaderContent {
  badgeText: string;
  title: string;
  description: string;
}

interface CtaButton {
  text: string;
  href: string;
  className?: string;
}

interface PricingBottomCtaContent {
  title: string;
  description: string;
  buttons: CtaButton[];
}

interface TrustIndicator {
  text: string;
  dotColorClass: string;
}

interface PricingTrustContent {
  title: string;
  indicators: TrustIndicator[];
}

interface PricingProps {
  headerContent?: PricingHeaderContent;
  bottomCtaContent?: PricingBottomCtaContent;
  trustContent?: PricingTrustContent;
}

export const CheckIcon: FC = () => (
  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-indigo-700">
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.493-6.49a1 1 0 011.415 0z" clipRule="evenodd"/>
    </svg>
  </div>
);

export const PricingCard: FC<{ tier: PricingTier; isAnnual: boolean }> = ({ tier, isAnnual }) => {
  const annualDiscount = tier.name !== "Starter" ? 0.9 : 1; // 10% discount for annual billing
  const monthlyPrice = Number(tier.price);
  const annualPrice = Math.round(monthlyPrice * annualDiscount);
  const displayPrice = tier.price === "Free" ? "Free" : isAnnual ? `${annualPrice}` : `${monthlyPrice}`;

  return (
    <div className={`pricing-card relative h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
      tier.popular ? 'border-indigo-300 bg-white/75 shadow-xl shadow-indigo-200/50 ring-1 ring-indigo-200 backdrop-blur' : 'border-white/70 bg-white/80 shadow-xl shadow-slate-200/70 backdrop-blur' }`}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg">Most Popular</div>
        </div>
      )}

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className="font-medium uppercase tracking-widest text-indigo-600">{tier.name}</div>
            <p>{tier.subtitle}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">GST Extra</div>
        </div>
        
        <div className="mb-4">
          <span className="text-4xl font-bold text-neutral-900">
            {tier.price === "Free" ? displayPrice : <><span className="rate-sign">₹</span>{displayPrice}</>}
          </span>
          {tier.price !== "Free" && (
            <span className="text-neutral-600 ml-1">
              /{isAnnual ? `${tier.period}` : tier.period}
            </span>
          )}
          {isAnnual && tier.price !== "Free" && (
            <div className="text-sm text-emerald-600 font-medium mt-1">Save 10% annually</div>
          )}
        </div>
        <p>{tier.description}</p>
      </div>

      <hr className="my-8 border-slate-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 mb-8">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex justify-start items-center gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <CheckIcon />
            </div>
            <span className="text-sm text-neutral-600">{feature}</span>
          </div>
        ))}
      </div>

      <Link href={tier.buttonLink} target="_blank" className={`w-full flex items-center justify-center rounded-xl px-4 py-2.5 text-sm transition-all duration-300 ${
      tier.popular ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl' : 'border border-slate-200 bg-neutral-900 text-white hover:bg-neutral-800' }`}
      >{tier.buttonText}</Link>
    </div>
  );
};

export const BillingToggle: FC<{ isAnnual: boolean; onChange: (annual: boolean) => void }> = ({ isAnnual, onChange }) => (
  <div className="flex justify-center mb-16">
    <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-lg shadow-slate-200/60 backdrop-blur">
      <button type="button" onClick={() => onChange(false)} className={`rounded-xl px-5 py-2 text-sm cursor-pointer ${ !isAnnual ? "bg-indigo-600 text-white shadow" : "bg-white text-neutral-600 hover:bg-indigo-500/10 hover:text-indigo-600" }`}>Monthly</button>
      <button type="button" onClick={() => onChange(true)} className={`rounded-xl px-5 py-2 text-sm cursor-pointer ${ isAnnual ? "bg-indigo-600 text-white shadow" : "bg-white text-neutral-600 hover:bg-indigo-500/10 hover:text-indigo-600" }`}>Annual</button>
      <div className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-md">Save 10%</div>
    </div>
  </div>
);

export default function Pricing({
  headerContent,
  bottomCtaContent,
  trustContent
}: PricingProps = {}) {
  const [isAnnual, setIsAnnual] = useState(false);

  const defaultHeaderContent: PricingHeaderContent = {
    badgeText: "Pricing Plans",
    title: "GetSetTime: Free for First Month",
    description: "Try advanced scheduling features risk-free - no credit card required. Pay later only when you need it."
  };

  const defaultBottomCtaContent: PricingBottomCtaContent = {
    title: "Get a Customized Scheduling App",
    description:
      "Contact our support team to personalize the appointment booking system to fit your needs. Whether you operate a small business, a salon, or you are a professional doctor, wellness instructor, gym trainer, or similar.",
    buttons: [
      {
        text: "Schedule a Demo",
        href: `${LOGIN_URL}`,
        className: "bg-indigo-600 text-sm text-white px-5 py-3 rounded-xl"
      },
      {
        text: "Contact Sales",
        href: `${BASE_URL}/contact-us`,
        className: "bg-neutral-900 text-sm text-white px-5 py-3 rounded-xl"
      }
    ]
  };

  const defaultTrustContent: PricingTrustContent = {
    title: "Trusted by 50,000+ businesses worldwide",
    indicators: [
      { text: "99.9% Uptime SLA", dotColorClass: "bg-green-600" },
      { text: "SOC 2 Compliant", dotColorClass: "bg-indigo-600" },
      { text: "GDPR Ready", dotColorClass: "bg-purple-600" },
      { text: "24/7 Support", dotColorClass: "bg-orange-600" }
    ]
  };

  const mergedHeaderContent = headerContent ?? defaultHeaderContent;
  const mergedBottomCtaContent = bottomCtaContent ?? defaultBottomCtaContent;
  const mergedTrustContent = trustContent ?? defaultTrustContent;

  const pricingTiers: Array<PricingTier> = [
    {
      name: "Starter",
      subtitle: "Great for getting started",
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
      buttonText: "Start Free Trial",
      buttonLink: `${LOGIN_URL}`
    },
    {
      name: "Professional",
      subtitle: "Best for scaling businesses",
      price: "1499",
      period: "month + 18% GST",
      description: "Ideal for growing businesses that need advanced features and customization.",
      features: [
        "Unlimited appointments",
        "Advanced calendar sync",
        "Whatsapp & email reminders",
        "Custom branding",
        "Payment processing",
        "Staff management",
        "Advanced analytics",
        "API access",
        "Priority support"
      ],
      popular: true,
      buttonText: "Get Started",
      buttonLink: `${LOGIN_URL}`
    },
    {
      name: "Enterprise",
      subtitle: "For advanced operations",
      price: "2999",
      period: "month + 18% GST",
      description: "Per User for large organizations requiring advanced security, compliance, and support.",
      features: [
        "Everything in Professional",
        "Multi-location support",
        "Advanced user roles",
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
    <section id="pricing" className="relative py-20 overflow-hidden bg-[#f6f7fb] scroll-mt-20">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-80 w-80 rounded-full bg-emerald-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            {mergedHeaderContent.badgeText}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">{mergedHeaderContent.title}</h2>
          <p>{mergedHeaderContent.description}</p>
        </div>

        {/* BILLING TOGGLE SECTION */}
        <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />

        {/* PRICING CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {pricingTiers.map((tier: PricingTier) => (
            <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>

        {/* BOTTOM CTA SECTION */}
        <div className="text-center mt-10">
          <div className="bg-white/60 rounded-xl p-8 shadow-sm max-w-4xl mx-auto space-y-3">
            <h3 className="text-3xl font-bold text-neutral-900">{mergedBottomCtaContent.title}</h3>
            <p>{mergedBottomCtaContent.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {mergedBottomCtaContent.buttons.map((button) => (
                <Link key={button.text} href={button.href} className={button.className ?? "bg-neutral-900 text-sm text-white px-5 py-3 rounded-xl"}>{button.text}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* TRUST INDICATORS SECTION */}
        <div className="mt-10 text-center space-y-3">
          <div>{mergedTrustContent.title}</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {mergedTrustContent.indicators.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.dotColorClass}`}></div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};