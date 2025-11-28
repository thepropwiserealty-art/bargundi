import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Square, MapPin } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Marvilla Villas",
    location: "Mundhwa Pune",
    price: "",
    beds: 5,
    sqft: "5,500*",
    image: "Marvilla-Logo.jpg",
    badge: "Luxury Villas",
    badgeVariant: "default" as const,
    phone: "8237311365",
  },
  {
    id: 2,
    title: "Mayfair Residences",
    location: "Upper Koregaon Park, Mundhwa, Pune",
    price: "",
    beds: "3/4",
    image: "Mayfair-Logo.jpg",
    badge: "Premium 3 BHK , 4 BHK",
    badgeVariant: "secondary" as const,
    phone: "8237311365",
  },
  {
    id: 3,
    title: "One Residences",
    location: "Magarpatta Pune",
    price: "",
    beds: "3/4",
    sqft: "1400-2100*",
    image: "One Residences Final Logo-C2C-01.jpg",
    badge: "Luxury 3BHK & 4BHK",
    badgeVariant: "destructive" as const,
    phone: "8237311365",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Burgundy Series
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our curated collection of luxury properties, each offering unique features and unparalleled
            elegance in prime locations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards">
          {properties.map((property) => (
            <div
              id={property.title.replaceAll(" ", "-")}
              key={property.id}
              className="h-full"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={property.image.startsWith('/') ? property.image : `/${property.image}`}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  <Badge className="absolute top-4 left-4 z-10" variant={property.badgeVariant}>
                    {property.badge}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">
                        {property.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{property.price}</div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-end">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Bed className="w-4 h-4 mr-1" />
                      <span className="text-sm mr-4">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Square className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.sqft || "-"} sqft</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {/* Replaced onClick with standard anchor tags */}
                    <a 
                      href={`https://wa.me/${property.phone}?text=${encodeURIComponent(`I want details of ${property.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </a>

                    <a
                      href={`https://wa.me/${property.phone}?text=${encodeURIComponent(`I want to schedule a tour for ${property.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        Schedule Tour
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}