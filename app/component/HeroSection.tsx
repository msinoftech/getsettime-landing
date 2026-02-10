"use client";
import Image from "next/image";
import { BASE_URL } from "@/lib/config";
import Logo from "./Logo";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated shapes with unique gradients */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">

            {/* Hero title */}
            <div className="space-y-6 animate-slide-in-up">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Your Next-Gen</span>{" "}Appointment Booking System
              </h1>

              <p className="text-neutral-600">GetSetTime is the smart app for scheduling appointments trusted by 5,000+ doctors, salon owners, and wellness professionals. Simple to set up in minutes. Smart enough to run itself.</p>
            </div>

            {/* Hero buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-up animation-delay-200">
              <Link href={`${BASE_URL}`} className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-md px-6 py-3 rounded-2xl flex items-center justify-center gap-3">
                <svg width="26" height="28" viewBox="0 0 48 48" className="inline-block rounded-sm bg-white p-1" aria-hidden="true" focusable="false">
                  <g>
                    <path fill="#4285F4" d="M43.6 20.5H42V20.4H24v7.2h11.2C33.9 32.1 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.9 2.5l5.8-5.8C33.5 7.1 28.9 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.4-4z"/>
                    <path fill="#34A853" d="M6.3 14.1l5.9 4.3C14.2 15.1 18.7 12 24 12c2.6 0 5 .9 6.9 2.5l5.8-5.8C33.5 7.1 28.9 5 24 5c-7.1 0-13.1 4.1-16.1 10.1z"/>
                    <path fill="#FBBC05" d="M24 44c5.3 0 10.1-1.8 13.8-4.9l-6.4-5.2C29.5 35.7 26.9 36.7 24 36.7c-5.4 0-9.9-3.6-11.5-8.5l-6.1 4.7C7 39.1 14.9 44 24 44z"/>
                    <path fill="#EA4335" d="M43.6 20.5H42V20.4H24v7.2h11.2c-1.1 3.1-3.6 5.7-6.6 7.1l6.4 5.2C39.9 37.1 44 31.9 44 25c0-1.3-.1-2.7-.4-4z"/>
                  </g>
                </svg>
                Sign up with Google
              </Link>
              <Link href={`${BASE_URL}contact-us`} className="bg-gray-900 text-white text-md px-6 py-3 rounded-2xl">Start Free Trial</Link>
            </div>

            {/* Hero stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left animate-slide-in-up animation-delay-400">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">50K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">2M+</div>
                <div className="text-sm text-gray-500">Appointments</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right column - Interactive Demo */}
          <div className="relative w-full">
            <div className="relative mx-auto w-full max-w-full animate-fade-in-scale">
              <div className="relative w-full min-h-auto bg-white/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                {/* Booking Admin Dashboard Header */}
                <div className="relative z-10 flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 shadow-sm">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 animate-ping"></div>
                    </div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-600"></div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600 animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-neutral-700">LIVE</span>
                  </div>
                </div>

                {/* Booking Admin Dashboard Grid */}
                <div className="relative z-10 grid grid-cols-12 gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 pb-2 sm:pb-3 md:pb-4">
                  {/* Stats Header */}
                  <div className="col-span-12 bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 flex flex-wrap justify-between gap-2 sm:gap-0 animate-glass-slide-in mb-2 sm:mb-0">
                    <div className="relative">
                      <Logo />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs">
                      <div className="text-center">
                        <div className="text-sm sm:text-base md:text-lg font-bold text-cyan-600">24</div>
                        <div className="text-neutral-600 whitespace-nowrap">Today</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm sm:text-base md:text-lg font-bold text-indigo-600">7</div>
                        <div className="text-neutral-600 whitespace-nowrap">Pending</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600">92%</div>
                        <div className="text-neutral-600 whitespace-nowrap">Filled</div>
                      </div>
                    </div>
                  </div>

                  {/* Today's Bookings - left column */}
                  <div className="col-span-12 sm:col-span-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 animate-glass-fade-in">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-800">Today&apos;s Bookings</h4>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-bounce [animation-delay:0ms]"></div>
                        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-bounce [animation-delay:150ms]"></div>
                        <div className="w-1 h-1 rounded-full bg-neutral-400 animate-bounce [animation-delay:300ms]"></div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      {[
                        { time: "09", client: "Neha Gupta", service: "Consultation", status: "confirmed" },
                        { time: "11", client: "Arjun Patel", service: "Client Requirement Call", status: "confirmed" },
                      ].map((booking, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-sm
                            ${booking.status === 'confirmed'
                              ? 'bg-white/25 shadow-lg hover:shadow-500/20'
                              : 'bg-white/10 hover:shadow-500/20'
                            } animate-glass-slide-up hover:scale-[1.02] hover:-translate-y-1`}
                        >
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-md bg-indigo-600 flex-shrink-0`}>
                            {booking.time}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] sm:text-xs font-semibold text-neutral-800 truncate">{booking.client}</div>
                            <div className="text-[9px] sm:text-[10px] text-neutral-600 truncate">{booking.service}</div>
                          </div>
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${booking.status === 'confirmed' ? 'bg-green-600 animate-pulse' : 'bg-yellow-400 animate-bounce'}`}></div>
                        </div>
                      ))}
                      <div className="pt-1 text-right">
                        <p className="text-[10px] sm:text-[12px] text-neutral-600 hover:text-indigo-600 transition-colors">8 More Bookings &gt;</p>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Meetings - right column */}
                  <div className="col-span-12 sm:col-span-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 animate-glass-slide-in-left">
                    <div className="flex items-center justify-between mb-1 sm:mb-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-800">Upcoming Meetings</h4>
                    </div>
                    <div className="text-[10px] sm:text-[12px] text-neutral-600 mb-2">Tue 30 Apr</div>
                    <div className="space-y-1.5 sm:space-y-2">
                      {[
                        { name: "Rahul Verma", role: "Software Engineer", meeting: "Sprint Planning", time: "01:00 PM", date: "30 Apr", avatar: "/man.png" },
                        { name: "Riya Sharma", role: "HR Manager", meeting: "Interview Discussion", time: "02:00 PM", date: "30 Apr", avatar: "/teacher.png" },
                      ].map((meeting, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white shadow-md backdrop-blur-sm hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-glass-slide-up">
                          <div className="relative flex-shrink-0">
                            <div className="w-7 h-7 rounded-full overflow-hidden sm:w-8 sm:h-8 flex items-center justify-center">
                              <Image src={meeting.avatar} alt={meeting.name} width={32} height={32} className="object-cover" />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-600 border-2 border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] sm:text-xs font-semibold text-neutral-800 truncate">{meeting.meeting}</div>
                            <div className="text-[9px] sm:text-[10px] text-neutral-600 truncate">{meeting.name} • {meeting.role}</div>
                            <div className="text-[9px] sm:text-[10px] text-neutral-600 truncate">{meeting.time} • {meeting.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Revenue Chart - line graph, left column */}
                  <div className="col-span-12 sm:col-span-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 animate-glass-slide-up">
                    <h4 className="text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5 sm:mb-2">This Week&apos;s Revenue</h4>
                    <div className="relative">
                      <svg className="w-full h-full" viewBox="0 0 280 80" preserveAspectRatio="none">
                        {/* Shaded area under the line */}
                        <defs>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(147, 197, 253)" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        {/* Area path - values: 850, 1200, 950, 1800, 1800, 400 (normalized to 0-80 height) */}
                        <path
                          d="M 20 58 L 60 48 L 100 56 L 140 28 L 180 28 L 220 72 L 260 76 L 260 80 L 20 80 Z"
                          fill="url(#areaGradient)"
                        />
                        {/* Line */}
                        <path
                          d="M 20 58 L 60 48 L 100 56 L 140 28 L 180 28 L 220 72 L 260 76"
                          fill="none"
                          stroke="rgb(59, 130, 246)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Data points */}
                        <circle cx="20" cy="58" r="2" fill="rgb(59, 130, 246)" />
                        <circle cx="60" cy="48" r="2" fill="rgb(59, 130, 246)" />
                        <circle cx="100" cy="56" r="2" fill="rgb(59, 130, 246)" />
                        <circle cx="140" cy="28" r="2" fill="rgb(59, 130, 246)" />
                        <circle cx="180" cy="28" r="2" fill="rgb(59, 130, 246)" />
                        <circle cx="220" cy="72" r="2" fill="rgb(59, 130, 246)" />
                        <circle cx="260" cy="76" r="2" fill="rgb(59, 130, 246)" />
                      </svg>
                      {/* Day labels and values */}
                      <div className="relative flex justify-between items-end px-1 sm:px-2">
                        {[
                          { day: 'M', value: 850 },
                          { day: 'T', value: 1200 },
                          { day: 'W', value: 950 },
                          { day: 'T', value: 1800 },
                          { day: 'F', value: 1800 },
                          { day: 'S', value: 400 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-0.5">
                            <span className="text-[8px] sm:text-[9px] text-neutral-600">${item.value}</span>
                            <span className="text-[8px] sm:text-[9px] text-neutral-600">{item.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions - right column */}
                  <div className="col-span-12 sm:col-span-6 space-y-1.5 sm:space-y-2 animate-glass-slide-in-right">
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-[10px] sm:text-xs font-semibold py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 shadow-lg backdrop-blur-sm flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="truncate">New Booking</span>
                    </button>
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-[10px] sm:text-xs font-semibold py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 shadow-lg backdrop-blur-sm flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <span className="truncate">Send Reminders</span>
                    </button>
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-[10px] sm:text-xs font-semibold py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-105 shadow-lg backdrop-blur-sm flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="truncate">View Reports</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}