import React from 'react';

const threads = [
    {
        id: 1,
        author: 'Affan Helmi',
        username: '@affanhelmi10',
        avatarColor: 'bg-emerald-500',
        time: 'Dijawab 1 minggu lalu',
        topic: 'Tips belajar bahasa buat yang sibuk kerja/kuliah?',
        originalQuestion: {
            author: '@faeyzafattr',
            content: 'Belajar bahasa asing mulai dari mana supaya nggak cepat nyerah dan benar-benar berkembang? Sejauh ini aku belajar bahasa asing ngerasa ga efektif banget',
            time: '4 hari lalu'
        },
        answer: 'Pertanyaan ini sangat umum, dan justru menandakan satu hal penting: kamu peduli dengan proses belajar, bukan cuma hasilnya. Banyak orang gagal belajar bahasa bukan karena kurang pintar, tapi karena salah memulai dan terlalu menuntut diri sendiri di awal. \n\nLangkah pertama yang paling penting adalah menentukan tujuan yang realistis. Jangan langsung berpikir "Aku mau lancar seperti native."',
        likes: 124,
        comments: 23,
    },
    // Add more dummy data if needed
    {
        id: 2,
        author: 'Rizki Fiko',
        username: '@rizkifiko',
        avatarColor: 'bg-indigo-500',
        time: 'Dijawab 2 hari lalu',
        topic: 'Gimana cara nambah kosakata tanpa harus ngafalin?',
        originalQuestion: {
            author: '@iannkriss',
            content: 'Ada tips gak buat nambah vocab tanpa harus buka kamus terus? Kayak bosen banget ngafalin satu-satu.',
            time: '1 minggu lalu'
        },
        answer: 'Coba baca buku atau nonton film dengan subtitle bahasa target, tapi jangan dipause tiap nemu kata baru. Coba tebak artinya dari konteks dulu.',
        likes: 85,
        comments: 12,
    }
];

const ThreadItem = ({ thread }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 last:mb-0 relative">
            <div className="flex items-start gap-4">
                {/* Timeline Line */}
                <div className="absolute left-[39px] top-16 bottom-0 w-[2px] bg-gray-100 last:hidden"></div>

                <div className={`w-10 h-10 ${thread.avatarColor} rounded-full flex-shrink-0`}></div>
                <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="font-bold text-gray-800">{thread.author}</h3>
                        <span className="text-blue-500 text-sm font-medium cursor-pointer hover:underline">Ikuti</span>
                    </div>
                    <div className="text-gray-400 text-xs mb-4">
                        <span>{thread.username}</span> • <span>{thread.time}</span>
                    </div>

                    {/* Original Question Card */}
                    <div className="bg-blue-50/50 rounded-lg p-4 mb-4 border border-blue-100">
                        <div className="text-xs text-gray-500 font-semibold mb-1">
                            Pertanyaan oleh <span className="text-gray-700">{thread.originalQuestion.author}</span>:
                        </div>
                        <h4 className="font-bold text-gray-800 mb-1 leading-snug">
                            {thread.originalQuestion.content}
                        </h4>
                        <div className="text-xs text-gray-400">Pertanyaan {thread.originalQuestion.time}</div>
                    </div>

                    {/* Answer Content */}
                    <div className="prose prose-sm text-gray-600 max-w-none">
                        <p className="whitespace-pre-line">{thread.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ThreadFeed() {
    return (
        <section>
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Threads dan Diskusi Harian</h2>
                    <p className="text-gray-500 text-sm">Pantau terus setiap update dari threads</p>
                </div>
                <div className="flex bg-gray-100 rounded-full p-1 gap-1">
                    <button className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full shadow-sm">Rekomendasi</button>
                    <button className="px-3 py-1 text-gray-500 hover:text-gray-700 text-xs font-medium rounded-full">Populer</button>
                    <button className="px-3 py-1 text-gray-500 hover:text-gray-700 text-xs font-medium rounded-full">Terbaru</button>
                </div>
            </div>

            <div>
                {threads.map(thread => (
                    <ThreadItem key={thread.id} thread={thread} />
                ))}
            </div>
        </section>
    );
}
