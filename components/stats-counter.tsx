"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface StatsCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function StatsCounter({ end, duration = 2000, prefix = "", suffix = "", className }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration])

  return (
    <span className={cn(className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
