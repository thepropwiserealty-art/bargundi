import { Phone, MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingActionButtons() {
  const buttons = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600 focus:bg-green-600",
      href: `https://wa.me/8237311365?text=${encodeURIComponent(
        "Send me details of Mantra Burgundy series"
      )}`,
      target: "_blank",
    },
    {
      icon: Phone,
      label: "Call",
      color: "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600",
      href: "tel:+918237311365",
      target: "_self",
    },
    {
      icon: Car,
      label: "Uber",
      color: "bg-black hover:bg-gray-800 focus:bg-gray-800",
      href: `https://wa.me/8237311365?text=${encodeURIComponent(
        "Book Uber for me "
      )}`,
      target: "_blank",
    },
  ]

  return (
    <nav 
      className="fixed bottom-20 right-6 z-50"
      aria-label="Quick actions"
    >
      <ul className="flex flex-col space-y-3 m-0 p-0 list-none">
        {buttons.map((button) => (
          <li
            key={button.label}
            className="flex items-center space-x-3 group justify-end"
          >
            <div
              aria-hidden="true"
              className="bg-white text-gray-800 px-3 py-1 rounded-full shadow-lg text-sm font-medium whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 transition-all duration-200 origin-right"
            >
              {button.label}
            </div>
            <Button
              asChild
              size="icon"
              className={`w-12 h-12 rounded-full shadow-lg ${button.color} text-white border-0 transition-transform hover:scale-110 focus:scale-110`}
            >
              <a
                href={button.href}
                target={button.target}
                aria-label={button.label}
                role="button"
                rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
              >
                <button.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}