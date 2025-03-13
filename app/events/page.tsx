import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/hero-slider";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  country: string;
  description: string;
  image: string;
};

const events: Event[] = [
  {
    id: "1",
    title: "Retraite spirituelle de la jeunesse",
    date: "15-17 Avril 2025",
    time: "09:00 - 18:00",
    location: "Centre spirituel, Dakar",
    country: "Sénégal",
    description:
      "Une retraite de trois jours pour approfondir votre relation avec Dieu, apprendre à prier et développer votre vie spirituelle. Au programme : enseignements, adoration, confession, accompagnement spirituel.",
    image: "/images/gallery1.jpg",
  },
  {
    id: "2",
    title: "Conférence sur le leadership chrétien",
    date: "5 Mai 2025",
    time: "14:00 - 17:00",
    location: "Paroisse Saint Paul, Abidjan",
    country: "Côte d'Ivoire",
    description:
      "Une conférence pour former les jeunes leaders chrétiens à impacter leur milieu socio-professionnel à la lumière de l'Évangile. Intervenants de qualité et ateliers pratiques.",
    image: "/images/gallery1.jpg",
  },
  {
    id: "3",
    title: "Soirée de louange et adoration",
    date: "20 Mai 2025",
    time: "19:00 - 22:00",
    location: "Église Saint Joseph, Paris",
    country: "France",
    description:
      "Une soirée pour louer et adorer le Seigneur dans la puissance du Saint-Esprit. Venez vivre un temps fort de prière et d'intimité avec Dieu.",
    image: "/images/gallery1.jpg",
  },
  {
    id: "4",
    title: "Formation à l'évangélisation",
    date: "10 Juin 2025",
    time: "10:00 - 16:00",
    location: "Paroisse Notre-Dame, Montréal",
    country: "Canada",
    description:
      "Une journée de formation pour apprendre à partager sa foi et à évangéliser efficacement. Techniques d'approche, réponses aux objections, témoignage personnel.",
    image: "/images/gallery1.jpg",
  },
  {
    id: "5",
    title: "Camp de jeunes",
    date: "15-22 Juillet 2025",
    time: "Toute la journée",
    location: "Centre de retraite, Lomé",
    country: "Togo",
    description:
      "Une semaine de camp pour les jeunes de 15 à 25 ans. Au programme : formation, prière, sports, activités créatives, veillées et évangélisation.",
    image: "/images/gallery1.jpg",
  },
  {
    id: "6",
    title: "Pèlerinage des jeunes",
    date: "1-5 Août 2025",
    time: "Selon programme",
    location: "Popenguine",
    country: "Sénégal",
    description:
      "Un pèlerinage pour les jeunes au sanctuaire marial de Popenguine. Marche, prière, messe, confession et temps de partage fraternel.",
    image: "/images/gallery1.jpg",
  },
];

const heroImages = [
  {
    src: "/images/header2.jpg",
    alt: "Événements Génération David - Image 1",
  },
  {
    src: "/images/header2.jpg",
    alt: "Événements Génération David - Image 2",
  },
  {
    src: "/images/header2.jpg",
    alt: "Événements Génération David - Image 3",
  },
  {
    src: "/images/header2.jpg",
    alt: "Événements Génération David - Image 4",
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        images={heroImages}
        title="Nos Événements"
        description="Découvrez tous les événements organisés par l'Apostolat Génération David à travers le monde et rejoignez-nous pour vivre des moments de communion fraternelle."
        className="h-[50vh] md:h-[60vh]"
      />

      {/* Events Listing */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold text-orange-500">
              Tous les événements
            </h2>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <Button
                variant="outline"
                className="flex items-center border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filtrer par pays
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {event.country}
                  </div>
                </div>
                <div className="flex flex-col p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-orange-500">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0 text-orange-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-orange-500 font-medium hover:underline"
                    >
                      En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas l&apos;événement que vous cherchez ?
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
