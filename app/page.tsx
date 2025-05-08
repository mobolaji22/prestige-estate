import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/testimonial-card";
import { FeaturedProperties } from "@/components/featured-properties";
import { HeroAnimation } from "@/components/hero-animation";
import { StatsCounter } from "@/components/stats-counter";
import { AnimatedSection } from "@/components/animated-section";
import { PropertyComparison } from "@/components/property-comparison";
import { InteractiveMap } from "@/components/interactive-map";
import { VirtualTourBanner } from "@/components/virtual-tour-banner";
// import { PropertyFilter } from "@/components/property-filter";
import { Preloader } from "@/components/preloader";
// import { properties as mockProperties, Property } from "@/lib/mock-data";

export default function Home() {
  // const allProperties: Property[] = Object.values(mockProperties);

  return (
    <>
      <Preloader />
      <div className="flex min-h-screen flex-col">
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

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <HeroAnimation />
            </div>
            <div className="container relative z-10 py-24 md:py-32 lg:py-40">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Exceptional Properties for
                  <span className="relative whitespace-nowrap">
                    <span className="relative z-10 block md:inline">
                      {" "}
                      Exceptional Lives
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute left-0 top-3/4 h-[0.4em] w-full fill-neutral-300/70"
                      preserveAspectRatio="none">
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  With over 15 years of experience, we specialize in luxury
                  properties that exceed expectations. Discover your dream home
                  with our personalized approach and unparalleled market
                  expertise.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <Button size="lg" className="group" asChild>
                    <Link href="/properties">
                      View Properties
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#about" className="smooth-scroll">
                      Meet Your Agent
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
          </section>

          {/* Stats Section */}
          <AnimatedSection className="border-y bg-neutral-50">
            <div className="container py-12 md:py-16">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <StatsCounter
                    end={15}
                    suffix="+"
                    className="text-3xl font-bold md:text-4xl"
                  />
                  <p className="mt-2 text-sm text-neutral-500">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <StatsCounter
                    end={200}
                    suffix="+"
                    className="text-3xl font-bold md:text-4xl"
                  />
                  <p className="mt-2 text-sm text-neutral-500">
                    Properties Sold
                  </p>
                </div>
                <div className="text-center">
                  <StatsCounter
                    end={95}
                    suffix="%"
                    className="text-3xl font-bold md:text-4xl"
                  />
                  <p className="mt-2 text-sm text-neutral-500">
                    Client Satisfaction
                  </p>
                </div>
                <div className="text-center">
                  <StatsCounter
                    end={40}
                    suffix="M+"
                    className="text-3xl font-bold md:text-4xl"
                    prefix="$"
                  />
                  <p className="mt-2 text-sm text-neutral-500">
                    Property Value
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Featured Properties */}
          <AnimatedSection id="properties" className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured Properties
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Discover our handpicked selection of exceptional properties in
                  the most sought-after locations.
                </p>
              </div>
              <div className="mt-16">
                <FeaturedProperties />
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/properties">View All Properties</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Virtual Tour Banner */}
          <VirtualTourBanner />

          {/* Property Filter */}
          {/* <AnimatedSection className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                  Find Your Dream Home
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Use our advanced filters to find the perfect property that
                  matches your criteria.
                </p>
              </div>
              <div className="mt-12">
                <PropertyFilter allProperties={allProperties} />
              </div>
            </div>
          </AnimatedSection> */}

          {/* Property Comparison */}
          <AnimatedSection className="border-y bg-neutral-50 py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                  Compare Properties
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Find the perfect home by comparing features, amenities, and
                  locations side by side.
                </p>
              </div>
              <div className="mt-12">
                <PropertyComparison />
              </div>
            </div>
          </AnimatedSection>

          {/* About Section */}
          <AnimatedSection id="about" className="py-16 md:py-24">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div className="relative aspect-square overflow-hidden rounded-xl md:order-last">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Professional real estate agent"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                    Meet Your Agent
                  </h2>
                  <p className="mt-6 text-lg text-neutral-600">
                    With over 15 years of experience in luxury real estate, I've
                    helped hundreds of clients find their perfect home. My
                    approach combines deep market knowledge with a personalized
                    touch to ensure your property journey exceeds expectations.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-neutral-100 p-1">
                        <Star className="h-5 w-5 text-neutral-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Local Expertise</h3>
                        <p className="text-neutral-600">
                          Unparalleled knowledge of neighborhood trends,
                          property values, and hidden gems.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-neutral-100 p-1">
                        <Star className="h-5 w-5 text-neutral-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Negotiation Skills</h3>
                        <p className="text-neutral-600">
                          Proven track record of securing the best possible
                          deals for my clients.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-neutral-100 p-1">
                        <Star className="h-5 w-5 text-neutral-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Personalized Service</h3>
                        <p className="text-neutral-600">
                          Tailored approach to meet your unique needs and
                          preferences throughout the process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <Button asChild>
                      <Link href="#contact">Schedule a Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Interactive Map */}
          <AnimatedSection className="border-y bg-neutral-50 py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                  Explore Properties by Location
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Discover luxury properties in your desired neighborhoods with
                  our interactive map.
                </p>
              </div>
              <div className="mt-12">
                <InteractiveMap />
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonials */}
          <AnimatedSection id="testimonials" className="py-16 md:py-24">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                  Client Testimonials
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Hear what our clients have to say about their experience
                  working with us.
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                  name="Sarah Johnson"
                  role="Homeowner"
                  image="/placeholder.svg?height=100&width=100"
                  quote="Working with Prestige Estates was an absolute pleasure. They understood exactly what we were looking for and found us our dream home within weeks."
                  rating={5}
                />
                <TestimonialCard
                  name="Michael Chen"
                  role="Property Investor"
                  image="/placeholder.svg?height=100&width=100"
                  quote="As an investor, I appreciate their deep market knowledge and attention to detail. They've helped me acquire multiple high-performing properties."
                  rating={5}
                />
                <TestimonialCard
                  name="Emily Rodriguez"
                  role="First-time Buyer"
                  image="/placeholder.svg?height=100&width=100"
                  quote="As a first-time buyer, I was nervous about the process. They guided me every step of the way with patience and expertise."
                  rating={5}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection id="contact" className="py-16 md:py-24">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                    Get in Touch
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600">
                    Ready to find your dream property? Contact us today to
                    schedule a consultation.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-neutral-100 p-1">
                        <MapPin className="h-5 w-5 text-neutral-700" />
                      </div>
                      <div>
                        <h3 className="font-medium">Office Location</h3>
                        <p className="text-neutral-600">
                          123 Luxury Lane, Suite 400, Beverly Hills, CA 90210
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-neutral-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-neutral-700">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-neutral-600">(310) 555-1234</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-neutral-100 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-neutral-700">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-neutral-600">
                          info@prestigeestates.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-neutral-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-neutral-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
                        />
                      </div>
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
                        className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </main>

        {/* Footer */}
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
                      href="#properties"
                      className="text-neutral-600 hover:text-neutral-900 smooth-scroll">
                      Featured
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="text-neutral-600 hover:text-neutral-900 smooth-scroll">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#testimonials"
                      className="text-neutral-600 hover:text-neutral-900 smooth-scroll">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-neutral-600 hover:text-neutral-900 smooth-scroll">
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
