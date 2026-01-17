import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import vegan from "../../assets/images/vegan.png"

// Import course icons
import gymIcon from "../../assets/icon/course/iconoir_gym.svg"
import bodyweightIcon from "../../assets/icon/course/bodyweight.svg"
import runningIcon from "../../assets/icon/course/running.svg"
import fatlossIcon from "../../assets/icon/course/fatloss.svg"
import muscleBuildingIcon from "../../assets/icon/course/muscle-building.svg"
import boxingIcon from "../../assets/icon/course/boxing.svg"
import soccerIcon from "../../assets/icon/course/soccer-ball.svg"
import basketballIcon from "../../assets/icon/course/basketball.svg"
import speedIcon from "../../assets/icon/course/speed.svg"
import foodIcon from "../../assets/icon/course/ep_food.svg"
import mealIcon from "../../assets/icon/course/meal.svg"
import mentalHealthIcon from "../../assets/icon/course/mental-health.svg"
import injuryIcon from "../../assets/icon/course/injury.svg"
import sleepIcon from "../../assets/icon/course/sleep.svg"
import sixPack from "../../assets/icon/course/hugeicons_body-part-muscle.svg"

export default function Navbar() {
  const location = useLocation()
  const [activeMenu, setActiveMenu] = useState("Home")
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [showCourseDropdown, setShowCourseDropdown] = useState(false)
  const [showEventsDropdown, setShowEventsDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Update active menu based on current path
  useEffect(() => {
    const currentPath = location.pathname
    
    // Check if on courses pages
    if (currentPath.startsWith('/courses')) {
      setActiveMenu('Course')
      return
    }
    
    const activeItem = menuItems.find(item => item.path === currentPath)
    if (activeItem) {
      setActiveMenu(activeItem.name)
    }
  }, [location.pathname])

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Progres", path: "/progress" },
    { name: "Course", path: "/course", hasDropdown: true },
    { name: "Events", path: "/events", hasDropdown: true },
    { name: "Forum", path: "/forum" },
    { name: "SiMug AI", path: "/chatbot" }
  ]

  const eventsList = [
    {
      title: "SiMug 14 Days Healthy Challenge",
      desc: "Event tantangan 14 hari untuk membangun kebiasaan hidup sehat melalui workout ringan, pola makan teratur, dan daily check-in."
    },
    {
      title: "Sport Weekend: Train with the Expert",
      desc: "Sesi latihan eksklusif bersama mentor profesional (boxing, fitness, atau running) yang dikemas santai dan interaktif."
    },
    {
      title: "Nutrition Reset Bootcamp",
      desc: "Program singkat untuk membantu peserta memahami dasar nutrisi, meal planning, dan pola makan sehat sesuai tujuan"
    }
  ]

  const courseCategories = [
    {
      title: "Kebugaran dan Fisik",
      items: [
        { name: "Fitness Fundamental Pemula", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: gymIcon },
        { name: "Bodyweight Training di Rumah", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: bodyweightIcon },
        { name: "Gym Starter Program", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: sixPack },
        { name: "Fat Loss Program Berkelanjutan", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: fatlossIcon },
        { name: "Muscle Building untuk Pemula", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: muscleBuildingIcon }
      ]
    },
    {
      title: "Sports & Skill Training",
      items: [
        { name: "Basic Boxing Training", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: boxingIcon },
        { name: "Basic Futsal & Sepak Bola", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: soccerIcon },
        { name: "Basketball Skill Training", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: basketballIcon },
        { name: "Speed & Agility Training", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: speedIcon },
        { name: "Atletik Pemula & Expert", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: runningIcon }
      ]
    },
    {
      title: "Nutrisi & Gaya Hidup",
      items: [
        { name: "Basic Nutrition 101", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: foodIcon },
        { name: "Meal Prep Gaya Hidup Sibuk", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: mealIcon },
        { name: "Mental Health untuk Pemula", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: mentalHealthIcon },
        { name: "Injury & Recovery Dasar", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: injuryIcon },
        { name: "Sleep Optimization", desc: "Dasar latihan tubuh dan rutinitas aman.", icon: sleepIcon, badge: "Baru" }
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
                  if (item.name === "Course") {
                    setShowCourseDropdown(true)
                    setShowEventsDropdown(false)
                  }
                  if (item.name === "Events") {
                    setShowEventsDropdown(true)
                    setShowCourseDropdown(false)
                  }
                  // Close all dropdowns when hovering other menu items
                  if (item.name !== "Course" && item.name !== "Events") {
                    setShowCourseDropdown(false)
                    setShowEventsDropdown(false)
                  }
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
                                <Link
                                  key={courseIdx}
                                  to="/courses"
                                  onClick={() => setShowCourseDropdown(false)}
                                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#EAF0FF] transition-colors group"
                                >
                                  <div className="w-12 h-12 bg-[#C5D9FF] rounded-full flex items-center justify-center shrink-0">
                                    <img src={course.icon} alt={course.name} className="w-6 h-6" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <p className="font-bold text-base text-gray-900 group-hover:text-gray-900 transition-colors">
                                        {course.name}
                                      </p>
                                      {course.badge && (
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                          {course.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{course.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-[#4177FF] opacity-40 text-left"/>      
                        <p className="text-sm text-gray-600">
                          Tidak menemukan course yang dicari?{" "}
                          <Link to="/courses" onClick={() => setShowCourseDropdown(false)} className="text-[#4177FF] font-semibold hover:underline">
                            Eksplorasi lebih banyak
                          </Link>
                        </p>
                    </div>
                  </div>
                )}

                {/* Events Dropdown */}
                {item.name === "Events" && showEventsDropdown && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] bg-white shadow-2xl rounded-3xl border border-gray-100 z-50"
                    onMouseLeave={() => {
                      setShowEventsDropdown(false)
                      setHoveredMenu(null)
                    }}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Left Column - Events List */}
                        <div>
                          <div className="space-y-3">
                            {eventsList.map((event, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="block p-3 rounded-2xl hover:bg-[#EAF0FF] transition-colors group"
                              >
                                <h4 className="font-bold text-sm text-gray-900 mb-1">
                                  {event.title}
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  {event.desc}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Right Column - Promo Card */}
                        <div className="bg-gradient-to-br from-[#E5ECFF] to-[#F0F5FF] rounded-2xl p-4 flex flex-col">
                          <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-200 h-32">
                            <img 
                              src={vegan} 
                              alt="Event Promo"
                              className="w-full h-full object-cover"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button className="w-12 h-12 bg-[#000000] opacity-70 rounded-full flex items-center justify-center transition-colors shadow-lg">
                                <svg className="w-6 h-6 text-[#FFFFFF] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <h3 className="font-bold text-base text-[#4177FF] mb-2">
                            Jangan sampai kelewatan!
                          </h3>
                          <p className="text-xs text-gray-700 mb-3 flex-1">
                            Kamu cuma punya kesempatan sekali untuk ikut, segera daftarkan dirimu dan dapatkan benefit sebanyak mungkin dari event ini!
                          </p>
                          <button className="bg-[#4177FF] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#3666E5] transition-colors w-full flex items-center justify-center gap-2">
                            Kunjungi
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Notification & Profile */}
          <div className="hidden md:flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative w-8 h-8 bg-[#D9E4FF] rounded-full flex items-center justify-center hover:bg-[#D0DFFF] transition-colors">
              <svg className="w-6 h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActiveMenu(item.name)
                  setIsMobileMenuOpen(false)
                }}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeMenu === item.name
                    ? "bg-[#E5ECFF] text-[#4177FF]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile - Notification & Profile */}
          <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-3">
            <button className="relative w-10 h-10 bg-[#D9E4FF] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="w-10 h-10 rounded-full bg-white overflow-hidden border-2 border-[#4177FF]">
              <img
                src="https://ui-avatars.com/api/?name=Rizki+Fiko&background=E5ECFF&color=4177FF"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
            <span className="text-sm font-medium text-gray-900">Rizki Fiko</span>
          </div>
        </div>
      )}
    </nav>
  )
}
