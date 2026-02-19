import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { APP_NAME, BASE_URL } from "@/lib/config";
import { blogPosts } from "@/lib/blog-data";
import { BlogList } from "../component/BlogList";
import { FaqSection } from "../component/FaqSection";

// Loading skeleton for blog list
function BlogListSkeleton() {
  return (
    <div className="devasd space-y-12">
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
  keywords: [
    "appointment scheduling blog",
    "scheduling tips",
    "booking best practices",
    "calendar management",
    "business scheduling",
    "no-show reduction",
    "team scheduling",
    "healthcare scheduling",
  ],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: `Blog | ${APP_NAME} - Scheduling Tips & Best Practices`,
    description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, and insights to help you manage appointments more efficiently.`,
    url: `${BASE_URL}/blog`,
    type: "website",
    siteName: APP_NAME,
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/social-hero.jpg`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} Blog - Scheduling Tips & Best Practices`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${BASE_URL}/blog`,
    creator: BASE_URL,
    title: `Blog | ${APP_NAME} - Scheduling Tips & Best Practices`,
    description: `Explore the ${APP_NAME} blog for expert scheduling tips, industry best practices, and insights.`,
    images: `${BASE_URL}/twitter-card.jpg`,
  },
};

export default function BlogPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${BASE_URL}/blog#blog`,
        "mainEntityOfPage": `${BASE_URL}/blog`,
        "name": `${APP_NAME} Blog`,
        "description": `Expert scheduling tips, industry best practices, and insights from ${APP_NAME}`,
        "publisher": {
          "@type": "Organization",
          "name": APP_NAME,
          "url": `${BASE_URL}/blog`,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/getsettime-logo.svg`
          }
        },
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/#webpage`,
        "url": `${BASE_URL}/blog`,
        "name": `Blog | ${APP_NAME}`,
        "isPartOf": {
          "@id": `${BASE_URL}/blog/#website`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/blog/social-hero.jpg`
        },
        "datePublished": "2026-02-10",
        "dateModified": new Date().toISOString().split('T')[0],
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
        "@id": `${BASE_URL}/blog/#collectionpage`,
        "name": `${APP_NAME} Blog Articles`,
        "description": "Collection of articles about appointment scheduling and business management",
        "url": `${BASE_URL}/blog`,
        "numberOfItems": blogPosts.length
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="blog-list-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
      />

      {/* Hero Section */}
      <section className="relative py-12">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Insights & Resources for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Smarter Scheduling</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">Discover expert tips, industry best practices, and the latest insights to help you streamline your appointment management and grow your business.</p>
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

      <section className="relative pb-12">
        <FaqSection
          items={[
            {
              title: "Does GetSetTime offer online appointment booking for doctors",
              content: "Yes, GetSetTime offers online appointment booking for doctors, wellness instructors, gym trainers, and other healthcare professionals.",
            },
          ]}
        />
      </section>
    </>
  );
}