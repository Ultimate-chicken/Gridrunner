import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-red-600 text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Unlock your full potential with AegisAI</h2>
        <Button variant="secondary" size="lg">
          GET DEMO
        </Button>
      </div>
    </section>
  )
}

