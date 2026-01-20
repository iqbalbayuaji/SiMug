import { FaBookOpen, FaClock, FaChevronDown, FaPlay, FaLock } from 'react-icons/fa'

export default function CurriculumTab({ course, expandedModules, toggleModule }) {
  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <FaBookOpen className="text-white text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Kurikulum Course</h2>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-xl">
          <span className="font-semibold text-gray-900">{course.totalModules} modul</span>
          <span>•</span>
          <span className="font-semibold text-gray-900">{course.totalLessons} materi</span>
          <span>•</span>
          <span className="font-semibold text-gray-900">{course.duration}</span>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-600">Progress Keseluruhan</span>
          <span className="text-sm font-bold text-blue-600">0%</span>
        </div>
        <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-0 transition-all duration-500"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Mulai belajar untuk melacak progresmu</p>
      </div>

      <div className="space-y-4">
        {course.curriculum.map((module) => (
          <div 
            key={module.moduleId} 
            className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
          >
            {/* Module Header */}
            <button
              onClick={() => toggleModule(module.moduleId)}
              className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                  {String(module.moduleId).padStart(2, '0')}
                </span>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{module.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <FaBookOpen className="text-xs" />
                    {module.lessons.length} materi
                    <span>•</span>
                    <FaClock className="text-xs" />
                    {module.duration}
                  </p>
                </div>
              </div>
              <FaChevronDown
                className={`text-gray-400 group-hover:text-blue-500 transition-all duration-300 ${expandedModules.includes(module.moduleId) ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Module Lessons */}
            {expandedModules.includes(module.moduleId) && (
              <div className="divide-y divide-gray-50 bg-white">
                {module.lessons.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    className="flex items-center justify-between p-4 hover:bg-blue-50/50 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
                        {lesson.isPreview ? (
                          <FaPlay className="text-blue-600 text-sm" />
                        ) : (
                          <FaLock className="text-gray-400 text-sm" />
                        )}
                      </span>
                      <div>
                        <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">{lesson.title}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          <FaClock className="text-xs" />
                          {lesson.duration}
                        </p>
                      </div>
                    </div>
                    {lesson.isPreview && (
                      <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/25">
                        Preview
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
