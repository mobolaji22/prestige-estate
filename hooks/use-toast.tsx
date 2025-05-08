"use client"

import type React from "react"

import { useState, useCallback } from "react"

interface ToastProps {
  title: string
  description?: string
  action?: React.ReactNode
  duration?: number
}

interface Toast extends ToastProps {
  id: string
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback(({ title, description, action, duration = 5000 }: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, title, description, action }

    setToasts((prevToasts) => [...prevToasts, newToast])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)

    return id
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  return { toast, dismiss, toasts }
}
