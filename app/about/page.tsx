import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Heart } from "lucide-react"
import HeroSlider from "@/components/hero-slider"

const heroImages = [
  { src: "/placeholder.svg?height=600&width=1200", alt: "À propos de Génération David - Image 1" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "À propos de Génération David - Image 2" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "À propos de Génération David - Image 3" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "À propos de Génération David - Image 4" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        images={heroImages}
        title="À propos de nous"
        description="Découvrez l'histoire, la mission et les valeurs de l'Apostolat Génération David."
        className="h-[50vh] md:h-[60vh]"
      />

      {/* History Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-500">Notre Histoire</h2>
              <p className="text-gray-600">
                L&apos;Apostolat Génération David a été fondé en 2010 par le Père Jean-Marie Sène au Sénégal. Né
                d&apos;une profonde expérience spirituelle et d&apos;un appel à servir la jeunesse, cet apostolat a
                commencé comme un petit groupe de prière à Dakar.
              </p>
              <p className="text-gray-600">
                Inspiré par la figure biblique du roi David, homme selon le cœur de Dieu, le Père Jean-Marie a voulu
                susciter une génération de jeunes qui, comme David, seraient passionnés pour Dieu, excellents dans la
                louange et l&apos;adoration, et capables de combattre les puissances des ténèbres.
              </p>
              <p className="text-gray-600">
                Au fil des années, l&apos;apostolat s&apos;est développé et a étendu son influence au-delà des
                frontières du Sénégal, touchant d&apos;abord la Côte d&apos;Ivoire, puis la France, le Canada et le
                Togo. Aujourd&apos;hui, Génération David est un mouvement international qui continue de croître et
                d&apos;impacter la vie de milliers de jeunes à travers le monde.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Histoire de Génération David"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Notre Mission et Nos Valeurs</h2>
            <p className="max-w-[700px] text-gray-600">
              Nous sommes guidés par une mission claire et des valeurs fortes qui définissent notre identité et notre
              action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Notre Mission</h3>
              <p className="text-gray-600 mb-4">
                La mission de l&apos;Apostolat Génération David est de susciter un réveil spirituel au sein de la
                jeunesse à travers le monde, en formant des disciples du Christ qui seront des agents de transformation
                dans leur génération.
              </p>
              <p className="text-gray-600">
                Nous œuvrons pour évangéliser les jeunes, les former à la vie dans l&apos;Esprit, les libérer des
                puissances des ténèbres, et les conduire à une véritable intimité avec Dieu par la prière, la louange et
                l&apos;adoration.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Nos Valeurs</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Amour</h4>
                    <p className="text-gray-600">L&apos;amour de Dieu et du prochain est au cœur de notre apostolat.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Communion</h4>
                    <p className="text-gray-600">
                      Nous valorisons la vie fraternelle et la communion entre les membres.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-6 w-6 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">Engagement</h4>
                    <p className="text-gray-600">Nous encourageons un engagement sérieux dans la foi et le service.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Notre Équipe</h2>
            <p className="max-w-[700px] text-gray-600">
              Découvrez les personnes qui dirigent l&apos;Apostolat Génération David et qui œuvrent pour sa mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Père Jean-Marie Sène"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-500">Père Jean-Marie Sène</h3>
                <p className="text-gray-500 mb-4">Fondateur et Responsable International</p>
                <p className="text-gray-600">
                  Prêtre catholique passionné par l&apos;évangélisation de la jeunesse et la prière d&apos;intercession.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Soeur Marie-Claire Kouamé"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-500">Soeur Marie-Claire Kouamé</h3>
                <p className="text-gray-500 mb-4">Coordinatrice Nationale - Côte d&apos;Ivoire</p>
                <p className="text-gray-600">Consacrée et engagée dans la formation spirituelle des jeunes filles.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Frère Paul Tremblay"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-500">Frère Paul Tremblay</h3>
                <p className="text-gray-500 mb-4">Coordinateur National - Canada</p>
                <p className="text-gray-600">
                  Laïc engagé dans l&apos;évangélisation et la formation des jeunes leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold">Rejoignez notre mission</h2>
            <p className="max-w-[700px] text-white/90">
              Vous souhaitez participer à notre mission d&apos;évangélisation de la jeunesse ? Rejoignez-nous dès
              aujourd&apos;hui !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild className="bg-white text-orange-500 hover:bg-gray-100">
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-orange-600">
                <Link href="/events">Voir nos événements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

