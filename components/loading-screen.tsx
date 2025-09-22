"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Allow fade out animation to complete
    }, 2000) // Show for 2 seconds minimum

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: "none" }}
      />
    )
  }

  return (
    <div className="loading-screen">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-20 h-20 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span className="text-2xl font-bold text-primary-foreground">RE</span>
        </motion.div>
        <motion.h1
          className="text-2xl font-bold text-primary mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Luxury Estates
        </motion.h1>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Premium Real Estate Experience
        </motion.p>
      </motion.div>
    </div>
  )
}
