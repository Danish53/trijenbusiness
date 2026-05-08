import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

const TEAM_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=82'

const features = [
  'Data-Driven Strategies',
  'Transparent Reporting',
  'Experienced & Certified Team',
  'Custom Solutions for Every Business',
  '24/7 Support & Communication',
]

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function WhyChooseUsSection() {
  return (
    <section
      id="about"
      className="border-t border-neutral-200 bg-white py-14 text-neutral-900 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-screen-xl gap-12 px-2 sm:gap-14 sm:px-3 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-4 xl:gap-20">
        <Reveal variant="left" blur durationMs={1050} threshold={0.11}>
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-accent sm:text-xs">
            Why choose us
          </p>
          <h2 className="mb-5 max-w-xl text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-neutral-900">
            We Drive <span className="text-brand-accent">Real Results</span>
          </h2>
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-neutral-600 sm:text-base">
            At Trijen Business Solutions, we don&apos;t just run campaigns – we build growth engines.
            Our strategies are data-driven, transparent and designed to deliver measurable results.
          </p>

          <ul className="mb-10 space-y-3.5 sm:space-y-4">
            {features.map((item, index) => (
              <li key={item}>
                <Reveal
                  variant="up"
                  delayMs={180 + index * 70}
                  durationMs={860}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand-accent shadow-[0_4px_14px_rgba(252,91,1,0.35)]"
                    aria-hidden
                  >
                    <CheckIcon />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-neutral-800 sm:text-base">
                    {item}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal variant="up" delayMs={520} durationMs={840}>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(252,91,1,0.38)] transition hover:bg-brand-accent/90"
          >
            Learn More About Us
            <ArrowRightIcon />
          </Link>
          </Reveal>
        </div>
        </Reveal>

        <Reveal
          variant="right"
          blur
          delayMs={160}
          durationMs={1080}
          threshold={0.1}
          className="relative pb-16 sm:pb-[4.5rem] lg:pb-10"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
            <div className="aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[5/4]">
              <img
                src={TEAM_IMAGE}
                alt="Team collaborating in a professional office setting"
                className="h-full w-full object-cover"
                width={1400}
                height={1120}
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-neutral-900/45" aria-hidden />

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <button
                type="button"
                className="pointer-events-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand-accent text-white shadow-[0_12px_40px_rgba(252,91,1,0.45)] ring-4 ring-white/25 transition hover:scale-105 hover:bg-brand-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:h-[78px] sm:w-[78px]"
                aria-label="Play introduction video"
              >
                <svg
                  className="ml-1"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9 7.5v9l8-4.5L9 7.5z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute bottom-2 right-4 z-10 max-w-[min(100%-2rem,17.5rem)] translate-y-[28%] rounded-xl border border-neutral-100 bg-white p-4 shadow-[0_16px_48px_rgba(0,0,0,0.14)] sm:bottom-3 sm:right-6 sm:translate-y-[22%] sm:p-5 lg:right-5">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-3xl font-black tracking-tight text-brand-accent sm:text-[2rem]">
                10+
              </span>
              <span className="text-[15px] font-bold leading-tight text-neutral-900 sm:text-base">
                Years of Experience
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500 sm:text-[13px]">
              Helping businesses grow online with proven strategies.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
