import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import ForumHeader from '../components/forum/ForumHeader';
import Mailbox from '../assets/icon/mailbox.png';
import TopicSelectionModal from '../components/forum/TopicSelectionModal';
import { useNavigate } from 'react-router-dom';
import { useForum, questionTypes, relevantTopics } from '../context/ForumContext';

export default function ForumSettingsPage() {
    const navigate = useNavigate();
    const { activeQuestionType, setActiveQuestionType, hasSelectedTopics, setHasSelectedTopics } = useForum();
    const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            {/* Header with Back Button */}
            <div className="bg-white border-b border-gray-100 sticky top-16 z-20">
                <div className="max-w-xl mx-auto px-4 py-3 flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-lg font-semibold text-gray-900">Pengaturan</h1>
                </div>
            </div>

            <main className="max-w-xl mx-auto p-4 space-y-6 animate-slideUp">

                {/* Tipe Pertanyaan Selection */}
                <section className="space-y-3">
                    <h2 className="text-base font-semibold text-gray-900 px-1">Tipe Pertanyaan</h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                        <div className="bg-blue-600 px-5 py-3.5 text-white font-medium relative overflow-hidden">
                            <div className="absolute top-16 -right-9 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full transition-transform duration-600 ease-out group-hover:scale-120"></div>
                            <div className="absolute -top-4 -left-10 -translate-y-1/2 w-24 h-24 bg-white/20 rounded-full transition-transform duration-600 ease-out group-hover:scale-120"></div>
                            <div className="relative z-10">Pilih</div>
                        </div>
                        <div className="p-2 space-y-1">
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
                                    <div className="flex-1">
                                        <span className={`block font-semibold ${activeQuestionType.id === type.id ? 'text-gray-900' : 'text-gray-600'}`}>
                                            {type.name}
                                        </span>
                                    </div>
                                    {activeQuestionType.id === type.id && (
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Topik Relevan Selection */}
                <section className="space-y-3">
                    <h2 className="text-base font-semibold text-gray-900 px-1">Topik Minat</h2>

                    {!hasSelectedTopics ? (
                        /* Empty State Card */
                        <div className="bg-blue-600 rounded-xl shadow-sm overflow-hidden relative group p-6 text-white flex flex-col items-center text-center">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-br-full"></div>
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-full"></div>

                            <div className="relative z-10 mb-4">
                                <img src={Mailbox} alt="Mailbox" className="w-32 h-auto object-contain mx-auto" />
                            </div>

                            <h3 className="text-lg font-bold mb-2 relative z-10">Belum ada topik dipilih</h3>
                            <p className="text-blue-100 text-sm mb-6 relative z-10 max-w-xs mx-auto">
                                Pilih topik yang kamu suka untuk mendapatkan rekomendasi pertanyaan yang lebih relevan.
                            </p>

                            <button
                                onClick={() => setIsTopicModalOpen(true)}
                                className="bg-white text-blue-600 hover:bg-blue-50 text-sm font-bold py-3 px-8 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer relative z-10"
                            >
                                Mulai Pilih Topik
                            </button>
                        </div>
                    ) : (
                        /* Topic Selection List */
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-blue-600 px-5 py-3.5 text-white font-medium flex justify-between items-center">
                                <span>Topik Terpilih</span>
                                <span className="text-blue-100 bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-bold">11</span>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap gap-2">
                                    {relevantTopics.map((topic, index) => (
                                        <button
                                            key={index}
                                            className="cursor-pointer px-3.5 py-2 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-gray-700 text-sm rounded-full transition-all font-medium border border-gray-200"
                                        >
                                            {topic}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setIsTopicModalOpen(true)}
                                        className="cursor-pointer px-3.5 py-2 border border-dashed border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-300 text-sm rounded-full transition-all font-medium flex items-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        Tambah
                                    </button>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                                    <button
                                        onClick={() => setHasSelectedTopics(false)}
                                        className="text-xs text-red-400 hover:text-red-600 font-medium"
                                    >
                                        Reset Pilihan
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Floating Save Button (Optional, if needed) */}
                {/* <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 lg:hidden">
                    <button onClick={() => navigate(-1)} className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                        Simpan Perubahan
                    </button>
                </div> */}
            </main>

            <TopicSelectionModal
                isOpen={isTopicModalOpen}
                onClose={() => setIsTopicModalOpen(false)}
            />
        </div>
    );
}
