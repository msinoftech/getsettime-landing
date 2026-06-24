"use client";
import { APP_NAME, BASE_URL, socialLinks } from "@/lib/config";
import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

export default function Footer() {
  const usefulLinks = [
    { label: "Features", href: `/features` },
    { label: "Support", href: `/contact-us` },
    { label: "Pricing", href: `/pricing` },
    { label: "Blog", href: `${BASE_URL}/blog` },
  ];
  const solutionsLinks = [
    { label: "Doctor appointment Software", href: `${BASE_URL}/solutions/doctor-appointment-scheduling-software` },    
    { label: "Physiotherapy appointment Software", href: `${BASE_URL}/solutions/physiotherapist-appointment-booking-software` },
    { label: "Dentist appointment Software", href: `${BASE_URL}/solutions/dentist-appointment-scheduling-software` },
    { label: "Salon appointment Software", href: `${BASE_URL}/solutions/salon-appointment-scheduling-software` },
  ];
  const resourcesLinks = [
    { label: "Contact Us", href: `${BASE_URL}/contact-us` },
    { label: "Help Center", href: `${BASE_URL}/help-center` },
    { label: "Privacy Policy", href: `${BASE_URL}/privacy-policy` },
    { label: "Terms of Conditions", href: `${BASE_URL}/terms-of-conditions` },
    // { label: "App Functionality", href: `${BASE_URL}/app-functionality-demo-video` },
  ];
  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 via-white to-indigo-500/30">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-3">
              <div><Logo /></div>
              <p>An advanced tool trusted by 5000+ clients globally to run daily complex scheduling tasks effortlessly.</p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                      className="group flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 hover:bg-indigo-100 focus:bg-indigo-200 hover:text-indigo-600 transition-all duration-200 outline-none"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                  ))}
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <div className="font-semibold text-neutral-900 mb-4">Quick Links</div>
              <ul className="space-y-2">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <div className="font-semibold text-neutral-900 mb-4">Solutions</div>
              <ul className="space-y-2">
                {solutionsLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div className="font-semibold text-neutral-900 mb-4">Resources</div>
              <ul className="space-y-2">
                {resourcesLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                  <div className="font-semibold text-neutral-900">Stay Updated</div>
                  <div>Get the latest updates, tips, and scheduling best practices delivered to your inbox.</div>
              </div>
              <Newsletter className="flex flex-col sm:flex-row gap-3" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-4 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>© 2026 {APP_NAME}. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};