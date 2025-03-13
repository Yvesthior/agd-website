import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Phone, Mail } from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import CountrySelector from "@/components/country-selector";

type CountryInfo = {
  id: string;
  name: string;
  description: string;
  image: string;
  heroImages: { src: string; alt: string }[];
  leader: {
    name: string;
    role: string;
    image: string;
    contact: {
      email: string;
      phone: string;
    };
  };
  address: string;
  meetingTimes: string[];
  activities: {
    title: string;
    description: string;
  }[];
};

const countries: Record<string, CountryInfo> = {
  senegal: {
    id: "senegal",
    name: "Sénégal",
    description:
      "Le Sénégal est le pays d'origine de l'Apostolat Génération David. Notre communauté y est très active avec des groupes de prière dans plusieurs villes. Nous organisons régulièrement des retraites spirituelles, des sessions de formation et des événements d'évangélisation pour la jeunesse sénégalaise.",
    image: "/placeholder.svg?height=400&width=600",
    heroImages: [
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Sénégal - Image 1",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Sénégal - Image 2",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Sénégal - Image 3",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Sénégal - Image 4",
      },
    ],
    leader: {
      name: "Père Jean-Baptiste Sène",
      role: "Coordinateur National",
      image: "/placeholder.svg?height=100&width=100",
      contact: {
        email: "senegal@generationdavid.org",
        phone: "+221 XX XXX XX XX",
      },
    },
    address: "Paroisse Saint-Dominique, Dakar, Sénégal",
    meetingTimes: [
      "Mardi: 18h00 - 20h00 (Prière d'intercession)",
      "Vendredi: 19h00 - 21h00 (Louange et adoration)",
      "Dimanche: 15h00 - 17h00 (Formation des jeunes)",
    ],
    activities: [
      {
        title: "Évangélisation de rue",
        description:
          "Nous organisons des sorties d'évangélisation dans les quartiers de Dakar et dans les villes environnantes.",
      },
      {
        title: "Retraites spirituelles",
        description:
          "Des retraites trimestrielles pour approfondir la vie spirituelle et l'intimité avec le Seigneur.",
      },
      {
        title: "Formation au leadership",
        description:
          "Des sessions de formation pour les jeunes leaders chrétiens qui souhaitent impacter leur milieu.",
      },
    ],
  },
  "cote-ivoire": {
    id: "cote-ivoire",
    name: "Côte d'Ivoire",
    description:
      "La Côte d'Ivoire est l'un des pays où l'Apostolat Génération David connaît une forte croissance. Nos activités se concentrent principalement à Abidjan et Yamoussoukro, avec des groupes de prière dynamiques et engagés dans l'évangélisation de la jeunesse ivoirienne.",
    image: "/placeholder.svg?height=400&width=600",
    heroImages: [
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Côte d'Ivoire - Image 1",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Côte d'Ivoire - Image 2",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Côte d'Ivoire - Image 3",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Côte d'Ivoire - Image 4",
      },
    ],
    leader: {
      name: "Soeur Marie-Claire Kouamé",
      role: "Coordinatrice Nationale",
      image: "/placeholder.svg?height=100&width=100",
      contact: {
        email: "cotedivoire@generationdavid.org",
        phone: "+225 XX XX XX XX XX",
      },
    },
    address: "Paroisse Saint-Paul, Abidjan, Côte d'Ivoire",
    meetingTimes: [
      "Mercredi: 18h30 - 20h30 (Prière charismatique)",
      "Samedi: 15h00 - 17h00 (Formation des jeunes)",
      "Dimanche: 16h00 - 18h00 (Louange et adoration)",
    ],
    activities: [
      {
        title: "Missions d'évangélisation",
        description:
          "Organisation de missions d'évangélisation dans les universités et les lycées d'Abidjan.",
      },
      {
        title: "Conférences sur la foi",
        description:
          "Des conférences mensuelles sur des thèmes liés à la foi chrétienne et aux défis de la jeunesse.",
      },
      {
        title: "Accompagnement spirituel",
        description:
          "Un service d'accompagnement spirituel pour les jeunes en quête de discernement.",
      },
    ],
  },
  france: {
    id: "france",
    name: "France",
    description:
      "En France, l'Apostolat Génération David est présent dans plusieurs villes, notamment Paris, Lyon et Marseille. Nous travaillons en collaboration avec les paroisses locales pour offrir aux jeunes des espaces de prière, de formation et d'évangélisation.",
    image: "/placeholder.svg?height=400&width=600",
    heroImages: [
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David France - Image 1",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David France - Image 2",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David France - Image 3",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David France - Image 4",
      },
    ],
    leader: {
      name: "Père Michel Dupont",
      role: "Coordinateur National",
      image: "/placeholder.svg?height=100&width=100",
      contact: {
        email: "france@generationdavid.org",
        phone: "+33 X XX XX XX XX",
      },
    },
    address: "Église Saint-Joseph, Paris, France",
    meetingTimes: [
      "Lundi: 19h00 - 21h00 (Prière des jeunes)",
      "Jeudi: 20h00 - 22h00 (Adoration eucharistique)",
      "Samedi: 14h00 - 16h00 (Formation biblique)",
    ],
    activities: [
      {
        title: "Soirées de louange",
        description:
          "Organisation de soirées de louange et d'adoration ouvertes à tous les jeunes.",
      },
      {
        title: "Pèlerinages",
        description:
          "Des pèlerinages annuels vers des lieux saints pour approfondir la foi.",
      },
      {
        title: "Groupes de partage",
        description:
          "Des groupes de partage biblique pour grandir ensemble dans la foi.",
      },
    ],
  },
  canada: {
    id: "canada",
    name: "Canada",
    description:
      "Au Canada, l'Apostolat Génération David est en phase de développement, principalement à Montréal et à Québec. Nous travaillons à établir des groupes de prière solides et à former des leaders pour l'évangélisation de la jeunesse canadienne.",
    image: "/placeholder.svg?height=400&width=600",
    heroImages: [
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Canada - Image 1",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Canada - Image 2",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Canada - Image 3",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Canada - Image 4",
      },
    ],
    leader: {
      name: "Frère Paul Tremblay",
      role: "Coordinateur National",
      image: "/placeholder.svg?height=100&width=100",
      contact: {
        email: "canada@generationdavid.org",
        phone: "+1 XXX XXX XXXX",
      },
    },
    address: "Paroisse Notre-Dame, Montréal, Canada",
    meetingTimes: [
      "Mardi: 19h00 - 21h00 (Prière et louange)",
      "Vendredi: 18h30 - 20h30 (Formation des jeunes)",
      "Dimanche: 14h00 - 16h00 (Évangélisation)",
    ],
    activities: [
      {
        title: "Café-rencontres",
        description:
          "Organisation de café-rencontres pour discuter de la foi dans un cadre convivial.",
      },
      {
        title: "Retraites hivernales",
        description:
          "Des retraites spirituelles pendant la période hivernale pour approfondir la relation avec Dieu.",
      },
      {
        title: "Service communautaire",
        description:
          "Des actions de service auprès des plus démunis pour vivre concrètement l'Évangile.",
      },
    ],
  },
  togo: {
    id: "togo",
    name: "Togo",
    description:
      "Au Togo, l'Apostolat Génération David est en phase d'implantation. Nous travaillons à établir des bases solides pour notre mission d'évangélisation auprès de la jeunesse togolaise, principalement à Lomé.",
    image: "/placeholder.svg?height=400&width=600",
    heroImages: [
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Togo - Image 1",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Togo - Image 2",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Togo - Image 3",
      },
      {
        src: "/placeholder.svg?height=600&width=1200",
        alt: "Génération David Togo - Image 4",
      },
    ],
    leader: {
      name: "Frère Emmanuel Agbodjan",
      role: "Coordinateur National",
      image: "/placeholder.svg?height=100&width=100",
      contact: {
        email: "togo@generationdavid.org",
        phone: "+228 XX XX XX XX",
      },
    },
    address: "Cathédrale Sacré-Cœur, Lomé, Togo",
    meetingTimes: [
      "Mercredi: 17h00 - 19h00 (Prière d'intercession)",
      "Samedi: 15h00 - 17h00 (Formation spirituelle)",
      "Dimanche: 15h30 - 17h30 (Louange et témoignages)",
    ],
    activities: [
      {
        title: "Évangélisation des jeunes",
        description:
          "Organisation de campagnes d'évangélisation dans les écoles et les universités.",
      },
      {
        title: "Formation des leaders",
        description:
          "Des sessions de formation pour les jeunes leaders chrétiens togolais.",
      },
      {
        title: "Prière pour le pays",
        description:
          "Des temps de prière spécifiques pour le Togo et son développement.",
      },
    ],
  },
};

