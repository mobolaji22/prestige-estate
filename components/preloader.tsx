"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited the site before
    const visited = localStorage.getItem("hasVisitedSite")

    if (visited) {
      // If user has visited before, don't show preloader
      setHasVisited(true)
      setIsLoading(false)
    } else {
      // First visit - show preloader and set flag
      const timer = setTimeout(() => {
        setIsLoading(false)
        localStorage.setItem("hasVisitedSite", "true")
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isLoading && !hasVisited) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading, hasVisited])

  // Handle mobile menu
  useEffect(() => {
    const mobileMenuButton = document.getElementById("mobile-menu-button")
    const closeMenuButton = document.getElementById("close-menu-button")
    const mobileMenu = document.getElementById("mobile-menu")

    const handleOpenMenu = () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("hidden")
        mobileMenu.classList.add("translate-x-0")
        mobileMenu.classList.remove("translate-x-full")
      }
    }

    const handleCloseMenu = () => {
      if (mobileMenu) {
        mobileMenu.classList.add("translate-x-full")
        mobileMenu.classList.remove("translate-x-0")
        setTimeout(() => {
          mobileMenu.classList.add("hidden")
        }, 300)
      }
    }

    mobileMenuButton?.addEventListener("click", handleOpenMenu)
    closeMenuButton?.addEventListener("click", handleCloseMenu)

    // Add smooth scrolling to all links with the smooth-scroll class
    const smoothScrollLinks = document.querySelectorAll(".smooth-scroll")

    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")

      if (href && href.startsWith("#")) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          })

          // Close mobile menu if open
          handleCloseMenu()
        }
      }
    }

    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      mobileMenuButton?.removeEventListener("click", handleOpenMenu)
      closeMenuButton?.removeEventListener("click", handleCloseMenu)
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  // If user has visited before, don't render the preloader
  if (hasVisited) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500",
        isLoading ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-neutral-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-neutral-800 animate-spin"></div>
        </div>
        <div className="mt-4 text-lg font-medium">Loading Prestige Estates</div>
      </div>
    </div>
  )
}
