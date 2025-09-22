"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // let fade-out complete
    }, 2500) // show for ~2.5s

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <motion.div
        className="loading-screen fixed inset-0 bg-white z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ pointerEvents: "none" }}
      />
    )
  }

  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Logo */}
        <motion.div
          className="w-20 h-20 mx-auto mb-4 bg-primary rounded-xl flex items-center justify-center shadow-lg"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* <span className="text-2xl font-bold text-primary-foreground">
            RE
          </span> */}
          <Image
            src="/dostilogo.png"   
            alt="Dosti Logo"
            width={110}
            height={110}
            priority
            className="rounded-lg shadow-md"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-2xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Dostigreenscapes Estates
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
         Official Strategic Partners
        </motion.p>
      </motion.div>
    </div>
  )
}
