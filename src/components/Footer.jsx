export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Cuplix.ai — Built for better connection.</p>
          <nav className="flex items-center gap-5 text-sm text-foreground/70">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
