"use client"

import type React from "react"
import { useState, useEffect, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info, Phone, Mail, User } from "lucide-react"
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
  const [showTooltip, setShowTooltip] = useState(false)
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
        const whatsappNumber = "8237311365"
        const message = `Hi, I want to enquire about Mantra Burgundy Series.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
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
          className="fixed inset-0 min-h-screen bg-[#4a1c1c]/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 xs:p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-[#f8f5f2] rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-xl md:max-w-4xl relative border border-[#a0522d]/20 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Close Button (visible always) */}
            <button
              onClick={handleClose}
              className="fixed top-6 right-6 z-[99] p-2 rounded-full bg-[#fff8f2]/90 hover:bg-[#fff2ea] transition-colors shadow-md
                         md:absolute md:top-3 md:right-3 md:z-10"
            >
              <X className="w-5 h-5 text-[#6b1d1d]" />
            </button>
            {/* Modal Content Area (scrollable only, not the close button or overlay) */}
            <div className="flex-1 h-full overflow-y-auto max-h-[90vh] flex flex-col md:flex-row">
              {/* ℹ️ Info (Top-Left Tooltip Button) */}
              <div className="absolute top-3 left-3 z-20">
                <div
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => setShowTooltip(prev => !prev)}
                  className="relative"
                >
                  <div className="p-2 rounded-full bg-[#fff8f2]/90 hover:bg-[#fff2ea] shadow-md cursor-pointer transition-colors">
                    <Info className="w-5 h-5 text-[#6b1d1d]" />
                  </div>
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-10 left-0 w-64 sm:w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-3 sm:p-4 text-xs sm:text-sm text-gray-700 z-30"
                      >
                        <h4 className="font-semibold text-[#800020] mb-2">Terms & Conditions</h4>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Enjoy an additional guaranted privilege — your instant discount code applies over and above the final lowest offer price confirmed after your site visit.</li>
                          <li>Valid for 7 days from the date you receive this message</li>
                          <li>Use the code on the top right-hand side, or mention it to reception during your site visit</li>
                          <li>This is a unique & personalised code only for you</li>
                          <li>If your visit plan changes, inform us — we’ll revise or reissue the code accordingly</li>
                          <li>Feel free to connect for any assistance</li>
                        </ul>
                        <p className="text-xs mt-3 text-gray-500"></p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* Left Side - Form */}
              <div className="flex-1 p-3 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                <div className="max-w-sm mx-auto w-full">
                  <div className="text-center mb-4 sm:mb-6 md:mb-8">
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#4a1c1c] mb-1 sm:mb-2">
                      Exclusive Offer
                    </h2>
                    <p className="text-[#6b1d1d]/80 text-xs sm:text-sm md:text-base">
                      Grab your coupon code here
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-[#4a1c1c] mb-1 block">
                        Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#a0522d]/60" />
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="pl-8 sm:pl-10 h-10 sm:h-11 md:h-12 border-[#b23b3b]/40 focus:border-[#800020] focus:ring-0 text-[#4a1c1c] placeholder-[#6b1d1d]/60 bg-[#fff8f2] w-full"
                        />
                      </div>
                      {errors.name && <p className="text-[#b23b3b] text-xs sm:text-sm mt-1">{errors.name}</p>}
                    </div>
                    {/* Email Field */}
                    <div>
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-[#4a1c1c] mb-1 block">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#a0522d]/60" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="pl-8 sm:pl-10 h-10 sm:h-11 md:h-12 border-[#b23b3b]/40 focus:border-[#800020] focus:ring-0 text-[#4a1c1c] placeholder-[#6b1d1d]/60 bg-[#fff8f2] w-full"
                        />
                      </div>
                      {errors.email && <p className="text-[#b23b3b] text-xs sm:text-sm mt-1">{errors.email}</p>}
                    </div>
                    {/* Phone Field */}
                    <div>
                      <Label htmlFor="phone" className="text-xs sm:text-sm font-medium text-[#4a1c1c] mb-1 block">
                        Phone Number *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#a0522d]/60" />
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter your phone number"
                          className="pl-8 sm:pl-10 h-10 sm:h-11 md:h-12 border-[#b23b3b]/40 focus:border-[#800020] focus:ring-0 text-[#4a1c1c] placeholder-[#6b1d1d]/60 bg-[#fff8f2] w-full"
                          maxLength={10}
                        />
                      </div>
                      {errors.phone && <p className="text-[#b23b3b] text-xs sm:text-sm mt-1">{errors.phone}</p>}
                    </div>
                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-10 sm:h-11 md:h-12 bg-[#800020] hover:bg-[#6b1d1d] text-[#fff8f2] font-semibold rounded-md shadow-sm border border-[#a0522d]/30 transition-transform hover:-translate-y-0.5"
                    >
                      Get in Touch
                    </Button>
                  </form>
                </div>
              </div>
              {/* Right Side - Offer Section */}
              <div className="flex-1 bg-[#800020] relative overflow-y-auto order-1 md:order-2 h-56 sm:h-72 md:h-auto">
                <div className="absolute inset-0 bg-[#4a1c1c]/40"></div>
                <div className="relative h-full flex flex-col items-center justify-start md:justify-center p-4 sm:p-6 md:p-10 text-[#fff8f2] text-left">
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-[#f4d19b]">
                    Enjoy an Additional Privilege
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-6 leading-relaxed">
                    Enjoy an additional guaranteed privilege — your instant discount code applies over and above the final lowest offer price confirmed after your site visit.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
