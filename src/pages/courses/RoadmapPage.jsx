import { useState, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"


export default function RoadmapPage() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Progress dalam persen (0-100)
  // Contoh: 35% berarti sudah menyelesaikan fase pertama dan sedang di 35% perjalanan
  const [progress, setProgress] = useState(35)

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
      <section className="bg-[#F0F4FF] py-8 sm:py-12 relative overflow-hidden">
        {/* Decorative Lines - Left Side - Hidden on mobile */}
        <div className="hidden md:block absolute left-0 bottom-0 w-80 h-32 opacity-40">
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

        {/* Decorative Lines - Right Side - Hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-64 opacity-30">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4177FF] mb-2 sm:mb-3">Roadmap Kursus</h1>
            <p className="text-sm sm:text-base text-gray-600 lg:text-lg px-4">
              Roadmap membantu kamu memahami apa yang harus dilakukan pada step selanjutnya.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex-1 bg-white py-6 sm:py-8">
        <div className="w-full px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#4177FF] rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Capaian Terakhir Kamu</h2>
                <p className="text-sm sm:text-base text-gray-600">Lanjutkan kursus terakhir yang dikunjungi</p>
              </div>
            </div>
          {/* Mobile scroll indicator - REMOVED since we are going vertical on mobile */}
          {/* <div className="sm:hidden flex items-center gap-2 text-xs text-gray-500 mt-2"> ... </div> */}

          </div>

          {/* Desktop Layout (Hidden on Mobile) */}
          <div className="hidden md:block max-w-7xl mx-auto relative bg-gradient-to-b from-[#F8FBFF] to-white rounded-3xl border border-gray-200 overflow-x-auto overflow-y-hidden shadow-sm scrollbar-hide" style={{ height: '550px' }}>
            {/* Horizontal scroll container */}
            <div className="relative h-full" style={{ minWidth: '1000px', padding: '30px 60px' }}>
              
              {/* SVG for connecting lines - Zig-zag pattern with center horizontal line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* 
                  Perhitungan posisi yang tepat:
                  Container padding: 40px top, 80px left/right
                  Card width: 240px (w-60)
                  
                  Card positions:
                  - Phase 5 (TOP): left=0, top=0 → center X = 80 + 0 + 120 = 200
                  - Phase 6 (BOTTOM): left=260, top=290 → center X = 80 + 260 + 120 = 460
                  - Phase 7 (TOP): left=520, top=0 → center X = 80 + 520 + 120 = 720  
                  - Phase 8 (BOTTOM): left=780, top=290 → center X = 80 + 780 + 120 = 980
                  
                  Vertical positions (with padding 40px):
                  - TOP cards: card height ~170px + XP label ~25px = 195px → bottom Y = 40 + 195 = 235
                  - BOTTOM cards: XP label ~25px + card start at 290 → top Y = 40 + 290 = 330
                  - Center line Y = (235 + 330) / 2 ≈ 280
                  - Vertical line length = 45px each direction
                */}
                
                {/* Main horizontal center line (gray background) */}
                <line 
                  x1="200" y1="280" x2="980" y2="280" 
                  stroke="#E2E8F0" 
                  strokeWidth="4"
                />
                
                {/* Colored progress line overlay based on current phase */}
                <line 
                  x1="200" y1="280" 
                  x2={phases[1].status === 'current' ? "460" : phases[2].status === 'current' ? "720" : phases[3].status === 'current' ? "980" : "980"} 
                  y2="280" 
                  stroke="#4177FF" 
                  strokeWidth="4"
                />
                
                {/* Phase 5 - TOP - vertical line going UP (45px) */}
                <line 
                  x1="200" y1="280" x2="200" y2="235" 
                  stroke={phases[0].status === 'completed' || phases[0].status === 'current' ? "#4177FF" : "#E2E8F0"} 
                  strokeWidth="4"
                />
                <circle cx="200" cy="280" r="10" fill={phases[0].status === 'completed' || phases[0].status === 'current' ? "#4177FF" : "#E2E8F0"} stroke="white" strokeWidth="4" />
                
                {/* Phase 6 - BOTTOM - vertical line going DOWN (50px) */}
                <line 
                  x1="460" y1="280" x2="460" y2="330" 
                  stroke={phases[1].status === 'completed' || phases[1].status === 'current' ? "#4177FF" : "#E2E8F0"} 
                  strokeWidth="4"
                />
                <circle cx="460" cy="280" r="10" fill={phases[1].status === 'completed' || phases[1].status === 'current' ? "#4177FF" : "#E2E8F0"} stroke="white" strokeWidth="4" />
                
                {/* Phase 7 - TOP - vertical line going UP (45px) */}
                <line 
                  x1="720" y1="280" x2="720" y2="235" 
                  stroke={phases[2].status === 'completed' || phases[2].status === 'current' ? "#4177FF" : "#E2E8F0"} 
                  strokeWidth="4"
                />
                <circle cx="720" cy="280" r="10" fill={phases[2].status === 'completed' || phases[2].status === 'current' ? "#4177FF" : "#E2E8F0"} stroke="white" strokeWidth="4" />
                
                {/* Phase 8 - BOTTOM - vertical line going DOWN (50px) */}
                <line 
                  x1="980" y1="280" x2="980" y2="330" 
                  stroke={phases[3].status === 'completed' || phases[3].status === 'current' ? "#4177FF" : "#E2E8F0"} 
                  strokeWidth="4"
                />
                <circle cx="980" cy="280" r="10" fill={phases[3].status === 'completed' || phases[3].status === 'current' ? "#4177FF" : "#E2E8F0"} stroke="white" strokeWidth="4" />
              </svg>

              {/* Phase Cards - Zig-zag layout */}
              <div className="relative" style={{ zIndex: 1 }}>
                
                {/* Phase 5 - TOP position 1 */}
                <div className="absolute cursor-pointer" style={{ left: '0px', top: '0px' }} onClick={() => navigate('/course-progress/5')}>
                  <div className={`bg-white rounded-2xl p-3 shadow-lg border-2 ${phases[0].status === 'current' ? 'border-[#4177FF]' : phases[0].status === 'completed' ? 'border-green-400' : 'border-gray-200'} w-60 relative hover:shadow-xl transition-shadow`}>
                    {phases[0].status === 'completed' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <img src={phases[0].image} alt={phases[0].title} className="w-full h-24 object-cover rounded-xl mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{phases[0].title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {phases[0].duration}
                      </span>
                      <span>•</span>
                      <span>{phases[0].tasks}</span>
                    </div>
                  </div>
                  <div className={`font-semibold text-sm mt-2 text-left ${phases[0].status === 'completed' ? 'text-green-500' : 'text-[#4177FF]'}`}>+ {phases[0].xpReward} XP</div>
                </div>

                {/* Phase 6 - BOTTOM position 2 */}
                <div className="absolute" style={{ left: '260px', top: '290px' }}>
                  <div className={`font-semibold text-sm mb-2 text-right ${phases[1].status === 'current' ? 'text-[#4177FF]' : 'text-gray-400'}`}>+ {phases[1].xpReward} XP</div>
                  <div className={`bg-white rounded-2xl p-3 shadow-lg border-2 ${phases[1].status === 'current' ? 'border-[#4177FF]' : phases[1].status === 'completed' ? 'border-green-400' : 'border-gray-200'} w-60 relative`}>
                    {phases[1].status === 'current' && (
                      <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#4177FF] rounded-full text-white text-xs font-medium">
                        Aktif
                      </div>
                    )}
                    <img src={phases[1].image} alt={phases[1].title} className="w-full h-24 object-cover rounded-xl mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{phases[1].title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {phases[1].duration}
                      </span>
                      <span>•</span>
                      <span>{phases[1].tasks}</span>
                    </div>
                  </div>
                </div>

                {/* Phase 7 - TOP position 3 */}
                <div className="absolute" style={{ left: '520px', top: '0px' }}>
                  <div className={`bg-white rounded-2xl p-3 shadow-lg border-2 ${phases[2].status === 'current' ? 'border-[#4177FF]' : phases[2].status === 'completed' ? 'border-green-400' : 'border-gray-200'} w-60 relative ${phases[2].status === 'locked' ? 'opacity-60' : ''}`}>
                    {phases[2].status === 'locked' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <img src={phases[2].image} alt={phases[2].title} className="w-full h-24 object-cover rounded-xl mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{phases[2].title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {phases[2].duration}
                      </span>
                      <span>•</span>
                      <span>{phases[2].tasks}</span>
                    </div>
                  </div>
                  <div className="text-gray-400 font-semibold text-sm mt-2 text-left">+ {phases[2].xpReward} XP</div>
                </div>

                {/* Phase 8 - BOTTOM position 4 */}
                <div className="absolute" style={{ left: '780px', top: '290px' }}>
                  <div className="text-gray-400 font-semibold text-sm mb-2 text-right">+ {phases[3].xpReward} XP</div>
                  <div className={`bg-white rounded-2xl p-3 shadow-lg border-2 ${phases[3].status === 'current' ? 'border-[#4177FF]' : phases[3].status === 'completed' ? 'border-green-400' : 'border-gray-200'} w-60 relative ${phases[3].status === 'locked' ? 'opacity-60' : ''}`}>
                    {phases[3].status === 'locked' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <img src={phases[3].image} alt={phases[3].title} className="w-full h-24 object-cover rounded-xl mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{phases[3].title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {phases[3].duration}
                      </span>
                      <span>•</span>
                      <span>{phases[3].tasks}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Mobile Layout (Visible on Mobile Only) - Vertical Stack */}
          <div className="md:hidden space-y-8 px-2 relative">
             {/* Vertical Connect Line */}
             <div className="absolute left-4 top-8 bottom-8 w-1 bg-gray-200 -z-10"></div>
             
             {phases.map((phase, index) => (
                <div key={phase.id} className="relative pl-10">
                   {/* Timeline Dot */}
                   <div className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center z-10 ${
                     phase.status === 'completed' || phase.status === 'current' 
                      ? 'bg-[#4177FF]' 
                      : 'bg-gray-300'
                   }`}>
                      {phase.status === 'completed' && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {phase.status === 'current' && (
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      )}
                   </div>

                   {/* Card */}
                   <div 
                      onClick={() => navigate(`/course-progress/${phase.id}`)}
                      className={`bg-white rounded-2xl p-3 shadow-md border-2 ${
                        phase.status === 'current' 
                          ? 'border-[#4177FF]' 
                          : phase.status === 'completed' 
                            ? 'border-green-400' 
                            : 'border-gray-200'
                      } ${phase.status === 'locked' ? 'opacity-70' : ''}`}
                   >
                      <div className="flex gap-4">
                         <img src={phase.image} alt={phase.title} className="w-24 h-24 object-cover rounded-xl shrink-0" />
                         <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-sm mb-1">{phase.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                               <span className="flex items-center gap-1">
                                  <svg className="w-3 h-3 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                  </svg>
                                  {phase.duration}
                               </span>
                               <span>•</span>
                               <span>{phase.tasks}</span>
                            </div>
                            <div className={`font-semibold text-xs ${phase.status === 'completed' ? 'text-green-500' : 'text-[#4177FF]'}`}>
                               + {phase.xpReward} XP
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Navigation Buttons */}
          <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8">
            <button 
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali
            </button>

            <div className="flex items-center gap-4">
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
              <button 
                onClick={() => {
                  const currentPhase = phases.find(p => p.status === 'current')
                  if (currentPhase) {
                    navigate(`/course-progress/${currentPhase.id}`)
                  }
                }}
                className="bg-[#4177FF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3461D9] transition-colors shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Lanjut Belajar
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
