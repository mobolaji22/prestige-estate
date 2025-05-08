"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2 } from "lucide-react"
import { VirtualTour } from "./virtual-tour"

interface VirtualTourThumbnailProps {
  propertyId: string
  propertyName: string
  thumbnailImage?: string
}

export function VirtualTourThumbnail({
  propertyId,
  propertyName,
  thumbnailImage = "/placeholder.svg?height=400&width=600",
}: VirtualTourThumbnailProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative aspect-video overflow-hidden rounded-lg border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={thumbnailImage || "/placeholder.svg"}
        alt={`Virtual tour of ${propertyName}`}
        fill
        className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-medium text-white">Virtual Tour</h3>
        <p className="text-sm text-white/80">Experience this property in 360°</p>

        <div className="mt-3">
          <VirtualTour propertyId={propertyId} propertyName={propertyName} />
        </div>
      </div>

      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-neutral-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Maximize2 className="h-5 w-5" />
      </div>
    </div>
  )
}
