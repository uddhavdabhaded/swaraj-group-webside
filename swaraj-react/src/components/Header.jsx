import { useEffect, useState } from 'react'
import mark from '../assets/logo-mark.png'
import word from '../assets/wordmark.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'sc' : ''}>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Swaraj Group home">
          <img className="mark" src={mark} alt="" width="300" height="182" />
          <span className="wm">
            <img className="word" src={word} alt="Swaraj Group" width="500" height="79" />
            <small>Land Dealing, Development</small>
          </span>
        </a>
        <nav aria-label="Main">
          <ul>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#plots">Plots</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why">Why us</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <a className="btn" href="#contact">Enquire now</a>
      </div>
    </header>
  )
}
