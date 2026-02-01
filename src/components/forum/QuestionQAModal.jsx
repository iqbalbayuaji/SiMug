import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Mock Data
// Mock Data
const createdQuestions = [
    { id: 1, date: 'Agu, 5/25', question: 'Apa yang terjadi jika kita berhenti olahraga selama sebulan?', answers: 10, likes: 211, views: 0 },
    { id: 2, date: 'Okt, 10/25', question: 'Kenapa setelah selesai lari kaki terasa sangat pegal?', answers: 7, likes: 222, views: 0 },
    { id: 3, date: 'Okt, 2/25', question: 'Bagaimana cara mengatur pola makan saat diet keto?', answers: 9, likes: 191, views: 0 },
    { id: 4, date: 'Sep, 7/25', question: 'Apa yang terjadi jika minum protein shake tanpa olahraga?', answers: 11, likes: 211, views: 0 },
    { id: 5, date: 'Agu, 5/25', question: 'Tips memulai calisthenics untuk pemula yang kurus?', answers: 13, likes: 211, views: 0 },
    { id: 6, date: 'Agu, 5/25', question: 'Apakah sit-up efektif untuk membakar lemak perut?', answers: 15, likes: 211, views: 0 },
    { id: 7, date: 'Agu, 5/25', question: 'Berapa kali seminggu idealnya latihan beban?', answers: 8, likes: 211, views: 0 },
    { id: 8, date: 'Agu, 5/25', question: 'Makanan apa yang bagus untuk recovery otot?', answers: 17, likes: 211, views: 0 },
    { id: 9, date: 'Agu, 5/25', question: 'Apakah lari sore lebih baik daripada lari pagi?', answers: 5, likes: 211, views: 0 },
    { id: 10, date: 'Agu, 5/25', question: 'Cara mengatasi nyeri otot (DOMS) setelah leg day?', answers: 5, likes: 211, views: 0 },
];

const answeredQuestions = [
    { id: 1, date: 'Agu, 5/25', question: 'Apa yang terjadi jika makan malam di atas jam 8?', likes: 217, views: '1.2k' },
    { id: 2, date: 'Okt, 10/25', question: 'Bagaimana rasanya mengikuti event marathon pertama kali?', likes: 230, views: '2.3k' },
    { id: 3, date: 'Okt, 2/25', question: 'Apakah saya harus minum suplemen kreatin?', likes: 255, views: '2.8k' },
    { id: 4, date: 'Sep, 7/25', question: 'Apa yang kalian kerjakan saat rest day?', likes: 198, views: '1.5k' },
    { id: 5, date: 'Agu, 5/25', question: 'Seberapa efektif metode intermittent fasting?', likes: 211, views: '1.2k' },
    { id: 6, date: 'Agu, 5/25', question: 'Tips menjaga motivasi olahraga saat sibuk kerja?', likes: 214, views: '2.2k' },
    { id: 7, date: 'Agu, 5/25', question: 'Rekomendasi sepatu lari lokal murah berkualitas?', likes: 166, views: '790' },
    { id: 8, date: 'Agu, 5/25', question: 'Perbedaan whey protein isolate dan concentrate?', likes: 197, views: '813' },
    { id: 9, date: 'Agu, 5/25', question: 'Gerakan stretching terbaik untuk sakit punggung?', likes: 181, views: '921' },
    { id: 10, date: 'Agu, 5/25', question: 'Apakah berenang bisa menambah tinggi badan?', likes: 121, views: '1.3k' },
];

