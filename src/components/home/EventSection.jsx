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
    <section className="relative bg-gradient-to-b from-white to-[#F8FAFF] py-8 min-[425px]:py-10 md:py-16 lg:py-20">
      <div className="w-full px-4 min-[425px]:px-5 md:px-6">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex gap-2 min-[425px]:gap-3 mb-5 min-[425px]:mb-6 md:mb-8">
            <div className="w-1 bg-[#4177FF] rounded-full"></div>
            <h2 className="text-xl min-[425px]:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Event Menarik
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Side - Images Collage */}
            <div className="relative h-[320px] min-[425px]:h-[360px] md:h-[450px] lg:h-[420px] xl:h-[500px] order-2 lg:order-1">
              {/* Decorative Circle - Light Blue Top Right */}
              <div className="absolute w-20 h-20 min-[425px]:w-24 min-[425px]:h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-[#ABC3FF] rounded-full right-8 min-[425px]:right-10 md:right-20 lg:right-16 xl:right-24 top-2 min-[425px]:top-4 md:top-6 lg:top-6 xl:top-8 z-0"></div>
              
              {/* Decorative Circle - Light Blue Bottom Left */}
              <div className="absolute w-20 h-20 min-[425px]:w-24 min-[425px]:h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-[#ABC3FF] rounded-full left-10 min-[425px]:left-14 md:left-24 lg:left-20 xl:left-30 bottom-6 min-[425px]:bottom-8 md:bottom-12 lg:bottom-10 xl:bottom-16 z-0"></div>

              {/* Main Image (Gambar 1) - Running - Center, Largest */}
              <div className="absolute left-4 min-[425px]:left-6 md:left-16 lg:left-12 xl:left-24 top-6 min-[425px]:top-8 md:top-12 lg:top-10 xl:top-16 w-[220px] min-[425px]:w-[260px] md:w-[360px] lg:w-[340px] xl:w-[440px] h-[160px] min-[425px]:h-[180px] md:h-[250px] lg:h-[230px] xl:h-[300px] rounded-[20px] min-[425px]:rounded-[22px] md:rounded-[28px] lg:rounded-[26px] xl:rounded-[32px] overflow-hidden shadow-2xl z-10">
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
              <div className="absolute right-0 top-16 min-[425px]:top-18 md:top-24 lg:top-20 xl:top-32 w-[120px] min-[425px]:w-[140px] md:w-[200px] lg:w-[180px] xl:w-[240px] h-[90px] min-[425px]:h-[105px] md:h-[150px] lg:h-[135px] xl:h-[180px] rounded-[16px] min-[425px]:rounded-[18px] md:rounded-[24px] lg:rounded-[22px] xl:rounded-[28px] overflow-hidden shadow-2xl z-20">
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
              <div className="absolute left-14 min-[425px]:left-18 md:left-28 lg:left-24 xl:left-40 bottom-4 min-[425px]:bottom-6 md:bottom-8 lg:bottom-8 xl:bottom-12 w-[120px] min-[425px]:w-[140px] md:w-[200px] lg:w-[180px] xl:w-[240px] h-[85px] min-[425px]:h-[95px] md:h-[135px] lg:h-[120px] xl:h-[160px] rounded-[16px] min-[425px]:rounded-[18px] md:rounded-[24px] lg:rounded-[22px] xl:rounded-[28px] overflow-hidden shadow-2xl z-30">
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
            <div className="order-1 lg:order-2">
              <h3 className="text-lg min-[425px]:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 min-[425px]:mb-4">
                Kesempatan nggak datang 2x<br />
                Ayo segera ikuti <span className="text-[#4177FF]">event terbatas!</span>
              </h3>
              
              <p className="text-xs min-[425px]:text-sm md:text-base text-gray-600 mb-5 min-[425px]:mb-6 md:mb-8 leading-relaxed">
                Event SiMug dirancang untuk bikin kamu aktif, konsisten, dan terhubung dengan orang-orang yang punya tujuan yang sama.
              </p>

              {/* Benefits List */}
              <div className="space-y-2.5 min-[425px]:space-y-3 md:space-y-4 mb-5 min-[425px]:mb-6 md:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2.5 min-[425px]:gap-3 md:gap-4">
                    <div className="w-9 h-9 min-[425px]:w-10 min-[425px]:h-10 md:w-12 md:h-12 bg-[#E5ECFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 min-[425px]:w-5 min-[425px]:h-5 md:w-6 md:h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs min-[425px]:text-sm md:text-base text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="text-[#4177FF] font-semibold flex items-center gap-1.5 min-[425px]:gap-2 px-4 min-[425px]:px-5 md:px-6 py-2 min-[425px]:py-2.5 md:py-3 border-2 border-[#4177FF] rounded-full hover:bg-[#E5ECFF] transition-colors text-xs min-[425px]:text-sm md:text-base">
                Pelajari lebih lanjut
                <svg className="w-3.5 h-3.5 min-[425px]:w-4 min-[425px]:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
