import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APP_NAME, BASE_URL } from "@/lib/config";
import { blogPosts, getBlogBySlug, getRelatedPosts, getPrevNextPosts, getPostCategories } from "@/lib/blog-data";
import { BlogSidebar } from "@/app/component/BlogSidebar";
import { FaqSection } from "@/app/component/FaqSection";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | ${APP_NAME} Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      siteName: APP_NAME,
      locale: "en_US",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      section: post.category,
      images: [
        {
          url: `${BASE_URL}/${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: BASE_URL,
      creator: BASE_URL,
      title: post.title,
      description: post.excerpt,
      images: `${BASE_URL}/${post.coverImage}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const { prev: prevPost, next: nextPost } = getPrevNextPosts(slug);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BASE_URL}/blog/${post.slug}/#article`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${BASE_URL}/blog/${post.slug}/#articlepage`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/${post.coverImage}`,
          "width": 1200,
          "height": 630
        },
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "author": {
          "@type": "Person",
          "name": post.author.name,
          "jobTitle": post.author.role,
          "image": `${BASE_URL}/${post.author.avatar}`
        },
        "publisher": {
          "@type": "Organization",
          "name": APP_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/getsettime-logo.svg`
          }
        },
        "articleSection": post.category,
        "keywords": post.keywords,
        "wordCount": post.content.split(/\s+/).length,
        "inLanguage": "en-US"
      },
      {
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${BASE_URL}/blog/${post.slug}`
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${post.slug}/#articlepage`,
        "url": `${BASE_URL}/blog/${post.slug}`,
        "name": post.title,
        "isPartOf": {
          "@id": `${BASE_URL}/blog/#article`  
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/${post.coverImage}`
        },
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "description": post.excerpt
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="blog-detail-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
      />

      {/* Hero Section - Header Top Center */}
      <section className="relative pt-12 pb-8">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Category & Read Time - Centered */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {getPostCategories(post).map((category) => (
              <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`} className="px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full hover:shadow-lg transition-shadow">{category}</Link>
            ))}
          </div>

          {/* Title - Centered */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 text-center mb-8 leading-tight">{post.title}</h1>

          {/* Featured Image - Centered */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
            <Image src={`/${post.coverImage}`} alt={post.title} width={1000} height={500} className="object-contain" priority />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12 lg:py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Article Content */}
            <article className="lg:col-span-8">
              {/* Article Content */}
              <div className="bg-white rounded-2xl shadow-md p-8 lg:p-10">
                <p className="text-xl text-neutral-700 leading-relaxed mb-8 pb-8 border-b border-neutral-100">{post.excerpt}</p>
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              </div>

              {/* Author Bio Card */}
              <div className="mt-10 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-md flex-shrink-0">
                    <Image src={`/${post.author.avatar}`} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">Written by</p>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{post.author.name}</h3>
                    <p className="text-neutral-600 mb-3">{post.author.role} at {APP_NAME}</p>
                  </div>
                </div>
              </div>

              {/* Prev/Next Navigation */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Previous Post */}
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors duration-200">
                      <svg className="w-5 h-5 text-neutral-500 group-hover:text-indigo-600 transition-colors group-hover:-translate-x-0.5 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Previous</p>
                      <p className="font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors line-clamp-2 text-sm">
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <Link
                    href="/blog"
                    className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors duration-200">
                      <svg className="w-5 h-5 text-neutral-500 group-hover:text-indigo-600 transition-colors group-hover:-translate-x-0.5 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Back to</p>
                      <p className="font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors text-sm">
                        All Articles
                      </p>
                    </div>
                  </Link>
                )}

                {/* Next Post */}
                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex items-center gap-4 p-5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white"
                  >
                    <div className="flex-1 min-w-0 text-right">
                      <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">Next</p>
                      <p className="font-semibold text-white line-clamp-2 text-sm">
                        {nextPost.title}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ) : (
                  <Link
                    href="/blog"
                    className="group flex items-center gap-4 p-5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white"
                  >
                    <div className="flex-1 min-w-0 text-right">
                      <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">Explore</p>
                      <p className="font-semibold text-white text-sm">
                        More Articles
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                )}
              </div>
              
              {/* FAQ Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
                {post.faq.map((faq) => (
                  <FaqSection key={faq.question} title={faq.question} content={faq.answer}/>
                ))}
              </div>
              
            </article>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <BlogSidebar currentPostSlug={post.slug} relatedPosts={relatedPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
