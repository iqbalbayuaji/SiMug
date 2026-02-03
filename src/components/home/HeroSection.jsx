import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import mascot6 from "../../assets/maskot/mascot6.png"
import runningImg from "../../assets/images/course_english_running.png"
import yogaImg from "../../assets/images/course_japanese_yoga.png"

export default function HeroSection() {
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

  // Animation variants untuk muncul dari tengah
  const floatingVariants = (delay = 0, floatY = 10, floatX = 0) => ({
    initial: {
      x: "50%",
      y: "50%",
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    float: {
      y: [0, floatY, 0],
      x: [0, floatX, 0],
      transition: {
        duration: 3 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8 + delay,
      },
    },
  })

  // Animation variants untuk fade in dari bawah
  const fadeInUpVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFF] via-white to-[#F8FAFF] overflow-hidden lg:min-h-[100vh] md:min-h-0">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-[10%] w-32 h-32 bg-[#4177FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-[5%] w-24 h-24 bg-[#0039C9]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pt-2 pt-4 lg:pb-16 pb-10 sm:py-12 lg:py-16 relative z-10 flex items-center lg:min-h-[100vh] md:min-h-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-36 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUpVariants}
            className="-mt-10 lg:-mt-16"
          >
            {/* Badge Platform Kesehatan No. 1 */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#E8F0FF] px-2 sm:px-3 py-0 sm:py-2.5 rounded-full mb-4 sm:mb-5" style={{ boxShadow: '0 0px 10px rgba(65, 119, 255, 0.15)' }}>
              <div className="w-7 h-7 sm:w-7 sm:h-7 bg-[#4177FF] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#4177FF] font-semibold text-xs sm:text-sm">#Platform Kesehatan No. 1</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-1 lg:mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-[#4177FF] to-[#6B95FF] bg-clip-text text-transparent">
                Belajar Kesehatan dan Kebugaraan
              </span>{" "}
              <span className="text-gray-900">dengan Cara Lebih Terstruktur</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Ikuti kursus berbasis progres, dapatkan panduan mentor, dan raih reward dari setiap pencapaianmu.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative flex-1">
                <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Telusuri kursus..."
                  className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-3 sm:py-3.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent text-sm sm:text-base placeholder:text-gray-400"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer bg-[#4177FF] text-white pl-3 pr-3 sm:pl-3 sm:pr-8 py-3 sm:py-0 rounded-full font-semibold hover:bg-[#3461D9] transition-all text-sm sm:text-base flex items-center gap-0 sm:gap-5 whitespace-nowrap"
                style={{ boxShadow: '0 8px 24px rgba(65, 119, 255, 0.4)' }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <span className="hidden sm:inline">Jelajah</span>
              </button>
            </form>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => handleQuickTag("Binaraga dasar")}
                className="cursor-pointer px-3 sm:px-5 py-1.5 sm:py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-xs sm:text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Binaraga dasar
              </button>
              <button
                onClick={() => handleQuickTag("Renang pemula")}
                className="cursor-pointer px-3 sm:px-5 py-1.5 sm:py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-xs sm:text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Renang pemula
              </button>
              <button
                onClick={() => handleQuickTag("Boxing advance")}
                className="cursor-pointer px-3 sm:px-5 py-1.5 sm:py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-xs sm:text-sm font-medium hover:bg-[#4177FF]/20 transition-colors"
              >
                Boxing advance
              </button>
            </div>
          </motion.div>

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
                <motion.div
                  className="absolute top-[15%] left-[5%] lg:left-[6%] xl:left-[8%] z-10"
                  variants={floatingVariants(0.1, -8, 5)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
                  <div className="w-12 h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 bg-[#6B95FF] rounded-3xl shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Icon 2 - Chat (Middle Left) */}
                <motion.div
                  className="absolute top-[40%] left-[2%] lg:left-[3%] xl:left-[5%] z-10"
                  variants={floatingVariants(0.2, 10, -5)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
                  <div className="w-12 h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 bg-[#6B95FF] rounded-3xl shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Icon 3 - Calendar (Top Right) */}
                <motion.div
                  className="absolute top-[0%] right-[15%] lg:right-[17%] xl:right-[20%] z-10"
                  variants={floatingVariants(0.15, -10, -8)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
                  <div className="w-12 h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 bg-[#6B95FF] rounded-3xl shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Image 1 - Top Center (Workout) */}
                <motion.div
                  className="absolute top-[4%] left-[25%] lg:left-[26%] xl:left-[28%] z-10"
                  variants={floatingVariants(0.25, -12, 8)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
                  <div className="w-32 h-20 lg:w-38 lg:h-24 xl:w-44 xl:h-28 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                    <img src={runningImg} alt="Workout" className="w-full h-full object-cover" />
                  </div>
                </motion.div>

                {/* Image 2 - Middle Center (Running) */}
                <motion.div
                  className="absolute top-[30%] left-[18%] lg:left-[20%] xl:left-[22%] z-10"
                  variants={floatingVariants(0.3, 15, -10)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
                  <div className="w-36 h-24 lg:w-42 lg:h-28 xl:w-48 xl:h-32 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                    <img src={yogaImg} alt="Running" className="w-full h-full object-cover" />
                  </div>
                </motion.div>

                {/* Card 1 - Progress Card (Right) */}
                <motion.div
                  className="absolute top-[22%] left-[58%] lg:left-[60%] xl:left-[62%] z-10"
                  variants={floatingVariants(0.35, -10, 12)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
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
                </motion.div>

                {/* Card 2 - Chat/Question Card (Bottom Left) */}
                <motion.div
                  className="absolute bottom-[20%] left-[0%] z-10"
                  variants={floatingVariants(0.4, 12, -8)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
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
                      <button className="cursor-pointer w-7 h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-[#4177FF] rounded-lg lg:rounded-xl flex items-center justify-center hover:bg-[#5A8CFF] transition-colors">
                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 - Admin Profile Card (Bottom Center) */}
                <motion.div
                  className="absolute top-[85%] left-[8%] lg:left-[9%] xl:left-[10%] z-10"
                  variants={floatingVariants(0.45, -8, 10)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
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
                </motion.div>

                {/* Card 4 - Community Groups (Bottom Right) */}
                <motion.div
                  className="absolute top-[60%] left-[55%] lg:left-[58%] xl:left-[60%] z-10"
                  variants={floatingVariants(0.5, 10, -12)}
                  initial="initial"
                  animate={["animate", "float"]}
                >
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
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
