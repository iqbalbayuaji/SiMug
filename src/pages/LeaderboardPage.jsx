import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PodiumSection from '../components/leaderboard/PodiumSection'
import LeaderboardTable from '../components/leaderboard/LeaderboardTable'
import LeaderboardModals from '../components/leaderboard/LeaderboardModals'

// Import mascot images
import Leaderboard1 from '../assets/images/Leaderboard-1.png'
import Leaderboard2 from '../assets/images/Leaderboard-2.png'
import Leaderboard3 from '../assets/images/Leaderboard-3.png'

export default function LeaderboardPage() {
  const [showTipsModal, setShowTipsModal] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showProfileModal || showTipsModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showProfileModal, showTipsModal])

  // Top 3 users data
  const topThreeUsers = [
    {
      rank: 2,
      name: 'Muhammad Affan',
      username: '@bukan_affan10',
      level: 52,
      xp: 96323,
      progress: 81,
      avatar: Leaderboard2
    },
    {
      rank: 1,
      name: 'Muhammad Iqbal',
      username: '@iqbaliqbil20',
      level: 55,
      xp: 114892,
      progress: 83,
      avatar: Leaderboard1
    },
    {
      rank: 3,
      name: 'Muhammad Rizki',
      username: '@rizki_mulyon0',
      level: 49,
      xp: 81684,
      progress: 89,
      avatar: Leaderboard3
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
      username: '@sarah_fitnes',
      level: 'Lv. 48',
      xpTotal: '78.234',
      streak: '25 Hari',
      faseSelesai: '3 Fase/Hari',
      jawabanForum: '8 Jawaban/Hari'
    },
    {
      rank: 5,
      username: '@budi_sehat99',
      level: 'Lv. 46',
      xpTotal: '72.891',
      streak: '18 Hari',
      faseSelesai: '2 Fase/Hari',
      jawabanForum: '5 Jawaban/Hari'
    },
    {
      rank: 6,
      username: '@dina_workout',
      level: 'Lv. 44',
      xpTotal: '68.456',
      streak: '30 Hari',
      faseSelesai: '2 Fase/Hari',
      jawabanForum: '6 Jawaban/Hari'
    },
    {
      rank: 7,
      username: '@agus_strong',
      level: 'Lv. 42',
      xpTotal: '61.789',
      streak: '15 Hari',
      faseSelesai: '3 Fase/Hari',
      jawabanForum: '4 Jawaban/Hari'
    },
    {
      rank: 8,
      username: '@lisa_healthy',
      level: 'Lv. 40',
      xpTotal: '57.234',
      streak: '21 Hari',
      faseSelesai: '1 Fase/Hari',
      jawabanForum: '7 Jawaban/Hari'
    },
    {
      rank: 9,
      username: '@rudi_athlete',
      level: 'Lv. 38',
      xpTotal: '52.678',
      streak: '12 Hari',
      faseSelesai: '2 Fase/Hari',
      jawabanForum: '3 Jawaban/Hari'
    },
    {
      rank: 10,
      username: '@maya_gymrat',
      level: 'Lv. 36',
      xpTotal: '48.912',
      streak: '28 Hari',
      faseSelesai: '1 Fase/Hari',
      jawabanForum: '5 Jawaban/Hari'
    }
  ]

  const handleUserSelect = (user) => {
    setSelectedUser(user)
    setShowProfileModal(true)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#F5F8FF] via-white to-[#EEF4FF] font-montserrat animate-fadeIn">
        <Navbar />

        <div className="w-full mx-auto px-4 sm:px-6 py-8">
          {/* Back Button */}
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-[#4177FF] font-regular hover:shadow-md transition-all animate-fadeIn bg-white px-4 py-2 rounded-full shadow-sm text-lg"
            style={{ animationDelay: '0.1s' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali
          </Link>

          {/* Header */}
          <div className="text-center mb-32 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4177FF] via-[#8CADFF] to-[#4177FF] bg-clip-text text-transparent mb-3">
              PAPAN PERINGKAT
            </h1>
            <p className="text-gray-600 text-lg">
              Berikut ini hasil Leaderboard para pengguna SiMug
            </p>
          </div>

          {/* Top 3 Podium */}
          <PodiumSection 
            topThreeUsers={topThreeUsers}
            onUserSelect={handleUserSelect}
          />

          {/* Leaderboard Table */}
          <LeaderboardTable 
            leaderboardData={leaderboardData}
            onShowTips={() => setShowTipsModal(true)}
          />
        </div>

        <Footer />
      </div>

      {/* Modals */}
      <LeaderboardModals 
        showTipsModal={showTipsModal}
        showProfileModal={showProfileModal}
        selectedUser={selectedUser}
        onCloseTips={() => setShowTipsModal(false)}
        onCloseProfile={() => setShowProfileModal(false)}
      />
    </>
  )
}
