import React from 'react';

const suggestions = [
    { id: 1, name: 'Info Spot, Brother', members: '1.528', color: 'bg-blue-600' },
    { id: 2, name: 'Pelari Kalcer Bandung', members: '2.128', color: 'bg-yellow-400' },
    { id: 3, name: 'Ngopi Santai di LN', members: '1.028', color: 'bg-orange-500' },
];

const topics = [
    {
        id: 1,
        title: 'Tips belajar bahasa buat yang sibuk kerja/kuliah?',
        author: '@zidanikeee',
        time: '2 minggu lalu',
        snippet: null
    },
    {
        id: 2,
        title: 'Gimana cara nambah kosakata tanpa harus ngafalin?',
        author: '@iannkriss',
        time: '1 minggu lalu',
        snippet: null
    },
    {
        id: 3,
        title: 'Grammar salah dikit tapi masih dimengerti, itu gapapa nggak?',
        author: '@zidanikeee',
        time: '2 minggu lalu',
        snippet: null
    },
];

const ForumSuggestions = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border-1 border-gray-100 ">
            <div className="flex justify-between items-center border-b-1 px-5 py-3 border-gray-100">
                <h3 className="font-semibold text-gray-800 text-base">Saran Forum</h3>
                <button className="text-blue-500 cursor-pointer text-xs font-medium hover:underline">Segarkan ↻</button>
            </div>
            <div className="space-y-2 px-3 py-2">
                {suggestions.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className={`w-10 h-10 ${item.color} rounded-full flex-shrink-0`}></div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                            <p className="text-gray-500 text-xs">{item.members} member</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const RelatedTopics = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border-1 border-gray-100">
            <div className="flex justify-between items-center border-b-1 px-5 py-3 border-gray-100">
                <h3 className="font-semibold text-gray-800 text-base">Topik Relate</h3>
                <button className="text-blue-500 cursor-pointer text-xs font-medium hover:underline">Segarkan ↻</button>
            </div>
            <div className="space-y-2 px-3 py-4">
                {topics.map((topic) => (
                    <div key={topic.id} className=" first:pt-0 last:pb-0 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer px-3">
                        <h4 className="font-semibold text-blue-500 text-sm leading-snug mb-1 hover:text-blue-600">
                            {topic.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-400 gap-1 ">
                            <span>Oleh {topic.author}</span>
                            <span>•</span>
                            <span className='mb-1'>{topic.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function ForumSidebar() {
    return (
        <div className="w-80 flex-shrink-0 flex flex-col gap-4 h-full overflow-hidden">
            {/* Container for fixed styling if needed within the sticky wrapper */}
            <ForumSuggestions />
            <RelatedTopics />
        </div>
    );
}
