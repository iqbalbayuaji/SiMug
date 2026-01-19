import { useState } from "react"

export default function KursusTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState("grid") // grid or list

  const courses = [
    {
      id: 1,
      title: "Workout di Rumah aja Tanpa Alat untuk Menjaga Kebugaran",
      instructor: "Moh. Iqbal",
      duration: "1 bulan lalu",
      completion: 35,
      image: "/src/assets/images/course1.jpg",
      lastActivity: "18:30 - 17 Jan"
    },
    {
      id: 2,
      title: "Panduan Meditasi yang Benar untuk Kesehatan Mental dan Fisik",
      instructor: "Moh. Iqbal",
      duration: "1 bulan lalu",
      completion: 35,
      image: "/src/assets/images/course2.jpg",
      lastActivity: "18:30 - 17 Jan"
    },
    {
      id: 3,
      title: "Teknik Pernapasan yang Efektif Saat Lari untuk Meningkatkan Stamina",
      instructor: "Moh. Iqbal",
      duration: "1 bulan lalu",
      completion: 35,
      image: "/src/assets/images/course3.jpg",
      lastActivity: "18:30 - 17 Jan"
    },
    {
      id: 4,
      title: "Belajar Bahasa German dari Nol Sampai Berani Ngomong",
      instructor: "Moh. Iqbal",
      duration: "1 bulan lalu",
      completion: 35,
      image: "/src/assets/images/course4.jpg",
      lastActivity: "18:30 - 17 Jan"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header with Search */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Daftar Kurus Kamu <span className="text-sm text-gray-500">{courses.length} total kursus</span></h2>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Search Bar with Button */}
          <div className="relative flex-1 max-w-2xl">
            <div className="flex items-center bg-white border-2 border-gray-300 rounded-full overflow-hidden">
              <svg 
                className="w-6 h-6 text-gray-400 ml-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari riwayat kursus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 focus:outline-none text-gray-600 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex bg-[#E5EDFF] rounded-4xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-full transition-colors ${
                viewMode === "grid" 
                  ? "bg-[#4177FF] text-white" 
                  : "text-[#4177FF] hover:text-[#3562D3]"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 rounded-full transition-colors ${
                viewMode === "list" 
                  ? "bg-[#4177FF] text-white" 
                  : "text-[#4177FF] hover:text-[#3562D3]"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl p-1.5 shadow-sm hover:shadow-md transition-shadow border border-[#CACACA]">
            <div className="relative h-40 mb-3">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <button className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
            </div>
            <div className="px-1">
              <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {course.instructor} • {course.duration}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#4177FF] font-semibold">on-progress</span>
                  <span className="text-[#4177FF] font-semibold">{course.completion}% selesai</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#4177FF] h-2 rounded-full transition-all"
                    style={{ width: `${course.completion}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Aktivitas Terakhir - {course.lastActivity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
