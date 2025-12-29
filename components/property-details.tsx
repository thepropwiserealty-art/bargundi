import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Building2, Calendar, Home, Download, Check, Sparkles } from "lucide-react"

export default function PropertyDetails() {
  const projectData = {
    name: "Mantra 1 Residences",
    developer: "By Mantra Group",
    location: "Magarpatta Road, Pune",
    rating: 4.8,
    reviews: 109,
    bookingAmount: "5 Lacs",
    priceStart: "2.40* Cr",
  }

  const keyStats = [
    {
      icon: Building2,
      label: "Land Parcel",
      value: "8.5 Acres",
    },
    {
      icon: Home,
      label: "Floors",
      value: "3B+G+2P+37",
    },
    {
      icon: Calendar,
      label: "Possession",
      value: "December 2029",
    },
  ]

  const configurations = [
    { bhk: "3 BHK", area: "1,350 - 1,450 sq.ft", price: "2.59 - 2.75 Cr" },
    { bhk: "3.5 BHK", area: "1,650 - 1,750 sq.ft", price: "3.15 - 3.35 Cr" },
    { bhk: "4 BHK", area: "2,000 - 2,100 sq.ft", price: "3.85 - 4.15 Cr" },
    { bhk: "4.5 BHK", area: "2,400 - 2,550 sq.ft", price: "4.75 - 5.25 Cr" },
  ]

  const paymentPlans = [
    {
      name: "Flexible Payment Plan",
      structure: "Custom payment options",
      details: "Tailored to your financial needs",
    },
    {
      name: "30:70 Payment Plan",
      structure: "30% Down | 70% on Possession",
      details: "Mantra Burgundy's signature flexible plan",
    },
    {
      name: "95:05 Payment Plan",
      structure: "95% on Possession | 5% Booking",
      details: "Maximum down payment flexibility",
    },
  ]

  const whatsappLink =
    "https://wa.me/918237311365?text=" +
    encodeURIComponent("Send me Brochure of Mantra Burgundy 1 Residences Magarpatta , Pune")

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER WITH SUBTLE ANIMATIONS */}
      <div className="border-b border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full"></div>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
          <div className="space-y-6">
            <div className="group">
              <h1 className="text-5xl font-serif font-bold text-primary leading-tight group-hover:drop-shadow-xl transition-all duration-700">
                {projectData.name}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground font-medium animate-pulse">
                {projectData.developer}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
                <MapPin className="h-5 w-5 text-accent group-hover:animate-bounce" />
                <span className="text-foreground font-medium">{projectData.location}</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-lg group hover:bg-accent/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 transition-all duration-300 ${
                        i < Math.floor(projectData.rating)
                          ? "fill-accent text-accent animate-pulse"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground text-sm">
                  {projectData.rating}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({projectData.reviews}+ Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        {/* Key Metrics Section - ANIMATED CARDS */}
        <div className="mb-16 relative group">
          <div className="absolute inset-0 border-4 border-dotted border-white/80 rounded-3xl -m-4 pointer-events-none z-0 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -m-8"></div>
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 relative z-10 group-hover:drop-shadow-2xl transition-all duration-700">
            Project Highlights 
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 relative z-10">
            {keyStats.map((stat, idx) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={idx}
                  className="border border-border/50 p-8 hover:border-accent/50 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 relative z-10 group/card overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-white/20 to-accent/20 -skew-x-12 opacity-0 group-hover/card:opacity-100 transition-all duration-1000 -translate-x-full group-hover/card:translate-x-full rounded-2xl"></div>
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="rounded-lg bg-accent/10 w-fit p-3 group-hover/card:scale-110 transition-all duration-500 hover:rotate-3">
                      <IconComponent className="h-6 w-6 text-accent group-hover/card:animate-bounce" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide animate-pulse">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-3xl font-bold text-foreground group-hover/card:drop-shadow-xl transition-all duration-500">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* ⭐ ULTRA-ANIMATED HIGHLIGHTED PRICING SECTION ⭐ */}
        <div className="mb-16 relative group">
          {/* Enhanced Multi-layered Animations */}
          <div className="absolute inset-0 border-8 border-dashed border-white/95 rounded-2xl -m-2 pointer-events-none z-10 animate-pulse"></div>
          <div className="absolute inset-0 border-4 border-dashed border-accent/50 rounded-2xl -m-1 pointer-events-none z-15 animate-ping [animation-duration:3s]"></div>
          
          {/* Multi-directional Shine Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full rounded-2xl z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-white/40 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-15"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent -skew-y-3 opacity-30 group-hover:opacity-60 transition-all duration-1000 origin-left rotate-1 z-25"></div>

          <div className="rounded-2xl bg-gradient-to-b from-[#7b0026] via-[#8b0036] to-[#7b0026] text-white relative overflow-hidden z-30 shadow-2xl group-hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            
            {/* Top label with enhanced animations */}
            <div className="relative w-full text-center text-xs sm:text-sm font-bold tracking-wider py-3 bg-gradient-to-r from-[#5b001c] to-[#8b0036] shadow-lg rounded-xl border-4 border-dashed border-white/90 overflow-hidden group">
              {/* White Dashed Inner Highlight */}
              <div className="absolute inset-0 border-2 border-dashed border-white/80 rounded-xl -m-px pointer-events-none animate-pulse [animation-duration:2s]"></div>
              
              {/* Double Shining Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 -translate-x-full group-hover:translate-x-full rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1500 delay-500 -translate-x-full group-hover:translate-x-full rounded-xl"></div>
              
              {/* Enhanced Golden Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 via-white/30 to-yellow-400/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* 🔥 ANIMATED BOOKING AMOUNT */}
              <div className="relative z-10 px-4 sm:px-6 py-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/30 via-white/40 to-yellow-400/30 px-4 py-2 rounded-full border-2 border-white/60 backdrop-blur-sm shadow-2xl group-hover:scale-105 transition-all duration-500">
                  <Sparkles className="h-4 w-4 text-yellow-300 animate-spin" />
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-white/95">BOOKING AMOUNT</span>
                </div>
                
                <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-black tracking-widest bg-gradient-to-r from-yellow-400 via-white to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl animate-bounce [animation-duration:2s]">
                  ₹5 LACS ONLY
                </p>
                
                <p className="mt-1 text-xs sm:text-sm font-semibold text-white/95 tracking-wide animate-pulse">
                  Special Offers On Spot Booking* 
                </p>
              </div>
            </div>

            {/* Inner content with enhanced animations */}
            <div className="m-6 sm:m-8 rounded-3xl border-4 border-dashed border-white/80 px-6 sm:px-10 py-8 sm:py-10 relative z-10 group/inner">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300/60 via-white/80 to-yellow-300/60 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
              
              <p className="text-center text-xl sm:text-2xl font-black leading-tight tracking-wide mb-4 relative z-20 group-hover/inner:scale-105 transition-transform duration-500">
                MANTRA BURGUNDY MAGARPATTA
                <span className="block text-3xl sm:text-4xl font-serif animate-pulse">THE LUXURY LINE </span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-20">
                <div className="group/item text-center p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 text-yellow-200">PAYMENT PLAN</p>
                  <p className="text-lg sm:text-xl font-black text-white drop-shadow-lg animate-pulse">30:70</p>
                </div>
                <div className="group/item text-center p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-500">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 text-yellow-200">DOWN PAYMENT PLAN</p>
                  <p className="text-lg sm:text-xl font-black text-white drop-shadow-lg animate-pulse">95:05</p>
                </div>
              </div>
            </div>

            {/* Enhanced bottom CTA section */}
            <div className="relative px-6 sm:px-8 pb-6 pt-4 group/cta">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-white rounded-full opacity-80 animate-pulse"></div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left group/cta">
                  <p className="text-xs sm:text-sm font-bold tracking-wide uppercase mb-2 text-yellow-200 animate-pulse">
                    Luxurious 3, 3.5, 4 & 4.5 BHK
                  </p>
                  <p className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent drop-shadow-xl group-hover/cta:scale-110 transition-all duration-500">
                    ₹{projectData.priceStart} <span className="text-sm font-normal block mt-1">Onwards</span>
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group-hover:scale-105 transition-transform duration-300 relative z-20"
                >
                  <button className="group/btn w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-white to-gray-100 text-[#7b0026] px-8 py-4 text-base font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-2 border-white/60 backdrop-blur-sm relative overflow-hidden">
                    <Download className="h-5 w-5 group-hover/btn:rotate-180 group-hover/btn:scale-110 transition-all duration-700" />
                    <span>Download Brochure</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent rounded-2xl -skew-x-12 opacity-0 group-hover/btn:opacity-100 transition-all duration-1000 -translate-x-full group-hover/btn:translate-x-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-white/30 to-accent/20 blur opacity-0 group-hover/btn:opacity-100 transition-all duration-700"></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
