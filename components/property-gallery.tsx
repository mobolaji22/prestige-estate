"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const openFullscreen = (index: number) => {
    setFullscreenImage(index);
    setIsFullscreen(true);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt="Property image"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={() => openFullscreen(currentImage)}>
          <Maximize2 className="h-5 w-5" />
          <span className="sr-only">View fullscreen</span>
        </Button>
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={prevImage}>
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={nextImage}>
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square overflow-hidden rounded-md ${
                index === currentImage ? "ring-2 ring-neutral-900" : ""
              }`}
              onClick={() => setCurrentImage(index)}>
              <Image
                src={image || "/placeholder.svg"}
                alt={`Property image ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === 3 && images.length > 4 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                  <span>+{images.length - 4}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogTrigger className="hidden">Open</DialogTrigger>
        <DialogContent className="max-w-5xl p-0">
          <div className="relative aspect-[16/9]">
            <Image
              src={images[fullscreenImage] || "/placeholder.svg"}
              alt="Property image fullscreen"
              fill
              className="object-contain"
            />
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={() =>
                    setFullscreenImage((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    )
                  }>
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={() =>
                    setFullscreenImage((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    )
                  }>
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </>
            )}
          </div>
          <div className="p-4 text-center">
            <p>
              {fullscreenImage + 1} of {images.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
