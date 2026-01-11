import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home")
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [showCourseDropdown, setShowCourseDropdown] = useState(false)

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Progres", path: "/progress" },
    { name: "Course", path: "/course", hasDropdown: true },
    { name: "Events", path: "/events", hasDropdown: true },
    { name: "Forum", path: "/forum" },
    { name: "SiMug AI", path: "/ai" }
  ]

  const courseCategories = [
    {
      title: "Kebugaran dan Fisik",
      items: [
        { name: "Fitness Fundamental Pemula", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "💪" },
        { name: "Bodyweight Training di Rumah", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🏋️" },
        { name: "Gym Starter Program", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🏃" },
        { name: "Fat Loss Program Berkelanjutan", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🔥" },
        { name: "Muscle Building untuk Pemula", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "💪" }
      ]
    },
    {
      title: "Sports & Skill Training",
      items: [
        { name: "Basic Boxing Training", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🥊" },
        { name: "Basic Futsal & Sepak Bola", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "⚽" },
        { name: "Basketball Skill Training", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🏀" },
        { name: "Speed & Agility Training", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "⚡" },
        { name: "Atletik Pemula & Expert", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🏃" }
      ]
    },
    {
      title: "Nutrisi & Gaya Hidup",
      items: [
        { name: "Basic Nutrition 101", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🍎" },
        { name: "Meal Prep Gaya Hidup Sibuk", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🍱" },
        { name: "Mental Health untuk Pemula", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🧠" },
        { name: "Injury & Recovery Dasar", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "🩹" },
        { name: "Sleep Optimization", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: "😴", badge: "Baru" }
      ]
    }
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <img src={logo} alt="SiMUG Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">SiMUG</span>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  setHoveredMenu(item.name)
                  if (item.name === "Course") setShowCourseDropdown(true)
                }}
              >
                <Link
                  to={item.path}
                  onClick={() => setActiveMenu(item.name)}
                  className={`relative flex items-center gap-1 text-sm font-medium transition-colors ${
                    activeMenu === item.name ? "text-gray-900" : "text-[#1E1E1E] opacity-60"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  )}
                  {/* Active/Hover Underline */}
                  <span 
                    className={`absolute -bottom-2 left-0 h-1 bg-[#4177FF] rounded-full transition-all duration-300 ${
                      activeMenu === item.name && hoveredMenu === null
                        ? "w-full" 
                        : activeMenu === item.name && hoveredMenu !== null && hoveredMenu !== item.name
                        ? "w-0"
                        : hoveredMenu === item.name
                        ? "w-full"
                        : "w-0"
                    }`}
                  ></span>
                </Link>

                {/* Course Dropdown */}
                {item.name === "Course" && showCourseDropdown && (
                  <div 
                    className="fixed left-0 right-0 top-[73px] bg-white shadow-2xl border-t border-gray-100 z-50"
                    onMouseLeave={() => {
                      setShowCourseDropdown(false)
                      setHoveredMenu(null)
                    }}
                  >
                    <div className="max-w-7xl mx-auto px-6 py-8">
                      <div className="grid grid-cols-3 gap-8">
                        {courseCategories.map((category, idx) => (
                          <div key={idx}>
                            <h3 className="font-bold text-gray-900 mb-4">{category.title}</h3>
                            <div className="space-y-3">
                              {category.items.map((course, courseIdx) => (
                                <a
                                  key={courseIdx}
                                  href="#"
                                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                  <div className="w-10 h-10 bg-[#B9CDFF] rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                                    {course.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <p className="font-medium text-sm text-gray-900 group-hover:text-[#4177FF] transition-colors">
                                        {course.name}
                                      </p>
                                      {course.badge && (
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                          {course.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">{course.desc}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-600">
                          Tidak menemukan course yang dicari?{" "}
                          <a href="#" className="text-[#4177FF] font-semibold hover:underline">
                            Eksplorasi lebih banyak
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Notification & Profile */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative w-8 h-8 bg-[#D9E4FF] rounded-full flex items-center justify-center hover:bg-[#D0DFFF] transition-colors">
              <svg className="w-6 h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              {/* Notification Badge */}
              <span className="absolute bottom-5 left-6 w-3.5 h-3.5 bg-[#4177FF] rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Picture */}
            <button className="w-12 h-12 rounded-full bg-white overflow-hidden border-3 border-[#4177FF] hover:border-[#5B8FFF] transition-all">
              <img 
                src="https://ui-avatars.com/api/?name=Rizki+Fiko&background=E5ECFF&color=4177FF" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
