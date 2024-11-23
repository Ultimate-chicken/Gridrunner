import { Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <p className="text-zinc-400">List of all products here</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <p className="text-zinc-400">List of all services here</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Partners</h3>
            <p className="text-zinc-400">List of all partners here</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <p className="text-zinc-400">List of all company here</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-zinc-800">
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="text-sm text-zinc-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-zinc-400 hover:text-white">
              Cookies
            </Link>
            <Link href="/contact" className="text-sm text-zinc-400 hover:text-white">
              Contact us
            </Link>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Instagram className="w-6 h-6 text-zinc-400 hover:text-white" />
            <Twitter className="w-6 h-6 text-zinc-400 hover:text-white" />
            <Linkedin className="w-6 h-6 text-zinc-400 hover:text-white" />
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-zinc-400">
          Copyright © 2024 Gridrunner. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

