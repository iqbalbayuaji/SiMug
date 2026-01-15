import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FaStar, FaLock } from 'react-icons/fa'
import Navbar from '../../components/layout/Navbar'
import { getCourseBySlug, getRelatedCourses, formatPrice } from '../../constants/coursesData'

export default function CourseDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedModules, setExpandedModules] = useState([1])
  const [course, setCourse] = useState(null)
  const [relatedCourses, setRelatedCourses] = useState([])

  useEffect(() => {
    const foundCourse = getCourseBySlug(slug)
    if (foundCourse) {
      setCourse(foundCourse)
      setRelatedCourses(getRelatedCourses(foundCourse.id, foundCourse.category, 3))
    } else {
      navigate('/courses')
    }
  }, [slug, navigate])

  const toggleModule = (moduleId) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Kurikulum' },
    { id: 'instructor', label: 'Instruktur' },
    { id: 'reviews', label: 'Reviews' },
  ]

  // Calculate rating breakdown
  const ratingBreakdown = {
    5: 75,
    4: 15,
    3: 7,
    2: 2,
    1: 1,
  }

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={course.thumbnail}
            alt=""
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
                <span>›</span>
                <Link to={`/courses?category=${course.category}`} className="hover:text-white transition-colors">
                  {course.categoryLabel}
                </Link>
                <span>›</span>
                <span className="text-gray-500 truncate max-w-[200px]">{course.title}</span>
              </nav>

              {/* Badge */}
              {course.badge && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  course.badge === 'Bestseller' ? 'bg-yellow-400 text-yellow-900' :
                  course.badge === 'New' ? 'bg-green-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {course.badge}
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {course.title}
              </h1>

              {/* Short Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {course.shortDescription}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-yellow-400/20 px-3 py-1 rounded-full">
                    <FaStar className="text-yellow-400 text-lg" />
                    <span className="font-bold text-yellow-400">{course.rating}</span>
                  </div>
                  <span className="text-gray-400">({course.totalRatings.toLocaleString()} rating)</span>
                </div>
                <span className="text-gray-600">|</span>
                <span className="text-gray-300">
                  <span className="font-semibold text-white">{course.totalStudents.toLocaleString()}</span> siswa terdaftar
                </span>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div>
                  <p className="text-sm text-gray-400">Dibuat oleh</p>
                  <p className="font-semibold text-white">{course.instructor.name}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration} total
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {course.totalLessons} materi
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  {course.level}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Update {course.updatedAt}
                </span>
              </div>
            </div>

            {/* Right - Preview Video (Desktop) */}
            <div className="hidden lg:block">
              {/* Video Preview Card - will be positioned absolutely on desktop */}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content - Tabs */}
          <div className="lg:col-span-2">
            {/* Tabs Navigation */}
            <div className="flex gap-1 bg-white p-1 rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#4177FF] text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-8">
                  {/* Description */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Course Ini</h2>
                    <div className="prose prose-gray max-w-none">
                      {course.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* What You'll Learn */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Yang Akan Kamu Pelajari</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Prasyarat</h2>
                    <div className="space-y-3">
                      {course.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                          <span className="text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Kurikulum Course</h2>
                    <p className="text-gray-500">
                      {course.totalModules} modul • {course.totalLessons} materi • {course.duration}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {course.curriculum.map((module) => (
                      <div key={module.moduleId} className="border border-gray-200 rounded-2xl overflow-hidden">
                        {/* Module Header */}
                        <button
                          onClick={() => toggleModule(module.moduleId)}
                          className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <span className="w-10 h-10 bg-[#4177FF] text-white rounded-xl flex items-center justify-center font-bold">
                              {module.moduleId}
                            </span>
                            <div className="text-left">
                              <h3 className="font-semibold text-gray-900">{module.title}</h3>
                              <p className="text-sm text-gray-500">{module.lessons.length} materi • {module.duration}</p>
                            </div>
                          </div>
                          <svg
                            className={`w-5 h-5 text-gray-400 transition-transform ${expandedModules.includes(module.moduleId) ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Module Lessons */}
                        {expandedModules.includes(module.moduleId) && (
                          <div className="divide-y divide-gray-100">
                            {module.lessons.map((lesson) => (
                              <div key={lesson.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                  <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                    {lesson.isPreview ? (
                                      <svg className="w-4 h-4 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    ) : (
                                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                      </svg>
                                    )}
                                  </span>
                                  <div>
                                    <p className="text-gray-900">{lesson.title}</p>
                                    <p className="text-sm text-gray-400">{lesson.duration}</p>
                                  </div>
                                </div>
                                {lesson.isPreview && (
                                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
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
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Tentang Instruktur</h2>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-32 h-32 rounded-2xl object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
                      <p className="text-[#4177FF] font-medium mb-4">{course.instructor.title}</p>
                      
                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className="text-gray-600">{course.rating} Rating Instruktur</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                          <span className="text-gray-600">{course.instructor.totalStudents.toLocaleString()} siswa</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span className="text-gray-600">{course.instructor.totalCourses} courses</span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">{course.instructor.bio}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Rating & Reviews</h2>

                  {/* Rating Summary */}
                  <div className="flex flex-col md:flex-row gap-8 mb-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
                    <div className="text-center md:text-left">
                      <div className="text-6xl font-bold text-gray-900 mb-2">{course.rating}</div>
                      <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-6 h-6 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-500">{course.totalRatings.toLocaleString()} rating</p>
                    </div>

                    {/* Rating Bars */}
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-3">
                          <span className="w-8 text-sm text-gray-600 flex items-center gap-1">{star} <FaStar className="text-yellow-400 text-xs" /></span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{ width: `${ratingBreakdown[star]}%` }}
                            ></div>
                          </div>
                          <span className="w-12 text-sm text-gray-500 text-right">{ratingBreakdown[star]}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {course.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.user}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-semibold text-gray-900">{review.user}</h4>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm text-gray-400">{review.date}</span>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {course.reviews.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Belum ada review untuk course ini.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Course Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-[140px]">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Video Preview */}
                <div className="relative aspect-video bg-gray-900">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-2xl group">
                      <svg className="w-7 h-7 text-[#4177FF] ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                    Preview Course
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {formatPrice(course.discountPrice)}
                      </span>
                      {course.discountPrice < course.price && (
                        <>
                          <span className="text-lg text-gray-400 line-through">
                            {formatPrice(course.price)}
                          </span>
                          <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-lg">
                            {Math.round((1 - course.discountPrice / course.price) * 100)}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Harga promo berakhir dalam 2 hari!
                    </p>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-[#4177FF] to-[#5B8FFF] text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 mb-3">
                    Mulai Belajar Sekarang
                  </button>

                  <button className="w-full py-4 border-2 border-[#4177FF] text-[#4177FF] font-bold rounded-2xl hover:bg-blue-50 transition-colors mb-6">
                    Tambah ke Wishlist
                  </button>

                  {/* Guarantee */}
                  <p className="text-center text-sm text-gray-500 mb-6 flex items-center justify-center gap-1">
                    <FaLock className="text-gray-400" /> 30 Hari Garansi Uang Kembali
                  </p>

                  {/* Course Includes */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Course ini mencakup:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.duration} video on-demand</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{course.totalLessons} materi pembelajaran</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Resources & templates</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        <span>Akses selamanya</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span>Akses di mobile & desktop</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>Sertifikat penyelesaian</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Serupa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedCourses.map((relatedCourse) => (
              <Link
                key={relatedCourse.id}
                to={`/courses/${relatedCourse.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={relatedCourse.thumbnail}
                    alt={relatedCourse.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-[#4177FF] transition-colors">
                    {relatedCourse.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{relatedCourse.instructor.name}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{relatedCourse.rating}</span>
                    <span className="text-gray-400 text-sm">({relatedCourse.totalRatings.toLocaleString()})</span>
                  </div>
                  <p className="font-bold text-[#4177FF]">{formatPrice(relatedCourse.discountPrice)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 SiMug. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
