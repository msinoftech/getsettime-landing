import type { MetadataRoute } from "next";
import { BASE_URL } from "../lib/config";
import { blogPosts } from "../lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {

  const routes: MetadataRoute.Sitemap = [
    // Static routes
    {
      url: `${BASE_URL}`,
      priority: 1,
    },
    {
      url: `${BASE_URL}blog/`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}contact-us/`,
      priority: 0.7,
    },
    // Dynamic blog detail routes
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}blog/${post.slug}/`,
      priority: 0.7,
    })),
  ];

  return routes;
}

