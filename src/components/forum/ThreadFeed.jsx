import React, { useState } from 'react';
import profileAffan from '../../assets/images/profile2.jpg';
import profileRizki from '../../assets/images/profile3.jpg';

const threads = [
    {
        id: 1,
        author: 'Affan Helmi',
        username: '@affanhelmi10',
        avatarColor: 'bg-emerald-500',
        avatar: profileAffan,
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
        avatar: profileRizki,
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
    },
    {
        id: 3,
        author: 'Dinda Saraswati',
        username: '@dindasrsw',
        avatarColor: 'bg-pink-500',
        avatar: null,
        time: 'Dijawab 3 hari lalu',
        topic: 'Yoga atau pilates, mana yang lebih cocok untuk pemula?',
        originalQuestion: {
            author: '@melissaptr',
            content: 'Aku pengen mulai olahraga yang low impact tapi efektif. Bingung pilih yoga atau pilates, mana yang lebih gampang buat pemula ya?',
            time: '5 hari lalu'
        },
        answer: 'Keduanya bagus, tapi untuk pemula aku rekomendasikan yoga dulu. Gerakannya lebih slow dan fokus ke pernapasan, jadi lebih mudah diikuti. Pilates lebih fokus ke core strength dan butuh kontrol tubuh yang lebih baik. Coba yoga dulu 2-3 bulan, baru explore pilates.',
        likes: 67,
        comments: 15,
    },
    {
        id: 4,
        author: 'Arya Pratama',
        username: '@aryaprtm',
        avatarColor: 'bg-teal-500',
        avatar: null,
        time: 'Dijawab 5 jam lalu',
        topic: 'Protein shake wajib atau bisa diganti makanan biasa?',
        originalQuestion: {
            author: '@kevinwjy',
            content: 'Lagi program bulking nih, tapi budget terbatas. Protein shake itu wajib nggak sih? Atau bisa diganti sama telur dan ayam aja?',
            time: '1 hari lalu'
        },
        answer: 'Protein shake itu cuma suplemen, bukan keharusan. Kalau budget terbatas, fokus ke sumber protein alami seperti telur, ayam, tempe, dan ikan. Lebih murah dan nutrisinya lebih lengkap. Protein shake hanya untuk kemudahan aja, bukan keharusan untuk hasil maksimal.',
        likes: 142,
        comments: 28,
    },
    {
        id: 5,
        author: 'Siti Nurhaliza',
        username: '@sitinurhalizaa',
        avatarColor: 'bg-purple-500',
        avatar: null,
        time: 'Dijawab 1 hari lalu',
        topic: 'Cara mengatasi nyeri otot setelah workout pertama kali?',
        originalQuestion: {
            author: '@novitasari',
            content: 'Kemarin baru pertama kali workout di gym, sekarang badan pegal semua. Ini normal atau aku salah gerakan ya? Gimana cara ngurangin nyerinya?',
            time: '2 hari lalu'
        },
        answer: 'Itu namanya DOMS (Delayed Onset Muscle Soreness), sangat normal untuk pemula! Cara mengatasinya: stretching ringan, kompres hangat, perbanyak minum air, dan tetap bergerak ringan. Jangan langsung istirahat total. Biasanya hilang dalam 3-5 hari. Untuk workout berikutnya, mulai dengan intensitas lebih rendah dulu.',
        likes: 98,
        comments: 19,
    }
];

import ThreadItem from './ThreadItem';

export default function ThreadFeed() {
    const [activeTab, setActiveTab] = useState('Rekomendasi');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const tabs = ['Rekomendasi', 'Populer', 'Terbaru'];

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
        setIsDropdownOpen(false);
    };

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

            {/* Mobile Category Dropdown - Custom */}
            <div className="lg:hidden mb-4">
                <div className="relative inline-block w-auto">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-between gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3.5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                    >
                        <span className="text-sm">{activeTab}</span>
                        <svg
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <>
                            {/* Backdrop */}
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsDropdownOpen(false)}
                            ></div>

                            {/* Menu */}
                            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-20 animate-slideDown min-w-[160px]">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab}
                                        onClick={() => handleTabSelect(tab)}
                                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === tab
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            } ${index !== tabs.length - 1 ? 'border-b border-gray-100' : ''}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div>
                {threads.map((thread, index) => (
                    <ThreadItem key={thread.id} thread={thread} />
                ))}
            </div>
        </section>
    );
}
