import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const ref = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      ref.current.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')'
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])
  return <div id="bar" ref={ref}></div>
}
