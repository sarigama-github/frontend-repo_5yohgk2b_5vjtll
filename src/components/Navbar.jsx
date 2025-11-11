import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-white/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[hsl(280,65%,60%)] to-[hsl(340,70%,65%)] shadow-md" />
            <span className="text-lg font-bold tracking-tight text-foreground">Cuplix.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#signup" className="text-sm text-foreground/70 hover:text-foreground">Sign in</a>
            <a href="#download" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[hsl(280,65%,60%)] to-[hsl(340,70%,65%)] shadow-md hover:shadow-lg transition-all">
              <Download className="h-4 w-4" /> Download
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-foreground/5" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-foreground/5">
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-border my-1" />
              <a href="#signup" className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-foreground/5">Sign in</a>
              <a href="#download" className="rounded-md px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[hsl(280,65%,60%)] to-[hsl(340,70%,65%)]">
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
