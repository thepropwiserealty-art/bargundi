"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState(1) // 1 for phone, 2 for OTP
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ phone?: string; otp?: string }>({})

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[+]?[\d\s\-$$$$]{10,}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const validateOTP = (otpValue: string) => {
    return otpValue.length === 6 && /^\d+$/.test(otpValue)
  }

  const handleSendOTP = async () => {
    setErrors({})

    if (!validatePhone(phoneNumber)) {
      setErrors({ phone: "Please enter a valid phone number" })
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setStep(2)
  }

  const handleVerifyOTP = async () => {
    setErrors({})

    if (!validateOTP(otp)) {
      setErrors({ otp: "Please enter a valid 6-digit OTP" })
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)

    // Success - close popup and reset
    onClose()
    setStep(1)
    setPhoneNumber("")
    setOtp("")
  }

  const handleClose = () => {
    onClose()
    setStep(1)
    setPhoneNumber("")
    setOtp("")
    setErrors({})
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 hover:bg-gray-100"
              onClick={handleClose}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Phone className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
                <p className="text-gray-600">
                  {step === 1 ? "Enter your phone number to get started" : "Enter the OTP sent to your phone"}
                </p>
              </div>

              {/* Form */}
              <div className="space-y-6">
                {step === 1 ? (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={`mt-1 ${errors.phone ? "border-red-500" : ""}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <Button
                      onClick={handleSendOTP}
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      {isLoading ? "Sending OTP..." : "Send OTP"}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <Label htmlFor="otp" className="text-sm font-medium text-gray-700">
                        OTP Code
                      </Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        className={`mt-1 text-center text-lg tracking-widest ${errors.otp ? "border-red-500" : ""}`}
                        maxLength={6}
                      />
                      {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button
                        onClick={handleVerifyOTP}
                        disabled={isLoading}
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        {isLoading ? "Verifying..." : "Submit"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
