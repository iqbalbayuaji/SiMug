import React, { useState, useEffect } from 'react';
import { BsSearch, BsPinAngleFill, BsX } from 'react-icons/bs';
import EventCard from './EventCard';
import PinEvent from './PinEvent';
import Event1 from '../../assets/images/event1.png';
import Event2 from '../../assets/images/event2.png';

const EventList = () => {
    const [activeTab, setActiveTab] = useState('Semua');
    const [showPinPopup, setShowPinPopup] = useState(false);

    // Prevent scrolling when popup is open
    useEffect(() => {
        if (showPinPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showPinPopup]);

    const tabs = ['Semua', 'Diikuti', 'Trending', 'Event SIMUG', 'Event Kolaborasi'];

    const mockEvents = [
        {
            id: 1,
            title: "30 Hari Tantangan Tubuh Lebih Kuat | Edisi 2026",
            sponsor: "SIMUG x Pocari Sweat Indonesia",
            image: Event1,
            date: "1 Jan - 2 Feb",
            description: "Tantangan selama 30 hari yang berfokus pada peningkatan kekuatan tubuh secara bertahap dan aman. Setiap fase dirancang untuk membantu tubuh beradaptasi dengan baik, dimulai dari latihan dasar hingga kombinasi gerakan yang lebih menantang. Event ini cocok bagi kamu yang ingin membangun kekuatan...",
            tags: ["Kolaborasi", "Terbatas"],
            stats: { likes: 203, participants: 150, shares: 23 },
            type: "Online",
            category: "Umum"
        },
        {
            id: 2,
            title: "30 Hari Tantangan Tubuh Lebih Kuat | Edisi 2026",
            sponsor: "SIMUG x Pocari Sweat Indonesia",
            image: Event2,
            date: "1 Jan - 2 Feb",
            description: "Tantangan selama 30 hari yang berfokus pada peningkatan kekuatan tubuh secara bertahap dan aman...",
            tags: ["Kolaborasi", "Terbatas"],
            stats: { likes: 203, participants: 150, shares: 23 },
            type: "Online",
            category: "Umum"
        },
    ];

    return (
        <div className="bg-white rounded-2xl p-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex justify-between items-start w-full md:w-auto md:block">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">Event yang Tersedia</h2>
                        <p className="text-gray-500">Berikut adalah event yang bisa diikuti</p>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setShowPinPopup(true)}
                            className="cursor-pointer bg-white border border-gray-200 p-3 rounded-full text-blue-600 shadow-sm active:scale-95 transition-transform"
                        >
                            <BsPinAngleFill size={20} />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-64">
                        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Telusuri nama event..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                    </div>
                    <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                        Cari
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6 overflow-x-auto">
                <div className="flex space-x-6 min-w-max">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === tab
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* List */}
            <div>
                {mockEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            {/* Mobile Pin Popup */}
            {showPinPopup && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:hidden animate-fade-in" onClick={() => setShowPinPopup(false)}>
                    <div className="w-full max-w-sm relative animate-slide-up" onClick={e => e.stopPropagation()}>
                        <PinEvent className="shadow-2xl !mb-0" onClose={() => setShowPinPopup(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventList;
