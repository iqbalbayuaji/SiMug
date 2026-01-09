import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home")

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Progres", path: "/progress" },
    { name: "Course", path: "/course", hasDropdown: true },
    { name: "Events", path: "/events", hasDropdown: true },
    { name: "Forum", path: "/forum" },
    { name: "SiMug AI", path: "/ai" }
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4177FF] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">SiMUG</span>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActiveMenu(item.name)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  activeMenu === item.name
                    ? "text-[#4177FF]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Notification & Profile */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              {/* Notification Badge */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#4177FF] rounded-full"></span>
            </button>

            {/* Profile Picture */}
            <button className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden hover:ring-2 hover:ring-[#4177FF] transition-all">
              <img 
                src="https://ui-avatars.com/api/?name=Rizki+Fiko&background=4177FF&color=fff" 
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
