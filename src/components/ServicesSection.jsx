import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const accent = '#FC5B01'

function IconSeoTarget() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <circle cx="28" cy="28" r="24" fill={accent} />
      <circle cx="28" cy="28" r="17" stroke="white" strokeOpacity="0.95" strokeWidth="2.5" />
      <circle cx="28" cy="28" r="10" stroke="white" strokeOpacity="0.95" strokeWidth="2.5" />
      <circle cx="28" cy="28" r="4" fill="white" />
      <path d="M38 12 L44 6 L44 14 L36 14 Z" fill="white" opacity="0.95" />
      <path d="M28 28 L42 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconSocialCluster() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <circle cx="22" cy="22" r="11" fill="#1877F2" />
      <circle cx="36" cy="24" r="11" fill="#0A66C2" />
      <circle cx="26" cy="36" r="11" fill="#F58529" />
      <circle cx="40" cy="34" r="11" fill="#E4405F" />
    </svg>
  )
}

function IconGoogleAds() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path d="M28 8 L44 36 H28 L12 36 Z" fill="#4285F4" />
      <path d="M28 8 L44 36 L36 36 L24 16 Z" fill="#FBBC04" />
      <path d="M12 36 L28 8 L24 16 L16 32 Z" fill="#34A853" />
    </svg>
  )
}

function IconMegaphone() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path
        d="M14 22h8v14h-8a3 3 0 0 1-3-3V25a3 3 0 0 1 3-3z"
        fill="white"
        stroke={accent}
        strokeWidth="2"
      />
      <path
        d="M22 22l18-7v28l-18-7V22z"
        fill={accent}
        stroke={accent}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M40 17v24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path
        d="M44 26c2 2 2 6 0 8"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function IconMonitorWeb() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <rect x="8" y="10" width="40" height="28" rx="3" stroke="#171717" strokeWidth="2.2" fill="none" />
      <path d="M14 17h28M14 23h18M14 29h22" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 38v6M22 44h12" stroke="#171717" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function IconBrandingPen() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <path
        d="M8 38 Q18 28 28 32 T48 26"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 12l8 8-14 14-8-2-2-8 16-12z"
        stroke="#171717"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="white"
      />
      <path d="M42 12l6 6" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 30l-4 10 10-4-6-6z" fill="#171717" opacity="0.08" />
    </svg>
  )
}

function IconCrmHub() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <circle cx="28" cy="28" r="24" fill="#fff3e8" />
      <path d="M28 14v8M14 28h8M34 28h8M28 34v8" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="28" cy="28" r="7.5" stroke="#171717" strokeWidth="2.4" />
      <circle cx="28" cy="28" r="2.2" fill={accent} />
    </svg>
  )
}

function IconContentPlay() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <rect x="8" y="10" width="40" height="28" rx="6" fill="#171717" />
      <path d="M24 19l12 5-12 5v-10z" fill={accent} />
      <rect x="14" y="42" width="28" height="4" rx="2" fill={accent} opacity="0.8" />
    </svg>
  )
}

