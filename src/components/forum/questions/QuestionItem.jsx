import React from 'react';

export default function QuestionItem({
    avatarColor = "bg-emerald-500",
    author = "@hilmifayyaz",
    time = "1 hari lalu",
    question = "Latihan beban mulai dari mana kalau masih benar-benar pemula?",
    answerCount = 3,
    likes = 203,
    views = 512,
    shares = 23
}) {
    return (
        <div className="p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <div className="flex gap-4">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full ${avatarColor} flex-shrink-0`} />

                {/* Content */}
                <div className="flex-1">
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span>Pertanyaan oleh <span className="font-medium text-gray-700">{author}</span></span>
                        <span>•</span>
                        <span>{time}</span>
                        <span>•</span>
                        <button className="font-bold text-blue-600 hover:underline">Ikuti</button>
                    </div>

                    {/* Question Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                        {question}
                    </h3>

                    {/* Stats Row */}
                    <div className="flex items-center gap-3">
                        {/* Answer Pill */}
                        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                            {answerCount} Jawaban
                        </div>

                        {/* Likes */}
                        <div className="flex items-center gap-1.5 px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            <span>{likes}</span>
                        </div>

                        {/* Views */}
                        <div className="flex items-center gap-1.5 px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{views}</span>
                        </div>

                        {/* Shares */}
                        <div className="flex items-center gap-1.5 px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <span>{shares}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
