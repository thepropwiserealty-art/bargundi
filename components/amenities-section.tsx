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
} from "lucide-react"

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Relax and enjoy a refreshing swim in our pool.",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    description: "State-of-the-art fitness facilities for all residents.",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Convenient and secure parking for residents and guests.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "24/7 security ensuring your safety and peace of mind.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Stay connected with fast and reliable WiFi.",
  },
  {
    icon: Coffee,
    title: "Café & Lounge",
    description: "Social spaces to relax, meet friends, and enjoy refreshments.",
  },
  {
    icon: TreePine,
    title: "Green Spaces",
    description: "Beautifully landscaped gardens and outdoor areas.",
  },
  {
    icon: Users,
    title: "Community Spaces",
    description: "Event rooms and common areas for gatherings and activities.",
  },
]

export default function AmenitiesSection() {
  const whatsappNumber = "918237311365"

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Our Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Enjoy a range of amenities designed to enhance comfort, convenience, and community living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div key={amenity.title}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 transform group-hover:scale-110">
                    <amenity.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Experience It Yourself
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a tour to explore our amenities and see what makes our
              community special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Schedule%20me%20tour%20of%20Burgundy%20Series`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block hover:scale-105 transform duration-200 text-center"
              >
                Schedule Tour
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Send%20me%20the%20brochure`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors inline-block hover:scale-105 transform duration-200 text-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}