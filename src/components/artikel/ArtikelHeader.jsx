import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtikelHeader() {
    return (
        <div className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Back Button */}
                    <Link
                        to="/forum"
                        className="flex items-center gap-2 text-[#4177FF] hover:text-[#5B8FFF] transition-colors font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Kembali
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Telusuri artikel, threads, atau forum..."
                                className="w-full px-4 py-2.5 pl-10 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent transition-all"
                            />
                            <svg
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 bg-[#4177FF] hover:bg-[#5B8FFF] text-white rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md">
                            Cari
                        </button>
                        <button className="px-5 py-2.5 bg-[#4177FF] hover:bg-[#5B8FFF] text-white rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Gabung Forum
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
