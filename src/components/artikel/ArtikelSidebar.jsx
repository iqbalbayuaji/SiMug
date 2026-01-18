import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtikelSidebar() {
    const relatedArticles = [
        {
            id: 1,
            title: "Mengapa Banyak Orang Gagal Konsisten Berolahraga, Padahal...",
            author: "Ronald Reynold",
            timeAgo: "2 hari lalu",
            views: "1.5K",
            bookmarks: "5.5K",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            title: "Tips Memulai Olahraga untuk Pemula yang Mudah Diterapkan",
            author: "Ronald Reynold",
            timeAgo: "2 hari lalu",
            views: "1.5K",
            bookmarks: "5.5K",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            title: "Manfaat Olahraga Rutin untuk Kesehatan Mental dan Fisik",
            author: "Ronald Reynold",
            timeAgo: "2 hari lalu",
            views: "1.5K",
            bookmarks: "5.5K",
            image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            title: "Cara Membuat Jadwal Olahraga yang Efektif dan Berkelanjutan",
            author: "Ronald Reynold",
            timeAgo: "2 hari lalu",
            views: "1.5K",
            bookmarks: "5.5K",
            image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop"
        }
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="p-4 border-b border-gray-100">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Artikel Lainnya</h2>
                        <p className="text-sm text-gray-500">Menampilkan beberapa artikel lain</p>
                    </div>
                    <Link
                        to="/artikel"
                        className="text-sm text-[#4177FF] hover:text-[#5B8FFF] font-medium flex items-center gap-1 transition-colors"
                    >
                        Segarkan
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Articles List */}
            <div className="divide-y divide-gray-100">
                {relatedArticles.map((article) => (
                    <Link
                        key={article.id}
                        to={`/artikel/${article.id}`}
                        className="block px-5 py-2.5 hover:bg-gray-50 transition-colors group"
                    >
                        <div className="flex gap-4 items-center">
                            {/* Thumbnail - Larger and more square */}
                            <div className="flex-shrink-0 w-35 h-23 rounded-xl overflow-hidden bg-gray-100">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-[#4177FF] transition-colors leading-snug">
                                        {article.title}
                                    </h3>

                                    {/* Stats */}
                                    <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-1">
                                        <span className="font-semibold text-xs">{article.views}</span>
                                        <span className="font-semibold text-xs">Suka</span>
                                        <span>•</span>
                                        <span className="font-semibold text-xs">{article.bookmarks}</span>
                                        <span className="font-semibold text-xs">Dibaca</span>
                                    </div>
                                </div>

                                {/* Author & Time */}
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span className="font-medium">{article.author}</span>
                                    <span>•</span>
                                    <span>{article.timeAgo}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
