import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import { NAV_ITEMS } from '../nav.js'
import brandLogo from '../assets/logotras.png'
import logoHead from "../assets/logoHead.png"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const TOP = 48
    const DELTA = 12
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const onScroll = () => {
      const y = window.scrollY

      if (reduceMotion.matches || menuOpen) {
        setHeaderHidden(false)
        lastScrollY.current = y
        return
      }

      if (y <= TOP) {
        setHeaderHidden(false)
      } else if (y > lastScrollY.current + DELTA) {
        setHeaderHidden(true)
      } else if (y < lastScrollY.current - DELTA) {
        setHeaderHidden(false)
      }
      lastScrollY.current = y
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <div className="min-h-svh bg-brand-bg text-white antialiased">
      <ScrollToTop />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          headerHidden && !menuOpen ? '-translate-y-full pointer-events-none' : 'translate-y-0'
        }`}
      >
        {/* Smoky Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[80px]" />
        </div>

        {/* Border Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          {/* Logo with enhanced styling */}
          <Link to="/" className="group flex items-center" onClick={() => setMenuOpen(false)}>
            <div className="relative">
              {/* Logo glow effect */}
              <div className="absolute -inset-2 rounded-xl bg-brand-accent/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={logoHead}
                alt="Trijen Business Solution"
                className="relative h-14 rounded-lg object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-accent after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-brand-accent after:shadow-[0_0_8px_rgba(252,91,1,0.5)]'
                      : 'text-white/80 hover:text-brand-accent/90'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4"> 
            {/* Book a Free Call Button */}
            <Link
              to="/#book"
              className="group relative hidden rounded-lg bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(252,91,1,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(252,91,1,0.6)] hover:scale-105 md:inline-flex"
            >
              <span className="relative z-10">Book a Free Call</span>
              <div className="absolute inset-0 rounded-lg bg-brand-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white backdrop-blur-sm transition-all duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/10 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">Toggle menu</span>
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-nav"
          className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}
        >
          <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl">
            <nav className="flex flex-col gap-1 p-4">
              {NAV_ITEMS.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-accent/15 text-brand-accent'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))} 
              
              {/* Book a Free Call in mobile menu */}
              <Link
                to="/#book"
                className="mt-2 rounded-lg bg-brand-accent py-3 text-center text-sm font-semibold text-white shadow-[0_0_15px_rgba(252,91,1,0.3)] transition-all hover:shadow-[0_0_20px_rgba(252,91,1,0.5)]"
                onClick={() => setMenuOpen(false)}
              >
                Book a Free Call
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div aria-hidden className="shrink-0" style={{ height: 'var(--app-header-h, 5rem)' }} />

      <Outlet />

      <Footer />
    </div>
  )
}
