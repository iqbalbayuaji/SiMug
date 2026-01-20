import { useNavigate } from "react-router-dom"
import aiIcon from "../../assets/icon/mingcute_ai-fill.svg"
import chatAiIcon from "../../assets/icon/mingcute_chat-1-ai-fill.svg"

export default function MainContent({ recentLearning }) {
  const navigate = useNavigate()

  const handleCourseClick = (courseId) => {
    navigate(`/roadmap/${courseId}`)
  }
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Jadwalkan Target Belajar */}
      <div className="bg-[#F2F6FF] border-2 border-[#E2EAFF] rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[#4177FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-5 h-5 text-[#4177FF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#4177FF] mb-1">
              Jadwalkan "Target Belajar"
            </h3>
            <p className="text-sm text-[#4177FF]">
              Bangun kebiasaan belajar konsisten dengan menetapkan target harian.{" "}
              <a href="#" className="text-[#4177FF] font-medium hover:underline">
                Atur sekarang
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Pembelajaran Terakhir */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Pembelajaran Terakhir <span className="text-gray-400 font-normal text-base">3 topik</span>
          </h2>
          <button className="text-[#4177FF] text-sm font-medium hover:underline">
            Lihat semua
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentLearning.map((course) => (
            <div 
              key={course.id} 
              onClick={() => handleCourseClick(course.id)}
              className="bg-white rounded-2xl p-1.5 shadow-sm hover:shadow-md transition-shadow border border-[#CACACA] cursor-pointer"
            >
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
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-[#4177FF] h-2 rounded-full transition-all"
                      style={{ width: `${course.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saran dari SiMug & Topik Terfavorit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Saran dari SiMug */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E5EDFF] rounded-xl flex items-center justify-center">
                <img src={aiIcon} alt="AI" className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Saran dari SiMug</h3>
            </div>
            <button className="bg-[#E5EDFF] text-[#4177FF] px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-[#D5DDFF] transition-colors">
              Update
            </button>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Kamu telah menunjukkan konsistensi dan pemahaman teknik yang solid. Untuk hasil yang lebih maksimal, cobalah meningkatkan durasi dan intensitas latihan secara bertahap serta tetap rutin.
          </p>
        </div>

        {/* Topik Terfavorit */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E5EDFF] rounded-xl flex items-center justify-center">
                <img src={chatAiIcon} alt="Chat AI" className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Topik Terfavorit</h3>
            </div>
            <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </div>
          <div>
            <h4 className="font-bold text-[#4177FF] text-lg mb-2">Workout</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Materi workout menjadi pilihan favoritmu karena mampu membantu menjaga kebugaran dan meningkatkan energi secara konsisten.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
