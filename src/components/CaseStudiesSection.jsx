import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { INDUSTRY_CASE_STUDIES } from '../data/caseStudiesIndustries.js'
import imgaes from '../assets/images.png'

const PREVIEW_COUNT = 3

const VISUAL_ORDER = [
  'healthcare',
  'legal',
  'realEstate',
  'restaurant',
  'ecommerce',
  'automotive',
  'homeServices',
  'wellness',
  'finance',
  'education',
  'logistics',
  'performance',
  'seo',
  'leads',
  'trust',
  'marketing',
]
const imagespic = [
  { test: imgaes },
];

const VISUAL_META = {
  healthcare: {
    eyebrow: 'Healthcare',
    headline: ['PATIENT', 'TRUST'],
    metric: 'Appointment-ready patient journeys',
    background:
      'radial-gradient(circle at 78% 32%, rgba(252,91,1,0.26), transparent 31%), linear-gradient(135deg, #020202 0%, #09090b 58%, #201009 100%)',
  },
  legal: {
    eyebrow: 'Legal Services',
    headline: ['LOCAL', 'AUTHORITY'],
    metric: 'Professional trust before the first call',
    background:
      'radial-gradient(circle at 76% 38%, rgba(252,91,1,0.24), transparent 32%), linear-gradient(135deg, #030303 0%, #101010 55%, #1a0b02 100%)',
  },
  realEstate: {
    eyebrow: 'Real Estate',
    headline: ['PROPERTY', 'LEADS'],
    metric: 'Clear listings, calls, and inquiries',
    background:
      'radial-gradient(circle at 72% 38%, rgba(252,91,1,0.28), transparent 34%), linear-gradient(135deg, #030303 0%, #0b0b0b 55%, #1d0c03 100%)',
  },
  restaurant: {
    eyebrow: 'Food & Dining',
    headline: ['BOOK', 'MORE'],
    metric: 'Menus, reservations, and local discovery',
    background:
      'radial-gradient(circle at 76% 38%, rgba(252,91,1,0.3), transparent 34%), linear-gradient(135deg, #030303 0%, #0a0908 54%, #211005 100%)',
  },
  ecommerce: {
    eyebrow: 'Ecommerce',
    headline: ['SELL', 'FASTER'],
    metric: 'Product pages built for checkout',
    background:
      'radial-gradient(circle at 78% 36%, rgba(252,91,1,0.24), transparent 32%), linear-gradient(135deg, #020202 0%, #0c0c0e 55%, #190802 100%)',
  },
  automotive: {
    eyebrow: 'Automotive',
    headline: ['DRIVE', 'CALLS'],
    metric: 'Service, inventory, and quote requests',
    background:
      'radial-gradient(circle at 78% 42%, rgba(252,91,1,0.28), transparent 34%), linear-gradient(135deg, #020202 0%, #090909 55%, #1d0902 100%)',
  },
  homeServices: {
    eyebrow: 'Home Services',
    headline: ['BOOKED', 'JOBS'],
    metric: 'Estimate requests without friction',
    background:
      'radial-gradient(circle at 76% 40%, rgba(252,91,1,0.27), transparent 33%), linear-gradient(135deg, #020202 0%, #0b0b0b 55%, #1d0b03 100%)',
  },
  wellness: {
    eyebrow: 'Wellness & Beauty',
    headline: ['CLIENT', 'GROWTH'],
    metric: 'Bookings, offers, and premium presence',
    background:
      'radial-gradient(circle at 76% 36%, rgba(252,91,1,0.25), transparent 33%), linear-gradient(135deg, #020202 0%, #0d0b0c 55%, #1d0905 100%)',
  },
  finance: {
    eyebrow: 'Finance',
    headline: ['CLEAR', 'VALUE'],
    metric: 'Trust-building pages for serious buyers',
    background:
      'radial-gradient(circle at 76% 36%, rgba(252,91,1,0.24), transparent 33%), linear-gradient(135deg, #020202 0%, #0b0c0d 55%, #180902 100%)',
  },
  education: {
    eyebrow: 'Education',
    headline: ['ENROLL', 'MORE'],
    metric: 'Programs, proof, and simple next steps',
    background:
      'radial-gradient(circle at 76% 36%, rgba(252,91,1,0.24), transparent 33%), linear-gradient(135deg, #020202 0%, #0a0a0c 55%, #1d0b03 100%)',
  },
  logistics: {
    eyebrow: 'Logistics',
    headline: ['MOVE', 'FASTER'],
    metric: 'Service clarity for quote requests',
    background:
      'radial-gradient(circle at 78% 40%, rgba(252,91,1,0.27), transparent 34%), linear-gradient(135deg, #020202 0%, #090909 55%, #1b0902 100%)',
  },
  performance: {
    eyebrow: 'Website Performance',
    headline: ['FAST', 'PAGES'],
    metric: 'Speed-first UX for fewer drop-offs',
    background:
      'radial-gradient(circle at 78% 42%, rgba(252,91,1,0.32), transparent 34%), linear-gradient(135deg, #020202 0%, #09090b 55%, #220900 100%)',
  },
  seo: {
    eyebrow: 'Search Visibility',
    headline: ['GOOGLE', 'READY'],
    metric: 'Search-ready structure and local visibility',
    background:
      'radial-gradient(circle at 78% 36%, rgba(252,91,1,0.26), transparent 33%), linear-gradient(135deg, #020202 0%, #0a0a0b 56%, #1e0a02 100%)',
  },
  leads: {
    eyebrow: 'Lead Generation',
    headline: ['MORE', 'LEADS'],
    metric: 'Conversion paths built for action',
    background:
      'radial-gradient(circle at 76% 38%, rgba(252,91,1,0.28), transparent 33%), linear-gradient(135deg, #020202 0%, #090909 56%, #200c03 100%)',
  },
  trust: {
    eyebrow: 'Brand Trust',
    headline: ['BUILD', 'TRUST'],
    metric: 'Proof, clarity, and buyer confidence',
    background:
      'radial-gradient(circle at 76% 38%, rgba(252,91,1,0.25), transparent 33%), linear-gradient(135deg, #020202 0%, #0b0b0b 56%, #1e0a02 100%)',
  },
  marketing: {
    eyebrow: 'Digital Growth',
    headline: ['SMART', 'GROWTH'],
    metric: 'Strategy, UX, and conversion together',
    background:
      'radial-gradient(circle at 76% 38%, rgba(252,91,1,0.25), transparent 33%), linear-gradient(135deg, #020202 0%, #09090b 56%, #1b0902 100%)',
  },
}

