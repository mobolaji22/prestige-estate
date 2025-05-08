"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generateAvailableDates, type AvailableDate, type TimeSlot } from "@/lib/mock-data"

interface PropertyViewingSchedulerProps {
  propertyId: string
  propertyTitle: string
  propertyAddress: string
}

export function PropertyViewingScheduler({
  propertyId,
  propertyTitle,
  propertyAddress,
}: PropertyViewingSchedulerProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<AvailableDate | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I would like to schedule a viewing for ${propertyTitle} at ${propertyAddress}.`,
  })

  // Generate available dates
  const availableDates = generateAvailableDates()

  const handleDateSelect = (date: AvailableDate) => {
    setSelectedDate(date)
    setSelectedTimeSlot(null) // Reset time slot when date changes
  }

  const handleTimeSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the data to an API
    handleNextStep()
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Schedule a Viewing</CardTitle>
        <CardDescription>Select a date and time to view this property in person</CardDescription>
      </CardHeader>

      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Select a Date</Label>
              <div className="grid grid-cols-7 gap-2">
                {availableDates.map((date) => (
                  <Button
                    key={date.date}
                    type="button"
                    variant={selectedDate?.date === date.date ? "default" : "outline"}
                    className="flex h-auto flex-col p-2"
                    onClick={() => handleDateSelect(date)}
                  >
                    <span className="text-xs font-normal">{date.dayOfWeek}</span>
                    <span className="text-sm font-medium">{date.formattedDate}</span>
                  </Button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <Label className="mb-2 block">Select a Time</Label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                  {selectedDate.slots.map((slot) => (
                    <Button
                      key={slot.id}
                      type="button"
                      variant={selectedTimeSlot?.id === slot.id ? "default" : "outline"}
                      disabled={!slot.available}
                      className={`${!slot.available ? "opacity-50" : ""}`}
                      onClick={() => handleTimeSelect(slot)}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Any specific questions or requirements?"
              />
            </div>

            <div className="rounded-lg border bg-neutral-50 p-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-neutral-500" />
                <span>
                  {selectedDate?.dayOfWeek}, {selectedDate?.formattedDate}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-neutral-500" />
                <span>{selectedTimeSlot?.time}</span>
              </div>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Viewing Scheduled!</h3>
            <p className="mt-2 text-neutral-600">
              Your viewing has been scheduled for {selectedDate?.dayOfWeek}, {selectedDate?.formattedDate} at{" "}
              {selectedTimeSlot?.time}.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              We've sent a confirmation to {formData.email}. The agent will contact you shortly to confirm the details.
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        {step > 1 && step < 3 && (
          <Button type="button" variant="outline" onClick={handlePrevStep}>
            Back
          </Button>
        )}

        {step === 1 && (
          <Button
            type="button"
            onClick={handleNextStep}
            disabled={!selectedDate || !selectedTimeSlot}
            className="ml-auto"
          >
            Continue
          </Button>
        )}

        {step === 2 && (
          <Button type="submit" onClick={handleSubmit}>
            Schedule Viewing
          </Button>
        )}

        {step === 3 && (
          <Button type="button" className="ml-auto" onClick={() => setStep(1)}>
            Schedule Another Time
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
