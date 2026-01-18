import React from 'react';
import { Link } from 'react-router-dom';
import iconOrang from '../../assets/icon/orang.png';

export default function ForumHeader({
    showBackButton = false,
    backTo = "/forum",
    title = "Artikel Trend Minggu Ini",
    subtitle = "Berikut artikel yang trending minggu ini"
}) {
    return (
        <div className="bg-white py-3 px-6 sticky top-0 z-40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left Side: Page Title or Back Button */}
                <div className="flex-1">
                    {showBackButton ? (
                        <Link
                            to={backTo}
                            className="inline-flex items-center gap-2 text-[#4177FF] hover:text-[#5B8FFF] transition-colors font-medium text-base"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Kembali
                        </Link>
                    ) : (
                        <>
                            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
                            <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-96">
                        <input
                            type="text"
                            placeholder="Telusuri artikel, threads, atau forum..."
                            className="w-full pl-10 pr-16 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                        <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-colors">
                            Cari
                        </button>
                    </div>

                    <button className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-sm shadow-blue-500/30 transition-all hover:translate-y-[-1px]">
                        <div className="absolute -right-3 -bottom-6 w-10 h-10 bg-white/20 rounded-full pointer-events-none"></div>
                        <div className="absolute -right-4 bottom-6 w-10 h-10 bg-white/20 rounded-full pointer-events-none"></div>
                        <div className="relative flex items-center gap-2 font-medium">
                            <img src={iconOrang} alt="Gabung" className="w-5 h-4 brightness-0 invert" />
                            Gabung Forum
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
