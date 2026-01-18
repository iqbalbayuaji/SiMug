import React, { useState } from 'react';

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

import ThreadItem from './ThreadItem';

export default function ThreadFeed() {
    const [activeTab, setActiveTab] = useState('Rekomendasi');
    const tabs = ['Rekomendasi', 'Populer', 'Terbaru'];

    return (
        <section>
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Threads dan Diskusi Harian</h2>
                    <p className="text-gray-500 text-sm">Pantau terus setiap update dari threads</p>
                </div>
                <div className="flex bg-gray-100 rounded-full p-1 gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1 cursor-pointer text-xs font-medium rounded-full transition-all duration-200 active:scale-95 ${activeTab === tab
                                ? 'bg-blue-500 text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
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
