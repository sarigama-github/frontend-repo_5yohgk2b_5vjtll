export default function ValueProps() {
  const items = [
    {
      title: 'Fewer misunderstandings',
      desc: 'Gentle nudges and mood context reduce friction before it spirals.',
    },
    {
      title: 'Deeper daily connection',
      desc: 'Micro-moments that matter: check-ins, memories and acts of care.',
    },
    {
      title: 'Private shared space',
      desc: 'Your chats, gallery and memories in one secure place for two.',
    },
    {
      title: 'Proactive support',
      desc: 'Smart reminders when it counts—no therapy appointments needed.',
    },
  ]

  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">AI that gets your relationship</h2>
            <p className="mt-4 text-foreground/70">Cuplix.ai listens to signals—not just words. It reads patterns across your day and suggests better ways to care for each other. Always private. Always for both of you.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl p-5 bg-white border border-foreground/10 shadow-sm">
                <h3 className="font-semibold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
