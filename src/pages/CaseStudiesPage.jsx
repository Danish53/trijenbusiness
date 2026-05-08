import CaseStudiesSection from '../components/CaseStudiesSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import PageShell from '../components/PageShell.jsx'

export default function CaseStudiesPage() {
  return (
    <main className="bg-brand-bg">
      <PageShell
        eyebrow="Case studies"
        title="Industries we serve"
        subtitle="Every vertical has different buying moments and trust barriers. Below is how Trijen addresses the real issue in each space—and how we help you win."
      />
      <CaseStudiesSection variant="full" />
      <TestimonialsSection />
    </main>
  )
}
