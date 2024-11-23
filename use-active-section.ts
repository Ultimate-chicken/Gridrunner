'use client'

import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<'home' | 'why' | 'platform' | 'stories' | 'engage'>('home')
  const [passedHero, setPassedHero] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as any)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    )

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setPassedHero(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px 0px 0px',
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    const hero = document.getElementById('hero')
    if (hero) {
      heroObserver.observe(hero)
    }

    return () => {
      observer.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  return { activeSection, passedHero }
}

