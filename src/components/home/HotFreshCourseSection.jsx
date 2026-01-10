import ilustrasi1 from "../../assets/images/ilustrasi1.png"
import ilustrasi2 from "../../assets/images/ilustrasi2.png"
import ilustrasi3 from "../../assets/images/ilustrasi3.png"

export default function HotFreshCourseSection() {
  const courses = [
    {
      id: 1,
      image: ilustrasi1,
      title: "Teknik shooting bola lanjutan...",
      instructor: "Ferry Ridwan",
      badge: "SELENGKAPNYA"
    },
    {
      id: 2,
      image: ilustrasi2,
      title: "Teknik running paling cocok...",
      instructor: "Alexandromeda",
      badge: "SELENGKAPNYA"
    },
    {
      id: 3,
      image: ilustrasi3,
      title: "Teknik permainan bulu tangkis...",
      instructor: "Affan Sakti",
      badge: "SELENGKAPNYA"
    }
  ]

  return (
    <section className="relative bg-white py-12">
      <div className="w-full px-6">
        <div className="max-w-[1500px] mx-auto">
          {/* Blue Gradient Background Container */}
          <div className="bg-[#4177FF] rounded-[20px] p-8 relative overflow-hidden">
            {/* Decorative Parallelograms - Staircase Pattern */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
              {/* Parallelogram 1 - Top Left */}
              <div 
                className="absolute bg-[#628FFF] opacity-70 rounded-tl-xl rounded-br-xl"
                style={{
                  width: '300px',
                  height: '80px',
                  left: '200px',
                  top: '20px',
                  transform: 'skewX(40deg)',
                }}
              ></div>
              
              {/* Parallelogram 2 - Middle */}
              <div 
                className="absolute bg-[#628FFF] opacity-70 rounded-tl-xl rounded-br-xl"
                style={{
                  width: '300px',
                  height: '80px',
                  left: '300px',
                  top: '120px',
                  transform: 'skewX(40deg)',
                }}
              ></div>
              
              {/* Parallelogram 3 - Bottom Right */}
              <div 
                className="absolute bg-[#628FFF] opacity-70 rounded-tl-xl rounded-br-xl"
                style={{
                  width: '300px',
                  height: '80px',
                  left: '400px',
                  top: '220px',
                  transform: 'skewX(40deg)',
                }}
              ></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              {/* Left Side - Text Content */}
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-3">
                  Hot & Fresh Course
                </h2>
                <p className="text-base mb-5 text-white/90 leading-relaxed">
                  Segera bergabung dengan<br />
                  course-course terbaru yang baru<br />
                  saja launching di SiMug.
                </p>
                <button className="bg-white text-[#4177FF] px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                  Lihat lebih banyak
                </button>
              </div>

              {/* Right Side - Course Cards */}
              <div className="grid grid-cols-3 gap-3">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="relative rounded-2xl overflow-hidden group cursor-pointer h-[250px]"
                  >
                    {/* Background Image */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between">
                      {/* Top - Title and Instructor */}
                      <div className="text-white">
                        <h3 className="font-bold text-base mb-1 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {course.instructor}
                        </p>
                      </div>
                      
                      {/* Bottom - Badge and Icon */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-[#4177FF] rounded-full"></div>
                          <span className="text-xs font-bold text-white tracking-wider">
                            {course.badge}
                          </span>
                        </div>
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
