import { useEffect, useId, useMemo, useState, useSyncExternalStore } from 'react'

/**
 * Custom SVG hero chart — no Recharts (avoids missing deps + smaller bundle).
 */

const VB = { w: 560, h: 300 }

/** Matches --color-brand-accent */
const BRAND_ORANGE = '#FC5B01'
const BRAND_ORANGE_STROKE = '#FC5B01'

const LINE_DRAW_MS = 2350
/** Tip x on local +X; motion path uses `translate(-ARROW_TIP_X, 0)` so tip sits on the path */
const ARROW_TIP_X = 16

function subscribeReducedMotion(cb) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )
}

function normExp(t, k) {
  return (Math.exp(t * k) - 1) / (Math.exp(k) - 1)
}

function buildSeries(n, inner, gapRatio = 0.026) {
  const innerW = inner.right - inner.left
  const gap = Math.max(6, innerW * gapRatio)
  const barW = (innerW - gap * (n - 1)) / n

  const bars = []
  const anchors = []

  for (let i = 0; i < n; i++) {
    const t = n === 1 ? 0 : i / (n - 1)
    const x = inner.left + i * (barW + gap)
    const cx = x + barW / 2

    const barH = 24 + normExp(t, 2.35) * 146
    const barTop = inner.bottom - barH

    const lineY =
      inner.bottom -
      30 -
      normExp(t, 3.05) * (inner.bottom - inner.top - 46)

    bars.push({ x, cx, y: barTop, w: barW, h: barH })
    anchors.push({
      x: cx,
      y: Math.min(lineY, barTop - 12),
    })
  }

  return { bars, anchors, barW, gap }
}

function densifyPath(anchors) {
  const pts = []
  for (let i = 0; i < anchors.length - 1; i++) {
    const a = anchors[i]
    const b = anchors[i + 1]
    const steps = 16
    for (let s = 0; s < steps; s++) {
      const u = s / steps
      const ease = u * u * (3 - 2 * u)
      pts.push({
        x: a.x + (b.x - a.x) * u,
        y: a.y + (b.y - a.y) * ease,
      })
    }
  }
  pts.push(anchors[anchors.length - 1])
  return pts
}

function pointsToPath(points) {
  if (!points.length) return ''
  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`
  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x.toFixed(2)} ${points[i].y.toFixed(2)}`
  }
  return d
}

/** Tip at +X on horizontal axis; vertical rear edge keeps wings symmetric */
function ArrowHeadShape() {
  return (
    <path
      d={`M ${ARROW_TIP_X} 0 L -10 -10 L -10 10 Z`}
      fill={BRAND_ORANGE}
      stroke={BRAND_ORANGE_STROKE}
      strokeWidth={0.85}
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      strokeLinecap="butt"
      shapeRendering="geometricPrecision"
      style={{
        filter:
          'drop-shadow(0 0 18px rgba(252,91,1,1)) drop-shadow(0 0 36px rgba(252,91,1,0.55)) drop-shadow(0 0 52px rgba(252,91,1,0.28))',
      }}
    />
  )
}

/** Arrow tip locked to `last`; points straight up (−Y in SVG) after growth reaches the top */
function ArrowHeadAtRest({ last }) {
  return (
    <g transform={`translate(${last.x},${last.y}) rotate(320)`}>
      <g transform={`translate(-${ARROW_TIP_X}, 0)`}>
        <ArrowHeadShape />
      </g>
    </g>
  )
}

