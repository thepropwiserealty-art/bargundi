import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadBrochureButton() {
  const phone = "8237311365"
  const message = "Send me a brochure of Burgundy"
  // Pre-calculate the URL on the server
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    // Replaced motion.div with standard div and Tailwind 'animate-in' classes
    <div className="fixed top-20 right-4 z-40 animate-in slide-in-from-right fade-in duration-500 delay-200 fill-mode-forwards">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Wrapping Button in anchor tag to preserve styling */}
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Download Brochure</span>
          <span className="sm:hidden">Brochure</span>
        </Button>
      </a>
    </div>
  )
}