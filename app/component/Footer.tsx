"use client";
import { APP_NAME, BASE_URL, socialLinks, LOGIN_URL } from "@/lib/config";
import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

export default function Footer() {
  
  const usefulLinks = [
    { label: "Features", href: `/#features` },
    { label: "Solutions", href: `/#support` },
    { label: "Pricing", href: `/#pricing` },
    { label: "Blog", href: `${BASE_URL}/blog` },
  ];

  const solutionsLinks = [
    { label: "Healthcare", href: `${BASE_URL}/contact-us` },
    { label: "Beauty & Wellness", href: `${BASE_URL}/contact-us` },
    { label: "Education", href: `${BASE_URL}/contact-us` },
  ];

  const resourcesLinks = [
    { label: "Privacy Policy", href: `${BASE_URL}/privacy-policy` },
    { label: "Terms of Conditions", href: `${BASE_URL}/terms-of-conditions` },
    // { label: "Help Center", href: `${BASE_URL}/help-center` },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 via-white to-indigo-500/30">

      <div className="relative z-10">
        {/* Call-to-Action Section */}
        <div className="w-full bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#4b3cff] via-[#5a46ff] to-[#6d5cff] px-6 py-10 shadow-[0_30px_80px_rgba(79,63,255,0.22)] sm:px-8 lg:px-12 lg:py-12">
              <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-200/10 blur-3xl" />
              </div>

              <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                {/* left: Content */}
                <div className="space-y-3">

                  <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    Smarter scheduling for modern businesses
                  </div> 

                  <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white">
                  Ready for GetSetTime
                    <span className="block text-white/75">To Manage Your Appointments</span>
                  </h2>

                  <p className="text-white">Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more.</p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href={`${LOGIN_URL}`} target="_blank" className="rounded-xl bg-white px-5 py-3 text-sm text-indigo-600 transition">Start Free</Link>
                    <Link href={`${BASE_URL}/contact-us`} className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition">Schedule Demo</Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-white">
                    {['Online booking', 'Auto reminders', 'Team calendar'].map((item) => (
                      <span key={item} className="rounded-xl border border-white/15 bg-white/10 px-4 py-2">{item}</span>
                    ))}
                  </div>
                </div>

                {/* right: Image */}
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="rounded-[28px] bg-white/14 p-3 backdrop-blur-xl">
                    <div className="rounded-[24px] bg-white p-5 shadow-[0_20px_50px_rgba(55,40,180,0.16)]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-neutral-900">Today’s bookings</p>
                          <p>Live preview</p>
                        </div>
                        <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      </div>

                      <div className="mt-5 space-y-3">
                        {[
                          { time: '10:00 AM', title: 'Consultation' },
                          { time: '12:30 PM', title: '15 Minutes chat' },
                          { time: '03:00 PM', title: 'Follow-up Call' },
                        ].map((item) => (
                          <div key={item.time} className="flex items-center justify-between rounded-xl bg-neutral-50 px-4 py-3">
                            <div>
                              <p className="font-medium text-neutral-900">{item.title}</p>
                              <p>{item.time}</p>
                            </div>
                            <span className="rounded-xl bg-[#f1efff] px-3 py-1 text-sm font-medium text-[#4b3cff]">Confirmed</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl bg-[#f6f4ff] p-4">
                        <p>Reminders sent</p>
                        <p className="text-2xl font-bold text-neutral-900">1,284</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -left-5 -bottom-6 rounded-xl bg-white px-4 py-3 shadow-xl animate-float">
                    <p>No-show reduction</p>
                    <p className="text-lg font-bold text-neutral-900">-32%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                      className="group flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-100 focus:bg-indigo-200 hover:text-indigo-600 transition-all duration-200 outline-none"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                  ))}
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <div>
                <div className="font-semibold text-neutral-900 mb-4">Quick Links</div>
                <ul className="space-y-2">
                  {usefulLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 transition-colors duration-200">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div>
                <div className="font-semibold text-neutral-900 mb-4">Solutions</div>
                <ul className="space-y-2">
                  {solutionsLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 transition-colors duration-200">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div>
                <div className="font-semibold text-neutral-900 mb-4">Resources</div>
                <ul className="space-y-2">
                  {resourcesLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 transition-colors duration-200">{link.label}</Link>
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
                <h3 className="font-semibold text-neutral-900 mb-2">Stay Updated</h3>
                <p>Get the latest updates, tips, and scheduling best practices delivered to your inbox.</p>
            </div>
              <Newsletter className="flex flex-col sm:flex-row gap-3" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-4 border-t border-neutral-200/50">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};