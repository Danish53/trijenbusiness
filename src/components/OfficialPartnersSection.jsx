import Reveal from './Reveal.jsx'

/** Monochrome boxed tiles */
function TileShell({ children, className = '' }) {
  return (
    <div
      className={`flex min-h-[112px] items-center justify-center bg-black px-3 py-5 sm:min-h-[120px] sm:px-4 sm:py-6 ${className}`}
    >
      {children}
    </div>
  )
}

function ShopifyPlusTile() {
  return (
    <TileShell>
      <div className="text-center text-white">
        <p className="font-black italic leading-tight tracking-tight text-[0.95rem] text-white sm:text-[1.08rem]">
          shopify <span className="font-black not-italic">plus</span>
        </p>
        <p className="mt-1 text-[10px] font-normal tracking-[0.14em] text-white/65">partner</p>
      </div>
    </TileShell>
  )
}

function GooglePartnerTile() {
  return (
    <TileShell>
      <div className="flex items-center gap-3 text-white">
        <span className="h-11 w-[5px] shrink-0 rounded-[1px] bg-white sm:h-12" aria-hidden />
        <div className="leading-[1.05]">
          <span className="block text-lg font-medium tracking-tight sm:text-xl">Google</span>
          <span className="block text-sm font-normal text-white/75">Partner</span>
        </div>
      </div>
    </TileShell>
  )
}

function WooExpertTile() {
  return (
    <TileShell>
      <div className="relative flex h-[88px] w-[88px] shrink-0 flex-col items-center justify-center rounded-full border border-white/25 bg-transparent text-white sm:h-[92px] sm:w-[92px]">
        <span className="absolute inset-x-2 top-2 text-center text-[6px] font-bold uppercase leading-none tracking-[0.06em] text-white/55">
          Verified WooExpert
        </span>
        <span className="font-black tracking-[0.08em] text-white">WOO</span>
      </div>
    </TileShell>
  )
}

function WordPressVipTile() {
  return (
    <TileShell className="px-2 sm:px-3">
      <div className="w-full max-w-[200px] border border-white/18 px-2.5 py-2.5">
        <div className="flex items-start gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/22">
            <span className="font-serif text-lg font-semibold leading-none text-white">W</span>
          </div>
          <div className="min-w-0 pt-0.5">
            <span className="font-serif text-xl font-bold lowercase tracking-tight text-white">vip</span>
            <p className="mt-1 text-[7px] font-semibold uppercase leading-snug tracking-[0.04em] text-white/72">
              Silver Agency
              <br />
              Partner
            </p>
          </div>
        </div>
      </div>
    </TileShell>
  )
}

function TrustpilotTile() {
  return (
    <TileShell>
      <div className="flex items-center gap-2.5 text-white">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden className="shrink-0 text-white">
          <path
            fill="currentColor"
            d="M14 3.5 17.2 10h7.3l-5.9 4.3 2.3 7.1L14 17.9l-5.9 4.5 2.3-7.1L4.5 10h7.3L14 3.5z"
            opacity={0.95}
          />
        </svg>
        <span className="text-base font-semibold tracking-tight sm:text-[1.05rem]">Trustpilot</span>
      </div>
    </TileShell>
  )
}

export default function OfficialPartnersSection() {
  return (
    <section 
      className="border-y border-white/[0.08] bg-black py-8 sm:py-10" 
      aria-labelledby="official-partners-heading"
    >
      <div className="mx-auto max-w-screen-xl px-2 sm:px-3 lg:px-4">
        <Reveal variant="up" durationMs={720} threshold={0.15}>
          <h2 className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-white/40 sm:text-xs">
            Official Partners
          </h2>
        </Reveal>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden py-6">
          <div className="flex animate-marquee gap-6 whitespace-nowrap">
            <ShopifyPlusTile />
            <GooglePartnerTile />
            <WooExpertTile />
            <WordPressVipTile />
            <TrustpilotTile />

            {/* Duplicate for seamless loop */}
            <ShopifyPlusTile />
            <GooglePartnerTile />
            <WooExpertTile />
            <WordPressVipTile />
            <TrustpilotTile />
          </div>
        </div>
      </div>
    </section>
  )
}