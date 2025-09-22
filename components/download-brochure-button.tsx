"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadBrochureButton() {
  const downloadBrochure = () => {
    // Create a dummy PDF download - in real app, this would be an actual brochure file
    const link = document.createElement("a")
    link.href = "/placeholder.pdf" // Replace with actual brochure file path
    link.download = "luxury-estates-brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      className="fixed top-20 right-4 z-40"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Button
        onClick={downloadBrochure}
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        size="sm"
      >
        <Download className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">Download Brochure</span>
        <span className="sm:hidden">Brochure</span>
      </Button>
    </motion.div>
  )
}
