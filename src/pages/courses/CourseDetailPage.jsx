import { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FaStar, FaLock, FaPlay, FaCertificate, FaUsers, FaClock, FaCheckCircle, FaBookOpen, FaLaptop, FaInfinity, FaDownload, FaHeart, FaRegHeart, FaChevronDown, FaChevronRight, FaQuoteLeft, FaGraduationCap, FaRocket, FaBriefcase, FaCode } from 'react-icons/fa'
import { HiSparkles, HiAcademicCap, HiLightningBolt, HiShieldCheck } from 'react-icons/hi'
import Navbar from '../../components/layout/Navbar'
import { getCourseBySlug, getRelatedCourses, formatPrice } from '../../constants/coursesData'

export default function CourseDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedModules, setExpandedModules] = useState([1])
  const [course, setCourse] = useState(null)
  const [relatedCourses, setRelatedCourses] = useState([])
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    const foundCourse = getCourseBySlug(slug)
    if (foundCourse) {
      setCourse(foundCourse)
      setRelatedCourses(getRelatedCourses(foundCourse.id, foundCourse.category, 3))
    } else {
      navigate('/courses')
    }
  }, [slug, navigate])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((scrolled / maxScroll) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleModule = (moduleId) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-cyan-400 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: HiSparkles },
    { id: 'curriculum', label: 'Kurikulum', icon: FaBookOpen },
    { id: 'instructor', label: 'Instruktur', icon: HiAcademicCap },
    { id: 'reviews', label: 'Reviews', icon: FaStar },
  ]

  // Calculate rating breakdown
  const ratingBreakdown = {
    5: 75,
    4: 15,
    3: 7,
    2: 2,
    1: 1,
  }

  // Target audience data
  const targetAudience = [
    { icon: FaGraduationCap, text: 'Mahasiswa yang ingin mendalami skill baru' },
    { icon: FaRocket, text: 'Fresh graduate yang ingin meningkatkan daya saing' },
    { icon: FaBriefcase, text: 'Profesional yang ingin career switch' },
    { icon: FaCode, text: 'Developer yang ingin upgrade skill' },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Navbar />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/20 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Modern Glassmorphism */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - 3 cols */}
            <div className="lg:col-span-3">
              {/* Breadcrumb with Glassmorphism */}
              <nav className="inline-flex items-center gap-2 text-sm bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                  <span>Courses</span>
                </Link>
                <FaChevronRight className="text-gray-600 text-xs" />
                <Link to={`/courses?category=${course.category}`} className="text-gray-400 hover:text-white transition-colors">
                  {course.categoryLabel}
                </Link>
              </nav>

              {/* Badge with Animation */}
              {course.badge && (
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                    course.badge === 'Bestseller' 
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/30' 
                      : course.badge === 'New' 
                        ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow-lg shadow-green-500/30'
                        : 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                  }`}>
                    <HiSparkles className="text-lg" />
                    {course.badge}
                  </span>
                </div>
              )}

              {/* Title with Gradient */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  {course.title}
                </span>
              </h1>

              {/* Short Description */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {course.shortDescription}
              </p>

              {/* Stats Row with Glassmorphism Cards */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1.5 bg-yellow-400/20 rounded-lg">
                      <FaStar className="text-yellow-400" />
                    </div>
                    <span className="font-bold text-yellow-400 text-lg">{course.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({course.totalRatings.toLocaleString()} ulasan)</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
                  <div className="p-1.5 bg-blue-400/20 rounded-lg">
                    <FaUsers className="text-blue-400" />
                  </div>
                  <span className="text-white font-semibold">{course.totalStudents.toLocaleString()}</span>
                  <span className="text-gray-400 text-sm">siswa</span>
                </div>

                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
                  <div className="p-1.5 bg-green-400/20 rounded-lg">
                    <FaClock className="text-green-400" />
                  </div>
                  <span className="text-white font-semibold">{course.duration}</span>
                </div>
              </div>

              {/* Instructor with Hover Effect */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="relative">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500/50 group-hover:border-blue-400 transition-all group-hover:scale-105"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Dibuat oleh</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">{course.instructor.name}</p>
                  <p className="text-xs text-gray-500">{course.instructor.title}</p>
                </div>
              </div>

              {/* Meta Info Tags */}
              <div className="flex flex-wrap items-center gap-3 mt-8">
                {[
                  { icon: FaClock, text: course.duration },
                  { icon: FaBookOpen, text: `${course.totalLessons} materi` },
                  { icon: HiShieldCheck, text: course.level },
                  { icon: HiLightningBolt, text: `Update ${course.updatedAt}` },
                ].map((item, idx) => (
                  <span key={idx} className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full">
                    <item.icon className="text-blue-400" />
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Video Preview Card (Desktop) - 2 cols */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60"></div>
                
                {/* Video Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                  <div className="relative aspect-video group cursor-pointer" onClick={() => setShowVideoModal(true)}>
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all animate-pulse"></div>
                        <button className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                          <FaPlay className="text-blue-600 text-2xl ml-1" />
                        </button>
                      </div>
                    </div>

                    {/* Preview Label */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-sm rounded-full border border-white/20">
                        <FaPlay className="text-xs" />
                        Preview Gratis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFF"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12" ref={contentRef}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Tabs */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Tabs Navigation - Modern Style */}
            <div className="sticky top-4 z-40 mb-8">
              <div className="flex gap-1 bg-white/80 backdrop-blur-xl p-2 rounded-2xl shadow-lg shadow-blue-500/5 border border-gray-100/50">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className={activeTab === tab.id ? 'text-white' : 'text-gray-400'} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-8 md:p-10">
                  {/* Description Section */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <HiSparkles className="text-white text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Tentang Course Ini</h2>
                    </div>
                    <div className="prose prose-lg prose-gray max-w-none">
                      {course.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* What You'll Learn - Modern Cards */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                        <FaCheckCircle className="text-white text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Yang Akan Kamu Pelajari</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="group flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-2xl border border-emerald-100/50 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1"
                        >
                          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience - New Section */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <FaUsers className="text-white text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Untuk Siapa Course Ini?</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {targetAudience.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-4 p-5 bg-gradient-to-r from-purple-50 via-white to-violet-50 rounded-2xl border border-purple-100/50 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md">
                            <item.icon className="text-white text-lg" />
                          </div>
                          <span className="text-gray-700 font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <HiLightningBolt className="text-white text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Prasyarat</h2>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 via-white to-amber-50 rounded-2xl border border-orange-100/50 p-6">
                      <div className="space-y-4">
                        {course.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2.5"></span>
                            <span className="text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <FaBookOpen className="text-white text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Kurikulum Course</h2>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-xl">
                      <span className="font-semibold text-gray-900">{course.totalModules} modul</span>
                      <span>•</span>
                      <span className="font-semibold text-gray-900">{course.totalLessons} materi</span>
                      <span>•</span>
                      <span className="font-semibold text-gray-900">{course.duration}</span>
                    </div>
                  </div>

                  {/* Progress Overview */}
                  <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100/50">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-600">Progress Keseluruhan</span>
                      <span className="text-sm font-bold text-blue-600">0%</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-0 transition-all duration-500"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Mulai belajar untuk melacak progresmu</p>
                  </div>

                  <div className="space-y-4">
                    {course.curriculum.map((module, moduleIdx) => (
                      <div 
                        key={module.moduleId} 
                        className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
                      >
                        {/* Module Header */}
                        <button
                          onClick={() => toggleModule(module.moduleId)}
                          className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white transition-all group"
                        >
                          <div className="flex items-center gap-4">
                            <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                              {String(module.moduleId).padStart(2, '0')}
                            </span>
                            <div className="text-left">
                              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{module.title}</h3>
                              <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                <FaBookOpen className="text-xs" />
                                {module.lessons.length} materi
                                <span>•</span>
                                <FaClock className="text-xs" />
                                {module.duration}
                              </p>
                            </div>
                          </div>
                          <FaChevronDown
                            className={`text-gray-400 group-hover:text-blue-500 transition-all duration-300 ${expandedModules.includes(module.moduleId) ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {/* Module Lessons */}
                        {expandedModules.includes(module.moduleId) && (
                          <div className="divide-y divide-gray-50 bg-white">
                            {module.lessons.map((lesson, lessonIdx) => (
                              <div 
                                key={lesson.id} 
                                className="flex items-center justify-between p-4 hover:bg-blue-50/50 transition-colors group cursor-pointer"
                              >
                                <div className="flex items-center gap-4">
                                  <span className="w-10 h-10 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
                                    {lesson.isPreview ? (
                                      <FaPlay className="text-blue-600 text-sm" />
                                    ) : (
                                      <FaLock className="text-gray-400 text-sm" />
                                    )}
                                  </span>
                                  <div>
                                    <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">{lesson.title}</p>
                                    <p className="text-sm text-gray-400 flex items-center gap-1">
                                      <FaClock className="text-xs" />
                                      {lesson.duration}
                                    </p>
                                  </div>
                                </div>
                                {lesson.isPreview && (
                                  <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/25">
                                    Preview
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructor Tab */}
              {activeTab === 'instructor' && (
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <HiAcademicCap className="text-white text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Tentang Instruktur</h2>
                  </div>
                  
                  {/* Instructor Card */}
                  <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-8 border border-blue-100/50">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0 text-center md:text-left">
                        <div className="relative inline-block">
                          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-40"></div>
                          <img
                            src={course.instructor.avatar}
                            alt={course.instructor.name}
                            className="relative w-36 h-36 rounded-3xl object-cover border-4 border-white shadow-xl"
                          />
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full border-4 border-white flex items-center justify-center">
                            <FaCheckCircle className="text-white text-sm" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
                        <p className="text-blue-600 font-semibold mb-6">{course.instructor.title}</p>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                              <FaStar />
                              <span className="font-bold text-gray-900">{course.rating}</span>
                            </div>
                            <p className="text-xs text-gray-500">Rating</p>
                          </div>
                          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
                              <FaUsers />
                              <span className="font-bold text-gray-900">{course.instructor.totalStudents.toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-gray-500">Siswa</p>
                          </div>
                          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                            <div className="flex items-center justify-center gap-1 text-indigo-500 mb-1">
                              <FaBookOpen />
                              <span className="font-bold text-gray-900">{course.instructor.totalCourses}</span>
                            </div>
                            <p className="text-xs text-gray-500">Courses</p>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">{course.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
                      <FaStar className="text-white text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Rating & Reviews</h2>
                  </div>

                  {/* Rating Summary - Modern Card */}
                  <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 rounded-3xl p-8 mb-10 border border-yellow-100/50">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="text-center md:text-left md:border-r md:border-yellow-200/50 md:pr-8">
                        <div className="text-7xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                          {course.rating}
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className={`w-6 h-6 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-500 font-medium">{course.totalRatings.toLocaleString()} ulasan</p>
                      </div>

                      {/* Rating Bars */}
                      <div className="flex-1 space-y-3">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center gap-4">
                            <span className="w-12 text-sm text-gray-600 flex items-center gap-1.5 font-medium">
                              {star} <FaStar className="text-yellow-400 text-xs" />
                            </span>
                            <div className="flex-1 h-3 bg-white rounded-full overflow-hidden shadow-inner">
                              <div
                                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-700"
                                style={{ width: `${ratingBreakdown[star]}%` }}
                              ></div>
                            </div>
                            <span className="w-14 text-sm text-gray-500 text-right font-medium">{ratingBreakdown[star]}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {course.reviews.map((review, idx) => (
                      <div 
                        key={review.id} 
                        className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h4 className="font-bold text-gray-900">{review.user}</h4>
                              <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <FaStar
                                    key={star}
                                    className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{review.date}</span>
                            </div>
                            <div className="relative">
                              <FaQuoteLeft className="absolute -top-1 -left-1 text-blue-100 text-2xl" />
                              <p className="text-gray-600 pl-6">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {course.reviews.length === 0 && (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaStar className="text-gray-300 text-3xl" />
                      </div>
                      <p className="text-gray-500 font-medium">Belum ada review untuk course ini.</p>
                      <p className="text-gray-400 text-sm mt-1">Jadilah yang pertama memberikan review!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Course Card */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              {/* Mobile Video Preview */}
              <div className="lg:hidden relative mb-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-pointer" onClick={() => setShowVideoModal(true)}>
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                      <FaPlay className="text-blue-600 text-xl ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                {/* Desktop Video Preview */}
                <div className="hidden lg:block relative aspect-video group cursor-pointer" onClick={() => setShowVideoModal(true)}>
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-xl group-hover:blur-2xl transition-all animate-pulse"></div>
                      <button className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                        <FaPlay className="text-blue-600 text-xl ml-1" />
                      </button>
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-sm rounded-full border border-white/20 flex items-center gap-2">
                    <FaPlay className="text-xs" />
                    Preview Gratis
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {formatPrice(course.discountPrice)}
                      </span>
                      {course.discountPrice < course.price && (
                        <>
                          <span className="text-lg text-gray-400 line-through">
                            {formatPrice(course.price)}
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-rose-600 text-white text-sm font-bold rounded-full shadow-lg shadow-red-500/25">
                            {Math.round((1 - course.discountPrice / course.price) * 100)}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-500 bg-red-50 px-3 py-2 rounded-xl">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Harga promo berakhir dalam 2 hari!</span>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 mb-3 flex items-center justify-center gap-2">
                    <FaRocket />
                    Mulai Belajar Sekarang
                  </button>

                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`w-full py-4 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 ${
                      isWishlisted 
                        ? 'bg-pink-50 text-pink-600 border-2 border-pink-200' 
                        : 'border-2 border-gray-200 text-gray-700 hover:border-pink-200 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    {isWishlisted ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
                    {isWishlisted ? 'Tersimpan di Wishlist' : 'Tambah ke Wishlist'}
                  </button>

                  {/* Guarantee */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 my-6 py-4 border-y border-gray-100">
                    <HiShieldCheck className="text-green-500 text-lg" />
                    <span>30 Hari Garansi Uang Kembali</span>
                  </div>

                  {/* Course Includes */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <HiSparkles className="text-blue-500" />
                      Course ini mencakup:
                    </h4>
                    <div className="space-y-3">
                      {[
                        { icon: FaPlay, text: `${course.duration} video on-demand`, color: 'text-blue-500' },
                        { icon: FaBookOpen, text: `${course.totalLessons} materi pembelajaran`, color: 'text-indigo-500' },
                        { icon: FaDownload, text: 'Resources & templates', color: 'text-purple-500' },
                        { icon: FaInfinity, text: 'Akses selamanya', color: 'text-green-500' },
                        { icon: FaLaptop, text: 'Akses di semua device', color: 'text-orange-500' },
                        { icon: FaCertificate, text: 'Sertifikat penyelesaian', color: 'text-yellow-600' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-600 group">
                          <div className={`w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform ${item.color}`}>
                            <item.icon className="text-sm" />
                          </div>
                          <span className="text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses - Modern Grid */}
      {relatedCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Course Serupa</h2>
              <p className="text-gray-500">Eksplorasi course lainnya yang mungkin kamu suka</p>
            </div>
            <Link 
              to="/courses" 
              className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Lihat Semua
              <FaChevronRight className="text-sm" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedCourses.map((relatedCourse, idx) => (
              <Link
                key={relatedCourse.id}
                to={`/courses/${relatedCourse.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={relatedCourse.thumbnail}
                    alt={relatedCourse.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {relatedCourse.badge && (
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                      relatedCourse.badge === 'Bestseller' ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white' :
                      relatedCourse.badge === 'New' ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white' :
                      'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
                    }`}>
                      {relatedCourse.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors text-lg">
                    {relatedCourse.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{relatedCourse.instructor.name}</p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 bg-yellow-50 px-2.5 py-1 rounded-lg">
                      <FaStar className="text-yellow-400" />
                      <span className="font-bold text-gray-900">{relatedCourse.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({relatedCourse.totalRatings.toLocaleString()} ulasan)</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {formatPrice(relatedCourse.discountPrice)}
                    </span>
                    {relatedCourse.discountPrice < relatedCourse.price && (
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(relatedCourse.price)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Modern Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                SiMug
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
                Platform belajar online terbaik untuk mengembangkan skill dan karir impianmu dengan materi berkualitas tinggi.
              </p>
              <div className="flex items-center gap-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <span className="text-sm capitalize">{social[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['Tentang Kami', 'Courses', 'Instructor', 'Pricing'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-3">
                {['FAQ', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 SiMug. All rights reserved. Made with ❤️ in Indonesia
            </p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <FaPlay className="text-6xl mb-4 mx-auto opacity-50" />
                <p className="text-lg">Video Preview</p>
                <p className="text-sm text-gray-400 mt-2">Integrasi video akan ditambahkan</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
