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
  {
    label: 'Yelp',
    href: 'https://m.yelp.com/biz/trijen-business-solution-kansas-city',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden>
        <path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041zm2.86 3.742a.8523.8523 0 0 1-.111.4236c-.074.132-.178.2377-.3115.3172a.8428.8428 0 0 1-.4385.119.847.847 0 0 1-.4373-.1179.8526.8526 0 0 1-.3125-.3171.8548.8548 0 0 1-.111-.4248c0-.1526.038-.2958.1143-.4294a.8405.8405 0 0 1 .315-.3159.849.849 0 0 1 .4315-.1156.8514.8514 0 0 1 .4294.1144.84.84 0 0 1 .316.3148.8494.8494 0 0 1 .1156.4317zm-.1202 0c0-.1328-.0332-.256-.0996-.3698s-.1564-.2038-.2702-.2702a.7125.7125 0 0 0-.371-.1007.7204.7204 0 0 0-.3698.0996.7487.7487 0 0 0-.2713.2702.7181.7181 0 0 0-.0996.3709c0 .132.0332.2557.0996.371a.7355.7355 0 0 0 .2713.2713.7354.7354 0 0 0 .3698.0985.7205.7205 0 0 0 .3698-.0996.7423.7423 0 0 0 .2702-.2691.7186.7186 0 0 0 .1008-.3721zm-.577.0584.2724.4522h-.1922l-.237-.4052h-.1546v.4052h-.1695v-1.02h.2988c.1268 0 .2195.0247.2783.0744.0595.0496.0892.1252.0892.2267a.2785.2785 0 0 1-.0492.1625c-.032.0466-.0775.0813-.1362.1042zm-.0412-.1408a.1532.1532 0 0 0 .056-.1214c0-.0573-.0164-.0981-.0491-.1225-.0329-.0251-.0847-.0377-.1557-.0377h-.1214v.3285h.1237c.061 0 .1098-.0157.1465-.047z" />
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
                    className="h-46 rounded-md object-contain"
                  />
                </span>
              </Link>
              {/* <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent">
                Strategy. Growth. Success.
              </p> */}
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
                  <span className="text-white/85">Kansas City, MO 54119</span>
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
