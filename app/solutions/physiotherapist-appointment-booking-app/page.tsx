import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { LOGIN_URL, BASE_URL, APP_NAME, contactInfo, REGISTER_GOOGLE_URL } from "@/lib/config";
import { FaqSection } from "@/app/component/FaqSection";

const pageUrl = `${BASE_URL}/solutions/physiotherapist-appointment-booking-app`;

export const metadata: Metadata = {
  title: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
  description: `Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.`,
  keywords: [ "physiotherapy appointment booking app", "physiotherapy booking app", "online appointment booking", "calendar management system", " scheduling tool", "appointment management app"],
  alternates: {
    canonical: `${pageUrl}`,
  },
  openGraph: {
    title: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
    description: `Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.`,
    url: `${pageUrl}`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
    description: `Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

export default function PhysiotherapyAppointmentBookingApp() {

const faqItems = [
  {
    title: "Is it worth it for a solo physio practice to use an appointment system?",
    content: `Yes. An appointment system is more cost-effective than hiring a team to manage the booking and scheduling. There is no interference with booking, rescheduling, sending reminder SMS, or canceling appointments. The system automatically works after you set availability, and you can also change it in an emergency.`,
  },
  {
    title: "How long does the initial setup for a physio clinic take?",
    content: `Just a few minutes, you'll go for the signup. Fill in your details, upload clinic logo or image for branding. Then set your availability and create events with self-preference of 15, 30, 60 minutes, and so on. Get a personal booking link and share on your website, GBP, and social media. All done in 20-30 minutes.`,
  },
  {
    title: "Guide to choosing an online booking system for a physio clinic?",
    content: "Look for a system that offers online booking, automated reminders, and patient record management. It should be simple to set up, require no technical knowledge, and work for solo practitioners and multi-therapist clinics alike.",
  },
  {
    title: "How to choose the right physio appointment booking platform for clinics?",
    content: "Physio appointment booking should be easy to set up, user-friendly, and automatically manage all appointments. Then check if it fits your clinic size and budget. A free trial helps you confirm it works for your workflow as you expect.",
  },
  {
    title: "How is GetSetTime an affordable booking platform for small physio clinics?",
    content: "GetSetTime is priced per practitioner, with no setup fees or long-term contracts. Solo physiotherapists get full access to online booking, automated reminders, and patient management — without paying for features built for large hospital teams.",
  },
  {
    title: "How to set up an online booking system for a physiotherapy practice?",
    content: "Create your account, add your working hours and appointment types, and your booking page goes live automatically. Most physiotherapy practices are set up and accepting online appointments within a single afternoon, with no technical configuration required.",
  },
  {
    title: "What are the essential features for physio scheduling software?",
    content: "Almost all physio scheduling software brings the inbuilt feature -online appointment booking, rescheduling, or canceling; send reminders automatically via SMS, email, or WhatsApp; and centralized patient record management. All these reduce no-shows, double bookings, and hours of manual work - the physio clinic runs smoothly and lets you focus on patient care.",
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
        "height": 512,
      },
      "description": `Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.`,
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
      "name": `Physiotherapy Appointment Booking App | ${APP_NAME}`,
      "description": "Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.",
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
        "@type": "PhysiotherapyAudience",
        "audienceType": "Physiotherapists",
      },
      "featureList": [
        "Online appointment booking",
        "WhatsApp and SMS reminders",
        "Smart calendar management",
        "Availability control",
        "Works on any device",
        "Multi-location support",
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
          "name": `Physiotherapy Appointment Booking App | ${APP_NAME}`,
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

const features = [
  {
    title: "Online Appointment Booking",
    desc: "Patients can book their own sessions through a simple, personalized online link—any time of day, without needing to call. And on any other day.",
    icon: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#4f39f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
  },
  {
    title: "Automated Scheduling",
    desc: "You set your availability; the system handles the rest. Patients find an empty slot, book; then it fills your calendar automatically—nothing to manage manually for you.",
    icon: `<svg fill="#4f39f6" version="1.1" id="Capa_1" width="40px" height="40px" viewBox="0 0 59.504 59.504" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M29.752,56.701c-3.608,0-6.652-2.463-7.538-5.797H9.033C4.053,50.904,0,46.852,0,41.871c0-3.575,2.117-6.819,5.394-8.264 C6.988,32.764,14,27.448,14,24.215v-8.072c0-7.355,5.983-13.34,13.339-13.34h4.826c7.354,0,13.339,5.984,13.339,13.34v8.072 c0,3.232,7.013,8.549,8.667,9.42c3.216,1.416,5.333,4.66,5.333,8.236c0,4.979-4.053,9.033-9.033,9.033H37.29 C36.404,54.238,33.359,56.701,29.752,56.701z M27.339,6.803c-5.149,0-9.339,4.189-9.339,9.34v8.072 c0,6.559-10.883,13.004-10.993,13.053C5.181,38.072,4,39.879,4,41.871c0,2.775,2.258,5.033,5.033,5.033h14.921 c1.104,0,2,0.896,2,2c0,2.094,1.704,3.797,3.798,3.797c2.094,0,3.798-1.703,3.798-3.797c0-1.104,0.896-2,2-2h14.921 c2.775,0,5.033-2.258,5.033-5.033c0-1.991-1.182-3.799-3.007-4.604c-0.111-0.048-10.993-6.494-10.993-13.052v-8.072 c0-5.15-4.189-9.34-9.339-9.34L27.339,6.803L27.339,6.803z"></path> </g> <g> <path d="M38.015,18.983c-1.104,0-2-0.896-2-2c0-2.619-2.131-4.75-4.75-4.75c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2 c4.825,0,8.75,3.924,8.75,8.75C40.015,18.087,39.119,18.983,38.015,18.983z"></path> </g> </g> </g> </g></svg>`,
  },
  {
    title: "Patient Reminders",
    desc: "The hard side of manual handling is sending reminders to patients before each appointment. The booking system does it automatically and reduces missed sessions without any extra work; allow it to send when needed.",
    icon: `<svg fill="#4f39f6" width="40px" height="40px" viewBox="0 0 100 100" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M57,44h-6h-6c-3.3,0-6,2.7-6,6v9c0,1.1,0.5,2.1,1.2,2.8c0.7,0.7,1.7,1.2,2.8,1.2v9c0,3.3,2.7,6,6,6h2h2 c3.3,0,6-2.7,6-6v-9c1.1,0,2.1-0.4,2.8-1.2c0.7-0.7,1.2-1.7,1.2-2.8v-9C63,46.7,60.3,44,57,44z"></path> </g> <g> <circle cx="51" cy="33" r="7"></circle> </g> <g> <path d="M36.6,66.7c-0.2-0.2-0.5-0.4-0.7-0.6c-1.9-2-3-4.5-3-7.1v-9c0-3.2,1.3-6.2,3.4-8.3c0.6-0.6,0.1-1.7-0.7-1.7 c-1.7,0-3.6,0-3.6,0h-6c-3.3,0-6,2.7-6,6v9c0,1.1,0.5,2.1,1.2,2.8c0.7,0.7,1.7,1.2,2.8,1.2v9c0,3.3,2.7,6,6,6h2h2 c0.9,0,1.7-0.2,2.4-0.5c0.4-0.2,0.6-0.5,0.6-0.9c0-1.2,0-4,0-5.1C37,67.2,36.9,66.9,36.6,66.7z"></path> </g> <g> <circle cx="32" cy="29" r="7"></circle> </g> <g> <path d="M76,40h-6c0,0-1.9,0-3.6,0c-0.9,0-1.3,1-0.7,1.7c2.1,2.2,3.4,5.1,3.4,8.3v9c0,2.6-1,5.1-3,7.1 c-0.2,0.2-0.4,0.4-0.7,0.6c-0.2,0.2-0.4,0.5-0.4,0.8c0,1.1,0,3.8,0,5.1c0,0.4,0.2,0.8,0.6,0.9c0.7,0.3,1.5,0.5,2.4,0.5h2h2 c3.3,0,6-2.7,6-6v-9c1.1,0,2.1-0.4,2.8-1.2c0.7-0.7,1.2-1.7,1.2-2.8v-9C82,42.7,79.3,40,76,40z"></path> </g> <g> <circle cx="70" cy="29" r="7"></circle> </g> </g> </g></svg>`,
  },
  {
    title: "Patient Records Management",
    desc: "Patient history and records help you make them feel better. The software lets you keep everything you need in one organized place: patient contact details, treatment history, appointment notes, and the next booking schedule.",
    icon: `<svg width="40px" height="40px" viewBox="0 0 100 100" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill="#4f39f6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M33.523 34.986a20 20 0 0 0-20 20a20 20 0 0 0 20 20a20 20 0 0 0 20-20a20 20 0 0 0-20-20zm6.204 4.088a2.5 2.5 0 0 1 2.127 3.781l-6.9 11.952l7.247 4.672a2.5 2.5 0 1 1-2.709 4.203l-9.25-5.961a2.5 2.5 0 0 1-.81-3.352l8.091-14.014a2.5 2.5 0 0 1 2.204-1.28z" fill="#4f39f6"></path><path d="M2.523 5A2.5 2.5 0 0 0 0 7.5v70.29a2.5 2.5 0 0 0 1.447 2.267l31.666 14.71A2.5 2.5 0 0 0 34.19 95a2.5 2.5 0 0 0 1.032-.232l30.613-14.221l30.613 14.22A2.5 2.5 0 0 0 100 92.5V22.21a2.5 2.5 0 0 0-1.447-2.267L66.887 5.233A2.5 2.5 0 0 0 65.809 5a2.5 2.5 0 0 0-1.03.232L34.166 19.453L3.553 5.233A2.5 2.5 0 0 0 2.523 5zm64.428 5.775L95 23.805v64.777L67.322 75.725zm-2.998.354l.37 64.605l-28.677 13.323l-.062-10.871c-.998.078-2 .09-3 .033l.062 10.818L5 76.193V11.418l27.275 12.67l.045 7.908a22.242 22.242 0 0 1 3.002.182l-.045-7.727z" fill="#4f39f6" fill-rule="evenodd"></path></g></svg>`,
  },
];

const services = [
  'Patient Booking Online, Any Time',
  'Getting an Instant Notification',
  'Send Reminders On Auto-Mode',
  'Saved Session details',
  'Easy to Reschedule',
];

const benefits = [
  "Saves the time that you are spending on manual scheduling and phone calls",
  "Automatic reminders reduce no-shows and free up the slot for booking.",
  "Improve workflow: no double-booking, no waiting conflicts. Better resource management",
  "Give patients a professional booking experience -minimum contact details, then choose the service and slot with a tap, and the booking is done.",
];

const growthRoadmap = [
  {
    title: "Quick Account Setup",
    detail: "Create your account, enter your clinic details, and set your working hours. The system generates your booking page automatically. There is nothing to install and no technical configuration needed.",
  },
  {
    title: "Automation With the Setup Completion",
    detail: "Only with your preferences, reminders, confirmations, and calendar updates all work automatically. The system follows only the rules you set up. No manual inputs after that.",
  },
  {
    title: "Minimal Training Needed",
    detail: "The interface is built to be straightforward for clinical staff, not software teams. Most users are comfortable with the full feature set within a day or two of regular use.",
  },
];

  return (
    <>
      {/* Add Structured Data for Physiotherapy Appointment Booking App Page */}
      <Script id="physiotherapy-appointment-booking-app-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2),}}/>
     
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
            {/* Left column - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  Built for Physiotherapists
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900">
              Scheduling Software Made for <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">Physio Clinics</span></h1>
              <p>Stay on your role, forget the admin workload. Getsettime - your patients book online appointments, receive automatic reminders, and your schedule stays organized.</p>
              
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
                      <div className="text-gray-500">Patients</div>
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
                      <div className="text-gray-500">Physiotherapy Rating</div>
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
              <div className="relative">
                <div className="rounded-2xl bg-white/20 p-4 shadow-xl">
                  <div className="grid gap-3">
                    <div className="overflow-hidden rounded-2xl">
                      <Image src="/physiotherapy-appointment.jpg" alt="physiotherapy appointment staff working" className="h-50 w-full object-cover" width={500} height={500}/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-bold text-neutral-900">Physiotherapy Consultation</div>
                          </div>
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">Live</span>
                        </div>
                        <p>45-minute consultation with Physiotherapy patient profile review, treatment plan, and follow-up instructions.</p>

                        <div className="flex flex-wrap gap-2">
                          {['10:00 AM', '11:15 AM', '01:00 PM', '02:30 PM', '04:15 PM', '06:00 PM'].map((slot) => (
                            <span key={slot} className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-700">{slot}</span>
                          ))}
                        </div>

                        <div className="relative">
                          <div className="flex items-center gap-3">
                            <Image src="/physiotherapy-profile.jpg" alt="physiotherapy profile" className="h-12 w-12 rounded-full object-cover" width={50} height={50}/>
                            <div>
                              <div className="font-semibold">Physiotherapist profile</div>
                              <div className="text-slate-500">Trusted and experienced</div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-sm space-y-3">
                        <div className="font-bold text-white">Reminder flow</div>
                        <div className="space-y-3">
                          {['Instant confirmation', '24-hour reminder', '1-hour reminder', 'treatment plan + follow-up instructions'].map((item) => (
                            <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">{item}</div>
                          ))}
                        </div>
                        <div className="rounded-2xl bg-white/10 p-4 text-neutral-200">Perfect for paid consultations, treatment plans, and high-intent Physiotherapy inquiries.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* HOW IT WORKS SECTION */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    Core Features
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-neutral-900">Perfect Physiotherapy Booking Software That Fits Your Expectations</h2>
                <p>Beyond physio online booking, the right appointment system integrates with your work system and handles it automatically. And you can spend more time on patient care. Solve your routine puzzles, let's look at how:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {features.map((item) => {
                return (
                  <div key={item.title} className="group relative py-3 px-3 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-50 hover:-translate-y-1 hover:shadow-xl transition duration-300">
                    <div className="h-full bg-white rounded-xl p-6 shadow-md group-hover:shadow-xl transition duration-300 space-y-3">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                        <h3 className="font-medium text-neutral-900">{item.title}</h3>
                        <div className="text-neutral-600">{item.desc}</div>
                    </div>
                </div>
                );
              })}
            </div>
        </div>
      </section>

      {/* WHY IT FEELS MORE PREMIUM SECTION */}
      <section className="relative py-20 bg-gradient-to-b from-white via-indigo-50/40 to-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            {/* Left column - Content */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  Why It Matters for Physiotherapists
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">What Real Benefits Allow Them to Focus on Practices</h2>
              <p>You or your team struggles all day to manage calls, book manually, and handle the queue, resulting in a massive workload during peak hours, poor resource allocation, and wasted time and money. Shifting to dedicated physio online booking software like Getsettime, it does so much more than you expect - from saving time to adjusting for how your clinic runs from the ground up.</p>

              <div className="mt-6 grid gap-4">
                {benefits.map((item) => (
                  <div key={item} className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-9 w-9 min-w-9 min-h-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25">✓</div>
                    <div className="text-slate-700">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right column - Dashboard graphics */}
            <div className="space-y-4 rounded-2xl bg-white/20 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase text-indigo-600">Physiotherapy Dashboard</div>
                  <div className="text-xl font-bold leading-tight text-neutral-900">Booking Overview</div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Image src="/physiotherapy-profile.jpg" alt="physiotherapy profile" className="relative h-16 w-16 rounded-full border-4 border-white object-cover shadow-md" width={64} height={64} priority />
                    </div>
                  <div>
                    <div className="font-semibold">Harsh Patel, MD</div>
                    <div className="text-slate-500">Physiotherapist</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="h-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 p-4 text-white shadow-lg space-y-1">
                  <div className="text-sm uppercase tracking-wide">Next appointment</div>
                  <div className="text-base font-semibold">Anika Sharma · 11:00 AM</div>
                  <div>Physiotherapy Consultation · Room 2</div>
                  <div className="mt-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium">Check-in starts in 20 mins</div>
                </div>

                <div className="h-full rounded-xl bg-slate-50 p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="font-semibold text-slate-700">Availability Calendar</div>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-[11px] font-medium text-green-700">Today</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"].map((time, i) => (
                      <button
                        key={i}
                        className={`rounded-lg border px-2 py-2 text-center text-xs font-medium transition ${
                          time === "11:00"
                            ? "border-red-300 bg-red-100 text-red-600"
                            : "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">Physiotherapy performance</div>
                    <div className="text-slate-500">Example metrics for physiotherapists</div>
                  </div>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">Growth focused</span>
                </div>

                {[
                  { label: "Lead inquiries", value: 88 },
                  { label: "Consultation bookings", value: 71 },
                  { label: "Reminder delivery", value: 98 },
                  { label: "No-show reduction", value: 41 },
                ].map((item, i) => (
                  <div key={i} className="mb-2">
                    <div className="mb-1 flex justify-between">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400" style={{ width: `${item.value}%` }}/>
                    </div>
                  </div>
                ))}

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    "Physiotherapy consultations",
                    "Physiotherapy evaluations",
                    "Physiotherapy treatments",
                    "Physiotherapy follow-up",
                    "Physiotherapy referrals",
                    "Physiotherapy reports",
                  ].map((tag, i) => (
                    <div key={i} className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-2 text-center text-white">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES SECTION */}
      <section className="relative bg-slate-50">
       <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="/physiotherapy-services.jpg" alt="physiotherapy services available" className="h-full w-full object-cover" width={500} height={500} />
            </div>
           
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  Day-to-Day Use
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Fits Smoothly, Feels Invisible, Acts as Your Team</h2>
              <p>Truly, the strength of the best physiotherapist appointment software is its ability to run the clinic smoothly with minimal effort or to support your routine practice automatically.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <span key={index} className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
                    {service}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm space-y-2">
                  <div className="text-neutral-500">Reminders delivered</div>
                  <div className="text-3xl font-bold text-neutral-900">98%</div>
                  <div className="text-neutral-600">Better attendance for scheduled Physiotherapy consultations</div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm space-y-2">
                  <div className="text-neutral-500">No-shows reduced</div>
                  <div className="text-3xl font-bold text-neutral-900">41%</div>
                  <div className="text-neutral-600">With confirmations and follow-up Physiotherapy instructions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHYSIO THERAPY SCHEDULING CHALLENGES SECTION */}
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
                Why Manual Scheduling Holds Clinics Back
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">One System for Every Stage of Appointment</h2>
              <p>As patient demand grows, manual scheduling creates delays, front-desk strain, and inconsistent follow-up. A dedicated physiotherapy booking system keeps every appointment organized — from the first request to the final follow-up.</p>
              <div className="space-y-3">
                {[
                  "Delayed responses weaken trust; patients look to move on.",
                  "Uneven appointment scheduling leads to idle slots and long wait times",
                  "Chasing patients by phone or Email is not time-consuming, but also impossible every time.",
                  "Booking requests via Email, phone, and walk-ins creates confusion across your team and a bad experience for patients.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <span className="text-indigo-600">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="relative rounded-xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur">
              <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2 text-neutral-700 font-semibold">
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
                          className={`rounded-xl border px-2 py-2 text-sm font-medium transition-all duration-200 ${
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
                  <Image src="/physiotherapy-realty.jpg" alt="physiotherapy appointment schedule interface" width={700} height={700} className="h-full w-full object-cover" />
                  <div className="absolute left-2 top-2 rounded-md bg-indigo-600/90 px-2 py-1 text-xs uppercase tracking-widest text-white">Smart slots</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="font-semibold text-neutral-900">Physiotherapy Operations Board</div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Live Overview</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Consultation</div>
                  <div className="mt-1 text-indigo-900">12 Slots · 7 Booked</div>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Evaluation</div>
                  <div className="mt-1 text-indigo-900">8 Slots · 5 Booked</div>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Treatment</div>
                  <div className="mt-1 text-indigo-900">9 Slots · 6 Booked</div>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Follow-up</div>
                  <div className="mt-1 text-indigo-900">11 Slots · 5 Booked</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
            <h3 className="text-2xl font-bold text-center text-neutral-900">Supports Every Type of Physiotherapy Appointment</h3>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {[
                "Initial Consultation",
                "Assessment & Evaluation",
                "Treatment Session",
                "Follow-up Appointment",
                "Rehabilitation Program",
              ].map((tag) => (
                <span key={tag} className="px-3 py-1.5">✓ {tag}</span>
              ))}
            </div>
            <div className="mt-5 text-center">
              <Link href={`${LOGIN_URL}`} target="_blank" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-white shadow-md transition hover:bg-indigo-700">Set Up Your Physiotherapy Booking System</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHYSIO THERAPY GROWTH ROADMAP SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100 py-20">
          <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl" />
              <div className="absolute right-8 bottom-16 h-44 w-44 rounded-full bg-violet-400/25 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT CONTENT */}
              <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-indigo-600" />
                      Getting Started
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-neutral-900">Simple to Set Up, Easier to Run Every Day</h2>
                  <p>No long onboarding process. No IT knowledge required. Most clinics are taking bookings within a single afternoon.</p>
                  {growthRoadmap.map((point, i) => (
                  <div key={i} className="relative overflow-hidden rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="flex items-start gap-2">
                          <div className="flex h-12 w-12 min-w-12 min-h-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25">
                              <span className="text-sm font-bold">0{i + 1}</span>
                          </div>
                          <div className="relative">
                              <div className="font-semibold text-neutral-900">{point.title}</div>
                              <p className="text-neutral-600">{point.detail}</p>
                          </div>
                      </div>
                  </div>
                  ))}
              </div>
              {/* RIGHT FEATURES GRID */}
              <div className="relative">
                  <div className="rounded-xl bg-white p-3 shadow-xl">
                      <Image src="/physiotherapy-grow.jpg" alt="Physiotherapy growth roadmap" width={600} height={500} className="w-full h-full rounded-xl object-cover" />
                  </div>
                  <div className="absolute right-0 -top-10 w-60 rounded-xl bg-white p-4 shadow-md animate-float">
                      <div className="text-sm uppercase text-neutral-400">Physiotherapy growth</div>
                      <div className="font-bold text-neutral-900">30 days to grow your Physiotherapy</div>
                      <div className="mt-3 flex items-end gap-2">
                        <div className="h-5 w-3 rounded-full bg-indigo-200" />
                        <div className="h-8 w-3 rounded-full bg-indigo-300" />
                        <div className="h-12 w-3 rounded-full bg-violet-300" />
                        <div className="h-8 w-3 rounded-full bg-indigo-500" />
                        <div className="h-10 w-3 rounded-full bg-sky-400" />
                        <div className="h-14 w-3 rounded-full bg-violet-300" />
                        <div className="h-16 w-3 rounded-full bg-emerald-300" />
                        <div className="h-16 w-3 rounded-full bg-indigo-500" />
                      </div>
                  </div>
                  <div className="pointer-events-none absolute left-0 -bottom-10 rounded-xl border border-violet-100 bg-white p-4 shadow-xl animate-float">
                      <div className="text-sm uppercase text-neutral-500">New booking</div>
                      <div className="mt-1 font-bold text-neutral-900">Manoj Kumar · 11:30 AM</div>
                      <div className="text-neutral-600">Synced to Physiotherapy operations board</div>
                  </div>
              </div>
          </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-14 sm:py-20">
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
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Questions physiotherapists ask before getting started</h2>
                <p>Clear answers for physiotherapists that want to modernize Physiotherapy consultation booking without adding extra admin work.</p>
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
                        <svg className="h-7 w-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>
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
