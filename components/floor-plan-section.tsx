"use client"

import Image from "next/image"
import { useState, useEffect, useContext } from "react"
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
    price: "From ₹5.10Cr*",
    image: "/villa_floor1.png",
    features: ["5 beds villa", "In Mundhwa ,Pune", "Masterfull engineering"],
  },
  {
    id: 2,
    name: "Mayfair River residences 3BHK",
    size: "1500* sqft",
    beds: 3,
    price: "From ₹2.20Cr*",
    image: "/mayfair3bhk.png",
    features: [
      "Luxuries 3 BHK ",
      "At Upper Koregaon Park ,Pune",
      "Masterfull blend of privacy and community",
    ],
  },
  {
    id: 3,
    name: "Mayfair River residences 4BHK",
    size: "1743* sqft",
    beds: 4,
    price: "From ₹2.60Cr*",
    image: "/mayfair4bhk.png",
    features: [
      "Luxuries 4 BHK ",
      "At Upper Koregaon Park ,Pune",
      "Architectural brilliance & natural beauty",
    ],
  },
  {
    id: 4,
    name: "One Resideneces 3BHK",
    size: "1696* sqft",
    beds: 3,
    baths: 1,
    price: "From ₹2.90Cr*",
    image: "/oneresidences3bhk.png",
    features: [
      "Luxuries 3 BHK",
      "At Magarpatta , Pune",
      "Pure Elegance and Comfort",
    ],
  },
  {
    id: 5,
    name: "One Resideneces 4BHK",
    size: "2086* sqft",
    beds: 3,
    baths: 1,
    price: "From ₹2.60Cr*",
    image: "/oneresidences4bhk.png",
    features: [
      "Luxuries 4 BHK",
      "At Magarpatta , Pune",
      "Pure Elegance and Comfort",
    ],
  },
]

export default function FloorPlanSection() {
  const [selectedPlan, setSelectedPlan] = useState(floorPlans[0])
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid")
  const [api, setApi] = useState<CarouselApi>()
  const { isAuthenticated } = useContext(context)

  // Carousel Auto-scroll logic
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
    <section id="floor-plan" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Thoughtfully Designed Floor Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Every layout is meticulously crafted to maximize space, light, and
            functionality while maintaining the highest standards of luxury
            living.
          </p>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="flex items-center gap-2 transition-transform active:scale-95"
          >
            <Grid3X3 size={16} />
            Grid View
          </Button>
          <Button
            variant={viewMode === "carousel" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("carousel")}
            className="flex items-center gap-2 transition-transform active:scale-95"
          >
            <Play size={16} />
            Carousel
          </Button>
        </div>

        {/* GRID VIEW */}
        {viewMode === "grid" ? (
          <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {/* List Selection Column */}
            <div className="lg:col-span-1 space-y-4">
              {floorPlans.map((plan) => (
                <div key={plan.id}>
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedPlan.id === plan.id
                        ? "ring-2 ring-primary bg-card scale-[1.02]"
                        : "hover:bg-card/50"
                    }`}
                    onClick={() => {
                      setSelectedPlan(plan)
                      // Optional: Smooth scroll on mobile only if needed
                      if (window.innerWidth < 1024) {
                         const preview = document.querySelector("#floor-plan-preview")
                         preview?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {plan.name}
                        </h3>
                        <Badge variant="outline">{plan.size}</Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {plan.price}
                      </div>
                      <div className="text-muted-foreground mb-4">
                        {plan.beds} Bed • {plan.baths || plan.beds} Bath
                      </div>
                      <div className="space-y-1">
                        {plan.features.map((feature) => (
                          <div
                            key={feature}
                            className="text-sm text-muted-foreground"
                          >
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Preview Column */}
            <div id="floor-plan-preview" className="lg:col-span-2">
              <Card className="overflow-hidden h-fit sticky top-8">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative w-full h-96 bg-muted">
                    <Image
                      src={selectedPlan.image || "/placeholder.svg"}
                      alt={`${selectedPlan.name} Floor Plan`}
                      fill
                      className={
                        isAuthenticated
                          ? "object-cover blur-image-clear transition-all duration-500"
                          : "object-cover blur-image transition-all duration-500"
                      }
                      sizes="(min-width: 1024px) 66vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">
                        {selectedPlan.name}
                      </h3>
                      <p className="text-lg opacity-90">{selectedPlan.size}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-card flex-1">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">
                          {selectedPlan.price}
                        </div>
                        <div className="text-muted-foreground">
                          {selectedPlan.beds} Bedroom •{" "}
                          {selectedPlan.baths || selectedPlan.beds} Bathroom •{" "}
                          {selectedPlan.size}
                        </div>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button
                          className="bg-primary hover:bg-primary/90 flex-1 sm:flex-none"
                          onClick={() =>
                            openWhatsApp(`Send me ${selectedPlan.name} floor plan`)
                          }
                        >
                          Download Plan
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 sm:flex-none"
                          onClick={() =>
                            openWhatsApp(
                              `Schedule tour for me to ${selectedPlan.name}`
                            )
                          }
                        >
                          Schedule Tour
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* CAROUSEL VIEW */
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-500">
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
                  <CarouselItem
                    key={plan.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative w-full h-64 bg-muted">
                          <Image
                            src={plan.image || "/placeholder.svg"}
                            alt={`${plan.name} Floor Plan`}
                            fill
                            className={
                              isAuthenticated
                                ? "object-cover blur-image-clear"
                                : "object-cover blur-image"
                            }
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <p className="text-sm opacity-90">{plan.size}</p>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            {plan.beds} Bed • {plan.baths || plan.beds} Bath
                          </Badge>
                        </div>

                        <div className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">
                            {plan.price}
                          </div>
                          <div className="space-y-2 mb-4">
                            {plan.features.map((feature) => (
                              <div
                                key={feature}
                                className="text-sm text-muted-foreground"
                              >
                                • {feature}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90 flex-1"
                              onClick={() =>
                                openWhatsApp(`Send me ${plan.name} floor plan`)
                              }
                            >
                              Download Plan
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 bg-transparent"
                              onClick={() =>
                                openWhatsApp(
                                  `Schedule tour for me to ${plan.name}`
                                )
                              }
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
          </div>
        )}
      </div>
    </section>
  )
}