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
        <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          
          <div className="relative overflow-hidden">
            <Image src={`/${post.coverImage}`} alt={post.title} width={500} height={400} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-4 py-2 text-sm bg-white/90 text-indigo-600 rounded-xl shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">{post.category}</span>
            </div>
          </div>
          
          <div className="p-6 space-y-3">
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300">{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src={`/${post.author.avatar}`} alt={post.author.name} fill className="object-cover"/>
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p>{post.author.role}</p>
                </div>
              </div>
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
            </div>
          </div>

          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500/30 transition-all duration-500 pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </div>
      </Link>
    </article>
  );
}