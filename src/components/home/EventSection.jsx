import event1 from "../../assets/images/event1.png"
import event2 from "../../assets/images/event2.png"
import event3 from "../../assets/images/event3.png"

export default function EventSection() {
  const benefits = [
    "Menambah motivasi progres",
    "Akses Kolaborasi brand kesehatan",
    "Reward yang melimpah"
  ]

  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FAFF] py-20">
      <div className="w-full px-6">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex gap-3 mb-4">
            <div className="w-1 bg-[#4177FF] rounded-full"></div>
            <h2 className="text-4xl font-bold text-gray-900">
              Event Menarik
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left Side - Images Collage */}
            <div className="relative h-[500px]">
              {/* Decorative Circle - Light Blue Top Right */}
              <div className="absolute w-40 h-40 bg-[#ABC3FF] rounded-full right-24 top-8 z-0"></div>
              
              {/* Decorative Circle - Light Blue Bottom Left */}
              <div className="absolute w-40 h-40 bg-[#ABC3FF] rounded-full left-30 bottom-16 z-0"></div>

              {/* Main Image (Gambar 1) - Running - Center, Largest */}
              <div className="absolute left-24 top-16 w-[440px] h-[300px] rounded-[32px] overflow-hidden shadow-2xl z-10">
                <img
                  src={event1}
                  alt="Running event"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/420x280/1a1a1a/ffffff?text=Running"
                  }}
                />
              </div>

              {/* Image 2 - Basketball - Top Right Corner, Smaller */}
              <div className="absolute right-0 top-32 w-[240px] h-[180px] rounded-[28px] overflow-hidden shadow-2xl z-20">
                <img
                  src={event2}
                  alt="Basketball event"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/280x200/1a1a1a/ffffff?text=Basketball"
                  }}
                />
              </div>

              {/* Image 3 - Swimming - Bottom Center, Same Size as Image 2 */}
              <div className="absolute left-40 bottom-12 w-[240px] h-[160px] rounded-[28px] overflow-hidden shadow-2xl z-30">
                <img
                  src={event3}
                  alt="Swimming event"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/280x200/1a1a1a/ffffff?text=Swimming"
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Kesempatan nggak datang 2x<br />
                Ayo segera ikuti <span className="text-[#4177FF]">event terbatas!</span>
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Event SiMug dirancang untuk bikin kamu aktif, konsisten, dan terhubung dengan orang-orang yang punya tujuan yang sama.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E5ECFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="text-[#4177FF] font-semibold flex items-center gap-2 px-6 py-3 border-2 border-[#4177FF] rounded-full hover:bg-[#E5ECFF] transition-colors">
                Pelajari lebih lanjut
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
