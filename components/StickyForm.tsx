"use client"
import { useState } from "react"
import toast from "react-hot-toast"
import signup from "@/lib/signup"

type isSubmitProps = {
  isSubmitted: boolean,
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export default function StickyForm({isSubmitted, setIsSubmitted}: isSubmitProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if(isSubmitted) return;

    if (!name) return toast.error("Name is required")
    if (!email.includes("@")) toast.error("Invalid Email")
    if (phone.length !== 10) toast.error("Enter 10 digit number")

    await toast.promise(signup(name, email, phone), {
      loading: "processing...",
      success: "success",
      error: (err) => `${err.toString()}`,
    });
    
    setIsSubmitted(true);

    setName("");
    setPhone("");
    setEmail("");

    const whatsappNumber = "9604276698" // <-- REPLACE WITH YOUR NUMBER
    const message = `Hi, I want to enquire about dosti estates.%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  };

    return (
      <div className="fixed bottom-0 left-0 w-full bg-[#0a1a2f] shadow-lg z-[9999]">
        <div className="max-w-screen-xl mx-auto px-4">
          <form className="flex flex-wrap items-center gap-4 py-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 min-w-[150px] bg-transparent border-b border-white/50 text-white placeholder-white focus:border-[#c17727] focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 min-w-[150px] bg-transparent border-b border-white/50 text-white placeholder-white focus:border-[#c17727] focus:outline-none transition"
            />
            <input
              type="tel"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1 min-w-[150px] bg-transparent border-b border-white/50 text-white placeholder-white focus:border-[#c17727] focus:outline-none transition"
            />
            <button
              type="submit"
              className="bg-[#c17727] hover:bg-[#a8621d] text-white font-semibold px-6 py-2 rounded-md transition transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
