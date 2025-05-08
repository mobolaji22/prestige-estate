"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  favorites: string[]
  preferences?: {
    location: string[]
    propertyTypes: string[]
    minBedrooms: number
    maxPrice: number
  }
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  addToFavorites: (propertyId: string) => void
  removeFromFavorites: (propertyId: string) => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  signIn: async () => {},
  signOut: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
})

const mockUser: User = {
  id: "user1",
  name: "John Doe",
  email: "john@example.com",
  favorites: ["property1", "property3"],
  preferences: {
    location: ["Beverly Hills", "Malibu"],
    propertyTypes: ["Single Family", "Condo"],
    minBedrooms: 3,
    maxPrice: 5000000,
  },
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simulate checking for an existing session on mount
  useEffect(() => {
    // In a real app, this would check for a token in localStorage or cookies
    const checkAuth = () => {
      const hasSession = localStorage.getItem("isAuthenticated") === "true"
      if (hasSession) {
        setUser(mockUser)
        setIsAuthenticated(true)
      }
    }

    checkAuth()
  }, [])

  const signIn = async (email: string, password: string) => {
    // This would be an API call in a real application
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(mockUser)
        setIsAuthenticated(true)
        localStorage.setItem("isAuthenticated", "true")
        resolve()
      }, 1000)
    })
  }

  const signOut = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
  }

  const addToFavorites = (propertyId: string) => {
    if (!user) return

    setUser({
      ...user,
      favorites: [...user.favorites, propertyId],
    })
  }

  const removeFromFavorites = (propertyId: string) => {
    if (!user) return

    setUser({
      ...user,
      favorites: user.favorites.filter((id) => id !== propertyId),
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
