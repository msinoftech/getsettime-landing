import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { APP_NAME, BASE_URL } from "@/lib/config";
import Hero from "./component/HeroSection";
import Features from "./component/Features";
import Support from "./component/Support";
import Pricing from "./component/Pricing";
import TrustedCompanies from "./component/TrustedCompanies";
import { FaqSection } from "./component/FaqSection";

export const metadata: Metadata = {
  title: `${APP_NAME} – Smart Scheduling App for Appointment Automation`,
  description: `${APP_NAME} Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.`,
  keywords: [ "appointment scheduling app", "scheduling management software", "online appointment booking", "calendar management system", " scheduling tool", "appointment management app"],
  
  alternates: {
    canonical: `${BASE_URL}`,
  },

  openGraph: {
    title: `${APP_NAME} – Smart Scheduling App for Appointment Automation`,
    description: `Manage appointments, automate scheduling, and organize your calendar effortlessly with ${APP_NAME}. Perfect for businesses and professionals.`,
    url: `${BASE_URL}`,
    type: "website",
    siteName: APP_NAME,
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/social-hero.jpg`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} – Appointment & Scheduling Management Software`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} – Smart Scheduling App for Appointment Automation`,
    description: `${APP_NAME} Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.`,
    images: [`${BASE_URL}/twitter-card.jpg`],
  },
};


export default function Home() {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": APP_NAME,
        "url": `${BASE_URL}`,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/getsettime-logo.svg`,
          "width": 512,
          "height": 512
        },
        "description": `${APP_NAME} Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English, Hindi, Punjabi"],
          "areaServed": "Worldwide"
        }
      },
  
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": APP_NAME,
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "description": `${APP_NAME} Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.`,
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },

      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#homepage`,
        "url": `${BASE_URL}`,
        "name": `Home`,
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "about": {
          "@id": `${BASE_URL}/#software`
        },
        "description": `${APP_NAME} Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.`,
        "inLanguage": "en-US"
      },
  
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#software`,
        "name": APP_NAME,
        "alternateName": "Get Set Time",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "SchedulingSoftware",
        "operatingSystem": "Web",
        "url": `${BASE_URL}`,
        "description": `${APP_NAME} Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.`,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "description": "Free and Premium plans available"
        },
        "featureList": [
          "Personalized Booking System",
          "Simple Setup and easy-to-use",
          " Compliance with Authority rules",
          "Brand Customisation",
          "Automatic Email Reminders",
          "Two-way Calendar Sync"
        ],
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        }
      }
    ]
  };
  
  return (
    <>
      {/* Add Structured Data for Home Page */}
      <Script id="homepage-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2),}}/>

      <Hero />

      <TrustedCompanies />

      <Features />

      <section id="resources" className="relative py-20">
        <div className="absolute w-full inset-0 bg-gradient-to-br from-transparent via-indigo-200/20 to-transparent pointer-events-none"></div>
        <div className="space-y-20 relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-xl">
                <Image src="/every-scheduling.svg" alt="Get set time schedulling need" width={600} height={500} />
              </div>
            </div>
            {/* Right: Content */}
            <div className="lg:col-span-6 order-1 lg:order-none space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">Smart Scheduling, Maximum Efficiency</h3>
              <p className="text-neutral-600">Our scheduling system fits the way you already work. It integrates seamlessly with your existing processes and provides a pleasant booking experience for your customers.</p>
              <div className="relative">
                <ul className="space-y-4 w-full">
                  <li className="flex items-center rounded-xl transform transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white mr-3">✓</span>
                    <span className="text-gray-800font-medium">Customise scheduling to align with your business processes.</span>
                  </li>
                  <li className="flex items-center rounded-xl transform transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white mr-3">✓</span>
                    <span className="text-gray-800 font-medium">Set your availability and create events as needed.</span>
                  </li>
                  <li className="flex items-center rounded-xl transform transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white mr-3">✓</span>
                    <span className="text-gray-800 font-medium">Automate workflows to ensure a seamless booking experience.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* left: Content */}
            <div className="lg:col-span-6 order-1 lg:order-none space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">Get every booking on your terms (Your Business, your rules)</h3>
              <p className="text-neutral-600">GetSetTime lets you manage your brand, appointments, staff, and resources on an easy-to-use dashboard with a few clicks, automating the details so every appointment feels professional.</p>
              <div className="relative">
                <ul className="space-y-4 w-full">
                  <li className="flex items-center rounded-xl transform transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white mr-3">✓</span>
                    <span className="text-gray-800 font-medium">Centralize all bookings, teams, and resources in a single smart calendar.</span>
                  </li>
                  <li className="flex items-center rounded-xl transform transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white mr-3">✓</span>
                    <span className="text-gray-800 font-medium">Automatic confirmations and reminders</span>
                  </li>
                  <li className="flex items-center rounded-xl transform transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white mr-3">✓</span>
                    <span className="text-gray-800 font-medium">Track schedules, changes, and cancellations instantly</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* right: Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-xl">
                <Image src="/your-rule.jpg" alt="Get set time your business your rules" width={600} height={500} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Pricing />

      <Support />

      <section className="relative pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-neutral-900">Frequently Asked Questions</h2>
        </div>
        <FaqSection
          items={[
            {
              title: "What is GetSetTime?",
              content: `GetSetTime is a simple-to-use scheduling software for the service-based professionals, including doctors, clinics, salons, and others whose day revolves around booking appointments. Instead of playing phone tag or manually managing a chaotic calendar, it lets clients book themselves online while the system handles the rest. It syncs seamlessly with Calendar and operational tools, keeping everything in one place, and automatically sends booking confirmations and reminders via WhatsApp and SMS — keeping both businesses and clients in the loop and reducing no-shows. In short, it takes the admin headache out of scheduling so you can focus on actually serving your clients.`,
            },
            {
              title: "Can GetSetTime integrate with Google Calendar and Apple Calendar?",
              content: `GetSetTime supports real-time integration with Google Calendar and Apple Calendar, ensuring centralized scheduling and accurate availability updates. This prevents scheduling conflicts and keeps all appointments synchronized across devices and platforms.`,
            },
            {
              title: "How does GetSetTime reduce no-shows and manual scheduling work?",
              content: `GetSetTime automates the entire booking process—from client appointment selection to confirmation and reminders—eliminating manual follow-ups and reducing scheduling errors. Automated notifications, real-time calendar sync, and centralized management help professionals maintain organized, reliable appointment workflows.`,
            },
            {
              title: "Can GetSetTime be customized for different types of practices?",
              content: `Yes. GetSetTime allows customization of booking settings, availability slots, services, buffer times, notifications, and reminder preferences. This makes it suitable for healthcare clinics, diagnostic centers, salons, consultants, and other similar professions.`,
            },
            {
              title: "Is GetSetTime affordable for small clinics and independent professionals?",
              content: `GetSetTime is designed to be a cost-effective appointment booking solution for small clinics, individual doctors, salons, and growing service providers. The system reduces administrative overhead, saving time and operational costs.`,
            },
            {
              title: "Does GetSetTime offer a demo or trial?",
              content: `Yes, A free demo and trials are available for professionals to experience the full implementation and understand how the scheduling system works. This allows clients to evaluate and adopt the system with full features, including calendar integration, automated reminders, and centralized scheduling.`,
            },
          ]}
        />
      </section>
    </>
  );
}