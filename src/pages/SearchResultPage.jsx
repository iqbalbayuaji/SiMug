import { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import filterIcon from "../assets/icon/mage_filter.svg"
import decoLeft from "../assets/icon/deco-search-results/comp 3.svg"
import decoRight from "../assets/icon/deco-search-results/comp 4.svg"
import decoMid from "../assets/icon/deco-search-results/comp 2.svg"
import decoEnd from "../assets/icon/deco-search-results/comp 1.svg"

export default function SearchResultPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get("q") || ""
  const [searchInput, setSearchInput] = useState(query)
  const [activeTab, setActiveTab] = useState("Rekomendasi")
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput)}`)
    }
  }

  // Mock data - replace with actual API call
  const courses = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: "Gym dari Nol: Panduan Lengkap Buat Pemula Sampai Mahir",
    instructor: "Muhammad Ali",
    duration: "2 bulan lalu",
    image: "https://via.placeholder.com/400x300/cccccc/666666?text=Course+Image",
    badge: "Free Trial",
    rating: 4.8,
    totalRatings: "4.5k review",
    materials: "12 materi",
    time: "7 jam",
    category: "Semua kalangan",
    price: "Rp. 99.000"
  }))

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Search Header Section */}
      <div className="bg-[#4177FF] relative overflow-hidden pb-16">
        {/* Decorative SVG - Left */}
        <img 
          src={decoLeft} 
          alt="" 
          className="absolute left-0 -top-12 h-full w-auto"
        />
        
        {/* Decorative SVG - Right Bottom */}
        <img 
          src={decoRight} 
          alt="" 
          className="absolute left-24 top-20 h-full w-auto z-0"
        />

         {/* Decorative SVG - Right Bottom */}
        <img 
          src={decoRight} 
          alt="" 
          className="absolute left-72 bottom-30 h-full w-auto z-0"
        />

         {/* Decorative SVG - Mid */}
        <img 
          src={decoMid} 
          alt="" 
          className="absolute left-[650px] bottom-0 h-full w-auto z-0 scale-150"
        />

         {/* Decorative SVG - Right Bottom */}
        <img 
          src={decoEnd} 
          alt="" 
          className="absolute right-0 bottom-6 h-full w-auto z-0"
        />
        
        <div className="px-12 py-6 relative z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Search Bar - Left Aligned with Fixed Width */}
            <div className="w-[600px] bg-white rounded-full pl-5 pr-2 py-1.5 flex items-center gap-3 shadow-lg">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <form onSubmit={handleSearch} className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Workout pemula"
                  className="flex-1 border-none focus:outline-none text-gray-900 text-base"
                />
                <button 
                  type="submit"
                  className="bg-[#4177FF] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#3461D9] transition-colors text-sm flex-shrink-0"
                >
                  Cari
                </button>
              </form>
            </div>

            {/* Filter Button - Right Side */}
            <button className="bg-white text-gray-900 pl-2 pr-5 py-1.5 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-lg">
              <div className="w-8 h-8 bg-[#4177FF] rounded-full flex items-center justify-center">
                <img src={filterIcon} alt="Filter" className="w-5 h-5" />
              </div>
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-t-[50px] relative -mt-12">
        <div className="mx-auto px-12 py-12">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Hasil untuk "<span className="text-[#4177FF]">{query}</span>"
            </h1>
            <p className="text-gray-500 text-sm">Menampilkan 32 hasil pencarian...</p>
          </div>

          {/* Tab Filters */}
          <div className="bg-[#F4F4F4] rounded-lg p-1 flex items-center gap-1">
            {["Rekomendasi", "Populer", "Terbaru"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-[#4177FF] text-white"
                    : "bg-transparent text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl border border-[#DBDBDB] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Course Image */}
              <div className="relative h-48 bg-gray-200 m-4 rounded-2xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {/* Free Trial Badge */}
                <div className="absolute top-3 right-3 bg-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
                  {course.badge}
                </div>
              </div>

              {/* Course Info */}
              <div className="px-5 pb-5">
                <h3 className="font-bold text-base text-gray-900 leading-tight line-clamp-2 min-h-[48px] mb-2">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  {course.instructor} • {course.duration}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-200 text-xs text-gray-700">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="bg-white px-2 py-1 rounded-lg border border-gray-200 text-xs text-gray-600">
                    {course.totalRatings}
                  </div>
                  <div className="bg-white px-2 py-1 rounded-lg border border-gray-200 text-xs text-gray-600">
                    {course.materials}
                  </div>
                  <div className="bg-white px-2 py-1 rounded-lg border border-gray-200 text-xs text-gray-600">
                    {course.time}
                  </div>
                </div>

                <div className="bg-white px-2 py-1 rounded-lg border border-gray-200 text-xs text-gray-600 inline-block mb-3">
                  {course.category}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between gap-2">
                  <p className="text-2xl font-bold text-[#4177FF]">{course.price}</p>
                  <button className="bg-[#E3EBFF] text-[#4177FF] px-3 py-1.5 rounded-md text-md font-semibold hover:bg-[#D0DFFF] transition-colors flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Mulai Belajar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {/* First Page Button */}
          <button 
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full bg-[#4177FF] text-white flex items-center justify-center transition-colors ${
              currentPage === 1 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:bg-[#3461D9]"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
            </svg>
          </button>

          {/* Previous Button */}
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full bg-white border border-[#DBDBDB] text-[#4177FF] flex items-center justify-center transition-colors ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-[#4177FF]"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full font-semibold transition-colors ${
                currentPage === page
                  ? "bg-[#4177FF] text-white"
                  : "bg-transparent text-gray-400 hover:bg-[#C5D9FF] hover:text-[#4177FF]"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Ellipsis */}
          <span className="text-gray-400 px-2">...</span>

          {/* Last Page */}
          <button
            onClick={() => setCurrentPage(10)}
            className={`w-10 h-10 rounded-full font-semibold transition-colors ${
              currentPage === 10
                ? "bg-[#4177FF] text-white"
                : "bg-transparent text-gray-400 hover:bg-[#C5D9FF] hover:text-[#4177FF]"
            }`}
          >
            10
          </button>

          {/* Next Button */}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(10, prev + 1))}
            disabled={currentPage === 10}
            className={`w-10 h-10 rounded-full bg-white border border-[#DBDBDB] text-[#4177FF] flex items-center justify-center transition-colors ${
              currentPage === 10
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-[#4177FF]"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Last Page Button */}
          <button 
            onClick={() => setCurrentPage(10)}
            disabled={currentPage === 10}
            className={`w-10 h-10 rounded-full bg-[#4177FF] text-white flex items-center justify-center transition-colors ${
              currentPage === 10
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#3461D9]"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
