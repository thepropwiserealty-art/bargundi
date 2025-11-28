import { Phone, MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingActionButtons() {
  const buttons = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      href: `https://wa.me/8237311365?text=${encodeURIComponent(
        "Send me details of Mantra Burgundy series"
      )}`,
      target: "_blank",
    },
    {
      icon: Phone,
      label: "Call",
      color: "bg-blue-500 hover:bg-blue-600",
      href: "tel:+918237311365",
      target: "_self",
    },
    {
      icon: Car,
      label: "Uber",
      color: "bg-black hover:bg-gray-800",
      href: `https://wa.me/8237311365?text=${encodeURIComponent(
        "Book Uber for me "
      )}`,
      target: "_blank",
    },
  ]

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <div className="flex flex-col space-y-3">
        {buttons.map((button, index) => (
          <div
            key={button.label}
            className="flex items-center space-x-3 group justify-end animate-in slide-in-from-right-8 fade-in duration-500 fill-mode-forwards"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Label - shows on hover */}
            <div className="bg-white text-gray-800 px-3 py-1 rounded-full shadow-lg text-sm font-medium whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-right">
              {button.label}
            </div>

            {/* Button */}
            <a
              href={button.href}
              target={button.target}
              rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              <Button
                size="icon"
                className={`w-12 h-12 rounded-full shadow-lg ${button.color} text-white border-0 transition-transform hover:scale-110`}
              >
                <button.icon className="w-5 h-5" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}