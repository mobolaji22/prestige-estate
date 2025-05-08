"use client"

import { useState } from "react"
import Image from "next/image"
import { Bath, Bed, Check, Expand, X, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export function PropertyComparison() {
  const [selectedProperties, setSelectedProperties] = useState<string[]>(["property1", "property2"])
  const [activeTab, setActiveTab] = useState("overview")

  const properties = {
    property1: {
      id: "property1",
      title: "Modern Beachfront Villa",
      address: "123 Ocean Drive, Malibu, CA",
      price: "$4,500,000",
      bedrooms: 5,
      bathrooms: 6,
      squareFeet: 4200,
      image: "/placeholder.svg?height=200&width=300",
      features: {
        pool: true,
        garage: true,
        garden: true,
        security: true,
        waterfront: true,
        airConditioning: true,
      },
      details: {
        yearBuilt: 2018,
        lotSize: "0.5 acres",
        propertyType: "Single Family",
        neighborhood: "Malibu Beach",
        parking: "3-Car Garage",
        heating: "Central",
        cooling: "Central AC",
        basement: "Finished",
        roof: "Tile",
        exterior: "Stucco",
      },
    },
    property2: {
      id: "property2",
      title: "Luxury Penthouse",
      address: "456 Skyline Ave, Beverly Hills, CA",
      price: "$3,200,000",
      bedrooms: 3,
      bathrooms: 3.5,
      squareFeet: 2800,
      image: "/placeholder.svg?height=200&width=300",
      features: {
        pool: true,
        garage: true,
        garden: false,
        security: true,
        waterfront: false,
        airConditioning: true,
      },
      details: {
        yearBuilt: 2020,
        lotSize: "N/A (Condo)",
        propertyType: "Condominium",
        neighborhood: "Beverly Hills",
        parking: "2 Reserved Spaces",
        heating: "Central",
        cooling: "Central AC",
        basement: "N/A",
        roof: "Flat",
        exterior: "Glass and Steel",
      },
    },
    property3: {
      id: "property3",
      title: "Contemporary Hillside Estate",
      address: "789 Summit Rd, Hollywood Hills, CA",
      price: "$7,900,000",
      bedrooms: 6,
      bathrooms: 8,
      squareFeet: 6500,
      image: "/placeholder.svg?height=200&width=300",
      features: {
        pool: true,
        garage: true,
        garden: true,
        security: true,
        waterfront: false,
        airConditioning: true,
      },
      details: {
        yearBuilt: 2015,
        lotSize: "1.2 acres",
        propertyType: "Single Family",
        neighborhood: "Hollywood Hills",
        parking: "4-Car Garage",
        heating: "Radiant",
        cooling: "Central AC",
        basement: "Finished with Theater",
        roof: "Flat",
        exterior: "Glass and Stone",
      },
    },
    property4: {
      id: "property4",
      title: "Elegant Downtown Loft",
      address: "101 Arts District, Los Angeles, CA",
      price: "$1,850,000",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1800,
      image: "/placeholder.svg?height=200&width=300",
      features: {
        pool: false,
        garage: true,
        garden: false,
        security: true,
        waterfront: false,
        airConditioning: true,
      },
      details: {
        yearBuilt: 2010,
        lotSize: "N/A (Loft)",
        propertyType: "Loft",
        neighborhood: "Arts District",
        parking: "1 Reserved Space",
        heating: "Forced Air",
        cooling: "Central AC",
        basement: "N/A",
        roof: "Flat",
        exterior: "Brick",
      },
    },
  }

  const handlePropertyChange = (position: number, value: string) => {
    const newSelected = [...selectedProperties]
    newSelected[position] = value
    setSelectedProperties(newSelected)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        {selectedProperties.map((propertyId, index) => (
          <div key={index}>
            <Select value={propertyId} onValueChange={(value) => handlePropertyChange(index, value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a property" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(properties).map((id) => (
                  <SelectItem key={id} value={id}>
                    {properties[id as keyof typeof properties].title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              <div className="grid grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="h-[200px] flex items-center justify-center bg-neutral-100 rounded-lg">
                        <span className="text-neutral-400">Property Image</span>
                      </div>
                      <div className="h-6 font-medium">Title</div>
                      <div className="h-6 text-sm text-neutral-500">Address</div>
                      <div className="h-6 text-lg font-semibold">Price</div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="flex items-center">
                          <Bed className="mr-1 h-4 w-4 text-neutral-500" />
                          <span>Beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="mr-1 h-4 w-4 text-neutral-500" />
                          <span>Baths</span>
                        </div>
                        <div className="flex items-center">
                          <Expand className="mr-1 h-4 w-4 text-neutral-500" />
                          <span>Sq Ft</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {selectedProperties.map((propertyId) => {
                  const property = properties[propertyId as keyof typeof properties]
                  return (
                    <Card key={propertyId} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                            <Image
                              src={property.image || "/placeholder.svg"}
                              alt={property.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <div className="h-6 font-medium">{property.title}</div>
                          <div className="h-6 text-sm text-neutral-500">{property.address}</div>
                          <div className="h-6 text-lg font-semibold">{property.price}</div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="flex items-center">
                              <Bed className="mr-1 h-4 w-4 text-neutral-500" />
                              <span>{property.bedrooms}</span>
                            </div>
                            <div className="flex items-center">
                              <Bath className="mr-1 h-4 w-4 text-neutral-500" />
                              <span>{property.bathrooms}</span>
                            </div>
                            <div className="flex items-center">
                              <Expand className="mr-1 h-4 w-4 text-neutral-500" />
                              <span>{property.squareFeet}</span>
                            </div>
                          </div>
                          <Button className="w-full group" asChild>
                            <Link href={`/properties/${property.id}`}>
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              <div className="grid grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <h3 className="font-medium">Features</h3>
                      <div className="space-y-2">
                        <div className="h-6">Pool</div>
                        <div className="h-6">Garage</div>
                        <div className="h-6">Garden</div>
                        <div className="h-6">Security System</div>
                        <div className="h-6">Waterfront</div>
                        <div className="h-6">Air Conditioning</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {selectedProperties.map((propertyId) => {
                  const property = properties[propertyId as keyof typeof properties]
                  return (
                    <Card key={propertyId} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <h3 className="font-medium">{property.title}</h3>
                          <div className="space-y-2">
                            <div className="h-6">
                              {property.features.pool ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                            <div className="h-6">
                              {property.features.garage ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                            <div className="h-6">
                              {property.features.garden ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                            <div className="h-6">
                              {property.features.security ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                            <div className="h-6">
                              {property.features.waterfront ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                            <div className="h-6">
                              {property.features.airConditioning ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <X className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="details" className="mt-6">
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              <div className="grid grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <h3 className="font-medium">Property Details</h3>
                      <div className="space-y-2">
                        <div className="h-6">Year Built</div>
                        <div className="h-6">Lot Size</div>
                        <div className="h-6">Property Type</div>
                        <div className="h-6">Neighborhood</div>
                        <div className="h-6">Parking</div>
                        <div className="h-6">Heating</div>
                        <div className="h-6">Cooling</div>
                        <div className="h-6">Basement</div>
                        <div className="h-6">Roof</div>
                        <div className="h-6">Exterior</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {selectedProperties.map((propertyId) => {
                  const property = properties[propertyId as keyof typeof properties]
                  return (
                    <Card key={propertyId} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <h3 className="font-medium">{property.title}</h3>
                          <div className="space-y-2">
                            <div className="h-6">{property.details.yearBuilt}</div>
                            <div className="h-6">{property.details.lotSize}</div>
                            <div className="h-6">{property.details.propertyType}</div>
                            <div className="h-6">{property.details.neighborhood}</div>
                            <div className="h-6">{property.details.parking}</div>
                            <div className="h-6">{property.details.heating}</div>
                            <div className="h-6">{property.details.cooling}</div>
                            <div className="h-6">{property.details.basement}</div>
                            <div className="h-6">{property.details.roof}</div>
                            <div className="h-6">{property.details.exterior}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
