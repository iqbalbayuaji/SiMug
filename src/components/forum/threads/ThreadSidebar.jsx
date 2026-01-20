import React from 'react';

export default function ThreadSidebar() {
    const questions = [
        {
            title: "Bahasa apa yang paling realistis untuk dipelajari dalam 6 bulan?",
            author: "@zidanikeee",
            time: "2 jam lalu"
        },
        {
            title: "Bagian tersulit saat latihan speaking itu apa?",
            author: "@zidanikeee",
            time: "10 menit lalu"
        },
        {
            title: "Metode belajar bahasa apa yang sudah kamu coba dan efektif?",
            author: "@zidanikeee",
            time: "3 menit lalu"
        },
        {
            title: "Target LN-mu (studi/kerja), dan level bahasa sekarang?",
            author: "@zidanikeee",
            time: "1 menit lalu"
        },
        {
            title: "Kalau harus latihan ngobrol rutin, kamu lebih pilih partner native atau sesama learner?",
            author: "@zidanikeee",
            time: "2 detik lalu"
        }
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sticky top-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 pb-3 border-b border-gray-100">
                <div className="relative">
                    <div className="absolute -left-5 top-1 bottom-1 w-1 bg-blue-600 rounded-r-full"></div>
                    <h3 className="font-bold text-gray-900 text-lg">Pertanyaan Hari Ini</h3>
                </div>
                <button className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline cursor-pointer">
                    Segarkan
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </div>

            {/* List */}
            <div className="space-y-4 pt-2">
                {questions.map((q, i) => (
                    <div key={i} className="group cursor-pointer">
                        <h4 className="font-semibold text-blue-500 text-[15px] leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                            {q.title}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                            <span className="text-gray-500">Oleh {q.author}</span>
                            <span>• {q.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
