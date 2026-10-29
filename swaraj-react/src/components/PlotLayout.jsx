import { useEffect, useRef, useState } from 'react'
import { PHONE, PLOT_STATUS } from '../config.js'
import { prefersReducedMotion } from '../hooks.js'

export default function PlotLayout() {
  const [sel, setSel] = useState(null)
  const [go, setGo] = useState(false)
  const svgRef = useRef(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) { setGo(true); return }
    const o = new IntersectionObserver((en) => {
      if (en[0].isIntersecting) { setGo(true); o.disconnect() }
    }, { threshold: 0.3 })
    o.observe(svgRef.current)
    return () => o.disconnect()
  }, [])

  const booked = sel !== null && PLOT_STATUS[sel] === 'b'
  const title = sel === null ? 'Select a plot' : `Plot ${sel + 1}${booked ? ' (booked)' : ' (available)'}`
  const text = sel === null
    ? 'Tap any numbered plot on the layout to see its status and ask about it.'
    : booked
      ? 'This plot is booked. Ask us about similar plots in the layout.'
      : 'This plot is available. Ask us for its size, price and documents.'
  const waHref = sel === null ? '#contact'
    : `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Swaraj Group, I am interested in plot ${sel + 1} in your layout.`)}`

  return (
    <section id="plots">
      <div className="wrap">
        <div className="sec-head">
          <h2>Plot layout</h2>
          <p>See how a planned layout looks. Tap a plot to check its status and ask about it.</p>
        </div>
        <div className="two plots-grid">
          <div className="mapbox">
            <svg ref={svgRef} id="lay" className={'layout' + (go ? ' go' : '')} viewBox="0 0 620 380" role="group" aria-label="Sample plot layout with 12 plots">
              <rect width="620" height="380" rx="14" fill="#eef5ee" />
              <rect y="150" width="545" height="80" fill="#6b6478" />
              <line x1="10" y1="190" x2="535" y2="190" stroke="#fff" strokeWidth="3" strokeDasharray="16 12" className="dash" />
              <text x="272" y="175" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="Plus Jakarta Sans,sans-serif">Main road</text>
              <rect x="550" y="30" width="55" height="320" rx="10" fill="#cfe5d3" />
              <circle cx="577" cy="85" r="16" fill="#5f9a6c" />
              <circle cx="577" cy="190" r="20" fill="#5f9a6c" />
              <circle cx="577" cy="295" r="16" fill="#5f9a6c" />
              {PLOT_STATUS.map((s, i) => {
                const x = 30 + (i % 6) * 85
                const y = i < 6 ? 30 : 230
                const bk = s === 'b'
                const pick = () => setSel(i)
                return (
                  <g key={i}
                    className={`plot ${bk ? 'bk' : 'av'}${sel === i ? ' sel' : ''}`}
                    tabIndex={0} role="button"
                    aria-label={`Plot ${i + 1}, ${bk ? 'booked' : 'available'}`}
                    style={{ animationDelay: i * 0.07 + 's' }}
                    onClick={pick}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick() } }}>
                    <rect x={x} y={y} width="75" height="120" rx="4" />
                    <text x={x + 37.5} y={y + 66}>{i + 1}</text>
                  </g>
                )
              })}
            </svg>
          </div>
          <div className="card panel">
            <h3>{title}</h3>
            <p>{text}</p>
            <a className="btn" href={waHref}
              {...(sel !== null ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {sel === null ? 'Enquire now' : `Enquire about plot ${sel + 1}`}
            </a>
            <ul className="legend">
              <li><i className="sw av"></i>Available</li>
              <li><i className="sw bk"></i>Booked</li>
            </ul>
            <p className="note">This is a sample layout for illustration. Ask us for the latest plot map, sizes and prices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
