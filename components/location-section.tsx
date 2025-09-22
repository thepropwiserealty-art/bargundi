"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Car, Train, Plane, Coffee, ShoppingBag, GraduationCap } from "lucide-react"

const locationFeatures = [
  {
    icon: Car,
    title: "5 min drive",
    description: "Downtown Business District",
  },
  {
    icon: Train,
    title: "2 min walk",
    description: "Metro Station",
  },
  {
    icon: Coffee,
    title: "3 min walk",
    description: "Cafés & Restaurants",
  },
  {
    icon: ShoppingBag,
    title: "10 min drive",
    description: "Premium Shopping Mall",
  },
  {
    icon: GraduationCap,
    title: "15 min drive",
    description: "Top-rated Schools",
  },
  {
    icon: Plane,
    title: "25 min drive",
    description: "International Airport",
  },
]

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="location" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Prime Location</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Strategically positioned in the heart of the city, our properties offer unparalleled access to the best
            dining, shopping, and entertainment venues.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 bg-muted">
                  {/* Placeholder for interactive map */}
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
                      <MapPin size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                    <div className="font-semibold text-primary">Luxury Estates</div>
                    <div className="text-sm text-muted-foreground">123 Premium Avenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">Get Directions</Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                View on Google Maps
              </Button>
            </div>
          </motion.div>

          {/* Location Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Everything Within Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our prime location puts you at the center of it all. From world-class dining and shopping to business
                  districts and transportation hubs, everything you need is just moments away.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-card-foreground">{feature.title}</div>
                            <div className="text-sm text-muted-foreground">{feature.description}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                className="bg-card p-6 rounded-xl border"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Visit Our Sales Center</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>123 Premium Avenue, Downtown District</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Mon-Sat: 9AM-7PM, Sun: 10AM-6PM</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Schedule Visit</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
