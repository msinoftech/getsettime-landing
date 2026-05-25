import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { BASE_URL, LOGIN_URL, APP_NAME, contactInfo, REGISTER_GOOGLE_URL } from "@/lib/config";
import Link from "next/link";
import { FaqSection } from "@/app/component/FaqSection";

const pageUrl = `${BASE_URL}/solutions/dentist-appointment-scheduling-app`;

export const metadata: Metadata = {
    title: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
    description: `The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.`,
    keywords: [ "dental appointment booking software", "best dental clinic management software", "dentist software", "scheduling software for dentists", "software for dental clinic management", "software for dental clinic", "dental practice management software", "dental appointment app"],
    alternates: {
      canonical: `${pageUrl}`,
    },
    openGraph: {
      title: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
      description: `The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.`,
      url: `${pageUrl}`,
      type: "website",
      siteName: `${APP_NAME}`,
      locale: "en",
      images: [
        {
          url: `${BASE_URL}${contactInfo.logo}`,
          width: 1200,
          height: 630,
          alt: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
      description: `The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.`,
      images: [`${BASE_URL}${contactInfo.logo}`],
    },
};

export default function DentistAppointmentSchedulingApp() {

const faqItems = [
    {
        title: "What is an appointment booking system for a dental clinic?",
        content: `It's software that lets patients schedule, reschedule, or cancel dental appointments online — while keeping your clinic's calendar updated automatically without any manual effort from your staff.`,
    },
    {
        title: "What is the purpose of a booking system?",
        content: `To remove the back-and-forth of phone and manual scheduling. Patients book when it's convenient for them. It saves your team up to 90% of the time spent on calls. Allowing them more time for patient care.`,
    },
    {
        title: "Why should dental clinics have an online booking system?",
        content: `The key reason why dental clinics need a booking system is to keep the clinic reachable 24/7 for online booking. After that, no missed calls mean no business loss, automated reminders reduce no-shows, and managing scheduling tasks without interruptions.`,
    },
    {
        title: "What leading booking systems do dentists use in India?",
        content: `Based on clinic size, budget, and requirements of WhatsApp reminders or multi-location support, tools like GetSetTime, PappyJoe, Dentee, and Zoho Bookings are popular among the dental community in India.`,
    },
    {
        title: "What is meant by the best booking software for a dental clinic?",
        content: `The best software fits your actual workflow — easy for patients to use, simple for staff to manage, with reminder automation, calendar sync, and fair pricing that makes sense for your practice.`,
    },
    {
        title: "What are the disadvantages of online booking systems?",
        content: `Like any tool, it takes a short setup period and a small learning curve. Once configured, though, most clinics find it runs on its own with very little daily involvement.`,
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
        "description": `The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.`,
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
        "name": `Dentist Appointment Booking Software | ${APP_NAME} – Smart Appointment Scheduling`,
        "description": "The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.",
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
          "@type": "DentistAudience",
          "audienceType": "Individual Dentists, Dental Clinics, Growing Dental Clinics, Multi-Location Dental Clinics",
        },
        "featureList": [
          "Online patient booking",
          "WhatsApp and SMS reminders",
          "Smart calendar management",
          "Availability control",
          "Works on any device",
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
            "name": `Dentist Appointment Booking Software | ${APP_NAME} – Smart Appointment Scheduling`,
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
    description: "Patients can book their own sessions through a simple, personalized online link—any time of day, without needing to call. And on any other day.",
    icon: `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#4f39f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    },
    {
    title: "Automated Scheduling",
    description: "You set your availability; the system handles the rest. Patients find an empty slot, book; then it fills your calendar automatically—nothing to manage manually for you.",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f39f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check2-icon lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>`,
    },
    {
    title: "Patient Reminders",
    description: "The hard side of manual handling is sending reminders to patients before each appointment. The booking system does it automatically and reduces missed sessions without any extra work; allow it to send when needed.",
    icon: `<svg fill="#4f39f6" version="1.1" id="Capa_1" width="40px" height="40px" viewBox="0 0 59.504 59.504" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M29.752,56.701c-3.608,0-6.652-2.463-7.538-5.797H9.033C4.053,50.904,0,46.852,0,41.871c0-3.575,2.117-6.819,5.394-8.264 C6.988,32.764,14,27.448,14,24.215v-8.072c0-7.355,5.983-13.34,13.339-13.34h4.826c7.354,0,13.339,5.984,13.339,13.34v8.072 c0,3.232,7.013,8.549,8.667,9.42c3.216,1.416,5.333,4.66,5.333,8.236c0,4.979-4.053,9.033-9.033,9.033H37.29 C36.404,54.238,33.359,56.701,29.752,56.701z M27.339,6.803c-5.149,0-9.339,4.189-9.339,9.34v8.072 c0,6.559-10.883,13.004-10.993,13.053C5.181,38.072,4,39.879,4,41.871c0,2.775,2.258,5.033,5.033,5.033h14.921 c1.104,0,2,0.896,2,2c0,2.094,1.704,3.797,3.798,3.797c2.094,0,3.798-1.703,3.798-3.797c0-1.104,0.896-2,2-2h14.921 c2.775,0,5.033-2.258,5.033-5.033c0-1.991-1.182-3.799-3.007-4.604c-0.111-0.048-10.993-6.494-10.993-13.052v-8.072 c0-5.15-4.189-9.34-9.339-9.34L27.339,6.803L27.339,6.803z"></path> </g> <g> <path d="M38.015,18.983c-1.104,0-2-0.896-2-2c0-2.619-2.131-4.75-4.75-4.75c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2 c4.825,0,8.75,3.924,8.75,8.75C40.015,18.087,39.119,18.983,38.015,18.983z"></path> </g> </g> </g> </g></svg>`,
    },
    {
    title: "Patient Records Management",
    description: "Patient history and records help you make them feel better. The software lets you keep everything you need in one organized place: patient contact details, treatment history, appointment notes, and the next booking schedule.",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f39f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-library-icon lucide-square-library"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="m15 7 2 10"/></svg>`,
    },
];

const growthRoadmap = [
    {
        title: "Quick Account Setup",
        detail: "Create your account, enter your clinic details, and set your working hours. The system automatically generates your booking page. There is nothing to install and no technical configuration needed.",
    },
    {
        title: "Automation With the Setup Completion",
        detail: "Only with your preferences, reminders, confirmations, and calendar updates all work automatically. The system follows only the rules you set up—no manual inputs after that.", 
    },
    {
        title: "Minimal Training Needed",
        detail: "The interface is built to be straightforward for clinical staff, not software teams. Most users are comfortable with the full feature set within a day or two of regular use.",
    },
];
  
return (
    <>
    {/* Add Structured Data for Dentist Appointment Scheduling App Page */}
    <Script id="dentist-appointment-scheduling-app-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2),}}/>

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
                        <span>🦷</span>
                        Expand Your Practise
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900">
                    Let's Manage Your Appointments Booking With the
                    <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent"> Best Dentist Scheduling Software</span>
                    </h1>
                    <p>GetSetTime helps dentists automate bookings, reduce no-shows, and free up front-desk time — so your team can focus on patients, not phone calls.</p>
                    
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
                            <div className="text-gray-500">Dental Clinic Rating</div>
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
                <div className="relative space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/dentist-appointment.jpg" className="h-64 w-full object-cover" alt="Dental Clinic Dashboard" width={500} height={500} />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/dentist-booking.jpg" className="h-64 w-full object-cover" alt="Dental Clinic Bookings" width={500} height={500} />
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white/95 shadow-xl">
                        <div className="p-0">
                            <div className="px-5 pt-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-indigo-600">GetSetTime Dental Clinic Dashboard</div>
                                        <div className="mt-1 font-semibold text-slate-900">Today’s Patients</div>
                                    </div>
                                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">Live Appointments</div>
                                </div>
                            </div>
                            <div className="grid gap-4 p-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 space-y-3">
                                    <div className="font-semibold text-neutral-600">Upcoming Appointments</div>
                                    <div className="space-y-3">
                                        {[
                                            ["10:00 AM", "Dental Checkup", "Priya"],
                                            ["11:30 AM", "Dental Cleaning", "Anjali"],
                                            ["02:00 PM", "Dental Filling", "Simran"],
                                        ].map(([time, service, patient]) => (
                                        <div key={time} className="rounded-xl bg-white p-3 shadow-md">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <div className="font-medium text-neutral-900">{service}</div>
                                                    <div className="text-neutral-600">Patient: {patient}</div>
                                                </div>
                                                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">{time}</span>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 space-y-3">
                                    <div className="font-semibold text-neutral-600">Dental Clinic Staff</div>
                                    <div className="space-y-3">
                                        {[
                                            ["Riya", "Dental Specialist", "Available"],
                                            ["Mehak", "Dental Expert", "Busy"],
                                            ["Jasleen", "Dental Artist", "Available"],
                                        ].map(([name, role, status]) => (
                                            <div key={name} className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
                                            <div>
                                                <div className="font-medium text-neutral-900">{name}</div>
                                                <div className="text-neutral-600">{role}</div>
                                            </div>
                                            <span
                                                className={`rounded-full px-2 py-1 text-xs font-medium ${
                                                status === "Available"
                                                    ? "bg-emerald-50 text-emerald-600"
                                                    : "bg-amber-50 text-amber-600"
                                                }`}
                                            >
                                                {status}
                                            </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* FEATURES SECTION */}
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    Feature
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-neutral-900">Everything a Dentist Needs to Run a Tighter Schedule</h2>
                <p>From first booking to follow-up reminder, GetSetTime is one of the most complete appointment systems that integrates with your scheduling workflow and handles it all automatically, so your staff doesn't have to.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {features.map((feature) => (
                <div key={feature.title} className="group relative py-3 px-3 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-50 hover:-translate-y-1 hover:shadow-xl transition duration-300">
                    <div className="h-full bg-white rounded-xl p-6 shadow-md group-hover:shadow-xl transition duration-300 space-y-3">
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100" dangerouslySetInnerHTML={{ __html: feature.icon }}></div>
                      <h3 className="font-medium text-neutral-900">{feature.title}</h3>
                      <div className="text-neutral-600">{feature.description}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>

    {/* HOW IT WORKS SECTION */}
    <section className="bg-[#f5f7ff] py-16 relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
                {/* Left column - Content */}
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                        Does it matter for Dentists?
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-neutral-900">Managing the Dental Clinic Expertly, Focus on Practice</h2>
                    <p>Now, managing phone calls and booking appointments manually is more expensive than using scheduling software for a dental clinic. Software like Getsettime does so much more than you expect - from saving time to how your clinic runs from the ground up in day-to-day.</p>
                    <div className="mt-6 space-y-3">
                    {[
                    "Saving time that is spent on manual scheduling and phone calls every day.",
                    "Automatic reminders reduce no-shows, and slots become available when patients reschedule or cancel their bookings.",
                    "Smooth workflow, no manual intervention, no double-booking, no conflicts for waiting",
                    "Effortless booking -minimum contact details, one-click service, and slot selection. Confirm. Done.",
                    ].map((step) => (
                    <div key={step} className="flex gap-4 rounded-xl bg-white p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <span className="text-indigo-600">✓</span>
                        <div>{step}</div>
                    </div>
                    ))}
                    </div>
                </div>
                {/* Right column - Interactive Demo */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl">
                    <div className="rounded-2xl bg-[#f5f6fb] text-neutral-900">
                        <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
                            <div className="rounded-2xl bg-white p-4 shadow-sm">
                                <div className="text-xl font-black text-neutral-900">Glow Dental Clinic</div>
                                <div className="text-neutral-600">Dental Clinic · Open Today</div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
                                    <div className="rounded-2xl bg-white p-4 mt-3 shadow-sm">
                                        <div className="font-medium text-neutral-800">Appointments growing smoothly</div>
                                        <div className="mt-3 flex items-end gap-2">
                                            {["h-8","h-12","h-10","h-16","h-14","h-9","h-11","h-16"].map((bar, idx) => (
                                                <div key={idx} className={`w-3 rounded-full ${bar} ${idx === 3 || idx === 7 ? "bg-indigo-500" : idx === 4 ? "bg-sky-500" : idx === 6 ? "bg-emerald-400" : "bg-indigo-300"}`}/>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-2xl bg-indigo-600 p-4 text-white shadow-lg">
                                        <div className="opacity-90">Next appointment</div>
                                        <div className="mt-1 font-semibold">Anika Sharma · 11:00 AM</div>
                                        <div className="opacity-90">Dental Checkup · Room 2</div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-3">
                                    <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-3 shadow-md">
                                        <div className="text-indigo-600">Patient rating</div>
                                        <div className="text-xl font-bold">4.9/5</div>
                                    </div>
                                    <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3 shadow-md">
                                        <div className="text-emerald-600">Reminders sent</div>
                                        <div className="text-xl font-bold">126</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="mt-4 rounded-xl border border-neutral-100 p-3 space-y-1">
                                    <div className="relative">
                                        <Image
                                        src="/dentist-profile.jpg"
                                        alt="Dental Clinic Profile"
                                        className="relative h-16 w-16 rounded-full border-4 border-white object-cover shadow-md"
                                        width={64}
                                        height={64}
                                        priority
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-900">Dr. Prabhjot</div>
                                        <div className="text-neutral-600">Dental Specialist · 8+ years</div>
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="font-semibold text-neutral-900">Availability Calendar</div>
                                        <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">Friday</span>
                                    </div>
                                    <div className="text-neutral-600">Pick a dental appointment slot for quick booking.</div>
                                    <div className="mt-3">
                                        <div className="uppercase text-sm text-neutral-500">Dental Clinic services</div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["Dental Checkup", "Dental Cleaning", "Dental Filling", "Dental Extraction"].map((service, idx) => (
                                                <span
                                                    key={service}
                                                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                        idx === 1
                                                            ? "bg-indigo-600 text-white"
                                                            : "border border-indigo-100 bg-indigo-50 text-indigo-700"
                                                    }`}
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                                        {[
                                            { time: "09:00", active: false },
                                            { time: "09:30", active: false },
                                            { time: "10:00", active: false },
                                            { time: "10:30", active: false },
                                            { time: "11:00", active: true },
                                            { time: "11:30", active: false },
                                            { time: "12:00", active: false },
                                            { time: "04:00", active: false },
                                            { time: "04:30", active: false },
                                        ].map((slot) => (
                                            <div
                                                key={slot.time}
                                                className={`rounded-xl border px-2 py-2 text-center font-semibold ${
                                                    slot.active
                                                        ? "border-rose-200 bg-rose-50 text-rose-600"
                                                        : "border-emerald-200 bg-emerald-50 text-emerald-700"
                                                }`}
                                            >
                                                {slot.time}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md">Save Appointment Schedule</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* WHY DENTAL CLINIC CHOOSE US SECTION */}
    <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Left column - Content */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image src="/dentist-service.jpg" alt="dentist services available" className="h-full w-full object-cover" width={500} height={500} />
                </div>
                {/* Right column - Interactive Demo */}
                <div className="relative space-y-3">
                    <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-indigo-500" />
                        Day-to-Day Use
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-neutral-900">Fits Smoothly, Feels Invisible, Acts as Your Team</h2>
                    <p>Truly, the strength of the best appointment software is its ability to run the clinic smoothly with minimal effort or to support your routine Practice automatically.</p>
                    <div className="mt-6 space-y-3">
                        {[
                        "Patient Booking Online, Any Time (Anytime booking Via link)",
                        "Instant Notification",
                        "Reminders Automation",
                        "Easy To Manage Details",
                        "Easy to Reschedule",
                        "The canceled slot frees up instantly",
                        ].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <span className="text-indigo-600">✓</span>
                            {item}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* DENTAL CLINIC SCHEDULING CHALLENGES SECTION */}
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
            <p>As patient demand grows, manual scheduling creates delays, front-desk strain, and inconsistent follow-up. A dedicated dentist booking system keeps every appointment organized — from the first request to the final follow-up.</p>
            <div className="space-y-3">
              {[
                "Delayed responses weaken trust; patients look to move on.",
                "Uneven appointment scheduling leads to idle slots and long wait times",
                "Chasing patients by phone or Email is not time-consuming, but also impossible every time.",
                "Booking requests via Email, phone, and walk-ins creates confusion across your team and a bad experience for patients.",
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
                <Image src="/dentist-realty.jpg" alt="Dental Clinic Appointment Schedule Interface" width={700} height={700} className="h-full w-full object-cover" />
                <div className="absolute left-2 top-2 rounded-md bg-indigo-600/90 px-2 py-1 text-xs uppercase tracking-widest text-white">Smart slots</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-b border-neutral-200 pb-3">
              <div className="font-semibold text-neutral-900">Dental Clinic Operations Board</div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Live Overview</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Checkup</div>
                <div className="mt-1 text-indigo-900">12 Slots · 7 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Cleaning</div>
                <div className="mt-1 text-indigo-900">8 Slots · 5 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Filling</div>
                <div className="mt-1 text-indigo-900">9 Slots · 6 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Extraction</div>
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
            <Link href={`${LOGIN_URL}`} target="_blank" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-white shadow-md transition hover:bg-indigo-700">Start your dental clinic booking setup</Link>
          </div>
        </div>
      </div>
    </section>

    {/* DENTAL CLINIC GROWTH ROADMAP SECTION */}
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
                            <div className="font-bold">0{i + 1}</div>
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
                    <Image src="/dentist-grow.jpg" alt="Dental Clinic Growth Roadmap" width={600} height={500} className="w-full h-full rounded-xl object-cover"/>
                </div>

                <div className="absolute right-0 -top-10 w-50 rounded-xl bg-white p-4 shadow-md animate-float">
                    <div className="text-sm uppercase text-neutral-400">Dental Clinic Growth</div>
                    <div className="font-bold text-neutral-900">30 days to grow your dental clinic</div>
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
                    <div className="text-sm uppercase text-neutral-500">New Appointment</div>
                    <div className="mt-1 font-bold text-neutral-900">Neha Patel · 11:30 AM</div>
                    <div className="text-neutral-600">Synced to dental clinic operations board</div>
                </div>
            </div>
        </div>
    </section>

    {/* FAQ SECTION */} 
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
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-neutral-900">Questions Dental Clinic Owners Ask Before Getting Started</h2>
                <p>GetSetTime is built for dental clinic owners who want to grow their business online. We answer the most common questions dental clinic owners have about our platform.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-4 space-y-3">
                        <svg className="h-8 w-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-semibold text-neutral-900">Smart Scheduling</p>
                        <p>Highlight Automation, Reminders, and Live Availability.</p>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-4 space-y-3">
                        <svg className="h-7 w-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>
                        <p className="font-semibold text-neutral-900">Build Trust</p>
                        <p>Reduce Friction with Short Supportive Answers and Better Clarity.</p>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-4 space-y-3">
                        <svg className="h-8 w-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-semibold text-neutral-900">Premium Feel</p>
                        <p>Matches Polished Hero and Feature Sections Better than a Plain List.</p>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-4 space-y-3">
                        <svg fill="#00a63e" className="h-8 w-8" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" stroke="#000000" strokeWidth="8.192"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"></path> <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283 C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z"></path> <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"></path> </g> </g> </g></svg>
                        <p className="font-semibold text-neutral-900">Easy Growth</p>
                        <p>Scale Bookings Smoothly with Structured Workflows and Clear Next Steps.</p>
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