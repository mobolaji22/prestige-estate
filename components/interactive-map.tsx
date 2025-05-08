"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  lat: number;
  lng: number;
  bedrooms: number;
  bathrooms: number;
}

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const properties: Property[] = [
    {
      id: "prop1",
      title: "Modern Beachfront Villa",
      address: "123 Ocean Drive, Malibu, CA",
      price: "$4,500,000",
      lat: 34.025922,
      lng: -118.779757,
      bedrooms: 5,
      bathrooms: 6,
    },
    {
      id: "prop2",
      title: "Luxury Penthouse",
      address: "456 Skyline Ave, Beverly Hills, CA",
      price: "$3,200,000",
      lat: 34.07362,
      lng: -118.400352,
      bedrooms: 3,
      bathrooms: 3.5,
    },
    {
      id: "prop3",
      title: "Contemporary Hillside Estate",
      address: "789 Summit Rd, Hollywood Hills, CA",
      price: "$7,900,000",
      lat: 34.134117,
      lng: -118.321495,
      bedrooms: 6,
      bathrooms: 8,
    },
  ];

  // Function to draw the map and markers
  const drawMap = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a simple map background
    ctx.fillStyle = "#e8e8e8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#d4e6f1"; // Water
    ctx.fillRect(canvas.width * 0.7, 0, canvas.width * 0.3, canvas.height);
    ctx.fillStyle = "#f5f5f5"; // Roads
    ctx.fillRect(100, 50, 300, 20);
    ctx.fillRect(150, 50, 20, 200);

    // Draw property markers
    properties.forEach((property) => {
      // Convert lat/lng to x,y for demo purposes (same as before)
      const x = ((property.lng + 118.8) * 1000) % canvas.width;
      const y = ((property.lat - 34) * 1000) % canvas.height;
      const radius = 8;
      const isSelected = selectedProperty?.id === property.id;

      // Draw outer circle for selection highlight
      if (isSelected) {
        ctx.fillStyle = "rgba(0, 123, 255, 0.5)"; // Blueish highlight
        ctx.beginPath();
        ctx.arc(x, y, radius + 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw main marker
      ctx.fillStyle = isSelected ? "#007bff" : "#e74c3c"; // Blue if selected, red otherwise
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Simple pin bottom
      ctx.beginPath();
      ctx.moveTo(x - radius / 2, y + radius);
      ctx.lineTo(x + radius / 2, y + radius);
      ctx.lineTo(x, y + radius * 2);
      ctx.closePath();
      ctx.fill();

      // Text inside marker (optional, can get crowded)
      // ctx.fillStyle = "white";
      // ctx.font = "10px Arial";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      // ctx.fillText((properties.indexOf(property) + 1).toString(), x, y);
    });
  };

  useEffect(() => {
    if (!mapRef.current) return;

    let currentCanvas: HTMLCanvasElement | null = null;

    // Create canvas only once
    if (!canvasRef.current) {
      const canvas = document.createElement("canvas");
      // Set initial canvas dimensions based on its container
      canvas.width = mapRef.current.clientWidth;
      canvas.height = mapRef.current.clientHeight;
      mapRef.current.appendChild(canvas);
      canvasRef.current = canvas;
      setIsMapLoaded(true); 
    }
    currentCanvas = canvasRef.current;

    drawMap(); // Initial draw

    const handleCanvasClick = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      const markerRadius = 12; // Clickable radius around marker center

      let clickedProperty: Property | null = null;
      for (const property of properties) {
        const x = ((property.lng + 118.8) * 1000) % canvas.width;
        const y = ((property.lat - 34) * 1000) % canvas.height;
        const distance = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);
        if (distance < markerRadius) {
          clickedProperty = property;
          break;
        }
      }
      setSelectedProperty(clickedProperty);
    };

    const handleResize = () => {
      if (mapRef.current && canvasRef.current) {
        // Update canvas dimensions to match its container
        canvasRef.current.width = mapRef.current.clientWidth;
        canvasRef.current.height = mapRef.current.clientHeight;
        drawMap(); // Redraw map with new dimensions
      }
    };

    currentCanvas?.addEventListener("click", handleCanvasClick);
    window.addEventListener('resize', handleResize); // Add resize listener

    // Call handleResize once initially to ensure correct sizing if dimensions are already set by CSS
    handleResize();


    return () => {
      currentCanvas?.removeEventListener("click", handleCanvasClick);
      window.removeEventListener('resize', handleResize); // Remove resize listener
      // Optional: if mapRef.current could be destroyed and remade, clean up canvas
      // if (mapRef.current && canvasRef.current && mapRef.current.contains(canvasRef.current)) {
      //   mapRef.current.removeChild(canvasRef.current);
      //   canvasRef.current = null; // Important to nullify if canvas is removed
      // }
    };
  }, [properties, selectedProperty]); // Dependencies for re-running effect

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 md:col-span-2">
        <div
          ref={mapRef}
          // Ensure this div fills its parent for responsive sizing
          className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg border bg-neutral-100 shadow-sm"
        >
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-800"></div>
            </div>
          )}
          {/* Canvas is appended here by useEffect */}
        </div>
      </div>

      <div>
        <Card className="h-full">
          <CardContent className="p-4">
            {selectedProperty ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  {selectedProperty.title}
                </h3>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
                  <span className="text-sm">{selectedProperty.address}</span>
                </div>
                <div className="text-2xl font-bold">
                  {selectedProperty.price}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Bedrooms: {selectedProperty.bedrooms}</div>
                  <div>Bathrooms: {selectedProperty.bathrooms}</div>
                </div>
                <Button className="w-full" asChild>
                  <a href={`/properties/${selectedProperty.id}`}>
                    View Details
                  </a>
                </Button>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                <MapPin className="h-12 w-12 text-neutral-300" />
                <h3 className="text-lg font-medium">Select a Property</h3>
                <p className="text-sm text-neutral-500">
                  Click on a map marker to view property details
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
