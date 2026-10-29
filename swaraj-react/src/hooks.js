import { useEffect, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion:reduce)').matches

// Fades sections in as they scroll into view
export function useReveal() {
  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return
    const els = document.querySelectorAll('.sec-head,.card,.steps li,.check li,details,form,.two>div:first-child>*')
    const timers = []
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target
            el.classList.add('in')
            io.unobserve(el)
            timers.push(setTimeout(() => { el.style.transitionDelay = '0s' }, 1100))
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => {
      const i = Array.prototype.indexOf.call(el.parentNode.children, el)
      el.style.setProperty('--d', Math.min(i, 5) * 0.09 + 's')
      el.classList.add('rv')
      io.observe(el)
    })
    return () => { io.disconnect(); timers.forEach(clearTimeout) }
  }, [])
}

// Counts a number up from 0 (used for the 3.9 rating)
export function useCountUp(target, { delay = 900, duration = 1400 } = {}) {
  const [val, setVal] = useState(target)
  useEffect(() => {
    if (prefersReducedMotion()) return
    let raf, t0 = null
    const step = (t) => {
      if (!t0) t0 = t
      const p = Math.min((t - t0) / duration, 1)
      setVal(target * p)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    const to = setTimeout(() => { raf = requestAnimationFrame(step) }, delay)
    return () => { clearTimeout(to); cancelAnimationFrame(raf) }
  }, [target, delay, duration])
  return val
}
