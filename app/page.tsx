import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Flame, BookOpen, Music, Calendar, Users, ArrowRight } from "lucide-react"
import CountrySelector from "@/components/country-selector"
import HeroSlider from "@/components/hero-slider"

const heroImages = [
  { src: "/placeholder.svg?height=600&width=1200", alt: "Génération David - Image 1" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Génération David - Image 2" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Génération David - Image 3" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Génération David - Image 4" },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <HeroSlider
          images={heroImages}
          title="Génération David"
          description="Un apostolat international de prière pour les jeunes, œuvrant pour susciter un réveil spirituel au sein de la jeunesse."
          className="h-[60vh] sm:h-[70vh] md:h-[80vh]"
        />
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 shadow-md">
              <Link href="/vision">Découvrir notre vision</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 border-2">
              <Link href="/contact">Rejoindre l&apos;apostolat</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Country Selector */}
      <CountrySelector />

      {/* Events Section */}
      <section id="events" className="w-full py-8 sm:py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">Événements à Venir</h2>
            <p className="max-w-[700px] text-gray-600">
              Rejoignez-nous lors de nos prochains événements et participez à l&apos;œuvre de Dieu parmi la jeunesse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Retraite spirituelle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-sm text-gray-500">15-17 Avril 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">Retraite Spirituelle</h3>
                <p className="text-gray-600 mb-4">
                  Une retraite de trois jours pour approfondir votre relation avec Dieu et développer votre vie de
                  prière.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 border-2"
                >
                  <Link href="/events/1">En savoir plus</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Conférence de la jeunesse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-sm text-gray-500">5 Mai 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">Conférence de la Jeunesse</h3>
                <p className="text-gray-600 mb-4">
                  Une journée de formation et d&apos;inspiration pour les jeunes leaders chrétiens désireux
                  d&apos;impacter leur génération.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 border-2"
                >
                  <Link href="/events/2">En savoir plus</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Soirée de louange"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-sm text-gray-500">20 Mai 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-500">Soirée de Louange</h3>
                <p className="text-gray-600 mb-4">
                  Une soirée dédiée à la louange et à l&apos;adoration, pour expérimenter la présence de Dieu et
                  l&apos;effusion de son Esprit.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 border-2"
                >
                  <Link href="/events/3">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-12">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 shadow-md">
              <Link href="/events">
                Voir tous les événements <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visionnaire Section */}
      <section id="visionnaire" className="w-full py-8 sm:py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden order-1 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Père Jean-Marie Sène, Fondateur de Génération David"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">Le Visionnaire</h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-700">Père Jean-Marie Sène</h3>
              <p className="text-gray-600">
                Le Père Jean-Marie Sène est le fondateur et premier responsable de l&apos;Apostolat Génération David.
                Prêtre catholique passionné par l&apos;évangélisation de la jeunesse, il a reçu l&apos;inspiration de
                créer cet apostolat suite à une profonde expérience spirituelle.
              </p>
              <p className="text-gray-600">
                Né au Sénégal, le Père Jean-Marie a consacré sa vie à la formation spirituelle des jeunes et à la prière
                d&apos;intercession. Sa vision est de susciter une génération de jeunes qui, comme David dans la Bible,
                seront des hommes et des femmes selon le cœur de Dieu, capables d&apos;impacter leur génération.
              </p>
              <p className="text-gray-600">
                Sous sa direction, l&apos;Apostolat Génération David s&apos;est développé dans plusieurs pays
                d&apos;Afrique et d&apos;Europe, touchant des milliers de jeunes et les conduisant à une véritable
                rencontre avec le Christ.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 shadow-md mt-4">
                <Link href="/about">En savoir plus sur notre histoire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section id="pillars" className="w-full py-8 sm:py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">Les Six Piliers de Notre Vision</h2>
            <p className="max-w-[700px] text-gray-600">
              Notre mission s&apos;articule autour de six piliers fondamentaux qui guident notre action auprès de la
              jeunesse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {/* Répétition des 6 piliers avec les mêmes modifications */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Pilier 1</h3>
              <p className="text-gray-600">Annoncer l&apos;Evangile du salut et de la miséricorde à la jeunesse.</p>
            </div>

            {/* Autres piliers... */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Pilier 2</h3>
              <p className="text-gray-600">Apporter la liberté aux jeunes captifs des puissances des ténèbres.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Pilier 3</h3>
              <p className="text-gray-600">Former une jeunesse évangélisatrice dans la puissance du St Esprit.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Pilier 4</h3>
              <p className="text-gray-600">Former une jeunesse imitatrice et disciple du Christ.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Pilier 5</h3>
              <p className="text-gray-600">
                Susciter et former une jeunesse chrétienne leader et prospère selon le cœur de Dieu.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Music className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">Pilier 6</h3>
              <p className="text-gray-600">
                Conduire la jeunesse à une véritable intimité avec le Seigneur par la louange et l&apos;adoration
                Prophétique.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-12">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 shadow-md">
              <Link href="/pillars">
                En savoir plus sur nos piliers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-8 sm:py-12 md:py-24 bg-orange-500 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Rejoignez la Génération David</h2>
            <p className="max-w-[700px] text-white/90">
              Devenez membre de notre communauté et participez à l&apos;évangélisation de la jeunesse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild className="bg-white text-orange-500 hover:bg-gray-100 shadow-md">
                <Link href="/contact">S&apos;inscrire maintenant</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-orange-600/30 border-2">
                <Link href="/about">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

