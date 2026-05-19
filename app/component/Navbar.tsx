"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect, useRef } from "react";
import { BASE_URL, socialLinks, LOGIN_URL, REGISTER_URL } from "@/lib/config";
import Logo from "./Logo";

function scrollToHashSection(hash: string) {
  if (typeof window === "undefined" || !hash) return;
  window.scrollTo({ top: 0, behavior: "instant" });
  requestAnimationFrame(() => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState<boolean>(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState<boolean>(false);
  const desktopSolutionsRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "";

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string | null) => {
      setOpen(false);
      if (!hash || !isHome) return;
      e.preventDefault();
      scrollToHashSection(hash);
      window.history.pushState(null, "", `/#${hash}`);
    },
    [isHome]
  );

  useEffect(() => {
    if (typeof window === "undefined" || !isHome) return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const id = ["features", "support", "pricing"].includes(hash) ? hash : null;
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      const t = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [isHome, pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:items-stretch justify-between h-16">
          <Logo />
          
          <nav className="hidden lg:flex items-stretch justify-between gap-8">
            <Link href="/#features" onClick={(e) => handleAnchorClick(e, "features")} className="text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#support" onClick={(e) => handleAnchorClick(e, "support")} className="text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#pricing" onClick={(e) => handleAnchorClick(e, "pricing")} className="text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div
              ref={desktopSolutionsRef}
              className="relative group flex items-center"
              onMouseEnter={() => setDesktopSolutionsOpen(true)}
              onMouseLeave={() => setDesktopSolutionsOpen(false)}
              onBlur={(e) => {
                if (!desktopSolutionsRef.current?.contains(e.relatedTarget as Node)) {
                  setDesktopSolutionsOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={desktopSolutionsOpen}
                className="text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative inline-flex items-center gap-1 cursor-pointer flex items-center h-full"
                onClick={() => setDesktopSolutionsOpen((v) => !v)}
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${desktopSolutionsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 transition-all duration-300 ${desktopSolutionsOpen ? "w-full" : "w-0"}`}></span>
              </button>
              <div className="absolute left-1/2 top-full w-[380px] -translate-x-1/2">
                <div className={`${desktopSolutionsOpen ? "block pointer-events-auto opacity-100 translate-y-0" : "hidden pointer-events-none opacity-0 translate-y-2"} transition-all duration-200 rounded-2xl bg-white/95 backdrop-blur border border-gray-200 shadow-[0_16px_40px_rgba(15,23,42,0.12)] p-3`}>
                  <div className="px-3 pb-2 mb-2 border-b border-gray-100">
                    <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Solutions</div>
                    <div className="text-sm text-neutral-400 mt-1">Explore industry-specific scheduling pages</div>
                  </div>
                  <Link href="/solutions/doctor-appointment-scheduling-app" className="flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    <span className="leading-5">Doctor Appointment Scheduling App</span>
                  </Link>
                  <Link href="/solutions/dentist-appointment-scheduling-app" className="flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    <span className="leading-5">Dentist Appointment Scheduling App</span>
                  </Link>
                  <Link href="/solutions/physiotherapist-appointment-booking-app" className="flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    <span className="leading-5">Physiotherapist Appointment Booking App</span>
                  </Link>
                  <Link href="/solutions/hair-salon-appointment-scheduling-app" className="flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700 transition-all">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    <span className="leading-5">Hair Salon Appointment Scheduling App</span>
                  </Link>
                </div>
              </div>
            </div>
            <Link href={`${BASE_URL}/blog`} onClick={(e) => handleAnchorClick(e, null)} className="text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center justify-between gap-4">
            <Link href={`${LOGIN_URL}`} target="_blank" className="text-sm text-indigo-600 cursor-pointer px-5 py-2.5 rounded-xl bg-indigo-500/10">Sign In</Link>
            <Link href={`${REGISTER_URL}`} target="_blank" className="rounded-xl bg-indigo-600 text-white text-sm px-5 py-2.5">Sign Up</Link>
          </div>

          <button aria-label="Toggle menu" className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-indigo-600 cursor-pointer bg-indigo-500/10 hover:bg-indigo-600 hover:text-white transition-colors" onClick={() => { setOpen((v) => !v); if (open) setMobileSolutionsOpen(false); }} type="button">
            <div className="relative w-6 h-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <>
          {/* Backdrop overlay */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden animate-fade-in" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }}/>
          
          {/* Mobile menu */}
          <div className="fixed h-full top-0 right-0 w-full max-w-sm lg:hidden z-50 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50 animate-slide-in-right">
            {/* Header with close button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50">
              <div className="flex items-center gap-3" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }}>
                <Logo />
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-xl text-neutral-600 hover:text-indigo-600 hover:bg-indigo-500/10 transition-all duration-300 group" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }} aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:rotate-90">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Menu content */}
            <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
              {/* Navigation items */}
              <nav className="px-6 py-6 space-y-2">
                <Link href="/#features" onClick={(e) => handleAnchorClick(e, "features")} className="group flex items-center gap-3 py-3.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 relative overflow-hidden" style={{ animationDelay: "0ms" }}>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-all duration-300">Features</span>
                  <svg className="ml-auto w-5 h-5 text-neutral-400 group-hover:text-indigo-600 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/#support" onClick={(e) => handleAnchorClick(e, "support")} className="group flex items-center gap-3 py-3.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 relative overflow-hidden" style={{ animationDelay: "50ms" }}>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-all duration-300">Support</span>
                  <svg className="ml-auto w-5 h-5 text-neutral-400 group-hover:text-indigo-600 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/#pricing" onClick={(e) => handleAnchorClick(e, "pricing")} className="group flex items-center gap-3 py-3.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 relative overflow-hidden" style={{ animationDelay: "100ms" }}>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-all duration-300">Pricing</span>
                  <svg className="ml-auto w-5 h-5 text-neutral-400 group-hover:text-indigo-600 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen((v) => !v)}
                  className="group flex items-center gap-3 py-3.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 relative overflow-hidden w-full"
                  style={{ animationDelay: "125ms" }}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-all duration-300">Solutions</span>
                  <svg className={`ml-auto w-5 h-5 text-neutral-400 group-hover:text-indigo-600 transition-all duration-300 ${mobileSolutionsOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {mobileSolutionsOpen && (
                  <div className="space-y-1">
                    <div className="mb-2 pb-2 border-b border-gray-200">
                      <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Solutions</div>
                      <div className="text-sm text-neutral-400 mt-1">Explore industry-specific scheduling pages</div>
                    </div>
                    <Link href="/solutions/doctor-appointment-scheduling-app" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }} className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all">Doctor Appointment Scheduling App</Link>
                    <Link href="/solutions/dentist-appointment-scheduling-app" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }} className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all">Dentist Appointment Scheduling App</Link>
                    <Link href="/solutions/physiotherapist-appointment-booking-app" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }} className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all">Physiotherapist Appointment Booking App</Link>
                    <Link href="/solutions/hair-salon-appointment-scheduling-app" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }} className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all">Hair Salon Appointment Scheduling App</Link>
                  </div>
                )}
                <Link href={`${BASE_URL}/blog`} onClick={(e) => handleAnchorClick(e, null)} className="group flex items-center gap-3 py-3.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 relative overflow-hidden" style={{ animationDelay: "150ms" }}>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-all duration-300">Blog</span>
                  <svg className="ml-auto w-5 h-5 text-neutral-400 group-hover:text-indigo-600 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </nav>

              {/* Divider */}
              <div className="px-6 py-2">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>

              {/* Social Links */}
              <div className="px-6 py-4">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Follow Us</div>
                <div className="flex items-center gap-4">
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
                <Link href={`${LOGIN_URL}`} target="_blank" className="flex items-center justify-center w-full px-5 py-2.5 rounded-xl text-sm text-indigo-600 bg-indigo-50" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }}>Sign In</Link>
                <Link href={`${REGISTER_URL}`} target="_blank"className="flex items-center justify-center w-full px-5 py-2.5 rounded-xl text-sm text-white bg-gradient-to-r from-indigo-600 to-blue-600" onClick={() => { setOpen(false); setMobileSolutionsOpen(false); }}>Sign up</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};