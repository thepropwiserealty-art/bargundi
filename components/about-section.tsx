"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Home, Star } from "lucide-react"

const stats = [
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Client Rating" },
]
 
export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
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
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/modern-luxury-living-room-with-floor-to-ceiling-wi.jpg" alt="Luxury Interior" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-2xl font-bold text-card-foreground">₹88 Lakh+</div>
              <div className="text-sm text-muted-foreground">Average Property Value</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
