import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">GRIDRUNNER</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#platform" className="text-sm font-medium text-white hover:text-gray-300">
            PLATFORM
          </Link>
          <Link href="#products" className="text-sm font-medium text-white hover:text-gray-300">
            PRODUCTS
          </Link>
          <Link href="#partners" className="text-sm font-medium text-white hover:text-gray-300">
            PARTNERS
          </Link>
          <Link href="#company" className="text-sm font-medium text-white hover:text-gray-300">
            COMPANY
          </Link>
        </nav>
        <Button variant="secondary" size="sm" className="hidden md:inline-flex">
          GET DEMO
        </Button>
      </div>
    </header>
  )
}

