import { useState, useCallback } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"


export default function RoadmapPage() {
  const { courseId } = useParams()
  const [currentIndex, setCurrentIndex] = useState(0)

  const phases = [
    {
      id: 5,
      title: "Fase 5 : Penguatan Otot Inti",
      duration: "14 menit",
      tasks: "2 tugas",
      xpReward: 80,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
      status: "completed"
    },
    {
      id: 6,
      title: "Fase 6 : Latihan Dasar",
      duration: "10 menit",
      tasks: "2 tugas",
      xpReward: 85,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      status: "current",
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
      status: "locked"
    },
    {
      id: 8,
      title: "Fase 8 : Pendinginan",
      duration: "10 menit",
      tasks: "2 tugas",
      xpReward: 95,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      status: "locked"
    }
  ]

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(phases.length - 1, prev + 1))
  }, [phases.length])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-[#F0F4FF] py-12 relative overflow-hidden">
        {/* Decorative Lines - Left Side */}
        <div className="absolute left-0 bottom-0 w-80 h-32 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 320 128" preserveAspectRatio="none">
            {/* Main horizontal line at bottom */}
            <line x1="0" y1="64" x2="320" y2="64" stroke="#5988FF" strokeWidth="2" />
            
            {/* First vertical line with dot - pointing down */}
            <line x1="80" y1="64" x2="80" y2="128" stroke="#5988FF" strokeWidth="2" />
            <circle cx="80" cy="64" r="6" fill="#4177FF" />
            
            {/* Second vertical line with dot - pointing down */}
            <line x1="200" y1="64" x2="200" y2="128" stroke="#5988FF" strokeWidth="2" />
            <circle cx="200" cy="64" r="6" fill="#4177FF" />
            
            {/* Third vertical line with dot - pointing down */}
            <line x1="300" y1="64" x2="300" y2="128" stroke="#4177FF" strokeWidth="2" />
            <circle cx="300" cy="64" r="6" fill="#4177FF" />
            
            {/* Light horizontal line (background) */}
            <line x1="140" y1="90" x2="320" y2="90" stroke="#4177FF" strokeWidth="1.5" opacity="0.3" />
            
            {/* Light vertical lines (background) */}
            <line x1="160" y1="90" x2="160" y2="128" stroke="#4177FF" strokeWidth="1.5" opacity="0.3" />
            <circle cx="160" cy="90" r="4" fill="#4177FF" opacity="0.3" />
            
            {/* Small decorative boxes */}
            <rect x="180" y="100" width="30" height="20" fill="#4177FF" opacity="0.2" rx="4" />
            <rect x="220" y="105" width="25" height="18" fill="#4177FF" opacity="0.15" rx="3" />
          </svg>
        </div>

        {/* Decorative Lines - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-64 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 250 120" preserveAspectRatio="none">
            {/* Horizontal lines with dots */}
            <line x1="120" y1="25" x2="230" y2="25" stroke="#4177FF" strokeWidth="2" />
            <circle cx="120" cy="25" r="4" fill="#4177FF" />
            <circle cx="175" cy="25" r="4" fill="#4177FF" />
            <circle cx="230" cy="25" r="4" fill="#4177FF" />
            
            <line x1="120" y1="50" x2="230" y2="50" stroke="#4177FF" strokeWidth="2" />
            <circle cx="120" cy="50" r="4" fill="#4177FF" />
            <circle cx="175" cy="50" r="4" fill="#4177FF" />
            <circle cx="230" cy="50" r="4" fill="#4177FF" />
            
            {/* Vertical connecting lines */}
            <line x1="120" y1="25" x2="120" y2="50" stroke="#4177FF" strokeWidth="2" />
            <line x1="230" y1="25" x2="230" y2="50" stroke="#4177FF" strokeWidth="2" />
            
            {/* Small decorative boxes */}
            <rect x="140" y="70" width="35" height="25" fill="#4177FF" opacity="0.2" rx="4" />
            <rect x="185" y="75" width="25" height="18" fill="#4177FF" opacity="0.3" rx="3" />
            <rect x="220" y="78" width="20" height="15" fill="#4177FF" opacity="0.2" rx="3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#4177FF] mb-3">Roadmap Kursus</h1>
            <p className="text-gray-600 text-lg">
              Roadmap membantu kamu memahami apa yang harus dilakukan pada step selanjutnya.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex-1 bg-white py-8">
        <div className="w-full px-6">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto flex items-center gap-3 mb-6">
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

          {/* Roadmap Container */}
          <div className="max-w-7xl mx-auto relative bg-gradient-to-b from-[#F8FBFF] to-white rounded-3xl border border-gray-200 overflow-x-auto overflow-y-hidden shadow-sm" style={{ height: '750px' }}>
            {/* Horizontal scroll container */}
            <div className="relative h-full" style={{ width: '1600px', padding: '60px 40px' }}>
              {/* SVG for connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Line from Phase 5 down with curve */}
                <path d="M 280 280 L 280 350 Q 280 380, 310 380 L 380 380" stroke="#4177FF" strokeWidth="3" fill="none" />
                
                {/* Line from Extra Reward down */}
                <path d="M 720 280 L 720 350 Q 720 380, 690 380 L 620 380" stroke="#4177FF" strokeWidth="3" fill="none" />
                
                {/* Horizontal line connecting Phase 5 and Extra Reward at bottom */}
                <path d="M 380 380 L 620 380" stroke="#4177FF" strokeWidth="3" fill="none" />
                
                {/* Line from center down to Phase 6 */}
                <path d="M 500 380 L 500 420" stroke="#4177FF" strokeWidth="3" fill="none" />
                
                {/* Line from Phase 6 to Phase 7 */}
                <path d="M 600 520 L 600 560 Q 600 590, 630 590 L 800 590 Q 830 590, 830 560 L 830 380" stroke="#CBD5E0" strokeWidth="3" fill="none" strokeDasharray="8,8" />
                
                {/* Line from Phase 7 to Phase 8 */}
                <path d="M 1050 380 L 1050 560 Q 1050 590, 1020 590 L 950 590 Q 920 590, 920 620 L 920 660" stroke="#CBD5E0" strokeWidth="3" fill="none" strokeDasharray="8,8" />
                
                {/* XP Labels on lines */}
                <text x="220" y="320" fill="#4177FF" fontSize="14" fontWeight="600">+ 80 XP</text>
                <text x="520" y="410" fill="#CBD5E0" fontSize="14" fontWeight="600">+ 85 XP</text>
                <text x="770" y="430" fill="#CBD5E0" fontSize="14" fontWeight="600">+ 90 XP</text>
                <text x="940" y="570" fill="#CBD5E0" fontSize="14" fontWeight="600">+ 95 XP</text>
              </svg>

              {/* Phase Cards */}
              <div className="relative" style={{ zIndex: 1 }}>
                {/* Phase 5 - Top */}
                <div className="absolute" style={{ left: '60px', top: '10px' }}>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-[#4177FF] w-80 relative">
                    <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <img src={phases[0].image} alt={phases[0].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-2">{phases[0].title}</h3>
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

                {/* Phase 6 - Bottom (below Phase 5) */}
                <div className="absolute" style={{ left: '280px', top: '420px' }}>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-[#4177FF] w-80 relative">
                    <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <img src={phases[1].image} alt={phases[1].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-2">{phases[1].title}</h3>
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
                </div>

                {/* Extra Reward Badge - Top Right (next to Phase 5) */}
                <div className="absolute" style={{ left: '520px', top: '70px' }}>
                  <div className="bg-[#4177FF] rounded-2xl p-3 shadow-lg w-48">
                    <div className="text-white text-center mb-2 font-semibold text-sm flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Extra Reward
                    </div>
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

                {/* Phase 7 - Top Right */}
                <div className="absolute" style={{ left: '610px', top: '110px' }}>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-200 w-80 relative">
                    <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <img src={phases[2].image} alt={phases[2].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-2">{phases[2].title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#4177FF]">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {phases[2].duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        {phases[2].tasks}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phase 8 - Bottom Right */}
                <div className="absolute" style={{ left: '700px', top: '420px' }}>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-200 w-80 relative">
                    <button className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <img src={phases[3].image} alt={phases[3].title} className="w-full h-40 object-cover rounded-xl mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-2">{phases[3].title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#4177FF]">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {phases[3].duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === phases.length - 1}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
