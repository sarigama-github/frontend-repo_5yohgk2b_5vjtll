import { Apple, Android } from 'lucide-react'

export default function CTA() {
  return (
    <section id="download" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[hsl(280,65%,60%)] via-[hsl(340,70%,65%)] to-[hsl(200,70%,60%)] text-white shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">Bring more harmony to your everyday</h2>
              <p className="mt-3 text-white/90">Join couples who communicate better with less effort. Download Cuplix.ai and feel the difference this week.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-black/20 hover:bg-black/30 px-5 py-3">
                  <Android className="h-5 w-5" /> Get it on Android
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-black/20 hover:bg-black/30 px-5 py-3">
                  <Apple className="h-5 w-5" /> Download for iOS
                </a>
              </div>
            </div>
            <div className="text-sm lg:text-base text-white/90">
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" /> Private, encrypted space for two</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" /> Mood and behaviour insights</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" /> AI nudges and reminders</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" /> Chats, gallery, memories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
