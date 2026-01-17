import { useState, useEffect } from "react"

/**
 * StackedCarousel Component - Carousel dengan efek tumpukan folder
 * 
 * @param {Array} slides - Array berisi objek slide dengan properti: { title, description }
 * @param {number} autoPlayInterval - Interval auto-slide dalam ms (default: 5000, set 0 untuk disable)
 * @param {boolean} showDots - Tampilkan indikator titik (default: true)
 * @param {string} className - Class tambahan untuk container
 */
export default function StackedCarousel({
  slides = [],
  autoPlayInterval = 5000,
  showDots = true,
  className = ""
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval <= 0 || slides.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [autoPlayInterval, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Calculate stacked position for each slide (folder effect - only 2 stacks)
  const getSlideStyle = (index) => {
    const diff = index - currentSlide
    const totalSlides = slides.length
    
    // Handle wrapping
    let adjustedDiff = diff
    if (diff > totalSlides / 2) adjustedDiff = diff - totalSlides
    if (diff < -totalSlides / 2) adjustedDiff = diff + totalSlides

    let transform = ""
    let opacity = 0
    let zIndex = 0

    if (adjustedDiff === 0) {
      // Active slide - front (fully visible)
      transform = "translate(0, 0) scale(1)"
      opacity = 1
      zIndex = 20
    } else if (adjustedDiff === 1 || adjustedDiff === -(totalSlides - 1)) {
      // Next slide - back stack (offset to bottom-right, more visible)
      transform = "translate(20px, 20px) scale(0.97)"
      opacity = 0.9
      zIndex = 10
    } else {
      // Hidden slides (completely hidden)
      transform = "translate(40px, 40px) scale(0.94)"
      opacity = 0
      zIndex = 0
    }

    return {
      transform,
      opacity,
      zIndex,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }

  if (slides.length === 0) {
    return (
      <div className={`bg-blue-400/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-blue-300/30 ${className}`}>
        <div className="h-32 md:h-40 flex items-center justify-center text-white/60">
          No slides available
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Stacked Carousel Container */}
      <div className="relative h-[180px] md:h-[200px]">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
              style={getSlideStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className="bg-[#9AB7FF] backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl h-full flex flex-col justify-center">
                {/* Content */}
                <div className="text-white text-left">
                  {slide.title && (
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                      {slide.title}
                    </h3>
                  )}
                  {slide.description && (
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      {/* {showDots && slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white shadow-lg"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )} */}
    </div>
  )
}
