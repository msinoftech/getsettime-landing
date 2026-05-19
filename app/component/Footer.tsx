"use client";
import { APP_NAME, BASE_URL, socialLinks, LOGIN_URL } from "@/lib/config";
import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

export default function Footer() {
  const usefulLinks = [
    { label: "Features", href: `/#features` },
    { label: "Support", href: `/#support` },
    { label: "Pricing", href: `/#pricing` },
    { label: "Blog", href: `${BASE_URL}/blog` },
  ];
  const solutionsLinks = [
    { label: "Doctor appointment Software", href: `${BASE_URL}/solutions/doctor-appointment-scheduling-app` },    
    { label: "Physiotherapy appointment Software", href: `${BASE_URL}/solutions/physiotherapist-appointment-booking-app` },
    { label: "Dentist appointment Software", href: `${BASE_URL}/solutions/dentist-appointment-scheduling-app` },
    { label: "Hair salon appointment Software", href: `${BASE_URL}/solutions/hair-salon-appointment-scheduling-app` },
  ];
  const resourcesLinks = [
    { label: "Contact Us", href: `${BASE_URL}/contact-us` },
    { label: "Privacy Policy", href: `${BASE_URL}/privacy-policy` },
    { label: "Terms of Conditions", href: `${BASE_URL}/terms-of-conditions` },
  ];
  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 via-white to-indigo-500/30">
      <div className="relative z-10">
        {/* Call-to-Action Section */}
        <div className="w-full bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-10">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                {/* left: Content */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    Smarter scheduling for modern businesses
                  </div> 
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white">
                  Ready for GetSetTime
                    <span className="block text-white/75">To Manage Your Appointments</span>
                  </h2>
                  <p className="text-white">Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more.</p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href={`${LOGIN_URL}`} target="_blank" className="rounded-xl bg-white px-4 py-2.5 text-sm text-indigo-600 transition">Get Started</Link>
                    {/* <Link href={`${BASE_URL}/contact-us`} className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white transition">Schedule Demo</Link> */}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3 text-white">
                    {['Online booking', 'Auto reminders', 'Team calendar'].map((item) => (
                      <span key={item}>✔ {item}</span>
                    ))}
                  </div>
                </div>
                {/* right: Image */}
                <div className="relative mx-auto w-full">
                  <div className="rounded-xl bg-white/14 p-3 backdrop-blur-xl">
                    <div className="rounded-xl bg-white p-4 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-neutral-900">Today’s bookings</div>
                          <div>Live preview</div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-600" />
                      </div>
                      <div className="mt-5 space-y-3">
                        {[
                          { time: '10:00 AM', title: 'Consultation' },
                          { time: '12:30 PM', title: '15 Minutes chat' },
                          { time: '03:00 PM', title: 'Follow-up Call' },
                        ].map((item) => (
                          <div key={item.time} className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3">
                            <div>
                              <div className="font-medium text-neutral-900">{item.title}</div>
                              <div>{item.time}</div>
                            </div>
                            <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Confirmed</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                        <div>Reminders sent</div>
                        <div className="text-2xl font-bold text-neutral-900">1,284</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-5 -bottom-6 rounded-xl bg-white px-4 py-3 shadow-xl animate-float">
                    <div>No-show reduction</div>
                    <div className="text-xl font-bold text-neutral-900">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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