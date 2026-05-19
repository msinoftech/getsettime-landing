import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { APP_NAME, BASE_URL, contactInfo, REGISTER_GOOGLE_URL, LOGIN_URL  } from "@/lib/config";
import { FaqSection } from "@/app/component/FaqSection";

const pageUrl = `${BASE_URL}/solutions/doctor-appointment-scheduling-app`;

export const metadata: Metadata = {
  title: `Doctor Appointment Booking App for Clinics | ${APP_NAME}`,
  description: `GetSetTime is the simplest doctor appointment booking app for clinics. Reduce no-shows, automate reminders, and manage your schedule online. Start free today.`,
  keywords: [ "doctor appointment booking app", "clinic appointment booking app", "online appointment booking", "calendar management system", " scheduling tool", "appointment management app"],
  alternates: {
    canonical: `${pageUrl}`,
  },
  openGraph: {
    title: `Doctor Appointment Booking App for Clinics | ${APP_NAME}`,
    description: `GetSetTime is the simplest doctor appointment booking app for clinics. Reduce no-shows, automate reminders, and manage your schedule online. Start free today.`,
    url: `${pageUrl}`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}/grow-doctor.jpg`,
        width: 500,
        height: 500,
        alt: `Doctor Appointment Booking App for Clinics | ${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Doctor Appointment Booking App for Clinics | ${APP_NAME}`,
    description: `GetSetTime is the simplest doctor appointment booking app for clinics. Reduce no-shows, automate reminders, and manage your schedule online. Start free today.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const features = [
  {
    title: "Online Appointment Booking",
    desc: "Patients can view your real-time availability and book their own appointments anytime — from any device, in Hindi or English.",
    tag: "Zero phone calls needed",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
  },
  {
    title: "WhatsApp & SMS Reminders",
    desc: "Automated reminders are sent to patients before their appointment — on WhatsApp and SMS, the channels Indians actually use.",
    tag: "60% fewer no-shows",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>',
  },
  {
    title: "Smart Calendar Management",
    desc: "All your appointments appear in a clean daily and weekly view. Reschedule, cancel, or block time off without any confusion.",
    tag: "No more overbooking",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-range-icon lucide-calendar-range"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/></svg>',
  },
  {
    title: "Patient Records & History",
    desc: "See each patient's past visits at a glance before they walk in. No more asking them to repeat their history from scratch every time.",
    tag: "Better, faster consultations",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7Z"/><path d="M13 3v5a1 1 0 0 0 1 1h5"/></svg>',
  },
  {
    title: "Availability Control",
    desc: "Block out holidays, adjust your working hours, and set a minimum booking lead time. You stay in full control of your schedule.",
    tag: "Doctor sets the rules",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock-icon lucide-calendar-clock"><path d="M16 14v2.2l1.6 1"/><path d="M16 2v4"/><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M3 10h5"/><path d="M8 2v4"/><circle cx="16" cy="16" r="6"/></svg>',
  },
  {
    title: "Works on Any Device",
    desc: "Access your appointment schedule from your phone, tablet, or desktop — even your receptionist can manage it from their own device.",
    tag: "Manage anywhere",
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-smartphone-icon lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>',
  },
];

export default function DoctorAppointmentSchedulingApp() {
  
  const faqItems = [
    {
      title: "Is GetSetTime easy to use for doctors with no tech background?",
      content: "Absolutely. GetSetTime is built keeping busy doctors in mind — no technical knowledge required. Setup takes under 10 minutes, and most doctors start managing bookings on day one. If you can use WhatsApp, you can use GetSetTime.",
    },
    {
      title: "Does it send WhatsApp appointment reminders to patients?",
      content: "Yes. GetSetTime sends automated appointment reminders via both SMS and WhatsApp — the two channels patients in India actually check. This is one of the most effective ways to reduce no-shows at your clinic.",
    },
    {
      title: "Can solo practitioners or small clinics use this doctor booking app?",
      content: "Yes — GetSetTime is ideal for individual doctors, small single-specialty clinics, and multi-doctor setups alike. Plans are flexible and scale with your practice. You only pay for what you need.",
    },
    {
      title: "How much does GetSetTime cost?",
      content: "GetSetTime offers a free trial so you can try all features before committing. Paid plans are affordable and designed with Indian clinics in mind. Visit our pricing page for the latest plan details and pricing in ₹.",
    },
    {
      title: "Can patients book appointments from their mobile phones?",
      content: "Yes. Patients can book appointments from any device — smartphone, tablet, or desktop. Your booking link works on mobile browsers, so patients don't need to install any app. They simply tap the link and pick a slot.",
    },
    {
      title: "How does it prevent double-bookings?",
      content: "GetSetTime's smart calendar automatically blocks a time slot the moment it's confirmed. This prevents any two patients from booking the same slot simultaneously — completely eliminating double-booking errors that happen with phone and paper systems.",
    },
    {
      title: "Is my patient data secure with this doctor appointment system?",
      content: "Yes. GetSetTime follows industry-standard security practices to protect all patient information and appointment records. Your data is encrypted and never shared with third parties.",
    },
  ];
 
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${pageUrl}/#Organization`,
        "name": `${APP_NAME}`,
        "url": `${pageUrl}`,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.logo}`,
          "width": 512,
          "height": 512
        },
        "description": `GetSetTime is the simplest doctor appointment booking app for clinics. Reduce no-shows, automate reminders, and manage your schedule online. Start free today.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "availableLanguage": ["English", "Hindi", "Punjabi"],
          "areaServed": "Worldwide"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#WebPage`,
        "url": `${pageUrl}`,
        "name": `Doctor Appointment Booking App for Clinics | ${APP_NAME}`,
        "description": "GetSetTime is the simplest doctor appointment booking app for clinics. Reduce no-shows, automate reminders, and manage your schedule online. Start free today.",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": `${APP_NAME}`,
          "url": `${BASE_URL}`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}/#SoftwareApplication`,
        "name": `${APP_NAME}`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": `${pageUrl}`,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "description": "Free and Premium plans available",
        },
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Doctors and Clinics",
        },
        "featureList": [
          "Online Appointment Booking",
          "WhatsApp & SMS Reminders",
          "Smart Calendar Management",
          "Availability Control",
          "Works on Any Device",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#BreadcrumbList`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Solutions",
            "item": `${BASE_URL}/solutions`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Doctor Appointment Booking App",
            "item": `${pageUrl}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#FAQPage`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content
          }
        }))
      }
    ],
  };

  const DoctorAppointmentBookingAppPoints = [
    {
      title: "Patients book themselves",
      desc: "Share your booking link on WhatsApp, your website, or Google. Patients choose a slot without calling you.",
    },
    {
      title: "Reminders go out automatically.",
      desc: "SMS and WhatsApp reminders are sent to patients 24 hours before — no manual follow-up from your team.",
    },
    {
      title: "Auto Sync and an organised calendar ",
      desc: "See all upcoming appointments in one place. No double-bookings, no paper chaos.",
    },
    {
      title: "Works for all clinic sizes",
      desc: "Whether you're a solo practitioner or running a multi-doctor clinic, GetSetTime",
    },
  ];

  return (
    <>  
    {/* Add Structured Data for Doctor Appointment Scheduling App Page */}
    <Script id="doctor-appointment-scheduling-app-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2),}}/>

    {/* HERO SECTION */}
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* Left column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-700 shadow-sm">
              <span>⚕️</span>
              Built Exclusively for Doctors &amp; Clinics in India
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900">
              The <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">Automated Doctor Appointment</span> Scheduling System That Works While You Treat Patients
            </h1>
            <p>Stop managing bookings over phone calls. GetSetTime lets patients book online, sends automatic reminders, and keeps your day organised — no tech skills needed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={`${REGISTER_GOOGLE_URL}`} target="_blank" className="bg-indigo-600 text-white text-sm px-4 py-2.5 rounded-xl flex items-center justify-center gap-3">
                <svg width="26" height="28" viewBox="0 0 48 48" className="inline-block rounded-sm bg-white p-1">
                  <g>
                    <path fill="#4285F4" d="M43.6 20.5H42V20.4H24v7.2h11.2C33.9 32.1 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.9 2.5l5.8-5.8C33.5 7.1 28.9 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.4-4z"/>
                    <path fill="#34A853" d="M6.3 14.1l5.9 4.3C14.2 15.1 18.7 12 24 12c2.6 0 5 .9 6.9 2.5l5.8-5.8C33.5 7.1 28.9 5 24 5c-7.1 0-13.1 4.1-16.1 10.1z"/>
                    <path fill="#FBBC05" d="M24 44c5.3 0 10.1-1.8 13.8-4.9l-6.4-5.2C29.5 35.7 26.9 36.7 24 36.7c-5.4 0-9.9-3.6-11.5-8.5l-6.1 4.7C7 39.1 14.9 44 24 44z"/>
                    <path fill="#EA4335" d="M43.6 20.5H42V20.4H24v7.2h11.2c-1.1 3.1-3.6 5.7-6.6 7.1l6.4 5.2C39.9 37.1 44 31.9 44 25c0-1.3-.1-2.7-.4-4z"/>
                  </g>
                </svg>
                Sign up with Google
              </Link>
              <Link href={`${BASE_URL}/contact-us`} className="bg-gray-900 text-white text-sm px-4 py-2.5 rounded-xl flex items-center justify-center">Contact Us</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                <div className="text-gray-500">Appointments</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">10,000+</div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-indigo-600 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                <div className="text-gray-500">Time Saved</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">3 hrs</div>
                <div className="mt-3 flex gap-1">
                  {[1,2,3,4,5].map((i)=>(
                    <div key={i} className="h-2 flex-1 bg-indigo-600 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                <div className="text-gray-500">Patient Rating</div>
                <div className="text-2xl font-bold text-yellow-500 mt-1">4.8 ★</div>
                <div className="mt-3 flex gap-1">
                  {[1,2,3,4,5].map((i)=>(
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right column - Interactive Demo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-cyan-100 blur-3xl" />
            <div className="relative rounded-2xl bg-white shadow-xl">
              <div className="relative overflow-hidden">
                <div className="relative flex items-center justify-between border-b border-neutral-200 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                    <span className="text-xs font-medium text-neutral-700">LIVE</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <div className="mb-5 flex flex-row items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-neutral-900">Dr. Sharma’s Clinic</div>
                      <div className="text-neutral-600">Today’s appointments · Dermatology OPD</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      { time: "09:30 AM", status: "Booked" },
                      { time: "10:00 AM", status: "Booked" },
                      { time: "10:30 AM", status: "Selected" },
                      { time: "11:00 AM", status: "Available" },
                      { time: "11:30 AM", status: "Available" },
                      { time: "12:00 PM", status: "Pending" },
                      { time: "12:30 PM", status: "Available" },
                      { time: "01:00 PM", status: "Available" },
                      { time: "04:00 PM", status: "Available" },
                      { time: "04:30 PM", status: "Booked" },
                      { time: "05:00 PM", status: "Available" },
                      { time: "05:30 PM", status: "Available" },
                    ].map((slot) => (
                      <div
                        key={slot.time}
                        className={`rounded-xl border p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                          slot.status === "Booked"
                            ? "border-red-200 bg-red-50"
                            : slot.status === "Selected"
                            ? "border-indigo-600 bg-indigo-600 text-white"
                            : slot.status === "Pending"
                            ? "border-amber-200 bg-amber-50"
                            : "border-emerald-200 bg-emerald-50"
                        }`}
                      >
                        <div className={`font-bold ${slot.status === "Selected" ? "text-white" : "text-neutral-900"}`}>
                          {slot.time}
                        </div>
                        <div className={`mt-1 inline-flex items-center gap-1 font-medium ${slot.status === "Selected" ? "text-white" : "text-neutral-700"}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${
                            slot.status === "Booked"
                              ? "bg-red-500"
                              : slot.status === "Selected"
                              ? "bg-white"
                              : slot.status === "Pending"
                              ? "bg-amber-500"
                              : "bg-emerald-500"
                          }`} />
                          {slot.status}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white p-4 shadow-md">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="font-medium text-neutral-600">Next patient</div>
                        <div className="rounded-md bg-emerald-50 px-3 py-1 font-medium text-emerald-700">Confirmed</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 font-medium text-indigo-700">RK</div>
                        <div>
                          <div className="font-bold text-neutral-900">Rahul Khanna</div>
                          <div className="text-neutral-600">Today · 10:30 AM · Follow-up visit</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-neutral-900 p-4 text-white shadow-md">
                      <div className="font-medium text-neutral-300">Today at a glance</div>
                      <div className="mt-3 flex items-end gap-2">
                        <div className="text-3xl font-black">86%</div>
                        <div className="pb-1 text-neutral-400">slot utilisation</div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="h-2 flex-1 rounded-full bg-indigo-500" />
                        <div className="h-2 w-12 rounded-full bg-neutral-700" />
                        <div className="h-2 w-8 rounded-full bg-emerald-600" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 font-medium text-indigo-700">
                    WhatsApp reminders have been sent to 8 patients for tomorrow’s appointments.
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 -left-2 rounded-xl border border-white bg-white p-4 shadow-xl animate-float">
                <div className="text-sm uppercase">No-show reduction</div>
                <div className="text-2xl font-bold text-neutral-900">-37%</div>
                <div className="text-neutral-500">with reminder automation</div>
              </div>

              <div className="pointer-events-none absolute right-0 top-12 rounded-xl border border-violet-100 bg-white p-4 shadow-xl animate-float">
                <div className="text-sm uppercase">New booking</div>
                <div className="font-bold text-neutral-900">Priya S · 11:30 AM</div>
                <div className="text-neutral-600">Synced to clinic calendar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* THE REAL PROBLEM */}
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            The Real Problem
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Running a Clinic (Practice) Without a Booking System Is Costing You More Than You Think</h2>
          <p>Even in metro cities, Most doctors still rely on phone calls, paper registers, and word of mouth to manage appointments. Here's what that looks like every day.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center gap-3">
          {[
            {
              title: "Phone Calls That Never End",
              desc: "Your receptionist spends hours taking calls, confirming appointments, and rescheduling — time that could be used to care for patients actually in your clinic.",
              icon: `<svg fill="#4f39f6" width="40px" height="40px" viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path></g></svg>`,
            },
            {
              title: "Patients Who Don't Show Up",
              desc: "No-shows waste your most valuable resource — time. Without automated reminders, patients forget, leaving you with empty slots you could've filled.",
              icon: `<svg fill="#4f39f6" version="1.1" id="Layer_1" width="40px" height="40px" viewBox="0 0 256 205" enable-background="new 0 0 256 205" xml:space="preserve" stroke="#4f39f6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M51.821,30.057c0-15.49,12.392-27.982,27.981-27.982c15.49,0,27.981,12.492,27.981,27.982 c-0.1,15.59-12.592,27.981-27.981,27.981C64.313,58.038,51.821,45.547,51.821,30.057z M206.165,150.068h-50.771v-45.37 c0-22.103-19.315-39.969-41.049-39.969H46.29c-23.861,0-44.301,20.676-44.29,41.049v83.178C1.972,198.175,8.483,202.988,14.963,203 c6.496,0.012,12.963-4.802,12.963-14.043v-81.018h8.642v94.981h84.259v-94.981h8.642l0.088,54.411 c-0.058,9.429,5.771,13.445,11.795,13.644h64.814C223.841,175.994,223.841,150.068,206.165,150.068z M249.287,32.14 c0,18.522-6.339,35.503-16.776,45.58c10.437,10.079,16.776,27.062,16.776,45.581v3.717H254v11.367h-85.337v-11.367h4.714v-3.717 c0-18.519,6.338-35.503,16.776-45.581c-10.438-10.077-16.776-27.061-16.776-45.58v-2.95h-4.714V17.823H254V29.19h-4.713V32.14z M241.747,35.861h-60.831c0.865,16.49,7.42,31.486,17.188,38.894l3.912,2.965l-3.912,2.965c-9.77,7.409-16.323,22.406-17.188,38.895 h60.834c-0.866-16.49-7.421-31.488-17.189-38.895l-3.914-2.965l3.914-2.965C234.328,67.347,240.884,52.351,241.747,35.861z M200.768,70.686l4.012,2.25c0,0,5.644,7.402,5.644,24.666c0,0,0.049,0.097,0.132,0.241c-4.583,0.796-7.85,3.663-7.85,3.663 c-6.868,5.209-12.285,9.728-12.617,16.043h44.651c-0.332-6.316-3.095-7.342-12.618-16.043c-2.699-2.465-5.423-3.529-7.943-3.798 c0.006-0.808,0.193-19.136,3.704-24.15c1.697-1.701,2.968-2.25,2.968-2.25c7.422-5.624,12.401-17.013,13.054-29.534h-45.146 C189.413,54.295,193.349,65.058,200.768,70.686z"></path> </g></svg>`,
            },
            {
              title: "Paper Registers and Chaotic Records",
              desc: "Digging through notebooks to find a patient's last visit, managing double bookings, or figuring out who's next, then calling them— it all adds unnecessary stress to your day.",
              icon: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="#4f39f6"" stroke="#4f39f6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6111 1.5837C17.2678 1.34703 18.75 2.63255 18.75 4.30606V5.68256C19.9395 6.31131 20.75 7.56102 20.75 9.00004V19C20.75 21.0711 19.0711 22.75 17 22.75H7C4.92893 22.75 3.25 21.0711 3.25 19V5.00004C3.25 4.99074 3.25017 4.98148 3.2505 4.97227C3.25017 4.95788 3.25 4.94344 3.25 4.92897C3.25 4.02272 3.91638 3.25437 4.81353 3.12621L15.6111 1.5837ZM4.75 6.75004V19C4.75 20.2427 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2427 19.25 19V9.00004C19.25 7.7574 18.2426 6.75004 17 6.75004H4.75ZM5.07107 5.25004H17.25V4.30606C17.25 3.54537 16.5763 2.96104 15.8232 3.06862L5.02566 4.61113C4.86749 4.63373 4.75 4.76919 4.75 4.92897C4.75 5.10629 4.89375 5.25004 5.07107 5.25004ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4143 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4143 7.25 12ZM7.25 15.5C7.25 15.0858 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 15.0858 14.25 15.5C14.25 15.9143 13.9142 16.25 13.5 16.25H8C7.58579 16.25 7.25 15.9143 7.25 15.5Z"></path> </g></svg>`,
            },
            {
              title: "Waiting Rooms Turn A Nightmare",
              desc: "When appointments aren't managed digitally, patients stack up for hours. Frustrated waiting rooms hurt patient satisfaction and can damage your clinic's reputation, too.",
              icon: `<svg fill="#4f39f6" height="40px" width="40px" version="1.1" id="Layer_1" viewBox="0 0 128 128" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle cx="39.2" cy="17.9" r="12.6"></circle> <path d="M78.6,70.2l-21.2,0l-5.7-28.4c-3.4-14.8-24.2-10.4-22,4.1l6.6,33c1,5,5,9.3,11.3,9.3h27.1c0,0,0,21.2,0,30 c0,9.5,13.3,9.5,13.3,0.2V79.7C88,75.1,84.8,70.2,78.6,70.2z"></path> <path d="M64.7,90.6H46.9c-6.4,0-11.8-3.8-13.4-11l-5.8-28.2c-1.4-6.9-11.1-4.6-9.8,2.1L24,82.9c2.5,11,11.9,18.1,21.4,18.1h19.5 C71.7,101,71.7,90.6,64.7,90.6z"></path> <path d="M91.1,3.9c-11.2,0-20.3,9.1-20.3,20.3c0,11.2,9.1,20.3,20.3,20.3c11.2,0,20.3-9.1,20.3-20.3C111.4,13.1,102.3,3.9,91.1,3.9 z M91.1,40.7c-9.1,0-16.5-7.4-16.5-16.5c0-9.1,7.4-16.5,16.5-16.5c9.1,0,16.5,7.4,16.5,16.5C107.5,33.3,100.1,40.7,91.1,40.7z"></path> <path d="M99.5,20l-8,3.6v-9.4c0-1.5-2.2-1.4-2.2,0l0,11.3c0,0.8,0.9,1.5,1.7,1l9.4-4.5C101.7,21.3,100.9,19.3,99.5,20z"></path> </g> </g></svg>`,
            },
          ].map((item, i) => (
            <div key={i} className="group relative py-3 px-3 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-50 hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div className="h-full bg-white rounded-xl p-6 shadow-md group-hover:shadow-xl space-y-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                <h3 className="font-medium text-neutral-900">{item.title}</h3>
                <div className="text-neutral-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Solution Section */}
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-indigo-50/40 to-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center relative">
          {/* LEFT */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              THE SOLUTION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
              <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">Our doctor appointment booking app </span> manages routine work effortlessly.
            </h2>
            <p>GetSetTime is a simple online doctor appointment booking system. Patients find your availability, pick a time, and confirm — all without a single phone call to your clinic.</p>
            <div className="space-y-3">
              {DoctorAppointmentBookingAppPoints.map((point, i) => (
                <div key={i} className="group flex gap-4 p-4 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-11 w-11 min-w-11 min-h-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25">✓</div>
                  <div>
                    <div className="font-medium text-neutral-900">{point.title}</div>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT - EXACT REF UI */}
          <div className="relative">           
            <div className="relative rounded-xl bg-white shadow-xl">
              <div className="p-3 md:p-4">
                <div className="relative">
                  <div>
                    <div className="text-sm uppercase text-indigo-500">Clinic Dashboard</div>
                    <div className="text-2xl font-bold text-neutral-900">Dr. Priya Sharma</div>
                    <div className="text-neutral-500">General Physician • Available Today</div>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 grid-cols-1 lg:grid-cols-2">
                  <div className="rounded-xl bg-white p-4 shadow-md space-y-3">
                    <div className="flex flex-col items-start gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-indigo-200 blur-md" />
                        <Image
                          src="/doctor-profile.jpg"
                          alt="Doctor profile"
                          className="relative h-16 w-16 rounded-full border-4 border-white object-cover shadow-md"
                          width={64}
                          height={64}
                          priority
                        />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-900">Dr. Priya Sharma</div>
                        <div className="text-neutral-500">MBBS, MD • 8+ years experience</div>
                        <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-indigo-50 px-3 py-1 font-medium text-indigo-700">
                          <span className="h-2 w-2 rounded-full bg-indigo-500" />
                          Online booking active
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                      <div className="rounded-xl bg-indigo-600 p-4 text-white shadow-md space-y-1">
                        <div className="text-white">Next appointment</div>
                        <div className="font-bold text-white">Aman Verma • 10:30 AM</div>
                        <div className="text-white">Routine consultation • Room 2</div>
                      </div>
                      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                        <div className="text-neutral-500">Patient rating</div>
                        <div className="text-xl font-bold">4.9/5</div>
                      </div>
                      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                        <div className="text-neutral-500">Reminders sent</div>
                        <div className="text-xl font-bold">126 this week</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl space-y-3 bg-white p-4 shadow-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-bold text-neutral-900">Availability Calendar</div>
                        <div className="text-neutral-500">Manage time slots beautifully in real time</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "09:00 AM", status: "available" },
                        { label: "09:30 AM", status: "available" },
                        { label: "10:00 AM", status: "available" },
                        { label: "10:30 AM", status: "available" },
                        { label: "11:00 AM", status: "booked" },
                        { label: "11:30 AM", status: "available" },
                        { label: "12:00 PM", status: "available" },
                        { label: "04:00 PM", status: "available" },
                        { label: "04:30 PM", status: "available" },
                      ].map((slot) => (
                        <div
                          key={slot.label}
                          className={`rounded-xl border p-2 text-center font-medium shadow-md transition hover:shadow-xl hover:-translate-y-1 ${
                            slot.status === "available"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : slot.status === "booked"
                              ? "border-red-200 bg-red-50 text-red-600"
                              : "border-indigo-100 bg-indigo-50 text-indigo-700"
                          }`}
                        >
                          {slot.label}
                        </div>
                      ))}
                    </div>
                    <button className="text-sm font-medium rounded-xl bg-indigo-600 px-4 py-2.5 text-white shadow-md transition">Save Schedule</button>
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="flex flex-col items-start gap-2">
                        <div className="rounded-md bg-emerald-50 px-3 py-1 font-medium text-emerald-700">Active</div>
                        <div>
                          <div className="text-neutral-500">Booking link status</div>
                          <div className="font-bold text-neutral-900">Shared across WhatsApp & website</div>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-5 -bottom-10 w-50 rounded-xl bg-white p-4 shadow-md animate-float">
                <div className="text-sm uppercase text-neutral-400">Reminder sent</div>
                <div className="font-bold text-neutral-900">Patient notified on WhatsApp</div>
                <div className="text-neutral-500">Visit starts in 2 hours</div>
              </div>
              <div className="absolute right-5 -top-10 w-50 rounded-xl bg-white p-4 shadow-md animate-float">
                <div className="text-sm uppercase text-neutral-400">Clinic performance</div>
                <div className="font-bold text-neutral-900">Bookings growing smoothly</div>
                <div className="mt-3 flex items-end gap-2">
                  <div className="h-8 w-3 rounded-full bg-indigo-200" />
                  <div className="h-12 w-3 rounded-full bg-indigo-300" />
                  <div className="h-10 w-3 rounded-full bg-violet-300" />
                  <div className="h-16 w-3 rounded-full bg-indigo-500" />
                  <div className="h-14 w-3 rounded-full bg-sky-400" />
                  <div className="h-10 w-3 rounded-full bg-violet-300" />
                  <div className="h-10 w-3 rounded-full bg-emerald-300" />
                  <div className="h-16 w-3 rounded-full bg-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* FEATURES SECTION */}
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">
            Everything a Doctor Needs —{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
              Nothing You Don’t
            </span>
          </h2>
          <p>Every feature is designed to simplify your workflow and improve patient experience.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i} className="group relative p-[1px] rounded-xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg p-6 transition-all duration-500 group-hover:-translate-y-2 space-y-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl text-white bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-md">
                  <span className="inline-flex items-center justify-center [&_svg]:h-7 [&_svg]:w-7" dangerouslySetInnerHTML={{ __html: item.icon }} aria-hidden="true"/>
                </div>
                <div className="mt-5 font-semibold text-neutral-900">{item.title}</div>
                <p>{item.desc}</p>                
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium">✓ {item.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CLINIC SCHEDULING CHALLENGES SECTION */}
    <section className="relative overflow-hidden py-14 sm:py-20 bg-[linear-gradient(180deg,#eef2ff_0%,#e0f2fe_55%,#f8fafc_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_35%)]" />
      <div className="absolute -left-16 top-20 h-48 w-48 rounded-full bg-emrald-400/25 blur-3xl" />
      <div className="absolute -right-14 bottom-16 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-24 w-[60%] -translate-x-1/2 rounded-b-[48px] bg-white/35 blur-2xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Clinic Reality Check
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Why modern clinics switch to smarter appointment scheduling</h2>
            <p>As patient demand increases, manual booking creates delays, front-desk overload, and inconsistent follow-up. A structured digital system helps your clinic deliver faster and more predictable care.</p>
            <div className="space-y-3">
              {[
                "Delayed patient responses reduce trust before the visit.",
                "Uneven slot allocation causes long waits and idle hours.",
                "Manual reminders increase missed appointments.",
                "Scattered requests from calls and chat apps create confusion.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="text-indigo-600">✓</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="relative rounded-xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-2 font-semibold text-neutral-700">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  AVAILABLE TIMES
                </div>
                <div className="mt-3 relative">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {[
                      "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
                      "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
                      "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
                    ].map((time) => (
                      <button key={time} type="button"
                        className={`rounded-xl border px-2 py-2 font-medium transition-all duration-200 ${
                          time === "10:00 AM"
                            ? "border-indigo-500 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-300/60"
                            : "border-neutral-200 bg-white text-neutral-700 hover:border-indigo-200 hover:bg-indigo-50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
                <Image
                  src="/doctor-realty.jpg"
                  alt="Medical appointment schedule interface"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-2 top-2 rounded-md bg-indigo-600/90 px-2 py-1 text-xs uppercase tracking-widest text-white">
                  Smart slots
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-b border-neutral-200 pb-3">
              <div className="font-semibold text-neutral-900">Clinic Operations Board</div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Live Overview</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">General Consultation</div>
                <div className="mt-1 text-indigo-900">12 Slots · 9 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Follow-Up Cases</div>
                <div className="mt-1 text-indigo-900">8 Slots · 6 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Reminder Completion</div>
                <div className="mt-1 text-indigo-900">94% Delivered</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Average Wait Time</div>
                <div className="mt-1 text-indigo-900">11 minutes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
          <h3 className="text-2xl font-bold text-center text-neutral-900">Built for every type of medical practice</h3>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {[
              "Pediatrics",
              "Women's Health",
              "Primary Care",
              "Dermatology",
              "ENT Care",
              "Orthopedics",
              "Mental Wellness",
              "Physiotherapy",
            ].map((tag) => (
              <span key={tag} className="px-3 py-1.5">✓ {tag}</span>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href={`${LOGIN_URL}`} target="_blank" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-white shadow-md transition hover:bg-indigo-700">Start your clinic setup</Link>
          </div>
        </div>
      </div>
    </section>

    {/* DOCTOR BUSINESS GROWTH SECTION */}
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50/40 overflow-hidden">
      <div className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] items-center">
          {/* left: Content */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Grow Your Practice
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Doctors grow their own business faster with GetSetTime</h2>
            <p>Turn your booking link into a reliable growth engine. GetSetTime helps doctors attract new patients, retain follow-up cases, and run predictable clinic days without increasing front-desk stress.</p>
            <div className="space-y-3">
              {[
                "Reach more patients through shareable booking links on Google and WhatsApp",
                "Convert first-time visitors with instant confirmations and clean booking flow",
                "Improve repeat visits with automated reminders and follow-up nudges",
                "Track clinic growth with clear appointment and utilisation insights",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="text-indigo-600">✓</span>
                  <p className="text-neutral-700">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link href={`${LOGIN_URL}`} target="_blank" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm text-white transition hover:bg-indigo-700">
                Start Growing with GetSetTime
              </Link>
            </div>
          </div>
          {/* right: Image */}
          <div className="relative">
            <div className="rounded-xl border border-white bg-white p-3 shadow-xl">
              <Image
                src="/grow-doctor.jpg"
                alt="Doctor reviewing clinic growth on portal dashboard"
                width={600}
                height={500}
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 rounded-xl border border-emerald-100 bg-white px-4 py-3 shadow-lg space-y-2 animate-float">
              <div className="text-sm uppercase text-neutral-500">Monthly growth</div>
              <div className="text-lg font-bold"><span className="text-emerald-600 text-3xl">+38%</span> appointments</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FREQUENTLY ASKED QUESTIONS SECTION */}
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-12 sm:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* left: Title */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Questions Doctors Ask Before Getting Started</h2>
            <p>Turn a plain FAQ block into a premium conversion section. This layout gives GetSetTime a more modern SaaS feel with glassmorphism, soft gradients, animated cards, and a stronger content hierarchy.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-4 space-y-3">
                  <svg className="h-8 w-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-neutral-900">Smart scheduling</p>
                  <p>Highlight automation, reminders, and live availability.</p>
                </div>
              </div>
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-4 space-y-3">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="font-semibold text-neutral-900">Build trust</p>
                  <p>Reduce friction with short supportive answers and better clarity.</p>
                </div>
              </div>
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-4 space-y-3">
                  <svg className="h-8 w-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-neutral-900">Premium feel</p>
                  <p>Matches polished hero and feature sections better than a plain list.</p>
                </div>
              </div>
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-4 space-y-3">
                <svg fill="#00a63e" className="h-8 w-8" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" stroke="#000000" strokeWidth="8.192"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"></path> <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283 C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z"></path> <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"></path> </g> </g> </g></svg>
                  <p className="font-semibold text-neutral-900">Easy growth</p>
                  <p>Scale bookings smoothly with structured workflows and clear next steps.</p>
                </div>
              </div>
            </div>
          </div>
          {/* right: FAQ Section */}
          <div>
            <FaqSection items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}