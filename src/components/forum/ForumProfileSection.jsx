import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForumProfileSection({
    title = "Ngobrol Santai Pejuang LN",
    description = "Di sini, kita belajar bahasa tanpa tekanan, berbagi pengalaman, latihan ngobrol santai, dan saling menguatkan sesama pejuang luar negeri.",
    memberCount = "10.5k member",
    avatarColor = "bg-blue-500"
}) {
    const navigate = useNavigate();

    const handleMobileClick = () => {
        // Only navigate on mobile (viewport < 1024px)
        if (window.innerWidth < 1024) {
            navigate('/forum/beranda/about');
        }
    };
    return (
        <div className="relative max-w-7xl mx-auto px-5 lg:px-0">
            <div className="flex flex-col md:flex-row justify-between items-end -mt-12 mb-3 lg:mb-6 gap-6 lg:gap-6">

                {/* Left Side: Vertical Stack (Avatar -> Info) */}
                <div className="flex flex-col items-start">
                    {/* Avatar - Overlapping Banner */}
                    <div className={`relative z-10 lg:w-36 lg:h-36 w-26 h-26 ${avatarColor} rounded-full flex-shrink-0 border-4 border-white shadow-md`}></div>

                    {/* Info Stacked Below Avatar */}
                    <div className="mt-4 max-w-2xl items-center">
                        <h1
                            onClick={handleMobileClick}
                            className="text-2xl font-semibold lg:font-bold text-gray-900 mb-2 flex items-center gap-2 cursor-pointer lg:cursor-default"
                        >
                            {title}
                            <svg className="block lg:hidden w-5 h-5 mt-1 transition-transform hover:translate-x-1 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </h1>
                        <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-5 lg:mb-7">
                            {description}
                        </p>

                        {/* Stats and Button Row */}
                        <div className="flex flex-wrap items-center gap-3">
                            <button className=" cursor-pointer inline-flex items-center gap-2 px-6 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-sm font-bold transition-colors h-9">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                </svg>
                                Gabung Forum
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Social Actions */}
                <div className="flex gap-2 mb-0 lg:mb-1">
                    <button className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors text-gray-600" title="Copy Link">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </button>
                    <button className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors text-gray-600" title="X (Twitter)">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </button>
                    <button className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors text-gray-600" title="YouTube">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </button>
                    <button className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors text-gray-600" title="Instagram">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors text-gray-600" title="More">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
