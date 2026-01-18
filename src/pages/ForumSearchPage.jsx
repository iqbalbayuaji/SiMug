import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import ForumHeader from '../components/forum/ForumHeader';
import ThreadItem from '../components/forum/ThreadItem';
import { useSearchParams } from 'react-router-dom';

// Mock data for search results (threads)
const searchResults = [
    {
        id: 1,
        author: 'Raka Pratama',
        username: '@rakapratama',
        avatarColor: 'bg-emerald-500',
        time: '12 jam lalu',
        topic: 'Pemula di gym, sebaiknya fokus ke mesin atau free weights dulu?',
        originalQuestion: {
            author: '@rakapratama',
            content: 'Pemula di gym, sebaiknya fokus ke mesin atau free weights dulu?',
            time: '12 jam lalu'
        },
        answer: 'Untuk benar-benar pemula, mesin lebih aman untuk memahami pola gerakan dan isolasi otot. Setelah 2-3 minggu dan merasa nyaman, pelan-pelan transisi ke free weights (dumbbell/barbell) untuk melatih stabilizer muscles.',
        likes: 342,
        views: 1205,
        shares: 45,
        answerCount: '12 Jawaban'
    },
    {
        id: 2,
        author: 'Dinda Kirana',
        username: '@dindakirana',
        avatarColor: 'bg-pink-500',
        time: '1 hari lalu',
        topic: 'Tips lari 5K pertama tanpa ngos-ngosan parah?',
        originalQuestion: {
            author: '@dindakirana',
            content: 'Tips lari 5K pertama tanpa ngos-ngosan parah?',
            time: '1 hari lalu'
        },
        answer: 'Jangan lari terlalu cepat di awal (pace management). Gunakan teknik napas 2-2 (2 langkah tarik napas, 2 langkah buang). Dan yang paling penting, latihan interval run seminggu sekali.',
        likes: 215,
        views: 890,
        shares: 32,
        answerCount: '8 Jawaban'
    },
    {
        id: 3,
        author: 'Bayu Skak',
        username: '@bayuskak',
        avatarColor: 'bg-blue-600',
        time: '1 hari lalu',
        topic: 'Calisthenics vs Gym, mana yang lebih cepat bentuk otot?',
        originalQuestion: {
            author: '@bayuskak',
            content: 'Calisthenics vs Gym, mana yang lebih cepat bentuk otot?',
            time: '1 hari lalu'
        },
        answer: 'Gym (hypertrophy training) biasanya lebih cepat untuk massa otot karena beban bisa diatur progresif (progressive overload) dengan mudah. Calisthenics lebih ke kekuatan fungsional dan penguasaan berat badan.',
        likes: 188,
        views: 750,
        shares: 19,
        answerCount: '15 Jawaban'
    },
    {
        id: 4,
        author: 'Siti Badriah',
        username: '@sibad',
        avatarColor: 'bg-purple-500',
        time: '2 hari lalu',
        topic: 'Apakah suplemen whey protein itu wajib buat yang baru mulai fitness?',
        originalQuestion: {
            author: '@sibad',
            content: 'Apakah suplemen whey protein itu wajib buat yang baru mulai fitness?',
            time: '2 hari lalu'
        },
        answer: 'Tidak wajib. Whey protein itu hanya suplemen (tambahan). Jika kebutuhan protein harianmu sudah tercukupi dari real food (ayam, telur, tempe, ikan), kamu tidak butuh whey.',
        likes: 156,
        views: 620,
        shares: 24,
        answerCount: '20 Jawaban'
    },
    {
        id: 5,
        author: 'Agus Kotak',
        username: '@aguskotak',
        avatarColor: 'bg-red-500',
        time: '3 hari lalu',
        topic: 'Jadwal latihan push push legs (PPL) efektif gak buat natural?',
        originalQuestion: {
            author: '@aguskotak',
            content: 'Jadwal latihan push push legs (PPL) efektif gak buat natural?',
            time: '3 hari lalu'
        },
        answer: 'Sangat efektif karena melatih setiap otot 2x seminggu. Pastikan volume latihannya tidak berlebihan (junk volume) dan istirahat cukup.',
        likes: 275,
        views: 980,
        shares: 56,
        answerCount: '9 Jawaban'
    },
    {
        id: 6,
        author: 'Rina Nose',
        username: '@rinanose',
        avatarColor: 'bg-orange-500',
        time: '4 hari lalu',
        topic: 'Sepatu running lokal yang bagus budget pelajar apa ya?',
        originalQuestion: {
            author: '@rinanose',
            content: 'Sepatu running lokal yang bagus budget pelajar apa ya?',
            time: '4 hari lalu'
        },
        answer: 'Banyak opsi bagus sekarang seperti 910 (Nineten), Ortuseight, atau Ardiles. Cari yang bantalannya empuk kalau buat daily training.',
        likes: 190,
        views: 540,
        shares: 12,
        answerCount: '25 Jawaban'
    }
];