export default async function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const { country } = await params;
  const actualContry = country;
  const countryInfo = countries[actualContry];

  if (!countryInfo) {
    return (
      <div className="container px-4 md:px-6 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-orange-500">
          Pays non trouvé
        </h1>
        <p className="mb-6">
          Désolé, nous n&apos;avons pas d&apos;informations sur ce pays.
        </p>
        <Button asChild className="bg-orange-500 hover:bg-orange-600">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        images={countryInfo.heroImages}
        title={`Génération David ${countryInfo.name}`}
        description={countryInfo.description}
        className="h-[50vh] md:h-[60vh]"
      />
      {/* Country Selector */}
      <CountrySelector actual={actualContry} />

      {/* Country Information */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={countryInfo.leader.image || "/placeholder.svg"}
                      alt={countryInfo.leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-orange-500">
                    {countryInfo.leader.name}
                  </h3>
                  <p className="text-gray-600">{countryInfo.leader.role}</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{countryInfo.address}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      {countryInfo.leader.contact.email}
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      {countryInfo.leader.contact.phone}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
                <h3 className="text-lg font-bold text-orange-500 mb-4">
                  Horaires des rencontres
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {countryInfo.meetingTimes.map((time, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-orange-500 mb-6">
                Nos activités au {countryInfo.name}
              </h2>
              <div className="space-y-6">
                {countryInfo.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                  >
                    <h3 className="text-xl font-bold text-orange-500 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">
                  Rejoindre notre communauté
                </h2>
                <div className="bg-sky-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Vous souhaitez rejoindre l&apos;Apostolat Génération David
                    au {countryInfo.name} ? Contactez-nous ou venez participer à
                    l&apos;une de nos rencontres. Nous serons heureux de vous
                    accueillir et de vous accompagner dans votre cheminement
                    spirituel.
                  </p>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
