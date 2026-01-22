import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const GlobeIcon = () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const UsersIcon = () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const SendIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const FORUM_LIST = [
    { id: 1, name: "Kebugaran Umum", color: "bg-blue-400" },
    { id: 2, name: "Komunitas Lari", color: "bg-purple-400" },
    { id: 3, name: "Nutrisi & Diet", color: "bg-green-400" },
    { id: 4, name: "Tanya Seputar Gym", color: "bg-orange-400" },
];

export default function TambahPertanyaanModal({ isOpen, onClose, isMobilePage = false }) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('baru');
    const [question, setQuestion] = useState('');

    const [targetType, setTargetType] = useState('publik');
    const [selectedForum, setSelectedForum] = useState(null);
    const [showTargetDropdown, setShowTargetDropdown] = useState(false);
    const [showForumDropdown, setShowForumDropdown] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowTargetDropdown(false);
                setShowForumDropdown(false);
            }
        };

        if (showTargetDropdown || showForumDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showTargetDropdown, showForumDropdown]);


    useEffect(() => {
        if (isOpen && !isMobilePage) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isMobilePage]);

    if (!isOpen && !isMobilePage) return null;

    const handleClose = () => {
        if (isMobilePage) {
            navigate(-1);
        } else {
            onClose();
        }
    };

    const handleTargetSelect = (type) => {
        setTargetType(type);
        setShowTargetDropdown(false);
        if (type === 'publik') {
            setSelectedForum(null);
        }
    };

    const handleForumSelect = (forum) => {
        setSelectedForum(forum);
        setShowForumDropdown(false);
    };

    const handleSubmit = () => {
        if (question.trim()) {
            // Here you would typically send the data to backend
            console.log("Sending question:", question);
            handleClose();
            setQuestion(''); // Reset form
        }
    };

    const modalContent = (
        <div className={isMobilePage ? "min-h-screen bg-white" : "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300"}>
            <div
                className={isMobilePage ? "w-full h-full flex flex-col pt-4" : "w-full max-w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"}
                onClick={(e) => e.stopPropagation()}
                ref={dropdownRef}
            >
                {/* Header */}
                <div className="px-5 md:px-6 md:pt-4 pb-0 border-b border-gray-200 pb-3">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">Tambah Pertanyaan</h2>
                    <p className="text-gray-500 text-sm md:text-base mt-1">Tanyakan apa saja di dalam forum</p>
                </div>

                {/* Body */}
                <div className="px-5 md:px-6 py-3 flex-1 flex flex-col min-h-[300px]">
                    {activeTab === 'baru' ? (
                        <>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex-shrink-0"></div>
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap relative">
                                        <span className="font-semibold text-gray-900 text-lg mr-1">Rizki Fiko</span>

                                        {/* Target Dropdown (Publik / Forum) */}
                                        <div className="relative">
                                            <button
                                                onClick={() => setShowTargetDropdown(!showTargetDropdown)}
                                                className="cursor-pointer flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                                            >
                                                {targetType === 'publik' ? <GlobeIcon /> : <UsersIcon />}
                                                {targetType === 'publik' ? 'Publik' : 'Forum'}
                                                <ChevronDownIcon />
                                            </button>

                                            {showTargetDropdown && (
                                                <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-20 overflow-hidden animation-fadeIn">
                                                    <button
                                                        onClick={() => handleTargetSelect('publik')}
                                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${targetType === 'publik' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                                                    >
                                                        <GlobeIcon /> Publik
                                                    </button>
                                                    <button
                                                        onClick={() => handleTargetSelect('forum')}
                                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${targetType === 'forum' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                                                    >
                                                        <UsersIcon /> Forum
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Forum Selection (Only if Target is Forum) */}
                                        {targetType === 'forum' && (
                                            <>
                                                <ChevronRightIcon />
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setShowForumDropdown(!showForumDropdown)}
                                                        className={`cursor-pointer flex items-center gap-2 px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors ${!selectedForum ? 'text-gray-400' : ''}`}
                                                    >
                                                        {selectedForum ? (
                                                            <>
                                                                <span className={`w-2.5 h-2.5 rounded-full ${selectedForum.color}`}></span>
                                                                {selectedForum.name}
                                                            </>
                                                        ) : (
                                                            "Pilih Forum"
                                                        )}
                                                        <ChevronDownIcon />
                                                    </button>

                                                    {showForumDropdown && (
                                                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-20 overflow-hidden max-h-48 overflow-y-auto">
                                                            {FORUM_LIST.map(forum => (
                                                                <button
                                                                    key={forum.id}
                                                                    onClick={() => handleForumSelect(forum)}
                                                                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                                                                >
                                                                    <span className={`w-2.5 h-2.5 rounded-full ${forum.color}`}></span>
                                                                    {forum.name}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                    </div>
                                    <p className="text-sm text-gray-500 mt-0.5">@pikakso</p>
                                </div>
                            </div>

                            <textarea
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder='Tanyakan sesuatu, awali dengan "apa", "bagaimana", dst...'
                                className="w-full flex-1 resize-none font-light text-gray-700 placeholder-gray-400 focus:outline-none text-lg leading-relaxed bg-transparent"
                                autoFocus={!isMobilePage}
                            />
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
                            {/* Empty state content */}
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <p className="font-medium">Belum ada pertanyaan dibuat</p>
                            <p className="text-sm mt-1">Mulai diskusi dengan membuat pertanyaan baru</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 md:p-4 pt-3 lg:pt-4 flex justify-end gap-3 mt-auto border-t border-gray-200 md:bg-white sticky bottom-0">
                    <button
                        onClick={handleClose}
                        className="cursor-pointer lg:px-5 lg:py-2.5 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm hover:bg-blue-100 transition-colors"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSubmit}
                        className={`cursor-pointer lg:px-5 lg:py-2.5 px-4 py-2 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 hover:-translate-y-0.5 ${question.trim()
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        disabled={!question.trim()}
                    >
                        Kirim
                        <SendIcon />
                    </button>
                </div>
            </div>
        </div>
    );

    if (isMobilePage) {
        return modalContent;
    }

    return createPortal(modalContent, document.body);
}
