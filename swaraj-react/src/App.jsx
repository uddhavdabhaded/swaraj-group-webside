import { useReveal } from './hooks.js'
import ProgressBar from './components/ProgressBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Properties from './components/Properties.jsx'
import PlotLayout from './components/PlotLayout.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Why from './components/Why.jsx'
import Process from './components/Process.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  useReveal()
  return (
    <>
      <ProgressBar />
      <Header />
      <main id="top">
        <Hero />
        <Properties />
        <PlotLayout />
        <About />
        <Services />
        <Why />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
