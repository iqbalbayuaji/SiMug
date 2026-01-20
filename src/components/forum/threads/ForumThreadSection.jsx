import React from 'react';
import ThreadItem from './ThreadItem';
import ThreadSidebar from './ThreadSidebar';

export default function ForumThreadSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Thread Feed (Left) */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Blue Header Section */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold mb-1">Threads Forum</h2>
                            <p className="text-blue-100 text-sm">Berisi tanya-jawab khusus forum.</p>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <input
                                    type="text"
                                    placeholder="Telusuri threads..."
                                    className="w-full pl-10 pr-16 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                />
                                <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        <ThreadItem />
                        <ThreadItem
                            avatarColor="bg-blue-500"
                            name="Dimas Anggara"
                            username="@dimas99"
                            question={{
                                author: "@sarahjkt",
                                text: "Apakah sertifikat TOEFL ITP masih relevan untuk apply beasiswa tahun ini?",
                                time: "Pertanyaan 5 jam lalu"
                            }}
                            content="Masih sangat relevan, terutama untuk beasiswa dalam negeri atau universitas di Asia. Namun untuk Eropa dan US, saya sarankan ambil IELTS atau TOEFL iBT karena lebih diakui secara global."
                        />
                    </div>
                </div>

                {/* Right Sidebar (Questions) */}
                <div className="w-full lg:w-[350px] flex-shrink-0">
                    <ThreadSidebar />
                </div>
            </div>
        </div>
    );
}
