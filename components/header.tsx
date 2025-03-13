"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-3eqtrKVw2oGSlCMzdkZnNdVpwbpz1e.png"
            alt="Génération David Apostolat Logo"
            width={40}
            height={40}
          />
          <span className="hidden font-bold sm:inline-block text-orange-500">Génération David</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Accueil
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500"
            >
              À propos <ChevronDown className="h-4 w-4" />
            </button>
            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    Qui sommes-nous
                  </Link>
                  <Link href="/vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    Notre vision
                  </Link>
                  <Link href="/pillars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    Nos piliers
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("countries")}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-500"
            >
              Pays <ChevronDown className="h-4 w-4" />
            </button>
            {activeDropdown === "countries" && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link href="/countries/senegal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    Sénégal
                  </Link>
                  <Link href="/countries/cote-ivoire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    Côte d&apos;Ivoire
                  </Link>
                  <Link href="/countries/france" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    France
                  </Link>
                  <Link href="/countries/canada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    Canada
                  </Link>
                  <Link href="/countries/togo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">
                    Togo
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/events" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Événements
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Galerie
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 border-2">
            Se connecter
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 shadow-md">Rejoindre</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 bg-white border-b">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <div>
              <button
                onClick={() => toggleDropdown("mobile-about")}
                className="flex items-center justify-between w-full py-2 text-sm font-medium"
              >
                <span>À propos</span>
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", activeDropdown === "mobile-about" ? "rotate-180" : "")}
                />
              </button>
              {activeDropdown === "mobile-about" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/about" className="block py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                    Qui sommes-nous
                  </Link>
                  <Link href="/vision" className="block py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                    Notre vision
                  </Link>
                  <Link href="/pillars" className="block py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                    Nos piliers
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => toggleDropdown("mobile-countries")}
                className="flex items-center justify-between w-full py-2 text-sm font-medium"
              >
                <span>Pays</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "mobile-countries" ? "rotate-180" : "",
                  )}
                />
              </button>
              {activeDropdown === "mobile-countries" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/countries/senegal" className="block py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                    Sénégal
                  </Link>
                  <Link
                    href="/countries/cote-ivoire"
                    className="block py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Côte d&apos;Ivoire
                  </Link>
                  <Link href="/countries/france" className="block py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                    France
                  </Link>
                  <Link href="/countries/canada" className="block py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                    Canada
                  </Link>
                  <Link href="/countries/togo" className="block py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                    Togo
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/events"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Événements
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galerie
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-col space-y-2 pt-4 border-t">
            <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 border-2">
              Se connecter
            </Button>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 shadow-md">Rejoindre</Button>
          </div>
        </div>
      )}
    </header>
  )
}

