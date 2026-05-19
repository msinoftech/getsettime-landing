import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "../component/ContactForm";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";

export const metadata: Metadata = {
  title: `Contact Us | ${APP_NAME}`,
  description: `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling, bookings, setup, and integrations. We usually reply within 24 hours.`,
  keywords: [ "contact GetSetTime", "schedule a demo", "appointment scheduling support", "booking software contact", "get in touch"],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    title: `Contact Us | ${APP_NAME}`,
    description: `Book a quick discussion or send a message. Speak with a product specialist about scheduling, bookings, and next steps. We reply within 24 hours.`,
    url: `${BASE_URL}/contact-us`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${APP_NAME}`,
    description: `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling and bookings. We reply within 24 hours.`,
  },
};

function InfoItem({ title, desc, icon, }: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-white/80 p-3 shadow-xl transition-all duration-300 hover:-translate-y-1">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25">{icon}</span>
      <div>
        <div className="text-base font-semibold text-neutral-900">{title}</div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${BASE_URL}/contact-us/#contactpage`,
        "url": `${BASE_URL}/contact-us`,
        "name": `Contact Us | ${APP_NAME}`,
        "description": `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling, bookings, setup, and integrations. We usually reply within 24 hours.`,
        "inLanguage": "en",
        "mainEntity": {
          "@type": "Organization",
          "name": `${APP_NAME}`,
          "url": `${BASE_URL}/contact-us`,
          "email": `${contactInfo.email}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": `${contactInfo.address}`,
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": `${contactInfo.email}`,
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00",
            },
          },
        },
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/contact-us/#contactpage`,
        "url": `${BASE_URL}/contact-us`,
        "name": `Contact Us | ${APP_NAME}`,
        "isPartOf": {
          "@id": `${BASE_URL}/contact-us/#contactpage`
        },
        "description": `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling, bookings, setup, and integrations. We usually reply within 24 hours.`,
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}` },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": `${BASE_URL}/contact-us` },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* left: Content */}
            <div className="h-full min-h-0">
              <div className="h-full rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_30%),linear-gradient(180deg,#f8faff_0%,#eef2ff_100%)] shadow-md p-4 sm:p-6 lg:p-8 shadow-md">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm">
                    <span>⚡</span>
                    quick discussion
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Book a quick discussion with a product specialist</h1>
                  <p>Speak with a product specialist to explore your requirements and next steps.</p>
                  <ContactForm />
                </div>
              </div>
            </div>
            {/* right: Image */}
            <div className="space-y-6">
              <div className="w-fit inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Contact us
              </div>
              <div className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Have a question about scheduling or bookings?</div>
              <p>Send us a quick message and our team will get back to you shortly. We’re happy to help you with setup, integrations, or general queries.</p>
              <div className="space-y-4">
                <InfoItem
                  title="Fast response"
                  desc="We usually reply within 24 hours."
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  }
                />
                <InfoItem
                  title="Simple onboarding"
                  desc="Get help setting up your booking flow."
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                  }
                />
                <InfoItem
                  title="Human support"
                  desc="Talk to real people, not bots."
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}