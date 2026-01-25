import { useState } from "react"
import { useNavigate } from "react-router-dom"
import aiIcon from "../../assets/icon/ai.svg"
import thumbnailLogin from "../../assets/maskot/mascot1.png"
import komunitasImg from "../../assets/images/Komunitas-Onine.jpeg"

export default function HeroSection({ userName = "Rizki Fiko" }) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleQuickTag = (tag) => {
    navigate(`/search?q=${encodeURIComponent(tag)}`)
  }
  const currentDate = new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })

  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFF] via-white to-[#F8FAFF] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-[10%] w-32 h-32 bg-[#4177FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-[5%] w-24 h-24 bg-[#0039C9]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-sm mb-4">{currentDate}</p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, <span className="text-[#4177FF]">{userName}!</span>
              <br />
              Hari ini mau belajar apa?
            </h1>
            
            <p className="text-gray-600 text-base mb-8">
              SiMug itu tempat bagi kamu yang pengin hidup sehat tapi nggak mau ribet.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Telusuri Course..."
                className="w-full px-5 py-3 pr-24 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4177FF] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3461D9] transition-colors"
              >
                Cari
              </button>
            </form>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button 
                onClick={() => handleQuickTag("Binaraga dasar")}
                className="px-5 py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Binaraga dasar
              </button>
              <button 
                onClick={() => handleQuickTag("Renang pemula")}
                className="px-5 py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Renang pemula
              </button>
              <button 
                onClick={() => handleQuickTag("Boxing advance")}
                className="px-5 py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Boxing advance
              </button>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Masih bingung cara mulai? <a href="#" className="text-[#4177FF] font-medium hover:underline">Jelajahi minat</a>
            </p>

            {/* AI Assistant & Forum Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* AI Assistant */}
              <div className="inline-flex flex-col gap-4 bg-white px-6 py-5 rounded-3xl shadow-lg border border-gray-100 flex-1">
                <div className="flex items-center gap-2">
                  <img src={aiIcon} alt="AI" className="w-7 h-7" />
                  <span className="font-bold text-gray-900 text-lg">Tanya SiMug AI</span>
                </div>
                <button 
                  onClick={() => navigate('/chatbot')}
                  className="bg-[#4177FF] text-white px-8 py-3 rounded-2xl text-base font-semibold hover:bg-[#3461D9] transition-colors w-full"
                >
                  Tanyakan apa saja!
                </button>
              </div>

              {/* Forum Community - Creative Layout */}
              <div 
                onClick={() => navigate('/forum-intro')}
                className="group relative bg-gradient-to-br from-[#4177FF] via-[#5A8CFF] to-[#6B95FF] px-5 py-5 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex-1 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>
                
                <div className="relative z-10 flex gap-4">
                  {/* Stacked Avatars - Vertical */}
                  <div className="relative flex flex-col -space-y-3 pt-1">
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md z-30">
                      <img src={komunitasImg} alt="Member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md z-20">
                      <img src={komunitasImg} alt="Member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md z-10">
                      <img src={komunitasImg} alt="Member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4177FF] font-bold text-[10px] shadow-md z-0">
                      +99
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-white font-bold text-lg leading-tight">Forum Komunitas</h4>
                    <p className="text-white/70 text-xs mt-1">Diskusi, sharing & support</p>
                    <p className="text-white font-semibold text-sm mt-1">10K+ member aktif</p>
                    <button className="mt-3 bg-white text-[#4177FF] px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 w-fit">
                      Gabung Sekarang
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card Illustration */}
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] hidden md:block">
            {/* Floating Decorative Circles - Top Right */}
            <div className="absolute top-0 right-8 w-16 h-16 md:w-24 md:h-24 bg-[#88AAFF] rounded-full"></div>
            <div className="absolute top-8 md:top-12 right-0 w-10 h-10 md:w-16 md:h-16 bg-[#A8C5FF] rounded-full"></div>
            
            {/* Floating Decorative Circles - Bottom Left */}
            <div className="absolute bottom-4 left-0 w-10 h-10 md:w-14 md:h-14 bg-[#A8C5FF] rounded-full"></div>
            <div className="absolute bottom-12 md:bottom-16 left-8 md:left-12 w-14 h-14 md:w-20 md:h-20 bg-[#88AAFF] rounded-full"></div>

            {/* Main Card Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Tab/Header at top left - White tabs outside the card */}
                <div className="absolute top-6 -left-12 md:-left-20 z-20 flex flex-col -gap-2">
                  <div className="bg-white rounded-md w-24 md:w-32 h-6 md:h-8 shadow-lg"></div>
                  <div className="bg-white/95 rounded-md w-32 md:w-40 h-8 md:h-10 shadow-2xl ml-4 md:ml-6"></div>
                </div>

                {/* Left Side Decorative Element - Oval shape */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/3 z-10">
                  <div className="w-24 h-8 md:w-36 md:h-12 bg-[#4177FF]/60 rounded-full"></div>
                </div>

                {/* Main 3D Card */}
                <div className="relative transform -rotate-6">
                  {/* Card Shadow/Depth Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4177FF]/40 to-[#10348F]/40 rounded-[2rem] md:rounded-[3rem] transform -translate-x-4 translate-y-4 blur-xl"></div>
                  
                  {/* Third Layer - Lightest (Paling belakang, paling kiri) */}
                  <div className="absolute inset-0 bg-[#C5D6FF] rounded-[2rem] md:rounded-[3rem] transform -translate-x-6 translate-y-6"></div>
                  
                  {/* Second Layer - Medium */}
                  <div className="absolute inset-0 bg-[#88AAFF] rounded-[2rem] md:rounded-[3rem] transform -translate-x-3 translate-y-3"></div>
                  
                  {/* First Layer - Main Card with Gradient */}
                  <div className="relative bg-gradient-to-br from-[#4177FF] to-[#10348F] rounded-[2rem] md:rounded-[3rem] p-6 md:p-9 shadow-2xl overflow-hidden">
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Card Content Area */}
                    <div className="relative z-10 h-64 md:h-96">
                      <img src={thumbnailLogin} alt="Thumbnail" className="rounded-xl w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Right Bottom Decorative Element - Rounded Rectangle */}
                <div className="absolute right-0 bottom-8 md:bottom-12 translate-x-1/4 z-10">
                  <div className="w-28 h-14 md:w-40 md:h-20 bg-[#4177FF]/50 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
