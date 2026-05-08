import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const ACCENT = '#FC5B01'

function IconHappyClients({ className }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="14" cy="16" r="5" stroke={ACCENT} strokeWidth="2.2" />
      <path d="M7 30c0-4 3.5-7 7-7s7 3 7 7" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="34" cy="16" r="5" stroke={ACCENT} strokeWidth="2.2" />
      <path d="M27 30c0-4 3.5-7 7-7 3 0 5.5 1.8 6.5 4.5" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="13" r="4.5" stroke={ACCENT} strokeWidth="2.2" />
      <path d="M17 27c1.2-3 3.8-5 7-5s5.8 2 7 5" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function IconGrowthChart({ className }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 38h32M8 38V12" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M12 34v-10h7v10h7V18h7v16h7"
        stroke={ACCENT}
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M12 28c5-5 10-8 17-9 5-.8 10 .5 15 4"
        stroke={ACCENT}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M41 15l4-2v7h-7l3-5z" fill={ACCENT} />
    </svg>
  )
}

function IconTrophy({ className }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M17 10h14v7a7 7 0 0 1-14 0v-7Z"
        stroke={ACCENT}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M13 14H9v3a4 4 0 0 0 4 4h1M35 14h4v3a4 4 0 0 1-4 4h-1" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 24v7M19 38h10v3H19v-3Z" stroke={ACCENT} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

function AnimatedStat({ target, suffix, started, instant }) {
  const [display, setDisplay] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!started) {
      setDisplay(0)
      return
    }

    if (instant) {
      setDisplay(target)
      return
    }

    const duration = 1900
    let startTime = null

    const tick = (now) => {
      if (startTime === null) startTime = now
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      setDisplay(Math.round(easeOutCubic(t) * target))
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [target, started, instant])

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

const STATS = [
  {
    key: 'clients',
    icon: IconHappyClients,
    target: 200,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    key: 'projects',
    icon: IconGrowthChart,
    target: 350,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    key: 'satisfaction',
    icon: IconTrophy,
    target: 98,
    suffix: '%',
    label: 'Client Satisfaction',
  },
  {
    key: 'roi',
    icon: IconGrowthChart,
    target: 250,
    suffix: '%',
    label: 'Average ROI Growth',
  },
]

export default function StatsCounterSection() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.22, rootMargin: '0px 0px -32px 0px' }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const started = inView
  const instant = reducedMotion

  return (
    <section
      ref={sectionRef}
      aria-label="Company statistics"
      className="border-t border-white/[0.06] bg-brand-bg py-11 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ key, icon: Icon, target, suffix, label }, index) => {
            const bottomMobile = index < STATS.length - 1 ? 'border-b border-white/[0.08]' : ''
            const bottomSm =
              index < 2 ? 'sm:border-b sm:border-white/[0.08]' : 'sm:border-b-0'
            const rightSm = index % 2 === 0 ? 'sm:border-r sm:border-white/[0.08]' : ''
            const rightLg =
              index < STATS.length - 1 ? 'lg:border-r lg:border-white/[0.08]' : ''

            return (
              <div
                key={key}
                className={`flex items-center gap-4 py-7 sm:gap-5 sm:py-6 lg:min-h-[5.5rem] lg:border-b-0 lg:py-4 lg:pr-6 xl:pr-10 ${bottomMobile} ${bottomSm} ${rightSm} ${rightLg}`}
              >
                <Reveal
                  variant="scale"
                  delayMs={index * 120}
                  durationMs={880}
                  threshold={0.15}
                  className="flex w-full items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-[52px] sm:w-[52px]">
                    <Icon className="h-full w-full max-h-[48px] max-w-[48px]" />
                  </span>
                  <div className="min-w-0 text-left">
                    <p className="text-[clamp(1.85rem,4vw,2.45rem)] font-black leading-none tracking-tight text-white">
                      <AnimatedStat
                        target={target}
                        suffix={suffix}
                        started={started}
                        instant={instant}
                      />
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/90 sm:text-[15px]">{label}</p>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
