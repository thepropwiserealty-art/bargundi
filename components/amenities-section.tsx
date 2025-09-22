"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Waves,
  Dumbbell,
  Car,
  Shield,
  Wifi,
  Coffee,
  TreePine,
  Users,
  Utensils,
  Gamepad2,
  Sparkles,
  Wind,
} from "lucide-react"

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Rooftop infinity pool with panoramic city views",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym with personal training available",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Secure underground parking with valet service",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security and concierge services",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary fiber-optic internet throughout",
  },
  {
    icon: Coffee,
    title: "Café Lounge",
    description: "Resident café with premium coffee and light meals",
  },
  {
    icon: TreePine,
    title: "Garden Terrace",
    description: "Beautifully landscaped outdoor spaces and gardens",
  },
  {
    icon: Users,
    title: "Event Spaces",
    description: "Private dining and meeting rooms for residents",
  },
  {
    icon: Utensils,
    title: "Gourmet Kitchen",
    description: "Shared chef kitchen for entertaining guests",
  },
  {
    icon: Gamepad2,
    title: "Game Room",
    description: "Entertainment lounge with billiards and games",
  },
  {
    icon: Sparkles,
    title: "Spa Services",
    description: "On-site spa and wellness treatments available",
  },
  {
    icon: Wind,
    title: "Climate Control",
    description: "Smart climate control in all living spaces",
  },
]

export default function AmenitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="amenities" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">World-Class Amenities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience luxury living with our comprehensive suite of amenities designed to enhance your lifestyle and
            provide unparalleled comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <amenity.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Ready to Experience Luxury Living?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a private tour and discover all the amenities that make our properties exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Tour
              </motion.button>
              <motion.button
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
