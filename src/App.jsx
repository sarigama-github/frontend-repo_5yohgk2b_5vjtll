import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[hsl(20,20%,98%)] text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ValueProps />
        <HowItWorks />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
