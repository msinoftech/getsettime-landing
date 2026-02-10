"use client";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div className="relative overflow-hidden">
            <Image src={`/${post.coverImage}`} alt={post.title} width={500} height={400} className="transition-transform duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1.5 text-xs font-semibold bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">{post.category}</span>
            </div>
            {post.featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-md flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </span>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">{post.title}</h3>
            <p className="text-sm text-neutral-600 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                  <Image src={`/${post.author.avatar}`} alt={post.author.name} fill className="object-cover"/>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{post.author.name}</p>
                  <p className="text-xs text-neutral-500">{post.author.role}</p>
                </div>
              </div>
              <time className="text-xs text-neutral-500" dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-500/30 transition-all duration-500 pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </article>
  );
}