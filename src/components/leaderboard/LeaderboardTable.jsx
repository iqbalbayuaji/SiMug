import { useState, useEffect, useRef } from 'react'
import aiWhiteIcon from '../../assets/icon/ai-white.svg'

export default function LeaderboardTable({ leaderboardData, onShowTips }) {
  const [activeTab, setActiveTab] = useState('bulanan')
  const [activeScope, setActiveScope] = useState('global')
  const [showScopeDropdown, setShowScopeDropdown] = useState(false)
  const [visibleRows, setVisibleRows] = useState([])
  const rowRefs = useRef([])

  // Intersection Observer for table rows
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleRows((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* User Rank Info & SIMUG Tips */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-stretch gap-0 w-auto sm:flex-1">
          <div className="w-1 xs:w-1.5 bg-[#4177FF] rounded-2xl mr-1.5 xs:mr-2"></div>
          <div className="bg-white rounded-md px-3 xs:px-4 py-2.5 xs:py-3 md:py-4 shadow-md border-2 border-gray-200 w-auto">
            <p className="text-xs xs:text-sm md:text-base text-gray-400 mb-0.5 xs:mb-1 whitespace-nowrap">Posisi Leaderboard:</p>
            <p className="flex items-baseline gap-1 xs:gap-2 whitespace-nowrap">
              <span className="text-[#4177FF] font-bold text-base xs:text-lg md:text-xl">#121</span>
              <span className="text-black text-sm xs:text-base md:text-lg">dari 523 user</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 xs:gap-3 justify-end">
          <button 
            onClick={onShowTips}
            className="bg-[#4177FF] text-white px-2 xs:px-3 py-1 xs:py-1.5 rounded-lg font-semibold hover:bg-[#3461DB] transition-colors flex items-center gap-1 xs:gap-2 shadow-lg text-xs xs:text-sm md:text-base cursor-pointer"
          >
            <img src={aiWhiteIcon} alt="AI Icon" className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />
            SIMUG Tips
          </button>
          <button className="w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 bg-[#4177FF] text-white rounded-full hover:bg-[#3461DB] transition-colors flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>      
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
        {/* Table Header with Tabs */}
        <div className="bg-[#4177FF] px-3 xs:px-4 md:px-6 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
            <div className="w-full md:w-auto">
              <h2 className="text-base xs:text-lg md:text-xl font-bold text-white mb-0.5">Top 10 User SIMUG</h2>
              <p className="text-blue-100 text-[10px] xs:text-xs">Berdasarkan Peringkat "{activeTab === 'bulanan' ? 'Bulanan' : 'Mingguan'}"</p>
            </div>
            <div className="flex items-center gap-2 xs:gap-3 w-full md:w-auto justify-between md:justify-end">
              <div className="bg-[#5787FF] rounded-lg xs:rounded-xl p-1 xs:p-1.5 flex gap-0.5 xs:gap-1">
                <button
                  onClick={() => setActiveTab('bulanan')}
                  className={`px-3 xs:px-4 md:px-6 py-1.5 xs:py-2 rounded-md xs:rounded-lg font-semibold transition-all text-[10px] xs:text-xs md:text-sm cursor-pointer ${
                    activeTab === 'bulanan'
                      ? 'bg-[#80A5FF] text-white'
                      : 'bg-transparent text-white/80 hover:text-white'
                  }`}
                >
                  Bulanan
                </button>
                <button
                  onClick={() => setActiveTab('mingguan')}
                  className={`px-3 xs:px-4 md:px-6 py-1.5 xs:py-2 rounded-md xs:rounded-lg font-semibold transition-all text-[10px] xs:text-xs md:text-sm cursor-pointer ${
                    activeTab === 'mingguan'
                      ? 'bg-[#80A5FF] text-white'
                      : 'bg-transparent text-white/80 hover:text-white'
                  }`}
                >
                  Mingguan
                </button>
              </div>
              <div className="relative">
                <button 
                  onClick={() => setShowScopeDropdown(!showScopeDropdown)}
                  className="px-2.5 xs:px-3 md:px-4 py-2 xs:py-2.5 md:py-3 cursor-pointer rounded-lg xs:rounded-xl font-semibold bg-[#5787FF] text-white hover:bg-white/30 transition-all flex items-center gap-1 xs:gap-2 text-[10px] xs:text-xs md:text-sm whitespace-nowrap"
                >
                  <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden xs:inline">{activeScope === 'global' ? 'Global' : 'Terdekat'}</span>
                  <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {showScopeDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 xs:w-52 md:w-56 bg-white rounded-xl xs:rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                    {/* Global Option */}
                    <button
                      onClick={() => {
                        setActiveScope('global')
                        setShowScopeDropdown(false)
                      }}
                      className={`w-full px-3 xs:px-4 py-2.5 xs:py-3 flex items-center gap-2 xs:gap-3 transition-colors ${
                        activeScope === 'global' 
                          ? 'bg-[#E5ECFF] text-[#4177FF]' 
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                        activeScope === 'global' ? 'bg-[#4177FF]' : 'bg-gray-200'
                      }`}>
                        <svg className={`w-4 h-4 xs:w-4.5 xs:h-4.5 md:w-5 md:h-5 ${activeScope === 'global' ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-sm xs:text-base md:text-lg">Global</span>
                    </button>
                    
                    {/* Terdekat Option */}
                    <button
                      onClick={() => {
                        setActiveScope('terdekat')
                        setShowScopeDropdown(false)
                      }}
                      className={`w-full px-3 xs:px-4 py-2.5 xs:py-3 flex items-center gap-2 xs:gap-3 transition-colors border-t border-gray-100 ${
                        activeScope === 'terdekat' 
                          ? 'bg-[#E5ECFF] text-[#4177FF]' 
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                        activeScope === 'terdekat' ? 'bg-[#4177FF]' : 'bg-gray-200'
                      }`}>
                        <svg className={`w-4 h-4 xs:w-4.5 xs:h-4.5 md:w-5 md:h-5 ${activeScope === 'terdekat' ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-sm xs:text-base md:text-lg">Terdekat</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Table - Desktop View (hidden on mobile) */}
        <div className="hidden lg:block overflow-x-auto px-4 pb-4 mt-2">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="pb-3 w-[8%]">
                  <div className="bg-[#F0F4FF] rounded-lg px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-[#4177FF]">No.</span>
                  </div>
                </th>
                <th className="pb-3 w-[18%]">
                  <div className="bg-[#F0F4FF] rounded-lg px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-[#4177FF]">Username</span>
                  </div>
                </th>
                <th className="pb-3 w-[12%]">
                  <div className="bg-[#F0F4FF] rounded-lg px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-[#4177FF]">Lv. User</span>
                  </div>
                </th>
                <th className="pb-3 w-[14%]">
                  <div className="bg-[#F0F4FF] rounded-lg px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-[#4177FF]">XP Total</span>
                  </div>
                </th>
                <th className="pb-3 w-[14%]">
                  <div className="bg-[#F0F4FF] rounded-lg px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-[#4177FF]">Streak</span>
                  </div>
                </th>
                <th className="pb-3 w-[17%]">
                  <div className="bg-[#F0F4FF] rounded-lg px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-[#4177FF]">Fase Selesai</span>
                  </div>
                </th>
                <th className="pb-3 w-[17%]">
                  <div className="bg-[#F0F4FF] rounded-lg px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-[#4177FF]">Jawaban Forum</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {leaderboardData.map((user, index) => (
                <tr 
                  key={index}
                  ref={(el) => (rowRefs.current[index] = el)}
                  data-index={index}
                  className={`animate-fadeIn ${visibleRows.includes(index) ? 'opacity-100' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <td colSpan="7" className="px-0 py-1">
                    <div className="border border-gray-200 rounded-lg hover:bg-[#F5F8FF] transition-colors">
                      <table className="w-full table-fixed">
                        <tbody>
                          <tr>
                            <td className="px-6 py-4 w-[8%]">
                              <span className="font-semibold text-gray-700">{user.rank}</span>
                            </td>
                            <td className="px-6 py-4 w-[18%]">
                              <span className="font-semibold text-gray-900">{user.username}</span>
                            </td>
                            <td className="px-6 py-4 w-[12%]">
                              <span className="text-gray-700">{user.level}</span>
                            </td>
                            <td className="px-6 py-4 w-[14%]">
                              <span className="font-semibold text-gray-900">{user.xpTotal}</span>
                            </td>
                            <td className="px-6 py-4 w-[14%]">
                              <span className="text-gray-700">{user.streak}</span>
                            </td>
                            <td className="px-6 py-4 w-[17%]">
                              <span className="text-gray-700">{user.faseSelesai}</span>
                            </td>
                            <td className="px-6 py-4 w-[17%]">
                              <span className="text-gray-700">{user.jawabanForum}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card View - Mobile (visible on mobile, hidden on desktop) */}
        <div className="lg:hidden px-2 xs:px-3 sm:px-4 pb-3 xs:pb-4 mt-2 space-y-2 xs:space-y-3">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              ref={(el) => (rowRefs.current[index] = el)}
              data-index={index}
              className={`bg-white border-2 border-gray-200 rounded-lg p-2.5 xs:p-3 sm:p-4 hover:bg-[#F5F8FF] hover:border-[#4177FF] transition-all animate-fadeIn ${visibleRows.includes(index) ? 'opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Header: Rank & Username */}
              <div className="flex items-center justify-between mb-2.5 xs:mb-3">
                <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                  <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-[#4177FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs xs:text-sm sm:text-base">{user.rank}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-xs xs:text-sm sm:text-base truncate">{user.username}</p>
                    <p className="text-[#4177FF] text-[10px] xs:text-xs sm:text-sm font-semibold">{user.level}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">XP Total</p>
                  <p className="font-bold text-gray-900 text-xs xs:text-sm sm:text-base">{user.xpTotal}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-1 xs:gap-1.5 sm:gap-3 pt-2.5 xs:pt-3 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-[8px] xs:text-[9px] sm:text-xs text-gray-500 mb-0.5 xs:mb-1">Streak</p>
                  <p className="font-semibold text-gray-900 text-[10px] xs:text-xs sm:text-sm">{user.streak}</p>
                </div>
                <div className="text-center border-x border-gray-200">
                  <p className="text-[8px] xs:text-[9px] sm:text-xs text-gray-500 mb-0.5 xs:mb-1">Fase Selesai</p>
                  <p className="font-semibold text-gray-900 text-[10px] xs:text-xs sm:text-sm">{user.faseSelesai}</p>
                </div>
                <div className="text-center">
                  <p className="text-[8px] xs:text-[9px] sm:text-xs text-gray-500 mb-0.5 xs:mb-1">Jawaban</p>
                  <p className="font-semibold text-gray-900 text-[10px] xs:text-xs sm:text-sm">{user.jawabanForum}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
