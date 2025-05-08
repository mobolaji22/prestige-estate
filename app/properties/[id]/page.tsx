import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bath, Bed, Check, Expand, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyGallery } from "@/components/property-gallery";
import { Preloader } from "@/components/preloader";
import { VirtualTour } from "@/components/virtual-tour";
import { VirtualTourThumbnail } from "@/components/virtual-tour-thumbnail";
import { PropertyViewingScheduler } from "@/components/property-viewing-scheduler";
import { getPropertyById } from "@/lib/mock-data";

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id);

  if (!property) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <p className="mt-4">The property you are looking for does not exist.</p>
        <Button className="mt-8" asChild>
          <Link href="/properties">View All Properties</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Preloader />
      <div className="min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-950"></div>
                  <div className="absolute inset-[2px] rounded-full bg-white"></div>
                  <div className="absolute inset-[4px] rounded-full bg-gradient-to-r from-neutral-800 to-neutral-950"></div>
                </div>
                <span className="text-xl font-semibold tracking-tight">
                  Prestige Estates
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex md:gap-6 lg:gap-10">
              <Link
                href="/#properties"
                className="text-sm font-medium transition-colors hover:text-neutral-500">
                Properties
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium transition-colors hover:text-neutral-500">
                About
              </Link>
              <Link
                href="/#testimonials"
                className="text-sm font-medium transition-colors hover:text-neutral-500">
                Testimonials
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium transition-colors hover:text-neutral-500">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/properties">Back to Properties</Link>
              </Button>
              <button
                className="block md:hidden"
                aria-label="Menu"
                id="mobile-menu-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu (Hidden by default) */}
        <div
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-50 hidden w-64 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out">
          <div className="flex justify-end">
            <button
              id="close-menu-button"
              className="text-neutral-500 hover:text-neutral-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="mt-8 flex flex-col space-y-4">
            <Link
              href="/#properties"
              className="text-lg font-medium transition-colors hover:text-neutral-500">
              Properties
            </Link>
            <Link
              href="/#about"
              className="text-lg font-medium transition-colors hover:text-neutral-500">
              About
            </Link>
            <Link
              href="/#testimonials"
              className="text-lg font-medium transition-colors hover:text-neutral-500">
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-medium transition-colors hover:text-neutral-500">
              Contact
            </Link>
            <Link
              href="/properties"
              className="text-lg font-medium transition-colors hover:text-neutral-500">
              Back to Properties
            </Link>
          </nav>
        </div>

        <main className="container py-12">
          <div className="mb-8 flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/properties">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to properties</span>
              </Link>
            </Button>
            <h1 className="font-serif text-3xl font-bold tracking-tight">
              {property.title}
            </h1>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <PropertyGallery images={property.images} />

              <div className="flex items-center gap-2 text-lg font-semibold">
                <span>{property.price}</span>
                <span className="text-sm font-normal text-neutral-500">
                  ({Math.round((property.squareFeet / 1000) * 10) / 10}K sq ft)
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-neutral-500" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-neutral-500" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Expand className="h-5 w-5 text-neutral-500" />
                  <span>{property.squareFeet} sq ft</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-neutral-500" />
                <span>{property.address}</span>
              </div>

              {property.hasVirtualTour && (
                <div>
                  <VirtualTour
                    propertyId={property.id}
                    propertyName={property.title}
                  />
                </div>
              )}

              <div>
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Features</h2>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-6 space-y-4">
                  <h3 className="text-lg font-medium">Property Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Year Built:</span>
                        <span>{property.details.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Lot Size:</span>
                        <span>{property.details.lotSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Property Type:</span>
                        <span>{property.details.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Neighborhood:</span>
                        <span>{property.details.neighborhood}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Parking:</span>
                        <span>{property.details.parking}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Heating:</span>
                        <span>{property.details.heating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Cooling:</span>
                        <span>{property.details.cooling}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Basement:</span>
                        <span>{property.details.basement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Roof:</span>
                        <span>{property.details.roof}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Exterior:</span>
                        <span>{property.details.exterior}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6">
                  <h3 className="text-lg font-medium">Location</h3>
                  <div className="mt-4 aspect-video rounded-lg border bg-neutral-100 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-neutral-500">
                        Interactive map would be displayed here
                      </p>
                      <p className="text-sm text-neutral-400">
                        Location: {property.location.lat},{" "}
                        {property.location.lng}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-neutral-700">
                      Located in the prestigious {property.details.neighborhood}{" "}
                      area, this property offers convenient access to shopping,
                      dining, and entertainment options. The neighborhood is
                      known for its excellent schools and safe environment.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="mt-6">
                  <h3 className="text-lg font-medium">Contact Agent</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={property.agent.image || "/placeholder.svg"}
                          alt={property.agent.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{property.agent.name}</h4>
                        <p className="text-sm text-neutral-500">
                          {property.agent.title}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {property.agent.phone}
                        </p>
                      </div>
                    </div>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-neutral-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-neutral-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                          defaultValue={`I'm interested in ${property.title} at ${property.address}.`}></textarea>
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>

              {property.hasVirtualTour && (
                <VirtualTourThumbnail
                  propertyId={property.id}
                  propertyName={property.title}
                  thumbnailImage={property.images[0]}
                />
              )}

              {/* Property Viewing Scheduler */}
              <PropertyViewingScheduler
                propertyId={property.id}
                propertyTitle={property.title}
                propertyAddress={property.address}
              />
            </div>
          </div>
        </main>

        <footer className="border-t bg-white py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-950"></div>
                    <div className="absolute inset-[2px] rounded-full bg-white"></div>
                    <div className="absolute inset-[4px] rounded-full bg-gradient-to-r from-neutral-800 to-neutral-950"></div>
                  </div>
                  <span className="text-xl font-semibold tracking-tight">
                    Prestige Estates
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-600">
                  Specializing in luxury properties that exceed expectations.
                  Discover your dream home with our personalized approach.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Quick Links</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      href="/#properties"
                      className="text-neutral-600 hover:text-neutral-900">
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="text-neutral-600 hover:text-neutral-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#testimonials"
                      className="text-neutral-600 hover:text-neutral-900">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-neutral-600 hover:text-neutral-900">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Services</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      Buying
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      Selling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      Investing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      Property Management
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Connect</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t pt-6 text-center text-sm text-neutral-600">
              <p>
                &copy; {new Date().getFullYear()} Prestige Estates. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
