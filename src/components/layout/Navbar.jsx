import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home")
  const [hoveredMenu, setHoveredMenu] = useState(null)

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Progres", path: "/progress" },
    { name: "Course", path: "/course", hasDropdown: true },
    { name: "Events", path: "/events", hasDropdown: true },
    { name: "Forum", path: "/forum" },
    { name: "SiMug AI", path: "/chatbot" }
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
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActiveMenu(item.name)}
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
                className={`relative flex items-center gap-1 text-sm font-medium transition-colors ${activeMenu === item.name ? "text-gray-900" : "text-[#1E1E1E] opacity-60"
                  }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {/* Active/Hover Underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-1 bg-[#4177FF] rounded-full transition-all duration-300 ${activeMenu === item.name && hoveredMenu === null
                      ? "w-full"
                      : activeMenu === item.name && hoveredMenu !== null && hoveredMenu !== item.name
                        ? "w-0"
                        : hoveredMenu === item.name
                          ? "w-full"
                          : "w-0"
                    }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Right Side - Notification & Profile */}
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </nav>
  )
}
