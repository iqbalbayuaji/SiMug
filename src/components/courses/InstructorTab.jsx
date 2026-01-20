import { FaStar, FaUsers, FaBookOpen, FaCheckCircle } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'

export default function InstructorTab({ course }) {
  return (
    <div className="p-8 md:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
          <HiAcademicCap className="text-white text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Tentang Instruktur</h2>
      </div>
      
      {/* Instructor Card */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-8 border border-blue-100/50">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-40"></div>
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="relative w-36 h-36 rounded-3xl object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full border-4 border-white flex items-center justify-center">
                <FaCheckCircle className="text-white text-sm" />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
            <p className="text-blue-600 font-semibold mb-6">{course.instructor.title}</p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <FaStar />
                  <span className="font-bold text-gray-900">{course.rating}</span>
                </div>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
                  <FaUsers />
                  <span className="font-bold text-gray-900">{course.instructor.totalStudents.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500">Siswa</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                <div className="flex items-center justify-center gap-1 text-indigo-500 mb-1">
                  <FaBookOpen />
                  <span className="font-bold text-gray-900">{course.instructor.totalCourses}</span>
                </div>
                <p className="text-xs text-gray-500">Courses</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{course.instructor.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
