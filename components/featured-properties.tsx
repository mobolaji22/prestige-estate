"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import PropertyCard from "./property-card"

export function FeaturedProperties() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 300)
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
      const newPosition = Math.min(maxScroll, scrollPosition + 300)
      scrollContainerRef.current.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  const properties = [
    {
      id: "prop1",
      title: "Modern Beachfront Villa",
      address: "123 Ocean Drive, Malibu, CA",
      price: "$4,500,000",
      bedrooms: 5,
      bathrooms: 6,
      squareFeet: 4200,
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      featured: true,
      hasVirtualTour: true,
    },
    {
      id: "prop2",
      title: "Luxury Penthouse",
      address: "456 Skyline Ave, Beverly Hills, CA",
      price: "$3,200,000",
      bedrooms: 3,
      bathrooms: 3.5,
      squareFeet: 2800,
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
      hasVirtualTour: true,
    },
    {
      id: "prop3",
      title: "Contemporary Hillside Estate",
      address: "789 Summit Rd, Hollywood Hills, CA",
      price: "$7,900,000",
      bedrooms: 6,
      bathrooms: 8,
      squareFeet: 6500,
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      hasVirtualTour: false,
    },
    {
      id: "prop4",
      title: "Elegant Downtown Loft",
      address: "101 Arts District, Los Angeles, CA",
      price: "$1,850,000",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1800,
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
      hasVirtualTour: false,
    },
    {
      id: "prop5",
      title: "Mediterranean Villa",
      address: "222 Coastal Highway, Santa Barbara, CA",
      price: "$5,400,000",
      bedrooms: 5,
      bathrooms: 5.5,
      squareFeet: 4800,
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
      featured: true,
      hasVirtualTour: true,
    },
  ]

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
      >
        {properties.map((property) => (
          <div key={property.id} className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white shadow-sm transition-opacity duration-300"
          onClick={scrollLeft}
          disabled={scrollPosition === 0}
          style={{ opacity: scrollPosition === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white shadow-sm transition-opacity duration-300"
          onClick={scrollRight}
          disabled={
            scrollContainerRef.current &&
            scrollPosition >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
          }
          style={{
            opacity:
              scrollContainerRef.current &&
              scrollPosition >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
                ? 0.5
                : 1,
          }}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}
