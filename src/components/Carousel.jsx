import { useState, useEffect } from "react"

/**
 * Carousel Component - Komponen carousel 3D yang dapat digunakan ulang
 * 
 * @param {Array} slides - Array berisi objek slide dengan properti: { image, title, description }
 * @param {number} autoPlayInterval - Interval auto-slide dalam ms (default: 5000, set 0 untuk disable)
 * @param {boolean} showDots - Tampilkan indikator titik (default: true)
 * @param {boolean} showArrows - Tampilkan tombol panah navigasi (default: false)
 * @param {string} className - Class tambahan untuk container
 */
export default function Carousel({
  slides = [],
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = false,
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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  // Calculate 3D position for each slide
  const getSlideStyle = (index) => {
    const diff = index - currentSlide
    const totalSlides = slides.length
    
    // Handle wrapping for infinite carousel feel
    let adjustedDiff = diff
    if (diff > totalSlides / 2) adjustedDiff = diff - totalSlides
    if (diff < -totalSlides / 2) adjustedDiff = diff + totalSlides

    const isActive = adjustedDiff === 0
    const isPrev = adjustedDiff === -1 || (adjustedDiff === totalSlides - 1)
    const isNext = adjustedDiff === 1 || (adjustedDiff === -(totalSlides - 1))

    let transform = ""
    let opacity = 0
    let zIndex = 0

    if (isActive) {
      transform = "translateX(0) translateZ(0) rotateY(0deg) scale(1)"
      opacity = 1
      zIndex = 30
    } else if (isPrev) {
      transform = "translateX(-70%) translateZ(-100px) rotateY(35deg) scale(0.85)"
      opacity = 0.6
      zIndex = 20
    } else if (isNext) {
      transform = "translateX(70%) translateZ(-100px) rotateY(-35deg) scale(0.85)"
      opacity = 0.6
      zIndex = 20
    } else {
      transform = "translateX(0) translateZ(-200px) rotateY(0deg) scale(0.7)"
      opacity = 0
      zIndex = 10
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
      <div className={`bg-blue-400/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-300/30 ${className}`}>
        <div className="h-32 md:h-40 flex items-center justify-center text-white/60">
          No slides available
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* 3D Carousel Container */}
      <div 
        className="relative h-[220px] md:h-[260px]"
        style={{ perspective: "1000px", perspectiveOrigin: "center center" }}
      >
        <div 
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 cursor-pointer"
              style={getSlideStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className="bg-blue-400/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-2xl border border-blue-300/30 h-full">
                {/* Image */}
                {slide.image && (
                  <div className="mb-3 md:mb-4 overflow-hidden rounded-lg">
                    <img
                      src={slide.image}
                      alt={slide.title || `Slide ${index + 1}`}
                      className="w-full h-20 md:h-24 object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="text-white">
                  {slide.title && (
                    <h3 className="text-base md:text-lg font-semibold mb-2 line-clamp-1">
                      {slide.title}
                    </h3>
                  )}
                  {slide.description && (
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed line-clamp-3">
                      {slide.description}
                    </p>
                  )}
                </div>

                {/* Custom Content (for flexibility) */}
                {slide.content && (
                  <div>{slide.content}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-40"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-40"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
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
      )}
    </div>
  )
}
