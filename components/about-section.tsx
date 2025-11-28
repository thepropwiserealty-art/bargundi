import Image from "next/image"
import { Award, Users, Home, Star } from "lucide-react"

import luxuryInteriorImage from "@/public/modern-luxury-living-room-with-floor-to-ceiling-wi.jpg"

const stats = [
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Client Rating" },
]
 
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Replaced motion.div with standard div and Tailwind animation classes */}
          <div className="animate-in slide-in-from-left-8 fade-in duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Redefining Luxury Living</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Luxury Estates has been at the forefront of premium real estate, curating
              exceptional properties that embody luxury, comfort, and timeless elegance.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence extends beyond mere transactions. We craft experiences, build relationships,
              and help our clients discover not just houses, but homes where memories are made and dreams come to life.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-in slide-in-from-bottom-4 fade-in duration-700 fill-mode-forwards"
                  // Add staggered delay using inline styles or utility classes if available (Tailwind doesn't have arbitrary delay utilities by default without config, so style is safer here)
                  style={{ animationDelay: `${200 + index * 100}ms` }} 
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content - Replaced motion.div with standard div and Tailwind animation classes */}
          <div className="relative animate-in slide-in-from-right-8 fade-in duration-700 delay-200 fill-mode-forwards">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <Image 
                src={luxuryInteriorImage}
                alt="Luxury Interior"
                fill
                className="object-cover"
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              {/* Gradient Overlay - increased opacity for better text contrast if any text is overlaid, kept subtle here */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stat Card - Replaced motion.div */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border animate-in zoom-in-95 fade-in duration-500 delay-500 fill-mode-forwards">
              <div className="text-2xl font-bold text-card-foreground">₹88 Lakh+</div>
              <div className="text-sm text-muted-foreground">Average Property Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}