"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"

export default function DownloadBrochureButton() {
  const downloadBrochure = async () => {
    try {
      const response = await fetch("/api/files/brochure.pdf");

      if (!response.ok) {
        const err = await response.json();
        // console.log(err);
        throw new Error(err.error);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Trigger brochure download from public folder
      const link = document.createElement("a")
      link.href = url // 👈 Place your file in /public/brochure.pdf
      link.download = "brochure.pdf" // 👈 File name user sees
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  return (
    <motion.div
      className="fixed top-20 right-4 z-40"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Button
        onClick={async () => {
          toast.promise(downloadBrochure(), {
            loading: 'Downloading',
            success: 'Downloaded',
            error: (err: any) => `${err.message}`,
          });
        }}
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
