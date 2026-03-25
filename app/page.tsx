import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import Hero from "./component/HeroSection";
import Features from "./component/Features";
import Support from "./component/Support";
import Pricing from "./component/Pricing";
import TrustedCompanies from "./component/TrustedCompanies";
import { FaqSection } from "./component/FaqSection";
import InteractiveCalendar from "./component/InteractiveCalendar";

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

  const whatsappFeatures = [
    "Instant booking confirmation",
    "Automated reminder alerts",
    "Reschedule links in chat",
    "Reduce no-shows easily",
  ];

  const bookingFeatures = [
    "Centralize all bookings, teams, and resources in a single smart calendar.",
    "Automatic confirmations and reminders",
    "Track schedules, changes, and cancellations instantly",
  ];



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

      <section className="relative overflow-hidden bg-[#f5f7ff] py-24 sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute right-[-80px] top-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
          <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:gap-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          {/* left: Content */}
          <div className="space-y-2">

            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              WhatsApp automation for bookings
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-slate-950">
              Confirm every booking.
              <span className="block bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                Remind every customer on WhatsApp.
              </span>
            </h2>

            <p className="text-sm text-neutral-600 sm:text-base">Send instant booking confirmations, reminder messages, and follow-up alerts on WhatsApp. Reduce no-shows, save staff time, and keep your customers updated automatically.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-2">
              {whatsappFeatures.map((item) => (
                <div key={item} className="group rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_10px_35px_rgba(20,25,50,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-md font-semibold text-white shadow-lg shadow-indigo-500/25">✓</div>
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span>✔ Booking confirmations</span>
              <span>✔ Reminder messages</span>
              <span>✔ Real-time customer updates</span>
            </div>
          </div>
          
          {/* right: Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px]">
              <div className="absolute left-4 top-6 h-48 w-48 rounded-full bg-indigo-300/25 blur-3xl sm:left-10 sm:top-10 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />

              <div className="relative rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_30px_80px_rgba(80,90,140,0.18)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f4ee] shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3">
                    <div className="flex items-center gap-4">
                    <div className="h-12 w-12"><Image src="/getsettime-icon.png" alt="GetSetTime Logo" width={60} height={60} /></div>
                      <div>
                        <p className="text-xl font-semibold tracking-[-0.03em] text-slate-800">
                          GetSetTime
                        </p>
                        <p className="text-sm text-slate-500">online now</p>
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
                      Active automation
                    </div>
                  </div>

                  <div className="space-y-4 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#f4efe5_100%)] px-4 py-4 sm:px-6 sm:py-6">
                    <div className="max-w-[88%] sm:max-w-[76%] rounded-[26px] rounded-tl-md bg-white px-4 py-3 text-md text-slate-800 shadow-[0_8px_30px_rgba(30,35,60,0.08)]">
                      <p>Hi Priya 👋</p>
                      <p>Your appointment is confirmed for <strong>Tomorrow at 4:00 PM.</strong></p>
                    </div>

                    <div className="ml-auto max-w-[50%] rounded-[26px] rounded-tr-md bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-3 text-md text-white shadow-[0_14px_35px_rgba(20,160,90,0.22)]">
                      Great, thank you.
                    </div>

                    <div className="max-w-[92%] sm:max-w-[82%] rounded-[26px] rounded-tl-md bg-white px-4 py-3 text-md leading-8 text-slate-800 shadow-[0_8px_30px_rgba(30,35,60,0.08)]">
                      <p>
                        Reminder: Your booking starts in <strong>2 hours.</strong>
                      </p>
                      <div className="mt-2 rounded-2xl bg-slate-100 p-3">
                        <p className="text-sm text-slate-500">Need to reschedule? Tap below</p>
                        <button className="mt-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25">
                          Manage booking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-8 -top-20 hidden lg:block rounded-2xl border border-slate-200/80 bg-white/95 px-7 py-6 shadow-[0_20px_50px_rgba(70,80,130,0.15)] backdrop-blur animate-float">
                <p className="text-xs uppercase tracking-widest text-slate-400">No-show reduction</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950">32%</p>
                <p className="mt-2 text-sm tracking-[-0.03em] text-indigo-500">with reminder automation</p>
              </div>

              <div className="absolute -bottom-8 right-6 rounded-2xl border border-slate-200/80 bg-white/95 px-7 py-6 shadow-[0_20px_50px_rgba(70,80,130,0.15)] backdrop-blur animate-float">
                <p className="text-sm uppercase tracking-widest text-slate-400">Delivery</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950">Instant</p>
                <p className="mt-2 text-sm tracking-[-0.03em] text-slate-500">confirmation after booking</p>
              </div>

              <div className="absolute -left-2 lg:-left-10 bottom-50 rounded-2xl border border-indigo-100 bg-white/90 px-5 py-4 shadow-[0_16px_40px_rgba(90,100,160,0.15)] backdrop-blur animate-float">
                <p className="text-sm uppercase tratracking-widest text-slate-400">Message status</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <p className="text-sm font-medium text-slate-700">Delivered instantly</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <InteractiveCalendar />

      <section id="resources" className="relative py-14 sm:py-20">
        <div className="absolute w-full inset-0 bg-gradient-to-br from-transparent via-indigo-200/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 mx-auto max-w-7xl space-y-14 px-4 sm:space-y-20 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* left: Content */}
            <div className="order-1 space-y-3 lg:col-span-6 lg:order-none">
              <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Smart Workflow
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-slate-950">Get Every Booking on Your Terms</h3>
              <p className="text-sm text-neutral-600 sm:text-base">GetSetTime lets you manage your brand, appointments, staff, and resources on an easy-to-use dashboard with a few clicks, automating the details so every appointment feels professional.</p>
              <div className="relative">
                <div className="mt-8 space-y-4">
                  {bookingFeatures.map((feature) => (
                    <div key={feature} className="group rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_10px_35px_rgba(20,25,50,0.08)] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-md font-semibold text-white shadow-lg shadow-indigo-500/25">✓</div>
                      <p className="text-sm text-slate-700">{feature}</p>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
            {/* right: Image */}
            <div className="relative lg:col-span-6">
              <div className="group relative w-full rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-100 to-slate-50 p-3 shadow-[0_28px_70px_-35px_rgba(79,70,229,0.45)] transition-all duration-500 hover:-translate-y-1 sm:p-4">
                
                <div className="w-full gap-4 rounded-2xl bg-white/70 p-3 backdrop-blur sm:p-4">
                  <div className="relative">
                    <div className="text-xl font-bold leading-tight text-slate-900">Set your Scheduling</div>
                    <p className="mt-1 text-sm text-slate-500">Select when you&apos;d like to meet</p>

                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10m-13 9h16a1 1 0 001-1V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a1 1 0 001 1z" />
                            </svg>
                          </span>
                          PICK A DAY
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                        {[
                          { day: "Wed", date: "25", month: "Mar", active: false },
                          { day: "Thu", date: "26", month: "Mar", active: false },
                          { day: "Fri", date: "27", month: "Mar", active: false },
                          { day: "Mon", date: "30", month: "Mar", active: true },
                          { day: "Tue", date: "31", month: "Mar", active: false },
                          { day: "Wed", date: "1", month: "Apr", active: false },
                          { day: "Thu", date: "2", month: "Apr", active: false },
                        ].map((item) => (
                          <button
                            key={`${item.day}-${item.date}-${item.month}`}
                            type="button"
                            className={`rounded-lg border px-1 py-2 text-center transition-all duration-200 sm:rounded-xl ${
                              item.active
                                ? "border-indigo-500 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-300/60"
                                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50"
                            }`}
                          >
                            <p className={`text-[10px] ${item.active ? "text-white/90" : "text-slate-500"}`}>{item.day}</p>
                            <p className="text-xs font-bold leading-none sm:text-lg">{item.date}</p>
                            <p className={`text-[10px] ${item.active ? "text-white/90" : "text-slate-500"}`}>{item.month}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        AVAILABLE TIMES
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                        {[
                          "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
                          "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
                          "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
                        ].map((time) => (
                          <button
                            key={time}
                            type="button"
                            className={`rounded-xl border px-2 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                              time === "10:00 AM"
                                ? "border-indigo-500 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-300/60"
                                : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-end border-t border-slate-200 pt-4">
                      <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-105 sm:px-5 sm:text-sm">
                        Continue
                      </button>
                    </div>

                  </div>
                </div>

              </div>

              <div className="animate-float w-full rounded-2xl border border-slate-100 bg-white p-3 shadow-lg transition-all duration-500 group-hover:shadow-xl sm:w-full md:w-full lg:absolute lg:-top-10 lg:right-0 lg:w-64 lg:group-hover:-translate-y-1 xl:-top-10 xl:-right-10">
                <p className="mb-2 font-semibold tracking-wide text-slate-700 text-sm">Today&apos;s Queue</p>
                <div className="space-y-1.5">
                  <div className="flex w-full items-center justify-between gap-1.5 rounded-md bg-slate-50 px-2 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="font-medium text-slate-600 text-xs">Consultation</span>
                    </div>
                    <span className="text-slate-500 text-xs">09:30</span>
                  </div>
                  <div className="flex w-full items-center justify-between gap-1.5 rounded-md bg-slate-50 px-2 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-indigo-400" />
                      <span className="font-medium text-slate-600 text-xs">Team Call</span>
                    </div>
                    <span className="text-slate-500 text-xs">11:00</span>
                  </div>
                  <div className="flex w-full items-center justify-between gap-1.5 rounded-md bg-slate-50 px-2 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      <span className="font-medium text-slate-600 text-xs">Follow-up</span>
                    </div>
                    <span className="text-slate-500 text-xs">12:45</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
          
        </div>
      </section>

      <Pricing />

      <Support />

      <section className="relative pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-bold text-neutral-900">Frequently Asked Questions</h2>
        </div>
        <FaqSection
          items={[
            {
              title: "What is GetSetTime?",
              content: `GetSetTime is a simple-to-use scheduling software for the service-based professionals, including doctors, clinics, salons, and others whose day revolves around booking appointments. Instead of playing phone tag or manually managing a chaotic calendar, it lets clients book themselves online while the system handles the rest. It syncs seamlessly with Calendar and operational tools, keeping everything in one place, and automatically sends booking confirmations and reminders via WhatsApp and Email — keeping both businesses and clients in the loop and reducing no-shows. In short, it takes the admin headache out of scheduling so you can focus on actually serving your clients.`,
            },
            {
              title: "Can GetSetTime integrate with Google Calendar?",
              content: `GetSetTime supports real-time integration with Google Calendar, ensuring centralized scheduling and accurate availability updates. This prevents scheduling conflicts and keeps all appointments synchronized across devices and platforms.`,
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