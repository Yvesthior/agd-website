"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

type Testimonial = {
  id: string
  name: string
  role: string
  country: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Diop",
    role: "Membre depuis 2022",
    country: "Sénégal",
    quote:
      "L'Apostolat Génération David a complètement transformé ma vie spirituelle. J'ai appris à prier avec ferveur et à développer une véritable intimité avec le Seigneur.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    name: "Jean Kouassi",
    role: "Leader de prière",
    country: "Côte d'Ivoire",
    quote:
      "Grâce à la formation reçue à l'Académie caverne d'Adullam, j'ai découvert mes dons spirituels et je suis maintenant capable de les mettre au service de l'évangélisation.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    name: "Sophie Martin",
    role: "Nouvelle convertie",
    country: "France",
    quote:
      "J'ai rencontré le Christ lors d'une retraite organisée par Génération David. Aujourd'hui, je vis pleinement ma foi et je participe activement à l'évangélisation de la jeunesse.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">Témoignages</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez comment l&apos;Apostolat Génération David transforme la vie des jeunes à travers le monde.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg p-6 md:p-10">
            <div className="absolute top-6 left-6 md:top-10 md:left-10 text-purple-200">
              <Quote className="h-16 w-16 md:h-24 md:w-24 opacity-20" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg md:text-xl text-gray-700 italic mb-6 max-w-3xl">
                  "{testimonials[currentIndex].quote}"
                </p>
                <h3 className="text-xl font-bold text-purple-900">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].country}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  currentIndex === index ? "bg-purple-900 w-6" : "bg-gray-300",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 md:p-3"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-purple-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 md:p-3"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-purple-900" />
          </button>
        </div>
      </div>
    </section>
  )
}

