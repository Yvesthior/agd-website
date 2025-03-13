import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  country: string
  image: string
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Retraite spirituelle de la jeunesse",
    date: "15-17 Avril 2025",
    time: "09:00 - 18:00",
    location: "Centre spirituel, Dakar",
    country: "Sénégal",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Conférence sur le leadership chrétien",
    date: "5 Mai 2025",
    time: "14:00 - 17:00",
    location: "Paroisse Saint Paul, Abidjan",
    country: "Côte d'Ivoire",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Soirée de louange et adoration",
    date: "20 Mai 2025",
    time: "19:00 - 22:00",
    location: "Église Saint Joseph, Paris",
    country: "France",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function UpcomingEvents() {
  return (
    <section id="events" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
              Événements à venir
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez nos prochains événements dans différents pays et rejoignez-nous pour vivre des moments de
              communion fraternelle.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute top-3 right-3 bg-purple-900 text-white text-xs font-bold px-2 py-1 rounded">
                  {event.country}
                </div>
              </div>
              <div className="flex flex-col p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-purple-900">{event.title}</h3>
                <div className="space-y-2 mb-4 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-purple-900 font-medium hover:underline"
                  >
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/events">Voir tous les événements</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

