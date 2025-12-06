"use client"

import { useState, useEffect } from "react" // Import useState and useEffect
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const projects = [
  {
    name: "Marvilla",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Mantra+Marvilla+Pune",
    mapsLink: "https://maps.app.goo.gl/1KkWvpXjm76UXLWm6",

    // ⚠ Replace this with the REAL embed link copied from Google Maps → Share → Embed a map
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7754966115198!2d73.9325263!3d18.5299548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c9c5819add%3A0x62892ffc1bcf1393!2sMantra%20Marvilla!5e0!3m2!1sen!2sin!4v1701540330000!5m2!1sen!2sin",
  },
  {
    name: "Mayfair",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Mayfair+River+Residences",
    mapsLink: "https://maps.app.goo.gl/L5BaWCVznYcFK3ea7",

    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.820941350881!2d73.921452!3d18.5366233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13c30d779e1%3A0x6da0163556d04b25!2sMayfair%20River%20Residences%20By%20Burgundy!5e0!3m2!1sen!2sin!4v1733172600000!5m2!1sen!2sin",
  },
  {
    name: "One Residences",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=One+Residences+Burgundy",
    mapsLink: "https://maps.app.goo.gl/SMkCj51RAwoL14KVA",

    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7754966115198!2d73.9264545!3d18.5237458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c18fd78da239%3A0x5071507dbaf4cc3d!2sOne%20residences%20by%20Burgundy!5e0!3m2!1sen!2sin!4v1701540330000!5m2!1sen!2sin",
  },
]

export default function LocationSection() {
  const [isMounted, setIsMounted] = useState(false)

  // Trigger animation after mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // --- Native Tailwind Entrance Classes ---
  // Apply a fade-in and slide-up effect on load for the header
  const headerEntranceClasses = `text-center mb-12 transition-all duration-700 ease-out 
    ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
  
  // Apply a fade-in and slide-up effect on load for the grid (with a slight delay)
  const gridEntranceClasses = `grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out 
    ${isMounted ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}`
  // ----------------------------------------

  return (
    <section
      id="location"
      className="py-20 bg-background"
      aria-labelledby="location-heading"
    >
      <div className="container mx-auto px-4">
        
        {/* Header - Uses native transition properties */}
        <div className={headerEntranceClasses}>
          <h1
            id="location-heading"
            className="text-4xl md:text-5xl font-bold text-primary text-balance"
          >
            Prime Locations in Pune
          </h1>
        </div>

        {/* Cards Grid - Uses native transition properties */}
        <div className={gridEntranceClasses}>
          {projects.map((project) => (
            <Card
              key={project.name}
              className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-0">
                
                {/* Map */}
                <div className="relative h-64">
                  <iframe
                    src={project.embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map location of ${project.name}`}
                  ></iframe>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-sm">{project.name}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-2 p-3">
                  <a
                    href={project.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm">
                      Get Directions
                    </Button>
                  </a>

                  <a
                    href={project.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full text-sm hover:bg-muted"
                    >
                      View on Google Maps
                    </Button>
                  </a>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}