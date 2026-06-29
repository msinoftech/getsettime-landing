"use client";
import { REGISTER_GOOGLE_URL, REGISTER_URL } from "@/lib/config";
import { pricingTiers, EXTRA_SEAT_PRICE, type PricingTier } from "@/lib/pricing-data";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import Heading from "./Heading";

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
  variant?: "home" | "page";
}

export const PricingCard: FC<{ tier: PricingTier; isAnnual: boolean }> = ({ tier, isAnnual }) => {
  const annualDiscount = tier.name === "Starter" || tier.price === "Free" ? 1 : 0.9; // no annual discount on Starter
  const monthlyPrice = Number(tier.price);
  const annualPrice = Math.round(monthlyPrice * annualDiscount);
  const displayPrice = tier.price === "Free" ? "Free" : isAnnual ? `${annualPrice}` : `${monthlyPrice}`;

  return (
    <div className={`pricing-card relative h-full rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl space-y-4 ${ tier.popular ? 'border-indigo-300 bg-white/75 shadow-xl shadow-indigo-200/50 ring-1 ring-indigo-200 backdrop-blur' : 'border-white/70 bg-white/80 shadow-xl shadow-slate-200/70 backdrop-blur' }`}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg">Most Popular</div>
        </div>
      )}

      <div className="relative space-y-4">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
          <div>
            <div className="font-medium uppercase tracking-widest text-indigo-600">{tier.name}</div>
            <div>{tier.subtitle}</div>
          </div>
          <span>
            {tier.price === "Free" ? "" : <><span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">GST Extra</span></>}
          </span>
        </div>
        
        <div className="relative">
          <span className="text-4xl font-bold text-neutral-900">
            {tier.price === "Free" ? displayPrice : <><span className="rate-sign">₹</span>{displayPrice}</>}
          </span>
          {tier.price !== "Free" && (
            <span className="text-neutral-600 ml-1">
              /{isAnnual ? `${tier.period}` : tier.period}
            </span>
          )}
          {isAnnual && tier.price !== "Free" && annualDiscount < 1 && (
            <div className="text-sm text-emerald-600 font-medium mt-1">Save 10% annually</div>
          )}
        </div>

        <div>{tier.description}</div>

        {tier.seatTitle && tier.seatDescription && (
          <div className="rounded-xl bg-indigo-50 p-4 space-y-1">
            <div className="text-md font-semibold text-indigo-700">{tier.seatTitle}</div>
            <div className="text-sm text-indigo-600">{tier.seatDescription}</div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex justify-start items-center gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-indigo-700">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.493-6.49a1 1 0 011.415 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <span className="text-sm text-neutral-600">{feature}</span>
          </div>
        ))}
      </div>

      <Link href={tier.buttonLink} target="_blank" aria-label={`${tier.buttonText} - Pricing Card`} className={`w-full flex items-center justify-center rounded-xl px-4 py-2.5 text-sm transition-all duration-300 ${
      tier.popular ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl' : 'border border-slate-200 bg-neutral-900 text-white hover:bg-neutral-800' }`}
      >{tier.buttonText}</Link>
    </div>
  );
};

export const BillingToggle: FC<{ isAnnual: boolean; onChange: (annual: boolean) => void }> = ({ isAnnual, onChange }) => (
  <div className="flex justify-center mb-16">
    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 p-2 shadow-lg shadow-slate-200/60 backdrop-blur">
      <button type="button" onClick={() => onChange(false)} className={`rounded-xl px-5 py-2 text-sm cursor-pointer ${ !isAnnual ? "bg-indigo-600 text-white shadow" : "bg-white text-neutral-600 hover:bg-indigo-500/10 hover:text-indigo-600" }`}>Monthly</button>
      <button type="button" onClick={() => onChange(true)} className={`rounded-xl px-5 py-2 text-sm cursor-pointer ${ isAnnual ? "bg-indigo-600 text-white shadow" : "bg-white text-neutral-600 hover:bg-indigo-500/10 hover:text-indigo-600" }`}>Annual</button>
      <div className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-md">Save 10%</div>
    </div>
  </div>
);

export default function Pricing({ bottomCtaContent, trustContent, variant = "home" }: PricingProps = {}) {
  const [isAnnual, setIsAnnual] = useState(false);
  const isPage = variant === "page";

  const tiers = pricingTiers.map((tier) =>
    tier.name === "Enterprise"
      ? tier
      : { ...tier, buttonLink: tier.buttonText === "Get Started" ? REGISTER_GOOGLE_URL : tier.buttonLink }
  );

  return (
    <section id="pricing" className={`relative overflow-hidden bg-[#f6f7fb] scroll-mt-20 ${isPage ? "py-10 sm:py-14" : "py-20"}`}>
      
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-80 w-80 rounded-full bg-emerald-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {!isPage && (
          <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-4 shadow-2xl shadow-indigo-600/20 sm:p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
              <div>
                <Heading
                  badge="Important Pricing Benefit"
                  title="Start Free with 250 Bookings/Month"
                  description="Every workspace gets the first 250 appointments free. After that, choose a plan based on the number of seats/service providers you need."
                  titleClassName="text-3xl font-bold text-white md:text-4xl lg:text-[40px]"
                  descriptionClassName="text-indigo-50"
                />
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white">
                  <span className="rounded-xl bg-white/15 px-4 py-2 ring-1 ring-white/20">Free for every workspace</span>
                  <span className="rounded-xl bg-white/15 px-4 py-2 ring-1 ring-white/20">Upgrade only when you grow</span>
                  <span className="rounded-xl bg-white/15 px-4 py-2 ring-1 ring-white/20">Plans based on seats</span>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-2xl sm:p-6 space-y-3">
                <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">Included Free</div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight text-slate-950">250</span>
                  <span className="pb-2 text-sm font-bold text-slate-600">bookings/month</span>
                </div>
                <div className="rounded-2xl bg-indigo-50 p-4">
                  <div className="text-sm">Start accepting appointments without payment. Upgrade when your workspace needs more seats or more capacity.</div>
                </div>
                <Link href={REGISTER_URL} target="_blank" className="mt-5 flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
                  Start Free Now
                </Link>
              </div>
            </div>
          </div>
        )}

        {!isPage && (
          <Heading
            badge="Pricing Plans"
            title="Choose the plan that fits your team"
            description="Transparent monthly pricing in INR. Toggle annual billing on Professional and Enterprise to save 10%."
            wrapperClassName="mb-6 space-y-3 text-center"
          />
        )}

        <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-6">
          {tiers.map((tier: PricingTier) => (
            <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>

        {/* BOTTOM CTA SECTION */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-2">
              <h3 className="text-xl text-neutral-900 font-bold">Need more service providers?</h3>
              <p>Add extra seats anytime as your team grows. Your pricing can scale based on the number of providers using GetSetTime.</p>
            </div>
            <div className="rounded-xl bg-neutral-900 px-6 py-4 text-white">
              <p className="text-sm text-white">Extra Seat</p>
              <p className="text-2xl font-bold">₹{EXTRA_SEAT_PRICE} / month</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};