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