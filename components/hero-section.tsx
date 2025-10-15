"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  // Scroll to a section by ID
  const scrollToSection = (id: string) => {
    const section = document.querySelector(`#${id}`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/3617_Mantra_Mirari_Image_03.jpg" alt="Luxury Estate" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Burgundy luxuries Series
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-balance opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Luxury estates crafted for the discerning few. Experience unparalleled elegance and sophistication.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Explore Properties scrolls to #about */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
            onClick={() => scrollToSection("about")}
          >
            Explore Properties
          </Button>

          {/* Schedule Tour opens WhatsApp */}
          <a
            href="https://wa.me/9604276698?text=Schedule%20me%20a%20Tour%20for%20burgundy%20series"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Schedule Tour
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
