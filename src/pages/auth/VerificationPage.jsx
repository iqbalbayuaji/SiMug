import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function VerificationPage() {
  const [progress, setProgress] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const navigate = useNavigate()

  const tips = [
    {
      title: "TIPS:",
      content: "Konsistensi lebih penting daripada durasi. Tidak perlu lama, yang penting rutin dan realistis. Pilih waktu yang benar-benar bisa kamu jalani."
    },
    {
      title: "TIPS:",
      content: "Mulai dari yang kecil. Jangan langsung target besar, mulai dengan kebiasaan kecil yang mudah dilakukan setiap hari."
    },
    {
      title: "TIPS:",
      content: "Rayakan setiap pencapaian kecil. Setiap progress adalah kemajuan, tidak peduli seberapa kecil itu."
    }
  ]

  // Simulate progress loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50) // Will complete in ~5 seconds

    return () => clearInterval(interval)
  }, [])

  // Auto-slide tips carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [tips.length])

  const handleComplete = () => {
    // Navigate to home/dashboard
    console.log("Registration completed!")
    // navigate("/dashboard") // Uncomment when dashboard is ready
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Verification Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#4177FF]/10">
            <span className="text-[#4177FF] font-semibold text-sm">
              Memverifikasi
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Mohon tunggu sebentar, SiMug
            <br />
            sedang nyiapin akunmu
          </h1>
          <p className="text-[#1E1E1E] text-base">
            Proses hampir selesai, sebentar...
          </p>
        </div>

        {/* Progress Bar with Glow Effect */}
        <div className="mb-8">
          <div className="relative">
            {/* Blur Layer */}
            <div 
              className="absolute inset-0 -m-4 rounded-full blur-[55px] opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(circle, #4177FF 0%, transparent 70%)`
              }}
            ></div>
            
            {/* Progress Bar Container */}
            <div className="relative flex items-center gap-4">
              <div className="flex-1 h-3 bg-white rounded-full border-2 border-gray-100 overflow-hidden shadow-sm">
                <div 
                  className="h-full rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #4177FF 0%, #0039C9 100%)'
                  }}
                ></div>
              </div>
              
              {/* Progress Percentage */}
              <span className="text-[#4177FF] font-bold text-xl min-w-[60px] text-right">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        {/* Complete Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={handleComplete}
            disabled={progress < 100}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              progress >= 100
                ? "bg-[#4177FF] text-white hover:bg-[#3461D9] shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Selesaikan
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Tips Carousel */}
        <div className="max-w-xl mx-auto">
          <div className="relative h-[180px]">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentTip ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5] shadow-sm">
                  <h3 className="text-gray-900 font-bold text-lg mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
