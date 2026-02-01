import React, { useState } from 'react';

const AnswerQuestionModal = ({ isOpen, onClose, question }) => {
    const [modalState, setModalState] = useState('confirmation');
    const [answerText, setAnswerText] = useState('');

    if (!isOpen) return null;

    const handleConfirm = () => {
        setModalState('editor');
    };

    const handleClose = () => {
        setModalState('confirmation');
        setAnswerText('');
        onClose();
    };

    const handleSubmit = () => {
        console.log('Submitting answer:', answerText);
        handleClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            ></div>

            {modalState === 'confirmation' ? (
                <div className="bg-white rounded-xl w-full max-w-xl relative z-10 shadow-2xl animate-fade-in-up overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            Jawab Pertanyaan <span className="text-blue-600">+50 MP</span>
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Apakah kamu yakin ingin menjawab pertanyaan ini?
                        </p>
                    </div>

                    <div className="border-t border-gray-100 p-4 flex gap-3 justify-end">
                        <button
                            onClick={handleClose}
                            className="cursor-pointer px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="cursor-pointer px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                        >
                            Lanjutkan
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white w-full relative z-10 shadow-2xl animate-fade-in-up flex flex-col
                    lg:rounded-2xl lg:max-w-2xl lg:max-h-[90vh] lg:overflow-hidden
                    max-lg:fixed max-lg:inset-0 max-lg:h-screen max-lg:rounded-none">
                    <div className="p-6 pb-4 border-b border-gray-100 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg"></div>
                            <div>
                                <h3 className="font-bold text-gray-900">Rizki Fiko</h3>
                                <p className="text-sm text-gray-500">@pikakso</p>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors p-1"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                        <p className="text-gray-900 font-semibold text-base leading-relaxed">
                            {question?.title || question?.topic || 'Belajar bahasa asing mulai dari mana kalau masih benar-benar pemula?'}
                        </p>
                    </div>

                    <div className="px-6 overflow-y-auto lg:flex-1">
                        <textarea
                            value={answerText}
                            onChange={(e) => setAnswerText(e.target.value)}
                            placeholder="Tulis jawaban kamu..."
                            className="w-full min-h-[150px] lg:min-h-[200px] text-gray-700 text-base placeholder-gray-400 border-none focus:ring-0 outline-none resize-none"
                        />
                    </div>

                    <div className="border-t border-gray-100 p-4 bg-white sticky bottom-0">
                        <div className="lg:flex items-center justify-between gap-4">
                            <div className="flex items-center gap-1 flex-wrap">
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 font-semibold text-base transition-colors">
                                    H1
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 font-semibold text-base transition-colors">
                                    B
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 font-semibold text-sm transition-colors">
                                    /
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                    </svg>
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
                                    </svg>
                                </button>
                            </div>
                            <div className='lg:hidden flex pt-3 justify-end'>
                                <button
                                    onClick={handleSubmit}
                                    className="cursor-pointer px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2 shrink-0"
                                >
                                    Kirim
                                    <svg className="w-4.5 h-4.5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="hidden lg:flex cursor-pointer px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors items-center gap-2 shrink-0"
                            >
                                Kirim
                                <svg className="w-4.5 h-4.5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnswerQuestionModal;
