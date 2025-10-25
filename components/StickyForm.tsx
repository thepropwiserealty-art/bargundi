"use client"
import { useContext, useState } from "react"
import type React from "react"

import toast from "react-hot-toast"
import signup from "@/lib/signup"
import context from "@/lib/context"

type isSubmitProps = {
  isSubmitted: boolean
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function StickyForm({ isSubmitted, setIsSubmitted }: isSubmitProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const { setAuthenticated } = useContext(context)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitted) return

    if (!name) return toast.error("Name is required")
    if (!email.includes("@")) return toast.error("Invalid Email")
    if (phone.length !== 10) return toast.error("Enter 10 digit number")

    await toast.promise(signup(name, email, phone), {
      loading: "processing...",
      success: () => {
        setIsSubmitted(true)
        setAuthenticated(true)

        setName("")
        setPhone("")
        setEmail("")

        const whatsappNumber = "8237311365" // <-- REPLACE WITH YOUR NUMBER
        const message = `Hi, I want to enquire about Mantra Burgundy Series.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")

        return "success"
      },
      error: (err) => `${err.toString()}`,
    })
  }

  return (
    <div className="hidden lg:block fixed bottom-0 left-0 w-full bg-[#f8f5f2] shadow-lg border-t border-[#a52a2a]/30 z-[9999]">
      <div className="max-w-screen-xl mx-auto px-4">
        <form
          className="flex flex-wrap items-center gap-4 py-4"
          onSubmit={handleSubmit}
        > Enquire Now
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-[#6b1d1d]/40 text-[#4a1c1c] placeholder-[#6b1d1d]/60 focus:border-[#b23b3b] focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-[#6b1d1d]/40 text-[#4a1c1c] placeholder-[#6b1d1d]/60 focus:border-[#b23b3b] focus:outline-none transition"
          />
          <input
            type="tel"
            placeholder="Phone*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-[#6b1d1d]/40 text-[#4a1c1c] placeholder-[#6b1d1d]/60 focus:border-[#b23b3b] focus:outline-none transition"
          />
          <button
            type="submit"
            className="bg-[#800020] hover:bg-[#6b1d1d] text-[#fff8f2] font-semibold px-6 py-2 rounded-md transition transform hover:-translate-y-0.5 whitespace-nowrap shadow-sm border border-[#a0522d]/20"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
