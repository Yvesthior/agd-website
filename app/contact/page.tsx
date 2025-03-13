"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import HeroSlider from "@/components/hero-slider"

const heroImages = [
  { src: "/placeholder.svg?height=600&width=1200", alt: "Contact Génération David - Image 1" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Contact Génération David - Image 2" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Contact Génération David - Image 3" },
  { src: "/placeholder.svg?height=600&width=1200", alt: "Contact Génération David - Image 4" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    country: "",
    subject: "",
    message: "",
    contactType: "general",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, contactType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission, e.g., send data to an API
    console.log(formState)
    alert("Votre message a été envoyé. Nous vous contacterons bientôt.")
    // Reset form
    setFormState({
      name: "",
      email: "",
      country: "",
      subject: "",
      message: "",
      contactType: "general",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider
        images={heroImages}
        title="Contactez-nous"
        description="Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou information."
        className="h-[50vh] md:h-[60vh]"
      />

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-6">Nos coordonnées</h2>

              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Siège international</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Dakar, Sénégal</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">contact@generationdavid.org</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">+221 XX XXX XX XX</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h3 className="font-bold text-orange-500 mb-2">Côte d&apos;Ivoire</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <Mail className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">cotedivoire@generationdavid.org</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Phone className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">+225 XX XX XX XX XX</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h3 className="font-bold text-orange-500 mb-2">France</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <Mail className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">france@generationdavid.org</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Phone className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">+33 X XX XX XX XX</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h3 className="font-bold text-orange-500 mb-2">Canada</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <Mail className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">canada@generationdavid.org</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Phone className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">+1 XXX XXX XXXX</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <h3 className="font-bold text-orange-500 mb-2">Togo</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <Mail className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">togo@generationdavid.org</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Phone className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">+228 XX XX XX XX</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-sky-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">Horaires</h3>
                  <p className="text-gray-700">
                    Notre équipe est disponible pour vous répondre du lundi au vendredi, de 9h à 18h (heure locale).
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-6">Envoyez-nous un message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Pays</Label>
                  <Select value={formState.country} onValueChange={(value) => handleSelectChange("country", value)}>
                    <SelectTrigger className="border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                      <SelectValue placeholder="Sélectionnez votre pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="senegal">Sénégal</SelectItem>
                      <SelectItem value="cote-ivoire">Côte d&apos;Ivoire</SelectItem>
                      <SelectItem value="france">France</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="togo">Togo</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Type de demande</Label>
                  <RadioGroup
                    value={formState.contactType}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general">Renseignement général</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="join" id="join" />
                      <Label htmlFor="join">Rejoindre l&apos;apostolat</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prayer" id="prayer" />
                      <Label htmlFor="prayer">Demande de prière</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Autre</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

