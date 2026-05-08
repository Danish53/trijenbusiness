import ServicesSection from '../components/ServicesSection.jsx'
import StatsCounterSection from '../components/StatsCounterSection.jsx'
import PageShell from '../components/PageShell.jsx'

export default function ServicesPage() {
  return (
    <main className="bg-brand-bg">
      <PageShell
        eyebrow="Services"
        title="Digital marketing that scales with you"
        subtitle="From SEO and paid media to creative and websites—everything we deliver is built around your goals and transparent reporting."
      />
      <ServicesSection detailed />
      <StatsCounterSection />
    </main>
  )
}
