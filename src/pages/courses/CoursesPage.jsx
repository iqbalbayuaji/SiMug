import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Navbar from '../../components/layout/Navbar'
import { coursesData, courseCategories, formatPrice } from '../../constants/coursesData'

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredCourses, setFilteredCourses] = useState(coursesData)

  // Get category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  // Filter courses based on category and search
  useEffect(() => {
    let result = coursesData

    if (selectedCategory !== 'all') {
      result = result.filter(course => course.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.shortDescription.toLowerCase().includes(query) ||
        course.instructor.name.toLowerCase().includes(query)
      )
    }

    setFilteredCourses(result)
  }, [selectedCategory, searchQuery])

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    if (categoryId === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', categoryId)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4177FF] via-[#5B8FFF] to-[#7BA4FF] py-16 md:py-24">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              🎓 100+ Courses Tersedia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Temukan Course yang<br />
              <span className="text-yellow-300">Tepat untuk Kamu</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Pelajari fitness, nutrisi, dan gaya hidup sehat dari instruktur terbaik Indonesia
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari course, topik, atau instruktur..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white rounded-2xl text-gray-800 placeholder-gray-400 shadow-2xl shadow-black/10 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[65px] md:top-[73px] z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-1">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#4177FF] text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semua Course
            </button>
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#4177FF] text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' 
                  ? 'Semua Course' 
                  : courseCategories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-500 mt-1">{filteredCourses.length} course ditemukan</p>
            </div>
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Terpopuler</option>
              <option>Rating Tertinggi</option>
              <option>Terbaru</option>
              <option>Harga Terendah</option>
            </select>
          </div>

          {/* Course Cards Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  className="block h-full border border-[#DBDBDB] rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg transition-all bg-white"
                >
                  {/* Course Image */}
                  <div className="relative h-52 bg-gray-800 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Course+Image'
                      }}
                    />
                    {/* Badge */}
                    {course.badge && (
                      <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md ${
                        course.badge === 'Bestseller' ? 'bg-yellow-400 text-yellow-900' :
                        course.badge === 'New' ? 'bg-green-500 text-white' :
                        'bg-white text-gray-800'
                      }`}>
                        {course.badge}
                      </div>
                    )}
                  </div>

                  {/* Course Info */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 leading-tight line-clamp-2 mb-2">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4">
                      {course.instructor.name} • {course.duration}
                    </p>

                    {/* Stats - Simple Pill Style */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-700">
                        <FaStar className="text-yellow-400" />
                        <span className="font-semibold">{course.rating}</span>
                      </div>
                      <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600">
                        {course.totalRatings.toLocaleString()} rating
                      </div>
                      <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600">
                        {course.totalLessons} materi+
                      </div>
                      <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600">
                        {course.duration}
                      </div>
                    </div>

                    <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600 inline-block mb-4">
                      {course.level}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        {course.discountPrice < course.price && (
                          <span className="text-sm text-gray-400 line-through mr-2">
                            {formatPrice(course.price)}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-[#4177FF]">
                          {formatPrice(course.discountPrice)}
                        </span>
                      </div>
                      <span className="bg-[#E5ECFF] text-[#4177FF] px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-1 whitespace-nowrap">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Mulai Belajar
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada course ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4177FF] to-[#7BA4FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Belum Menemukan yang Cocok?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Konsultasikan dengan AI kami untuk rekomendasi course yang sesuai dengan goals-mu
          </p>
          <Link
            to="/chatbot"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4177FF] rounded-2xl font-semibold hover:shadow-2xl hover:shadow-black/20 transition-all transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Tanya SiMug AI
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 SiMug. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
