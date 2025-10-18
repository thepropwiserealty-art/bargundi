"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect, useContext } from "react"
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
import context from "@/lib/context"

const floorPlans = [
  {
    id: 1,
    name: "Marvilla Villa",
    size: "5000* sqft",
    beds: 5,
    price: "From ₹4.6cr*",
    image: "/villa_floor1.png",
    features: ["5 beds villa", "In Mundhwa ,Pune", "Masterfull engineering"],
  },
  {
    id: 2,
    name: "Mayfair River residences 3BHK",
    size: "1500* sqft",
    beds: 3,
    price: "From ₹2.14cr*",
    image: "/mayfair3bhk.png",
    features: ["Luxuries 3 BHK ", "At Upper Koregaon Park ,Pune", "Masterfull blend of privacy and community"],
  },
  {
    id: 3,
    name: "Mayfair River residences 4BHK",
    size: "1743* sqft",
    beds: 4,
    price: "From ₹2.14cr*",
    image: "/mayfair4bhk.png",
    features: ["Luxuries 4 BHK ", "At Upper Koregaon Park ,Pune", "Architectural brilliance & natural beauty"],
  },
  {
    id: 4,
    name: "One Resideneces 3BHK",
    size: "1696* sqft",
    beds: 3,
    baths: 1,
    price: "From ₹2.90cr*",
    image: "/oneresidences3bhk.png",
    features: ["Luxuries 3 BHK", "At Magarpatta , Pune", "Pure Elegance and Comfort"],
  },
  {
    id: 5,
    name: "One Resideneces 4BHK",
    size: "2086* sqft",
    beds: 3,
    baths: 1,
    price: "From ₹2.90cr*",
    image: "/oneresidences4bhk.png",
    features: ["Luxuries 4 BHK", "At Magarpatta , Pune", "Pure Elegance and Comfort"],
  },
]

export default function FloorPlanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedPlan, setSelectedPlan] = useState(floorPlans[0])
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid")
  const [api, setApi] = useState<CarouselApi>()
  const { isAuthenticated } = useContext(context)

  useEffect(() => {
    if (!api || viewMode !== "carousel") return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api, viewMode])

  const openWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/8237311365?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

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
                      onClick={() => {
                        setSelectedPlan(plan)
                        const preview = document.querySelector("#floor-plan-preview")
                        if (preview) {
                          preview.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                      }}
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
              id="floor-plan-preview"
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
                      className={
                        isAuthenticated ? "w-full h-96 object-cover blur-image-clear" : "w-full h-96 object-cover blur-image"
                      }
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
                        <Button
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => openWhatsApp(`Send me ${selectedPlan.name} floor plan`)}
                        >
                          Download Plan
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => openWhatsApp(`Schedule tour for me to ${selectedPlan.name}`)}
                        >
                          Schedule Tour
                        </Button>
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
                {floorPlans.map((plan) => (
                  <CarouselItem key={plan.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden h-full">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={plan.image || "/placeholder.svg"}
                            alt={`${plan.name} Floor Plan`}
                            className={
                              isAuthenticated ? "w-full h-64 object-cover blur-image-clear" : "w-full h-64 object-cover blur-image"
                            }
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
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90 flex-1"
                              onClick={() => openWhatsApp(`Send me ${plan.name} floor plan`)}
                            >
                              Download Plan
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 bg-transparent"
                              onClick={() => openWhatsApp(`Schedule tour for me to ${plan.name}`)}
                            >
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
