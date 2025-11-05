import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]!
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          setActiveId(id)
          return
        }
      }
      setActiveId('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
