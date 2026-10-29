import banner from '../assets/banner.jpg'
import { PHONE } from '../config.js'
import { useCountUp } from '../hooks.js'

export default function Hero() {
  const rating = useCountUp(3.9)
  return (
    <section className="hero hero2">
      <div className="banner">
        <img src={banner} width="1600" height="900" fetchPriority="high"
          alt="Swaraj Group – A Better Tomorrow. Residential, commercial, plots and investment in Pune" />
      </div>
      <div className="wrap">
        <div className="intro">
          <div>
            <h1>Land you can trust, in the Pune locations that are growing.</h1>
            <p className="lead">Swaraj Group helps you buy, sell and develop land in Balewadi-Baner and around Pune, with clear guidance from your first site visit to final registration.</p>
          </div>
          <div className="cta">
            <a className="btn" href="#contact">Book a free consultation</a>
            <a className="btn alt" href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <a className="btn alt" href="#services">See our services</a>
          </div>
          <div className="facts">
            <div><strong>Balewadi-Baner, Pune</strong>Opposite Kunal Aspiree</div>
            <div><strong><span>{rating.toFixed(1)}</span> / 5</strong>Rated by 20 people on Justdial</div>
            <div><strong>Land dealing and development</strong>One team, start to finish</div>
          </div>
        </div>
      </div>
    </section>
  )
}
