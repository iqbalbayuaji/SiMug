import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen relative overflow-hidden ">
            {/* Navigation Bar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                            SiMug
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                            <a href="#tentang" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                Tentang
                            </a>
                            <a href="#fitur" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                Fitur Kami
                            </a>
                            <a href="#course" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                Course Preview
                            </a>
                            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                FAQ
                            </a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3 lg:space-x-4">
                            <Link
                                to="/register"
                                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors px-4 py-2"
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/login"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-32">
                <div className="flex flex-col lg:flex-col items-center justify-between gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="grid place-items-center lg:text-center space-y-6 lg:space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-md">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-sm lg:text-base">#1 Platform Edukasi Kesehatan</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight flex flex-col items-center gap-3 lg:gap-3">
                            <span className="text-blue-600">Usaha Aja Gaakan Cukup</span>
                            <div className='flex items-center'>
                                <span className="text-gray-900">Tanpa Arah yang Jelas</span>
                                <span className="inline-flex items-center justify-center w-9 h-9 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-300 to-blue-600 rounded-xl lg:rounded-2xl ml-3 align-middle shadow-lg shadow-blue-400/70 rotate-350">
                                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>

                                </span>
                            </div>

                        </h1>

                        {/* Description */}
                        <p className="text-gray-900 text-base text-center lg:text-xl max-w-110 mx-auto lg:mx-0 mt-2 leading-relaxed">
                            Panduan sehat yang jelas, progresif, dan nggak ribet. Dari gratis sampai advance, semua ada jalurnya di <span className="font-bold text-gray-900">SiMug</span>
                        </p>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <Link
                                to="/register"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                            >
                                Gabung Sekarang
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            {/* Custom Animations */}
            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-40px) rotate(-5deg);
          }
          75% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}