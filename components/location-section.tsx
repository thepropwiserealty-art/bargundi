import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const projects = [
  {
    name: "Marvilla",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Mantra+Marvilla+Project+Pune",
    mapsLink: "https://maps.app.goo.gl/1KkWvpXjm76UXLWm6",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890!2d73.9347218!3d18.5296492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c9c5819add%3A0x62892ffc1bcf1393!2sMantra%20Marvilla!5e0!3m2!1sen!2sin!4v1697654321000!5m2!1sen!2sin",
  },
  {
    name: "Mayfair",
    directionsLink: "https://www.google.com/maps/dir//Mayfair+River+Residences+By+Burgundy,+93%2Fa%2F9,+Mundhwa,+Pune,+Maharashtra+411036/@18.5366233,73.9231905,17z/data=!4m17!1m7!3m6!1s0x3bc2c13c30d779e1:0x6da0163556d04b25!2sMayfair+River+Residences+By+Burgundy!8m2!3d18.5365369!4d73.9240274!16s%2Fg%2F11x1zt28c7!4m8!1m0!1m5!1m1!1s0x3bc2c13c30d779e1:0x6da0163556d04b25!2m2!1d73.9240274!2d18.5365369!3e3?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D",
    mapsLink: "https://maps.app.goo.gl/L5BaWCVznYcFK3ea7",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890!2d73.9231905!3d18.5366233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13c30d779e1%3A0x6da0163556d04b25!2sMayfair%20River%20Residences%20By%20Burgundy!5e0!3m2!1sen!2sin!4v1697654322000!5m2!1sen!2sin",
  },
  {
    name: "One Residences",
    directionsLink: "https://www.google.com/maps/dir//One+residences+by+Burgundy,+Mantra+Luxury+Line,+Flyover,+opposite+Irani+Cafe,+near+Magarpatta,+Somnath+Nagar,+Magarpatta,+Mundhwa,+Pune,+Maharashtra+411036/@18.5237458,73.9264545,17z/data=!4m16!1m7!3m6!1s0x3bc2c18fd78da239:0x5071507dbaf4cc3d!2sOne+residences+by+Burgundy!8m2!3d18.5237408!4d73.9313254!16s%2Fg%2F11wc3lnk_h!4m7!1m0!1m5!1m1!1s0x3bc2c18fd78da239:0x5071507dbaf4cc3d!2m2!1d73.9313254!2d18.5237408?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D",
    mapsLink: "https://maps.app.goo.gl/SMkCj51RAwoL14KVA",
    embedSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890!2d73.9313254!3d18.5237408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c18fd78da239%3A0x5071507dbaf4cc3d!2sOne%20Residences%20by%20Burgundy!5e0!3m2!1sen!2sin!4v1697654323000!5m2!1sen!2sin",
  },
]

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Animation */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-balance">
            Prime Locations in Pune
          </h1>
        </div>

        {/* Grid Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <iframe
                    src={project.embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={project.name}
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-md flex items-center gap-2 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-sm">{project.name}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 p-2">
                  <a href={project.directionsLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm">Get Directions</Button>
                  </a>
                  <a href={project.mapsLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent text-sm hover:bg-muted">
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