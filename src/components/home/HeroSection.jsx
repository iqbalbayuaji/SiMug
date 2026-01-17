import aiIcon from "../../assets/icon/ai.svg"

export default function HeroSection({ userName = "Rizki Fiko" }) {
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
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Telusuri Course..."
                className="w-full px-5 py-3 pr-24 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4177FF] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3461D9] transition-colors">
                Cari
              </button>
            </div>

            {/* Quick Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="px-5 py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-sm font-medium hover:bg-[#4177FF]/20 transition-colors">
                Binaraga dasar
              </button>
              <button className="px-5 py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-sm font-medium hover:bg-[#4177FF]/20 transition-colors">
                Renang pemula
              </button>
              <button className="px-5 py-2 bg-[#4177FF]/10 text-[#4177FF] rounded-full text-sm font-medium hover:bg-[#4177FF]/20 transition-colors">
                Boxing advance
              </button>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Masih bingung cara mulai? <a href="#" className="text-[#4177FF] font-medium hover:underline">Jelajahi minat</a>
            </p>

            {/* AI Assistant */}
            <div className="inline-flex flex-col gap-4 bg-white px-6 py-5 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <img src={aiIcon} alt="AI" className="w-7 h-7" />
                <span className="font-bold text-gray-900 text-lg">Tanya SiMug AI</span>
              </div>
              <button className="bg-[#4177FF] text-white px-8 py-3 rounded-2xl text-base font-semibold hover:bg-[#3461D9] transition-colors w-full">
                Tanyakan apa saja!
              </button>
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
                  <div className="relative bg-gradient-to-br from-[#4177FF] to-[#10348F] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl overflow-hidden">
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Card Content Area */}
                    <div className="relative z-10 h-64 md:h-96">
                      {/* Content placeholder - empty for clean look like the image */}
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
