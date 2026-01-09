import bicepsIcon from "../../assets/icon/biceps.svg"
import gymIcon from "../../assets/icon/iconoir_gym.svg"
import foodIcon from "../../assets/icon/food.svg"

export default function TopicsSection() {
  const topics = [
    {
      icon: bicepsIcon,
      title: "Kebugaran Tubuh",
      description: "Pelajari latihan dasar hingga lanjutan untuk membangun tubuh yang lebih kuat",
      gradient: "from-[#4177FF] to-[#1D56E5]"
    },
    {
      icon: gymIcon,
      title: "Dasar Olahraga",
      description: "Asah kemampuan basic sport seperti boxing, futsal, basket, dan olahraga lain",
      gradient: "from-[#4177FF] to-[#1D56E5]"
    },
    {
      icon: foodIcon,
      title: "Mengelola Nutrisi",
      description: "Pahami cara menyusun diet harian, bulking, atau weight management sesuai kebutuhan",
      gradient: "from-[#4177FF] to-[#1D56E5]"
    }
  ]

  return (
    <section className="relative bg-[#E5ECFF] py-16 overflow-hidden">
      {/* Decorative Dots - Top Left (Large circles) */}
      <div className="absolute top-0 left-0">
        <div className="w-32 h-32 bg-[#C0D2FF] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute top-12 left-0">
        <div className="w-20 h-20 bg-[#9AB7FF] rounded-full -translate-x-1/3"></div>
      </div>

      {/* Decorative Dots - Bottom Right (Large circles) */}
      <div className="absolute bottom-0 right-0">
        <div className="w-32 h-32 bg-[#C0D2FF] rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="absolute bottom-12 right-0">
        <div className="w-20 h-20 bg-[#9AB7FF] rounded-full translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] items-center">
          {/* Left - Header Text */}
          <div className="pr-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4177FF] mb-4">
              Apa saja topik utama
              <br />
              yang akan dipelajari?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Tentu ada banyak sekali topik yang bisa di eksplorasi. Namun, kebanyakan user akan terjun dahulu di topik ini.
            </p>
          </div>

          {/* Right - Cards Grid Horizontal */}
          <div className="grid md:grid-cols-3 gap-4 pl-16 ml-20">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${topic.gradient} rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <img src={topic.icon} alt={topic.title} className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                <p className="text-white/90 text-xs leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
