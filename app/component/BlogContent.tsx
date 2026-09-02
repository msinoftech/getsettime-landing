"use client";

import { useMemo } from "react";
import { applyRegionalPricesToBlogHtml } from "@/lib/pricing-data";
import { useRegionalPricing } from "./useRegionalPricing";

type BlogContentProps = {
  html: string;
  className?: string;
};

export function BlogContent({ html, className = "blog-content space-y-4" }: BlogContentProps) {
  const region = useRegionalPricing();

  const content = useMemo(
    () => applyRegionalPricesToBlogHtml(html, region),
    [html, region]
  );

  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}
