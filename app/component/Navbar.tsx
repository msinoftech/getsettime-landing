"use client";
import Link from "next/link";
import { useState } from "react";
import { BASE_URL, socialLinks } from "@/lib/config";
import Logo from "./Logo";

const primaryItems = [
  { label: "Features", href: `${BASE_URL}#features`, isAnchor: true },
  { label: "Support", href: `${BASE_URL}#support`, isAnchor: true },
  { label: "Pricing", href: `${BASE_URL}#pricing`, isAnchor: true },
  { label: "Blog", href: `${BASE_URL}blog`, isAnchor: false },
];

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const hash = href.split("#")[1];
  if (!hash) return;
  const el = document.getElementById(hash);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {primaryItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-indigo-600 transition-all duration-200 relative group" onClick={item.isAnchor ? (e) => handleAnchorClick(e, item.href) : undefined}>{item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href={`${BASE_URL}`} className="flex-1 text-sm text-indigo-600 cursor-pointer transition-colors px-6 py-2.5 rounded-xl bg-indigo-500/10">Sign In</Link>
            <Link href={`${BASE_URL}contact-us`} className="inline-flex items-center rounded-xl bg-indigo-600 text-white text-sm px-6 py-2.5 shadow-md hover:scale-105 transition-all duration-300">Get Started Free</Link>
          </div>

          <button aria-label="Toggle menu" className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-indigo-600 cursor-pointer bg-indigo-500/10 hover:bg-indigo-600 hover:text-white transition-colors" onClick={() => setOpen((v) => !v)} type="button">
            <div className="relative w-6 h-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <>
          {/* Backdrop overlay */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden animate-fade-in" onClick={() => setOpen(false)}/>
          
          {/* Mobile menu */}
          <div className="fixed h-full top-0 right-0 w-full max-w-sm lg:hidden z-50 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50 animate-slide-in-right">
            {/* Header with close button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50">
              <div className="flex items-center gap-3">
                <Logo />
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-xl text-neutral-600 hover:text-indigo-600 hover:bg-indigo-500/10 transition-all duration-300 group" onClick={() => setOpen(false)} aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-90">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Menu content */}
            <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
              {/* Navigation items */}
              <nav className="px-6 py-6 space-y-2">
                {primaryItems.map((item, index) => (
                  <Link key={item.href} href={item.href} className="group flex items-center gap-3 py-3.5 rounded-xl text-base font-medium text-neutral-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 relative overflow-hidden" onClick={(e) => { if (item.isAnchor) handleAnchorClick(e, item.href); setOpen(false); }} style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                    <span className="relative z-10 group-hover:translate-x-2 transition-all duration-300">{item.label}</span>
                    <svg className="ml-auto w-5 h-5 text-neutral-400 group-hover:text-indigo-600 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="px-6 py-2">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>

              {/* Social Links */}
              <div className="px-6 py-4">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel} className="text-gray-700 hover:text-indigo-800" dangerouslySetInnerHTML={{ __html: item.icon }}/>
                ))}
                </div>
              </div>

              {/* Divider */}
              <div className="px-6 py-2">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>

              {/* Action buttons */}
              <div className="px-6 py-6 space-y-3 mt-auto">
                <Link href={`${BASE_URL}`} className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" onClick={() => setOpen(false)}>Sign In</Link>
                <Link href={`${BASE_URL}contact-us`} className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" onClick={() => setOpen(false)}>Get Started Free
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};