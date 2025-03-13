import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Flame, Users, Music } from "lucide-react"
import HeroSlider from "@/components/hero-slider"

const heroImages = [
  { src: "/placeholder.svg?height=600&width=1200", alt: "Piliers de Génération David - Image 1" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Piliers de Génération David - Image 2" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Piliers de Génération David - Image 3" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Piliers de Génération David - Image 4" },
]

export default function PillarsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        images={heroImages}
        title="Les Six Piliers"
        description="Découvrez les six piliers fondamentaux qui guident notre action auprès de la jeunesse."
        className="h-[50vh] md:h-[60vh]"
      />

      {/* Pillars Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-500">Les Six Piliers de Notre Mission</h2>
              <p className="text-gray-600">
                Notre mission auprès de la jeunesse s&apos;articule autour de six piliers fondamentaux qui définissent
                notre approche et guident notre action. Ces piliers sont le fruit d&apos;une réflexion approfondie sur
                les besoins spirituels des jeunes d&apos;aujourd&apos;hui et sur l&apos;appel que Dieu nous a adressé.
              </p>
              <p className="text-gray-600">
                Chaque pilier représente un aspect essentiel de notre travail d&apos;évangélisation, de formation et
                d&apos;accompagnement des jeunes dans leur cheminement spirituel. Ensemble, ils forment un cadre
                cohérent qui nous permet de répondre de manière holistique aux défis auxquels les jeunes sont
                confrontés.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Les Six Piliers de Génération David"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="w-full py-12 md:py-24 bg-sky-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Nos Six Piliers en Détail</h2>
            <p className="max-w-[700px] text-gray-600">
              Explorez en profondeur chacun des six piliers qui fondent notre mission auprès de la jeunesse.
            </p>
          </div>

          <div className="space-y-12">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-orange-500 text-white p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pilier 1</h3>
                  <p className="text-white/90">Annoncer l&apos;Evangile du salut et de la miséricorde à la jeunesse</p>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-gray-600 mb-4">
                    Le premier pilier de notre mission est l&apos;évangélisation. Nous croyons que tous les jeunes ont
                    besoin d&apos;entendre la Bonne Nouvelle du salut en Jésus-Christ et d&apos;expérimenter la
                    miséricorde de Dieu.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Nous nous engageons à annoncer l&apos;Évangile de manière claire, pertinente et adaptée à la culture
                    des jeunes d&apos;aujourd&apos;hui. Nous utilisons divers moyens pour atteindre cet objectif :
                    témoignages, enseignements, médias sociaux, événements d&apos;évangélisation, etc.
                  </p>
                  <p className="text-gray-600">
                    Notre approche de l&apos;évangélisation est centrée sur la personne de Jésus-Christ et sur son
                    message d&apos;amour et de miséricorde. Nous voulons que les jeunes découvrent non seulement la
                    vérité de l&apos;Évangile, mais aussi la beauté et la joie de la vie avec Christ.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-orange-500 text-white p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Flame className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pilier 2</h3>
                  <p className="text-white/90">Apporter la liberté aux jeunes captifs des puissances des ténèbres</p>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-gray-600 mb-4">
                    Le deuxième pilier de notre mission est la libération. Nous reconnaissons que de nombreux jeunes
                    sont captifs de diverses formes d&apos;oppression spirituelle, d&apos;addictions, de blessures
                    intérieures et de mensonges qui les empêchent de vivre pleinement leur identité en Christ.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Nous nous engageons à prier pour la délivrance des jeunes, à les accompagner dans leur processus de
                    guérison intérieure, et à les équiper pour qu&apos;ils puissent marcher dans la liberté que Christ
                    leur a acquise.
                  </p>
                  <p className="text-gray-600">
                    Notre approche de la libération est fondée sur la puissance de la croix de Jésus-Christ, sur
                    l&apos;autorité de son nom, et sur la force transformatrice de sa Parole. Nous croyons que Jésus est
                    venu pour "proclamer aux captifs la délivrance" (Luc 4:18) et nous voulons être des instruments de
                    cette libération.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-orange-500 text-white p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pilier 3</h3>
                  <p className="text-white/90">Former une jeunesse évangélisatrice dans la puissance du St Esprit</p>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-gray-600 mb-4">
                    Le troisième pilier de notre mission est la formation à l&apos;évangélisation. Nous croyons que
                    chaque jeune chrétien est appelé à être un témoin de Jésus-Christ et à participer à la mission
                    d&apos;évangélisation de l&apos;Église.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Nous nous engageons à former les jeunes à l&apos;évangélisation dans la puissance du Saint-Esprit,
                    en leur enseignant comment partager leur foi de manière efficace et pertinente, comment utiliser
                    leurs dons spirituels pour le service du Royaume, et comment dépendre de la puissance du
                    Saint-Esprit dans leur témoignage.
                  </p>
                  <p className="text-gray-600">
                    Notre approche de la formation à l&apos;évangélisation combine l&apos;enseignement théorique et la
                    pratique sur le terrain. Nous organisons régulièrement des missions d&apos;évangélisation où les
                    jeunes peuvent mettre en pratique ce qu&apos;ils ont appris et expérimenter la joie de conduire
                    d&apos;autres personnes à Christ.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-orange-500 text-white p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pilier 4</h3>
                  <p className="text-white/90">Former une jeunesse imitatrice et disciple du Christ</p>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-gray-600 mb-4">
                    Le quatrième pilier de notre mission est la formation de disciples. Nous croyons que l&apos;appel de
                    Jésus à "faire des disciples" (Matthieu 28:19) implique un processus de croissance spirituelle et de
                    transformation à l&apos;image de Christ.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Nous nous engageons à accompagner les jeunes dans leur cheminement de foi, à les aider à développer
                    une relation personnelle avec Jésus-Christ, à les former à la lecture et à la méditation de la
                    Parole de Dieu, et à les encourager à vivre selon les valeurs du Royaume.
                  </p>
                  <p className="text-gray-600">
                    Notre approche du discipulat est relationnelle et communautaire. Nous croyons que c&apos;est dans le
                    contexte de relations authentiques et d&apos;une communauté aimante que les jeunes peuvent grandir
                    comme disciples de Jésus-Christ et apprendre à l&apos;imiter dans tous les aspects de leur vie.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-orange-500 text-white p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pilier 5</h3>
                  <p className="text-white/90">
                    Susciter et former une jeunesse chrétienne leader et prospère selon le cœur de Dieu
                  </p>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-gray-600 mb-4">
                    Le cinquième pilier de notre mission est la formation au leadership. Nous croyons que Dieu appelle
                    les jeunes à être des leaders dans tous les domaines de la société, à exercer une influence positive
                    selon les valeurs du Royaume, et à contribuer au bien commun.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Nous nous engageons à identifier et à développer le potentiel de leadership des jeunes, à les former
                    aux principes du leadership serviteur à l&apos;exemple de Jésus-Christ, et à les encourager à
                    poursuivre l&apos;excellence dans leurs études, leur travail et leur service.
                  </p>
                  <p className="text-gray-600">
                    Notre approche de la formation au leadership combine le développement du caractère,
                    l&apos;acquisition de compétences pratiques, et l&apos;encouragement à l&apos;initiative et à la
                    créativité. Nous voulons voir les jeunes devenir des leaders selon le cœur de Dieu, qui servent avec
                    intégrité, compassion et excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-orange-500 text-white p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pilier 6</h3>
                  <p className="text-white/90">
                    Conduire la jeunesse à une véritable intimité avec le Seigneur par la louange et l&apos;adoration
                    Prophétique
                  </p>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-gray-600 mb-4">
                    Le sixième pilier de notre mission est la promotion de l&apos;intimité avec Dieu par la louange et
                    l&apos;adoration. Nous croyons que Dieu cherche des adorateurs en esprit et en vérité (Jean 4:23) et
                    que la louange et l&apos;adoration sont des moyens privilégiés pour entrer dans sa présence.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Nous nous engageons à former les jeunes à la louange et à l&apos;adoration prophétique, à les aider
                    à développer une vie de prière personnelle, et à créer des espaces où ils peuvent expérimenter la
                    présence de Dieu de manière tangible.
                  </p>
                  <p className="text-gray-600">
                    Notre approche de la louange et de l&apos;adoration est à la fois expressive et contemplative. Nous
                    encourageons les jeunes à exprimer leur amour pour Dieu de manière authentique et passionnée, tout
                    en les guidant dans l&apos;art de l&apos;écoute et de la contemplation. Nous croyons que c&apos;est
                    dans cette intimité avec Dieu que les jeunes trouvent leur véritable identité et leur vocation.
                  </p>
                </div>
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
              Vous êtes inspiré par nos piliers ? Rejoignez-nous pour contribuer à la formation d&apos;une génération de
              jeunes selon le cœur de Dieu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild className="bg-white text-orange-500 hover:bg-gray-100">
                <Link href="/contact">Nous rejoindre</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-orange-600">
                <Link href="/events">Participer à nos événements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

