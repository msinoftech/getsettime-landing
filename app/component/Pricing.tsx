"use client";
import { REGISTER_GOOGLE_URL, REGISTER_URL } from "@/lib/config";
import {
  pricingTiers,
  applyRegionalPrices,
  formatPrice,
  formatRegionalPrice,
  type PricingTier,
  type RegionalPricing,
} from "@/lib/pricing-data";
import { useRegionalPricing } from "./useRegionalPricing";
import Link from "next/link";
import type { FC } from "react";
import { useMemo, useState } from "react";
import Heading from "./Heading";

interface PricingHeaderContent {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const defaultPricingHeaderContent: Required<Pick<PricingHeaderContent, "badge" | "title" | "description" | "wrapperClassName">> = {
  badge: "Pricing Plans",
  title: "Choose the plan that fits your team",
  description: "Transparent monthly pricing in {currency}. Toggle annual billing on Professional and Enterprise to save 10%.",
  wrapperClassName: "mb-6 space-y-3 text-center",
};

function resolvePricingHeaderDescription(template: string, currencyLabel: string) {
  return template.replaceAll("{currency}", currencyLabel);
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

export type { PricingHeaderContent };

export const PricingCard: FC<{
  tier: PricingTier;
  isAnnual: boolean;
  region: RegionalPricing;
}> = ({ tier, isAnnual, region }) => {
  const annualDiscount = tier.name === "Starter" || tier.price === "Free" ? 1 : 0.9;
  const monthlyPrice = Number(tier.price);
  const annualPrice = Math.round(monthlyPrice * annualDiscount);
  const displayPrice = tier.price === "Free" ? "Free" : isAnnual ? `${annualPrice}` : `${monthlyPrice}`;

  return (
    <div className={`pricing-card bg-white relative h-full rounded-2xl p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2 hover:drop-shadow-xl space-y-4 ${ tier.popular ? 'border-indigo-300 drop-shadow-xl drop-shadow-indigo-200/70 ring-2 ring-indigo-200' : 'drop-shadow-xl drop-shadow-slate-200/70' }`}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-xl drop-shadow-lg">Most Popular</div>
        </div>
      )}

      <div className="relative space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="basis-1/2">
            <div className="font-medium uppercase tracking-widest text-indigo-600">{tier.name}</div>
            <div>{tier.subtitle}</div>
          </div>
          <span className="basis-1/2 text-right">
            {tier.price === "Free" || !region.taxLabel ? (
              ""
            ) : (
              <span className="inline-block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                {region.taxLabel}
              </span>
            )}
          </span>
        </div>
        
        <div className="relative">
          <span className="text-4xl font-bold text-neutral-900">
            {tier.price === "Free"
              ? displayPrice
              : formatPrice(Number(displayPrice), region.currency)}
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

      <Link href={tier.buttonLink} target="_blank" aria-label={`Start with - ${tier.name} plan`} className={`w-full flex items-center justify-center rounded-xl px-4 py-2.5 text-sm transition-all duration-300 ${
      tier.popular ? 'bg-indigo-600 text-white drop-shadow-lg drop-shadow-indigo-500/25 hover:drop-shadow-xl' : 'border border-slate-200 bg-neutral-900 text-white hover:bg-neutral-800' }`}
      >{tier.buttonText}</Link>
    </div>
  );
};

