import { useState } from "react"
import { useNavigate } from "react-router-dom"
import aiIcon from "../../assets/icon/ai.svg"
import komunitasImg from "../../assets/images/Komunitas-Onine.jpeg"
import mascot6 from "../../assets/maskot/mascot6.png"
import runningImg from "../../assets/images/course_english_running.png"
import yogaImg from "../../assets/images/course_japanese_yoga.png"

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-36 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{currentDate}</p>
            
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Hi, <span className="text-[#4177FF]">{userName}!</span>
              <br />
              Hari ini mau belajar apa?
            </h1>
            
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              SiMug itu tempat bagi kamu yang pengin hidup sehat tapi nggak mau ribet.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative mb-4 sm:mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Telusuri Course..."
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 pr-20 sm:pr-24 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent text-sm sm:text-base"
              />
              <button 
                type="submit"
                className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 bg-[#4177FF] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium hover:bg-[#3461D9] transition-colors text-sm sm:text-base"
              >
                Cari
              </button>
            </form>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <button 
                onClick={() => handleQuickTag("Binaraga dasar")}
                className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-xs sm:text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Binaraga dasar
              </button>
              <button 
                onClick={() => handleQuickTag("Renang pemula")}
                className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-xs sm:text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Renang pemula
              </button>
              <button 
                onClick={() => handleQuickTag("Boxing advance")}
                className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-xs sm:text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Boxing advance
              </button>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
              Masih bingung cara mulai? <a href="#" className="text-[#4177FF] font-medium hover:underline">Jelajahi minat</a>
            </p>

            {/* AI Assistant & Forum Cards */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* AI Assistant */}
              <div className="inline-flex flex-col gap-2 bg-white px-3 sm:px-4 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 flex-1">
                <div className="flex items-center gap-2">
                  <img src={aiIcon} alt="AI" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-bold text-gray-900 text-sm sm:text-base">Tanya SiMug AI</span>
                </div>
                <button 
                  onClick={() => navigate('/chatbot')}
                  className="bg-[#4177FF] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold hover:bg-[#3461D9] transition-colors w-full"
                >
                  Tanyakan apa saja!
                </button>
              </div>

              {/* Forum Community - Creative Layout */}
              <div 
                onClick={() => navigate('/forum-intro')}
                className="group relative bg-gradient-to-br from-[#4177FF] via-[#5A8CFF] to-[#6B95FF] px-3 sm:px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex-1 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>
                
                <div className="relative z-10 flex gap-2 sm:gap-3">
                  {/* Stacked Avatars - Vertical */}
                  <div className="relative flex flex-col -space-y-2 sm:-space-y-2.5 pt-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden shadow-md z-30">
                      <img src={komunitasImg} alt="Member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden shadow-md z-20">
                      <img src={komunitasImg} alt="Member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden shadow-md z-10">
                      <img src={komunitasImg} alt="Member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4177FF] font-bold text-[8px] sm:text-[9px] shadow-md z-0">
                      +99
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-white font-bold text-sm sm:text-base leading-tight">Forum Komunitas</h4>
                    <p className="text-white/70 text-[10px] sm:text-xs mt-0.5">Diskusi, sharing & support</p>
                    <p className="text-white font-semibold text-[10px] sm:text-xs mt-0.5">10K+ member aktif</p>
                    <button className="mt-1.5 sm:mt-2 bg-white text-[#4177FF] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold hover:bg-blue-50 transition-colors flex items-center gap-1 sm:gap-1.5 w-fit">
                      Gabung Sekarang
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Concentric Circles with Floating Elements */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[480px] xl:h-[550px] hidden md:block">
            {/* Concentric Circles Background - dari kecil ke besar */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Circle 4 - Largest (710px) - Paling belakang */}
              <div className="absolute w-[500px] h-[500px] lg:w-[580px] lg:h-[580px] xl:w-[710px] xl:h-[710px] bg-[#F1F5FF] opacity-70 rounded-full z-0" style={{ filter: 'blur(5px)' }}></div>
              
              {/* Circle 3 - Large (575px) */}
              <div className="absolute w-[400px] h-[400px] lg:w-[470px] lg:h-[470px] xl:w-[575px] xl:h-[575px] bg-[#ECF2FF] opacity-70 rounded-full z-0" style={{ filter: 'blur(5px)' }}></div>
              
              {/* Circle 2 - Medium (450px) */}
              <div className="absolute w-[320px] h-[320px] lg:w-[370px] lg:h-[370px] xl:w-[450px] xl:h-[450px] bg-[#E1E9FF] opacity-70 rounded-full z-0" style={{ filter: 'blur(5px)' }}></div>
              
              {/* Circle 1 - Smallest (250px) - Paling depan */}
              <div className="absolute w-[180px] h-[180px] lg:w-[210px] lg:h-[210px] xl:w-[250px] xl:h-[250px] bg-[#CEDCFF] opacity-70 rounded-full z-0" style={{ filter: 'blur(5px)' }}></div>
            </div>

            {/* Floating Elements Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                
                {/* Icon 1 - Chart/Stats (Top Left) */}
                <div className="absolute top-[15%] left-[5%] lg:left-[6%] xl:left-[8%] z-10">
                  <div className="w-12 h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 bg-[#6B95FF] rounded-3xl shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                {/* Icon 2 - Chat (Middle Left) */}
                <div className="absolute top-[40%] left-[2%] lg:left-[3%] xl:left-[5%] z-10">
                  <div className="w-12 h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 bg-[#6B95FF] rounded-3xl shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>

                {/* Icon 3 - Calendar (Top Right) */}
                <div className="absolute top-[0%] right-[15%] lg:right-[17%] xl:right-[20%] z-10">
                  <div className="w-12 h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 bg-[#6B95FF] rounded-3xl shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Image 1 - Top Center (Workout) */}
                <div className="absolute top-[4%] left-[25%] lg:left-[26%] xl:left-[28%] z-10">
                  <div className="w-32 h-20 lg:w-38 lg:h-24 xl:w-44 xl:h-28 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                    <img src={runningImg} alt="Workout" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Image 2 - Middle Center (Running) */}
                <div className="absolute top-[30%] left-[18%] lg:left-[20%] xl:left-[22%] z-10">
                  <div className="w-36 h-24 lg:w-42 lg:h-28 xl:w-48 xl:h-32 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                    <img src={yogaImg} alt="Running" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Card 1 - Progress Card (Right) */}
                <div className="absolute top-[22%] left-[58%] lg:left-[60%] xl:left-[62%] z-10">
                  <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-2.5 lg:p-3.5 xl:p-4 w-[170px] lg:w-[220px] xl:w-[260px]">
                    <div className="flex items-center gap-1.5 lg:gap-2 xl:gap-2.5 mb-2 lg:mb-2.5 xl:mb-3">
                      <div className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-[#E5EDFF] rounded-lg lg:rounded-xl flex items-center justify-center">
                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-[10px] lg:text-xs xl:text-sm leading-tight">Lari Atletik Pemula</h4>
                        <p className="text-[8px] lg:text-[10px] xl:text-xs text-gray-400">Semua kalangan</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 lg:space-y-2 xl:space-y-2.5">
                      <div className="bg-gray-50 rounded-lg lg:rounded-xl p-1.5 lg:p-2 xl:p-2.5">
                        <div className="flex justify-between text-[9px] lg:text-[10px] xl:text-xs mb-0.5 lg:mb-0.5 xl:mb-1">
                          <span className="text-gray-500 font-medium">Fase 1</span>
                          <span className="text-[#4177FF] font-bold text-[10px] lg:text-xs xl:text-sm">60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-0.5 lg:h-1 xl:h-1.5">
                          <div className="bg-[#4177FF] h-0.5 lg:h-1 xl:h-1.5 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg lg:rounded-xl p-1.5 lg:p-2 xl:p-2.5">
                        <div className="flex justify-between text-[9px] lg:text-[10px] xl:text-xs mb-0.5 lg:mb-0.5 xl:mb-1">
                          <span className="text-gray-500 font-medium">Fase 2</span>
                          <span className="text-[#4177FF] font-bold text-[10px] lg:text-xs xl:text-sm">70%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-0.5 lg:h-1 xl:h-1.5">
                          <div className="bg-[#4177FF] h-0.5 lg:h-1 xl:h-1.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Chat/Question Card (Bottom Left) */}
                <div className="absolute bottom-[20%] left-[0%] z-10">
                  <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-2.5 lg:p-3.5 xl:p-4 w-40 lg:w-52 xl:w-64">
                    <div className="flex items-center gap-1.5 lg:gap-2 xl:gap-2.5 mb-2 lg:mb-2.5 xl:mb-3">
                      <div className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-[#E5EDFF] rounded-lg lg:rounded-xl flex items-center justify-center">
                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 text-[10px] lg:text-xs xl:text-sm">Tanya ke <span className="text-[#4177FF]">MUGION</span></h4>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-1.5 xl:gap-2">
                      <input 
                        type="text" 
                        placeholder="Tanya apa saja?" 
                        className="flex-1 px-1.5 lg:px-2.5 xl:px-3 py-1 lg:py-1.5 xl:py-2 bg-gray-50 rounded-lg lg:rounded-xl text-[9px] lg:text-[10px] xl:text-xs border border-gray-200 placeholder:text-gray-400"
                        readOnly
                      />
                      <button className="w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-[#4177FF] rounded-lg lg:rounded-xl flex items-center justify-center hover:bg-[#5A8CFF] transition-colors">
                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Admin Profile Card (Bottom Center) */}
                <div className="absolute top-[85%] left-[8%] lg:left-[9%] xl:left-[10%] z-10">
                  <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-2 lg:p-3 xl:p-3.5 w-40 lg:w-50 xl:w-60">
                    <div className="flex items-center gap-1.5 lg:gap-2.5 xl:gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-full lg:rounded-ful overflow-hidden bg-[#D9D9D9]">
                        <img src={mascot6} alt="Admin" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-[10px] lg:text-xs xl:text-sm">Admin SiMug</h4>
                        <p className="text-[8px] lg:text-[10px] xl:text-xs text-gray-400">@simugofficial</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Community Groups (Bottom Right) */}
                <div className="absolute top-[60%] left-[55%] lg:left-[58%] xl:left-[60%] z-10">
                  <div className="bg-[#C4D5FF] backdrop-blur-sm rounded-lg lg:rounded-xl shadow-xl p-1.5 lg:p-2 xl:p-2.5 w-40 lg:w-52 xl:w-64 space-y-1 lg:space-y-1.5 xl:space-y-2">
                    <div className="flex items-center gap-1.5 lg:gap-2.5 xl:gap-3 bg-[#97B4FF] rounded-lg lg:rounded-xl p-1 lg:p-1.5 xl:p-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-[#7A9FFF] rounded-full"></div>
                      <div>
                        <h5 className="font-semibold text-[10px] lg:text-xs xl:text-sm text-white">Gym Boys</h5>
                        <p className="text-[8px] lg:text-[10px] xl:text-xs text-white/80">2,050 member</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2.5 xl:gap-3 bg-[#97B4FF] rounded-lg lg:rounded-xl p-1 lg:p-1.5 xl:p-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-[#7A9FFF] rounded-full"></div>
                      <div>
                        <h5 className="font-semibold text-[10px] lg:text-xs xl:text-sm text-white">Pelari Kalcer</h5>
                        <p className="text-[8px] lg:text-[10px] xl:text-xs text-white/80">3,215 member</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2.5 xl:gap-3 bg-[#97B4FF] rounded-lg lg:rounded-xl p-1 lg:p-1.5 xl:p-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-[#7A9FFF] rounded-full"></div>
                      <div>
                        <h5 className="font-semibold text-[10px] lg:text-xs xl:text-sm text-white">Binsik Group</h5>
                        <p className="text-[8px] lg:text-[10px] xl:text-xs text-white/80">1,070 member</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
