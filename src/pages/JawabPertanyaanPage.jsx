import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import ForumHeader from '../components/forum/ForumHeader';
import { useSearchParams } from 'react-router-dom';

// Mock data (Duplicated from ForumSearchPage as requested)
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

const questionTypes = [
    { id: 1, name: 'Pertanyaan Umum', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-blue-100 text-blue-600', active: true },
    { id: 2, name: 'Pertanyaan Forum', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', color: 'text-gray-600', active: false },
    { id: 3, name: 'Ramai didiskusikan', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'text-gray-600', active: false }
];

const relevantTopics = [
    'Bahasa', 'Percakapan', 'Ngobrol', 'Inggris', 'IELTS', 'TOEFL', 'Jepang', 'Korea', 'Mandarin', 'Grammar', 'Vocabulary'
];

export default function JawabPertanyaanPage() {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('Belum Terjawab');
    const [activeQuestionType, setActiveQuestionType] = useState(questionTypes[0]);
    const tabs = ['Belum Terjawab', 'Harian', 'Mingguan', 'Populer', 'Relate'];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />
            <ForumHeader
                subtitle={<span>Menampilkan beberapa <span className="text-blue-500 font-semibold">"pertanyaan"</span> terkait</span>}
                title="Jawab Pertanyaan"
                className="animate-slideInLeft"
                showJoinButton={false}
            />

            <div className="max-w-7xl mx-auto pt-2 pb-8 grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-5 px-4 lg:px-0">

                {/* Main Content */}
                <main
                    key={activeQuestionType.id}
                    className="animate-slideUp"
                    style={{ animationDelay: '200ms' }}
                >

                    {/* Top Container */}
                    <div className="bg-white rounded-xl shadow-sm border-1 border-gray-100 mb-5">
                        <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-2.5">
                            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-semibold text-gray-900">{activeQuestionType.name}</h2>
                                <p className="text-sm text-gray-400 font-normal mt-1">6 tipe pertanyaan</p>
                            </div>
                        </div>

                        <div className="flex gap-2 flex-wrap px-6 py-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`cursor-pointer px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blue Banner Title */}
                    <div className="bg-blue-600 text-white px-5 py-3.5 rounded-t-xl flex justify-between items-center shadow-lg shadow-blue-500/20 relative overflow-hidden">
                        <div className="absolute top-20 right-5 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full"></div>
                        </div>
                        <h3 className="font-medium text-lg relative z-10 text-gray-90">Menampilkan Pertanyaan<span className='text-white font-bold'> "{activeQuestionType.name.replace('Pertanyaan ', '')}"</span></h3>
                    </div>

                    {/* Results List */}
                    <div className="bg-white rounded-b-xl shadow-sm border border-gray-100 border-t-0 overflow-hidden">
                        {searchResults.map((thread, index) => (
                            <div
                                key={thread.id}
                                className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
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

                {/* Sidebar */}
                <aside className="hidden lg:block animate-slideUp" style={{ animationDelay: '400ms' }}>
                    <div className="space-y-6">

                        {/* Tipe Pertanyaan */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                            <div className="bg-blue-600 px-5 py-3.5 text-white font-medium relative overflow-hidden">
                                <div className="absolute top-16 -right-9 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full transition-transform duration-600 ease-out group-hover:scale-120"></div>
                                <div className="absolute -top-4 -left-10 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full transition-transform duration-600 ease-out group-hover:scale-120"></div>
                                <div className="relative z-10">Tipe Pertanyaan</div>
                            </div>
                            <div className="p-2">
                                {questionTypes.map((type) => (
                                    <div
                                        key={type.id}
                                        onClick={() => setActiveQuestionType(type)}
                                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeQuestionType.id === type.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg ${activeQuestionType.id === type.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.icon} />
                                            </svg>
                                        </div>
                                        <span className={`font-semibold ${activeQuestionType.id === type.id ? 'text-gray-900' : 'text-gray-600'}`}>{type.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Topik Relevan */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                            <div className="bg-blue-600 px-5 py-3.5 text-white font-medium flex justify-between items-center relative overflow-hidden">
                                <div className="absolute top-16 -right-9 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full transition-transform duration-600 ease-out group-hover:scale-120"></div>
                                <div className="absolute -top-4 -left-10 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full transition-transform duration-600 ease-out group-hover:scale-120"></div>
                                <span className="relative z-10">Topik Relevan</span>
                                <span className="relative z-10 text-blue-100 bg-white/20 px-2 py-0.5 rounded-full text-xs">11</span>
                            </div>
                            <div className="p-3">
                                <div className="flex flex-wrap gap-2">
                                    {relevantTopics.map((topic, index) => (
                                        <button
                                            key={index}
                                            className="cursor-pointer px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors font-medium border border-gray-200"
                                        >
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <button className="cursor-pointer text-blue-600 hover:text-blue-700 text-sm font-semibold hover:underline">
                                        Tambah Topik Lain
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </aside>
            </div>
        </div>
    );
}
