import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForumBanner({ onBack }) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 h-55 overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-5 right-32 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-10 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>

            {/* Back Button */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-0 pt-6">
                <button
                    onClick={handleBack}
                    className="cursor-pointer flex items-center gap-2 text-white hover:text-white/90 transition-colors group"
                >
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium">Kembali</span>
                </button>
            </div>
        </div>
    );
}
