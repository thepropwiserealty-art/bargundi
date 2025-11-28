"use client"

import { useState, useEffect, useContext } from "react"
import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import { Toaster } from 'react-hot-toast';
import context from "@/lib/context"
import { checkIfSubmitted } from "@/lib/checkIfSubmitted"

// ✅ Dynamically import components that are below the fold
// loading: () => <p>Loading...</p> can be added if you want a skeleton state
const PricingSection = dynamic(() => import("@/components/pricing-section"))
const FloorPlanSection = dynamic(() => import("@/components/floor-plan-section"))
const AmenitiesSection = dynamic(() => import("@/components/amenities-section"))
const GallerySection = dynamic(() => import("@/components/gallery-section"))
const LocationSection = dynamic(() => import("@/components/location-section"))
const Footer = dynamic(() => import("@/components/footer"))

// ✅ Non-critical interactive elements can also be lazy loaded
const FloatingActionButtons = dynamic(() => import("@/components/floating-action-buttons"), { ssr: false })
const DownloadBrochureButton = dynamic(() => import("@/components/download-brochure-button"))
const DiscountPopup = dynamic(() => import("@/components/discount-popup"), { ssr: false })
const StickyForm = dynamic(() => import("@/components/StickyForm"), { ssr: false })



export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isAuthenticated, setAuthenticated } = useContext(context);

  useEffect(() => {
    checkIfSubmitted(setIsSubmitted).then(() => setAuthenticated(true)).catch((err)=>{});
  }, []);

  return (
    <>

      <div className={`transition-opacity duration-500`}>
        <Navigation />
        
        <DownloadBrochureButton />
        
        <main>
          <section id="home">
            <HeroSection />
          </section>
          {/* <section id="about">
            <AboutSection />
          </section> */}
          <section id="pricing">
            <PricingSection />
          </section>
          <section id="floor-plan">
            <FloorPlanSection />
          </section>
          <section id="amenities">
            <AmenitiesSection />
          </section>
          <section id="gallery">
            <GallerySection />
          </section>
          <section id="location">
            <LocationSection />
          </section>
        </main>
        
        <Footer />
        <FloatingActionButtons />
        <DiscountPopup isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
        <StickyForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
        
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </div>
    </>
  )
}