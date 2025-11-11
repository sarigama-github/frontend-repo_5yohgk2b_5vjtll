export default function FAQ() {
  const items = [
    {
      q: 'Is our data private?',
      a: 'Yes. Your shared space is encrypted and only visible to you and your partner. We never sell data.',
    },
    {
      q: 'Do we both need the app?',
      a: 'Cuplix works best when both partners join. You can invite your partner after you sign up.',
    },
    {
      q: 'Is this therapy?',
      a: 'No. It is proactive support for everyday connection, not a medical service.',
    },
  ]

  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-foreground/10 rounded-2xl border border-foreground/10 bg-white">
          {items.map((it) => (
            <details key={it.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-foreground font-medium">
                {it.q}
                <span className="ml-4 inline-block rounded-full bg-foreground/5 px-2 py-0.5 text-xs text-foreground/60 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-foreground/70">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
