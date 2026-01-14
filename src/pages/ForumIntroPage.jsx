import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import icons
import iconOrang from '../assets/icon/orang.png';
import iconChat from '../assets/icon/chat.png';

export default function ForumIntroPage() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center font-sans">
            {/* Decorative Blobs - Behind Grid */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-46 h-46 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-46 h-46 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-46 h-46 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Grid Background - Confined to first circle with fade edge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(closest-side,black_70%,transparent_100%)] pointer-events-none"></div>

            {/* Central Light Glow */}
            <div className="fixed inset-0 bg-radial-gradient from-white/80 via-transparent to-transparent pointer-events-none"></div>

            {/* Orbit Animations Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                {/* Orbit 1 (Smallest) */}
                <div className="absolute w-[650px] h-[650px] border-[1.5px] border-blue-200 rounded-full animate-spin-slow drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                    <div className="absolute top-1/7 left-[8%] w-10 h-10 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center animate-reverse-spin transform -rotate-45">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>

                {/* Orbit 2 */}
                <div className="absolute w-[950px] h-[950px] border-[1.5px] border-blue-200/80 rounded-full animate-spin-slower drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                    <div className="absolute top-[10%] right-[18%] w-5 h-5 bg-blue-400 rounded-full animate-pulse shadow-md"></div>
                    <div className="absolute bottom-[16%] left-[10%] w-6 h-6 bg-indigo-300 rounded-full opacity-80"></div>
                    {/* New Object with Orang Icon */}
                    <div className="absolute top-[40%] text-transparent right-[-2.5%] w-12 h-12 bg-gradient-to-br from-[#6994FF] to-[#9EBAFF] rounded-xl shadow-lg flex items-center justify-center animate-reverse-spin-slower">
                        <img src={iconOrang} alt="User" className="w-7 h-7 object-contain brightness-0 invert" />
                    </div>
                </div>

                {/* Orbit 3 (Largest) */}
                <div className="absolute w-[1250px] h-[1250px] border-[1.5px] border-blue-200/60 rounded-full animate-spin-slowest drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <div className="absolute top-[19%] right-[8%] w-10 h-10 bg-white/60 backdrop-blur-md border-[2px] border-blue-200/80 rounded-full flex items-center justify-center animate-reverse-spin-slowest shadow-sm">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg"></div>
                    </div>
                    {/* New Object with Chat Icon */}
                    <div className="absolute bottom-[10%] right-[15%] w-12 h-12 bg-gradient-to-br from-[#6994FF] to-[#9EBAFF] rounded-full shadow-lg flex items-center justify-center animate-reverse-spin-slowest">
                        <img src={iconChat} alt="Chat" className="w-6 h-6 object-contain brightness-0 invert" />
                    </div>
                </div>

                {/* Additional Floating Elements */}
                <div className="absolute bottom-40 right-[20%] w-16 h-16 bg-blue-100 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-3xl px-6 pt-30">
                <div className="space-y-2 mb-4">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
                        Selamat datang di Forum SiMug
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-600 from- via-blue-600 via- to-cyan-500 to- bg-clip-text text-transparent pb-1">
                        Bertanya, Berbagi, Bertumbuh
                    </h2>
                </div>

                <div className=" md:px-27 mb-10">
                    <p className="text-base md:text-base text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-800">Forum SiMug</span> adalah ruang berbagi dan berdiskusi tentang
                        kebugaran, olahraga, dan nutrisi bersama komunitas yang
                        sejalan dengan tujuan sehatmu.
                    </p>
                </div>

                <button
                    onClick={() => navigate('/forum')}
                    className="group relative inline-flex items-center gap-2.5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40"
                    aria-label="Lanjut ke Forum"
                >
                    Selanjutnya
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>

                {/* Stats Cards */}
                <div className="flex justify-center gap-12 mt-16 px-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 transform rotate-[-2deg] hover:rotate-0 transition-all duration-300 hover:shadow-lg">
                        <div className="text-2xl font-semibold text-blue-600">100.000+</div>
                        <div className="text-sm text-gray-500 font-light tracking-wider mt-1">User Terhubung</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 transform rotate-[2deg] hover:rotate-0 transition-all duration-300 hover:shadow-lg">
                        <div className="text-2xl font-semibold text-blue-600">50.000+</div>
                        <div className="text-sm text-gray-500 font-light tracking-wider mt-1">Daftar Forum</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
