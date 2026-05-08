import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="text-brand-accent">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-.99L12 2z" />
    </svg>
  )
}

const PLANS = [
  {
    id: 'silver',
    name: 'SILVER',
    tagline: 'Strong foundation for local ranking momentum.',
    price: 'US$299',
    period: '/ Per Month',
    contract: '6 Months Minimum',
    keywords: '10 Keywords Ranking',
    features: [
      {
        title: 'SEO Strategy & Analysis',
        items: [
          'Research and Analysis',
          'Critical SEO Analysis',
          'Keyword Analysis',
          'Baseline Ranking Check',
          'Content Duplicacy Check',
          'Mobile Usability Check',
        ],
      },
      {
        title: 'On-Site SEO',
        items: [
          'Google & Bing Webmaster Setup',
          'Meta Tags Optimization',
          'Google Analytics Setup',
          'SEO Friendly URL Structure',
          'Unique Title Tags & Description Tags',
          'XML Sitemaps Creation',
          'Internal Link Navigation',
          'H Tags, Images, and Alt Tag Optimization',
          'Crawl Error Resolution',
          'Navigation Analysis',
        ],
      },
      {
        title: 'Off-Site & Content',
        items: [
          'Search Engine Submission',
          'Directory Submission',
          'Business Listing',
          'Content: 3 Articles (500 words each)',
        ],
      },
      {
        title: 'Reporting',
        items: ['Google Analytics Report', 'Keyword Ranking Report', 'Monthly Performance Report'],
      },
    ],
    cta: 'Choose Silver',
    highlighted: false,
  },
  {
    id: 'gold',
    name: 'GOLD',
    tagline: 'Accelerated growth with deeper optimization layers.',
    price: 'US$499',
    period: '/ Per Month',
    contract: '6 Months Minimum',
    keywords: '25 Keywords Ranking',
    features: [
      {
        title: 'SEO Strategy & Analysis',
        items: [
          'Everything in Silver Plus',
          '2 Competitor Analysis',
          'Back Link Analysis',
          'Website Speed Optimization',
        ],
      },
      {
        title: 'On-Site SEO',
        items: ['Everything in Silver Plus', 'Existing Content Optimization', 'Advanced Internal Linking Structure'],
      },
      {
        title: 'Off-Site & Content',
        items: ['Everything in Silver Plus', 'Guest Blog Posting: Up to 4 Posts Per Month', 'Content: 7 Articles (500 words each)'],
      },
      {
        title: 'Reporting',
        items: ['Google Analytics Report', 'Keyword Ranking Report', 'Monthly Performance Report'],
      },
    ],
    cta: 'Choose Gold',
    highlighted: true,
  },
  {
    id: 'platinum',
    name: 'PLATINUM',
    tagline: 'Enterprise-level SEO dominance and authority expansion.',
    price: 'US$849',
    period: '/ Per Month',
    contract: '6 Months Minimum',
    keywords: '50 Keywords Ranking',
    features: [
      {
        title: 'SEO Strategy & Analysis',
        items: ['Everything in Gold Plus', '5 Competitor Analysis', 'Deep-Dive Critical SEO Audit'],
      },
      {
        title: 'On-Site SEO',
        items: ['Everything in Gold Plus', 'Full-Scale Website Speed & Performance Optimization', 'Advanced Schema Markup Integration'],
      },
      {
        title: 'Off-Site & Content',
        items: ['Everything in Gold Plus', 'Guest Blog Posting: Up to 8 Posts Per Month', 'Press Release Writing', 'Content: 10+ High-Authority Articles'],
      },
    ],
    cta: 'Choose Platinum',
    highlighted: false,
  },
]

export default function PackagesPage() {
  return (
    <main className="relative bg-brand-bg text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_85%_-15%,rgba(252,91,1,0.22),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(252,91,1,0.06),transparent_45%)]" />
      </div>

      <section className="relative px-4 pb-6 pt-14 text-center sm:px-6 sm:pb-8 sm:pt-16 lg:px-10 lg:pt-20">
        <Reveal variant="up" blur durationMs={920} className="mx-auto max-w-3xl">
          <h1 className="text-[clamp(1.85rem,4.5vw,2.75rem)] font-black leading-tight tracking-tight text-white">
            Flexible Plans. Scalable Growth.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Choose the level of support your business needs to dominate the local market.
          </p>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {PLANS.map((plan, index) => (
            <Reveal
              key={plan.id}
              variant="up"
              delayMs={index * 100}
              durationMs={880}
              threshold={0.08}
              className={`relative flex h-full ${plan.highlighted ? 'xl:-mt-2' : ''}`}
            >
              <article
                className={`relative flex h-full w-full flex-col rounded-2xl border px-6 pb-8 pt-10 text-left transition-shadow sm:px-7 sm:pb-9 sm:pt-11 ${
                  plan.highlighted
                    ? 'border-2 border-brand-accent bg-brand-panel/95 shadow-[0_0_50px_rgba(252,91,1,0.28),0_20px_50px_rgba(0,0,0,0.45)] motion-safe:shadow-[0_0_60px_rgba(252,91,1,0.32)]'
                    : 'border border-white/[0.09] bg-white/[0.04] shadow-[0_16px_48px_rgba(0,0,0,0.35)] hover:border-white/[0.14]'
                }`}
              >
                {plan.highlighted ? (
                  <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-brand-accent px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_28px_rgba(252,91,1,0.55)]">
                    <StarIcon className="opacity-95" />
                    Most popular
                  </div>
                ) : null}

                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">{plan.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-[15px]">{plan.tagline}</p>

                <div className="mt-7 flex flex-wrap items-baseline gap-x-1 gap-y-1">
                  <span className="text-3xl font-black tracking-tight text-white sm:text-[2.15rem]">{plan.price}</span>
                  {plan.period ? (
                    <span className="text-sm font-medium text-brand-muted">{plan.period}</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-white/80">{plan.contract}</p>
                <p className="mt-1 text-sm font-medium text-brand-accent">{plan.keywords}</p>

                <div className="mt-7 flex flex-1 flex-col gap-5 border-t border-white/[0.08] pt-7">
                  {plan.features.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/95">{group.title}</h3>
                      <ul className="mt-3 flex flex-col gap-2.5">
                        {group.items.map((line) => (
                          <li key={line} className="flex gap-3 text-sm leading-snug text-white/85 sm:text-[15px]">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/12 ring-1 ring-brand-accent/35">
                              <CheckIcon />
                            </span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  state={{ plan: plan.name }}
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-center text-sm font-semibold transition sm:text-[15px] ${
                    plan.highlighted
                      ? 'bg-brand-accent text-white shadow-[0_8px_32px_rgba(252,91,1,0.42)] hover:bg-brand-accent/90'
                      : 'border border-white/12 bg-white/[0.07] text-white hover:border-brand-accent/40 hover:bg-brand-accent/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
