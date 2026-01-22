import React, { useState } from 'react';

const threads = [
    {
        id: 1,
        author: 'Affan Helmi',
        username: '@affanhelmi10',
        avatarColor: 'bg-emerald-500',
        time: 'Dijawab 1 minggu lalu',
        topic: 'Tips mulai lari pagi buat yang susah bangun tidur?',
        originalQuestion: {
            author: '@faeyzafattr',
            content: 'Halo, ada tips nggak supaya bisa konsisten lari pagi? Aku selalu susah bangun tidur, padahal udah pasang alarm banyak-banyak.',
            time: '4 hari lalu'
        },
        answer: 'Kuncinya bukan di alarm, tapi di persiapan malam sebelumnya. Coba siapkan baju lari dan sepatu tepat di depan pintu kamar. Selain itu, tidurlah lebih awal dan jangan main HP sebelum tidur. Mulai dengan durasi singkat, misalnya 10-15 menit saja agar beban mentalnya tidak terlalu berat.',
        likes: 124,
        comments: 23,
    },
    {
        id: 2,
        author: 'Rizki Fiko',
        username: '@rizkifiko',
        avatarColor: 'bg-indigo-500',
        time: 'Dijawab 2 hari lalu',
        topic: 'Berhenti minum manis bikin badan lebih enteng nggak sih?',
        originalQuestion: {
            author: '@iannkriss',
            content: 'Lagi coba diet no-sugar, tapi susah banget nahan godaan boba. Seberapa ngaruh sih kalau kita beneran stop minum manis?',
            time: '1 minggu lalu'
        },
        answer: 'Sangat berpengaruh! Dalam 2 minggu saja, biasanya kamu akan merasa kadar energi lebih stabil dan perut tidak mudah begah. Coba ganti minuman manis dengan infused water atau teh hijau tanpa gula. Kuncinya adalah substitusi, bukan sekadar menahan lapar.',
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
            <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4 sm:gap-0">
                <div className="lg:mb-0 mb-1.5">
                    <h2 className="text-lg lg:text-xl font-bold text-gray-800">Threads dan Diskusi Harian</h2>
                    <p className="text-gray-500 text-xs lg:text-sm">Pantau terus setiap update dari threads</p>
                </div>
                <div className="lg:block hidden flex bg-gray-100 rounded-full p-1 gap-1 self-start sm:self-auto overflow-x-auto max-w-full">
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
                {threads.map((thread, index) => (
                    <ThreadItem key={thread.id} thread={thread} isFirst={index === 0} />
                ))}
            </div>
        </section>
    );
}
