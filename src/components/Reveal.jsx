import { useEffect, useRef, useState } from 'react'

const VARIANT = {
  up: 'scroll-reveal--up',
  down: 'scroll-reveal--down',
  left: 'scroll-reveal--left',
  right: 'scroll-reveal--right',
  scale: 'scroll-reveal--scale',
}

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'up',
  blur = false,
  delayMs = 0,
  durationMs = 920,
  threshold = 0.12,
  rootMargin = '0px 0px -12% 0px',
  once = true,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [skipMotion, setSkipMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setSkipMotion(mq.matches)
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (skipMotion) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        if (once) obs.disconnect()
      },
      { threshold, rootMargin }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [skipMotion, once, threshold, rootMargin])

  const v = VARIANT[variant] ?? VARIANT.up
  const fx = blur ? 'scroll-reveal--fx' : ''

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${v} ${fx} ${visible ? 'scroll-reveal--visible' : ''} ${className}`.trim()}
      style={{
        '--sr-delay': `${delayMs}ms`,
        '--sr-duration': `${durationMs}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
