"use client"

import { useState, useEffect, useContext } from "react"
import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PricingSection from "@/components/pricing-section"
import FloorPlanSection from "@/components/floor-plan-section"
import AmenitiesSection from "@/components/amenities-section"
import GallerySection from "@/components/gallery-section"
import LocationSection from "@/components/location-section"
import Footer from "@/components/footer"
import FloatingActionButtons from "@/components/floating-action-buttons"
import DownloadBrochureButton from "@/components/download-brochure-button"
import DiscountPopup from "@/components/discount-popup"
import StickyForm from "@/components/StickyForm"
import { Toaster } from 'react-hot-toast';
import context from "@/lib/context"
import { checkIfSubmitted } from "@/lib/checkIfSubmitted"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isAuthenticated, setAuthenticated } = useContext(context);

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  useEffect(() => {
    checkIfSubmitted(setIsSubmitted).then(() => setAuthenticated(true)).catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navigation />
        <DownloadBrochureButton />
        <main>
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
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
          position="top-center"  // default positions: top-right, top-left, bottom-right, bottom-left
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
