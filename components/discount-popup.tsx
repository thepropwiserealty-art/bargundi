"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { sendOtp } from "@/lib/otp/api/sendOtp"
import { validateOtp, validatePhone } from "@/lib/utils";
import { verifyOtp } from "@/lib/otp/api/verifyOtp"
import { checkIfSubmitted } from "@/lib/checkIfSubmitted"

export default function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [showOtpField, setShowOtpField] = useState(false)
  const [errors, setErrors] = useState({ phone: "", otp: "" })
  const [isLoading, setIsLoading] = useState(false)

  // Check if user has already submitted
  useEffect(() => {
    // const submitted = localStorage.getItem("discountCouponSubmitted")
    // if (submitted === "true") {
    //   setIsSubmitted(true)
    // }
    checkIfSubmitted(setIsSubmitted);
  }, [])

  // Timer logic for showing popup
  useEffect(() => {
    if (isSubmitted) return

    const showPopup = () => {
      setIsVisible(true)
    }

    // Initial delay of 20 seconds
    const initialTimer = setTimeout(showPopup, 20000)

    // Recurring timer every 20 seconds
    const recurringTimer = setInterval(() => {
      if (!isSubmitted) {
        setIsVisible(true)
      }
    }, 20000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [isSubmitted])




  const handleSendOtp = async () => {
    setErrors({ phone: "", otp: "" })

    if (!validatePhone(phoneNumber)) {
      setErrors((prev) => ({ ...prev, phone: "Please enter a valid 10-digit phone number" }))
      return
    }

    setIsLoading(true)
    // Simulate OTP sending
    const otpSent: boolean = await sendOtp(phoneNumber, setErrors);

    if (otpSent) {
      setShowOtpField(true)
      setIsLoading(false)
    }
    else {
      setIsLoading(false)
    }
    // setTimeout(() => {
    //   setShowOtpField(true)
    //   setIsLoading(false)
    // }, 1500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ phone: "", otp: "" })

    if (!validatePhone(phoneNumber)) {
      setErrors((prev) => ({ ...prev, phone: "Please enter a valid 10-digit phone number" }))
      return
    }

    if (!validateOtp(otp)) {
      setErrors((prev) => ({ ...prev, otp: "Please enter a valid 6-digit OTP" }))
      return
    }

    setIsLoading(true)
    // Simulate form submission
    const isOtpValid = await verifyOtp(phoneNumber, otp, setErrors);

    if (!isOtpValid) {
      setIsLoading(false)
    }
    else {
      setIsSubmitted(true)
      setIsVisible(false)
      setIsLoading(false)
    }

    // setTimeout(() => {
    //   setIsSubmitted(true)
    //   // localStorage.setItem("discountCouponSubmitted", "true")
    //   setIsVisible(false)
    //   setIsLoading(false)
    //   // You can add success notification here
    // }, 1500)
  }

  const handleClose = () => {
    setIsVisible(false)
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
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Enter your phone number"
                          className="pl-10 h-12"
                          maxLength={10}
                          disabled={showOtpField}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Get Coupon Button */}
                    {!showOtpField && (
                      <Button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={isLoading}
                        className="w-full h-12 bg-gray-600 hover:bg-luxury-gold/90 text-white font-semibold"
                      >
                        {isLoading ? "Sending OTP..." : "Get Coupon"}
                      </Button>
                    )}

                    {/* OTP Field */}
                    {showOtpField && (
                      <div>
                        <Label htmlFor="otp" className="text-sm font-medium text-gray-700 mb-2 block">
                          Enter OTP *
                        </Label>
                        <div className="relative">
                          <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="otp"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter 6-digit OTP"
                            className="pl-10 h-12"
                            maxLength={6}
                          />
                        </div>
                        {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
                        <p className="text-sm text-gray-500 mt-1">OTP sent to +91 {phoneNumber}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    {showOtpField && (
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gray-600 hover:bg-luxury-gold/90 text-white font-semibold"
                      >
                        {isLoading ? "Verifying..." : "Claim Discount"}
                      </Button>
                    )}
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
                {/* Decorative elements */}
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
