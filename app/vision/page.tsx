import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HandIcon as PrayingHands, Flame, Cross, Crown } from "lucide-react"
import HeroSlider from "@/components/hero-slider"

const heroImages = [
  { src: "/placeholder.svg?height=600&width=1200", alt: "Vision de Génération David - Image 1" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Vision de Génération David - Image 2" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Vision de Génération David - Image 3" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Vision de Génération David - Image 4" },
]

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        images={heroImages}
        title="Notre Vision"
        description="Découvrez la vision qui guide l'Apostolat Génération David dans sa mission auprès de la jeunesse."
        className="h-[50vh] md:h-[60vh]"
      />

      {/* Vision Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-500">Notre Vision</h2>
              <p className="text-gray-600">
                La vision de l&apos;Apostolat Génération David est de susciter une génération de jeunes qui, comme David
                dans la Bible, seront des hommes et des femmes selon le cœur de Dieu, capables d&apos;impacter leur
                génération.
              </p>
              <p className="text-gray-600">
                Nous aspirons à voir une jeunesse transformée par la puissance du Saint-Esprit, libérée des chaînes du
                péché et des puissances des ténèbres, formée à la vie dans l&apos;Esprit, et engagée dans
                l&apos;évangélisation du monde.
              </p>
              <p className="text-gray-600">
                Notre vision s&apos;articule autour de quatre pôles essentiels qui définissent notre approche et guident
                notre action auprès des jeunes.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Vision de Génération David"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Poles */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Les Quatre Pôles de Notre Vision</h2>
            <p className="max-w-[700px] text-gray-600">
              Notre vision s&apos;articule autour de quatre pôles essentiels qui définissent notre approche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <PrayingHands className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Intimité</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Le premier pôle de notre vision est l&apos;intimité avec Dieu. Nous croyons que la prière, la louange et
                l&apos;adoration sont des moyens privilégiés pour développer une relation profonde avec le Seigneur.
              </p>
              <p className="text-gray-600">
                Comme David, qui était un homme de prière et un adorateur passionné, nous voulons conduire les jeunes à
                expérimenter la présence de Dieu et à développer une vie de prière authentique.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <Flame className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Transformation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Le deuxième pôle est la transformation par la puissance du Saint-Esprit. Nous croyons que Dieu veut
                transformer les jeunes à l&apos;image de son Fils Jésus-Christ.
              </p>
              <p className="text-gray-600">
                Par la formation spirituelle, l&apos;enseignement de la Parole de Dieu et l&apos;effusion de
                l&apos;Esprit Saint, nous voulons voir les jeunes transformés dans leur caractère, leurs pensées et
                leurs actions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <Cross className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Victoire</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Le troisième pôle est la victoire sur les puissances des ténèbres. Comme David qui a vaincu Goliath,
                nous croyons que les jeunes peuvent être libérés de toute forme d&apos;oppression spirituelle.
              </p>
              <p className="text-gray-600">
                Par la prière de délivrance, l&apos;intercession et l&apos;enseignement sur le combat spirituel, nous
                voulons voir les jeunes marcher dans la liberté et la victoire que Christ a acquises pour eux.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <Crown className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Royauté</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Le quatrième pôle est la royauté. Comme David qui était roi, nous croyons que les jeunes sont appelés à
                exercer une influence positive dans leur milieu et à impacter leur génération.
              </p>
              <p className="text-gray-600">
                Par la formation au leadership, le développement des talents et l&apos;encouragement à
                l&apos;excellence, nous voulons voir les jeunes devenir des leaders selon le cœur de Dieu dans tous les
                domaines de la société.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Fondement Biblique</h2>
            <p className="max-w-[700px] text-gray-600">
              Notre vision est profondément enracinée dans les Écritures et s&apos;inspire particulièrement de la vie du
              roi David.
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-8 mb-12">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "J&apos;ai trouvé David, fils d&apos;Isaï, homme selon mon cœur, qui accomplira toutes mes volontés."
            </blockquote>
            <p className="text-right text-gray-600">- Actes 13:22</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fondement Biblique"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                David était un homme selon le cœur de Dieu, passionné pour sa présence, excellent dans la louange et
                l&apos;adoration, victorieux dans les combats spirituels, et un leader qui a impacté sa génération.
              </p>
              <p className="text-gray-600">
                De même, nous croyons que Dieu veut susciter une génération de jeunes qui, comme David, seront
                passionnés pour Lui, excellents dans la louange et l&apos;adoration, victorieux sur les puissances des
                ténèbres, et capables d&apos;exercer une influence positive dans leur milieu.
              </p>
              <p className="text-gray-600">
                Notre vision s&apos;inspire également d&apos;autres passages bibliques qui parlent de la formation des
                disciples, de la transformation par le renouvellement de l&apos;intelligence, de la victoire en Christ,
                et de l&apos;appel à être sel et lumière dans le monde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-orange-500 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold">Partagez notre vision</h2>
            <p className="max-w-[700px] text-white/90">
              Vous êtes inspiré par notre vision ? Rejoignez-nous pour impacter la jeunesse et susciter un réveil
              spirituel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild className="bg-white text-orange-500 hover:bg-gray-100">
                <Link href="/contact">Nous rejoindre</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-orange-600">
                <Link href="/pillars">Découvrir nos piliers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

