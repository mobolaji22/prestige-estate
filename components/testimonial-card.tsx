import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, role, image, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-neutral-500">{role}</p>
          </div>
        </div>
        <div className="mt-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"}`}
            />
          ))}
        </div>
        <blockquote className="mt-4 text-neutral-600">"{quote}"</blockquote>
      </CardContent>
    </Card>
  )
}
