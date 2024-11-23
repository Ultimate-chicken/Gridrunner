import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SectionHeader } from './section-header'

export function EngageSection() {
  return (
    <section className="min-h-screen relative bg-white" id="engage">
      <SectionHeader activeSection="engage" />
      <div className="container px-4 md:px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">
          Here for you<br />
          Here for <span className="text-red-600">what's next</span>.
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Under Attack"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Under Attack? We are here</h3>
            <p className="mb-4">Contact our specialists that will help you with your problem</p>
            <Button variant="outline">We are here for you →</Button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Become a partner"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Want to become a partner?</h3>
            <p className="mb-4">Be part of a global community of world-class innovators committed to making security breaches a thing of the past.</p>
            <Button variant="outline">Become a partner →</Button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Our offerings"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Not sure what you want?</h3>
            <p className="mb-4">If you are not sure what would be suitable for you, we have a varieties of products for different problems</p>
            <Button variant="outline">See our offerings →</Button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="About us"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Want to learn more about us?</h3>
            <p className="mb-4">Visit our information page where you can discover our fascinated history</p>
            <Button variant="outline">About us →</Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e5f7_1px,transparent_0)] [background-size:40px_40px] opacity-40 pointer-events-none" />
    </section>
  )
}

