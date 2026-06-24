import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo, REGISTER_URL } from "@/lib/config";
import { businessCategories, solutionPages } from "@/lib/solutions-data";
import SolutionsCategoryDashboard from "./SolutionsCategoryDashboard";
import Heading from "@/app/component/Heading";
import ContactForm from "@/app/component/ContactForm";

const pageUrl = `${BASE_URL}/solutions`;

export const metadata: Metadata = {
  title: `All Business Types | ${APP_NAME}`,
  description: `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
  keywords: [ "appointment scheduling software", "business types", "doctor booking software", "dental appointment software", "salon scheduling software", "service business booking"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `All Business Types | ${APP_NAME}`,
    description: `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
    url: pageUrl,
    type: "website",
    siteName: APP_NAME,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `All Business Types | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `All Business Types | ${APP_NAME}`,
    description: `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

type AccentKey = "indigo" | "violet" | "emerald" | "orange";

const accentStyles: Record<AccentKey, { text: string; button: string; chip: string; num: string; glow: string; check: string }> = {
  indigo: {
    text: "text-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700",
    chip: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100",
    num: "bg-indigo-600",
    glow: "from-indigo-500/15 via-transparent to-transparent",
    check: "text-indigo-500",
  },
  violet: {
    text: "text-violet-600",
    button: "bg-violet-600 hover:bg-violet-700",
    chip: "bg-violet-50 text-violet-700 ring-1 ring-violet-100",
    num: "bg-violet-600",
    glow: "from-violet-500/15 via-transparent to-transparent",
    check: "text-violet-500",
  },
  emerald: {
    text: "text-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700",
    chip: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    num: "bg-emerald-600",
    glow: "from-emerald-500/15 via-transparent to-transparent",
    check: "text-emerald-500",
  },
  orange: {
    text: "text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
    chip: "bg-orange-50 text-orange-700 ring-1 ring-orange-100",
    num: "bg-orange-600",
    glow: "from-orange-500/15 via-transparent to-transparent",
    check: "text-orange-500",
  },
};

function CategoryDashboardBlock({
  category,
  index,
}: {
  category: (typeof businessCategories)[number];
  index: number;
}) {
  const dashboardOnLeft = index % 2 === 0;
  const accent = accentStyles[(category.dashboard.accentColor as AccentKey)] ?? accentStyles.indigo;

  const content = (
    <div className="relative flex h-full flex-col justify-center space-y-5">
      <div className="flex items-center gap-3">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${accent.chip}`}>
          {category.dashboard.label}
        </span>
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">{category.title}</h3>
      <p>{category.description}</p>

      <ul className="space-y-2.5">
        {category.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-neutral-700">
            <svg className={`mt-0.5 h-4 w-4 shrink-0 ${accent.check}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {category.businessTypes.map((type) => (
          <Link key={type.label} href={type.href} className="inline-block rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 sm:text-sm">
            {type.label}
          </Link>
        ))}
      </div>

      <Link href={category.learnMoreHref} aria-label={`Learn more about ${category.title} - Solutions`} className={`inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition ${accent.button}`}>
        Sign Up for Free
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );

  const dashboard = (
    <SolutionsCategoryDashboard
      dashboard={category.dashboard}
      side={dashboardOnLeft ? "left" : "right"}
    />
  );

  return (
    <article id={category.id} className="group relative scroll-mt-28 overflow-hidden rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-sm transition duration-300 hover:shadow-xl sm:p-8">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow}`} aria-hidden />
      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={dashboardOnLeft ? "lg:order-2" : "lg:order-1"}>{content}</div>
        <div className={dashboardOnLeft ? "lg:order-1" : "lg:order-2"}>{dashboard}</div>
      </div>
    </article>
  );
}

export default function SolutionsPage() {
  
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
        "description": `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
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
        "name": `All Business Types | ${APP_NAME}`,
        "description": `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": `${APP_NAME}`,
          "url": `${BASE_URL}`,
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "All Business Types", "item": pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#solutions`,
        "name": `${APP_NAME} Business Types`,
        "numberOfItems": solutionPages.length,
        "itemListElement": solutionPages.map((solution, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": solution.title,
          "url": `${BASE_URL}${solution.href}`,
        })),
      },
    ],
  };

  return (
    <>
      <Script id="solutions-page-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heading
              badge="Solutions for every service business"
              title="One scheduling platform,"
              highlightText="tailored to your industry."
              headingTag="h1"
              description={`${APP_NAME} powers online booking, WhatsApp reminders, and smart calendars for clinics, salons, studios, and personal-service pros — each with a dashboard built for how they work.`}
              wrapperClassName="space-y-4"
              titleClassName="text-4xl font-black tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:gap-8">
            {businessCategories.map((category, index) => (
              <CategoryDashboardBlock key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep-dive guides */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading
            badge="Go deeper"
            title="In-depth guides for popular"
            highlightText="business types."
            description="Explore dedicated breakdowns of how GetSetTime fits each profession — features, workflows, and setup tips."
            wrapperClassName="text-center mb-6"
          />

          <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
            {solutionPages.map((solution) => (
              <Link key={solution.slug} href={solution.href} aria-label={`${solution.title} - Solutions`} className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-indigo-700">{solution.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                    Read guide
                    <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
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
                  <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Get Started - Solutions" className="rounded-xl bg-white px-4 py-2.5 text-sm text-indigo-600 transition">Sign Up for Free</Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-white">
                  {['Online booking', 'Auto reminders', 'Team calendar'].map((item) => (
                      <span key={item}>✔ {item}</span>
                  ))}
                  </div>
              </div>
              {/* right: Image */}
              <div className="relative mx-auto w-full bg-white p-4 sm:p-8 rounded-xl shadow-xl">
                  <ContactForm />               
              </div>
              </div>
          </div>
          </div>
      </section>
    </>
  );
}
