import { Link } from "react-router-dom"
import logo from "../assets/images/logo-simug.png"
import notfoundMascot from "../assets/images/notfoundmascot.png"

export default function NotFoundPage() {
  return (
    <div className="h-screen bg-[#EDF2FF] flex flex-col overflow-hidden">
      {/* Navbar - Simplified without navigation */}
      <nav className="bg-white border-b border-gray-200 z-50 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-1.5 sm:gap-2">
              <img src={logo} alt="SiMUG Logo" className="w-10 h-10 sm:w-14 sm:h-14" />
              <span className="text-lg sm:text-xl font-bold text-gray-900">SiMUG</span>
            </Link>

            {/* Right Side - Notification & Profile Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Notification Bell */}
              <button className="relative w-7 h-7 sm:w-8 sm:h-8 bg-[#D9E4FF] rounded-full flex items-center justify-center hover:bg-[#D0DFFF] transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute bottom-4 sm:bottom-5 left-5 sm:left-6 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#4177FF] rounded-full border-2 border-white"></span>
              </button>

              {/* Profile Picture */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D9E4FF] overflow-hidden border-2 border-[#4177FF] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        {/* 404 Container with Mascot */}
        <div className="relative flex flex-col items-center">
          {/* 404 Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span 
              className="text-[140px] sm:text-[180px] md:text-[220px] lg:text-[260px] font-bold leading-none select-none"
              style={{ color: '#D9E4FF' }}
            >
              404
            </span>
          </div>

          {/* Mascot Image */}
          <div className="relative z-10">
            <img 
              src={notfoundMascot} 
              alt="Not Found Mascot" 
              className="w-64 sm:w-80 md:w-96 lg:w-[30rem] h-auto drop-shadow-lg"
            />
            {/* Shadow beneath mascot */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-[#4177FF]/20 rounded-full blur-md"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="-mt-8 sm:-mt-12 relative z-20 text-center max-w-lg mx-auto">
          {/* Main Title */}
          <h1 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 whitespace-nowrap"
            style={{ color: '#B9C6E7' }}
          >
            Hmm... Kayaknya Mainmu Kejauhan
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6"
            style={{ color: '#707070' }}
          >
            Sepertinya halaman yang kamu cari ngga ada deh. Coba cari halaman lain atau kembali ke halaman sebelumnya.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/home"
            className="inline-flex items-center gap-2 bg-[#4177FF] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#3666E5] transition-all duration-300 shadow-lg shadow-[#4177FF]/30 hover:shadow-xl hover:shadow-[#4177FF]/40 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  )
}
