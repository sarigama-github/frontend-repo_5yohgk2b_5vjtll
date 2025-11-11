import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(20,20%,98%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-3 py-1 text-xs text-foreground/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[hsl(200,70%,60%)]" /> AI for deeper connection
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Understand each other without saying a word
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-xl">
              Cuplix.ai decodes moods, daily behaviours, chats and voice signals to give you gentle, private insights and nudges—so you both feel seen, supported and in sync.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="inline-flex justify-center items-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[hsl(280,65%,60%)] to-[hsl(340,70%,65%)] shadow-lg shadow-[hsl(280,75%,70%)/30] hover:shadow-[hsl(280,75%,70%)/40] transition-all">
                Get the app
              </a>
              <a href="#features" className="inline-flex justify-center items-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-foreground bg-white/80 border border-foreground/10 hover:bg-white">
                See how it works
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-foreground/70 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(340,70%,65%)]" /> Private and secure</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(200,70%,60%)]" /> Built for couples</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(280,65%,60%)]" /> No therapy required</li>
            </ul>
          </div>
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden ring-1 ring-foreground/10 bg-gradient-to-br from-[#f5e9fb] to-[#faebf0]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
