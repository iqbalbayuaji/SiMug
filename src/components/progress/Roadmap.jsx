import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

export default function RoadmapPage() {
  const navigate = useNavigate()
  const [currentPhase, setCurrentPhase] = useState(5)

  const phases = [
    {
      id: 5,
      title: "Fase 5 : Penguatan Otot Inti",
      duration: "14 menit",
      tasks: "2 tugas",
      xpReward: 80,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
      status: "completed",
      position: "top-left"
    },
    {
      id: 6,
      title: "Fase 6 : Latihan Dasar",
      duration: "10 menit",
      tasks: "2 tugas",
      xpReward: 85,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      status: "current",
      position: "bottom-left",
      extraReward: {
        xp: 100,
        mp: 200
      }
    },
    {
      id: 7,
      title: "Fase 7 : Full Body Workout",
      duration: "8 menit",
      tasks: "1 tugas",
      xpReward: 90,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
      status: "locked",
      position: "top-right"
    },
    {
      id: 8,
      title: "Fase 8 : Pendinginan",
      duration: "10 menit",
      tasks: "2 tugas",
      xpReward: 95,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      status: "locked",
      position: "bottom-right"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F0FF] to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#4177FF] mb-3">Roadmap Kursus</h1>
          <p className="text-gray-600 text-lg">
            Roadmap membantu kamu memahami apa yang harus dilakukan pada step selanjutnya.
          </p>
        </div>

        {/* Last Achievement Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#4177FF] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Capaian Terakhir Kamu</h2>
              <p className="text-gray-600">Lanjutkan kursus terakhir yang dikunjungi</p>
            </div>
          </div>

          {/* Roadmap Flow */}
          <div className="relative">
            {/* Connection Lines - SVG for better control */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Line from phase 5 to 6 */}
              <path d="M 320 280 Q 320 350, 320 420" stroke="#4177FF" strokeWidth="3" fill="none" strokeDasharray="0" />
              {/* Line from phase 6 to 7 */}
              <path d="M 380 480 Q 500 480, 620 420" stroke="#CBD5E0" strokeWidth="3" fill="none" strokeDasharray="5,5" />
              {/* Line from phase 7 to 8 */}
              <path d="M 680 280 Q 680 350, 680 420" stroke="#CBD5E0" strokeWidth="3" fill="none" strokeDasharray="5,5" />
            </svg>

            {/* Phase Cards Grid */}
            <div className="grid grid-cols-2 gap-x-32 gap-y-8 relative" style={{ zIndex: 1 }}>
              {/* Phase 5 - Top Left */}
              <div className="flex justify-end">
                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-[#4177FF] w-80 relative">
                  <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  <img src={phases[0].image} alt={phases[0].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{phases[0].title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {phases[0].duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      {phases[0].tasks}
                    </span>
                  </div>
                </div>
              </div>

              {/* Empty space for alignment */}
              <div></div>

              {/* Phase 6 - Bottom Left with Extra Reward */}
              <div className="flex justify-end items-center gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-[#4177FF] w-80 relative">
                  <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  <img src={phases[1].image} alt={phases[1].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{phases[1].title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {phases[1].duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      {phases[1].tasks}
                    </span>
                  </div>
                </div>

                {/* Extra Reward Badge */}
                <div className="bg-[#4177FF] rounded-2xl p-3 shadow-lg">
                  <div className="text-white text-center mb-2 font-semibold text-sm">Extra Reward</div>
                  <div className="space-y-2">
                    <div className="bg-[#5686FF] rounded-lg px-4 py-2 flex items-center gap-2 text-white text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      +100 XP
                    </div>
                    <div className="bg-[#5686FF] rounded-lg px-4 py-2 flex items-center gap-2 text-white text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                      </svg>
                      +200 MP
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space */}
              <div></div>

              {/* Phase 7 - Top Right */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-300 w-80 relative opacity-60">
                  <div className="absolute inset-0 bg-gray-100/50 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 z-10">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  <img src={phases[2].image} alt={phases[2].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{phases[2].title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {phases[2].duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      {phases[2].tasks}
                    </span>
                  </div>
                </div>
              </div>

              {/* Phase 8 - Bottom Right */}
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-300 w-80 relative opacity-60">
                  <div className="absolute inset-0 bg-gray-100/50 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 z-10">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  <img src={phases[3].image} alt={phases[3].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{phases[3].title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {phases[3].duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      {phases[3].tasks}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
            <svg className="w-6 h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
            <svg className="w-6 h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="bg-[#4177FF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3461D9] transition-colors shadow-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Lanjut Belajar
          </button>
        </div>

        {/* Side Buttons */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 space-y-3">
          <button className="bg-[#4177FF] text-white px-4 py-3 rounded-l-2xl shadow-lg hover:bg-[#3461D9] transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            Mentor
          </button>
          <button className="bg-[#4177FF] text-white px-4 py-3 rounded-l-2xl shadow-lg hover:bg-[#3461D9] transition-colors">
            Flip card
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
