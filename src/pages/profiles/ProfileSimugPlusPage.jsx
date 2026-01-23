import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaCrown, FaStar } from 'react-icons/fa'
import bossImage from '../../assets/maskot/boss 1.png'

export default function ProfileSimugPlusPage() {
  const [openBenefit, setOpenBenefit] = useState(1) // Default buka benefit pertama

  const benefits = [
    {
      id: 1,
      title: 'Bonus Mug Poin & Diskon Eksklusif',
      description: 'User SiMUG+ dapat berperan sebagai "mentor" dengan membuat, mengelola, dan membagikan materi, serta mendapat intensif untuk hasil.'
    },
    {
      id: 2,
      title: 'Bonus Mug Poin & Diskon Eksklusif',
      description: 'Dapatkan bonus poin setiap bulan dan diskon khusus untuk berbagai fitur premium di SiMug.'
    },
    {
      id: 3,
      title: 'Bonus Mug Poin & Diskon Eksklusif',
      description: 'Nikmati berbagai keuntungan eksklusif yang hanya tersedia untuk member SiMug Plus.'
    },
    {
      id: 4,
      title: 'Prioritas Bantuan & Akses Fitur',
      description: 'Dapatkan prioritas dalam layanan bantuan dan akses ke fitur-fitur terbaru lebih dulu.'
    }
  ]

  const toggleBenefit = (id) => {
    // Jika benefit yang diklik sudah terbuka, jangan tutup (minimal 1 harus terbuka)
    if (openBenefit !== id) {
      setOpenBenefit(id)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header with Upgrade Button */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-bold text-gray-900">Tingkatkan Akun Kamu</h2>
            <span className="px-3 py-1 bg-blue-100 text-[#4177FF] text-xs font-semibold rounded-full flex items-center gap-1">
              <FaCrown className="text-xs" />
              Mentorship Acc
            </span>
          </div>
          <p className="text-gray-600">Subscription SiMug bagi kamu yang berminat!</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#4177FF] text-white font-semibold rounded-lg hover:bg-[#3461D9] hover:shadow-lg hover:scale-105 transition-all duration-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
          Upgrade
        </button>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Left Column - Benefits */}
        <div className="lg:col-span-3">
          {/* Benefits Section */}
          <div className="min-h-[420px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#4177FF]">Benefit SiMug+</h3>
              <button className="text-sm text-gray-400 hover:text-gray-600">
                Klik untuk lihat
              </button>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-[#4177FF]"
                >
                  <button
                    onClick={() => toggleBenefit(benefit.id)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-left">
                      {benefit.title}
                    </span>
                    {openBenefit === benefit.id ? (
                      <FaChevronUp className="text-[#4177FF] flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openBenefit === benefit.id && (
                    <div className="px-4 pb-4 bg-blue-50">
                      <p className="text-sm text-[#4177FF] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Upgrade Cards */}
        <div className="lg:col-span-2 space-y-4 lg:pt-12">
          {/* Main Upgrade Card - Smaller */}
          <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-2xl p-5 text-white relative overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10 group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Mascot - Floating/Absolute positioned */}
            <div className="absolute bottom-0 right-0 -mb-5 -mr-5 z-20 pointer-events-none">
              <img 
                src={bossImage} 
                alt="Boss Mascot" 
                className="w-40 h-40 object-contain animate-slideUp"
              />
            </div>

            {/* Content - Full width without being affected by mascot */}
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Tunggu Apalagi?<br />Ayo Naik Level!</h3>
              <p className="text-xs opacity-90 mb-3 leading-relaxed pr-24">
                Buka fitur premium, komunitas eksklusif, dan konten terbaik sebagai mentor.
              </p>

              <div className="space-y-2 max-w-[60%]">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                  <FaCrown className="text-yellow-300 text-sm" />
                  <span className="text-xs font-semibold">Mentorship</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                  <FaStar className="text-yellow-300 text-sm" />
                  <span className="text-xs font-semibold">Fitur Eksklusif</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-xl p-3 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-2xl font-bold mb-1">250+</div>
              <div className="text-xs opacity-90">Mentor Aktif</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-xl p-3 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-xs font-semibold mb-1">SiMug+ Tips</div>
              <div className="text-xs opacity-90 leading-relaxed">
                Gabung sekarang untuk akses penuh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
