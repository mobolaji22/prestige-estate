"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from "@/hooks/use-auth"

export function PropertyRecommendations() {
  const { isAuthenticated } = useAuth()
  const [preferences, setPreferences] = useState({
    location: "",
    minBedrooms: 0,
    maxPrice: 0,
    propertyType: "",
  })

  // Sample recommended properties
  const recommendedProperties = [
    {
      id: "rec1",
      title: "Oceanfront Modern Villa",
      image: "/placeholder.svg?height=200&width=300",
      price: "$3,850,000",
      location: "Malibu, CA",
      match: "98% match",
    },
    {
      id: "rec2",
      title: "Downtown Luxury Condo",
      image: "/placeholder.svg?height=200&width=300",
      price: "$2,450,000",
      location: "Beverly Hills, CA",
      match: "95% match",
    },
    {
      id: "rec3",
      title: "Hillside Contemporary Estate",
      image: "/placeholder.svg?height=200&width=300",
      price: "$5,200,000",
      location: "Hollywood Hills, CA",
      match: "92% match",
    },
  ]

  if (!isAuthenticated) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Get Personalized Recommendations</h3>
            <p className="mt-2 text-neutral-600">
              Create an account to receive property recommendations tailored to your preferences.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild>
                <Link href="/sign-up">Create Account</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {recommendedProperties.map((property) => (
          <Card key={property.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="relative aspect-[4/3]">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute right-2 top-2 rounded-full bg-neutral-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {property.match}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{property.title}</h3>
              <p className="text-sm text-neutral-500">{property.location}</p>
              <div className="mt-2 text-lg font-semibold">{property.price}</div>
              <Button className="mt-4 w-full group" variant="outline" asChild>
                <Link href={`/properties/${property.id}`}>
                  View Property
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button asChild>
          <Link href="/account/preferences">Update Your Preferences</Link>
        </Button>
      </div>
    </div>
  )
}
