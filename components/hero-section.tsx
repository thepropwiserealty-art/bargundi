import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative 
        w-full min-h-screen 
        flex items-center justify-center 
        overflow-hidden
        bg-black
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/mantrabg.jpeg"
          alt="Luxury Estate representing Burgundy Luxuries"
          fill
          priority
          quality={75}
          className="object-cover object-center"
          sizes="100vw"
          draggable={false}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" /> 
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Removed animate-in classes to ensure visibility */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          Burgundy Luxuries Series
        </h1>

        {/* Removed animate-in classes to ensure visibility */}
        <p className="text-base sm:text-xl md:text-2xl mb-8 text-balance">
          Luxury estates crafted for the discerning few. Experience unparalleled elegance and sophistication.
        </p>

        {/* Removed animate-in classes to ensure visibility */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#about">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
            >
              Explore Properties
            </Button>
          </a>

          <a
            href="https://wa.me/8237311365?text=Schedule%20me%20a%20Tour%20for%20burgundy%20series"
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
        </div>
      </div>

      {/* Scroll Indicator - Keeping standard Tailwind animate-bounce */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-primary transition-colors z-20 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}