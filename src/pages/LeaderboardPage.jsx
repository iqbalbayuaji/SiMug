import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

// Import mascot images
import mascot1 from '../assets/maskot/mascot1.png'
import mascot2 from '../assets/maskot/mascot2.png'
import mascot3 from '../assets/maskot/mascot3.png'
import profileBanner from '../assets/images/profilebanner.png'

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('bulanan')
  const [activeScope, setActiveScope] = useState('global')

  // Top 3 users data
  const topThreeUsers = [
    {
      rank: 2,
      name: 'Muhammad Affan',
      username: '@bukan_affan10',
      level: 52,
      xp: 96323,
      progress: 81,
      avatar: mascot2
    },
    {
      rank: 1,
      name: 'Muhammad Iqbal',
      username: '@iqbaliqbil20',
      level: 55,
      xp: 114892,
      progress: 83,
      avatar: mascot1
    },
    {
      rank: 3,
      name: 'Muhammad Rizki',
      username: '@rizki_mulyon0',
      level: 49,
      xp: 81684,
      progress: 89,
      avatar: mascot3
    }
  ]

  // Top 10 leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      username: '@iqbaliqbil20',
      level: 'Lv. 55',
      xpTotal: '114.892',
      streak: '23 Hari',
      faseSelesai: '3 Fase/Hari',
      jawabanForum: '7 Jawaban/Hari'
    },
    {
      rank: 2,
      username: '@bukan_affan10',
      level: 'Lv. 52',
      xpTotal: '96.323',
      streak: '22 Hari',
      faseSelesai: '2 Fase/Hari',
      jawabanForum: '6 Jawaban/Hari'
    },
    {
      rank: 3,
      username: '@rizki_mulyon0',
      level: 'Lv. 49',
      xpTotal: '81.684',
      streak: '20 Hari',
      faseSelesai: '2 Fase/Hari',
      jawabanForum: '6 Jawaban/Hari'
    },
    {
      rank: 4,
      username: '@user_example4',
      level: 'Lv. 47',
      xpTotal: '75.432',
      streak: '19 Hari',
      faseSelesai: '2 Fase/Hari',
      jawabanForum: '5 Jawaban/Hari'
    },
    {
      rank: 5,
      username: '@user_example5',
      level: 'Lv. 45',
      xpTotal: '68.921',
      streak: '18 Hari',
      faseSelesai: '2 Fase/Hari',
      jawabanForum: '5 Jawaban/Hari'
    },
    {
      rank: 6,
      username: '@user_example6',
      level: 'Lv. 43',
      xpTotal: '62.154',
      streak: '17 Hari',
      faseSelesai: '1 Fase/Hari',
      jawabanForum: '4 Jawaban/Hari'
    },
    {
      rank: 7,
      username: '@user_example7',
      level: 'Lv. 41',
      xpTotal: '56.789',
      streak: '16 Hari',
      faseSelesai: '1 Fase/Hari',
      jawabanForum: '4 Jawaban/Hari'
    },
    {
      rank: 8,
      username: '@user_example8',
      level: 'Lv. 39',
      xpTotal: '51.234',
      streak: '15 Hari',
      faseSelesai: '1 Fase/Hari',
      jawabanForum: '3 Jawaban/Hari'
    },
    {
      rank: 9,
      username: '@user_example9',
      level: 'Lv. 37',
      xpTotal: '46.892',
      streak: '14 Hari',
      faseSelesai: '1 Fase/Hari',
      jawabanForum: '3 Jawaban/Hari'
    },
    {
      rank: 10,
      username: '@user_example10',
      level: 'Lv. 35',
      xpTotal: '42.567',
      streak: '13 Hari',
      faseSelesai: '1 Fase/Hari',
      jawabanForum: '3 Jawaban/Hari'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F8FF] via-white to-[#EEF4FF]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Button */}
        <Link
          to="/progress"
          className="inline-flex items-center gap-2 text-[#4177FF] font-semibold hover:gap-3 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </Link>

        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4177FF] via-[#8CADFF] to-[#4177FF] bg-clip-text text-transparent mb-3">
            PAPAN PERINGKAT
          </h1>
          <p className="text-gray-600 text-lg">
            Berikut ini hasil Leaderboard para pengguna SiMug
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="relative mb-16">
          {/* Decorative Blurred Dots */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-[#4177FF] rounded-full opacity-20 blur-[200px]"></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-center">
            {/* Rank 2 - Left */}
            <div className="order-2 md:order-1 transform md:translate-y-16 flex justify-center relative">
              {/* Large Number 2 Background */}
              <div className="absolute -top-30 left-4 text-[120px] font-black bg-gradient-to-b from-[#A2BCFF] to-[#FFFFFF] bg-clip-text text-transparent select-none pointer-events-none z-0">
                2
              </div>
              <div className="w-[270px] h-[255px] bg-white rounded-[24px] shadow-xl border-2 border-gray-100 overflow-visible hover:shadow-2xl transition-all p-2 relative z-10">
                {/* Blue Header Background - Inside card with rounded corners */}
                <div className="h-20 rounded-[16px] relative mb-2 overflow-hidden">
                  <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
                </div>
                {/* Avatar at bottom left corner */}
                <div className="absolute top-[60px] left-5">
                  <div className="w-18 h-18 rounded-full bg-[#FF8C42] p-1 shadow-lg">
                    <img
                      src={topThreeUsers[0].avatar}
                      alt={topThreeUsers[0].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Level & Progress - Below blue header */}
                <div className="mb-3 ml-24">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#4177FF]">LV. {topThreeUsers[0].level}</span>
                    <span className="text-sm font-bold text-[#4177FF]">{topThreeUsers[0].progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4177FF] to-[#60A5FA] rounded-full"
                      style={{ width: `${topThreeUsers[0].progress}%` }}
                    />
                  </div>
                </div>

                {/* User Info */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="text-base font-bold text-gray-900 truncate">{topThreeUsers[0].name}</h3>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{topThreeUsers[0].username}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-3"></div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                    </svg>
                    Kontribusi
                  </button>
                  <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Kunjungi
                  </button>
                </div>
              </div>
            </div>

            {/* Rank 1 - Center (Highest) */}
            <div className="order-1 md:order-2 flex justify-center relative -mt-8">
              {/* Large Number 1 Background */}
              <div className="absolute -top-28 left-1/2 -translate-x-1/2 text-[100px] font-black bg-gradient-to-b from-[#A2BCFF] to-[#FFFFFF] bg-clip-text text-transparent select-none pointer-events-none z-10">
                1
              </div>
              <div className="w-[270px] h-[255px] bg-white rounded-[24px] shadow-2xl border-4 border-gray-100 overflow-visible transform md:scale-110 hover:scale-115 transition-all p-2 relative z-20">
                {/* Blue Header Background - Inside card with rounded corners */}
                <div className="h-20 rounded-[16px] relative mb-2 overflow-hidden">
                  <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
                </div>
                {/* Avatar at bottom left corner */}
                <div className="absolute top-[60px] left-5">
                  <div className="w-18 h-18 rounded-full bg-[#FF8C42] p-1 shadow-lg">
                    <img
                      src={topThreeUsers[1].avatar}
                      alt={topThreeUsers[1].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Level & Progress - Below blue header */}
                <div className="mb-3 ml-24">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#4177FF]">LV. {topThreeUsers[1].level}</span>
                    <span className="text-sm font-bold text-[#4177FF]">{topThreeUsers[1].progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4177FF] to-[#60A5FA] rounded-full"
                      style={{ width: `${topThreeUsers[1].progress}%` }}
                    />
                  </div>
                </div>

                {/* User Info */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="text-base font-bold text-gray-900 truncate">{topThreeUsers[1].name}</h3>
                    <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{topThreeUsers[1].username}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-3"></div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                    </svg>
                    Kontribusi
                  </button>
                  <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Kunjungi
                  </button>
                </div>
              </div>
            </div>

            {/* Rank 3 - Right */}
            <div className="order-3 transform md:translate-y-16 flex justify-center relative">
              {/* Large Number 3 Background */}
              <div className="absolute -top-2 -right-8 text-[120px] font-black bg-gradient-to-b from-[#A2BCFF] to-[#FFFFFF] bg-clip-text text-transparent select-none pointer-events-none z-0">
                3
              </div>
              <div className="w-[270px] h-[255px] bg-white rounded-[24px] shadow-xl border-4 border-gray-100 overflow-visible hover:shadow-2xl transition-all p-2 relative z-10">
                {/* Blue Header Background - Inside card with rounded corners */}
                <div className="h-20 rounded-[16px] relative mb-2 overflow-hidden">
                  <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
                </div>
                {/* Avatar at bottom left corner */}
                <div className="absolute top-[60px] left-5">
                  <div className="w-18 h-18 rounded-full bg-[#FF8C42] p-1 shadow-lg">
                    <img
                      src={topThreeUsers[2].avatar}
                      alt={topThreeUsers[2].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                   
                {/* Level & Progress - Below blue header */}
                <div className="mb-3 ml-24">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#4177FF]">LV. {topThreeUsers[2].level}</span>
                    <span className="text-sm font-bold text-[#4177FF]">{topThreeUsers[2].progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4177FF] to-[#60A5FA] rounded-full"
                      style={{ width: `${topThreeUsers[2].progress}%` }}
                    />
                  </div>
                </div>
               

                {/* User Info */}
                <div className="mb-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="text-base font-bold text-gray-900 truncate">{topThreeUsers[2].name}</h3>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{topThreeUsers[2].username}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-3"></div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                    </svg>
                    Kontribusi
                  </button>
                  <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Kunjungi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* User Rank Info & SIMUG Tips */}
        <div className="flex items-end justify-between mb-6 px-4">
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
            <button className="bg-[#4177FF] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-[#3461DB] transition-colors flex items-center gap-2 shadow-lg text-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 8.5L3 9l5.5 5L7 21l5-3 5 3-1.5-7L21 9l-6.5-.5L12 2z" />
              </svg>
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
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mx-4 mb-8">
          {/* Table Header with Tabs */}
          <div className="bg-gradient-to-r from-[#4177FF] to-[#5B8FFF] px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-0.5">Top 10 User SIMUG</h2>
                <p className="text-blue-100 text-xs">Berdasarkan Peringkat "{activeTab === 'bulanan' ? 'Bulanan' : 'Mingguan'}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#5787FF] rounded-2xl p-1.5 flex gap-1">
                  <button
                    onClick={() => setActiveTab('bulanan')}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all text-sm ${
                      activeTab === 'bulanan'
                        ? 'bg-[#80A5FF] text-white'
                        : 'bg-transparent text-white/80 hover:text-white'
                    }`}
                  >
                    Bulanan
                  </button>
                  <button
                    onClick={() => setActiveTab('mingguan')}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all text-sm ${
                      activeTab === 'mingguan'
                        ? 'bg-[#80A5FF] text-white'
                        : 'bg-transparent text-white/80 hover:text-white'
                    }`}
                  >
                    Mingguan
                  </button>
                </div>
                <button className="px-4 py-2 rounded-xl font-semibold bg-white/20 text-white hover:bg-white/30 transition-all flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Global
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
                  <tr key={index}>
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
     

      <Footer />
    </div>
  )
}
