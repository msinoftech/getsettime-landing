"use client";

import React, { useState } from "react";

export interface FaqItem {
  title: string;
  content?: string;
}

interface FaqSectionProps {
  /** List of FAQ items. Only one item is open at a time (accordion). */
  items?: FaqItem[];
  /** Optional section id for anchor links */
  sectionId?: string;
}

export const FaqSection = ({ items = [], sectionId = "faq" }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const safeItems = Array.isArray(items) ? items : [];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (safeItems.length === 0) return null;

  return (
    <section id={sectionId} className="mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-3">
          {safeItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl shadow-md bg-white transition-all duration-200 overflow-hidden border border-indigo-50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors rounded-t-2xl ${
                    isOpen
                      ? "bg-indigo-50 text-indigo-900 ring-1 ring-indigo-200/60"
                      : "hover:bg-indigo-50/80"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className={`font-semibold pr-2 ${isOpen ? "text-indigo-900" : "text-gray-900"}`}>
                    {item.title}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                      isOpen
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-5 pt-4 text-gray-600 text-md prose border-t border-indigo-50">
                      {item.content && (
                        <div
                          className="text-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
