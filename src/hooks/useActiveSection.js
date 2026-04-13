import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const visible = new Map()
    const lastId = sectionIds[sectionIds.length - 1]

    const pick = () => {
      // If scrolled to the bottom of the page, always activate the last section
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 80
      if (nearBottom) {
        setActiveId(lastId)
        return
      }

      for (const id of sectionIds) {
        if (visible.get(id)) {
          setActiveId(id)
          return
        }
      }
    }

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.isIntersecting)
          pick()
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )

      observer.observe(el)
      return observer
    })

    window.addEventListener('scroll', pick, { passive: true })

    return () => {
      observers.forEach((o) => o && o.disconnect())
      window.removeEventListener('scroll', pick)
    }
  }, [])

  return activeId
}
