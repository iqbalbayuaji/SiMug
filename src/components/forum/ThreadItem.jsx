import React from 'react';

const ThreadItem = ({ thread }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6 last:mb-0">
            <div className="grid grid-cols-[40px_1fr] gap-x-4">
                {/* Row 1: Avatar & Header */}
                <div className={`w-10 h-10 ${thread.avatarColor} rounded-full`}></div>
                <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="font-bold text-gray-800">{thread.author}</h3>
                        •
                        <span className="text-blue-500 text-sm font-medium cursor-pointer hover:underline">Ikuti</span>
                    </div>
                    <div className="text-gray-400 text-xs">
                        <span>{thread.username}</span> • <span>{thread.time}</span>
                    </div>
                </div>

                {/* Row 2: Connecting Line & Question */}
                <div className="relative flex justify-center">
                    <div className="w-[2px] bg-gray-100 h-full"></div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                    <div className="text-xs text-gray-500 font-semibold mb-1">
                        Pertanyaan oleh <span className="text-gray-700">{thread.originalQuestion.author}</span>:
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 leading-snug">
                        {thread.originalQuestion.content}
                    </h4>
                    <div className="text-xs text-gray-400">Pertanyaan {thread.originalQuestion.time}</div>
                </div>

                {/* Row 3: Curve & Answer */}
                <div className="relative flex justify-center">
                    <div className="w-[2px] h-6 bg-gray-100 absolute top-0 left-1/2 -translate-x-1/2 hidden"></div> {/* Optional extension if needed */}
                    <div className="w-5 h-8 border-l-[2px] border-b-[2px] border-gray-100 rounded-bl-xl absolute top-0 left-1/2 -ml-[1px]"></div>
                </div>
                <div className="prose prose-sm text-gray-600 max-w-none pt-2">
                    <p className="whitespace-pre-line">{thread.answer}</p>
                </div>
            </div>
            {/* Footer Stats (Optional - based on image) */}
            <div className="flex items-center gap-4 mt-4 ml-[56px] text-xs font-medium text-gray-500">

                {/* Placeholder buttons based on design, can be dynamic later */}
                <div className="flex items-center gap-4 pr-2">
                    <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                        {thread.answerCount || '1 Jawaban'}
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-700 border border-gray-200 px-2 py-1 rounded-full bg-white">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        {thread.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-700 border border-gray-200 px-2 py-1 rounded-full bg-white">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {thread.views || 512}
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-700 border border-gray-200 px-2 py-1 rounded-full bg-white">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        {thread.shares || 23}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThreadItem;
