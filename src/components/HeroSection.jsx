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
        <div className="absolute top-[40%] right-[15%] w-16 h-16 bg-[#4177FF]/5 rounded-full"></div>
        <div className="absolute top-[60%] right-[8%] w-20 h-20 bg-[#4177FF]/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-sm mb-4">{currentDate}</p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, {userName}!
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
            <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="font-semibold text-gray-900">Tanya SiMug AI</span>
              </div>
              <button className="bg-[#4177FF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#3461D9] transition-colors">
                Tanyakan apa saja!
              </button>
            </div>
          </div>

          {/* Right Content - 3D Card Illustration */}
          <div className="relative">
            <div className="relative">
              {/* Floating Dots */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#4177FF]/20 rounded-full animate-pulse"></div>
              <div className="absolute top-[20%] -left-4 w-12 h-12 bg-[#0039C9]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-[15%] -right-4 w-10 h-10 bg-[#4177FF]/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Main 3D Card */}
              <div className="relative bg-gradient-to-br from-[#4177FF] to-[#0039C9] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                
                {/* Card Content Placeholder */}
                <div className="relative z-10 space-y-4">
                  <div className="bg-white/20 h-16 rounded-2xl"></div>
                  <div className="bg-white/20 h-32 rounded-2xl"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 h-20 rounded-xl"></div>
                    <div className="bg-white/20 h-20 rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Shadow/Depth Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4177FF]/30 to-[#0039C9]/30 rounded-3xl blur-2xl transform translate-y-8 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
