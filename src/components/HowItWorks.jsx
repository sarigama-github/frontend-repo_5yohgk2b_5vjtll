export default function HowItWorks() {
  const steps = [
    {
      title: 'Connect together',
      desc: 'Create a private space for two and link your accounts securely.',
    },
    {
      title: 'Cuplix decodes gently',
      desc: 'With permission, it reads mood, chats and voice signals—never judging.',
    },
    {
      title: 'Get timely nudges',
      desc: 'Helpful reminders, check-ins and ideas to keep your spark alive.',
    },
  ]

  return (
    <section id="how" className="bg-gradient-to-b from-[#f5e9fb] to-[#faebf0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How it works</h2>
          <p className="mt-4 text-foreground/70">Simple, supportive, and built to fit into your real life—not add more work.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl p-6 bg-white border border-foreground/10 shadow-sm">
              <div className="absolute -top-3 left-6 inline-flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[hsl(280,65%,60%)] to-[hsl(340,70%,65%)]">
                {i + 1}
              </div>
              <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
