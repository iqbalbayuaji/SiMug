import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4177FF] to-[#10348F] py-20 md:py-28">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Organic shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-[15%] w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-[25%] w-2 h-2 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 right-[10%] w-3 h-3 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Decorative geometric shapes */}
          <div className="absolute top-32 left-[15%] w-16 h-16 border-2 border-white/10 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute bottom-40 right-[20%] w-20 h-20 border-2 border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-[8%] w-12 h-12 border-2 border-white/10 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Decorative lines */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="30%" x2="20%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="80%" y1="60%" x2="100%" y2="60%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="15%" cy="70%" r="3" fill="white" opacity="0.3" />
            <circle cx="85%" cy="25%" r="4" fill="white" opacity="0.2" />
            <circle cx="90%" cy="80%" r="2" fill="white" opacity="0.3" />
          </svg>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-700/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                100+ Course Siap Dipelajari
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                Mulai Perjalanan
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Sehat Kamu</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/40 -rotate-1"></span>
                </span>
                <br />
                Hari Ini
              </h1>

              <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-xl">
                Dari pemula sampai expert, temukan course yang pas buat level kamu. Belajar langsung dari praktisi berpengalaman.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">10K+</div>
                  <div className="text-white/70 text-sm">Siswa Aktif</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-white/70 text-sm">Course Premium</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">4.8★</div>
                  <div className="text-white/70 text-sm">Rating Rata-rata</div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-xl">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Cari course, topik, atau instruktur..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-14 pr-32 bg-white rounded-2xl text-gray-800 placeholder-gray-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                  <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#4177FF] text-white rounded-xl font-medium hover:bg-[#3461D9] transition-colors">
                    Cari
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-3 ml-1">
                  Populer: <span className="text-white/80">Yoga</span>, <span className="text-white/80">HIIT</span>, <span className="text-white/80">Nutrisi</span>
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main card */}
                <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                      alt="Course Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">Bestseller</span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700">4.9</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Full Body Workout untuk Pemula</h3>
                  <p className="text-gray-600 text-sm">12 minggu • 48 video</p>
                </div>

                {/* Floating card 1 */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Sertifikat</div>
                      <div className="text-xs text-gray-500">Resmi & Diakui</div>
                    </div>
                  </div>
                </div>

                {/* Floating card 2 */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl z-20 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">10K+ Siswa</div>
                      <div className="text-xs text-gray-500">Bergabung Bulan Ini</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[65px] md:top-[73px] z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="relative">
            <div className="flex items-center gap-2 md:gap-3 animate-scroll-categories">
              {/* Render categories 3 times for seamless infinite scroll */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-4 md:px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                      selectedCategory === 'all'
                        ? 'bg-[#4177FF] text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Semua Course
                  </button>
                  {courseCategories.map((category) => (
                    <button
                      key={`${category.id}-${setIndex}`}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-4 md:px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                        selectedCategory === category.id
                          ? 'bg-[#4177FF] text-white shadow-lg shadow-blue-500/25'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
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
      <Footer />
    </div>
  )
}
