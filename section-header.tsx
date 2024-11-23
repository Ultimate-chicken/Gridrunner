'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  activeSection: 'why' | 'platform' | 'stories' | 'engage'
}

export function SectionHeader({ activeSection }: SectionHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsVisible(heroBottom <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 transition-all duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">GRIDRUNNER</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-12">
          <Link 
            href="#why" 
            className={cn(
              "text-sm font-medium text-white hover:text-gray-300 relative pb-1",
              activeSection === 'why' && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600"
            )}
          >
            Why Gridrunner?
          </Link>
          <Link 
            href="#platform" 
            className={cn(
              "text-sm font-medium text-white hover:text-gray-300 relative pb-1",
              activeSection === 'platform' && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600"
            )}
          >
            Platform
          </Link>
          <Link 
            href="#stories" 
            className={cn(
              "text-sm font-medium text-white hover:text-gray-300 relative pb-1",
              activeSection === 'stories' && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600"
            )}
          >
            Customer Stories
          </Link>
          <Link 
            href="#engage" 
            className={cn(
              "text-sm font-medium text-white hover:text-gray-300 relative pb-1",
              activeSection === 'engage' && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600"
            )}
          >
            Engage with Us
          </Link>
        </nav>
        <Button variant="secondary" size="sm" className="hidden md:inline-flex">
          GET DEMO
        </Button>
      </div>
    </header>
  )
}

