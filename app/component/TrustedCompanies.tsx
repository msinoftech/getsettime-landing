"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Define company logos
const companies = [
  { name: 'Microsoft', logo: '/microsoft.svg' },
  // { name: 'Google', logo: '/google.svg' },
  { name: 'Slack', logo: '/slack.svg' },
  { name: 'gmail', logo: '/gmail-icon.svg' },
  { name: 'google-calendar', logo: '/google-calendar.svg' },
  { name: 'teams', logo: '/teams.svg' },
  { name: 'Zoom', logo: '/Zoom.svg' },
];

export default function TrustedCompanies() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone the slider content for infinite loop effect
    const sliderContent = slider.querySelector<HTMLElement>('.slider-content');
    if (!sliderContent) return;
    
    const clone = sliderContent.cloneNode(true);
    slider.appendChild(clone);

    // Animation function
    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position += speed;
      
      // Reset position when first set of logos is completely scrolled
      const contentWidth = sliderContent.clientWidth;
      if (contentWidth && position >= contentWidth) {
        position = 0;
      }
      
      slider.style.transform = `translateX(${-position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">Integrated with leading apps worldwide</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">Join thousands of companies that rely on our scheduling platform to power their business</p>
        </div>

        <div className="relative overflow-hidden mx-auto max-w-7xl">          
          {/* Logo slider */}
          <div className="overflow-hidden py-6 w-full">
            <div ref={sliderRef} className="flex items-center slider-track overflow-hidden">
              <div className="flex items-center gap-8 sm:gap-12 md:gap-16 slider-content overflow-hidden">
                {companies.map((company, index) => (
                  <div key={index} className="flex items-center justify-center glass-effect rounded-xl">
                    <div className="relative h-12 w-24">
                      <Image src={company.logo} alt={`${company.name} logo`} fill className="object-contain filter brightness grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}