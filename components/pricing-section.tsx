"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "2 BHK",
    location: "Near Magarpatta city",
    price: "₹2,850,000*",
    beds: 2,
    baths: 1,
    sqft: "1,200",
    image: "2bhk.png",
    badge: "Featured",
    badgeVariant: "default" as const,
  },
  {
    id: 2,
    title: "Luxury 3BHK",
    location: "Upper Camp Hadapsar",
    price: "₹4,200,000*",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    image: "3bhk.png",
    badge: "New",
    badgeVariant: "secondary" as const,
  },
  {
    id: 3,
    title: "Luxury 4BHK",
    location: "Hadapsar",
    price: "₹6,750,000*",
    beds: 4,
    baths: 2,
    sqft: "6,200",
    image: "4bhk.png",
    badge: "Premium",
    badgeVariant: "destructive" as const,
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Exceptional Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our curated collection of luxury properties, each offering unique features and unparalleled
            elegance in prime locations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4" variant={property.badgeVariant}>
                    {property.badge}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{property.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{property.price}</div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm mr-4">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Bath className="w-4 h-4 mr-1" />
                      <span className="text-sm mr-4">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.sqft} sqft</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">View Details</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Schedule Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
