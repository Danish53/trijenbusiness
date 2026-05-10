import { Link } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection.jsx';
import StatsCounterSection from '../components/StatsCounterSection.jsx';
import WhyChooseUsSection from '../components/WhyChooseUsSection.jsx';
import CaseStudiesSection from '../components/CaseStudiesSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import Reveal from '../components/Reveal.jsx';
import { useEffect, useRef } from 'react';
import imagee from '../assets/shopify.png';
import imahed from '../assets/meta.png';
import kijlj from '../assets/google.png';
import lokok from '../assets/facebook.png';
import yelp from '../assets/yelp.png';

// --- PROFESSIONAL SEO CHART (Transparent background, green line removed) ---
const SEOChart = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let frame = 0;
    let pulseValue = 0;
    
    const drawChart = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w;
      canvas.height = h;
      
      // Data for the chart (SEO performance over 12 months)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const trafficData = [1250, 1480, 1790, 2150, 2680, 3450, 4280, 5190, 6350, 7850, 9250, 11300];
      const conversionData = [1.2, 1.4, 1.7, 2.1, 2.6, 3.2, 3.9, 4.7, 5.6, 6.6, 7.6, 8.5];
      
      // Animation factor (0 to 1) with slower, smoother animation
      const progress = Math.min(1, frame / 90);
      // Add subtle pulsing effect after animation completes
      const pulseGlow = Math.sin(pulseValue) * 0.15 + 0.85;
      
      // CLEAR BACKGROUND (fully transparent)
      ctx.clearRect(0, 0, w, h);
      
      // Draw semi-transparent border with glow (no solid background)
      ctx.strokeStyle = 'rgba(255, 122, 0, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(2, 2, w-4, h-4);
      
      // Chart area margins (wider for larger graph)
      const leftMargin = 60;
      const rightMargin = 35;
      const topMargin = 40;
      const bottomMargin = 50;
      const chartWidth = w - leftMargin - rightMargin;
      const chartHeight = h - topMargin - bottomMargin;
      
      // Grid lines (very subtle)
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      ctx.font = '11px "Inter", sans-serif';
      
      for (let i = 0; i <= 5; i++) {
        const y = topMargin + (i * chartHeight / 5);
        ctx.beginPath();
        ctx.moveTo(leftMargin, y);
        ctx.lineTo(leftMargin + chartWidth, y);
        ctx.stroke();
        
        // Y-axis labels
        const value = Math.round(12000 - (i * 2400));
        ctx.fillStyle = 'rgba(156, 163, 175, 0.7)';
        ctx.fillText(value.toLocaleString(), 12, y + 4);
      }
      
      // X-axis labels
      const step = chartWidth / 11;
      for (let i = 0; i < months.length; i++) {
        const x = leftMargin + (i * step);
        ctx.fillStyle = 'rgba(156, 163, 175, 0.7)';
        ctx.fillText(months[i], x - 12, h - 18);
        
        // Vertical grid line
        ctx.beginPath();
        ctx.moveTo(x, topMargin);
        ctx.lineTo(x, topMargin + chartHeight);
        ctx.stroke();
      }
      
      // Calculate scales
      const maxTraffic = 12000;
      const scaleY = (val) => topMargin + chartHeight - (val / maxTraffic) * chartHeight;
      
      // Draw area fill for traffic (transparent orange gradient)
      ctx.beginPath();
      for (let i = 0; i < months.length; i++) {
        const x = leftMargin + (i * step);
        const y = scaleY(trafficData[i] * progress);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(leftMargin + chartWidth, topMargin + chartHeight);
      ctx.lineTo(leftMargin, topMargin + chartHeight);
      ctx.closePath();
      
      const areaGrad = ctx.createLinearGradient(0, topMargin, 0, topMargin + chartHeight);
      areaGrad.addColorStop(0, `rgba(255, 122, 0, ${0.25 * pulseGlow})`);
      areaGrad.addColorStop(0.5, `rgba(255, 122, 0, ${0.08 * pulseGlow})`);
      areaGrad.addColorStop(1, `rgba(255, 122, 0, 0.01)`);
      ctx.fillStyle = areaGrad;
      ctx.fill();
      
      // Draw main traffic line (orange) with glow
      ctx.beginPath();
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = '#FC5B01';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#FC5B01';
      for (let i = 0; i < months.length; i++) {
        const x = leftMargin + (i * step);
        const y = scaleY(trafficData[i] * progress);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      
      // Draw points on the line with glow
      ctx.shadowBlur = 8;
      for (let i = 0; i < months.length; i++) {
        const x = leftMargin + (i * step);
        const y = scaleY(trafficData[i] * progress);
        
        // Outer glow circle
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 122, 0, ${0.2 * pulseGlow})`;
        ctx.fill();
        
        // Main point
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#FF9F4A';
        ctx.fill();
        
        // Inner white dot
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      }
      
      // Draw conversion bars (orange/yellow gradient) - semi-transparent
      ctx.shadowBlur = 4;
      const maxConversion = 10;
      const barWidth = step * 0.55;
      for (let i = 0; i < months.length; i++) {
        const x = leftMargin + (i * step) - barWidth/2;
        const barHeight = (conversionData[i] * progress / maxConversion) * chartHeight;
        const y = topMargin + chartHeight - barHeight;
        
        const grad = ctx.createLinearGradient(x, y, x + barWidth, y + barHeight);
        grad.addColorStop(0, 'rgba(245, 158, 11, 0.8)');
        grad.addColorStop(1, 'rgba(249, 115, 22, 0.8)');
        ctx.fillStyle = grad;
        ctx.fillRect(x, y, barWidth, barHeight);
      }
      ctx.shadowBlur = 0;
      
      // Title with animation
      ctx.font = 'bold 13px "Inter", sans-serif';
      ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(pulseValue * 2) * 0.05})`;
      ctx.fillText('▲ SEO PERFORMANCE METRICS ▲', 20, 25);
      
      // Legend
      ctx.font = '10px "Inter"';
      ctx.fillStyle = '#FC5B01';
      ctx.fillRect(w - 105, 12, 12, 8);
      ctx.fillStyle = 'rgba(229, 231, 235, 0.8)';
      ctx.fillText('Organic Traffic', w - 89, 20);
      
      ctx.fillStyle = '#F59E0B';
      ctx.fillRect(w - 105, 28, 12, 8);
      ctx.fillStyle = 'rgba(229, 231, 235, 0.8)';
      ctx.fillText('Conversion Rate', w - 89, 36);
      
      // Animated upward arrow indicator
      const arrowY = 28 + Math.sin(pulseValue * 3) * 3;
      ctx.fillStyle = '#22C55E';
      ctx.font = '14px "Inter"';
      ctx.fillText('↑', w - 18, arrowY);
      
      // Last value display with animation
      if (progress >= 0.9) {
        const lastX = leftMargin + (11 * step);
        const lastY = scaleY(11300 * Math.min(1, progress));
        ctx.font = 'bold 11px "Inter"';
        ctx.fillStyle = '#FC5B01';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FC5B01';
        ctx.fillText('11,300', lastX + 8, lastY - 8);
        ctx.shadowBlur = 0;
      }
    };
    
    const animate = () => {
      if (frame < 90) {
        frame++;
        drawChart();
        animationId = requestAnimationFrame(animate);
      } else {
        // Continuous subtle pulsing animation after initial draw
        const pulseAnimation = () => {
          pulseValue += 0.03;
          drawChart();
          animationId = requestAnimationFrame(pulseAnimation);
        };
        pulseAnimation();
      }
    };
    
    drawChart();
    animate();
    
    const handleResize = () => drawChart();
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full rounded-2xl shadow-2xl"
      style={{ aspectRatio: '16/9', maxHeight: '520px', minHeight: '400px', background: 'transparent' }}
    />
  );
};

