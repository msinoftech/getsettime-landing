import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "../component/ContactForm";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";


export const metadata: Metadata = {
  title: `Contact Us | ${APP_NAME}`,
  description: `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling, bookings, setup, and integrations. We usually reply within 24 hours.`,
  keywords: [
    "contact GetSetTime",
    "schedule a demo",
    "appointment scheduling support",
    "booking software contact",
    "get in touch",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    title: `Contact Us | ${APP_NAME}`,
    description: `Book a quick discussion or send a message. Speak with a product specialist about scheduling, bookings, and next steps. We reply within 24 hours.`,
    url: `${BASE_URL}/contact-us`,
    type: "website",
    siteName: APP_NAME,
    locale: "en_US",
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
    <div className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-0.5 text-sm text-slate-600">{desc}</p>
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
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Organization",
          "name": APP_NAME,
          "url": `${BASE_URL}/contact-us`,
          "email": contactInfo.email,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": contactInfo.address,
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": contactInfo.email,
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
        "inLanguage": "en-US"
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
      <section className="relative pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="h-full min-h-0">
              <div className="h-full rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-blue-50/40 p-6 sm:p-8 lg:p-10">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">Book a Quick Discussion</h2>
                  <p className="text-slate-600 text-base sm:text-lg">Speak with a product specialist to explore your requirements and next steps.</p>
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="h-full min-h-0 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-blue-50/40 p-6 sm:p-8 lg:p-10 flex flex-col">
              <span className="w-fit mb-4 rounded-full bg-blue-100 text-blue-700 px-4 py-1.5 text-sm font-medium">Contact us</span>
              <h2 className="text-3xl font-bold text-slate-900 leading-snug sm:text-4xl">Have a question about scheduling or bookings?</h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">Send us a quick message and our team will get back to you shortly. We’re happy to help you with setup, integrations, or general queries.</p>
              <div className="mt-10 space-y-4">
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