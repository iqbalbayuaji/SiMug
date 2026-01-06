import { useEffect } from "react"
import { testimonials } from "../../../constants/testimonials"
import FloatingDots from "../../../components/FloatingDots"

export default function Step3({ 
  selectedInterest,
  setSelectedInterest,
  handleNextStep, 
  handlePrevStep,
  currentStep,
  totalSteps,
  getStepLabel,
  testimonialSlide,
  setTestimonialSlide
}) {
  const interests = [
    {
      id: "olahraga-kebugaran",
      title: "Olahraga, kebugaran jasmani"
    },
    {
      id: "nutrisi-pola-makan",
      title: "Nutrisi & pola makan"
    },
    {
      id: "mindfullness-kebiasaan",
      title: "Mindfullness, kebiasaan sehat"
    },
    {
      id: "sports-atletik",
      title: "Sports, atletik"
    }
  ]

  // Auto-slide testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [setTestimonialSlide])

  return (
    <>
      {/* Step 3 - Section Kiri - Blue Background dengan Testimoni (sama seperti Step 2) */}
      <div className="hidden lg:flex lg:w-[35%] bg-[#4177FF] flex-col justify-between p-8 relative">
        {/* Decorative Floating Dots */}
        <FloatingDots />

        {/* Back Button */}
        <button 
          onClick={handlePrevStep}
          className="flex items-center gap-2 text-white text-sm hover:opacity-80 transition z-10"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali
        </button>

        {/* Tagline */}
        <div className="text-white z-10 space-y-6">
          <p className="text-3xl md:text-4xl font-bold leading-snug">
            Proses belajar terasa hidup ketika sesuai minatmu.
          </p>
          <p className="text-3xl md:text-4xl font-bold leading-snug">
            Dalami hal yang benar-benar ingin kamu kuasai.
          </p>
          <div className="w-56 h-1.5 bg-white rounded-full mt-6"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="z-10">
          <div className="relative h-[210px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === testimonialSlide
              const isNext = index === (testimonialSlide + 1) % testimonials.length
              const isNextNext = index === (testimonialSlide + 2) % testimonials.length
              
              let zIndex = 0
              let transform = 'translateY(0) scale(1)'
              let opacity = 0
              
              if (isActive) {
                zIndex = 30
                transform = 'translateY(0) scale(1)'
                opacity = 1
              } else if (isNext) {
                zIndex = 20
                transform = 'translateY(8px) scale(0.97)'
                opacity = 0.7
              } else if (isNextNext) {
                zIndex = 10
                transform = 'translateY(16px) scale(0.94)'
                opacity = 0.4
              }
              
              return (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    zIndex,
                    transform,
                    opacity
                  }}
                >
                  <div className="bg-[#2352CA] rounded-3xl p-6 shadow-2xl h-full">
                    <h3 className="text-white text-2xl font-bold mb-4">
                      "{testimonial.quote}"
                    </h3>
                    <p className="text-white/95 text-xl leading-relaxed mb-2">
                      {testimonial.text}
                    </p>
                    <p className="text-white text-base font-medium">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === testimonialSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Step 3 - Section Kanan - Main Content */}
      <div className="w-full lg:w-[65%] flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 overflow-y-auto">
        {/* Step Indicator */}
        <div className="mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-[#4177FF]">
              Langkah {currentStep} dari {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {getStepLabel(currentStep)}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="flex gap-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                  index < currentStep
                    ? "bg-[#4177FF]"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            Apa minat utamamu dalam proses pengembangan diri ini?
          </h1>
          <p className="text-md md:text-base text-gray-500">
            SiMug pengen tahu apa yang pengen Kamu capai saat ini.
            <br />
            SiMug bakal nyesuain course yang paling relevan buat Kamu.
          </p>
        </div>

        {/* Interests List */}
        <div className="space-y-4 mb-8 flex-1">
          {interests.map((interest) => (
            <button
              key={interest.id}
              onClick={() => setSelectedInterest(interest.id)}
              className="w-full text-left p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-3 flex items-center justify-center flex-shrink-0 transition-all ${
                  selectedInterest === interest.id
                    ? "border-[#4177FF]"
                    : "border-[#4177FF]"
                }`}>
                  {selectedInterest === interest.id && (
                    <div className="w-3 h-3 rounded-full bg-[#4177FF]"></div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {interest.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-sm">
            <p className="text-[#4177FF] font-medium">Pilih salah satu.</p>
            <p className="text-gray-500">Kamu bisa ganti ini kapan saja.</p>
          </div>
          <button
            onClick={handleNextStep}
            disabled={!selectedInterest}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedInterest
                ? "bg-[#4177FF] text-white hover:bg-[#3461D9] shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Selanjutnya
          </button>
        </div>
      </div>

      {/* Mobile Blue Header for Step 3 */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#4177FF] p-4 flex justify-between items-center">
        <button 
          onClick={handlePrevStep}
          className="flex items-center gap-2 text-white text-sm"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali
        </button>
        <div className="flex items-center gap-2 text-white font-semibold">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          SiMug
        </div>
      </div>
    </>
  )
}
