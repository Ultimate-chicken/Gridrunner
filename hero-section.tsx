import { Button } from "@/components/ui/button"
import { MainHeader } from "./main-header"
import { AnimatedText } from "./animated-text"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-[150vh] relative bg-black" id="hero">
      <MainHeader />
      <div className="container px-4 md:px-6 pt-24 flex min-h-screen items-center">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tighter text-white">
              Defend
            </h1>
            <p className="text-2xl text-zinc-400">
              <AnimatedText />
            </p>
            <p className="text-xl text-zinc-400">
              With our new AegisAI
            </p>
            <Button variant="destructive" size="lg" className="mt-4">
              Learn more
            </Button>
          </div>
          <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="AegisAI Demonstration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 left-0 right-0 container px-4 md:px-6">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] bg-zinc-800 rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  )
}

