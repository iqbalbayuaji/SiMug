import { useState } from "react"
import { Link } from "react-router-dom"

export default function RecommendedCoursesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
      title: "Bagaimana cara menjaga konsistensi workout dirumah?",
      author: "Imam Hambali",
      duration: "2 minggu lalu",
      category: "Fitness",
      categoryColor: "bg-[#1E1E1E]"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800",
      title: "Bagaimana cara menjaga konsistensi workout dirumah?",
      author: "Imam Hambali",
      duration: "2 minggu lalu",
      category: "Atletik",
      categoryColor: "bg-[#1E1E1E]"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800",
      title: "Bagaimana cara menjaga konsistensi workout dirumah?",
      author: "Imam Hambali",
      duration: "2 minggu lalu",
      category: "Workout",
      categoryColor: "bg-[#1E1E1E]"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      title: "Bagaimana cara menjaga konsistensi workout dirumah?",
      author: "Imam Hambali",
      duration: "2 minggu lalu",
      category: "Atletik",
      categoryColor: "bg-[#1E1E1E]"
    },
  ]

  const cardsPerSlide = 4
  const totalSlides = Math.ceil(articles.length / cardsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="relative bg-white py-8 md:py-16">
      <div className="w-full px-4 md:px-6">
        {/* Header */}
        <div className="max-w-[1500px] mx-auto mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex gap-3">
              {/* Blue Border Line */}
              <div className="w-1 bg-[#4177FF] rounded-full"></div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
                  Rekomendasi Artikel
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Berikut beberapa artikel yang direkomendasikan SiMug
                </p>
              </div>
            </div>
            <Link to="/artikel" className="text-[#4177FF] font-semibold flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 border-2 border-[#4177FF] rounded-full hover:bg-[#E5ECFF] transition-colors text-sm md:text-base self-start">
              Telusuri Lebih banyak
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Article Cards with Navigation */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Article Cards Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {articles
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((article) => (
                        <div key={article.id} className="w-full">
                          <Link to="/artikel" className="block h-full group">
                            {/* Article Image */}
                            <div className="relative h-56 rounded-2xl overflow-hidden mb-3">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                              
                              {/* Category Badge */}
                              <div className="absolute top-3 left-3 opacity-70">
                                <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                                  {article.category}
                                </span>
                              </div>

                              {/* Three Dots Menu */}
                              <button className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                              </button>

                              {/* Title & Author Overlay */}
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="font-bold text-base text-white leading-tight line-clamp-2 mb-2">
                                  {article.title}
                                </h3>
                                <p className="text-xs text-white/90">
                                  {article.author} • {article.duration}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
