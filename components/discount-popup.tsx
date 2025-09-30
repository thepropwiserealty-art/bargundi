"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" })

  // Timer logic for showing popup
  useEffect(() => {
    if (isSubmitted) return

    const showPopup = () => {
      setIsVisible(true)
    }

    const initialTimer = setTimeout(showPopup, 20000)
    const recurringTimer = setInterval(() => {
      if (!isSubmitted) setIsVisible(true)
    }, 20000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [isSubmitted])

  const handleClose = () => setIsVisible(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: "", email: "", phone: "" })

    if (!name) return setErrors((prev) => ({ ...prev, name: "Name is required" }))
    if (!email.includes("@")) return setErrors((prev) => ({ ...prev, email: "Invalid email" }))
    if (phone.length !== 10) return setErrors((prev) => ({ ...prev, phone: "Enter 10-digit number" }))

    const whatsappNumber = "9604276698" // <-- REPLACE WITH YOUR NUMBER
    const message = `Hi, I want to enquire about dosti estates.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
    setIsVisible(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Left Side - Form */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Exclusive Offer</h2>
                    <p className="text-gray-600">Grab your coupon code here</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="pl-10 h-12"
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="pl-10 h-12"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter your phone number"
                          className="pl-10 h-12"
                          maxLength={10}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gray-600 hover:bg-luxury-gold/90 text-white font-semibold"
                    >
                      Get in Touch
                    </Button>
                  </form>
                </div>
              </div>

              {/* Right Side - Coupon Image */}
              <div className="flex-1 bg-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                      <div className="text-6xl font-bold mb-4">20%*</div>
                      <div className="text-xl font-semibold mb-2">OFF</div>
                      <div className="text-sm opacity-90 mb-4">On Premium Properties</div>
                      <div className="bg-gray-600 text-luxury-gold px-4 py-2 rounded-full text-sm font-semibold">
                        Limited Time Offer
                      </div>
                    </div>
                    <div className="mt-6 text-sm opacity-80">Valid until December 31, 2025</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
