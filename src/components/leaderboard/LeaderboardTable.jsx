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
      <div className="flex items-end justify-between mb-6 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-stretch gap-0">
          <div className="w-1.5 bg-[#4177FF] rounded-2xl mr-2"></div>
          <div className="bg-white rounded-md px-4 py-4 shadow-md border-2 border-gray-200 flex-1">
            <p className="text-base text-gray-400 mb-1">Posisi Leaderboard:</p>
            <p>
              <span className="text-[#4177FF] font-bold text-xl">#121</span>
              <span className="text-black text-lg ml-2">dari 523 user</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onShowTips}
            className="bg-[#4177FF] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-[#3461DB] transition-colors flex items-center gap-2 shadow-lg text-lg cursor-pointer"
          >
            <img src={aiWhiteIcon} alt="AI Icon" className="w-6 h-6" />
            SIMUG Tips
          </button>
          <button className="w-10 h-10 bg-[#4177FF] text-white rounded-full hover:bg-[#3461DB] transition-colors flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
        {/* Table Header with Tabs */}
        <div className="bg-[#4177FF] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-0.5">Top 10 User SIMUG</h2>
              <p className="text-blue-100 text-xs">Berdasarkan Peringkat "{activeTab === 'bulanan' ? 'Bulanan' : 'Mingguan'}"</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#5787FF] rounded-xl p-1.5 flex gap-1">
                <button
                  onClick={() => setActiveTab('bulanan')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all text-sm cursor-pointer ${
                    activeTab === 'bulanan'
                      ? 'bg-[#80A5FF] text-white'
                      : 'bg-transparent text-white/80 hover:text-white'
                  }`}
                >
                  Bulanan
                </button>
                <button
                  onClick={() => setActiveTab('mingguan')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all text-sm cursor-pointer ${
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
                  className="px-4 py-3 cursor-pointer rounded-4xl font-semibold bg-[#5787FF] text-white hover:bg-white/30 transition-all flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {activeScope === 'global' ? 'Global' : 'Terdekat'}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {showScopeDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                    {/* Global Option */}
                    <button
                      onClick={() => {
                        setActiveScope('global')
                        setShowScopeDropdown(false)
                      }}
                      className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
                        activeScope === 'global' 
                          ? 'bg-[#E5ECFF] text-[#4177FF]' 
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeScope === 'global' ? 'bg-[#4177FF]' : 'bg-gray-200'
                      }`}>
                        <svg className={`w-5 h-5 ${activeScope === 'global' ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-lg">Global</span>
                    </button>
                    
                    {/* Terdekat Option */}
                    <button
                      onClick={() => {
                        setActiveScope('terdekat')
                        setShowScopeDropdown(false)
                      }}
                      className={`w-full px-4 py-3 flex items-center gap-3 transition-colors border-t border-gray-100 ${
                        activeScope === 'terdekat' 
                          ? 'bg-[#E5ECFF] text-[#4177FF]' 
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeScope === 'terdekat' ? 'bg-[#4177FF]' : 'bg-gray-200'
                      }`}>
                        <svg className={`w-5 h-5 ${activeScope === 'terdekat' ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-lg">Terdekat</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-4 pb-4 mt-2">
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
      </div>
    </>
  )
}
