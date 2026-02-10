"use client";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import { blogCategories, getRecentPosts } from "@/lib/blog-data";
import Newsletter from "./Newsletter";
import { BASE_URL } from "@/lib/config";

interface BlogSidebarProps {
  currentPostSlug?: string;
  relatedPosts?: BlogPost[];
}

export function BlogSidebar({ currentPostSlug, relatedPosts = [] }: BlogSidebarProps) {
  const recentPosts = getRecentPosts(5).filter(post => post.slug !== currentPostSlug);

  return (
    <aside className="space-y-8">

       {/* Recent Posts Widget */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recent Posts
          </h3>
          <div className="space-y-4">
            {recentPosts.slice(0, 4).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}/`}
                className="group flex gap-4 p-2 -mx-2 rounded-xl hover:bg-neutral-50 transition-all duration-200"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={`/${post.coverImage}`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-neutral-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      {/* Categories Widget */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Categories
        </h3>
        <ul className="space-y-2">
          {blogCategories.filter(cat => cat !== "All").map((category) => (
            <li key={category}>
              <Link
                href={`/blog/?category=${encodeURIComponent(category)}`}
                className="group flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-all duration-200"
              >
                <span className="text-neutral-700 group-hover:text-indigo-600 transition-colors">
                  {category}
                </span>
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Posts Widget */}
      {relatedPosts.length > 0 && (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}/`}
                className="group block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full mb-2">
                  {post.category}
                </span>
                <h4 className="text-sm font-semibold text-neutral-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Widget */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl p-6 shadow-lg text-white">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm">Get the latest updates, tips, and scheduling best practices delivered to your inbox.</p>
        </div>
        <Newsletter className="flex flex-col gap-3 mt-4" />
        <p className="text-xs text-white/60 mt-3">No spam, unsubscribe anytime.</p>
      </div>

      {/* CTA Widget */}
      <div className="bg-indigo-900 rounded-2xl p-6 shadow-lg text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white rounded-full" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white rounded-full" />
        </div>
        
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">Ready to Get Started?</h3>
          <p className="text-white text-sm mb-4">Transform your scheduling with GetSetTime. Start your free trial today.</p>
          <Link href={`${BASE_URL}contact-us`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200">
            Start Free Trial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
}