const services = [
  {
    icon: IconSeoTarget,
    title: 'Search Engine Optimization (SEO)',
    headline: 'Dominate Search. Not Just Today, But Tomorrow.',
    description:
      'AI-driven semantic search, entity-based SEO, and Core Web Vitals optimization built for local search dominance.',
    edge:
      'Forget old-school keyword stuffing. We align with how modern search engines think and position your business in Map Pack and voice search moments.',
  },
  {
    icon: IconSocialCluster,
    title: 'Social Media Management',
    headline: 'Your Brand, In Every Pocket.',
    description:
      'Scroll-stopping storytelling across TikTok, Instagram, and LinkedIn that keeps your brand visible and active.',
    edge:
      'From cinematic visuals to community engagement, we turn your channels into conversion-ready brand touchpoints.',
  },
  {
    icon: IconGoogleAds,
    title: 'Google Ads & PPC',
    headline: 'Capture Intent. Convert Leads.',
    subheadline: '',
    description: 'High-intent paid search campaigns designed to drive calls, bookings, and predictable lead flow.',
    edge:
      'Precision targeting and negative-keyword filtering protect your budget from wasted clicks and low-quality traffic.',
  },
  {
    icon: IconMegaphone,
    title: 'Meta Ads (Facebook & Instagram)',
    headline: 'Precision Targeting. Maximum Impact.',
    subheadline: '',
    description:
      'We use pixel tracking and lookalike modeling to build social funnels that move users to action quickly.',
    edge:
      'Our ads blend naturally into the feed while guiding ideal customers toward checkout or contact.',
  },
  {
    icon: IconMonitorWeb,
    title: 'Website Design & Development',
    headline: 'Your High-Performance Digital Headquarters.',
    // subheadline: 'We build more than websites; we build conversion machines tailored to your business needs.',
    description: 'Fast, secure, and conversion-focused websites that work like your 24/7 salesperson.',
    edge:
      'A slow or confusing website is a lost sale. We build for speed, trust, and conversion from first click to final action.',
    bullets: [
      'WordPress Development: SEO-friendly websites for service-based businesses.',
      'Shopify E-Commerce: High-converting stores with seamless checkout flow.',
      'Custom Web Solutions: React/Next.js websites for performance and scale.',
      'Mobile-First Design: Optimized for local customers searching on phones.',
    ],
  },
  {
    icon: IconCrmHub,
    title: 'CRM & Lead Management',
    headline: 'Never Let a Lead Grow Cold Again.',
    // subheadline: 'Streamline your customer journey with smart CRM and automation.',
    description:
      'We implement CRM systems and automations so every inquiry is tracked, followed up, and converted.',
    edge: 'Getting the lead is only half the battle. We help you close the loop with smart pipeline systems.',
    bullets: [
      'Lead Automation: Instant responses even while you sleep.',
      'Pipeline Tracking: Visual journey from first hello to payment.',
      'Email & SMS Marketing: Automated nurture and follow-up flows.',
      'Centralized Communication: Calls, texts, and emails in one dashboard.',
    ],
  },
  {
    icon: IconBrandingPen,
    title: 'Graphic Design & Logo Maker',
    headline: 'Visual Authority. Professional Impact.',
    subheadline: 'We create the visual handshake that makes a lasting first impression.',
    description: 'Professional visual systems that make your brand look credible, clear, and memorable.',
    edge: 'Design is not just aesthetics; it is trust, differentiation, and authority in every customer interaction.',
    bullets: [
      'Professional Logo Design: Custom, scalable logos built around your story.',
      'Brand Identity Kits: Colors and typography for visual consistency.',
      'Marketing Collateral: Brochures, flyers, and digital banners.',
      'UX/UI Design: Intuitive, conversion-focused interface design.',
    ],
  },
  {
    icon: IconContentPlay,
    title: 'Content Creation',
    headline: 'The Voice of Your Brand.',
    subheadline: 'High-quality content that educates, entertains, and converts.',
    description: 'Strategic content systems that power visibility, engagement, and lead generation.',
    edge: 'Content is the fuel behind digital growth. We plan and produce content that moves audiences to act.',
    bullets: [
      'Social Media Content: Cinematic reels, carousels, and HD visuals.',
      'SEO Blog Writing: Helpful content that answers questions and ranks.',
      'Copywriting: Persuasive website and ad messaging.',
      'Video Strategy: Professional planning and production support.',
    ],
  },
]

export default function ServicesSection({ detailed = false, limit }) {
  const items = typeof limit === 'number' ? services.slice(0, limit) : services
  const compactText = (value) => {
    const words = value.split(' ')
    if (words.length < 10) return value
    return `${words.slice(0, 10).join(' ')}...`
  }

  return (
    <section
      id="services"
      className="border-t border-neutral-200 bg-white py-14 text-neutral-900 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 lg:px-4">
        <Reveal variant="up" blur durationMs={1000} className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <header>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-accent sm:text-xs">
              What we do
            </p>
            <h2 className="text-[clamp(1.65rem,4vw,2.35rem)] font-bold leading-tight tracking-tight text-neutral-900">
              Our <span className="text-brand-accent">Digital Marketing</span> Services
            </h2>
          </header>
        </Reveal>

        <ul className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${detailed ? 'lg:grid-cols-2' : 'lg:grid-cols-3 xl:grid-cols-6 xl:gap-5'}`}>
          {items.map(({ icon: Icon, title, headline, subheadline, description, edge, bullets }, index) => (
            <li key={title}>
              <Reveal
                variant="up"
                delayMs={index * 85}
                durationMs={900}
                threshold={0.08}
                className="h-full"
              >
                <article
                  className={`flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white px-5 py-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition hover:border-neutral-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${detailed ? 'text-left' : 'items-center text-center'
                    }`}
                >
                  <div className={`mb-4 flex h-14 w-14 shrink-0 items-center justify-center ${detailed ? '' : 'mx-auto'}`}>
                    <Icon />
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold leading-snug text-neutral-900 sm:text-base">{title}</h3>
                  {detailed && headline ? <p className="mb-2 text-sm font-semibold text-neutral-800">{headline}</p> : null}
                  {subheadline ? <p className="mb-2 text-sm leading-relaxed text-neutral-600">{subheadline}</p> : null}
                  <p className={`mb-3 text-sm leading-relaxed text-neutral-600 ${detailed ? '' : 'min-h-[44px]'}`}>
                    {detailed ? description : compactText(description)}
                  </p>
                  {detailed && edge ? (
                    <p className="mb-3 text-sm leading-relaxed text-neutral-700">
                      <span className="font-semibold">The Trijen Edge: </span>
                      {edge}
                    </p>
                  ) : null}
                  {detailed && bullets?.length ? (
                    <ul className="mb-4 space-y-2 text-sm leading-relaxed text-neutral-700">
                      {bullets.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    to="/contact"
                    className={`group mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-accent transition hover:text-brand-accent/90 ${detailed ? '' : 'justify-center'
                      }`}
                  >
                    Learn More
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
