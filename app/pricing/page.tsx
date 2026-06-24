import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_NAME, BASE_URL, LOGIN_URL, REGISTER_GOOGLE_URL, contactInfo, } from "@/lib/config";
import { comparisonRows, pricingFaqItems, pricingTiers, EXTRA_SEAT_PRICE, } from "@/lib/pricing-data";
import Pricing from "../component/Pricing";
import PricingComparison from "../component/PricingComparison";
import Heading from "../component/Heading";
import Card from "../component/Card";
import { FaqSection } from "../component/FaqSection";

const heroHighlights = [
  "Plans from ₹999/month",
  "250 bookings/month on Starter",
  `Extra seats ₹${EXTRA_SEAT_PRICE}/month`,
];

const pageUrl = `${BASE_URL}/pricing`;

export const metadata: Metadata = {
  title: `Pricing | ${APP_NAME}`,
  description: `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
  keywords: ["GetSetTime pricing", "appointment scheduling pricing India", "clinic booking software cost", "salon scheduling plans", "online booking subscription"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
    url: pageUrl,
    type: "website",
    siteName: APP_NAME,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Pricing | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pricing | ${APP_NAME}`,
    description: `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const valueProps = [
  {
    badge: "Starter",
    stat: "250",
    statUnit: "bookings / mo",
    title: "Booking volume included",
    description: "Every Starter workspace ships with monthly appointment capacity — launch online scheduling without watching per-booking fees.",
    bullets: ["Included on Starter", "Unlimited on Pro & Enterprise", "Scale seats when you grow"],
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-indigo-100 text-indigo-600",
    valueColor: "text-indigo-600",
    border: "border-indigo-100 hover:border-indigo-200",
    glow: "from-indigo-500/10 via-transparent to-transparent",
    featured: false,
  },
  {
    badge: "Team scaling",
    stat: `₹${EXTRA_SEAT_PRICE}`,
    statUnit: "per extra seat",
    title: "Pay for seats, not surprises",
    description: "Plans bundle provider seats upfront. Add stylists, doctors, or therapists anytime without switching platforms.",
    bullets: ["1 · 2 · 5 seats by tier", "Prorated mid-cycle adds", "GST shown at checkout"],
    icon: (
      <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-violet-100 text-violet-600",
    valueColor: "text-violet-600",
    border: "border-violet-200 hover:border-violet-300 ring-1 ring-violet-100",
    glow: "from-violet-500/15 via-indigo-500/5 to-transparent",
    featured: true,
  },
  {
    badge: "Annual billing",
    stat: "10%",
    statUnit: "saved yearly",
    title: "Rewards when you commit",
    description: "Professional and Enterprise unlock 10% off with annual billing. Starter stays on simple monthly ₹999.",
    bullets: ["Pro & Enterprise only", "Starter stays monthly", "Transparent INR invoices"],
    icon: (
      <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-emerald-100 text-emerald-600",
    valueColor: "text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-200",
    glow: "from-emerald-500/10 via-transparent to-transparent",
    featured: false,
  },
];

const trustPoints = [
  {
    title: "Built for India",
    detail: "Clinics, salons & wellness studios",
    iconBg: "bg-indigo-100 text-indigo-600",
    border: "border-indigo-100 hover:border-indigo-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: "WhatsApp automation",
    detail: "Reminders on Pro & Enterprise",
    iconBg: "bg-green-100 text-green-600",
    border: "border-green-100 hover:border-green-200",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 01-1.49-.92 5.25 5.25 0 01-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 00 .18-.31.38.38 0 00 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 00-.5.23 2.1 2.1 0 00-.65 1.55A3.59 3.59 0 005 8.2 8.32 8.32 0 008.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 001.17.07 1.93 1.93 0 001.26-.88 1.67 1.67 0 00.11-.88c-.05-.07-.17-.12-.36-.21z" />
        <path d="M13.29 2.68A7.36 7.36 0 008 .5a7.44 7.44 0 00-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 003.55.9H8a7.44 7.44 0 005.29-12.72zM8 14.12a6.12 6.12 0 01-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 019.6-7.65 6.12 6.12 0 011.81 4.37A6.19 6.19 0 018 14.12z" />
      </svg>
    ),
  },
  {
    title: "Calendar sync",
    detail: "Google Calendar two-way",
    iconBg: "bg-violet-100 text-violet-600",
    border: "border-violet-100 hover:border-violet-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Human support",
    detail: "Real help, not ticket bots",
    iconBg: "bg-amber-100 text-amber-600",
    border: "border-amber-100 hover:border-amber-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function PricingPage() {
  const schemaOffers = pricingTiers.map((tier) => ({
    "@type": "Offer",
    "@id": `${pageUrl}/#offer`,
    "name": `${APP_NAME} ${tier.name}`,
    "price": tier.price,
    "priceCurrency": "INR",
    "description": tier.description,
    "url": `${pageUrl}`,
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        "description": "GetSetTime is a smart appointment scheduling platform trusted by 5,000+ doctors, salon owners, and wellness professionals. Simple to set up, smart enough to run itself.",
        "slogan": "Precision Scheduling for Modern Care",
        "foundingDate": "2025",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "10"
        },
        "areaServed": "Worldwide",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "areaServed": "Worldwide",
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "areaServed": "Worldwide"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/getsettime",
          "https://x.com/getsettime",
          "https://www.instagram.com/getsettime",
          "https://www.youtube.com/@GetSetTime"
        ]
  
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
        "alternateName": `${APP_NAME}`,
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "description": "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": `${pageUrl}`,
        "name": `Pricing | ${APP_NAME}`,
        "description": `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
        "inLanguage": "en",
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": { "@id": `${pageUrl}/#softwareapplication` },
        "mainEntity": { "@id": `${pageUrl}/#softwareapplication` },
        "breadcrumb": { "@id": `${pageUrl}/#breadcrumb` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": pageUrl },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}/#softwareapplication`,
        "name": `${APP_NAME}`,
        "alternateName": `${APP_NAME}`,
        "description": `${APP_NAME} gives service businesses a unified system for online bookings, WhatsApp reminders, calendar sync, customer records, staff scheduling, and performance insights.`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Appointment Scheduling Software",
        "operatingSystem": "All — Web-based, no installation required",
        "availableOnDevice": ["Desktop", "Mobile", "Tablet"],
        "url": `${pageUrl}`,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630,
        },
        "featureList": [
          "Online appointment booking for clients",
          "WhatsApp booking confirmations and reminders",
          "Automated email reminders and follow-ups",
          "Two-way Google Calendar sync",
          "Microsoft Teams and Zoom integration",
          "Slack and Gmail integration",
          "Custom branding and booking page",
          "Staff and multi-resource management",
          "Buffer time and availability configuration",
          "Payment processing",
          "Advanced analytics and reporting",
          "API access",
          "Multi-location support",
          "SSO integration",
          "No-show reduction automation"
        ],
        "inLanguage": "en",
        "author": {
          "@id": `${BASE_URL}/#organization`
        },
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "softwareVersion": "1.0",
        "screenshot": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        "installUrl": `${REGISTER_GOOGLE_URL}`,
        "releaseNotes": `${BASE_URL}/blog`,
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}/#product`,
        "name": `${APP_NAME}`,
        "description": `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
        "brand": { "@type": "Brand", "name": `${APP_NAME}` },
        "offers": schemaOffers,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faqpage`,
        "mainEntity": pricingFaqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content.replace(/<[^>]+>/g, ""),
          },
        })),
      },
    ],
  };

  return (
    <>
        {/* Structured Data */}
        <Script id="pricing-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        {/* Hero */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="absolute inset-0 -z-10 hidden sm:block">
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/3 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl px-4 sm:px-6 lg:px-8 items-center gap-12 lg:grid-cols-2 lg:gap-14">
            {/* Left section */}
            <div className="space-y-6">
              <Heading
                badge="Pricing"
                title="Simple plans built for"
                highlightText="clinics, salons & services."
                description={`Transparent INR pricing with ${APP_NAME} — seats and booking volume that match how you grow. No hidden tiers and no per-booking surprises on Starter.`}
                headingTag="h1"
                titleClassName="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900"
              />

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={REGISTER_GOOGLE_URL} target="_blank" aria-label="Get started - Pricing" className="flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm text-white">Get started — ₹999/mo</Link>
                <Link href={`${BASE_URL}/contact-us`} aria-label="Talk to sales - Pricing" className="flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm text-white">Talk to sales</Link>
              </div>

              <div className="flex flex-wrap gap-3 text-sm font-medium text-neutral-600">
                {heroHighlights.map((item) => (
                  <span key={item} className="rounded-full border border-neutral-200 bg-white px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right section */}
            <div className="relative animate-fade-in-scale">

              <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-2xl">

                {/* Window chrome */}
                <div className="relative z-10 border-b border-neutral-200 flex items-center justify-between px-3 py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 animate-ping"></div>
                    </div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-600"></div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600 animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-neutral-700">LIVE</span>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-white via-indigo-50/30 to-white p-2 sm:p-3">
                    {/* Decorative dotted backdrop */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(99,102,241,0.12)_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" aria-hidden />

                    {/* Billing header */}
                    <div className="relative mb-4 flex items-center gap-3">
                        <div className="relative shrink-0">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur" aria-hidden />
                            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            </div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">Billing</span>
                            <div className="truncate text-lg font-bold text-neutral-900">Plans &amp; Pricing</div>
                            <div className="truncate text-[11px] text-neutral-400">Simple, transparent, cancel anytime</div>
                        </div>
                        <div className="hidden items-center rounded-full bg-neutral-100 p-0.5 text-[10px] font-semibold sm:flex">
                            <span className="rounded-full bg-white px-2.5 py-1 text-neutral-700 shadow-sm">Monthly</span>
                            <span className="px-2 py-1 text-neutral-400">Yearly</span>
                        </div>
                    </div>

                    <div className="relative mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                        {[
                        { label: "Starter", value: "999", accent: "text-indigo-600", iconBg: "bg-indigo-600", ring: "ring-indigo-100", bg: "from-indigo-50 to-white", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                        { label: "Pro", value: "1499", accent: "text-violet-600", iconBg: "bg-violet-600", ring: "ring-violet-200", bg: "from-violet-50 to-white", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", popular: true },
                        { label: "Enterprise", value: "2999", accent: "text-emerald-600", iconBg: "bg-emerald-600", ring: "ring-emerald-100", bg: "from-emerald-50 to-white", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m9-12h.01M9 9h.01M9 12h.01M9 15h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01M15 15h.01" },
                        ].map((stat) => (
                        <div key={stat.label} className={`group relative overflow-hidden rounded-xl border border-neutral-100 bg-gradient-to-br ${stat.bg} p-3 shadow-sm ring-1 ${stat.ring} transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-4`}>
                            {stat.popular && (
                                <span className="absolute right-1.5 top-1.5 rounded-full bg-violet-600 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white">Popular</span>
                            )}
                            <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${stat.iconBg} text-white shadow-sm`}>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                                </svg>
                            </div>
                            <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">{stat.label}</div>
                            <div className={`mt-0.5 flex items-baseline gap-0.5 ${stat.accent}`}>
                                <span className="text-xl font-bold tabular-nums sm:text-2xl">₹{stat.value}</span>
                                <span className="text-[10px] font-medium text-neutral-400">/mo</span>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="relative rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
                        <div className="mb-3 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                <svg className="h-4 w-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                Plans &amp; billing
                            </div>
                            <div className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-indigo-200">
                                Compare
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                            </div>
                        </div>

                        <div className="space-y-2">
                          {pricingTiers.map((tier) => (
                              <div
                              key={tier.name}
                              className={`flex items-center gap-3 rounded-xl border p-3 transition hover:-translate-y-0.5 hover:shadow-md ${
                                  tier.popular
                                  ? "border-violet-200 bg-violet-50/60 ring-1 ring-violet-100"
                                  : tier.name === "Enterprise"
                                      ? "border-emerald-100 bg-emerald-50/60"
                                      : "border-neutral-100 bg-neutral-50"
                              }`}
                              >
                              <div
                                  className={`flex h-10 w-14 shrink-0 flex-col items-center justify-center rounded-lg text-center shadow-sm ring-1 ring-neutral-100 ${
                                  tier.popular ? "bg-violet-600 text-white" : "bg-white"
                                  }`}
                              >
                                  <span className={`text-[10px] font-medium uppercase ${tier.popular ? "text-violet-100" : "text-neutral-400"}`}>
                                  {tier.name === "Professional" ? "Pro" : tier.name.slice(0, 3)}
                                  </span>
                                  <span className={`text-sm font-bold ${tier.popular ? "text-white" : "text-neutral-800"}`}>
                                  ₹{tier.price}
                                  </span>
                              </div>
                              <div className="min-w-0 flex-1">
                                  <div className="font-semibold text-neutral-800">{tier.name}</div>
                                  <div className="text-sm text-neutral-700">{tier.seatTitle}</div>
                              </div>
                              <span
                                  className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold sm:text-xs ${
                                  tier.popular
                                      ? "bg-violet-100 text-violet-700"
                                      : tier.name === "Enterprise"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : "bg-neutral-200 text-neutral-700"
                                  }`}
                              >
                                  {tier.popular && <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />}
                                  {tier.popular ? "Popular" : tier.name === "Enterprise" ? "Custom" : "Start here"}
                              </span>
                              </div>
                          ))}
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            <div className="absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Heading
                badge="Why our pricing works"
                title="Built for predictable growth,"
                highlightText="not surprise bills."
                description="Every plan is designed around how clinics and salons actually scale — booking volume, team seats, and simple upgrades."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {valueProps.map((item) => (
                <Card
                  key={item.title}
                  iconNode={item.icon}
                  badge={item.badge}
                  stat={item.stat}
                  statUnit={item.statUnit}
                  statClassName={`text-3xl tracking-tight sm:text-4xl font-bold ${item.valueColor}`}
                  title={item.title}
                  titleClassName="mt-3 text-lg font-bold text-neutral-900"
                  description={item.description}
                  descriptionClassName="mt-2 flex-1 text-sm leading-relaxed text-neutral-600"
                  footer={
                    <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-neutral-700">
                          <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${item.iconBg}`}>
                            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                              <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.493-6.49a1 1 0 011.415 0z" clipRule="evenodd"/>
                            </svg>
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Plans + toggle + cards */}
        <Pricing variant="page" />

        {/* Feature comparison */}
        <section className="py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
                badge="Compare plans"
                title="Every feature, side by side"
                description="See exactly what you get on Starter, Professional, and Enterprise before you commit."
                wrapperClassName="mb-8 space-y-3 text-center"
            />
            <PricingComparison rows={comparisonRows} />
            </div>
        </section>

        {/* Extra seats + trust */}
        <section className="relative overflow-hidden pb-14 sm:pb-20">
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                {/* left: Extra seats */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-indigo-950 p-6 text-white shadow-2xl sm:p-8 lg:col-span-5">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" aria-hidden />
                  <div className="relative">
                    <Heading
                      badge="Add-on"
                      title="Need more providers?"
                      description="Scale your team without changing tools. Extra seats bill monthly and can be added anytime from your workspace."
                      wrapperClassName="space-y-3"
                      badgeClassName="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur"
                      titleClassName="text-2xl font-bold tracking-tight sm:text-3xl"
                      descriptionClassName=""
                    />

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                      <p className="text-sm text-indigo-200">Extra seat pricing</p>
                      <p className="mt-1 text-4xl tracking-tight">
                        ₹{EXTRA_SEAT_PRICE}
                        <span className="text-lg font-semibold text-white"> / month</span>
                      </p>
                      <p className="mt-1 text-white">+ 18% GST · prorated when added mid-cycle</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Add anytime", "No platform switch", "Works on all plans"].map((chip) => (
                        <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white">{chip}</span>
                      ))}
                    </div>

                    <Link href={`${BASE_URL}/contact-us`} aria-label="Talk to sales about teams - Pricing" className="mt-6 inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">Talk to sales about teams</Link>
                  </div>
                </div>

                {/* right: Why teams choose us */}
                <div className="lg:col-span-7">
                    <Heading
                        badge="Why teams choose us"
                        title="Everything you need to run appointments with confidence."
                        description="From solo practitioners to multi-chair salons — transparent pricing and product depth that grows with you."
                        wrapperClassName="space-y-3"
                    />

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {trustPoints.map((point) => (
                        <div key={point.title} className={`group flex gap-4 rounded-2xl border bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${point.border}`}>
                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition group-hover:scale-105 ${point.iconBg}`}>{point.icon}</div>
                            <div className="min-w-0">
                            <p className="font-semibold text-neutral-900">{point.title}</p>
                            <p className="mt-0.5 text-sm text-neutral-500">{point.detail}</p>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="w-80 text-sm text-neutral-600">See reminders, analytics, and industry workflows on the features page.</p>
                        <Link href={`${BASE_URL}/features`} aria-label="All features - Pricing" className="bg-indigo-600 text-white text-sm px-4 py-2.5 rounded-xl flex items-center justify-center gap-3">All features →</Link>
                    </div>
                </div>
              </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-14 sm:py-20">
        
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
              <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            </div>

            <div className="relative mx-auto grid max-w-7xl px-4 sm:px-6 lg:px-8 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
              {/* left: Title */}
              <div className="space-y-3">
                  <Heading
                  badge="Pricing FAQ"
                  title="Questions before you subscribe?"
                  description="Clear answers on bookings, GST, seats, and plan changes."
                  />
                  
                  <div className="grid gap-4 sm:grid-cols-2 mt-6 hidden sm:grid">
                  <Card title="Smart scheduling" description="Highlight automation, reminders, and live availability." icon={<svg className="h-8 w-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />

                  <Card title="Build trust" description="Reduce friction with short supportive answers and better clarity." icon={<svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                  
                  <Card title="Premium feel" description="Matches polished hero and feature sections better than a plain list." icon={<svg className="h-8 w-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                  
                  <Card title="Easy growth" description="Scale bookings smoothly with structured workflows and clear next steps." icon={<svg fill="#00a63e" className="h-8 w-8" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" stroke="#000000" strokeWidth="8.192"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"></path> <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283 C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z"></path> <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"></path> </g> </g> </g></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                  </div>

              </div>
              {/* right: FAQ Section */}
              <div>
                  <FaqSection items={pricingFaqItems} />
              </div>
            </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="w-full bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 sm:p-10">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                {/* left: Content */}
                <div className="space-y-3">
                  <Heading
                    badge="Built for Modern Business"
                    title="Ready for GetSetTime To Manage Your Appointments"
                    description="Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more."
                    titleClassName="text-3xl font-bold text-white md:text-4xl lg:text-[40px]"
                    descriptionClassName = "text-white"
                  />
                  
                  <div className="mt-8">
                    <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Get Started - Pricing" className="rounded-xl bg-white px-4 py-2.5 text-sm text-indigo-600 transition">Get Started</Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-white">
                    {['Online booking', 'Auto reminders', 'Team calendar'].map((item) => (
                      <span key={item}>✔ {item}</span>
                    ))}
                  </div>
                </div>
                {/* right: Image */}
                <div className="relative mx-auto w-full hidden lg:block">
                  <div className="rounded-xl bg-white/14 sm:p-4 backdrop-blur-xl">
                    <div className="rounded-xl bg-white p-3 sm:p-4 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-neutral-900">Today’s bookings</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-3">
                        {[
                          { time: '10:00 AM', title: 'Consultation' },
                          { time: '12:30 PM', title: '15 Minutes chat' },
                          { time: '03:00 PM', title: 'Follow-up Call' },
                        ].map((item) => (
                          <div key={item.time} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 sm:px-4 py-2 sm:py-3">
                            <div>
                              <div className="text-sm sm:text-base font-medium text-neutral-900">{item.title}</div>
                              <div className="text-xs sm:text-sm text-neutral-600">{item.time}</div>
                            </div>
                            <span className="rounded-md bg-emerald-50 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-emerald-700">Confirmed</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                        <div>Reminders sent</div>
                        <div className="text-2xl font-bold text-neutral-900">1,284</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-5 -bottom-6 hidden lg:block rounded-xl bg-white px-4 py-3 shadow-xl animate-float">
                    <div>No-show reduction</div>
                    <div className="text-xl font-bold text-neutral-900">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