export default function HeroChart() {
  const uid = useId().replace(/:/g, '')
  const filterId = `heroGlow-${uid}`
  const barGradId = `heroBars-${uid}`
  const motionPathId = `heroMotion-${uid}`
  const reduceMotion = usePrefersReducedMotion()
  const [motionDone, setMotionDone] = useState(reduceMotion)

  useEffect(() => {
    if (reduceMotion) return
    const t = window.setTimeout(() => setMotionDone(true), LINE_DRAW_MS)
    return () => window.clearTimeout(t)
  }, [reduceMotion])

  const { bars, anchors, pathD } = useMemo(() => {
    const inner = { left: 54, right: 506, top: 40, bottom: 246 }
    const { bars: b, anchors: a } = buildSeries(11, inner)
    const dense = densifyPath(a)
    return { bars: b, anchors: a, pathD: pointsToPath(dense) }
  }, [])

  const gridLines = useMemo(() => {
    const lines = []
    const step = 26
    for (let x = 48; x <= VB.w - 44; x += step) {
      lines.push(
        <line
          key={`gv-${x}`}
          x1={x}
          x2={x}
          y1={34}
          y2={VB.h - 28}
          stroke="#3f3026"
          strokeOpacity={0.35}
          strokeWidth={0.65}
        />,
      )
    }
    for (let y = 42; y <= VB.h - 36; y += step) {
      lines.push(
        <line
          key={`gh-${y}`}
          x1={46}
          x2={VB.w - 46}
          y1={y}
          y2={y}
          stroke="#3f3026"
          strokeOpacity={0.28}
          strokeWidth={0.65}
        />,
      )
    }
    return lines
  }, [])

  const last = anchors[anchors.length - 1]

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg h-[550px]">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.55]"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 85% 55% at 52% 58%, rgba(252,91,1,0.22) 0%, rgba(252,91,1,0.06) 42%, transparent 72%)',
        }}
      />


      <svg
        className="relative z-[1] block aspect-[560/300] w-full max-w-full h-[550px] drop-shadow-[0_0_42px_rgba(252,91,1,0.12)]"
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Growth chart showing rising performance metrics"
      >
        <defs>
          {/* Soft glow on main trend stroke (orange blur + sharp line) */}
          <filter id={`${filterId}-soft`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id={barGradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,148,77,0.62)" />
            <stop offset="52%" stopColor="rgba(252,91,1,0.18)" />
            <stop offset="100%" stopColor="rgba(90,42,12,0.06)" />
          </linearGradient>

          {/* Invisible geometry for arrow motion (same as visible trend line) */}
          <path id={motionPathId} d={pathD} fill="none" stroke="none" />
        </defs>

        <g aria-hidden>{gridLines}</g>

        <g>
          {bars.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx={5}
              ry={5}
              fill={`url(#${barGradId})`}
              stroke="rgba(252,91,1,0.16)"
              strokeWidth={1}
              className="hero-chart-bar"
              style={{ animationDelay: `${0.08 + i * 0.055}s` }}
            />
          ))}
        </g>

        <path
          d={pathD}
          stroke="rgba(252,91,1,0.52)"
          strokeWidth={14}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="hero-chart-line hero-chart-line-bloom"
          style={{
            filter: `drop-shadow(0 0 22px rgba(252,91,1,0.45)) drop-shadow(0 0 44px rgba(252,91,1,0.22))`,
          }}
        />

        <path
          d={pathD}
          stroke={BRAND_ORANGE}
          strokeWidth={4.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="hero-chart-line hero-chart-path"
          style={{
            filter: `url(#${filterId}-soft) drop-shadow(0 0 14px rgba(252,91,1,0.95)) drop-shadow(0 0 28px rgba(252,91,1,0.55)) drop-shadow(0 0 48px rgba(252,91,1,0.28))`,
          }}
        />

        {anchors.slice(0, -1).map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={4.25}
            fill={BRAND_ORANGE}
            stroke="#1f1510"
            strokeWidth={1}
            style={{
              filter:
                'drop-shadow(0 0 10px rgba(252,91,1,1)) drop-shadow(0 0 20px rgba(252,91,1,0.55)) drop-shadow(0 0 32px rgba(252,91,1,0.25))',
            }}
          />
        ))}

        {reduceMotion || motionDone ? (
          <ArrowHeadAtRest last={last} />
        ) : (
          <g>
            <animateMotion
              dur={`${LINE_DRAW_MS / 1000}s`}
              fill="freeze"
              rotate="auto"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.33 1 0.68 1"
            >
              <mpath href={`#${motionPathId}`} />
            </animateMotion>
            <g transform={`translate(-${ARROW_TIP_X}, 0)`}>
              <ArrowHeadShape />
            </g>
          </g>
        )}
      </svg>
    </div>
  )
}
