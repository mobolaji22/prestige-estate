"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function VirtualTourBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-neutral-900 py-12 text-white">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/placeholder.webp?height=400&width=1200"
          alt="Luxury property"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Experience Our Properties in Virtual Reality
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Take an immersive 3D tour of our luxury properties from the comfort
            of your home.
          </p>
          <div className="mt-8">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-black hover:bg-white/10">
                  Start Virtual Tour
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px]">
                <DialogHeader>
                  <DialogTitle>
                    Virtual Tour - Modern Beachfront Villa
                  </DialogTitle>
                </DialogHeader>
                <div className="relative aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
                    <div className="text-center">
                      <p className="text-neutral-500">
                        Virtual tour would be embedded here using a 3D tour
                        provider like Matterport
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="aspect-video rounded bg-neutral-200"></div>
                        <div className="aspect-video rounded bg-neutral-200"></div>
                        <div className="aspect-video rounded bg-neutral-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
