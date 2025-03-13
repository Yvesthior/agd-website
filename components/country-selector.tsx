"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Country = {
  id: string;
  name: string;
  flag: string;
};

const countries: Country[] = [
  { id: "senegal", name: "Sénégal", flag: "/images/drapeauSenegal.webp" },
  {
    id: "cote-ivoire",
    name: "Côte d'Ivoire",
    flag: "/images/drapeauCoteIvoire.svg",
  },
  { id: "france", name: "France", flag: "/images/drapeauFrance.webp" },
  { id: "canada", name: "Canada", flag: "/images/drapeauCanada.webp" },
  { id: "togo", name: "Togo", flag: "/images/drapeauTogo.webp" },
];

export default function CountrySelector({
  actual = "senegal",
}: {
  actual?: string;
}) {
  const [selectedCountry, setSelectedCountry] = useState<string>("senegal");
  useEffect(() => {
    setSelectedCountry(actual);
  }, [actual]);

  return (
    <div className="bg-sky-50 py-3 border-b">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Sélectionnez votre pays:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.id}`}
                onClick={() => setSelectedCountry(country.id)}
                className={cn(
                  "flex items-center space-x-2 py-1 px-2 rounded-md text-sm transition-colors",
                  selectedCountry === country.id
                    ? "bg-orange-100 text-orange-500"
                    : "hover:bg-sky-100"
                )}
              >
                <Image
                  src={country.flag || "/placeholder.svg"}
                  alt={`Drapeau ${country.name}`}
                  width={24}
                  height={16}
                  className="rounded-sm"
                />
                <span>{country.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
