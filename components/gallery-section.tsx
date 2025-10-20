"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect, useContext } from "react"
import { X, ChevronLeft, ChevronRight, Grid3X3, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import context from "@/lib/context"
import toast from "react-hot-toast"

const galleryImages = [
  {
    id: 1,
    src: "/livingcam.jpg",
    alt: "Luxury Living Room",
    category: "Marvilla",
  },
  {
    id: 2,
    src: "/nightcam.jpg",
    alt: "Night View",
    category: "Marvilla",
  },
  {
    id: 3,
    src: "/livingcam2.jpg",
    alt: "Living Room ",
    category: "Marvilla",
  },
  {
    id: 4,
    src: "/daycam.jpg",
    alt: "Day view",
    category: "Marvilla",
  },
  {
    id: 5,
    src: "/bed.jpg",
    alt: "Luxury Bedroom",
    category: "Marvilla",
  },
  {
    id: 6,
    src: "/CLounge-min-min.jpg",
    alt: "Lounge Area",
    category: "Mayfair",
  },
  {
    id: 7,
    src: "/compMayfiar00.jpg",
    alt: "Fitness Center",
    category: "Mayfair",
  },
  {
    id: 8,
    src: "/C3617_Mantra_Mirari_ll_Image _24 Top view-min-min.jpg",
    alt: "Top View",
    category: "Mayfair",
  },
  {
    id: 9,
    src: "/C3617_Mantra_Mirari_Image_23-min-min.jpg",
    alt: "Interior View",
    category: "Mayfair",
  },
  {
    id: 10,
    src: "/C3617_Mantra_Mirari_Image_18_02-min-min.jpg",
    alt: "Pool",
    category: "Mayfair",
  },
  {
    id: 11,
    src: "/C3617_Mantra_Mirari_Image_15-min-min.jpg",
    alt: "Bird View",
    category: "Mayfair",
  },
  {
    id: 12,
    src: "/private-balcony-with-outdoor-furniture-and-city-vi.jpg",
    alt: "Private Balcony",
    category: "Mayfair",
  },
  {
    id: 13,
    src: "/comp3617_Mantra_Mirari_Image_13_01-min-min.jpg",
    alt: "Exterior",
    category: "Mayfair",
  },
  {
    id: 14,
    src: "/3617_Mantra_Mirari_Image_21_02-min.jpg",
    alt: "",
    category: "Mayfair",
  },
  {
    id: 15,
    src: "/3617_Mantra_Mirari_Image_19-min.jpg",
    alt: "",
    category: "Mayfair",
  },
   {
    id: 16,
    src: "/1.Banquet-min.jpg",
    alt: "Banquet Hall",
    category: "One Residences",
  },
   {
    id: 17,
    src: "/4.Gym-min.jpg",
    alt: "Gym Area",
    category: "One Residences",
  },
  {
    id: 18,
    src: "/5.Mini_Theater-min.jpg",
    alt: "Mini Theater",
    category: "One Residences",
  },
  {
    id: 19,
    src: "/2.Game_Room_01-min.jpg",
    alt: "Game Room",
    category: "One Residences",
  },
  {
    id: 20,
    src: "/1906-Mantra- Mundhwa-45_Cam_Top cropped_high-min.jpg",
    alt: "",
    category: "One Residences",
  },
  {
    id: 21,
    src: "/1906-Mantra- Mundhwa-45 D_Cam_021_high-min.jpg",
    alt: "Exterior View",
    category: "One Residences",
  },
  {
    id: 22,
    src: "/1906-Mantra- Mundhwa-45 D_Cam_030_high-min.jpg",
    alt: "",
    category: "One Residences",
  },
  {
    id: 23,
    src: "/1906-Mantra- Mundhwa-Cam_020_Dusk_high-min.jpg",
    alt: "Exterior",
    category: "One Residences",
  },
  {
    id: 24,
    src: "/1.Entrance_01 -min.jpg",
    alt: "Entrance",
    category: "One Residences",
  },
  {
    id: 25,
    src: "/10.Master_Toilet-min.jpg",
    alt: "Master Toilet",
    category: "One Residences",
  },
  {
    id: 26,
    src: "/1906-Mantra- Mundhwa-Cam_032_high-min.jpg",
    alt: "",
    category: "One Residences",
  },
 
]

const categories = ["All", "Marvilla", "Mayfair", "One Residences"]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid")
  const [api, setApi] = useState<CarouselApi>()
  const { isAuthenticated } = useContext(context);

  useEffect(() => {
    if (!api || viewMode !== "carousel") return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000) // Auto-scroll every 4 seconds

    return () => clearInterval(interval)
  }, [api, viewMode])

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    if(!isAuthenticated){
      toast.error("Please Login to view images");
      return;
    }
    setSelectedImage(imageId)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? filteredImages.find((img) => img.id === selectedImage) : null

  return (
    <section id="gallery" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Visual Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our stunning collection of images showcasing the beauty, elegance, and attention to detail in every
            aspect of our luxury properties.
          </p>
        </motion.div>

        {/* Category Filter and View Toggle */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex items-center gap-2"
            >
              <Grid3X3 size={16} />
              Grid
            </Button>
            <Button
              variant={viewMode === "carousel" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("carousel")}
              className="flex items-center gap-2"
            >
              <Play size={16} />
              Carousel
            </Button>
          </div>
        </motion.div>

        {viewMode === "grid" ? (
          // Image Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                // className={
                //   isAuthenticated ? "relative group cursor-pointer overflow-hidden rounded-lg blur-image" :
                //   "relative group cursor-pointer overflow-hidden rounded-lg blur-image-clear"
                // }
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openLightbox(image.id)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  // className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  className={
                    isAuthenticated ? "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 blur-image-clear" :
                      "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 blur-image"
                  }
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="text-lg font-semibold">{image.alt}</div>
                    <div className="text-sm opacity-80">{image.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Carousel View
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {filteredImages.map((image, index) => (
                  <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => openLightbox(image.id)}
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className={
                          isAuthenticated? "w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105 blur-image-clear":
                          "w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105 blur-image"
                        }
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-lg font-semibold">{image.alt}</div>
                          <div className="text-sm opacity-80">{image.category}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </motion.div>
        )}

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-lg font-semibold">{selectedImageData.alt}</div>
                <div className="text-sm opacity-80">{selectedImageData.category}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
