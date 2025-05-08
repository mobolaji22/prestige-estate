"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Maximize2, Info, X, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Main virtual tour component with fallback for WebGL issues
export function VirtualTour({ propertyId, propertyName }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentRoom, setCurrentRoom] = useState("livingRoom")
  const [showInfo, setShowInfo] = useState(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const tourContainerRef = useRef(null)
  const [currentViewAngle, setCurrentViewAngle] = useState(0)

  // Mock data for the virtual tour
  const tourData = {
    livingRoom: {
      name: "Living Room",
      image: "/placeholder.svg?height=1000&width=2000",
      description: "Spacious living room with floor-to-ceiling windows offering panoramic views.",
      hotspots: [
        {
          id: "kitchen",
          label: "Kitchen",
          position: { x: 75, y: 50 },
          target: "kitchen",
        },
        {
          id: "diningRoom",
          label: "Dining Area",
          position: { x: 25, y: 60 },
          target: "diningRoom",
        },
        {
          id: "livingRoomFeatures",
          label: "Living Room Features",
          position: { x: 50, y: 40 },
          info: {
            title: "Living Room",
            description:
              "Spacious living room with floor-to-ceiling windows offering panoramic views. Features custom built-in shelving and a gas fireplace.",
          },
        },
      ],
    },
    kitchen: {
      name: "Kitchen",
      image: "/placeholder.svg?height=1000&width=2000",
      description: "Chef's kitchen with high-end appliances and custom cabinetry.",
      hotspots: [
        {
          id: "livingRoom",
          label: "Living Room",
          position: { x: 20, y: 50 },
          target: "livingRoom",
        },
        {
          id: "kitchenFeatures",
          label: "Kitchen Features",
          position: { x: 50, y: 40 },
          info: {
            title: "Gourmet Kitchen",
            description:
              "Chef's kitchen with high-end appliances, custom cabinetry, and a large center island with breakfast bar. Features include a wine fridge and walk-in pantry.",
          },
        },
        {
          id: "masterBedroom",
          label: "Master Bedroom",
          position: { x: 80, y: 50 },
          target: "masterBedroom",
        },
      ],
    },
    diningRoom: {
      name: "Dining Room",
      image: "/placeholder.svg?height=1000&width=2000",
      description: "Elegant dining space with chandelier and built-in buffet.",
      hotspots: [
        {
          id: "livingRoom",
          label: "Living Room",
          position: { x: 30, y: 50 },
          target: "livingRoom",
        },
        {
          id: "diningRoomFeatures",
          label: "Dining Room Features",
          position: { x: 50, y: 40 },
          info: {
            title: "Formal Dining Room",
            description:
              "Elegant dining space with chandelier and built-in buffet. Large enough to accommodate 10+ guests for entertaining.",
          },
        },
      ],
    },
    masterBedroom: {
      name: "Master Bedroom",
      image: "/placeholder.svg?height=1000&width=2000",
      description: "Luxurious master suite with sitting area and private balcony.",
      hotspots: [
        {
          id: "kitchen",
          label: "Kitchen",
          position: { x: 20, y: 50 },
          target: "kitchen",
        },
        {
          id: "masterBedroomFeatures",
          label: "Master Bedroom Features",
          position: { x: 50, y: 40 },
          info: {
            title: "Master Suite",
            description:
              "Luxurious master suite with sitting area and private balcony. Includes a spa-like ensuite bathroom with soaking tub and walk-in closet.",
          },
        },
      ],
    },
  }

  const handleHotspotClick = (hotspot) => {
    if (hotspot.target) {
      setCurrentRoom(hotspot.target)
    } else if (hotspot.info) {
      setShowInfo(hotspot.info)
    }
  }

  const navigateToRoom = (roomId) => {
    setCurrentRoom(roomId)
    setCurrentViewAngle(0)
  }

  const rotateView = (direction) => {
    setCurrentViewAngle((prev) => {
      const newAngle = prev + (direction === "left" ? -45 : 45)
      return ((newAngle % 360) + 360) % 360 // Normalize to 0-359
    })
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (tourContainerRef.current.requestFullscreen) {
        tourContainerRef.current.requestFullscreen()
      } else if (tourContainerRef.current.webkitRequestFullscreen) {
        tourContainerRef.current.webkitRequestFullscreen()
      } else if (tourContainerRef.current.msRequestFullscreen) {
        tourContainerRef.current.msRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  // Listen for fullscreen change events
  const handleFullscreenChange = () => {
    setIsFullscreen(
      document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement,
    )
  }

  // Add and remove event listeners for fullscreen changes
  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("mozfullscreenchange", handleFullscreenChange)
    document.addEventListener("MSFullscreenChange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange)
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange)
    }
  }, [])

  const roomData = tourData[currentRoom]

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="flex items-center gap-2" variant="outline">
        <Maximize2 className="h-4 w-4" />
        View Virtual Tour
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl p-0 sm:max-h-[90vh]">
          <div ref={tourContainerRef} className="relative h-[80vh] w-full bg-neutral-900">
            {/* Panoramic Image Tour (Fallback for WebGL issues) */}
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="relative h-full w-full transition-transform duration-500"
                style={{ transform: `translateX(-${currentViewAngle / 3.6}%)` }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={roomData.image || "/placeholder.svg"}
                    alt={roomData.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Hotspots */}
              {roomData.hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${hotspot.position.x}%`,
                    top: `${hotspot.position.y}%`,
                  }}
                  onClick={() => handleHotspotClick(hotspot)}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110">
                      <Info className="h-6 w-6 text-neutral-800" />
                    </div>
                    <div className="mt-2 rounded-md bg-black/80 px-3 py-1 text-sm text-white">{hotspot.label}</div>
                  </div>
                </div>
              ))}

              {/* Info Panel */}
              {showInfo && (
                <div className="absolute left-1/2 top-1/2 z-20 w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{showInfo.title}</h3>
                    <button onClick={() => setShowInfo(null)} className="text-neutral-500 hover:text-neutral-800">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="mt-2 text-neutral-700">{showInfo.description}</p>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateToRoom("livingRoom")}
                  className={currentRoom === "livingRoom" ? "bg-neutral-200" : ""}
                >
                  <span className="text-xs">Living</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateToRoom("kitchen")}
                  className={currentRoom === "kitchen" ? "bg-neutral-200" : ""}
                >
                  <span className="text-xs">Kitchen</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateToRoom("diningRoom")}
                  className={currentRoom === "diningRoom" ? "bg-neutral-200" : ""}
                >
                  <span className="text-xs">Dining</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateToRoom("masterBedroom")}
                  className={currentRoom === "masterBedroom" ? "bg-neutral-200" : ""}
                >
                  <span className="text-xs">Bedroom</span>
                </Button>
              </div>

              {/* Rotation Controls */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/80 text-neutral-800 backdrop-blur-sm hover:bg-white"
                  onClick={() => rotateView("left")}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Rotate left</span>
                </Button>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/80 text-neutral-800 backdrop-blur-sm hover:bg-white"
                  onClick={() => rotateView("right")}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Rotate right</span>
                </Button>
              </div>

              {/* Fullscreen button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/80 text-neutral-800 backdrop-blur-sm hover:bg-white"
                onClick={toggleFullscreen}
              >
                <Maximize2 className="h-5 w-5" />
                <span className="sr-only">Toggle fullscreen</span>
              </Button>

              {/* Tour instructions */}
              <div className="absolute left-4 top-4 rounded-md bg-white/80 px-3 py-2 text-sm text-neutral-800 backdrop-blur-sm">
                <p>Use the arrows to look around. Click on hotspots to explore.</p>
              </div>

              {/* Room description */}
              <div className="absolute bottom-20 left-4 max-w-md rounded-md bg-white/80 px-3 py-2 text-sm text-neutral-800 backdrop-blur-sm">
                <h3 className="font-medium">{roomData.name}</h3>
                <p>{roomData.description}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
