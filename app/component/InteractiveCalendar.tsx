"use client";

import { useMemo, useState } from "react";

type CalendarCell = {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
};

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const FEATURES = [
  "Customise scheduling to match your business flow.",
  "Set availability, buffer time, and booking limits instantly.",
  "Automate reminders, confirmations, and follow-ups beautifully.",
];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildCalendarCells(viewDate: Date): CalendarCell[] {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const startWeekday = firstDayOfMonth.getDay();

  const cells: CalendarCell[] = [];

  for (let i = startWeekday - 1; i >= 0; i -= 1) {
    const dayNumber = daysInPrevMonth - i;
    cells.push({
      date: new Date(year, month - 1, dayNumber),
      dayNumber,
      isCurrentMonth: false,
    });
  }

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
    cells.push({
      date: new Date(year, month, dayNumber),
      dayNumber,
      isCurrentMonth: true,
    });
  }

  let nextMonthDay = 1;
  // Always render 6 rows (42 cells) so every month keeps equal height.
  while (cells.length < 42) {
    cells.push({
      date: new Date(year, month + 1, nextMonthDay),
      dayNumber: nextMonthDay,
      isCurrentMonth: false,
    });
    nextMonthDay += 1;
  }

  return cells;
}

function CalendarMonthPanel() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState(today);

  const cells = useMemo(() => buildCalendarCells(viewDate), [viewDate]);
  const weeks = useMemo(() => {
    const rows: CalendarCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(cells.slice(i, i + 7));
    }
    return rows;
  }, [cells]);

  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToPrevMonth = () => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleDateSelect = (cell: CalendarCell) => {
    setSelectedDate(cell.date);
    if (!cell.isCurrentMonth) {
      setViewDate(new Date(cell.date.getFullYear(), cell.date.getMonth(), 1));
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white p-2.5 backdrop-blur-md sm:p-4">
      <div className="mb-4 flex items-center justify-between text-slate-950">
        <button type="button" onClick={goToPrevMonth} className="cursor-pointer rounded-md bg-indigo-600 px-1 py-1 text-xs transition-colors hover:brightness-110" aria-label="Show previous month">
          <svg className="h-4 w-4 text-white transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="px-2 text-center text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm sm:tracking-[0.12em]">{monthLabel}</h3>
        <button type="button" onClick={goToNextMonth} className="cursor-pointer rounded-md bg-indigo-600 px-1 py-1 text-xs transition-colors hover:brightness-110" aria-label="Show next month">
          <svg className="h-4 w-4 text-white transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1 text-center text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:gap-2 sm:text-[11px]">
        {WEEK_DAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="space-y-1.5 sm:space-y-4">
        {weeks.map((row, rowIndex) => (
          <div key={`${monthLabel}-${rowIndex}`} className="grid grid-cols-7 gap-1 sm:gap-2">
            {row.map((cell) => {
              const isSelected = isSameDay(cell.date, selectedDate);
              const isMuted = !cell.isCurrentMonth;

              return (
                <button
                  key={cell.date.toISOString()}
                  type="button"
                  onClick={() => handleDateSelect(cell)}
                  className={`flex aspect-square items-center justify-center rounded-lg text-[11px] font-semibold text-slate-500 transition-all cursor-pointer sm:rounded-xl sm:text-xs ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20"
                      : isMuted
                        ? "bg-white/10 text-slate-50 hover:bg-slate-100"
                        : "bg-white/15 text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100"
                  }`}
                >
                  {cell.dayNumber}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InteractiveCalendar() {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 20);
  const futureDateLabel = futureDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_30%),linear-gradient(180deg,#f8faff_0%,#eef2ff_100%)] py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        {/* Left: Interactive Calendar */}
        <div className="relative xl:pb-12">
          <div className="absolute -left-6 top-16 hidden h-28 w-28 rounded-full bg-gradient-to-br from-emerald-200/50 to-pink-200/50 blur-2xl md:block lg:-left-10 lg:top-20 lg:h-40 lg:w-40" />

          <div className="relative rounded-2xl border border-white/60 bg-white/70 p-2.5 shadow-[0_25px_80px_rgba(79,70,229,0.15)] backdrop-blur-xl sm:p-5">
            <div className="relative z-10 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500 sm:h-3 sm:w-3" />
                  <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-red-400 sm:h-3 sm:w-3" />
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-600 sm:h-3 sm:w-3" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600 sm:h-2 sm:w-2" />
                <span className="text-[10px] font-medium text-neutral-700 sm:text-xs">LIVE</span>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#4f5bdb] via-[#5a67f2] to-[#2536a8] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] sm:p-4">
              <div className="mb-3 flex items-center justify-between text-white/80">
                <div className="py-1 text-[10px] font-semibold tracking-[0.2em] text-white/90 sm:text-xs sm:tracking-[0.3em]">
                  LIVE SCHEDULE
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-[1.3fr_0.9fr]">
                <CalendarMonthPanel />

                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-[20px] border border-white/15 bg-white/10 p-3 text-white backdrop-blur-md sm:rounded-[24px] sm:p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm font-medium text-white/70">Automation</p>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs">Active</span>
                    </div>
                    <div className="space-y-2.5 text-xs sm:space-y-3 sm:text-sm">
                      <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2">
                        <span className="text-xs">Instant confirmation</span>
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2">
                        <span className="text-xs">Reminder sequence</span>
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      </div>
                      <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2">
                        <span className="text-xs">Meeting routing</span>
                        <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-float mt-4 w-full rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-2xl md:absolute md:-bottom-0 md:right-10 md:w-64 lg:-bottom-0 lg:-right-5">
              <p className="mb-3 text-sm font-semibold text-slate-900">Upcoming booking</p>
              <div className="space-y-2">
                <div className="rounded-xl pb-1">
                  <p className="text-xs font-semibold text-slate-900">Consultation Call</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">with Neha Gupta</p>
                </div>

                <div className="space-y-2 text-[11px] text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-500">Date</span>
                      <span className="font-semibold text-slate-800">{futureDateLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-500">Time</span>
                    <span className="font-semibold text-slate-800">10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-500">Status</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Confirmed</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:brightness-105"
                >
                  View Details
                </button>
              </div>
            </div>
        </div>

        {/* Right: Content */}
        <div className="relative space-y-2">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Smart scheduling, designed to feel live
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-slate-950">
            Smart Scheduling,
            <span className="block bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
              Maximum Efficiency
            </span>
          </h2>

          <p className="text-sm text-neutral-600 sm:text-base">
            Turn this section into a premium live experience instead of a flat illustration. Show a real calendar,
            active time slots, automation status, and booking flow so visitors instantly understand how powerful your platform feels.
          </p>

          <div className="mt-8 space-y-4">
            {FEATURES.map((feature) => (
              <div key={feature} className="group rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_10px_35px_rgba(20,25,50,0.08)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-md font-semibold text-white shadow-lg shadow-indigo-500/25">✓</div>
                <p className="text-sm text-slate-700">{feature}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
