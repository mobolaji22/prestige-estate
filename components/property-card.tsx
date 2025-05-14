"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Expand, MapPin, ArrowRight, Maximize2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
  featured?: boolean;
  hasVirtualTour?: boolean;
  className?: string;
}

export default function PropertyCard({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  images,
  featured = false,
  hasVirtualTour = false,
  className,
}: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef<"left" | "middle" | "right" | null>(null);
  const initialMouseEnterRef = useRef(false);

  const nextImage = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleMouseEnter = () => {
    if (images.length <= 1) return;
    if (!initialMouseEnterRef.current) {
      nextImage();
      initialMouseEnterRef.current = true;
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (images.length <= 1) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    let currentMouseSection: "left" | "middle" | "right";

    if (x < width / 3) {
      currentMouseSection = "left";
    } else if (x < (width * 2) / 3) {
      currentMouseSection = "middle";
    } else {
      currentMouseSection = "right";
    }

    if (currentMouseSection !== activeSectionRef.current) {
      if (currentMouseSection === "left") {
        prevImage();
      } else if (currentMouseSection === "right") {
        nextImage();
      }
      activeSectionRef.current = currentMouseSection;
    }
  };

  const handleMouseLeave = () => {
    if (images.length <= 1) return;
    activeSectionRef.current = null;
    initialMouseEnterRef.current = false;
    setCurrentImage(0);
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md",
        featured && "border-2",
        className
      )}>
      <div
        className="relative aspect-[4/3]"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <div className="absolute inset-0">
          <Image
            src={images[currentImage] || "/placeholder.svg"}
            alt={title}
            fill
            className={cn("object-cover transition-all duration-500")}
            priority={featured}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {/* Featured Badge */}
        {featured && (
          <div className="absolute left-2 top-2 rounded-full bg-neutral-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Featured
          </div>
        )}

        {/* Virtual Tour Badge */}
        {hasVirtualTour && (
          <div className="absolute right-2 top-2 rounded-full bg-neutral-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <div className="flex items-center gap-1">
              <Maximize2 className="h-3 w-3" />
              <span>3D Tour</span>
            </div>
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
            {currentImage + 1}/{images.length}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{title}</h3>
            <div className="mt-1 flex items-center text-sm text-neutral-500">
              <MapPin className="mr-1 h-3 w-3" />
              {address}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">{price}</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm">
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4 text-neutral-500" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4 text-neutral-500" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Expand className="mr-1 h-4 w-4 text-neutral-500" />
            <span>{squareFeet} sq ft</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t p-4">
        <Button className="w-full group" asChild>
          <Link href={`/properties/${id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
