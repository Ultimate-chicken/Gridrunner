import { Brain, Clock, Cog } from 'lucide-react'
import { SectionHeader } from './section-header'

export function ExcellenceSection() {
  return (
    <section className="min-h-screen relative bg-black text-white" id="why">
      <SectionHeader activeSection="why" />
      <div className="container px-4 md:px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">The Gridrunner Excellence</h2>
          <p className="mt-4 text-zinc-400">
            Technology augmented with deep security knowledge
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-zinc-900 rounded-lg">
            <Brain className="w-12 h-12 mb-4 text-red-500" />
            <h3 className="text-xl font-bold mb-2">Powerful AI detector</h3>
            <p className="text-zinc-400">
              We are using powerful AegisAI developed in our laboratories to detect and mitigate effectively threats
            </p>
            <a href="#" className="text-red-500 hover:underline mt-4 inline-block">Learn more about AegisAI</a>
          </div>
          <div className="p-6 bg-zinc-900 rounded-lg">
            <Clock className="w-12 h-12 mb-4 text-red-500" />
            <h3 className="text-xl font-bold mb-2">24/7 Automated System</h3>
            <p className="text-zinc-400">
              Our platform is operating without breaks together with the elite team of experts to make sure we don't miss anything
            </p>
            <a href="#" className="text-red-500 hover:underline mt-4 inline-block">Learn more about Response Team</a>
          </div>
          <div className="p-6 bg-zinc-900 rounded-lg">
            <Cog className="w-12 h-12 mb-4 text-red-500" />
            <h3 className="text-xl font-bold mb-2">Fully managed System</h3>
            <p className="text-zinc-400">
              Cost effective automatised system with automatic report generation
            </p>
            <a href="#" className="text-red-500 hover:underline mt-4 inline-block">Learn more about our platform</a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          <div>
            <div className="text-2xl font-bold text-red-500">9.1K</div>
            <div className="text-sm text-zinc-400">Exploit Attempts Detected</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500">371.66K</div>
            <div className="text-sm text-zinc-400">Malware Executions Blocked</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500">11.3B</div>
            <div className="text-sm text-zinc-400">Attacks Prevented Inline</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500">1.62B</div>
            <div className="text-sm text-zinc-400">New Unique Objects Analyzed</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#333_1px,transparent_0)] [background-size:40px_40px] opacity-20 pointer-events-none" />
      </div>
    </section>
  )
}