export const BillingToggle: FC<{ isAnnual: boolean; onChange: (annual: boolean) => void }> = ({ isAnnual, onChange }) => (
  <div className="my-10 flex flex-col items-center gap-4 px-4">
    <div className="relative">
      <div className="pointer-events-none absolute -right-2 -top-3 z-20 sm:-right-5 sm:-top-3.5" aria-hidden>
        <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg shadow-emerald-500/25 ring-2 ring-white sm:px-3 sm:text-[11px]">
          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          Save 10%
        </div>
      </div>

      <div role="radiogroup" aria-label="Billing cycle" className="relative grid grid-cols-2 rounded-2xl border border-slate-200/90 bg-slate-50/90 p-1.5 shadow-[0_10px_40px_-16px_rgba(15,23,42,0.25)] backdrop-blur-sm">
        <div aria-hidden className={`pointer-events-none absolute bottom-1.5 top-1.5 w-[calc(50%-6px)] rounded-xl bg-white shadow-[0_4px_14px_-6px_rgba(79,70,229,0.35)] ring-1 ring-indigo-100 transition-all duration-300 ease-out ${ isAnnual ? "left-[calc(50%+3px)]" : "left-1.5" }`}/>

        <button
          type="button"
          role="radio"
          aria-checked={!isAnnual}
          onClick={() => onChange(false)}
          className={`relative z-10 flex min-w-[7.25rem] flex-col items-center justify-center rounded-xl px-4 py-3 transition-colors duration-200 sm:min-w-[8.75rem] sm:px-6 cursor-pointer ${
            !isAnnual ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <span className="text-sm font-semibold">Monthly</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={isAnnual}
          onClick={() => onChange(true)}
          className={`relative z-10 flex min-w-[7.25rem] flex-col items-center justify-center rounded-xl px-4 py-3 transition-colors duration-200 sm:min-w-[8.75rem] sm:px-6 cursor-pointer ${
            isAnnual ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <span className="text-sm font-semibold">Annual</span>
        </button>
      </div>
    </div>
  </div>
);

export default function Pricing({
  variant = "home",
  headerContent,
}: PricingProps = {}) {
  const [isAnnual, setIsAnnual] = useState(false);
  const isPage = variant === "page";
  const region = useRegionalPricing();

  const plansHeading = {
    badge: headerContent?.badge ?? defaultPricingHeaderContent.badge,
    title: headerContent?.title ?? defaultPricingHeaderContent.title,
    highlightText: headerContent?.highlightText,
    description: resolvePricingHeaderDescription(
      headerContent?.description ?? defaultPricingHeaderContent.description,
      region.currencyLabel,
    ),
    wrapperClassName: headerContent?.wrapperClassName ?? defaultPricingHeaderContent.wrapperClassName,
    titleClassName: headerContent?.titleClassName,
    descriptionClassName: headerContent?.descriptionClassName,
  };

  const tiers = useMemo(() => {
    const localized = applyRegionalPrices(pricingTiers, region);
    return localized.map((tier) =>
      tier.name === "Enterprise"
        ? tier
        : { ...tier, buttonLink: tier.buttonText === "Get Started" ? REGISTER_GOOGLE_URL : tier.buttonLink }
    );
  }, [region]);

  return (
    <section id="pricing" className={`relative overflow-hidden bg-[#f6f7fb] scroll-mt-20 ${isPage ? "py-10 sm:py-14" : "py-20"}`}>
      
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-80 w-80 rounded-full bg-emerald-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">

        {!isPage && (
          <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-4 drop-shadow-xl drop-shadow-indigo-600/20 sm:p-8 md:p-10 max-w-7xl mx-auto">
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
              <div className="rounded-3xl bg-white p-4 drop-shadow-2xl sm:p-6 space-y-3">
                <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">Included Free</div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight text-slate-950">250</span>
                  <span className="pb-2 text-sm font-bold text-slate-600">bookings/month</span>
                </div>
                <div className="rounded-2xl bg-indigo-50 p-4">
                  <div className="text-sm">Start accepting appointments without payment. Upgrade when your workspace needs more seats or more capacity.</div>
                </div>
                <Link href={REGISTER_URL} target="_blank" aria-label="Start Free Now" role="button" className="mt-5 flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
                  Start Free Now
                </Link>
              </div>
            </div>
          </div>
        )}

        <Heading
          badge={plansHeading.badge}
          title={plansHeading.title}
          highlightText={plansHeading.highlightText}
          description={plansHeading.description}
          wrapperClassName={plansHeading.wrapperClassName}
          titleClassName={plansHeading.titleClassName}
          descriptionClassName={plansHeading.descriptionClassName}
        />        

        <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier: PricingTier) => (
            <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} region={region} />
          ))}
        </div>

        {/* BOTTOM CTA SECTION */}
        <div className="mt-10 rounded-2xl bg-white p-6 drop-shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-2">
              <h3 className="text-xl text-neutral-900 font-bold">Need more service providers?</h3>
              <p>Add extra seats anytime as your team grows. Your pricing can scale based on the number of providers using GetSetTime.</p>
            </div>
            <div className="rounded-xl bg-neutral-900 px-6 py-4 text-white">
              <p className="text-sm text-white">Extra Seat</p>
              <p className="text-2xl font-bold">
                {formatRegionalPrice("extraSeat", region)} / month
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
