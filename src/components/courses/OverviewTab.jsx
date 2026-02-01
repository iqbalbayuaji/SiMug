import { FaCheckCircle, FaUsers, FaGraduationCap, FaRocket, FaBriefcase, FaCode } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'

export default function OverviewTab({ course }) {
  const targetAudience = [
    { icon: FaGraduationCap, text: 'Mahasiswa yang ingin mendalami skill baru' },
    { icon: FaRocket, text: 'Fresh graduate yang ingin meningkatkan daya saing' },
    { icon: FaBriefcase, text: 'Profesional yang ingin career switch' },
    { icon: FaCode, text: 'Developer yang ingin upgrade skill' },
  ]

  return (
    <div className="p-8 md:p-10">
      {/* Description Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <HiSparkles className="text-white text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Tentang Course Ini</h2>
        </div>
        <div className="prose prose-lg prose-gray max-w-none">
          {course.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* What You'll Learn - Modern Cards */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
            <FaCheckCircle className="text-white text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Yang Akan Kamu Pelajari</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {course.features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-2xl border border-emerald-100/50 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience - New Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
            <FaUsers className="text-white text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Untuk Siapa Course Ini?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {targetAudience.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-purple-50 via-white to-violet-50 rounded-2xl border border-purple-100/50 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md">
                <item.icon className="text-white text-lg" />
              </div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
            <HiLightningBolt className="text-white text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Prasyarat</h2>
        </div>
        <div className="bg-gradient-to-r from-orange-50 via-white to-amber-50 rounded-2xl border border-orange-100/50 p-6">
          <div className="space-y-4">
            {course.requirements.map((req, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-2.5"></span>
                <span className="text-gray-600">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
