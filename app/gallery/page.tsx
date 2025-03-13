"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/hero-slider";

type GalleryCategory =
  | "all"
  | "retreats"
  | "conferences"
  | "worship"
  | "evangelization"
  | "training";

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  country: string;
  category: GalleryCategory;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Retraite spirituelle à Dakar",
    description:
      "Retraite spirituelle des jeunes au centre spirituel de Dakar. Trois jours de prière, d'enseignement et de communion fraternelle.",
    date: "Mars 2024",
    country: "Sénégal",
    category: "retreats",
    image: "/images/gallery1.jpg",
  },
  {
    id: "2",
    title: "Conférence sur le leadership chrétien",
    description:
      "Conférence sur le leadership chrétien à Abidjan. Formation des jeunes leaders pour impacter leur milieu.",
    date: "Février 2024",
    country: "Côte d'Ivoire",
    category: "conferences",
    image: "/images/gallery1.jpg",
  },
  {
    id: "3",
    title: "Soirée de louange à Paris",
    description:
      "Soirée de louange et d'adoration à l'église Saint-Joseph de Paris. Un moment fort de communion avec le Seigneur.",
    date: "Janvier 2024",
    country: "France",
    category: "worship",
    image: "/images/gallery1.jpg",
  },
  {
    id: "4",
    title: "Mission d'évangélisation à Montréal",
    description:
      "Mission d'évangélisation dans les rues de Montréal. Partage de l'Évangile et témoignages.",
    date: "Décembre 2023",
    country: "Canada",
    category: "evangelization",
    image: "/images/gallery1.jpg",
  },
  {
    id: "5",
    title: "Formation des jeunes à Lomé",
    description:
      "Session de formation pour les jeunes leaders à Lomé. Développement des compétences en leadership et en évangélisation.",
    date: "Novembre 2023",
    country: "Togo",
    category: "training",
    image: "/images/gallery1.jpg",
  },
  {
    id: "6",
    title: "Camp de jeunes au Sénégal",
    description:
      "Camp de jeunes au bord de la mer à Mbour. Une semaine de formation, de prière et d'activités récréatives.",
    date: "Octobre 2023",
    country: "Sénégal",
    category: "retreats",
    image: "/images/gallery1.jpg",
  },
  {
    id: "7",
    title: "Conférence sur la vie dans l'Esprit",
    description:
      "Conférence sur la vie dans l'Esprit à Abidjan. Enseignements sur les dons et les fruits de l'Esprit Saint.",
    date: "Septembre 2023",
    country: "Côte d'Ivoire",
    category: "conferences",
    image: "/images/gallery1.jpg",
  },
  {
    id: "8",
    title: "Veillée d'adoration à Lyon",
    description:
      "Veillée d'adoration eucharistique à Lyon. Un temps fort de prière et d'intimité avec le Seigneur.",
    date: "Août 2023",
    country: "France",
    category: "worship",
    image: "/images/gallery1.jpg",
  },
  {
    id: "9",
    title: "Évangélisation dans les universités",
    description:
      "Campagne d'évangélisation dans les universités de Québec. Témoignages et partage de l'Évangile avec les étudiants.",
    date: "Juillet 2023",
    country: "Canada",
    category: "evangelization",
    image: "/images/gallery1.jpg",
  },
  {
    id: "10",
    title: "Formation à la prière d'intercession",
    description:
      "Session de formation à la prière d'intercession à Lomé. Apprentissage des techniques de prière et mise en pratique.",
    date: "Juin 2023",
    country: "Togo",
    category: "training",
    image: "/images/gallery1.jpg",
  },
  {
    id: "11",
    title: "Retraite de Pentecôte",
    description:
      "Retraite de Pentecôte à Dakar. Un week-end pour se préparer à recevoir l'effusion de l'Esprit Saint.",
    date: "Mai 2023",
    country: "Sénégal",
    category: "retreats",
    image: "/images/gallery1.jpg",
  },
  {
    id: "12",
    title: "Conférence sur la mission des jeunes",
    description:
      "Conférence sur la mission des jeunes dans l'Église à Abidjan. Réflexion sur le rôle des jeunes dans l'évangélisation.",
    date: "Avril 2023",
    country: "Côte d'Ivoire",
    category: "conferences",
    image: "/images/gallery1.jpg",
  },
];

const heroImages = [
  {
    src: "/images/header1.jpg",
    alt: "Galerie Génération David - Image 1",
  },
  {
    src: "/images/header2.jpg",
    alt: "Galerie Génération David - Image 2",
  },
  {
    src: "/images/header3.jpg",
    alt: "Galerie Génération David - Image 3",
  },
  {
    src: "/images/header4.jpg",
    alt: "Galerie Génération David - Image 4",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const categories = [
    { id: "all", label: "Tous" },
    { id: "retreats", label: "Retraites" },
    { id: "conferences", label: "Conférences" },
    { id: "worship", label: "Louange" },
    { id: "evangelization", label: "Évangélisation" },
    { id: "training", label: "Formation" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        images={heroImages}
        title="Galerie"
        description="Découvrez en images les moments forts de l'Apostolat Génération David à travers le monde."
        className="h-[50vh] md:h-[60vh]"
      />

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() =>
                  setActiveCategory(category.id as GalleryCategory)
                }
                className={`mb-2 ${
                  activeCategory === category.id
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-50"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-gray-200 text-sm">
                    {item.date} - {item.country}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Aucune image trouvée pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-1 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-[60vh]">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-orange-500">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {selectedImage.date} - {selectedImage.country}
              </p>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
