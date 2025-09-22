"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Grid3X3, Play } from "lucide-react"

const floorPlans = [
  {
    id: 1,
    name: "Studio Elite",
    size: "650 sqft",
    beds: 1,
    baths: 1,
    price: "From $1,200,000",
    image: "/modern-studio-apartment-floor-plan-with-open-layou.jpg",
    features: ["Open Layout", "City View", "Modern Kitchen"],
  },
  {
    id: 2,
    name: "Executive Suite",
    size: "1,200 sqft",
    beds: 2,
    baths: 2,
    price: "From $1,850,000",
    image: "/two-bedroom-luxury-apartment-floor-plan-with-maste.jpg",
    features: ["Master Suite", "Walk-in Closet", "Private Balcony"],
  },
  {
    id: 3,
    name: "Presidential",
    size: "2,400 sqft",
    beds: 3,
    baths: 3,
    price: "From $2,850,000",
    image: "/three-bedroom-penthouse-floor-plan-with-spacious-l.jpg",
    features: ["Corner Unit", "Panoramic Views", "Private Elevator"],
  },
]

export default function FloorPlanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedPlan, setSelectedPlan] = useState(floorPlans[0])
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid")
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api || viewMode !== "carousel") return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [api, viewMode])

  return (
    <section id="floor-plan" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Thoughtfully Designed Floor Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Every layout is meticulously crafted to maximize space, light, and functionality while maintaining the
            highest standards of luxury living.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="flex items-center gap-2"
          >
            <Grid3X3 size={16} />
            Grid View
          </Button>
          <Button
            variant={viewMode === "carousel" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("carousel")}
            className="flex items-center gap-2"
          >
            <Play size={16} />
            Carousel
          </Button>
        </motion.div>

        {viewMode === "grid" ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                {floorPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedPlan.id === plan.id ? "ring-2 ring-primary bg-card" : "hover:bg-card/50"
                      }`}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-card-foreground">{plan.name}</h3>
                          <Badge variant="outline">{plan.size}</Badge>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                        <div className="text-muted-foreground mb-4">
                          {plan.beds} Bed • {plan.baths} Bath
                        </div>
                        <div className="space-y-1">
                          {plan.features.map((feature) => (
                            <div key={feature} className="text-sm text-muted-foreground">
                              • {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={selectedPlan.image || "/placeholder.svg"}
                      alt={`${selectedPlan.name} Floor Plan`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{selectedPlan.name}</h3>
                      <p className="text-lg opacity-90">{selectedPlan.size}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">{selectedPlan.price}</div>
                        <div className="text-muted-foreground">
                          {selectedPlan.beds} Bedroom • {selectedPlan.baths} Bathroom • {selectedPlan.size}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-primary hover:bg-primary/90">Download Plan</Button>
                        <Button variant="outline">Schedule Tour</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {floorPlans.map((plan, index) => (
                  <CarouselItem key={plan.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden h-full">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={plan.image || "/placeholder.svg"}
                            alt={`${plan.name} Floor Plan`}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <p className="text-sm opacity-90">{plan.size}</p>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            {plan.beds} Bed • {plan.baths} Bath
                          </Badge>
                        </div>

                        <div className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                          <div className="space-y-2 mb-4">
                            {plan.features.map((feature) => (
                              <div key={feature} className="text-sm text-muted-foreground">
                                • {feature}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1">
                              Download Plan
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              Schedule Tour
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </motion.div>
        )}
      </div>
    </section>
  )
}
