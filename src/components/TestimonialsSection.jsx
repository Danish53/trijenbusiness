import { useEffect, useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'

function getVisibleCount() {
  if (typeof window === 'undefined') return 1
  if (window.innerWidth >= 1280) return 3
  if (window.innerWidth >= 768) return 2
  return 1
}

const testimonials = [
  {
    quote: "Trijen Business Solutions transformed our entire digital strategy. Our organic traffic increased by 340 percent in just 6 months. The team's dedication to ROI is unmatched.",
    name: 'Michael Thompson',
    role: 'CEO, TechFlow Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'Austin, Texas',
    rating: 5
  },
  {
    quote: "Working with Trijen has been a game changer. Their SEO expertise helped us rank number one for multiple competitive keywords. Our leads have tripled since we started.",
    name: 'Sarah Johnson',
    role: 'Marketing Director, HealthPlus Medical',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    location: 'Los Angeles, California',
    rating: 5
  },
  {
    quote: "The team at Trijen actually cares about results. They are proactive, transparent, and delivered a 280 percent ROAS on our Google Ads campaigns. Highly recommend.",
    name: 'David Williams',
    role: 'Owner, Williams Construction Group',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    location: 'Chicago, Illinois',
    rating: 5
  },
  {
    quote: "Best digital marketing investment we have ever made. Our social media engagement grew by 500 percent, and we are seeing record breaking sales month after month.",
    name: 'Jennifer Martinez',
    role: 'Brand Manager, Urban Fashion Company',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    location: 'Miami, Florida',
    rating: 5
  },
  {
    quote: "Trijen's data driven approach helped us dominate local search. We are now the go to service provider in our area. Their team feels like an extension of ours.",
    name: 'Robert Anderson',
    role: 'President, Anderson and Associates Law',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    location: 'New York, New York',
    rating: 5
  },
  {
    quote: "From website redesign to full funnel marketing, Trijen delivered beyond expectations. Our conversion rate doubled in the first quarter alone.",
    name: 'Lisa Brown',
    role: 'Founder, Bloom Beauty Studio',
    avatar: 'https://randomuser.me/api/portraits/women/89.jpg',
    location: 'Seattle, Washington',
    rating: 5
  },
  {
    quote: "The ROI we have seen is phenomenal. Trijen's PPC campaigns generated over five hundred thousand dollars in revenue in just eight months. They truly understand performance marketing.",
    name: 'James Wilson',
    role: 'Vice President of Sales, CloudTech Systems',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    location: 'Denver, Colorado',
    rating: 5
  },
  {
    quote: "Exceptional service, clear communication, and outstanding results. Our email marketing open rates increased by 45 percent after implementing their strategies.",
    name: 'Emily Davis',
    role: 'CRM Manager, Luxe Hospitality Group',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    location: 'Las Vegas, Nevada',
    rating: 5
  },
  {
    quote: "Trijen helped us navigate a competitive market and come out on top. Their team's strategic insights saved us thousands in ad spend while increasing conversions.",
    name: 'Daniel Garcia',
    role: 'Director of Growth, FitLife App',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    location: 'San Diego, California',
    rating: 5
  }
]

function ChevronLeft({ className }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight({ className }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(() => getVisibleCount())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    const onResize = () => {
      const newVisible = getVisibleCount()
      setVisible(newVisible)
      setCurrentIndex(0)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visible)
  const totalSlides = maxIndex + 1

  useEffect(() => {
    setCurrentIndex((idx) => Math.min(idx, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((idx) => (idx >= maxIndex ? 0 : idx + 1))
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay, maxIndex])

  const goPrev = () => {
    setAutoplay(false)
    setCurrentIndex((idx) => (idx <= 0 ? maxIndex : idx - 1))
    setTimeout(() => setAutoplay(true), 10000)
  }

  const goNext = () => {
    setAutoplay(false)
    setCurrentIndex((idx) => (idx >= maxIndex ? 0 : idx + 1))
    setTimeout(() => setAutoplay(true), 10000)
  }

  const goToSlide = (index) => {
    if (index === currentIndex) return
    setAutoplay(false)
    setCurrentIndex(index)
    setTimeout(() => setAutoplay(true), 10000)
  }

  const shown = useMemo(
    () => testimonials.slice(currentIndex, currentIndex + visible),
    [currentIndex, visible]
  )

  return (
    <section
      id="testimonials"
      className="overflow-hidden border-t border-neutral-200 bg-gradient-to-b from-white to-neutral-50 py-14 text-neutral-900 sm:py-16 lg:py-20"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 lg:px-4">
        <Reveal variant="up" blur durationMs={1000} className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <header>
            <p className="mb-3 text-11px font-bold uppercase tracking-3px text-brand-accent sm:text-xs">
              Testimonials
            </p>
            <h2 className="text-clamp-165 leading-tight tracking-tight font-bold text-neutral-900">
              What Our <span className="text-brand-accent">Clients Say</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-500 sm:text-base">
              Trusted by businesses across the United States
            </p>
          </header>
        </Reveal>

        <div className="flex flex-col gap-8 xl:flex-row xl:items-stretch xl:gap-5">
          <div className="hidden shrink-0 xl:flex xl:items-center">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white shadow-md transition hover:bg-brand-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-6">
              {shown.map((t, idx) => (
                <div
                  key={`${currentIndex}-${idx}`}
                  className="group relative transform rounded-2xl border border-neutral-100 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-xl sm:p-7"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <div className="absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-brand-accent">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <StarRating rating={t.rating} />
                  
                  <span
                    className="mb-4 mt-2 block font-serif text-52 leading-none text-brand-accent select-none sm:text-56"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  
                  <blockquote className="mb-6 flex-1 text-left text-15 leading-relaxed text-neutral-600 sm:text-base">
                    {t.quote}
                  </blockquote>
                  
                  <figcaption className="flex items-center gap-3 border-t border-neutral-100 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-brand-accent/20"
                      loading="lazy"
                    />
                    <div className="min-w-0 text-left">
                      <p className="text-15 font-bold text-neutral-900 sm:text-base">{t.name}</p>
                      <p className="text-sm text-neutral-500">{t.role}</p>
                      <div className="mt-0.5 flex items-center gap-1">
                        <svg className="h-3 w-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs text-neutral-400">{t.location}</span>
                      </div>
                    </div>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden shrink-0 xl:flex xl:items-center">
            <button
              type="button"
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white shadow-md transition hover:bg-brand-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'w-8 bg-brand-accent' 
                  : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to testimonial page ${i + 1}`}
              aria-current={i === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 overflow-hidden rounded-full bg-neutral-200">
            <div 
              className="h-full bg-brand-accent" 
              key={currentIndex}
              style={{
                animation: autoplay ? 'progress 5s linear forwards' : 'none',
                width: '100%'
              }}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes progress {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }
          
          .text-11px {
            font-size: 11px;
          }
          
          .tracking-3px {
            letter-spacing: 0.28em;
          }
          
          .text-clamp-165 {
            font-size: clamp(1.65rem, 4vw, 2.35rem);
          }
          
          .text-52 {
            font-size: 3.25rem;
          }
          
          .text-56 {
            font-size: 3.5rem;
          }
          
          .text-15 {
            font-size: 15px;
          }
          
          .shadow-card {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          }
        `}
      </style>
    </section>
  )
}