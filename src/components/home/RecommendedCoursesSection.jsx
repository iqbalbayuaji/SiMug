import { useState } from "react"

export default function RecommendedCoursesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const courses = [
    {
      id: 1,
      image: "/course-image.jpg",
      title: "Gerakan gym yang sangat nge-bantu buat latih otot perut dan bo...",
      instructor: "Bobby Iskandar",
      duration: "7 bulan lalu",
      rating: 4.8,
      totalRatings: "1.5k rating",
      materials: "20 materi+",
      time: "10 jam",
      category: "Semua kalangan",
      price: "Rp. 69.000",
      badge: "Free Trial"
    },
    {
      id: 2,
      image: "/course-image.jpg",
      title: "Ini cara Gue naikin berat badan secara alir & capake semua!!",
      instructor: "Moh. Iqbal Dzulkarnain",
      duration: "3 bulan lalu",
      rating: 4.7,
      totalRatings: "1.2k rating",
      materials: "15 materi+",
      time: "5 jam",
      category: "Semua kalangan",
      price: "Rp. 45.000",
      badge: "Free Trial"
    },
    {
      id: 3,
      image: "/course-image.jpg",
      title: "Teknik lanjutan seni pencak silat berdasarkan peraturan baru 20...",
      instructor: "Rafha Wicaksono",
      duration: "6 bulan lalu",
      rating: 4.8,
      totalRatings: "900 rating",
      materials: "18 materi+",
      time: "8 jam",
      category: "Tingkat lanjut",
      price: "Rp. 50.000",
      badge: "Free Trial"
    },
    {
      id: 4,
      image: "/course-image.jpg",
      title: "Panduan lengkap bulking untuk pemula",
      instructor: "Ahmad Fitness",
      duration: "4 bulan lalu",
      rating: 4.9,
      totalRatings: "2k rating",
      materials: "25 materi+",
      time: "12 jam",
      category: "Semua kalangan",
      price: "Rp. 89.000",
      badge: "Free Trial"
    },
    {
      id: 5,
      image: "/course-image.jpg",
      title: "Yoga untuk fleksibilitas maksimal",
      instructor: "Sarah Wellness",
      duration: "2 bulan lalu",
      rating: 4.6,
      totalRatings: "800 rating",
      materials: "12 materi+",
      time: "6 jam",
      category: "Semua kalangan",
      price: "Rp. 55.000",
      badge: "Free Trial"
    },
    {
      id: 6,
      image: "/course-image.jpg",
      title: "Cardio HIIT untuk pembakaran lemak cepat",
      instructor: "Fitri Trainer",
      duration: "5 bulan lalu",
      rating: 4.7,
      totalRatings: "1.1k rating",
      materials: "16 materi+",
      time: "7 jam",
      category: "Semua kalangan",
      price: "Rp. 65.000",
      badge: "Free Trial"
    }
  ]

  const cardsPerSlide = 3
  const totalSlides = Math.ceil(courses.length / cardsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="relative bg-white py-20">
      <div className="w-full px-6">
        {/* Header */}
        <div className="max-w-[1500px] mx-auto mb-12">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              {/* Blue Border Line */}
              <div className="w-1 bg-[#4177FF] rounded-full"></div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Kursus Rekomendasi
                </h2>
                <p className="text-gray-600 text-base">
                  Berikut ini adalah beberapa course yang direkomendasikan SiMug
                </p>
              </div>
            </div>
            <button className="text-[#4177FF] font-semibold flex items-center gap-2 px-6 py-2.5 border-2 border-[#4177FF] rounded-full hover:bg-[#E5ECFF] transition-colors">
              Telusuri Lebih banyak
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Course Cards with Navigation */}
        <div className="relative max-w-[1500px] mx-auto">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Course Cards Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-6">
                    {courses
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((course) => (
                        <div key={course.id} className="w-full">
                          <div className="bg-white rounded-3xl border border-[#DBDBDB] shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                            {/* Course Image */}
                            <div className="relative h-54 bg-gray-800 m-4 rounded-2xl overflow-hidden">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Course+Image"
                                }}
                              />
                              {/* Free Trial Badge */}
                              <div className="absolute top-4 right-4 bg-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                                {course.badge}
                              </div>
                            </div>

                            {/* Course Info */}
                            <div className="px-6 pb-6">
                              <h3 className="font-bold text-lg text-gray-900 leading-tight line-clamp-2 min-h-[56px]">
                                {course.title}
                              </h3>

                              <p className="text-sm text-gray-400 mb-4">
                                {course.instructor} • {course.duration}
                              </p>

                              {/* Stats - Simple Pill Style */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-700">
                                  <span className="text-yellow-400">⭐</span>
                                  <span className="font-semibold">{course.rating}</span>
                                </div>
                                <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600">
                                  {course.totalRatings}
                                </div>
                                <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600">
                                  {course.materials}
                                </div>
                                <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600">
                                  {course.time}
                                </div>
                              </div>

                              <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600 inline-block mb-4">
                                {course.category}
                              </div>

                              {/* Price & CTA */}
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-2xl font-bold text-[#4177FF]">{course.price}</p>
                                <button className="bg-[#E5ECFF] text-[#4177FF] px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#D0DFFF] transition-colors flex items-center gap-1 whitespace-nowrap">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                  Mulai Belajar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-[#4177FF]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