function normalizeText(value = '') {
  return String(value).replace(/\s+/g, ' ').trim()
}

function truncateText(value = '', max = 110) {
  const text = normalizeText(value)

  if (!text) return 'Clear design, faster pages, stronger trust, and better conversion paths.'
  if (text.length <= max) return text

  const cut = text.slice(0, max).replace(/\s+\S*$/, '')
  return `${cut || text.slice(0, max)}...`
}

function getVisualType(item, index) {
  const text = `${item?.title || ''} ${item?.issue || ''} ${item?.help || ''}`.toLowerCase()

  if (/(doctor|medical|health|clinic|dental|dentist|patient|chiro|therapy|hospital|urgent care)/.test(text)) {
    return 'healthcare'
  }

  if (/(law|legal|attorney|lawyer|court|firm|case|injury|immigration|criminal defense)/.test(text)) {
    return 'legal'
  }

  if (/(real\s*estate|realtor|property|broker|listing|home buyer|mortgage property|open house)/.test(text)) {
    return 'realEstate'
  }

  if (/(restaurant|food|cafe|coffee|bar|pizza|bakery|menu|reservation|dining|catering)/.test(text)) {
    return 'restaurant'
  }

  if (/(ecommerce|e-commerce|shop|retail|boutique|product|cart|checkout|store|online sale)/.test(text)) {
    return 'ecommerce'
  }

  if (/(auto|car|dealer|dealership|mechanic|vehicle|repair shop|collision|garage)/.test(text)) {
    return 'automotive'
  }

  if (/(roof|roofer|plumb|hvac|electric|contractor|construction|remodel|landscap|cleaning|pest|flooring|painting|home service)/.test(text)) {
    return 'homeServices'
  }

  if (/(gym|fitness|personal trainer|yoga|salon|spa|beauty|barber|wellness|med spa)/.test(text)) {
    return 'wellness'
  }

  if (/(finance|financial|accounting|accountant|insurance|tax|bookkeeping|loan|mortgage|wealth)/.test(text)) {
    return 'finance'
  }

  if (/(school|education|course|training|academy|university|college|tutor|learning|enroll)/.test(text)) {
    return 'education'
  }

  if (/(logistics|transport|truck|delivery|freight|shipping|moving|courier|warehouse)/.test(text)) {
    return 'logistics'
  }

  if (/(speed|slow|load|loading|performance|core web|pagespeed|lag|fast website)/.test(text)) {
    return 'performance'
  }

  if (/(seo|google|ranking|rank|search|visibility|map pack|local search|organic)/.test(text)) {
    return 'seo'
  }

  if (/(lead|leads|conversion|sales|inquiry|inquiries|calls|booking|bookings|quote|funnel)/.test(text)) {
    return 'leads'
  }

  if (/(trust|review|reviews|testimonial|credibility|brand|authority|proof|reputation)/.test(text)) {
    return 'trust'
  }

  return VISUAL_ORDER[index % VISUAL_ORDER.length]
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

function IndustryVisual({ item, index, alt, className = '', compact = false }) {
  const type = getVisualType(item, index)
  const meta = VISUAL_META[type] || VISUAL_META.marketing
  const layout = index % 4

  const layouts = compact
    ? [
        {
          icon: 'right-[-22%] top-[8%] h-[92%] w-[72%]',
          content: 'items-start text-left',
          title: 'max-w-[68%]',
          desc: 'max-w-[60%]',
          metric: 'self-start max-w-[78%]',
        },
        {
          icon: 'left-1/2 top-[16%] h-[92%] w-[78%] -translate-x-1/2 opacity-60',
          content: 'items-center text-center',
          title: 'mx-auto max-w-[88%]',
          desc: 'mx-auto max-w-[78%]',
          metric: 'self-center max-w-[88%]',
        },
        {
          icon: 'left-[-24%] top-[8%] h-[92%] w-[72%]',
          content: 'items-end text-right',
          title: 'ml-auto max-w-[68%]',
          desc: 'ml-auto max-w-[60%]',
          metric: 'self-end max-w-[78%]',
        },
        {
          icon: 'right-[-8%] bottom-[-22%] h-[88%] w-[72%]',
          content: 'items-start text-left',
          title: 'max-w-[74%]',
          desc: 'max-w-[64%]',
          metric: 'self-start max-w-[84%]',
        },
      ]
    : [
        {
          icon: 'right-[-18%] top-1/2 h-[105%] w-[72%] -translate-y-1/2',
          content: 'items-start text-left',
          title: 'max-w-[62%]',
          desc: 'max-w-[56%]',
          metric: 'self-start max-w-[68%]',
        },
        {
          icon: 'left-1/2 top-1/2 h-[112%] w-[82%] -translate-x-1/2 -translate-y-1/2 opacity-60',
          content: 'items-center text-center',
          title: 'mx-auto max-w-[86%]',
          desc: 'mx-auto max-w-[76%]',
          metric: 'self-center max-w-[82%]',
        },
        {
          icon: 'left-[-18%] top-1/2 h-[105%] w-[72%] -translate-y-1/2',
          content: 'items-end text-right',
          title: 'ml-auto max-w-[62%]',
          desc: 'ml-auto max-w-[56%]',
          metric: 'self-end max-w-[68%]',
        },
        {
          icon: 'right-[-8%] bottom-[-22%] h-[98%] w-[70%]',
          content: 'items-start text-left',
          title: 'max-w-[70%]',
          desc: 'max-w-[60%]',
          metric: 'self-start max-w-[76%]',
        },
      ]

  const selectedLayout = layouts[layout]
  const issueText = truncateText(item?.issue || item?.help, compact ? 78 : 118)

  return (
    <div
      role="img"
      aria-label={alt || `${item?.title || 'Case study'} visual`}
      className={`relative isolate overflow-hidden bg-black ${className}`}
    >
      <div className="absolute inset-0" style={{ background: meta.background }} />

      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: compact ? '34px 34px' : '44px 44px',
        }}
      />

      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border border-brand-accent/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-accent/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-28 rounded-tl-[2.2rem] bg-brand-accent/90 sm:h-32 sm:w-40" />

      <div
  className={`pointer-events-none absolute z-[1] text-brand-accent ${selectedLayout.icon}`}
>
  {imagespic.map((t, index) => (
    <img key={index} src={t.test} alt="" />
  ))}
</div>

      <div
        className={`relative z-[2] flex h-full flex-col justify-between ${
          compact ? 'p-4 sm:p-5' : 'p-5 sm:p-7 lg:p-8'
        } ${selectedLayout.content}`}
      >
        <div>
          <p
            className={`inline-flex rounded-full border border-brand-accent/45 bg-black/35 font-bold uppercase tracking-[0.2em] text-brand-accent backdrop-blur-sm ${
              compact ? 'px-2.5 py-1 text-[8px] sm:text-[9px]' : 'px-3 py-1.5 text-[9px] sm:text-[10px]'
            }`}
          >
            {meta.eyebrow}
          </p>

          <h3
            className={`break-words font-black uppercase leading-[0.92] tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.72)] ${
              compact
                ? 'mt-3 text-[clamp(1.05rem,4.1vw,2.05rem)]'
                : 'mt-5 text-[clamp(1.55rem,4vw,4rem)]'
            } ${selectedLayout.title}`}
          >
            <span className="block">{meta.headline[0]}</span>
            <span className="block text-brand-accent">{meta.headline[1]}</span>
          </h3>

          <p
            className={`leading-relaxed text-white/86 ${
              compact ? 'mt-3 text-[11px] line-clamp-2 sm:text-xs' : 'mt-5 text-sm line-clamp-3 sm:text-base'
            } ${selectedLayout.desc}`}
          >
            {issueText}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 font-semibold text-white/95 shadow-[0_12px_34px_rgba(0,0,0,0.28)] backdrop-blur-sm ${
            compact ? 'mt-4 px-3 py-2 text-[10px] sm:text-[11px]' : 'mt-6 px-4 py-3 text-xs sm:text-sm'
          } ${selectedLayout.metric}`}
        >
          <span
            className={`grid shrink-0 place-items-center rounded-full bg-brand-accent font-black text-white ${
              compact ? 'h-5 w-5 text-[10px]' : 'h-6 w-6 text-xs'
            }`}
          >
            ✓
          </span>
          <span className="line-clamp-1">{meta.metric}</span>
        </div>
      </div>
    </div>
  )
}

function VisualIcon({ type, className }) {
  switch (type) {
    case 'healthcare':
      // return <HealthcareIcon className={className} />
    //   <img 
    //   src={imgaes}
    //   alt="Trijen Office" 
    //   className="w-full h-full object-cover"
    // />  
    case 'legal':
      return <LegalIcon className={className} />
    case 'realEstate':
      return <RealEstateIcon className={className} />
    case 'restaurant':
      return <RestaurantIcon className={className} />
    case 'ecommerce':
      return <EcommerceIcon className={className} />
    case 'automotive':
      return <AutomotiveIcon className={className} />
    case 'homeServices':
      return <HomeServicesIcon className={className} />
    case 'wellness':
      return <WellnessIcon className={className} />
    case 'finance':
      return <FinanceIcon className={className} />
    case 'education':
      return <EducationIcon className={className} />
    case 'logistics':
      return <LogisticsIcon className={className} />
    case 'performance':
      return <PerformanceIcon className={className} />
    case 'seo':
      return <SeoIcon className={className} />
    case 'leads':
      return <LeadsIcon className={className} />
    case 'trust':
      return <TrustIcon className={className} />
    default:
      return <MarketingIcon className={className} />
  }
}

function PerformanceIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.34">
        <path d="M34 172h82" />
        <path d="M18 204h108" />
        <path d="M54 236h72" />
      </g>
      <path d="M70 214a110 110 0 0 1 220 0" stroke="rgba(255,255,255,0.18)" strokeWidth="18" strokeLinecap="round" />
      <path d="M70 214a110 110 0 0 1 178-86" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
      <path d="M275 146a110 110 0 0 1 15 68" stroke="#ff3000" strokeWidth="18" strokeLinecap="round" />
      <line x1="180" y1="214" x2="266" y2="132" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      <circle cx="180" cy="214" r="24" fill="rgba(0,0,0,0.7)" stroke="currentColor" strokeWidth="9" />
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.9">
        <line x1="180" y1="108" x2="180" y2="132" />
        <line x1="248" y1="136" x2="230" y2="154" />
        <line x1="106" y1="136" x2="124" y2="154" />
      </g>
    </svg>
  )
}

function SeoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="54" y="52" width="198" height="138" rx="24" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="4" />
      <circle cx="132" cy="118" r="33" stroke="currentColor" strokeWidth="12" />
      <line x1="156" y1="142" x2="196" y2="182" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
      <rect x="204" y="82" width="82" height="18" rx="9" fill="currentColor" opacity="0.75" />
      <rect x="204" y="116" width="58" height="18" rx="9" fill="rgba(255,255,255,0.22)" />
      <rect x="204" y="150" width="72" height="18" rx="9" fill="rgba(255,255,255,0.22)" />
      <path d="M82 216h190" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.55" />
      <circle cx="286" cy="62" r="28" fill="rgba(252,91,1,0.14)" stroke="currentColor" strokeWidth="5" />
      <path d="M276 62l8 8 16-18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LeadsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M70 48h220l-84 96v54l-52 26v-80L70 48Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
      <circle cx="114" cy="70" r="14" fill="currentColor" />
      <circle cx="180" cy="70" r="14" fill="currentColor" opacity="0.75" />
      <circle cx="246" cy="70" r="14" fill="currentColor" opacity="0.5" />
      <path d="M38 170h72m140-46h72M54 212h68" stroke="rgba(255,255,255,0.22)" strokeWidth="7" strokeLinecap="round" />
      <path d="M184 150v36" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M166 174l18 18 18-18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TrustIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M180 36l104 38v70c0 68-44 106-104 126C120 250 76 212 76 144V74l104-38Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
      <path d="M135 142l30 30 64-74" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="currentColor" opacity="0.85">
        <path d="M92 40l8 17 19 3-14 13 4 19-17-9-17 9 4-19-14-13 19-3 8-17Z" />
        <path d="M272 45l7 15 16 2-12 12 3 16-14-8-15 8 3-16-12-12 17-2 7-15Z" opacity="0.65" />
      </g>
      <rect x="50" y="188" width="82" height="42" rx="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="4" />
      <rect x="228" y="188" width="82" height="42" rx="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="4" />
    </svg>
  )
}

function HealthcareIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="62" y="54" width="170" height="136" rx="26" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="4" />
      <path d="M146 86v72M110 122h72" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      <path d="M72 214h220" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
      <path d="M214 132h28l14-34 22 70 16-36h32" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="236" y="52" width="72" height="56" rx="18" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="5" />
      <path d="M254 80h36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function LegalIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M180 38 70 88h220L180 38Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
      <path d="M94 98v92M138 98v92M222 98v92M266 98v92" stroke="rgba(255,255,255,0.24)" strokeWidth="12" strokeLinecap="round" />
      <path d="M68 198h224M52 226h256" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M180 104v74" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M128 126l-38 56h76l-38-56ZM232 126l-38 56h76l-38-56Z" fill="rgba(255,255,255,0.07)" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M126 126h108" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function RealEstateIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M54 136 180 44l126 92" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86 126v96h188v-96" fill="rgba(255,255,255,0.07)" />
      <path d="M86 126v96h188v-96" stroke="rgba(255,255,255,0.18)" strokeWidth="5" strokeLinejoin="round" />
      <rect x="136" y="156" width="46" height="66" rx="8" fill="rgba(252,91,1,0.14)" stroke="currentColor" strokeWidth="5" />
      <rect x="202" y="154" width="44" height="34" rx="8" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.18)" strokeWidth="4" />
      <path d="M272 64c26 0 46 20 46 46 0 34-46 78-46 78s-46-44-46-78c0-26 20-46 46-46Z" fill="rgba(252,91,1,0.14)" stroke="currentColor" strokeWidth="6" />
      <circle cx="272" cy="110" r="14" fill="currentColor" />
    </svg>
  )
}

function RestaurantIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="174" cy="144" r="72" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="5" />
      <circle cx="174" cy="144" r="42" stroke="currentColor" strokeWidth="8" />
      <path d="M70 64v88M50 64v88M90 64v88M50 108h40M70 152v70" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M292 62c22 30 20 70-4 94v66" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <rect x="222" y="54" width="78" height="110" rx="18" fill="rgba(252,91,1,0.12)" stroke="currentColor" strokeWidth="5" />
      <path d="M240 88h42M240 116h34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
      <path d="M120 226h110" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function EcommerceIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M102 94h156l-14 120H116L102 94Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
      <path d="M138 94c0-38 20-58 42-58s42 20 42 58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <rect x="42" y="54" width="74" height="58" rx="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.17)" strokeWidth="4" />
      <rect x="250" y="54" width="70" height="58" rx="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.17)" strokeWidth="4" />
      <path d="M62 82h34M270 82h30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
      <circle cx="142" cy="222" r="10" fill="currentColor" />
      <circle cx="220" cy="222" r="10" fill="currentColor" />
      <path d="M132 148h96M132 178h66" stroke="rgba(255,255,255,0.24)" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

function AutomotiveIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M72 166h216l-22-58c-6-16-20-26-38-26h-96c-18 0-32 10-38 26l-22 58Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
      <path d="M118 116h124l12 34H106l12-34Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="4" />
      <circle cx="118" cy="178" r="24" fill="rgba(0,0,0,0.6)" stroke="currentColor" strokeWidth="8" />
      <circle cx="242" cy="178" r="24" fill="rgba(0,0,0,0.6)" stroke="currentColor" strokeWidth="8" />
      <path d="M38 122h52M24 154h50M292 124h44M286 154h58" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
      <path d="M82 214h196" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function HomeServicesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M54 132 154 58l100 74" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M82 128v88h144v-88" fill="rgba(255,255,255,0.06)" />
      <path d="M82 128v88h144v-88" stroke="rgba(255,255,255,0.18)" strokeWidth="5" strokeLinejoin="round" />
      <path d="M240 58a38 38 0 0 0-42 50l-90 90 26 26 90-90a38 38 0 0 0 50-42l-24 24-34-34 24-24Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <path d="M118 158h54M118 184h36" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}

function WellnessIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="100" y="120" width="160" height="22" rx="11" fill="currentColor" />
      <rect x="56" y="100" width="34" height="62" rx="12" fill="rgba(252,91,1,0.15)" stroke="currentColor" strokeWidth="6" />
      <rect x="88" y="92" width="28" height="78" rx="12" fill="rgba(255,255,255,0.07)" stroke="currentColor" strokeWidth="5" />
      <rect x="270" y="100" width="34" height="62" rx="12" fill="rgba(252,91,1,0.15)" stroke="currentColor" strokeWidth="6" />
      <rect x="244" y="92" width="28" height="78" rx="12" fill="rgba(255,255,255,0.07)" stroke="currentColor" strokeWidth="5" />
      <path d="M180 52l10 22 24 4-17 17 4 24-21-12-21 12 4-24-17-17 24-4 10-22Z" fill="rgba(252,91,1,0.16)" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M96 212h168" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function FinanceIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="70" y="72" width="220" height="148" rx="24" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="5" />
      <rect x="106" y="152" width="28" height="42" rx="8" fill="currentColor" opacity="0.6" />
      <rect x="158" y="122" width="28" height="72" rx="8" fill="currentColor" opacity="0.8" />
      <rect x="210" y="94" width="28" height="100" rx="8" fill="currentColor" />
      <path d="M104 126l54-42 44 24 58-54" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M244 54h28v28" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="92" cy="58" rx="42" ry="18" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="5" />
      <path d="M50 58v34c0 10 18 18 42 18s42-8 42-18V58" stroke="currentColor" strokeWidth="5" />
    </svg>
  )
}

function EducationIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M70 84c48-18 82-14 110 10 28-24 62-28 110-10v128c-48-18-82-14-110 10-28-24-62-28-110-10V84Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="5" strokeLinejoin="round" />
      <path d="M180 94v128" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M104 120h44M104 150h54M212 120h44M212 150h54" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
      <path d="M180 38 66 82l114 44 114-44-114-44Z" fill="rgba(252,91,1,0.14)" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <path d="M256 98v50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="256" cy="160" r="10" fill="currentColor" />
    </svg>
  )
}

function LogisticsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="58" y="104" width="164" height="76" rx="18" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="7" />
      <path d="M222 126h50l36 34v20h-86v-54Z" fill="rgba(255,255,255,0.07)" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
      <circle cx="112" cy="190" r="22" fill="rgba(0,0,0,0.65)" stroke="currentColor" strokeWidth="8" />
      <circle cx="258" cy="190" r="22" fill="rgba(0,0,0,0.65)" stroke="currentColor" strokeWidth="8" />
      <path d="M42 72c50-34 96 18 144-14 44-30 78-18 112 16" stroke="rgba(255,255,255,0.22)" strokeWidth="7" strokeLinecap="round" strokeDasharray="12 14" />
      <path d="M300 72c0 24-30 52-30 52s-30-28-30-52a30 30 0 1 1 60 0Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="5" />
      <circle cx="270" cy="72" r="9" fill="currentColor" />
    </svg>
  )
}

function MarketingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="58" y="58" width="218" height="142" rx="24" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="5" />
      <rect x="84" y="88" width="70" height="44" rx="14" fill="rgba(252,91,1,0.14)" stroke="currentColor" strokeWidth="5" />
      <rect x="170" y="88" width="78" height="18" rx="9" fill="currentColor" opacity="0.75" />
      <rect x="170" y="122" width="54" height="18" rx="9" fill="rgba(255,255,255,0.22)" />
      <path d="M88 166h152" stroke="currentColor" strokeWidth="7" strokeLinecap="round" opacity="0.55" />
      <path d="M198 222h-62M166 200v22" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M260 154l46-46 18 18-46 46-34 14 16-32Z" fill="rgba(252,91,1,0.13)" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  )
}

/** Homepage card preview */
function IndustryPreviewCard({ item, index }) {
  const { title, issue, help, image, imageAlt } = item

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-brand-panel shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition hover:border-white/[0.12]">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-zinc-950">
        <img
          src={image}
          alt={imageAlt || `${title} case study image`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
        <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted line-clamp-4">{issue}</p>
        <p className="mt-3 text-sm font-medium leading-snug text-white/90 line-clamp-3">{help}</p>

        <div className="mt-5 flex flex-1 flex-col justify-end pt-2">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-accent/90"
          >
            Full playbook
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}

/** Case studies page: alternating image / copy */
function IndustryFullRow({ item, index }) {
  const { title, issue, help, image, imageAlt } = item
  const imageOnRight = index % 2 === 1

  return (
    <li>
      <Reveal variant="up" delayMs={Math.min(index * 60, 400)} durationMs={900} threshold={0.06} className="h-full">
        <article className="grid items-center gap-8 rounded-2xl border border-white/[0.07] bg-brand-panel/40 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.28)] sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <div
            className={`relative min-h-[220px] overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-950 sm:min-h-[280px] lg:min-h-[320px] ${
              imageOnRight ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <img
              src={image}
              alt={imageAlt || `${title} case study image`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className={`min-w-0 space-y-5 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-[1.65rem] lg:text-3xl">
              {title}
            </h3>

            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">The issue</p>
              <p className="text-base leading-relaxed text-brand-muted sm:text-[1.05rem]">{issue}</p>
            </div>

            <div className="space-y-1.5 border-t border-white/[0.08] pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">How Trijen helps</p>
              <p className="text-base leading-relaxed text-white/95 sm:text-[1.05rem]">{help}</p>
            </div>
          </div>
        </article>
      </Reveal>
    </li>
  )
}

/**
 * @param {{ variant?: 'grid' | 'full' }} props
 * - `grid` — home section: first N industry cards + CTA to /case-studies
 * - `full` — case studies page: all industries, image left/right alternating
 */
export default function CaseStudiesSection({ variant = 'grid' }) {
  const isFull = variant === 'full'
  const previewItems = INDUSTRY_CASE_STUDIES.slice(0, PREVIEW_COUNT)

  return (
    <section id="cases" className="border-t border-white/[0.06] bg-brand-bg py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 lg:px-4">
        <header className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <Reveal variant="up" blur durationMs={1000} className="max-w-2xl">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-accent sm:text-xs">
                Case studies
              </p>

              <h2 className="text-[clamp(1.65rem,4vw,2.45rem)] font-bold leading-tight tracking-tight text-white">
                INDUSTRIES <span className="text-brand-accent">WE SERVE</span>
              </h2>

              {!isFull ? (
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
                  Real scenarios we solve: trust, visibility, and leads—tailored by vertical. Open the case studies page for
                  the full list.
                </p>
              ) : null}
            </div>
          </Reveal>

          {!isFull ? (
            <Reveal variant="up" delayMs={110} durationMs={920} className="w-full lg:shrink-0 lg:w-auto">
              <Link
                to="/case-studies"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-accent/60 hover:bg-brand-accent/10 hover:text-white sm:w-auto sm:self-start lg:self-auto"
              >
                View All Case Studies
                <ArrowRightIcon />
              </Link>
            </Reveal>
          ) : null}
        </header>

        {isFull ? (
          <ul className="flex flex-col gap-10 lg:gap-12">
            {INDUSTRY_CASE_STUDIES.map((item, index) => (
              <IndustryFullRow key={item.title} item={item} index={index} />
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-8">
            {previewItems.map((item, index) => (
              <li key={item.title}>
                <Reveal variant="up" delayMs={index * 140} durationMs={940} threshold={0.08} className="h-full">
                  <IndustryPreviewCard item={item} index={index} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
