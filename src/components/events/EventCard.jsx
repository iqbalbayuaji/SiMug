import React from 'react';
import { BsHandThumbsUp, BsPeople, BsShare, BsGeoAlt, BsGlobe, BsThreeDotsVertical, BsCalendar3 } from 'react-icons/bs';

const EventCard = ({ event }) => {
    // Default data if not provided
    const {
        title = "30 Hari Tantangan Tubuh Lebih Kuat | Edisi 2026",
        sponsor = "SIMUG x Pocari Sweat Indonesia",
        image,
        date = "1 Jan - 2 Feb",
        description = "Tantangan selama 30 hari yang berfokus pada peningkatan kekuatan tubuh secara bertahap dan aman. Setiap fase dirancang untuk membantu tubuh beradaptasi dengan baik...",
        tags = ["Kolaborasi", "Terbatas"],
        stats = { likes: 203, participants: 150, shares: 23 },
        type = "Online", // or "Offline"
        category = "Umum"
    } = event || {};

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-full md:w-64 h-40 shrink-0 rounded-xl overflow-hidden bg-gray-200">
                    {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Image</div>}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug">{title}</h3>
                            <p className="text-gray-500 text-sm mb-3">{sponsor}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            <BsThreeDotsVertical />
                        </button>
                    </div>

                    {/* Tags & Date */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        {tags.map((tag, i) => (
                            <span key={i} className={`px-3 py-1 text-xs font-semibold rounded-full ${tag === 'Kolaborasi' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                                {tag}
                            </span>
                        ))}
                        <div className="flex items-center text-blue-500 text-sm font-medium ml-2">
                            <BsCalendar3 className="mr-2" />
                            {date}
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    {/* Footer Stats & Action */}
                    <div className="flex flex-wrap justify-between items-end gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-gray-500 text-xs font-medium">
                                <BsHandThumbsUp /> {stats.likes}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-gray-500 text-xs font-medium">
                                <BsPeople /> {stats.participants}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-gray-500 text-xs font-medium">
                                <BsShare /> {stats.shares}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-gray-500 text-xs font-medium">
                                <BsThreeDotsVertical /> {category}
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-gray-500 text-xs font-medium">
                                {type === 'Online' ? <BsGlobe /> : <BsGeoAlt />} {type}
                            </div>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2">
                            Detail <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
