import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-gray-700">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-3eqtrKVw2oGSlCMzdkZnNdVpwbpz1e.png"
                alt="Génération David Apostolat Logo"
                width={50}
                height={50}
              />
              <div>
                <h3 className="font-bold text-orange-500">Génération David</h3>
                <p className="text-xs">Apostolat international de prière</p>
              </div>
            </Link>
            <p className="text-sm">
              Un apostolat international de prière pour les jeunes, œuvrant pour susciter un réveil spirituel au sein de
              la jeunesse.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-orange-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-orange-500 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm hover:text-orange-500 transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-sm hover:text-orange-500 transition-colors">
                  Activités
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-orange-500 transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Pays</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/countries/senegal" className="text-sm hover:text-orange-500 transition-colors">
                  Sénégal
                </Link>
              </li>
              <li>
                <Link href="/countries/cote-ivoire" className="text-sm hover:text-orange-500 transition-colors">
                  Côte d&apos;Ivoire
                </Link>
              </li>
              <li>
                <Link href="/countries/france" className="text-sm hover:text-orange-500 transition-colors">
                  France
                </Link>
              </li>
              <li>
                <Link href="/countries/canada" className="text-sm hover:text-orange-500 transition-colors">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/countries/togo" className="text-sm hover:text-orange-500 transition-colors">
                  Togo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Siège international, Dakar, Sénégal</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">contact@generationdavid.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+221 XX XXX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Génération David Apostolat. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-orange-500 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-sm hover:text-orange-500 transition-colors">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

