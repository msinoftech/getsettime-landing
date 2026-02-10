"use client";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BlogCard } from "./BlogCard";
import type { BlogPost } from "@/lib/blog-data";
import { blogCategories, getPostCategories } from "@/lib/blog-data";

interface BlogListProps {
  posts: BlogPost[];
  postsPerPage?: number;
}

export function BlogList({ posts, postsPerPage = 6 }: BlogListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get category from URL params, default to "All"
  const categoryFromUrl = searchParams.get("category") || "All";
  
  const [visibleCount, setVisibleCount] = useState(postsPerPage);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [isLoading, setIsLoading] = useState(false);

  // Sync category state with URL when it changes
  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
    setVisibleCount(postsPerPage); // Reset visible count when URL changes
  }, [categoryFromUrl, postsPerPage]);

  // Filter posts by category or tag (excluding featured if shown separately)
  const filteredPosts = useMemo(() => {
    let filtered = posts;
    
    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post =>
        getPostCategories(post).includes(selectedCategory)
      );
    }
    
    return filtered;
  }, [posts, selectedCategory]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;
  const remainingPosts = filteredPosts.length - visibleCount;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => prev + postsPerPage);
      setIsLoading(false);
    }, 500);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(postsPerPage); // Reset visible count when changing category
    
    // Update URL with the selected category
    if (category === "All") {
      router.push("/blog", { scroll: false });
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  return (
    <div className="space-y-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4">
          {/* Category Filter */}
            <>
              <div className="flex items-center justify-start w-full">
                <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} className="w-full sm:max-w-xs px-4 py-3 rounded-xl text-sm font-medium bg-white text-neutral-700 border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 appearance-none cursor-pointer">
                  {blogCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </>

          {/* Results Count */}
          <div className="flex items-center justify-end w-full">
            <p className="text-sm text-neutral-600">
              Showing <span className="font-semibold text-neutral-900">{visiblePosts.length}</span> of{" "}
              <span className="font-semibold text-neutral-900">{filteredPosts.length}</span> articles
              {selectedCategory !== "All" && (
                <span> in <span className="text-indigo-600 font-medium">{selectedCategory}</span></span>
              )}
            </p>
          </div>

      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <div key={post.id} className="animate-slide-in-up" style={{ animationDelay: `${(index % postsPerPage) * 100}ms` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">No articles found</h3>
          <p className="text-neutral-600">Try selecting a different category</p>
        </div>
      )}

      {/* Load More Button */}
      {hasMorePosts && (
        <div className="flex justify-center pt-8">
          <button onClick={handleLoadMore} disabled={isLoading} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0">
            {isLoading ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>Load More</span>
                <span className="px-2.5 py-1 text-xs bg-white/20 rounded-full">{remainingPosts} remaining</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </>
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
          </button>
        </div>
      )}

      {/* End of List Message */}
      {!hasMorePosts && filteredPosts.length > 0 && (
        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm text-neutral-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>You&apos;ve reached the end of the list</span>
          </div>
        </div>
      )}
    </div>
  );
}