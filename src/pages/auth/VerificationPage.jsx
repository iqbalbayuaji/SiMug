import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function VerificationPage() {
  const [progress, setProgress] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const navigate = useNavigate()

  // Add custom animations to the page
  const floatingAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(-3deg); }
    }
    @keyframes floatReverse {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(15px) rotate(-5deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = floatingAnimation
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

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
    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F8FAFF] to-white flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Abstract Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#4177FF]/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#0039C9]/15 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4177FF]/5 blur-3xl"></div>
        
        {/* Geometric Abstract Shapes */}
        <div className="absolute top-[12%] right-[8%] w-24 h-24 border-4 border-[#4177FF]/30 rounded-2xl rotate-12" style={{ animation: 'spin 20s linear infinite' }}></div>
        <div className="absolute bottom-[15%] left-[10%] w-20 h-20 border-4 border-[#0039C9]/25 rounded-full" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
        <div className="absolute top-[65%] left-[8%] w-16 h-16 bg-gradient-to-br from-[#4177FF]/20 to-[#0039C9]/20 rotate-45 rounded-lg" style={{ animation: 'bounce 4s ease-in-out infinite' }}></div>
        <div className="absolute bottom-[45%] right-[12%] w-14 h-14 border-4 border-[#4177FF]/20 rounded-lg -rotate-12" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
        <div className="absolute top-[35%] right-[15%] w-12 h-12 bg-[#4177FF]/15 rounded-full" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>
        <div className="absolute top-[20%] left-[12%] w-10 h-10 bg-[#0039C9]/15 rounded-full" style={{ animation: 'bounce 3s ease-in-out infinite' }}></div>
        
        {/* Dotted Pattern */}
        <div className="absolute top-[25%] right-[25%] flex gap-3">
          <div className="w-2 h-2 bg-[#4177FF]/30 rounded-full"></div>
          <div className="w-2 h-2 bg-[#4177FF]/30 rounded-full"></div>
          <div className="w-2 h-2 bg-[#4177FF]/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-[30%] left-[20%] flex gap-3 rotate-90">
          <div className="w-2 h-2 bg-[#0039C9]/30 rounded-full"></div>
          <div className="w-2 h-2 bg-[#0039C9]/30 rounded-full"></div>
          <div className="w-2 h-2 bg-[#0039C9]/30 rounded-full"></div>
        </div>
        
        {/* Course/Education Icons with Background */}
        {/* Book Icon - Top Left */}
        <div className="absolute top-24 left-[8%] bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'float 5s ease-in-out infinite' }}>
          <svg className="w-10 h-10 text-[#4177FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        
        {/* Graduation Cap - Top Right */}
        <div className="absolute top-32 right-[10%] bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'floatSlow 6s ease-in-out infinite' }}>
          <svg className="w-11 h-11 text-[#0039C9]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
          </svg>
        </div>
        
        {/* Certificate - Middle Left */}
        <div className="absolute top-[48%] left-[5%] bg-white/60 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'floatReverse 5.5s ease-in-out infinite' }}>
          <svg className="w-9 h-9 text-[#4177FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
          </svg>
        </div>
        
        {/* Health/Fitness Icons */}
        {/* Heart Rate - Bottom Left */}
        <div className="absolute bottom-28 left-[12%] bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'float 4.5s ease-in-out infinite' }}>
          <svg className="w-10 h-10 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </div>
        
        {/* Dumbbell - Bottom Right */}
        <div className="absolute bottom-20 right-[8%] bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#0039C9]/20" style={{ animation: 'floatSlow 5s ease-in-out infinite' }}>
          <svg className="w-11 h-11 text-[#0039C9]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
          </svg>
        </div>
        
        {/* Running Person - Middle Right */}
        <div className="absolute top-[52%] right-[6%] bg-white/60 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'floatReverse 6s ease-in-out infinite' }}>
          <svg className="w-10 h-10 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
          </svg>
        </div>
        
        {/* Apple/Nutrition - Top Center */}
        <div className="absolute top-20 left-[42%] bg-white/60 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'float 4s ease-in-out infinite' }}>
          <svg className="w-9 h-9 text-[#0039C9]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a1 1 0 011 1c0 1.5-.5 2.5-1 3-.5-.5-1-1.5-1-3a1 1 0 011-1zm5 6c-1.5 0-2.8.6-3.7 1.6-.5-.9-1.3-1.6-2.3-1.6s-1.8.7-2.3 1.6C7.8 8.6 6.5 8 5 8 2.2 8 0 10.2 0 13s2.2 5 5 5c1.5 0 2.8-.6 3.7-1.6.5.9 1.3 1.6 2.3 1.6s1.8-.7 2.3-1.6c.9 1 2.2 1.6 3.7 1.6 2.8 0 5-2.2 5-5s-2.2-5-5-5z"/>
          </svg>
        </div>
        
        {/* Trophy - Bottom Center */}
        <div className="absolute bottom-[38%] right-[18%] bg-white/60 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'floatSlow 5.5s ease-in-out infinite' }}>
          <svg className="w-9 h-9 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
          </svg>
        </div>
        
        {/* Yoga/Meditation - Middle Top Left */}
        <div className="absolute top-[28%] left-[15%] bg-white/60 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-[#0039C9]/20" style={{ animation: 'floatReverse 4.5s ease-in-out infinite' }}>
          <svg className="w-9 h-9 text-[#0039C9]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
          </svg>
        </div>
        
        {/* Brain/Learning - Bottom Left Area */}
        <div className="absolute bottom-[48%] left-[8%] bg-white/60 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-[#4177FF]/20" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <svg className="w-9 h-9 text-[#4177FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        </div>
        
        {/* Curved Lines Decoration */}
        <svg className="absolute top-[15%] right-[30%] w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="#4177FF" strokeWidth="3" fill="none"/>
          <path d="M10,60 Q30,30 50,60 T90,60" stroke="#0039C9" strokeWidth="3" fill="none"/>
        </svg>
        
        <svg className="absolute bottom-[20%] left-[25%] w-28 h-28 opacity-20 rotate-180" viewBox="0 0 100 100">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="#4177FF" strokeWidth="3" fill="none"/>
        </svg>
      </div>

      <div className="w-full max-w-2xl relative z-10">
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
