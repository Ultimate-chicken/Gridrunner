'use client'

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

const words = ["Simply", "Smarter", "Confidently", "Easily"]

export function AnimatedText() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
        setFade(false)
      }, 500) // Half a second for fade out
    }, 5000) // 5 seconds interval

    return () => clearInterval(intervalId)
  }, [])

  return (
    <span 
      className={cn(
        "transition-opacity duration-500",
        fade ? "opacity-0" : "opacity-100"
      )}
      aria-live="polite"
    >
      {words[index]}
    </span>
  )
}

