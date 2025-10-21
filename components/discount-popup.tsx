"use client"

import type React from "react"
import { useState, useEffect, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import { checkIfSubmitted } from "@/lib/checkIfSubmitted"
import signup from "@/lib/signup"
import context from "@/lib/context"

type isSubmitProps = {
  isSubmitted: boolean
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DiscountPopup({ isSubmitted, setIsSubmitted }: isSubmitProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" })
  const { isAuthenticated, setAuthenticated } = useContext(context)

  useEffect(() => {
    checkIfSubmitted(setIsSubmitted).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (isSubmitted) return
    const showPopup = () => setIsVisible(true)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ name: "", email: "", phone: "" })

    if (!name) return setErrors(prev => ({ ...prev, name: "Name is required" }))
    if (!email.includes("@")) return setErrors(prev => ({ ...prev, email: "Invalid email" }))
    if (phone.length !== 10) return setErrors(prev => ({ ...prev, phone: "Enter 10-digit number" }))

    await toast.promise(signup(name, email, phone), {
      loading: "processing...",
      success: () => {
        setIsSubmitted(true)
        setIsVisible(false)
        setAuthenticated(true)
        setName("")
        setPhone("")
        setEmail("")

        const whatsappNumber = "8237311365" // <-- REPLACE WITH YOUR NUMBER
        const message = `Hi, I want to enquire about dosti estates.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
        return "success"
      },
      error: (err) => `${err.toString()}`,
    })
  }

  if (isSubmitted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#4a1c1c]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-[#f8f5f2] rounded-2xl shadow-2xl w-full max-w-4xl relative overflow-hidden border border-[#a0522d]/20 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#fff8f2]/90 hover:bg-[#fff2ea] transition-colors shadow-md"
            >
              <X className="w-5 h-5 text-[#6b1d1d]" />
            </button>

            {/* Left Side - Form */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
              <div className="max-w-sm mx-auto w-full">
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#4a1c1c] mb-1 md:mb-2">
                    Exclusive Offer
                  </h2>
                  <p className="text-[#6b1d1d]/80 text-sm md:text-base">
                    Grab your coupon code here
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-[#4a1c1c] mb-1 block">
                      Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a0522d]/60" />
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="pl-10 h-11 md:h-12 border-[#b23b3b]/40 focus:border-[#800020] focus:ring-0 text-[#4a1c1c] placeholder-[#6b1d1d]/60 bg-[#fff8f2]"
                      />
                    </div>
                    {errors.name && <p className="text-[#b23b3b] text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-[#4a1c1c] mb-1 block">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a0522d]/60" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="pl-10 h-11 md:h-12 border-[#b23b3b]/40 focus:border-[#800020] focus:ring-0 text-[#4a1c1c] placeholder-[#6b1d1d]/60 bg-[#fff8f2]"
                      />
                    </div>
                    {errors.email && <p className="text-[#b23b3b] text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-[#4a1c1c] mb-1 block">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a0522d]/60" />
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="pl-10 h-11 md:h-12 border-[#b23b3b]/40 focus:border-[#800020] focus:ring-0 text-[#4a1c1c] placeholder-[#6b1d1d]/60 bg-[#fff8f2]"
                        maxLength={10}
                      />
                    </div>
                    {errors.phone && <p className="text-[#b23b3b] text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-11 md:h-12 bg-[#800020] hover:bg-[#6b1d1d] text-[#fff8f2] font-semibold rounded-md shadow-sm border border-[#a0522d]/30 transition-transform hover:-translate-y-0.5"
                  >
                    Get in Touch
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Side - Offer Section */}
            <div className="flex-1 bg-[#800020] relative overflow-hidden order-1 md:order-2 h-48 md:h-auto">
              <div className="absolute inset-0 bg-[#4a1c1c]/40"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-8 text-center text-[#fff8f2]">
                <div className="bg-[#fff8f2]/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-[#fff8f2]/20 w-full max-w-xs md:max-w-none">
                  <div className="text-5xl md:text-6xl font-bold mb-2 md:mb-4 text-[#f4d19b]">20%*</div>
                  <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2">OFF</div>
                  <div className="text-xs md:text-sm opacity-90 mb-3 md:mb-4">On Premium Properties</div>
                  <div className="bg-[#b23b3b] text-[#fff8f2] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    Limited Time Offer
                  </div>
                </div>
                <div className="mt-3 md:mt-6 text-xs md:text-sm opacity-80">
                  Valid until December 31, 2025
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
