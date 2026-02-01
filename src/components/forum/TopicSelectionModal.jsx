import React, { useState } from 'react';
import { relevantTopics } from '../../context/ForumContext';

const TopicSelectionModal = ({ isOpen, onClose, selectedTopics = [], addTopic, removeTopic }) => {
    if (!isOpen) return null;

    const toggleTopic = (topic) => {
        if (selectedTopics.includes(topic)) {
            removeTopic(topic);
        } else {
            addTopic(topic);
        }
    };

    const historyTopics = ['Bahasa', 'Grammar', 'Vocab', 'Hafalan', 'Ngobrol'];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">

            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="w-full max-w-2xl relative z-10 flex flex-col gap-4 animate-fade-in-up">

                {/* Search Bar Container */}
                <div className="bg-white rounded-full shadow-xl px-1 py-1 flex items-center relative">
                    <div className="pl-3 pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Telusuri pertanyaan..."
                        className="flex-1 py-2 bg-transparent border-none focus:ring-0 placeholder-gray-400 text-gray-700 outline-none text-sm"
                    />
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full transition-colors flex items-center justify-center shrink-0 ml-2">
                        <svg className="w-5 h-5 rotate-90 translate-x-[-1px] translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>

                {/* Main Content Container */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="p-6">

                        {/* History Section */}
                        <div className="lg:mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold lg:font-bold text-base lg:text-lg text-gray-900">Riwayat Pencarian Topik</h3>
                                <button className="text-xs lg:text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer">Hapus semua</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {historyTopics.map((topic, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-xs lg:text-sm font-medium transition-colors"
                                    >
                                        {topic}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-100 lg:my-4 my-3"></div>

                        {/* Recommendations Section */}
                        <div>
                            <h3 className="font-semibold lg:font-bold text-base lg:text-lg text-gray-900 lg:mb-4">Rekomendasi Pencarian</h3>
                            <div className="space-y-1 max-h-[300px] overflow-y-auto pr-2">
                                {relevantTopics.map((topic) => {
                                    const isChecked = selectedTopics.includes(topic);
                                    return (
                                        <div
                                            key={topic}
                                            onClick={() => toggleTopic(topic)}
                                            className={`cursor-pointer text-sm lg:text-base flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${isChecked ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                                <span className="text-gray-700">{topic}</span>
                                            </div>
                                            <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isChecked ? 'bg-blue-600 border-blue-600' : 'bg-white border-blue-400'}`}>
                                                {isChecked && (
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicSelectionModal;
