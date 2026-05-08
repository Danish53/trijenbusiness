import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { NAV_ITEMS } from '../nav.js'
import brandLogo from '../assets/logotras.png'

const serviceLinks = [
  { label: 'SEO Services', path: '/services' },
  { label: 'Social Media Marketing', path: '/services' },
  { label: 'Google Ads & PPC', path: '/services' },
  { label: 'Website Design', path: '/services' },
  { label: 'Branding & Design', path: '/services' },
  { label: 'Content Marketing', path: '/services' },
]
// ok

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61588825226515',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05H7.9V12h2.65V9.8c0-2.62 1.6-4.06 4-4.06 1.14 0 2.35.2 2.35.2v2.59h-1.33c-1.31 0-1.72.81-1.72 1.64V12h2.93l-.47 2.9h-2.46v7.05A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/trijenofficial',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5h.01a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/trijen-business-solution/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.07c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.59-2.34 3.22V23h-4V8z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/Trijenofficial',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2H21l-7.08 8.1L22 22h-6.68l-5.23-6.34L5.78 22H3l7.58-8.66L2 2h6.75l4.73 5.77L18.244 2zm-2.38 18h2.12L8.12 4H5.88l10.98 16z" />
      </svg>
    ),
  },
]

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

function HandDrawnArrow({ className }) {
  return (
    <svg
      className={className}
      width="120"
      height="72"
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 52 C28 12 72 8 98 28 C108 36 112 44 108 52"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <path
        d="M100 42 L108 52 L96 56"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-bg text-white">
      <section
        id="book"
        className="relative overflow-hidden bg-brand-accent px-2 py-12 sm:px-3 sm:py-14 lg:px-4 lg:py-16"
      >
        <div className="relative mx-auto flex max-w-screen-xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <HandDrawnArrow className="pointer-events-none absolute right-[18%] top-[10%] hidden opacity-90 xl:block 2xl:right-[22%]" />

          <Reveal variant="left" blur durationMs={960} className="relative w-full max-w-xl text-center lg:text-left">
            <div>
              <h2 className="text-[clamp(1.65rem,4vw,2.35rem)] font-black leading-tight tracking-tight text-white">
                Ready to Grow Your Business?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/95 sm:text-lg">
                Let&apos;s create a winning strategy for your business.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delayMs={140} durationMs={920} className="w-full lg:w-auto">
            <a
              href="tel:+18162709720"
              className="relative inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition hover:bg-black sm:w-auto lg:px-8 lg:py-4 lg:text-[15px]"
            >
              Book a Free Call
              <ArrowRightIcon />
            </a>
          </Reveal>
        </div>
      </section>

      <div id="contact" className="border-t border-white/[0.06] px-2 py-14 sm:px-3 lg:px-4 lg:py-16">
        <Reveal variant="up" blur durationMs={1020} threshold={0.1}>
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-10 xl:gap-12">
            <div className="md:col-span-2 lg:col-span-1">
              <Link to="/" className="inline-flex items-center">
                <span className=" ">
                  <img
                    src={brandLogo}
                    alt="Trijen Business Solution"
                    className="h-16 w-{50px} rounded-md object-contain sm:h-20"
                  />
                </span>
              </Link>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                Strategy. Growth. Success.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                We help businesses grow online with smart strategies, creative ideas and result-driven marketing
                solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-white ring-1 ring-white/[0.08] transition hover:bg-brand-accent/15 hover:text-brand-accent hover:ring-brand-accent/40"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Quick links">
              <h3 className="text-base font-bold text-white">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {NAV_ITEMS.map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path} className="text-white/85 transition hover:text-brand-accent">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Our services">
              <h3 className="text-base font-bold text-white">Our Services</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {serviceLinks.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path} className="text-white/85 transition hover:text-brand-accent">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="not-italic md:col-span-2 lg:col-span-1">
              <h3 className="text-base font-bold text-white">Contact Us</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h2a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <a href="tel:+18162709720" className="text-white/90 hover:text-brand-accent">
                    816-270-9720
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4h16v16H4V4zm4 4 8 5-8 5V8z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <a href="mailto:info@trijen.co" className="font-medium text-brand-accent hover:text-brand-accent/90">
                    info@trijen.co
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-brand-accent" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                  <span className="text-white/85">5394 N Richmond Ave Kansas City, MO 54119</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[#25D366]" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </span>
                  <a
                    href="https://wa.me/18162709720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/[0.08] px-2 py-6 sm:px-3 lg:px-4">
        {/* <Reveal> */}
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 text-center text-xs text-white/50 sm:flex-row sm:text-left md:text-sm">
          <p>© {new Date().getFullYear()} Trijen Business Solutions. All Rights Reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-end">

          </p>
        </div>
        {/* </Reveal> */}
      </div>

      <a
        href="https://wa.me/18162709720"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] ring-1 ring-white/20 transition hover:scale-105 hover:bg-[#20bd5c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:bottom-6 sm:right-6"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 1 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  )
}