// Mock data for found forums (sidebar)
const discoveredForums = [
    { id: 1, name: 'Gym Bro Indonesia', members: '12.5k', color: 'bg-gray-800' },
    { id: 2, name: 'Indo Runners', members: '45.2k', color: 'bg-blue-500' },
    { id: 3, name: 'Calisthenics Unity', members: '8.3k', color: 'bg-yellow-500' },
    { id: 4, name: 'Diet & Nutrisi', members: '22.1k', color: 'bg-green-500' },
    { id: 5, name: 'Sepeda Santai', members: '15.4k', color: 'bg-red-500' },
    { id: 6, name: 'Badminton Lovers', members: '30.2k', color: 'bg-purple-600' },
    { id: 7, name: 'Futsal Kuy', members: '18.9k', color: 'bg-emerald-600' },
    { id: 8, name: 'Renang Rutin', members: '5.6k', color: 'bg-cyan-500' },
    { id: 9, name: 'Yoga for Beginners', members: '10.1k', color: 'bg-pink-400' },
    { id: 10, name: 'Home Workout', members: '25.3k', color: 'bg-indigo-500' },
];

export default function ForumSearchPage() {
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q') || '';
    const [activeTab, setActiveTab] = useState('Rekomendasi');
    const tabs = ['Rekomendasi', 'Terpopuler', 'Terbaru'];

    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef([]);

    useEffect(() => {
        const activeIndex = tabs.indexOf(activeTab);
        const currentTab = tabsRef.current[activeIndex];
        if (currentTab) {
            setIndicatorStyle({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth
            });
        }
    }, [activeTab]);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />
            <ForumHeader
                subtitle={`Menampilkan hasil "${query}" terkait`}
                title="Hasil pencarian"
                className="animate-slideInLeft"
            />

            <div className="max-w-7xl mx-auto pt-2 pb-8 grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-8">
                {/* Main Content: Search Results */}
                <main className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-slideUp" style={{ animationDelay: '200ms' }}>
                    {/* Tabs / Filter */}
                    <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-white">
                        <div className="relative flex gap-6 text-sm font-medium text-gray-500">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    ref={el => tabsRef.current[index] = el}
                                    onClick={() => setActiveTab(tab)}
                                    className={`cursor-pointer pb-4 -mb-4 px-1 transition-colors duration-300 ${activeTab === tab
                                        ? 'text-blue-500 font-semibold'
                                        : 'hover:text-gray-800'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                            {/* Sliding Indicator */}
                            <div
                                className="absolute bottom-[-17px] h-0.5 bg-blue-500 rounded-t-full transition-all duration-300 ease-out"
                                style={{
                                    left: `${indicatorStyle.left}px`,
                                    width: `${indicatorStyle.width}px`
                                }}
                            />
                        </div>
                        <div className="relative">
                            <button className="cursor-pointer text-blue-500 text-sm font-medium flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                                Threads
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Results List */}
                    <div key={activeTab} className="animate-slideUp">
                        {searchResults.map((thread, index) => (
                            <div
                                key={thread.id}
                                className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex gap-4">
                                    {/* Avatar */}
                                    <div className={`w-12 h-12 ${thread.avatarColor} rounded-full flex-shrink-0 mt-1`}></div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        {/* Metadata Row */}
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 flex-wrap">
                                            <span>Pertanyaan oleh <span className="text-gray-700 font-medium">{thread.username}</span></span>
                                            <span>•</span>
                                            <span>{thread.time}</span>
                                            <span>•</span>
                                            <button className="text-blue-600 font-bold hover:underline">Ikuti</button>
                                        </div>

                                        {/* Title / Question */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                            {thread.topic}
                                        </h3>

                                        {/* Actions / Stats Row */}
                                        <div className="flex items-center gap-2 text-xs font-medium">
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                                {thread.answerCount}
                                            </span>
                                            <div className="flex items-center gap-4 px-1 text-gray-500">
                                                <button className="flex items-center gap-1.5 hover:text-gray-700 border border-gray-200 px-3 py-1 rounded-full bg-white transition-colors hover:bg-gray-50">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                    </svg>
                                                    {thread.likes}
                                                </button>
                                                <button className="flex items-center gap-1.5 hover:text-gray-700 border border-gray-200 px-3 py-1 rounded-full bg-white transition-colors hover:bg-gray-50">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    {thread.views || 512}
                                                </button>
                                                <button className="flex items-center gap-1.5 hover:text-gray-700 border border-gray-200 px-3 py-1 rounded-full bg-white transition-colors hover:bg-gray-50">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                    </svg>
                                                    {thread.shares || 23}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Sidebar: Forums Found */}
                <aside className="hidden lg:block animate-slideUp" style={{ animationDelay: '400ms' }}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-24">
                        <div className="flex justify-between items-center border-b border-gray-100 px-5 py-3">
                            <h3 className="font-semibold text-gray-800 text-base">Forum Ditemukan</h3>
                            {/* Optional: Add refresh button if desired, or keep clean. Keeping clean for search results implies static hits. */}
                        </div>
                        <div className="space-y-2 px-3 py-2 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                            {discoveredForums.map((forum) => (
                                <div key={forum.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                    <div className={`w-10 h-10 ${forum.color} rounded-full flex-shrink-0`}></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">{forum.name}</h4>
                                        <p className="text-gray-500 text-xs">{forum.members} member</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
