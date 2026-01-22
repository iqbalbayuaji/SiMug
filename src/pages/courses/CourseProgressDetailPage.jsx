import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaPlay, FaStar, FaClock, FaBook, FaCheckCircle, FaChevronRight, FaSearch } from 'react-icons/fa'
import Footer from '../../components/layout/Footer'

export default function CourseProgressDetailPage() {
  const { phaseId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [showMenu, setShowMenu] = useState(false)
  const [showTaskPopup, setShowTaskPopup] = useState(false)

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
      { id: 1, title: 'Fase 1 : Penguatan Otot Inti', materials: 2, tasks: 5, duration: '12 menit' },
      { id: 2, title: 'Fase 2 : Latihan Dasar', materials: 0, tasks: 2, duration: '15 menit' },
      { id: 3, title: 'Fase 3 : Full Body Workout', materials: 0, tasks: 2, duration: '15 menit' },
      { id: 4, title: 'Fase 4 : Pendinginan', materials: 0, tasks: 2, duration: '8 menit' },
      { id: 5, title: 'Fase 5 : Penguatan Otot Inti', materials: 2, tasks: 5, duration: '12 menit' },
      { id: 6, title: 'Fase 6 : Latihan Dasar', materials: 0, tasks: 2, duration: '15 menit' },
      { id: 7, title: 'Fase 7 : Full Body Workout', materials: 0, tasks: 2, duration: '15 menit' },
      { id: 8, title: 'Fase 8 : Pendinginan', materials: 0, tasks: 2, duration: '8 menit' },
    ]
  }

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Simple Header - Logo Left, Back & Menu Right */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4177FF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SiMUG</span>
          </div>

          {/* Back Button & Hamburger Menu - Right */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-2.5 border-2 border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-base font-medium">Kembali</span>
            </button>
            
            <button 
              className="p-3 border-2 border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors relative"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              {/* Dropdown Menu */}
              {showMenu && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setShowMenu(false)}
                  ></div>
                  
                  {/* Menu */}
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    {/* Bagikan URL */}
                    <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">Bagikan URL</span>
                    </button>

                    {/* Laporkan */}
                    <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">Laporkan</span>
                    </button>

                    {/* Beri Rating */}
                    <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">Beri Rating</span>
                    </button>

                    {/* Perbesar Layar */}
                    <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-[#E3EBFF] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">Perbesar Layar</span>
                    </button>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-0">
          {/* Right Sidebar - Progress Card (Now on top for mobile, right for desktop) */}
          <div className="lg:col-span-1 order-1 lg:order-2 border-l border-gray-200 bg-white">
            {/* Progress Card - No padding, directly under header */}
            <div className="bg-white p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fase Kursus : Fase 5</h3>
                <p className="text-gray-500 text-sm mb-4">{courseData.progress.completed}/{courseData.progress.total} COMPLETED</p>
                
                {/* Segmented Progress Bar */}
                <div className="flex gap-2">
                  {[...Array(courseData.progress.total)].map((_, index) => (
                    <div 
                      key={index}
                      className={`flex-1 h-2 rounded-full ${
                        index < courseData.progress.completed 
                          ? 'bg-[#4177FF]' 
                          : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Lessons List */}
              <div className="space-y-3 mb-6">
                {courseData.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${
                      lesson.current
                        ? 'bg-blue-50 border border-blue-100'
                        : 'bg-white border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {/* Lesson Number with Circular Progress */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      {lesson.current && (
                        <svg className="absolute inset-0 w-12 h-12 -rotate-90">
                          {/* Background circle */}
                          <circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="3"
                          />
                          {/* Progress circle (70%) */}
                          <circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke="#4177FF"
                            strokeWidth="3"
                            strokeDasharray={`${2 * Math.PI * 22 * 0.7} ${2 * Math.PI * 22}`}
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${
                        lesson.completed
                          ? 'bg-white border-3 border-[#4177FF]'
                        : lesson.current
                          ? 'bg-white text-[#4177FF]'
                          : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-base font-medium ${
                        lesson.current ? 'text-[#4177FF]' : lesson.completed ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {lesson.title}
                      </p>
                    </div>
                    {lesson.completed && (
                      <FaCheckCircle className="text-[#4177FF] text-xl" />
                    )}
                    <FaChevronRight className="text-gray-300" />
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setShowTaskPopup(true)}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#4177FF] to-[#5B8FFF] text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="text-base font-semibold mb-0.5">Praktikan Ilmu Kamu</div>
                  <div className="text-xs opacity-90">Kerjakan Tugas yang Diberikan Mentor.</div>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg text-sm font-semibold">
                  Kerjakan
                </div>
              </button>
            </div>

            {/* Course Content */}
            <div className="bg-white p-6 border-t border-b border-gray-200 flex flex-col">
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
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      phase.id <= 5
                        ? 'border-[#4177FF] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <h4 className={`font-semibold mb-2 ${
                      phase.id <= 5 ? 'text-[#4177FF]' : 'text-gray-900'
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
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="lg:col-span-2 order-2 lg:order-1 bg-white">
            {/* Title */}
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {courseData.title}
              </h1>
              <p className="text-gray-600">
                {courseData.phase} • {courseData.totalMaterials} materi
              </p>
            </div>

            {/* Video Player */}
            <div className="p-6">
              <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: '16/9', maxHeight: '500px' }}>
                <div className="relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden group">
                  <img 
                    src={courseData.thumbnail} 
                    alt={courseData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                      <FaPlay className="text-[#4177FF] text-2xl ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'overview'
                      ? 'text-[#4177FF] border-b-2 border-[#4177FF]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('review')}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'review'
                      ? 'text-[#4177FF] border-b-2 border-[#4177FF]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Review
                </button>
                <button
                  onClick={() => setActiveTab('pengumuman')}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'pengumuman'
                      ? 'text-[#4177FF] border-b-2 border-[#4177FF]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Pengumuman
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    {/* Stats */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Gambaran Umum</h3>
                      <div className="flex items-start gap-8 mb-6">
                        {/* Left Stats */}
                        <div className="flex items-center gap-6">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <FaStar className="text-yellow-400" />
                              <span className="text-2xl font-bold text-gray-900">{courseData.rating}</span>
                            </div>
                            <p className="text-sm text-gray-500">{courseData.totalRatings} rating</p>
                          </div>
                          <div className="w-px h-12 bg-gray-300"></div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">{courseData.students}</div>
                            <p className="text-sm text-gray-500">Peserta</p>
                          </div>
                          <div className="w-px h-12 bg-gray-300"></div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">{courseData.duration}</div>
                            <p className="text-sm text-gray-500">Total</p>
                          </div>
                          <div className="w-px h-12 bg-gray-300"></div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">{courseData.totalPhases} fase</div>
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
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Deskripsi Kursus</h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {courseData.description}
                      </p>
                    </div>

                    {/* Instructor */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Tentang Instruktur</h3>
                      <div className="border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                          <img 
                            src={courseData.instructor.avatar} 
                            alt={courseData.instructor.name}
                            className="w-16 h-16 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-gray-900 text-lg">{courseData.instructor.name}</h4>
                              <span className="text-gray-400">•</span>
                              <button className="text-[#4177FF] text-sm font-semibold hover:underline">
                                {courseData.instructor.title}
                              </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{courseData.instructor.bio}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {courseData.instructor.description}
                            </p>
                            <div className="flex items-center gap-6">
                              <span className="text-[#4177FF] text-sm font-semibold">{courseData.instructor.totalCourses} course</span>
                              <span className="text-[#4177FF] text-sm font-semibold">{courseData.instructor.totalStudents} pengikut</span>
                              <button className="text-[#4177FF] hover:text-[#3461D9]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                              <button className="text-[#4177FF] hover:text-[#3461D9]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                              </button>
                              <button className="text-[#4177FF] hover:text-[#3461D9]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'review' && (
                  <div className="text-center py-12 text-gray-500">
                    Belum ada review untuk course ini
                  </div>
                )}

                {activeTab === 'pengumuman' && (
                  <div className="text-center py-12 text-gray-500">
                    Belum ada pengumuman
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Confirmation Popup */}
      {showTaskPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative">
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 flex-1">
                Hi, Apakah Kamu Yakin?
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 text-left">
              Kerjakan tugas sekarang dan dapatkan nilai terbaik untuk hasil sertifikat!
            </p>

            {/* Info */}
            <p className="text-sm text-gray-500 mb-8 text-left">
              * Kamu hanya bisa mengerjakan 3x dalam sehari.
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6"></div>

            {/* Buttons - Right aligned */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowTaskPopup(false)}
                className="py-3 px-8 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
              >
                Batalkan
              </button>
              <button
                onClick={() => {
                  setShowTaskPopup(false)
                  navigate(`/assignment/${phaseId}`)
                }}
                className="py-3 px-8 bg-[#4177FF] text-white font-semibold rounded-xl hover:bg-[#3461D9] transition-colors"
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
