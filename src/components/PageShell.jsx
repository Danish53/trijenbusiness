export default function PageShell({ eyebrow, title, subtitle, dark = true, children }) {
  const bg = dark ? 'bg-brand-bg border-white/10' : 'bg-white border-neutral-200'
  const titleCls = dark ? 'text-white' : 'text-neutral-900'
  const subCls = dark ? 'text-brand-muted' : 'text-neutral-600'

  return (
    <>
      <section className={`border-b px-2 py-14 sm:px-3 sm:py-16 lg:px-4 ${bg}`}>
        <div className="mx-auto max-w-screen-xl">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-accent">{eyebrow}</p>
          <h1 className={`text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-tight tracking-tight ${titleCls}`}>
            {title}
          </h1>
          {subtitle ? <p className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${subCls}`}>{subtitle}</p> : null}
        </div>
      </section>
      {children}
    </>
  )
}
