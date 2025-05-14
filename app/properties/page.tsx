import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PropertyFilter } from "@/components/property-filter";
import { Preloader } from "@/components/preloader";
import { properties as mockProperties, Property } from "@/lib/mock-data"; // Added import

export default function PropertiesPage() {
  const allProperties = Object.values(mockProperties); // Get all properties from mock data
  return (
    <>
      <Preloader />
      <div className="min-h-screen">
        {/* Header */}
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
                href="#properties"
                className="text-sm font-medium transition-colors hover:text-neutral-500 smooth-scroll">
                Featured
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-neutral-500 smooth-scroll">
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium transition-colors hover:text-neutral-500 smooth-scroll">
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-neutral-500 smooth-scroll">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:block">
                <Link href="#contact">Book a Consultation</Link>
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
              href="#properties"
              className="text-lg font-medium transition-colors hover:text-neutral-500 smooth-scroll">
              Featured
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium transition-colors hover:text-neutral-500 smooth-scroll">
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium transition-colors hover:text-neutral-500 smooth-scroll">
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium transition-colors hover:text-neutral-500 smooth-scroll">
              Contact
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium transition-colors hover:text-neutral-500">
              Book a Consultation
            </Link>
          </nav>
        </div>

        <main className="container py-12">
          <div className="mb-8 flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to home</span>
              </Link>
            </Button>
            <h1 className="font-serif text-3xl font-bold tracking-tight">
              All Properties
            </h1>
          </div>

          <div className="space-y-12">
            <PropertyFilter allProperties={allProperties} />{" "}
            {/* Pass properties to PropertyFilter */}
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
