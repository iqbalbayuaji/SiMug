import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function EventsIntroPage() {
    const navigate = useNavigate()

    return (
        <div className="relative h-screen bg-white overflow-hidden flex flex-col font-sans">

            <main className="flex-grow flex flex-col items-center justify-center relative">
                {/* Decorative Background Elements - aligned with ForumIntroPage style */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-3xl opacity-90"></div>

                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/60 rounded-full blur-3xl opacity-90"></div>

                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(#4177FF 1px, transparent 1px), linear-gradient(90deg, #4177FF 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto">
                    {/* Top Lefish */}
                    <div className="absolute top-20 left-10 md:left-40 animate-bounce-slow" style={{ animationDuration: '3s' }}>
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5B8FFF] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 text-white p-3">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                    </div>

                    {/* Top Centery */}
                    <div className="absolute top-10 left-1/2 -translate-x-12 animate-bounce-slow" style={{ animationDuration: '4s' }}>
                        <div className="w-10 h-10 bg-[#A6C5FF] rounded-xl flex items-center justify-center shadow-lg transform rotate-6 text-white p-2">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Top Rightish */}
                    <div className="absolute top-24 right-10 md:right-32 animate-bounce-slow" style={{ animationDuration: '3.5s' }}>
                        <div className="w-14 h-14 bg-[#5B8FFF] rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 text-white p-3">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Leftish */}
                    <div className="absolute bottom-40 left-20 hidden md:block animate-bounce-slow" style={{ animationDuration: '4.5s' }}>
                        <div className="w-12 h-12 bg-[#A6C5FF] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 text-white p-3">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-center max-w-3xl px-6 lg:pt-10 pt-20 md:pt-20">
                    <div className="space-y-2 mb-4">
                        <h1 className="text-3xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent tracking-tight">
                            Temukan Campaign dan Aktivitas
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 pb-1">
                            Resmi yang Sedang Berlangsung
                        </h2>
                    </div>

                    <div className="md:px-12 mb-10">
                        <p className="text-base md:text-base text-gray-600 leading-relaxed">
                            <span className="font-semibold text-gray-800">SiMug</span> bekerja sama dengan berbagai brand kesehatan untuk menghadirkan event dan campaign menarik.
                            Setiap kegiatan dirancang agar relevan, dan memberi manfaat bagi para penggunanya.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate('/events')}
                        className="cursor-pointer group relative inline-flex items-center gap-2.5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40"
                    >
                        Selanjutnya
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>

                    <div className="flex lg:flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 mt-16 px-4">

                        <div className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-lg w-40 sm:w-auto">
                            <div className="text-xl sm:text-2xl font-semibold text-blue-600">1.000+</div>
                            <div className="text-sm text-gray-500 font-light tracking-wider mt-1">Event Per Tahun</div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 transform rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-lg w-40 sm:w-auto">
                            <div className="text-xl sm:text-2xl font-semibold text-blue-600">50.000+</div>
                            <div className="text-sm text-gray-500 font-light tracking-wider mt-1">User Bergabung</div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Custom Keyframe Styles required for the animation */}
            <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>


        </div>
    )
}
