import Image from "next/image"
import { SectionHeader } from './section-header'

export function CustomerStoriesSection() {
  return (
    <section className="min-h-screen relative bg-black text-white" id="stories">
      <SectionHeader activeSection="stories" />
      <div className="container px-4 md:px-6 py-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Trusted by the best</h2>
        <div className="mb-12 text-center">
          <p className="text-2xl font-bold">2000+</p>
          <p>Gridrunner customers</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-zinc-900 p-6 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Blackrock Cybersecurity"
              width={300}
              height={200}
              className="mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Gridrunner Protects Blackrock Cybersecurity</h3>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="F1 Infrastructure"
              width={300}
              height={200}
              className="mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Gridrunner Protects F1 Infrastructure</h3>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Shannon Airport"
              width={300}
              height={200}
              className="mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Shannon Airport</h3>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#222_25%,transparent_25%,transparent_75%,#222_75%,#222_100%)] bg-[length:60px_60px] opacity-10 pointer-events-none" />
    </section>
  )
}

