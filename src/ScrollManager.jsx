import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location

    const doScroll = () => {
      if (hash) {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    // Wait a tick for the new route to paint.
    const raf = requestAnimationFrame(() => {
      setTimeout(doScroll, 0)
    })

    return () => cancelAnimationFrame(raf)
  }, [location.pathname, location.hash])

  return null
}