export default function QuestionQAModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('dibuat'); // 'dibuat' | 'dijawab'
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Filter Logic
    const data = activeTab === 'dibuat' ? createdQuestions : answeredQuestions;
    // Assuming simple search on Question text for now, can extend later
    // const filteredData = data.filter(...)

    const modalContent = (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center lg:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            {/* Modal Container */}
            <div
                className="bg-white lg:rounded-2xl w-full h-full lg:max-w-[70vw] lg:max-h-[90vh] flex flex-col shadow-2xl animate-scaleUp"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header Section */}
                <div className="p-6 pb-2">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-xl lg:font-bold font-semibold text-gray-900">Daftar Tanya & Jawab</h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                            <svg className="h-6 w-6 lg:w-5 lg:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Tabs Buttons */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <button
                            onClick={() => setActiveTab('dibuat')}
                            className={`p-4 rounded-xl text-left font-semibold text-base transition-all relative overflow-hidden flex items-center cursor-pointer
                                ${activeTab === 'dibuat'
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-indigo-300 text-white hover:bg-indigo-400'
                                }`}
                            style={activeTab === 'dibuat' ? { backgroundColor: '#254EAB' } : { backgroundColor: '#92A6D3', color: 'white' }}
                        >
                            <span className="relative z-10 w-32 leading-tight">Daftar Pertanyaan Dibuat</span>
                            {/* Decorative bubbles for active state */}
                            {activeTab === 'dibuat' && (
                                <>
                                    <div className="absolute -right-2 top-10 w-20 h-20 bg-white/10 rounded-full"></div>
                                    <div className="absolute right-8 -bottom-8 w-20 h-20 bg-white/10 rounded-full"></div>
                                </>
                            )}
                        </button>

                        <button
                            onClick={() => setActiveTab('dijawab')}
                            className={`p-4 rounded-xl text-left font-semibold text-base transition-all relative overflow-hidden flex items-center cursor-pointer
                                ${activeTab === 'dijawab'
                                    ? 'bg-blue-800 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-indigo-300 text-white hover:bg-indigo-400'
                                }`}
                            style={activeTab === 'dijawab' ? { backgroundColor: '#254EAB' } : { backgroundColor: '#92A6D3', color: 'white' }}
                        >
                            <span className="relative z-10 w-32 leading-tight">Daftar Pertanyaan Dijawab</span>
                            {activeTab === 'dijawab' && (
                                <>
                                    <div className="absolute -right-2 top-10 w-20 h-20 bg-white/10 rounded-full"></div>
                                    <div className="absolute right-8 -bottom-8 w-20 h-20 bg-white/10 rounded-full"></div>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-1">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Cari pertanyaan kamu..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
                        />
                    </div>
                </div>

                {/* Table Section - Scrollable */}
                <div className="flex-1 overflow-y-auto px-6 pb-6">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="py-2 px-4 text-white">
                                <th className={`py-2 px-4 rounded-l-lg font-medium w-24 sticky top-0 z-10 ${activeTab === 'dibuat' ? 'bg-[#407BFF]' : 'bg-[#254EAB]'}`}>Tanggal</th>
                                <th className={`py-2 px-4 font-medium sticky top-0 z-10 ${activeTab === 'dibuat' ? 'bg-[#407BFF]' : 'bg-[#254EAB]'}`}>{activeTab === 'dibuat' ? 'Pertanyaan Kamu' : 'Pertanyaan Global'}</th>
                                {activeTab === 'dibuat' ? (
                                    <>
                                        <th className={`py-2 px-4 font-medium w-32 sticky top-0 z-10 ${activeTab === 'dibuat' ? 'bg-[#407BFF]' : 'bg-[#254EAB]'}`}>Jml. Jawab</th>
                                        <th className={`py-2 px-4 font-medium w-32 sticky top-0 z-10 ${activeTab === 'dibuat' ? 'bg-[#407BFF]' : 'bg-[#254EAB]'}`}>Jml. Suka</th>
                                    </>
                                ) : (
                                    <>
                                        <th className={`py-2 px-4 font-medium w-32 sticky top-0 z-10 ${activeTab === 'dibuat' ? 'bg-[#407BFF]' : 'bg-[#254EAB]'}`}>Jml. Suka</th>
                                        <th className={`py-2 px-4 font-medium w-32 sticky top-0 z-10 ${activeTab === 'dibuat' ? 'bg-[#407BFF]' : 'bg-[#254EAB]'}`}>Jml. View</th>
                                    </>
                                )}
                                <th className={`py-2 px-4 rounded-r-lg font-medium w-32 text-center sticky top-0 z-10 ${activeTab === 'dibuat' ? 'bg-[#407BFF]' : 'bg-[#254EAB]'}`}>Tindakan</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {/* Spacer row for spacing between header and content */}
                            <tr className="h-2"></tr>

                            {data.map((item, index) => (
                                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-2 align-middle text-gray-500 text-sm font-medium">{item.date}</td>
                                    <td className="py-3 px-4 align-middle font-medium text-gray-900">
                                        <div className="truncate max-w-[200px] md:max-w-[350px]">{item.question}</div>
                                    </td>

                                    {activeTab === 'dibuat' ? (
                                        <>
                                            <td className="py-3 px-4 align-middle text-blue-600 font-medium">{item.answers} jawaban</td>
                                            <td className="py-3 px-4 align-middle text-gray-500 font-medium">{item.likes} suka</td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="py-3 px-4 align-middle text-gray-500 font-medium">{item.likes} suka</td>
                                            <td className="py-3 px-4 align-middle text-blue-600 font-medium flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                {item.views}
                                            </td>
                                        </>
                                    )}

                                    <td className="py-3 px-4 align-middle">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors cursor-pointer">
                                                Detail
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </button>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-lg transition-colors cursor-pointer">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 13a1 1 0 100-2 1 1 0 000 2zM12 7a1 1 0 100-2 1 1 0 000 2zM12 19a1 1 0 100-2 1 1 0 000 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