// --- Auto-sliding Official Partners ---
const OfficialPartnersSwiper = () => {
  const partners = [
    { name: 'Shopify', logo: imagee },
    { name: 'Meta', logo: imahed },
    { name: 'Google', logo: kijlj },
    { name: 'Facebook', logo: lokok },
    { name: 'Yelp', logo: yelp }, 
  ];
  
  const infinitePartners = [...partners, ...partners, ...partners];
  
  return (
    <div className="w-full py-12 bg-black/30 backdrop-blur-sm border-y border-white/5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 mb-4">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-brand-accent/80 font-semibold">Trusted by industry leaders</p>
        <h3 className="text-center text-2xl font-bold text-white mt-1">Official Partners</h3>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="animate-scroll-x flex gap-6 py-4" style={{ width: 'max-content' }}>
          {infinitePartners.map((p, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex items-center justify-center gap-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 min-w-[180px] transition-all duration-300 hover:border-brand-accent/60 hover:bg-white/15 hover:scale-105"
            >
            <div className='flex gap-2 items-center justify-center flex-col'>
            <img className="text-3xl w-[50px] object-contain" src={p.logo} />
              <span className="font-semibold text-white/90 text-base whitespace-nowrap">{p.name}</span>
            </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureCard({ icon, label }) {
  return (
    <div className="flex min-h-[52px] flex-1 items-center gap-3 rounded-lg border border-white/[0.08] bg-black/40 px-4 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/40 hover:bg-black/60">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-accent/15 text-brand-accent ring-1 ring-brand-accent/35">
        {icon}
      </span>
      <span className="text-sm font-medium leading-snug text-white">{label}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="home" className="relative bg-brand-bg overflow-x-hidden">
      {/* Page Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#04070d_0%,#05070b_55%,#050505_100%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto grid max-w-screen-xl gap-8 overflow-hidden px-5 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          // style={{
          //   background:
          //     'radial-gradient(ellipse at 96% 52%, rgba(252,91,1,0.30) 0%, rgba(252,91,1,0.16) 24%, rgba(120,52,8,0.08) 42%, rgba(15,10,8,0) 68%), linear-gradient(100deg, #040913 0%, #070b13 42%, #090a10 66%, #0a0908 100%)',
          // }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[220px] w-[320px] -translate-x-1/2 -translate-y-1/2 opacity-80 sm:h-[260px] sm:w-[380px] lg:h-[280px] lg:w-[420px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(172,178,188,0.34) 0%, rgba(126,132,144,0.20) 32%, rgba(72,76,86,0.10) 52%, rgba(16,18,24,0) 78%)',
            filter: 'blur(20px)',
          }}
        />
        <div className="text-left z-10">

          <h1 className="mb-5 font-black uppercase leading-[0.95] tracking-tighter text-[clamp(2.2rem,6vw,3.8rem)]">
            <Reveal as="span" variant="up" delayMs={85} durationMs={980} className="block text-white">
              Strategy.
            </Reveal>
            <Reveal as="span" variant="up" delayMs={165} durationMs={980} className="block text-white">
              Growth.
            </Reveal>
            <Reveal
              as="span"
              variant="up"
              delayMs={245}
              durationMs={1020}
              className="block text-brand-accent"
            >
              Success.
            </Reveal>
          </h1>

          <Reveal variant="up" delayMs={200} durationMs={940}>
            <p className="mb-3 max-w-2xl text-lg font-semibold leading-snug text-white/90 sm:text-xl">
              Precision Targeting That Makes Your Brand Impossible to Miss.
            </p>
          </Reveal>

          <Reveal variant="up" delayMs={220} durationMs={940}>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-gray-400">
              Welcome to Trijen. We don't just run ads; we build growth engines. From data-backed strategies to cinematic creative, 
              we bridge the gap between where you are and where you want to be.
            </p>
          </Reveal>

          <Reveal variant="up" delayMs={280} durationMs={940}>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(252,91,1,0.35)] transition-all duration-300 hover:scale-105 hover:bg-brand-accent/90"
              >
                Get Started
                <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-accent/60 hover:bg-brand-accent/10"
              >
                Our Services
                <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 min-w-[180px]">
              <Reveal variant="up" delayMs={60} durationMs={820} className="flex-1">
                <FeatureCard
                  label="Performance Driven"
                  icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5m4 14V9m4 10v-6m4 6V11" stroke="currentColor" /></svg>}
                />
              </Reveal>
            </div>
            <div className="flex flex-1 min-w-[180px]">
              <Reveal variant="up" delayMs={130} durationMs={820} className="flex-1">
                <FeatureCard
                  label="Transparent Reporting"
                  icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>}
                />
              </Reveal>
            </div>
            <div className="flex flex-1 min-w-[180px]">
              <Reveal variant="up" delayMs={200} durationMs={820} className="flex-1">
                <FeatureCard
                  label="Dedicated Support"
                  icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM6 15a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>}
                />
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal
          variant="right"
          blur
          delayMs={140}
          durationMs={1120}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-xl mx-auto">
            {/* Chart with transparent background */}
            <SEOChart />
            
            {/* Floating stat cards */}
            <div className="absolute -top-5 -left-4 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-brand-accent/40 shadow-lg animate-bounce-slow">
              <p className="text-[10px] font-semibold uppercase text-white/60">ROI Increase</p>
              <p className="text-2xl font-black text-brand-accent">+247%</p>
            </div>
            
            <div className="absolute top-1/3 -left-4 bg-black/80 backdrop-blur-md px-3 py-2 rounded-xl border border-brand-accent/40 shadow-lg">
              <p className="text-[10px] font-semibold uppercase text-white/60">Leads</p>
              <p className="text-lg font-black text-brand-accent">+10.5K</p>
            </div>
            
            <div className="absolute -bottom-5 -right-4 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-brand-accent/40 shadow-lg">
              <p className="text-[10px] font-semibold uppercase text-white/60">Sales Growth</p>
              <p className="text-2xl font-black text-brand-accent">+187%</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Official Partners */}
      <OfficialPartnersSwiper />

      {/* Other Sections */}
      <div className="relative z-10">
        <ServicesSection limit={6} />
        <StatsCounterSection />
        <WhyChooseUsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1);}
          50% { opacity: 0.4; transform: scale(1.08);}
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite ease-in-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}