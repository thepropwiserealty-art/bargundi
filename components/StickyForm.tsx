"use client"
import { useState } from "react"
import type React from "react"
import toast from "react-hot-toast"

export default function StickyForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name) return toast.error("Name is required")
    if (!email.includes("@")) return toast.error("Invalid email")
    if (phone.length !== 10) return toast.error("Enter 10 digit phone number")

    const whatsappNumber = "918237311365"
    const message = `Hi, I want to enquire about Mantra Burgundy Series.
Name: ${name}
Email: ${email}
Phone: ${phone}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.location.href = whatsappUrl
  }

  const handleMobileEnquire = () => {
    const whatsappNumber = "918237311365"
    const message = "Hi, I want to enquire about Mantra Burgundy Series."

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.location.href = whatsappUrl
  }

  return (
    <>
      {/* Desktop form (unchanged logic, only on lg and up) */}
      <div className="hidden lg:block fixed bottom-0 left-0 w-full bg-[#f8f5f2] shadow-lg border-t border-[#a52a2a]/30 z-[9999]">
        <div className="max-w-screen-xl mx-auto px-4">
          <form
            className="flex flex-wrap items-center gap-4 py-4"
            onSubmit={handleSubmit}
          >
            <span className="font-semibold text-[#4a1c1c]">
              Enquire Now
            </span>

            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 min-w-[150px] bg-transparent border-b border-[#6b1d1d]/40 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[150px] bg-transparent border-b border-[#6b1d1d]/40 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 min-w-[150px] bg-transparent border-b border-[#6b1d1d]/40 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-[#800020] hover:bg-[#6b1d1d] text-white px-6 py-2 rounded-md"
            >
              Enquire
            </button>
          </form>
        </div>
      </div>

      {/* Mobile: only Enquire button */}
      <div className="block lg:hidden fixed bottom-0 left-0 w-full z-[9999]">
        <button
          onClick={handleMobileEnquire}
          className="w-full bg-[#800020] hover:bg-[#6b1d1d] text-white py-3 text-center font-semibold"
        >
          Enquire Now
        </button>
      </div>
    </>
  )
}
