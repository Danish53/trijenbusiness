import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import imgaes from '../assets/contact.png'

export default function ContactPage() {
  return (
    <main className="bg-brand-bg">
      <PageShell
        eyebrow="Contact"
        title="Ready to Localize Your Business?"
        subtitle="Whether you have a question about our packages or you are ready to start your growth journey, our team is standing by."
      />

      <section className="border-t border-white/[0.06] px-2 py-14 sm:px-3 lg:px-4 lg:py-16" id="inquiry">
        <div className="mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-2 lg:gap-16">
        <img 
              src={imgaes}
              alt="Trijen Office" 
              className="w-full h-full object-cover"
            />  
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">Send a message</h2>
            <p className="mt-2 text-sm text-brand-muted sm:text-base">
              Fields are ready for you to wire to your backend or form service (e.g. Formspree, Netlify Forms).
            </p>
            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none ring-brand-accent/40 transition placeholder:text-white/35 focus:border-brand-accent/60 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none ring-brand-accent/40 transition placeholder:text-white/35 focus:border-brand-accent/60 focus:ring-2"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="msg" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/70">
                  How can we help?
                </label>
                <textarea
                  id="msg"
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none ring-brand-accent/40 transition placeholder:text-white/35 focus:border-brand-accent/60 focus:ring-2"
                  placeholder="Tell us about your goals, timeline and budget range."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(252,91,1,0.35)] transition hover:bg-brand-accent/90 sm:w-auto"
              >
                Submit inquiry
              </button>
            </form>
          </div>

         
        </div>
      </section>
    </main>
  )
}
