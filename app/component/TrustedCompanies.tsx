"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Heading from "./Heading";

const companies = [
  { name: "Zoom", logo: "/Zoom.svg" },
  { name: "Microsoft", logo: "/microsoft.svg" },
  { name: "Slack", logo: "/slack.svg" },
  { name: "Gmail", logo: "/gmail-icon.svg" },
  { name: "WhatsApp", logo: "/whatsapp.svg" },
  { name: "Google Calendar", logo: "/google-calendar.svg" },
  { name: "Microsoft Teams", logo: "/teams.svg" },
];

export default function TrustedCompanies() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [shouldSlide, setShouldSlide] = useState(false);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const update = () => {
      setShouldSlide(track.scrollWidth > viewport.clientWidth + 1);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    observer.observe(track);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || !shouldSlide) {
      if (track) track.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    let raf = 0;
    let x = 0;
    let paused = false;
    let resumeAt = 0;
    const speed = 0.6;

    const tick = (now: number) => {
      if (!paused && now >= resumeAt) {
        const max = track.scrollWidth - viewport.clientWidth;
        if (max > 1) {
          if (x >= max) {
            x = 0;
          } else {
            x = Math.min(max, x + speed);
            if (x >= max) resumeAt = now + 900;
          }
          track.style.transform = `translate3d(${-x}px, 0, 0)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      track.style.transform = "translate3d(0, 0, 0)";
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, [shouldSlide]);

  return (
    <section className="bg-neutral-50 py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center mb-4">
          <Heading
            title="Easy To Integrate"
            description="Our system supports the world's leading operational tools for centralized and professional practices."
          />
        </div>

        <div ref={viewportRef} className="relative overflow-hidden">
          {shouldSlide && (
            <>
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-50 to-transparent sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-50 to-transparent sm:w-24" />
            </>
          )}

          <div
            ref={trackRef}
            className={`flex w-max items-center will-change-transform ${shouldSlide ? "" : "mx-auto"}`}
          >
            {companies.map((company) => (
              <div key={company.name} className="flex h-12 shrink-0 items-center justify-center px-6 sm:px-8 md:px-10">
                <div className="relative h-10 w-full sm:h-12">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={50}
                    height={50}
                    className="rounded-lg p-2 object-contain sm:grayscale sm:brightness-90 transition hover:grayscale-0 hover:brightness-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
