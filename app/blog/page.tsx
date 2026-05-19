import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import { blogPosts } from "@/lib/blog-data";
import { BlogList } from "../component/BlogList";
import { FaqSection } from "../component/FaqSection";

function BlogListSkeleton() {
  return (
    <div className="space-y-12">
      {/* Category Filter Skeleton */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-10 w-24 bg-neutral-200 rounded-xl animate-pulse" />
        ))}
      </div>
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md">
            <div className="h-52 bg-neutral-200 animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
              <div className="h-6 w-full bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: `Blog | ${APP_NAME} - Scheduling Tips, Best Practices & Industry Insights`,
  description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, product updates, and insights to help you manage appointments more efficiently.`,
  keywords: [ "appointment scheduling blog", "scheduling tips", "booking best practices", "calendar management", "business scheduling", "no-show reduction", "team scheduling", "healthcare scheduling"],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: `Blog | ${APP_NAME} - Scheduling Tips, Best Practices & Industry Insights`,
    description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, product updates, and insights to help you manage appointments more efficiently.`,
    url: `${BASE_URL}/blog`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} Blog - Scheduling Tips & Best Practices`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${BASE_URL}/blog`,
    creator: `${BASE_URL}`,
    title: `Blog | ${APP_NAME} - Scheduling Tips & Best Practices`,
    description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, and insights.`,
    images: `${BASE_URL}${contactInfo.logo}`,
  },
};

const faqItems = [
  {
    title: "Does GetSetTime offer online appointment booking for doctors?",
    content: "Yes, GetSetTime offers online appointment booking for doctors, wellness instructors, gym trainers, and other healthcare professionals.",
  },
]

export default function BlogPage() {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BASE_URL}/blog/#blog`,
        "mainEntityOfPage": `${BASE_URL}/blog`,
        "name": `Blog | ${APP_NAME}`,
        "description": `Expert scheduling tips, industry best practices, product updates, and insights from ${APP_NAME}`,
        "publisher": {
          "@type": "Organization",
          "name": `${APP_NAME}`,
          "url": `${BASE_URL}/blog`,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}${contactInfo.logo}`
          }
        },
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/#BlogPage`,
        "url": `${BASE_URL}/blog`,
        "name": `Blog | ${APP_NAME}`,
        "isPartOf": {
          "@id": `${BASE_URL}/blog/#WebSite`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.logo}`
        },
        "datePublished": "2026-02-10",
        "dateModified": `${new Date().toISOString().split('T')[0]}`,
        "description": `Explore the ${APP_NAME} blog for expert scheduling tips and best practices.`,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": `${BASE_URL}/blog`
            }
          ]
        }
      },
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/blog/#CollectionPage`,
        "name": `Blog | ${APP_NAME}`,
        "description": "Collection of articles about appointment scheduling and business management",
        "url": `${BASE_URL}/blog`,
        "numberOfItems": `${blogPosts.length}`
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#FAQPage`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content
          }
        }))
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <Script id="blog-page-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}/>

      <section className="relative py-12">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Articles
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900">
              Insights & Resources for{" "}
              <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">Smarter Scheduling</span>
            </h1>
            <p>Discover expert tips, industry best practices, and the latest insights to help you streamline your appointment management and grow your business.</p>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="relative pb-12">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<BlogListSkeleton />}>
            <BlogList posts={blogPosts} postsPerPage={6} />
          </Suspense>
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
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-neutral-900">Answers that feel as smooth as your booking flow.</h2>
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