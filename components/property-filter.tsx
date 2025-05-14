"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "./property-card";
import { Property } from "@/lib/mock-data";

interface PropertyFilterProps {
  allProperties: Property[];
}

const ITEMS_PER_PAGE = 6; // items per page

export function PropertyFilter({ allProperties = [] }: PropertyFilterProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    minPrice: 0,
    maxPrice: 10000000,
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    hasVirtualTour: false,
  });
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(allProperties);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Reset to all properties if filters are cleared or component mounts
    if (!hasSearched) {
      setFilteredProperties(allProperties);
    }
    setCurrentPage(1); // Reset page when allProperties or hasSearched changes
  }, [allProperties, hasSearched]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      minPrice: value[0],
      maxPrice: value[1],
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  const handleSearch = () => {
    const results = allProperties.filter((property) => {
      const searchTerm = filters.location.toLowerCase();

      // Filter by location (locationName, neighborhood, or address)
      if (filters.location) {
        const inLocationName =
          property.locationName &&
          property.locationName.toLowerCase().includes(searchTerm);
        const inNeighborhood =
          property.details.neighborhood &&
          property.details.neighborhood.toLowerCase().includes(searchTerm);
        const inAddress =
          property.address &&
          property.address.toLowerCase().includes(searchTerm);

        if (!inLocationName && !inNeighborhood && !inAddress) {
          return false;
        }
      }

      // Filter by price
      if (
        property.priceValue < filters.minPrice ||
        property.priceValue > filters.maxPrice
      ) {
        return false;
      }

      // Filter by bedrooms
      if (
        filters.bedrooms &&
        property.bedrooms < Number.parseInt(filters.bedrooms)
      ) {
        return false;
      }

      // Filter by bathrooms
      if (
        filters.bathrooms &&
        property.bathrooms < Number.parseInt(filters.bathrooms)
      ) {
        return false;
      }

      // Filter by property type
      if (
        filters.propertyType &&
        filters.propertyType !== "any" &&
        property.details.propertyType !== filters.propertyType
      ) {
        return false;
      }

      // Filter by virtual tour
      if (filters.hasVirtualTour && !property.hasVirtualTour) {
        return false;
      }

      return true;
    });

    setFilteredProperties(results);
    setHasSearched(true);
    setCurrentPage(1);
    // Close filter after search
    if (isAdvancedOpen === true) {
      setIsAdvancedOpen(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${(price / 1000).toFixed(0)}K`;
  };

  // Pagination Logic
  const dataSource = hasSearched ? filteredProperties : allProperties;
  const totalPages = Math.ceil(dataSource.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = dataSource.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const resultsElement = document.getElementById("property-results");
    if (resultsElement) {
      window.scrollTo({
        top: resultsElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Max page buttons to show directly
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      // Less than or equal to maxPagesToShow, show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // More than maxPagesToShow, calculate start and end
      const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // Near the start
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // Near the end
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        // Somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="icon"
          onClick={() => handlePageChange(i)}
          className="h-9 w-9">
          {i}
        </Button>
      );
    }

    // Add ellipses if needed
    if (startPage > 1) {
      pageNumbers.unshift(
        <span key="start-ellipsis" className="px-2">
          ...
        </span>
      );
      pageNumbers.unshift(
        <Button
          key={1}
          variant={currentPage === 1 ? "default" : "outline"}
          size="icon"
          onClick={() => handlePageChange(1)}
          className="h-9 w-9">
          1
        </Button>
      );
    }
    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-2">
          ...
        </span>
      );
      pageNumbers.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "default" : "outline"}
          size="icon"
          onClick={() => handlePageChange(totalPages)}
          className="h-9 w-9">
          {totalPages}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <Input
                name="location"
                placeholder="Search by location, neighborhood, or address"
                className="pl-10"
                value={filters.location}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}>
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>

          {isAdvancedOpen && (
            <div className="mt-6 grid gap-6 border-t pt-6 md:grid-cols-4">
              <div className="space-y-2">
                <Label>Price Range</Label>
                <div className="px-2">
                  <Slider
                    defaultValue={[filters.minPrice, filters.maxPrice]}
                    max={10000000}
                    step={100000}
                    onValueChange={handlePriceChange}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>{formatPrice(filters.minPrice)}</span>
                  <span>{formatPrice(filters.maxPrice)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Bedrooms</Label>
                <Select
                  value={filters.bedrooms}
                  onValueChange={(value) =>
                    handleSelectChange("bedrooms", value)
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Bathrooms</Label>
                <Select
                  value={filters.bathrooms}
                  onValueChange={(value) =>
                    handleSelectChange("bathrooms", value)
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <Select
                    value={filters.propertyType}
                    onValueChange={(value) =>
                      handleSelectChange("propertyType", value)
                    }>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="Single Family">
                        Single Family
                      </SelectItem>
                      <SelectItem value="Condominium">Condominium</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                      <SelectItem value="Loft">Loft</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="hasVirtualTour"
                    name="hasVirtualTour"
                    checked={filters.hasVirtualTour}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500"
                  />
                  <Label
                    htmlFor="hasVirtualTour"
                    className="text-sm font-normal">
                    Has 3D Virtual Tour
                  </Label>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {hasSearched && filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold">No Properties Found</h3>
          <p className="mt-2 text-neutral-600">
            Try adjusting your search filters or view all available properties.
          </p>
        </div>
      )}

      {currentItems.length > 0 && (
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          id="property-results">
          {currentItems.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="h-9 w-9">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {renderPageNumbers()}
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="h-9 w-9">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
