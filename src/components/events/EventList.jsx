import React, { useState, useEffect } from 'react';
import { BsSearch, BsPinAngleFill, BsX } from 'react-icons/bs';
import EventCard from './EventCard';
import PinEvent from './PinEvent';
import Event1 from '../../assets/images/event1.png';
import Event2 from '../../assets/images/event2.png';
import Event3 from '../../assets/images/event3.png';
import FitnessCard from '../../assets/images/fitness_training_card.png';

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
            description: "Tantangan selama 30 hari yang berfokus pada peningkatan kekuatan tubuh secara bertahap dan aman. Setiap fase dirancang untuk membantu tubuh beradaptasi dengan baik, dimulai dari latihan dasar hingga kombinasi gerakan yang lebih menantang.",
            tags: ["Kolaborasi", "Terbatas"],
            stats: { likes: 203, participants: 150, shares: 23 },
            type: "Online",
            category: "Kolaborasi",
            isFollowed: true
        },
        {
            id: 2,
            title: "Urban Night Run: Jakarta Selatan 5K",
            sponsor: "SIMUG x Adidas Indonesia",
            image: Event2,
            date: "15 Feb 2026",
            description: "Rasakan sensasi lari malam di jantung Jakarta Selatan. Rute aman dengan fasilitas water station setiap 2km dan medali eksklusif untuk semua finisher. Bergabunglah dengan ratusan pelari lainnya!",
            tags: ["Trending", "Offline"],
            stats: { likes: 512, participants: 300, shares: 89 },
            type: "Offline",
            category: "Trending",
            isFollowed: false
        },
        {
            id: 3,
            title: "Webinar: Strategi Nutrisi untuk Recovery Otot",
            sponsor: "SIMUG Health Team",
            image: Event3,
            date: "10 Feb 2026",
            description: "Pelajari bagaimana nutrisi yang tepat dapat mempercepat proses pemulihan otot setelah latihan intens. Dibawakan oleh ahli gizi olahraga bersertifikat.",
            tags: ["Edukasi", "Gratis"],
            stats: { likes: 124, participants: 450, shares: 45 },
            type: "Online",
            category: "SIMUG",
            isFollowed: false
        },
        {
            id: 4,
            title: "Masterclass: Teknik Angkat Beban yang Benar",
            sponsor: "SIMUG Academy",
            image: FitnessCard,
            date: "20 Feb 2026",
            description: "Sesi intensif 3 jam mendalami teknik dasar hingga advanced dalam latihan angkat beban (Weightlifting) untuk menghindari cedera dan memaksimalkan hasil.",
            tags: ["Pro", "Workshop"],
            stats: { likes: 342, participants: 50, shares: 12 },
            type: "Online",
            category: "SIMUG",
            isFollowed: true
        },
    ];

    const filteredEvents = mockEvents.filter(event => {
        if (activeTab === 'Semua') return true;
        if (activeTab === 'Diikuti') return event.isFollowed;
        if (activeTab === 'Trending') return event.category === 'Trending';
        if (activeTab === 'Event SIMUG') return event.category === 'SIMUG';
        if (activeTab === 'Event Kolaborasi') return event.category === 'Kolaborasi';
        return true;
    });

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
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-gray-400">Belum ada event di kategori ini.</p>
                    </div>
                )}
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
