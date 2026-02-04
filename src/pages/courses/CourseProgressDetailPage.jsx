import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FaPlay, FaStar, FaClock, FaBook, FaCheckCircle, FaChevronRight, FaChevronLeft, FaSearch, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from "../../assets/images/logo-simug.png"
import Footer from '../../components/layout/Footer'
import ReviewsTab from '../../components/courses/ReviewsTab'

export default function CourseProgressDetailPage() {
  const { phaseId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [showMenu, setShowMenu] = useState(false)
  const [showTaskPopup, setShowTaskPopup] = useState(false)
  const [showProgressSidebar, setShowProgressSidebar] = useState(false)
  const [selectedPhase, setSelectedPhase] = useState(5) // Default Fase 5

  // Phase data with lessons for each phase
  const phaseData = {
    1: {
      title: 'Fase 1 : Penguatan Otot Inti',
      progress: { completed: 4, total: 4, percentage: 100 },
      lessons: [
        { id: 1, title: 'Pengenalan Otot Inti dan Fungsinya', completed: true, locked: false },
        { id: 2, title: 'Pemanasan Khusus untuk Otot Inti', completed: true, locked: false },
        { id: 3, title: 'Latihan Dasar Otot Inti Tanpa Alat', completed: true, locked: false },
        { id: 4, title: 'Kesalahan Umum dan Tips Aman', completed: true, locked: false }
      ]
    },
    2: {
      title: 'Fase 2 : Latihan Dasar',
      progress: { completed: 5, total: 5, percentage: 100 },
      lessons: [
        { id: 1, title: 'Pengenalan Latihan Dasar', completed: true, locked: false },
        { id: 2, title: 'Push-up dan Variasinya', completed: true, locked: false },
        { id: 3, title: 'Squat untuk Kekuatan Kaki', completed: true, locked: false },
        { id: 4, title: 'Plank dan Core Stability', completed: true, locked: false },
        { id: 5, title: 'Kombinasi Gerakan Dasar', completed: true, locked: false }
      ]
    },
    3: {
      title: 'Fase 3 : Full Body Workout',
      progress: { completed: 5, total: 5, percentage: 100 },
      lessons: [
        { id: 1, title: 'Pemanasan Full Body', completed: true, locked: false },
        { id: 2, title: 'Upper Body Workout', completed: true, locked: false },
        { id: 3, title: 'Lower Body Workout', completed: true, locked: false },
        { id: 4, title: 'Cardio dan Endurance', completed: true, locked: false },
        { id: 5, title: 'Cool Down dan Stretching', completed: true, locked: false }
      ]
    },
    4: {
      title: 'Fase 4 : Pendinginan',
      progress: { completed: 3, total: 3, percentage: 100 },
      lessons: [
        { id: 1, title: 'Teknik Pendinginan yang Benar', completed: true, locked: false },
        { id: 2, title: 'Stretching untuk Recovery', completed: true, locked: false },
        { id: 3, title: 'Breathing Exercise', completed: true, locked: false }
      ]
    },
    5: {
      title: 'Fase 5 : Penguatan Otot Inti',
      progress: { completed: 2, total: 5, percentage: 40 },
      lessons: [
        { id: 1, title: 'Pengenalan Otot Inti dan Fungsinya', completed: true, locked: false },
        { id: 2, title: 'Pemanasan Khusus untuk Otot Inti', completed: true, locked: false },
        { id: 3, title: 'Latihan Dasar Otot Inti Tanpa Alat', completed: false, locked: false, current: true },
        { id: 4, title: 'Latihan Otot Inti Tingkat Menengah', completed: false, locked: false },
        { id: 5, title: 'Kesalahan Umum dan Tips Aman', completed: false, locked: false }
      ]
    },
    6: {
      title: 'Fase 6 : Latihan Dasar',
      progress: { completed: 0, total: 2, percentage: 0 },
      lessons: [
        { id: 1, title: 'Latihan Kekuatan Dasar', completed: false, locked: true },
        { id: 2, title: 'Latihan Fleksibilitas', completed: false, locked: true }
      ]
    },
    7: {
      title: 'Fase 7 : Full Body Workout',
      progress: { completed: 0, total: 2, percentage: 0 },
      lessons: [
        { id: 1, title: 'Full Body Circuit Training', completed: false, locked: true },
        { id: 2, title: 'HIIT Workout', completed: false, locked: true }
      ]
    },
    8: {
      title: 'Fase 8 : Pendinginan',
      progress: { completed: 0, total: 2, percentage: 0 },
      lessons: [
        { id: 1, title: 'Yoga untuk Recovery', completed: false, locked: true },
        { id: 2, title: 'Meditasi dan Relaksasi', completed: false, locked: true }
      ]
    }
  }

  // Get current phase data
  const currentPhaseData = phaseData[selectedPhase]

  // Mock data - sesuaikan dengan data real
  const courseData = {
    title: 'Workout Dirumah Aja Tanpa Alat untuk Menjaga Kebugaran Tubuh',
    phase: 'Fase 5 : Penguatan Otot Inti',
    totalMaterials: 5,
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    rating: 4.8,
    totalRatings: '5.7K',
    students: '7.2K',
    duration: '8 jam',
    totalPhases: 13,
    publishedDate: '10 Des 2025',
    lastUpdate: 'Semua kalangan',
    description: `Kursus ini dirancang untuk membantu kamu tetap bugar tanpa perlu peralatan khusus. Dengan rangkaian latihan yang efektif dan mudah diikuti, kamu dapat berolahraga dari rumah kapan saja. Materi difokuskan pada kekuatan, kelenturan, dan daya tahan tubuh agar tubuhmu tetap sehat dengan konsisten.

Selain itu, kursus ini juga dilengkapi dengan panduan intensitas latihan yang aman serta tips menjaga konsistensi berolahraga. Cocok untuk pemula maupun yang sudah terbiasa berolahraga, kursus ini membantu kamu membangun kebiasaan hidup sehat secara bertahap dan berkelanjutan.`,
    instructor: {
      name: 'Moh. Hambali',
      title: 'Ikuti',
      bio: 'Bergabung 1 tahun lalu',
      description: 'Kenalan dengan Moh. Hambali, instruktur yang punya passion besar di dunia olahraga dan binaraga. Meski berlatar belakang lulusan SMA, ia percaya bahwa konsistensi dan disiplin adalah kunci utama kebugaran.',
      totalCourses: 3,
      totalStudents: '2.1K',
      avatar: 'https://ui-avatars.com/api/?name=Moh+Hambali&background=4177FF&color=fff&size=200'
    },
    progress: {
      completed: 2,
      total: 5,
      percentage: 40
    },
    lessons: [
      {
        id: 1,
        title: 'Pengenalan Otot Inti dan Fungsinya',
        completed: true,
        locked: false
      },
      {
        id: 2,
        title: 'Pemanasan Khusus untuk Otot Inti',
        completed: true,
        locked: false
      },
      {
        id: 3,
        title: 'Latihan Dasar Otot Inti Tanpa Alat',
        completed: false,
        locked: false,
        current: true
      },
      {
        id: 4,
        title: 'Latihan Otot Inti Tingkat Menengah',
        completed: false,
        locked: false
      },
      {
        id: 5,
        title: 'Kesalahan Umum dan Tips Aman',
        completed: false,
        locked: false
      }
    ],
    allPhases: [
      { id: 1, title: 'Fase 1 : Penguatan Otot Inti', materials: 4, tasks: 4, duration: '12 menit' },
      { id: 2, title: 'Fase 2 : Latihan Dasar', materials: 5, tasks: 5, duration: '15 menit' },
      { id: 3, title: 'Fase 3 : Full Body Workout', materials: 5, tasks: 5, duration: '15 menit' },
      { id: 4, title: 'Fase 4 : Pendinginan', materials: 3, tasks: 3, duration: '8 menit' },
      { id: 5, title: 'Fase 5 : Penguatan Otot Inti', materials: 2, tasks: 5, duration: '12 menit' },
      { id: 6, title: 'Fase 6 : Latihan Dasar', materials: 0, tasks: 2, duration: '15 menit' },
      { id: 7, title: 'Fase 7 : Full Body Workout', materials: 0, tasks: 2, duration: '15 menit' },
      { id: 8, title: 'Fase 8 : Pendinginan', materials: 0, tasks: 2, duration: '8 menit' },
    ],
    reviews: [
      {
        id: 1,
        user: "Budi Santoso",
        avatar: "https://i.pravatar.cc/150?u=budi",
        rating: 5,
        date: "2 hari yang lalu",
        comment: "Materi sangat mudah dipahami dan instruktur menjelaskan dengan sangat detail. Sangat direkomendasikan untuk pemula!"
      },
      {
        id: 2,
        user: "Siti Aminah",
        avatar: "https://i.pravatar.cc/150?u=siti",
        rating: 4,
        date: "1 minggu yang lalu",
        comment: "Konten bagus, tapi videonya kadang buffering. Overall good experience."
      },
      {
        id: 3,
        user: "Rizky Ramadhan",
        avatar: "https://i.pravatar.cc/150?u=rizky",
        rating: 5,
        date: "2 minggu yang lalu",
        comment: "Latihan otot inti benar-benar terasa dampaknya. Makasih master!"
      }
    ]
  }

  // Handler functions
  const handlePhaseClick = (phaseId) => {
    setSelectedPhase(phaseId)
    setShowProgressSidebar(true)
  }

  const handleCloseSidebar = () => {
    setShowProgressSidebar(false)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Simple Header - Logo Left, Back & Menu Right */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-1.5 sm:gap-2">
            <img src={logo} alt="SiMUG Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <span className="hidden xs:inline text-base sm:text-lg md:text-xl font-bold text-gray-900">SiMUG</span>
          </Link>

          {/* Back Button & Hamburger Menu - Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-6 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline text-sm sm:text-base font-medium">Kembali</span>
            </button>

            <button
              className="cursor-pointer p-2 sm:p-2.5 md:p-3 border-2 border-gray-300 rounded-lg sm:rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors relative"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              {/* Dropdown Menu */}
              {showMenu && (
                <>
                  {/* Backdrop */}
                  <div
                    className="cursor-pointer fixed inset-0 z-40"
                    onClick={() => setShowMenu(false)}
                  ></div>

                  {/* Menu */}
                  <div className="absolute right-0 top-full mt-2 w-64 sm:w-72 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    {/* Bagikan URL */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Bagikan URL</span>
                    </button>

                    {/* Laporkan */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Laporkan</span>
                    </button>

                    {/* Beri Rating */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Beri Rating</span>
                    </button>

                    {/* Perbesar Layar */}
                    <button className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Perbesar Layar</span>
                    </button>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Main Content - Video, Tabs, Overview (First on Mobile) */}
          <div className="lg:col-span-2 order-1 bg-white border-t lg:border-t-0 border-gray-200">
            {/* Title */}
            <div className="p-4 sm:p-5 md:p-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {courseData.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                {courseData.phase} • {courseData.totalMaterials} materi
              </p>
            </div>

            {/* Video Player */}
            <div className="p-3 sm:p-4 md:p-6">
              <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: '16/9', maxHeight: '500px' }}>
                <div className="relative w-full h-full bg-gray-900 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden group">
                  <img
                    src={courseData.thumbnail}
                    alt={courseData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                      <FaPlay className="text-[#4177FF] text-lg sm:text-xl md:text-2xl ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white">
              <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`cursor-pointer px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-colors whitespace-nowrap ${activeTab === 'overview'
                    ? 'text-[#4177FF] border-b-2 border-[#4177FF]'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('review')}
                  className={`cursor-pointer px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-colors whitespace-nowrap ${activeTab === 'review'
                    ? 'text-[#4177FF] border-b-2 border-[#4177FF]'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  Review
                </button>
                <button
                  onClick={() => setActiveTab('pengumuman')}
                  className={`cursor-pointer px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-colors whitespace-nowrap ${activeTab === 'pengumuman'
                    ? 'text-[#4177FF] border-b-2 border-[#4177FF]'
                    : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  Pengumuman
                </button>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                {activeTab === 'overview' && (
                  <div>
                    {/* Stats */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Gambaran Umum</h3>
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 mb-4 sm:mb-6">
                        {/* Left Stats */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <FaStar className="text-yellow-400 text-sm sm:text-base" />
                              <span className="text-xl sm:text-2xl font-bold text-gray-900">{courseData.rating}</span>
                            </div>
                            <p className="text-sm text-gray-500">{courseData.totalRatings} rating</p>
                          </div>
                          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                          <div>
                            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{courseData.students}</div>
                            <p className="text-sm text-gray-500">Peserta</p>
                          </div>
                          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                          <div>
                            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{courseData.duration}</div>
                            <p className="text-sm text-gray-500">Total</p>
                          </div>
                          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                          <div>
                            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{courseData.totalPhases} fase</div>
                            <p className="text-sm text-gray-500">Materi</p>
                          </div>
                        </div>

                        {/* Right Info */}
                        <div className="flex flex-col gap-2 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            Diperbaharui {courseData.publishedDate}
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            {courseData.lastUpdate}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Deskripsi Kursus</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                        {courseData.description}
                      </p>
                    </div>

                    {/* Instructor */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Tentang Instruktur</h3>
                      <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        {/* Mobile Version - Full Width */}
                        <div className="block sm:hidden">
                          <div className="flex items-start gap-3 mb-3">
                            <img
                              src={courseData.instructor.avatar}
                              alt={courseData.instructor.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex flex-row items-center gap-2">
                                <h4 className="font-bold text-gray-900 text-base">{courseData.instructor.name}</h4>
                                <span className="text-gray-400">•</span>
                                <button className="text-[#4177FF] text-xs font-semibold hover:underline">
                                  {courseData.instructor.title}
                                </button>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{courseData.instructor.bio}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            {courseData.instructor.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[#4177FF] text-xs font-semibold">{courseData.instructor.totalCourses} course</span>
                            <span className="text-[#4177FF] text-xs font-semibold">{courseData.instructor.totalStudents} pengikut</span>
                            <button className="text-[#4177FF] hover:text-[#3461D9]">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </button>
                            <button className="text-[#4177FF] hover:text-[#3461D9]">
                              <FaInstagram className="w-4 h-4" />
                            </button>
                            <button className="text-[#4177FF] hover:text-[#3461D9]">
                              <FaYoutube className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Desktop Version - Horizontal Layout */}
                        <div className="hidden sm:flex items-start gap-4">
                          <img
                            src={courseData.instructor.avatar}
                            alt={courseData.instructor.name}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex flex-row items-center gap-2 mb-2">
                              <h4 className="font-bold text-gray-900 text-base sm:text-lg">{courseData.instructor.name}</h4>
                              <span className="text-gray-400">•</span>
                              <button className="text-[#4177FF] text-xs sm:text-sm font-semibold hover:underline">
                                {courseData.instructor.title}
                              </button>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{courseData.instructor.bio}</p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                              {courseData.instructor.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                              <span className="text-[#4177FF] text-xs sm:text-sm font-semibold">{courseData.instructor.totalCourses} course</span>
                              <span className="text-[#4177FF] text-xs sm:text-sm font-semibold">{courseData.instructor.totalStudents} pengikut</span>
                              <button className="text-[#4177FF] hover:text-[#3461D9]">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              </button>
                              <button className="text-[#4177FF] hover:text-[#3461D9]">
                                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                              <button className="text-[#4177FF] hover:text-[#3461D9]">
                                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'review' && (
                  <ReviewsTab course={courseData} />
                )}

                {activeTab === 'pengumuman' && (
                  <div className="text-center py-12 text-gray-500">
                    Belum ada pengumuman
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Course Content List (Second on Mobile) */}
          <div className="lg:col-span-1 order-2 lg:border-l border-gray-200 bg-white">

            {/* MOBILE ONLY: Drill-Down Navigation */}
            <div className="lg:hidden bg-white p-4 sm:p-5 md:p-6 border-t border-b border-gray-200 flex flex-col h-full">
              {/* Header - Changes based on view */}
              <div className="flex items-center justify-between mb-1">
                {showProgressSidebar ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowProgressSidebar(false)}
                      className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <FaChevronLeft className="text-gray-600" />
                    </button>
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 line-clamp-1">
                      {currentPhaseData.title}
                    </h3>
                  </div>
                ) : (
                  <h3 className="font-bold text-xl sm:text-2xl text-gray-900">Konten Kursus</h3>
                )}
                {!showProgressSidebar && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <FaSearch />
                  </button>
                )}
              </div>

              {/* Subheader / Info */}
              {!showProgressSidebar ? (
                <p className="text-sm sm:text-base text-[#1E1E1E] mb-3 sm:mb-4">
                  Total {courseData.totalPhases} fase kursus tersedia.
                </p>
              ) : (
                <div className="mb-4 mt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-500">PROGRESS</span>
                    <span className="text-xs font-bold text-[#4177FF]">{currentPhaseData.progress.completed}/{currentPhaseData.progress.total} SELESAI</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[...Array(currentPhaseData.progress.total)].map((_, index) => (
                      <div key={index} className={`flex-1 h-1.5 rounded-full ${index < currentPhaseData.progress.completed ? 'bg-[#4177FF]' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                </div>
              )}

              {/* Content Area - Scrollable */}
              <div className="space-y-2 sm:space-y-3 flex-1 overflow-y-auto min-h-[400px]">
                {!showProgressSidebar ? (
                  // Phase List View
                  courseData.allPhases.map((phase) => (
                    <button
                      key={phase.id}
                      onClick={() => handlePhaseClick(phase.id)}
                      className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all flex items-center justify-between gap-3 ${phase.id <= 5
                        ? 'border-[#4177FF] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex-1">
                        <h4 className={`font-semibold text-sm sm:text-base mb-1.5 sm:mb-2 ${phase.id <= 5 ? 'text-[#4177FF]' : 'text-gray-900'
                          }`}>
                          {phase.title}
                        </h4>
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <span>{phase.materials}/{phase.tasks} materi</span>
                          <span>•</span>
                          <span>{phase.tasks} tugas</span>
                          <span>•</span>
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                      <FaChevronRight className={`text-sm sm:text-base flex-shrink-0 mr-1 ${phase.id <= 5 ? 'text-[#4177FF]' : 'text-gray-400'}`} />
                    </button>
                  ))
                ) : (
                  // Lesson List View
                  <>
                    <div className="space-y-3 mb-6">
                      {currentPhaseData.lessons.map((lesson, index) => (
                        <button
                          key={lesson.id}
                          className={`w-full flex items-center gap-3 p-3 sm:p-4 rounded-xl transition-all ${lesson.current ? 'bg-blue-50 border border-blue-100' : 'bg-white border border-gray-200 hover:border-gray-300'} ${lesson.locked ? 'opacity-60 cursor-not-allowed' : ''}`}
                          disabled={lesson.locked}
                        >
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                            {lesson.current && (
                              <svg className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 -rotate-90">
                                <circle cx="20" cy="20" r="18" className="sm:hidden" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                                <circle cx="20" cy="20" r="18" className="sm:hidden" fill="none" stroke="#4177FF" strokeWidth="3" strokeDasharray={`${2 * Math.PI * 18 * 0.7} ${2 * Math.PI * 18}`} strokeLinecap="round" />
                                <circle cx="24" cy="24" r="22" className="hidden sm:block" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                                <circle cx="24" cy="24" r="22" className="hidden sm:block" fill="none" stroke="#4177FF" strokeWidth="3" strokeDasharray={`${2 * Math.PI * 22 * 0.7} ${2 * Math.PI * 22}`} strokeLinecap="round" />
                              </svg>
                            )}
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-semibold text-base sm:text-lg ${lesson.completed ? 'bg-white border-3 border-[#4177FF]' : lesson.current ? 'bg-white text-[#4177FF]' : 'bg-gray-100 text-gray-400 border-2 border-gray-200'}`}>
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1 text-left">
                            <p className={`text-sm sm:text-base font-medium ${lesson.current ? 'text-[#4177FF]' : lesson.completed ? 'text-gray-500' : 'text-gray-900'}`}>{lesson.title}</p>
                          </div>
                          {lesson.completed && <FaCheckCircle className="text-[#4177FF] text-lg sm:text-xl" />}
                          {lesson.locked && <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                          {!lesson.locked && !lesson.completed && <FaChevronRight className="text-gray-300 text-base" />}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowTaskPopup(true)}
                      className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-[#4177FF] to-[#5B8FFF] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-between mt-auto"
                    >
                      <div className="text-left">
                        <div className="text-sm sm:text-base font-semibold mb-0.5">Praktikan Ilmu Kamu</div>
                        <div className="text-xs opacity-90">Kerjakan Tugas yang Diberikan Mentor.</div>
                      </div>
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-lg text-xs sm:text-sm font-semibold">Kerjakan</div>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* DESKTOP ONLY: Stacked List (Both Visible) */}
            <div className="hidden lg:block bg-white h-full border-l border-gray-200">
              {/* 1. Progress Card (Current Phase Lessons) */}
              <div className="p-6 border-b border-gray-200">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{currentPhaseData.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{currentPhaseData.progress.completed}/{currentPhaseData.progress.total} SELESAI</p>
                  <div className="flex gap-2">
                    {[...Array(currentPhaseData.progress.total)].map((_, index) => (
                      <div key={index} className={`flex-1 h-2 rounded-full ${index < currentPhaseData.progress.completed ? 'bg-[#4177FF]' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {currentPhaseData.lessons.map((lesson, index) => (
                    <button key={lesson.id} className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${lesson.current ? 'bg-blue-50 border border-blue-100' : 'bg-white border border-gray-200 hover:border-gray-300'} ${lesson.locked ? 'opacity-60 cursor-not-allowed' : ''}`} disabled={lesson.locked}>
                      <div className="relative w-12 h-12 flex-shrink-0">
                        {lesson.current && (
                          <svg className="absolute inset-0 w-12 h-12 -rotate-90">
                            <circle cx="24" cy="24" r="22" className="block" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                            <circle cx="24" cy="24" r="22" className="block" fill="none" stroke="#4177FF" strokeWidth="3" strokeDasharray={`${2 * Math.PI * 22 * 0.7} ${2 * Math.PI * 22}`} strokeLinecap="round" />
                          </svg>
                        )}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${lesson.completed ? 'bg-white border-3 border-[#4177FF]' : lesson.current ? 'bg-white text-[#4177FF]' : 'bg-gray-100 text-gray-400 border-2 border-gray-200'}`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <p className={`text-base font-medium ${lesson.current ? 'text-[#4177FF]' : lesson.completed ? 'text-gray-500' : 'text-gray-900'}`}>{lesson.title}</p>
                      </div>
                      {lesson.completed && <FaCheckCircle className="text-[#4177FF] text-xl" />}
                      {lesson.locked && <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                      {!lesson.locked && !lesson.completed && <FaChevronRight className="text-gray-300 text-base" />}
                    </button>
                  ))}
                </div>
                <button onClick={() => setShowTaskPopup(true)} className="w-full py-4 px-6 bg-gradient-to-r from-[#4177FF] to-[#5B8FFF] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-base font-semibold mb-0.5">Praktikan Ilmu Kamu</div>
                    <div className="text-xs opacity-90">Kerjakan Tugas yang Diberikan Mentor.</div>
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded-lg text-sm font-semibold">Kerjakan</div>
                </button>
              </div>

              {/* 2. Course Content (Phase List) */}
              <div className="bg-white p-6 flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-2xl text-gray-900">Konten Kursus</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <FaSearch />
                  </button>
                </div>
                <p className="text-base text-[#1E1E1E] mb-4">
                  Total {courseData.totalPhases} fase kursus tersedia.
                </p>

                <div className="space-y-3 flex-1 overflow-y-auto">
                  {courseData.allPhases.map((phase) => (
                    <button
                      key={phase.id}
                      onClick={() => handlePhaseClick(phase.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${phase.id <= 5
                        ? 'border-[#4177FF] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex-1">
                        <h4 className={`font-semibold text-base mb-2 ${phase.id <= 5 ? 'text-[#4177FF]' : 'text-gray-900'
                          }`}>
                          {phase.title}
                        </h4>
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <span>{phase.materials}/{phase.tasks} materi</span>
                          <span>•</span>
                          <span>{phase.tasks} tugas</span>
                          <span>•</span>
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                      <FaChevronRight className={`hidden text-base flex-shrink-0 mr-1 ${phase.id <= 5 ? 'text-[#4177FF]' : 'text-gray-400'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Confirmation Popup */}
      {showTaskPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full p-6 sm:p-8 relative">
            {/* Icon & Title */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex-1">
                Hi, Apakah Kamu Yakin?
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 text-left">
              Kerjakan tugas sekarang dan dapatkan nilai terbaik untuk hasil sertifikat!
            </p>

            {/* Info */}
            <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 text-left">
              * Kamu hanya bisa mengerjakan 3x dalam sehari.
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-4 sm:mb-6"></div>

            {/* Buttons - Right aligned */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
              <button
                onClick={() => setShowTaskPopup(false)}
                className="py-2.5 sm:py-3 px-6 sm:px-8 bg-gray-200 text-gray-700 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl hover:bg-gray-300 transition-colors"
              >
                Batalkan
              </button>
              <button
                onClick={() => {
                  setShowTaskPopup(false)
                  navigate(`/assignment/${phaseId}`)
                }}
                className="py-2.5 sm:py-3 px-6 sm:px-8 bg-[#4177FF] text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl hover:bg-[#3461D9] transition-colors"
              >
                Ya, kerjakan
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
