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
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 last:mb-0">
            <div className="grid grid-cols-[40px_1fr] gap-x-4">
                {/* Row 1: Avatar & Header */}
                <div className={`w-10 h-10 ${thread.avatarColor} rounded-full`}></div>
                <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="font-bold text-gray-800">{thread.author}</h3>
                        •
                        <span className="text-blue-500 text-sm font-medium cursor-pointer hover:underline">Ikuti</span>
                    </div>
                    <div className="text-gray-400 text-xs">
                        <span>{thread.username}</span> • <span>{thread.time}</span>
                    </div>
                </div>

                {/* Row 2: Connecting Line & Question */}
                <div className="relative flex justify-center">
                    <div className="w-[2px] bg-gray-100 h-full"></div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                    <div className="text-xs text-gray-500 font-semibold mb-1">
                        Pertanyaan oleh <span className="text-gray-700">{thread.originalQuestion.author}</span>:
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 leading-snug">
                        {thread.originalQuestion.content}
                    </h4>
                    <div className="text-xs text-gray-400">Pertanyaan {thread.originalQuestion.time}</div>
                </div>

                {/* Row 3: Curve & Answer */}
                <div className="relative flex justify-center">
                    <div className="w-[2px] h-6 bg-gray-100 absolute top-0 left-1/2 -translate-x-1/2 hidden"></div> {/* Optional extension if needed */}
                    <div className="w-5 h-8 border-l-[2px] border-b-[2px] border-gray-100 rounded-bl-xl absolute top-0 left-1/2 -ml-[1px]"></div>
                </div>
                <div className="prose prose-sm text-gray-600 max-w-none pt-2">
                    <p className="whitespace-pre-line">{thread.answer}</p>
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
