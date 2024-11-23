'use client'

import { HeroSection } from "@/components/hero-section"
import { ExcellenceSection } from "@/components/excellence-section"
import { PlatformSection } from "@/components/platform-section"
import { CustomerStoriesSection } from "@/components/customer-stories-section"
import { EngageSection } from "@/components/engage-section"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { useActiveSection } from "@/hooks/use-active-section"

export default function Home() {
  const { activeSection, passedHero } = useActiveSection()

  return (
    <>
      <SectionHeader activeSection={activeSection as any} />
      <HeroSection />
      <ExcellenceSection />
      <PlatformSection />
      <CustomerStoriesSection />
      <EngageSection />
      <CTASection />
    </>
  )
}

