"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface HeroSliderProps {
  images: {
    src: string
    alt: string
  }[]
  title: string
  description?: string
  overlay?: boolean
  className?: string
  interval?: number
  showControls?: boolean
}

export default function HeroSlider({
  images,
  title,
  description,
  overlay = true,
  className = "",
  interval = 4000, // Changé de 3000 à 4000 ms (4 secondes)
  showControls = true,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className={`relative w-full ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {overlay && <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-sky-700/80" />}

      <div className="relative z-10 container px-4 md:px-6 mx-auto h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
            {title}
          </h1>
          {description && <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">{description}</p>}
        </div>
      </div>

      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 sm:p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 sm:p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all focus:outline-none ${
                  index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

