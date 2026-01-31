import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import ForumHeader from '../components/forum/ForumHeader';
import Mailbox from '../assets/icon/mailbox.png';
import TopicSelectionModal from '../components/forum/TopicSelectionModal';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useForum, questionTypes, relevantTopics } from '../context/ForumContext';

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

export default function JawabPertanyaanPage() {
    const navigate = useNavigate();
    const { activeQuestionType, setActiveQuestionType, hasSelectedTopics, setHasSelectedTopics } = useForum();
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('Belum Terjawab');
    const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
    const tabs = ['Belum Terjawab', 'Harian', 'Mingguan', 'Populer', 'Relate'];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />
            <ForumHeader
                subtitle={<span>Menampilkan beberapa <span className="text-blue-500 font-semibold">"pertanyaan"</span> terkait</span>}
                title="Jawab Pertanyaan"
                className="animate-slideInLeft"
                showJoinButton={false}
                searchButtonOutside={true}
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeQuestionType.icon} />
                                </svg>
                            </div>
                            <div className="flex-1 flex items-center justify-between sm:justify-start gap-3">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-semibold text-gray-900">{activeQuestionType.name}</h2>
                                    <p className="hidden sm:block text-sm text-gray-400 font-normal mt-1">6 tipe pertanyaan</p>
                                </div>
                                <button
                                    onClick={() => navigate('/forum/settings')}
                                    className="sm:hidden text-gray-500 hover:text-gray-700 p-1"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-2 overflow-x-auto sm:flex-wrap px-6 py-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`cursor-pointer px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap lg:whitespace-normal shrink-0 ${activeTab === tab
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
                                className="p-4 sm:p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                            >
                                <div className="flex gap-3 sm:gap-4">
                                    {/* Avatar */}
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${thread.avatarColor} rounded-full flex-shrink-0 mt-1`}></div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        {/* Metadata Row */}
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 flex-wrap">
                                            <span><span className="hidden sm:inline">Pertanyaan oleh </span><span className="text-gray-700 font-medium">{thread.username}</span></span>
                                            <span>•</span>
                                            <span>{thread.time}</span>
                                            <span>•</span>
                                            <button className="text-blue-600 font-bold hover:underline">Ikuti</button>
                                        </div>

                                        {/* Title / Question */}
                                        <h3 className="text-lg font-medium lg:font-semibold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                            {thread.topic}
                                        </h3>

                                        {/* Actions / Stats Row */}
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-medium mt-auto">
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full whitespace-nowrap order-last sm:order-first">
                                                {thread.answerCount}
                                            </span>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 px-1 text-gray-500">
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
                        {/* Topik Relevan Container */}
                        {!hasSelectedTopics ? (
                            /* Version 2: Empty State / Promo Card */
                            <div className="bg-blue-600 rounded-xl shadow-sm overflow-hidden relative group p-6 text-white min-h-[340px] flex flex-col justify-between">
                                {/* Decorative Circles (Background) - Animated Half Circles */}
                                <div className="group-hover:scale-200 group-hover:bg-white/40 animation-duration-1000 transition-all absolute top-0 left-0 w-16 h-16 bg-white/30 rounded-br-full animate-pulse z-0"></div>
                                <div className="group-hover:scale-200 group-hover:bg-white/40 animation-duration-1000 transition-all absolute bottom-0 right-0 w-16 h-16 bg-white/30 rounded-tl-full animate-pulse z-0" style={{ animationDelay: '1s' }}></div>

                                {/* Content Wrapper */}
                                <div className="relative z-10 flex flex-col h-full flex-1">
                                    {/* Header: Top Left */}
                                    <h3 className="text-xl font-semibold text-left w-full">Topik Relevan</h3>

                                    {/* Centered Image and Text */}
                                    <div className="flex-1 flex flex-col items-center justify-center py-4">
                                        <div className="relative mb-4">
                                            <img src={Mailbox} alt="Mailbox" className="w-40 h-auto object-contain relative z-10" />
                                        </div>

                                        <p className="text-blue-100 text-sm leading-relaxed px-2 text-center">
                                            Dapatkan pertanyaan yang lebih<br />
                                            <span className="font-semibold text-white">"relate"</span> sesuai topik favoritmu!
                                        </p>
                                    </div>

                                    {/* Button: Bottom Center */}
                                    <div className="group flex justify-center mt-auto">
                                        <button
                                            onClick={() => setIsTopicModalOpen(true)}
                                            className="bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold py-2.5 px-6 rounded-full inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-900/30 active:scale-95 cursor-pointer"
                                        >
                                            Pilih topik
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Version 1: List State (Existing) */
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
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <button
                                            onClick={() => setIsTopicModalOpen(true)}
                                            className="cursor-pointer text-blue-600 hover:text-blue-700 text-sm font-semibold hover:underline"
                                        >
                                            Tambah Topik Lain
                                        </button>
                                        {/* Helper to reset state for demo */}
                                        <button
                                            onClick={() => setHasSelectedTopics(false)}
                                            className="text-xs text-gray-400 hover:text-gray-600 underline"
                                            title="Reset to Empty State (Demo)"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </aside>
            </div>

            <TopicSelectionModal
                isOpen={isTopicModalOpen}
                onClose={() => setIsTopicModalOpen(false)}
            />
        </div>
    );
}
