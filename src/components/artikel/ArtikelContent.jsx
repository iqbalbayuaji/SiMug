import React, { useState } from 'react';

export default function ArtikelContent({ article }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    if (!article) {
        return (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
                <p className="text-gray-500">Artikel tidak ditemukan</p>
            </div>
        )
    }

    return (
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Featured Image with Padding */}
            <div className="p-5">
                <div className="relative w-full h-56 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden rounded-xl group">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* View Stats Overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="text-sm font-medium">4.2k</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span className="text-sm font-medium">1.3k</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="px-8 pb-8">
                {/* Title */}
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                    {article.title}
                </h1>

                {/* Author & Meta Info */}
                <div className="flex items-center gap-4 mb-6 pb-6 pt-2 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <img
                            src={article.authorAvatar}
                            alt={article.author}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="hidden lg:block">
                            <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                            <p className="text-xs text-gray-500">{article.time}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="ml-auto flex items-center gap-2">
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className={`px-4 py-2 cursor-pointer border rounded-full text-sm font-base transition-colors flex items-center gap-2 ${isLiked
                                ? 'border-red-500 bg-red-50 text-red-600'
                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <svg className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Suka
                        </button>
                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`px-4 py-2 border cursor-pointer rounded-full text-sm font-base transition-colors flex items-center gap-2 ${isSaved
                                ? 'border-blue-500 bg-blue-50 text-blue-600'
                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <svg className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            Simpan
                        </button>
                        <button className="p-2 border cursor-pointer border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Article Body */}
                <div
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </article>
    );
}
