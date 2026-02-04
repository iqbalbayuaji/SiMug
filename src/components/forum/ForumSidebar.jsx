import { Link } from 'react-router-dom';
import komunitasImg from "../../assets/images/Komunitas-Onine.jpeg";
import { forums } from '../../constants/forumData';

const topics = [
    {
        id: 1,
        title: 'Tips mulai workout di rumah buat yang sibuk kerja/kuliah?',
        author: '@zidanikeee',
        time: '2 minggu lalu',
        snippet: null
    },
    {
        id: 2,
        title: 'Gimana cara konsisten lari pagi tanpa harus merasa berat?',
        author: '@iannkriss',
        time: '1 minggu lalu',
        snippet: null
    },
    {
        id: 3,
        title: 'Latihan beban tipis-tipis tapi rutin, itu gapapa nggak?',
        author: '@zidanikeee',
        time: '2 minggu lalu',
        snippet: null
    },
];

const ForumSuggestions = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 ">
            <div className="flex justify-between items-center border-b px-5 py-3 border-gray-100">
                <h3 className="font-semibold text-gray-800 text-base">Saran Forum</h3>
                <button className="text-blue-500 cursor-pointer text-xs font-medium hover:underline">Segarkan ↻</button>
            </div>
            <div className="space-y-2 px-3 py-2">
                {forums.map((item) => (
                    <Link
                        key={item.id}
                        to={`/forum/beranda/${item.id}`}
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                        <div className={`w-10 h-10 rounded-full shrink-0 overflow-hidden`}>
                            <img src={item.avatar || komunitasImg} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                            <p className="text-gray-500 text-xs">{item.members} member</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const RelatedTopics = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center border-b px-5 py-3 border-gray-100">
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
        <div className="w-80 shrink-0 flex flex-col gap-4 sticky top-24 self-start">
            {/* Container for fixed styling if needed within the sticky wrapper */}
            <ForumSuggestions />
            <RelatedTopics />
        </div>
    );
}
