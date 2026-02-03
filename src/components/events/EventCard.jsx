import React from 'react';
import {
    BsHandThumbsUp,
    BsPeople,
    BsShare,
    BsGeoAlt,
    BsThreeDotsVertical,
    BsCalendar3,
    BsEye,
    BsLightningCharge,
    BsArrowRight
} from 'react-icons/bs';

const EventCard = ({ event }) => {
    const {
        title = "30 Hari Tantangan Tubuh Lebih Kuat | Edisi 2026",
        sponsor = "SIMUG x Pocari Sweat Indonesia",
        image,
        date = "1 Jan - 2 Feb",
        description = "Tantangan selama 30 hari yang berfokus pada peningkatan kekuatan tubuh secara bertahap dan aman. Setiap fase dirancang untuk membantu tubuh beradaptasi dengan baik...",
        tags = ["Kolaborasi", "Terbatas"],
        stats = { likes: 203, participants: 150, shares: 23 },
        type = "Online",
        category = "Umum"
    } = event || {};

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 mb-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Top Row: Image and Header Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 items-start sm:items-center">
                {/* Image */}
                <div className="w-full sm:w-44 h-48 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-gray-50">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>

                {/* Header Info */}
                <div className="flex-1 min-w-0 w-full">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 leading-tight line-clamp-1">{title}</h3>
                        <button className="text-gray-400 hover:text-gray-600 shrink-0 ml-4">
                            <BsThreeDotsVertical />
                        </button>
                    </div>
                    <p className="text-gray-500 text-sm mb-3 sm:mb-4">{sponsor}</p>

                    {/* Tags & Date Row */}
                    <div className="flex flex-wrap items-center px-1 lg:px-0 justify-between sm:justify-start gap-2 w-full">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1 text-xs font-semibold rounded-full ${tag === 'Kolaborasi' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-gray-200 mx-1"></div>
                        <div className="flex items-center text-blue-500 text-sm font-medium gap-2">
                            <div className="hidden lg:block bg-blue-50 p-1.5 rounded-md text-blue-500">
                                <BsCalendar3 size={14} />
                            </div>
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Row: Description */}
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {description}
            </p>

            {/* Separator */}
            <div className="border-t border-gray-100 my-4"></div>

            {/* Bottom Row: Stats and Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 rounded-full text-gray-500 text-xs font-medium bg-white">
                        <BsHandThumbsUp /> {stats.likes}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 rounded-full text-gray-500 text-xs font-medium bg-white">
                        <BsPeople /> {stats.participants}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 rounded-full text-gray-500 text-xs font-medium bg-white">
                        <BsShare /> {stats.shares}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 rounded-full text-gray-500 text-xs font-medium bg-white">
                        <BsEye /> {category}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 rounded-full text-gray-500 text-xs font-medium bg-white">
                        {type === 'Online' ? <BsLightningCharge /> : <BsGeoAlt />} {type}
                    </div>
                </div>

                <button className="cursor-pointer bg-blue-600 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg font-medium transition-all flex justify-center items-center gap-2 shadow-sm border border-blue-400/20 w-full sm:w-auto">
                    Detail <BsArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default EventCard;
