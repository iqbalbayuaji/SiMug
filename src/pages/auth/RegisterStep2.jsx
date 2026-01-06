import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function RegisterStep2() {
  const navigate = useNavigate()
  const [selectedGoal, setSelectedGoal] = useState("")
  const currentStep = 2
  const totalSteps = 4
  
  const goals = [
    {
      id: "health",
      title: "Menjaga kesehatan harian",
      description: "Membangun kebiasaan sehat sederhana"
    },
    {
      id: "diet",
      title: "Pola makanan seimbang",
      description: "menerapkan pola makan yang sehat"
    },
    {
      id: "bb",
      title: "Menurunkan/menaikkan BB",
      description: "Mengatur BB tubuh secara bertahap"
    },
    {
      id: "exercise",
      title: "Berolahraga sambil praktik",
      description: "Belajar sambil bergerak dengan panduan"
    },
    {
      id: "mental",
      title: "Mengelola kesehatan mental",
      description: "Menjaga pikiran tetap seimbang"
    },
    {
      id: "fitness",
      title: "Mempertahankan kebugaran",
      description: "Menjaga kondisi tubuh tetap aktif & kuat"
    }
  ]

  const handleNext = () => {
    if (selectedGoal) {
      // Navigate to step 3 (you can create this later)
      console.log("Selected goal:", selectedGoal)
      // navigate("/register/step3")
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Section Kanan - Content */}
      <div className="w-full lg:w-[70%] flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 overflow-y-auto lg:order-2">
        {/* Step Indicator */}
        <div className="mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-blue-500">
              Langkah {currentStep} dari {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              Tujuan Penggunaan
            </span>
          </div>
          {/* Progress Bar */}
          <div className="flex gap-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                  index < currentStep
                    ? "bg-blue-500"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Apa tujuan utamamu ingin
            <br />
            berkembang bareng SiMug?
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            SiMug pengen tahu apa yang pengen Kamu capai saat ini.
            <br className="hidden sm:block" />
            SiMug bakal nyesuaiin course yang paling relevan buat Kamu.
          </p>
        </div>

        {/* Goals Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {goals.map((goal, index) => (
            <div
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 animate-stagger animate-stagger-${index + 1} ${
                selectedGoal === goal.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 transition-all duration-300 ${
                  selectedGoal === goal.id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}>
                  {selectedGoal === goal.id && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
                    {goal.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Text */}
        <div className="mb-6">
          <p className="text-sm text-blue-500 font-medium">
            Pilih salah satu.
          </p>
          <p className="text-sm text-blue-500">
            Kamu bisa ganti ini kapan saja.
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!selectedGoal}
          className={`w-full py-3 md:py-4 text-sm md:text-base rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
            selectedGoal
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Selanjutnya
        </button>
      </div>

      {/* Section Kiri - Blue Background with slide-in animation */}
      <div className="hidden lg:flex lg:w-[30%] relative ml-4 my-4 mr-0 rounded-3xl overflow-hidden bg-linear-to-br from-blue-500 via-blue-600 to-indigo-700 lg:order-1 animate-slideInFromLeft">
        
        {/* Animated Background Pattern - Floating Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient orbs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-20 w-48 h-48 bg-gradient-to-bl from-indigo-400/30 to-transparent rounded-full blur-2xl" />
          <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-2xl" />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-16 right-8 w-12 h-12 border-2 border-white/20 rounded-lg rotate-12" />
          <div className="absolute top-32 left-6 w-8 h-8 bg-white/10 rounded-full" />
          <div className="absolute top-24 right-16 w-4 h-4 bg-white/30 rounded-full" />
          <div className="absolute top-48 right-4 w-6 h-6 border border-white/25 rounded-full" />
          
          {/* Decorative rings */}
          <div className="absolute top-20 left-1/2 w-20 h-20 border border-white/10 rounded-full" />
          <div className="absolute top-24 left-1/2 translate-x-1 w-16 h-16 border border-white/15 rounded-full" />
          
          {/* Dot pattern */}
          <div className="absolute top-40 left-4 grid grid-cols-3 gap-2">
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/15 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/10 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/15 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/15 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/10 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/15 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
          </div>
          
          {/* Wavy lines decoration */}
          <svg className="absolute top-52 right-2 w-16 h-16 opacity-20" viewBox="0 0 100 100">
            <path d="M10,30 Q30,10 50,30 T90,30" stroke="white" strokeWidth="2" fill="none" />
            <path d="M10,50 Q30,30 50,50 T90,50" stroke="white" strokeWidth="2" fill="none" />
            <path d="M10,70 Q30,50 50,70 T90,70" stroke="white" strokeWidth="2" fill="none" />
          </svg>
          
          {/* Plus icons scattered */}
          <div className="absolute top-60 left-10 text-white/15 text-2xl font-light">+</div>
          <div className="absolute top-44 right-12 text-white/20 text-lg font-light">+</div>
          
          {/* Abstract shape */}
          <div className="absolute bottom-52 right-6 w-16 h-16">
            <div className="absolute inset-0 border border-white/15 rounded-xl rotate-45" />
            <div className="absolute inset-2 border border-white/10 rounded-lg rotate-45" />
          </div>
          
          {/* Gradient line accents */}
          <div className="absolute top-36 right-0 w-20 h-0.5 bg-gradient-to-l from-white/30 to-transparent" />
          <div className="absolute top-56 left-0 w-16 h-0.5 bg-gradient-to-r from-white/25 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start px-8 py-12 text-white w-full">
          <h2 className="text-2xl font-bold mb-3 leading-tight">
            Belajar akan terasa lebih
            <br />
            menyenangkan jika
            <br />
            sesuai minat.
          </h2>
          <p className="text-base mb-6 opacity-90 leading-relaxed">
            Fokuslah pada hal yang
            <br />
            benar-benar ingin kamu
            <br />
            pahami.
          </p>
          <div className="w-16 h-1 bg-white rounded-full" />
        </div>

        {/* Carousel Dots Indicator */}
        <div className="absolute bottom-44 left-8 flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/40 rounded-full" />
          <div className="w-2 h-2 bg-white/40 rounded-full" />
        </div>

        {/* Testimonial Card */}
        <div className="absolute bottom-8 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-lg">
          <p className="text-white text-base font-semibold mb-3 leading-relaxed">
            "Luar biasa!"
          </p>
          <p className="text-white/90 text-xs mb-3 leading-relaxed">
            Kursus yang sangat membantu. Saya jadi paham cara mengelola waktu yang baik saat berolahraga meski jadwal padat
          </p>
          <p className="text-white/80 text-xs font-medium">
            @MuhammadBail
          </p>
        </div>
      </div>

      {/* Mobile Blue Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-blue-500 to-blue-600 p-4 flex justify-between items-center">
        <Link to="/register" className="flex items-center gap-2 text-white text-sm">
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
        </Link>
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
    </div>
  )
}
