'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { SectionHeader } from './section-header'
import { Shield, Cloud, Brain, AlertCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const platformSections = [
  {
    id: "network",
    title: "Network Security",
    icon: Shield,
    color: "blue",
    content: "Shield your business from cyber threats with cutting-edge network security! Our powerful solutions safeguard your data, block hackers, and ensure seamless connectivity—all while giving you peace of mind. Stay protected, stay connected, and stay ahead with the ultimate defense for your network.",
    stats: [
      { label: "Threats Blocked", value: "95%" },
      { label: "Network Coverage", value: "100%" }
    ]
  },
  {
    id: "cloud",
    title: "Code to Cloud™",
    icon: Cloud,
    color: "purple",
    content: "Transform your operations with secure cloud infrastructure. Deploy, manage, and scale your applications with confidence. Our cloud security solutions provide end-to-end protection for your cloud-native applications.",
    stats: [
      { label: "Cloud Apps Protected", value: "10k+" },
      { label: "Deployment Time", value: "-60%" }
    ]
  },
  {
    id: "ai",
    title: "AI-Driven Security Operations",
    icon: Brain,
    color: "green",
    content: "Transform your operations with AegisAI, the smart solution for a greener future. Harness the power of AI to optimize resources, reduce waste, and lower your carbon footprint—all while boosting efficiency. With AegisAI, sustainability isn't just a goal; it's a competitive advantage.",
    stats: [
      { label: "Threats Detected", value: "99.9%" },
      { label: "Response Time", value: "<1min" }
    ]
  },
  {
    id: "threat",
    title: "Threat Intel & Incident Response",
    icon: AlertCircle,
    color: "red",
    content: "Stay one step ahead of cybercriminals with our proactive Threat Intelligence & Incident Response solutions. Powered by real-time insights and advanced tools, we identify threats before they strike and respond swiftly to protect your business.",
    stats: [
      { label: "Incidents Resolved", value: "50k+" },
      { label: "Average Response", value: "5min" }
    ]
  }
]

const colorVariants = {
  blue: "border-blue-500 text-blue-500",
  purple: "border-purple-500 text-purple-500",
  green: "border-green-500 text-green-500",
  red: "border-red-500 text-red-500"
}

export function PlatformSection() {
  const [activeSection, setActiveSection] = useState("network")

  return (
    <section className="min-h-screen relative bg-white" id="platform">
      <SectionHeader activeSection="platform" />
      <div className="container px-4 md:px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Stay ahead of adversaries</h2>
        </div>
        <div className="grid lg:grid-cols-[1fr,400px] gap-8 items-start">
          <Accordion 
            type="single" 
            defaultValue="network"
            onValueChange={setActiveSection}
            className="w-full"
          >
            {platformSections.map((section) => (
              <AccordionItem 
                key={section.id} 
                value={section.id}
                className={`border-l-2 border-transparent data-[state=open]:${colorVariants[section.color]}`}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <section.icon className={cn(
                      "w-6 h-6",
                      colorVariants[section.color]
                    )} />
                    <span className="text-xl font-semibold text-black">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-10 space-y-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {section.stats.map((stat, index) => (
                        <div key={index} className="space-y-1">
                          <div className={cn(
                            "text-2xl font-bold",
                            colorVariants[section.color]
                          )}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-700">
                      {section.content}
                    </p>
                    <Button 
                      variant="outline" 
                      className={cn(
                        "mt-4",
                        colorVariants[section.color]
                      )}
                    >
                      Explore the Platform →
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="hidden lg:block relative">
            <div className="sticky top-24 aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {platformSections.map((section) => (
                  activeSection === section.id && (
                    <section.icon 
                      key={section.id}
                      className={cn(
                        "w-32 h-32 transition-all duration-300",
                        colorVariants[section.color]
                      )} 
                    />
                  )
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e5f7_1px,transparent_0)] [background-size:40px_40px] opacity-40 pointer-events-none" />
    </section>
  )
}

