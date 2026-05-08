import React from 'react';
import imgaes from '../assets/images.png'

const TrijenAboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN - Contains Hero Text + First Row of Cards (spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hero Text Section */}
            <div className="pt-4 pr-4">
              <div className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-5 flex items-center select-none">
                <span className="text-gray-300 mr-2 tracking-normal">———</span>
                Who We Are
                <span className="text-gray-300 ml-2 tracking-normal">———</span>
              </div>
              
              <h1 className="text-[42px] leading-[1.15] font-extrabold text-[#1a1a1a] mb-4">
                We Build Digital Strategies<br />
                <span className="text-brand-accent">That Drive Real Growth.</span>
              </h1>
              
              <p className="text-[#666] text-[17px] leading-relaxed max-w-md">
                Trijen solutions delivers smart digital strategies that help businesses grow, connect, and lead with confidence.
              </p>
            </div>

            {/* First Row of Cards (Below Hero Text) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              
              {/* Card 1: Our Story - White BG */}
              <div className="bg-white p-7 rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/80 hover:shadow-lg transition-all duration-300">
                <div className="w-[52px] h-[52px] bg-brand-accent rounded-full flex items-center justify-center text-white mb-5 shadow-[0_12px_24px_rgba(252,91,1,0.28)]">
                  {/* Network/Web Icon */}
                  <svg className="w-[26px] h-[26px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-[19px] font-bold text-[#1a1a1a] mb-3">Our Story</h3>
                <p className="text-[14px] text-[#666] leading-[1.7]">
                  Founded on a shared vision between three friends, Trijen solutions delivers smart digital strategies that help businesses grow, connect, and lead with confidence.
                </p>
              </div>

              {/* Card 2: Our Foundation - Dark BG */}
              <div className="bg-[#1a1a1a] p-7 rounded-[4px] text-white relative overflow-hidden shadow-lg group">
                {/* Subtle decorative element */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/[0.03] rounded-full blur-xl group-hover:bg-white/[0.06] transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-[52px] h-[52px] bg-brand-accent rounded-full flex items-center justify-center text-white mb-5 shadow-[0_12px_24px_rgba(252,91,1,0.28)]">
                    {/* Shield Icon */}
                    <svg className="w-[26px] h-[26px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-3">Our Foundation</h3>
                  <p className="text-[14px] text-gray-300 leading-[1.7]">
                    Our foundation is built on trust, strategic thinking, and a relentless focus on results. We combine creativity, analytics, and industry insight to build solutions that create lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Tall Hero Image (spans 2 rows = height of text + first card row) */}
          <div className="lg:col-span-7 lg:row-span-2 relative rounded-[6px] overflow-hidden min-h-[480px] lg:min-h-0 bg-gray-900 group">
            
            {/* Background Image - Office Interior */}
            <img 
              src={imgaes}
              alt="Trijen Office" 
              className="w-full h-full object-cover"
            />
              
          </div>

          {/* BOTTOM ROW - 4 Small Cards (Spans full 12 cols) */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
            
            {/* Card: Who We Work With */}
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-[4px] border border-gray-100/60 hover:border-brand-accent/35 hover:bg-white transition-all duration-300 group relative overflow-hidden">
              <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-[46px] h-[46px] bg-brand-accent rounded-full flex items-center justify-center text-white mb-4 shadow-[0_8px_18px_rgba(252,91,1,0.24)] shrink-0">
                  <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                    <path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-2.5">Who We Work With</h3>
                <p className="text-[13px] text-[#666] leading-[1.7]">
                  We partner with ambitious businesses ready to grow. From startups to established brands, we tailor strategies that align with your goals and drive measurable outcomes.
                </p>
              </div>
            </div>

            {/* Card: Our Approach */}
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-[4px] border border-gray-100/60 hover:border-brand-accent/35 hover:bg-white transition-all duration-300 group relative overflow-hidden">
              <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-yellow-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-[46px] h-[46px] bg-brand-accent rounded-full flex items-center justify-center text-white mb-4 shadow-[0_8px_18px_rgba(252,91,1,0.24)] shrink-0">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-2.5">Our Approach</h3>
                <p className="text-[13px] text-[#666] leading-[1.7]">
                  We blend creativity with data-driven strategy to deliver custom solutions that elevate your brand, engage your audience, and accelerate sustainable growth.
                </p>
              </div>
            </div>

            {/* Card: Our Commitment */}
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-[4px] border border-gray-100/60 hover:border-brand-accent/35 hover:bg-white transition-all duration-300 group relative overflow-hidden">
              <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-green-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-[46px] h-[46px] bg-brand-accent rounded-full flex items-center justify-center text-white mb-4 shadow-[0_8px_18px_rgba(252,91,1,0.24)] shrink-0">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-2.5">Our Commitment</h3>
                <p className="text-[13px] text-[#666] leading-[1.7]">
                  We're committed to transparency, collaboration, and delivering real value. Your success is our priority, and we're with you every step of the way.
                </p>
              </div>
            </div>

            {/* Card: Our Perspective */}
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-[4px] border border-gray-100/60 hover:border-brand-accent/35 hover:bg-white transition-all duration-300 group relative overflow-hidden">
              <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-purple-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-[46px] h-[46px] bg-brand-accent rounded-full flex items-center justify-center text-white mb-4 shadow-[0_8px_18px_rgba(252,91,1,0.24)] shrink-0">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-2.5">Our Perspective</h3>
                <p className="text-[13px] text-[#666] leading-[1.7]">
                  We believe in long-term partnerships, innovative thinking, and strategies that adapt. In a digital world that's always changing, we help your business stay ahead.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER - Precision Targeting */}
        <div className="mt-8 bg-[#1f1f1f] rounded-[6px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden border border-[#2a2a2a] shadow-2xl">
          
          {/* Dot Pattern on Right Side - EXACTLY AS IN IMAGE */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none hidden md:block overflow-hidden">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2.5" fill="#FC5B01" opacity="0.8"/>
                </pattern>
                <linearGradient id="fadeGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FC5B01" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#FC5B01" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {/* Skewed dot pattern for dynamic look */}
              <g transform="translate(40, 0) skewX(-15)">
                <rect x="-20%" y="0" width="140%" height="100%" fill="url(#dotPattern)" mask="url(#fadeMask)"/>
              </g>
              <defs>
                <mask id="fadeMask">
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#fadeGradient)"/>
                </mask>
              </defs>
            </svg>
          </div>

          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
            {/* Large Target Icon */}
            <div className="shrink-0">
              <svg className="w-16 h-16 text-brand-accent drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
                <line x1="12" y1="2" x2="12" y2="5" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="12" y1="19" x2="12" y2="22" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="2" y1="12" x2="5" y2="12" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="19" y1="12" x2="22" y2="12" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-white leading-snug">
                Precision Targeting That Makes Your Brand{" "}
                <span className="text-brand-accent">Impossible to Miss.</span>
              </h3>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default TrijenAboutPage;
