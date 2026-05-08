/**
 * Case studies hero images — digital marketing + speed / performance visuals.
 *
 * Use `?w=&q=&auto=format&fit=crop` first (matches working URLs elsewhere in the app).
 * Avoid `ixlib` here — it can cause 404s on some Unsplash CDN paths in browsers.
 *
 * @see https://unsplash.com/license
 */
function unsplashPhoto(idWithSlug) {
  return `https://images.unsplash.com/${idWithSlug}?w=1800&q=85&auto=format&fit=crop`
}

import image1 from "../assets/Home Health Care.png"
import image2 from "../assets/Transportation & Repair.png"
import image3 from "../assets/Construction & Home Services.png"
import image4 from "../assets/Salon & Spas.png"
import image5 from "../assets/Lawyers & Consultants.png"
import image6 from "../assets/Real Estate & Developers.png"
import image7 from "../assets/Contractors (General & Specialized).png"
import image8 from "../assets/Roofers.png"
import image9 from "../assets/HVAC.png"
import image10 from "../assets/Landscaping.png"

export const INDUSTRY_CASE_STUDIES = [
  {
    title: 'Healthcare Providers',
    issue:
      'Difficulty in building patient trust online and managing high competition for local "near me" searches.',
    help: 'We build authority through professional, HIPAA-compliant website design and SEO strategies that highlight your expertise and patient reviews, ensuring you are the first choice for local care.',
    image: image1,
    imageAlt: 'Team reviewing website analytics and performance metrics on a large monitor',
  },
  {
    title: 'Transportation & Repairing',
    issue:
      'Customers only search for you when they are in an emergency. If you aren\'t visible in that split second, you lose the job.',
    help: 'We dominate Local Map Packs and Google Local Services Ads so that when a vehicle breaks down, your phone is the one that rings.',
    image: image2,
    imageAlt: 'Car speedometer suggesting rapid response and local search urgency',
  },
  {
    title: 'Construction & Home Services',
    issue:
      'High-ticket projects require a long trust-building process. Owners often struggle to showcase their portfolio effectively.',
    help: 'We use cinematic content creation to showcase your craftsmanship and implement CRM systems to follow up with leads until the contract is signed.',
    image: image3,
    imageAlt: 'Laptop displaying marketing dashboards and campaign performance data',
  },
  {
    title: 'Salons & Spas',
    issue: 'High churn rates and empty booking calendars during weekdays.',
    help: 'We run hyper-local Meta Ads targeting your specific neighborhood with "First-Time Customer" offers and automated booking integrations.',
    image: image4,
    imageAlt: 'Modern salon interior suited to social ads and online booking',
  },
  {
    title: 'Lawyers & Consultants',
    issue: 'Extremely high cost-per-click in advertising and a "cold" professional image.',
    help: 'We focus on Content Authority and Video Strategy to humanize your firm, making you approachable while using precision SEO to lower your lead acquisition costs.',
    image: image5,
    imageAlt: 'Laptop on desk representing SEO, content strategy, and digital authority',
  },
  {
    title: 'Real Estate & Developers',
    issue: 'Poor quality leads and difficulty standing out in a crowded market.',
    help: 'We build high-converting landing pages for specific properties and use advanced Meta targeting to find people actively looking to move or invest.',
    image: image6,
    imageAlt: 'Property and keys visual for landing pages and targeted campaigns',
  },
  {
    title: 'Contractors (General & Specialized)',
    issue:
      'Spending too much time on "tire-kickers" (unqualified leads) and not enough on actual work.',
    help: 'Our CRM and Lead Management systems filter your leads for you, ensuring you only spend time on serious, high-value projects.',
    image: image7,
    imageAlt: 'Remote team with laptops representing CRM and qualified lead workflows',
  },
  {
    title: 'Roofers',
    issue: 'Relying on door-knocking or word-of-mouth, especially after storms.',
    help: 'We set up "Storm-Triggered" ad campaigns and GEO-targeted SEO so that as soon as a storm hits, your business is the local authority for repairs.',
    image: image8,
    imageAlt: 'Performance car speedometer symbolizing fast visibility and storm-response campaigns',
  },
  {
    title: 'HVAC',
    issue: 'Seasonal dips in revenue and fierce competition during peak summer/winter months.',
    help: 'We use Voice Search Optimization and Google PPC to capture emergency repair calls and build "Maintenance Plan" email funnels to keep your revenue steady year-round.',
    image: image9,
    imageAlt: 'HVAC equipment context for search, PPC, and seasonal demand',
  },
  {
    title: 'Landscapers',
    issue: 'Difficulty showing the visual transformation of their work and managing seasonal schedules.',
    help: 'We focus on Instagram/Facebook visual storytelling and localized SEO to ensure you own your specific service area before the busy season starts.',
    image: image10,
    imageAlt: 'Smartphone showing maps and local discovery for hyper-local SEO and ads',
  },
]
