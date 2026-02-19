"use client";
import { APP_NAME, BASE_URL, socialLinks } from "@/lib/config";
import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

export default function Footer() {
  
  const usefulLinks = [
    { label: "Features", href: `/#features` },
    { label: "Solutions", href: `/#support` },
    { label: "Pricing", href: `/#pricing` },
  ];

  const solutionsLinks = [
    { label: "Healthcare", href: `${BASE_URL}/contact-us` },
    { label: "Beauty & Wellness", href: `${BASE_URL}/contact-us` },
    { label: "Education", href: `${BASE_URL}/contact-us` },
  ];

  const resourcesLinks = [
    { label: "Blog", href: `${BASE_URL}/blog` },
    { label: "Privacy Policy", href: `${BASE_URL}/privacy-policy` },
    { label: "Terms of Conditions", href: `${BASE_URL}/terms-of-conditions` },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 via-white to-indigo-500/30">

      <div className="relative z-10">
        {/* Call-to-Action Section */}
        <div className="border-b border-neutral-200/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-indigo-600 rounded-3xl p-8 lg:p-12 text-center shadow-2xl">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready for GetSetTime To Manage Your Appointments</h2>
                <p className="text-lg text-white/90 mb-8">Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders, payments, and more.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`${BASE_URL}/contact-us`} className="bg-white text-indigo-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    Start a Free Trial
                  </Link>
                  <Link href={`${BASE_URL}/contact-us`} className="bg-white/10 text-white hover:bg-white/90 hover:text-indigo-600 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Logo />
              </div>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">An advanced tool trusted by 5000+ clients globally to run daily complex scheduling tasks effortlessly.</p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                      className="group flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-100 focus:bg-indigo-200 hover:text-indigo-600 transition-all duration-200 outline-none"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                  ))}
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 mb-4">Quick Links</div>
                <ul className="space-y-2">
                  {usefulLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-label={link.label} className="text-sm text-neutral-600 hover:text-indigo-600 transition-colors duration-200">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 mb-4">Solutions</div>
                <ul className="space-y-2">
                  {solutionsLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} aria-label={link.label} className="text-sm text-neutral-600 hover:text-indigo-600 transition-colors duration-200">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 mb-4">Resources</div>
                <ul className="space-y-2">
                  {resourcesLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-label={link.label} className="text-sm text-neutral-600 hover:text-indigo-600 transition-colors duration-200">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Newsletter Signup */}
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-neutral-600">Get the latest updates, tips, and scheduling best practices delivered to your inbox.</p>
            </div>
              <Newsletter className="flex flex-col sm:flex-row gap-3" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-4 border-t border-neutral-200/50">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-sm text-neutral-600">© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};