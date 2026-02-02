import React from 'react';
import { BsInfoCircleFill, BsPinAngleFill, BsCalendarEvent, BsArrowRight } from 'react-icons/bs';
import Event1 from '../../assets/images/event1.png';
import Event2 from '../../assets/images/event2.png';
import Event3 from '../../assets/images/event3.png';

const DailyGrind = () => {
    const tasks = [
        { id: 1, text: "Pilih satu event dan baca deskripsi", done: false },
        { id: 2, text: "Tandai event (PIN) yang menarik", done: false },
        { id: 3, text: "Bagikan informasi event (share)", done: false },
    ];

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-6 shadow-sm">
            <div className="bg-blue-600 rounded-xl p-4 text-white mb-4 relative overflow-hidden">
                {/* Decor */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg">Daily Grind</h3>
                    <BsInfoCircleFill className="opacity-70" />
                </div>
                <div className="flex justify-between items-end text-sm opacity-90">
                    <span>Jum'at, 30 Januari</span>
                    <span>0/3 selesai</span>
                </div>
            </div>

            <div className="space-y-3">
                {tasks.map(task => (
                    <div key={task.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 bg-white">
                        <div>
                            <p className="text-sm font-medium text-gray-800">{task.text}</p>
                            <p className="text-xs text-gray-400">Belum selesai</p>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-blue-200"></div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex justify-between items-center bg-blue-50 p-3 rounded-xl">
                <span className="text-blue-600 text-xs font-bold bg-blue-100 px-2 py-1 rounded">Reward: +250 XP</span>
                <button className="bg-blue-200 text-white px-4 py-1.5 rounded-lg text-xs font-bold cursor-not-allowed flex items-center gap-1" disabled>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" /></svg>
                    Klaim Reward
                </button>
            </div>
        </div>
    );
};

const PinEventItem = ({ image, title, date }) => (
    <div className="flex gap-3 bg-white border border-gray-100 p-3 rounded-xl hover:shadow-sm transition-shadow">
        <div className="w-20 h-14 bg-gray-200 rounded-lg overflow-hidden shrink-0">
            {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-gray-300"></div>}
        </div>
        <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-gray-900 truncate">{title}</h4>
            <div className="flex items-center text-xs text-blue-500 mt-1">
                <BsCalendarEvent className="mr-1" />
                {date}
            </div>
        </div>
        <button className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full h-fit self-center">
            Lanjutkan →
        </button>
    </div>
);

const PinEvent = () => {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4 text-blue-600">
                <div className="flex items-center gap-2 font-bold text-lg">
                    <BsPinAngleFill /> PIN Event
                </div>
                <BsInfoCircleFill className="opacity-50 text-gray-400" />
            </div>
            <div className="space-y-3">
                <PinEventItem title="Marathon Campaign Kota..." date="1 Jan - 2 Feb" image={Event1} />
                <PinEventItem title="Train Boxing with Coach..." date="1 Jan - 2 Feb" image={Event2} />
                <PinEventItem title="Train Boxing with Coach..." date="1 Jan - 2 Feb" image={Event3} />
            </div>
        </div>
    );
};

const EventPromo = () => {
    return (
        <div className="bg-blue-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-md">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1">Bingung mau ikut event apa?</h3>
                <p className="text-blue-100 text-sm mb-4">Tanyain aja ke MUGION sekarang!</p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors w-fit ml-auto">
                    ✨ Hi, MUG
                </button>
            </div>
        </div>
    );
};

const EventSidebar = () => {
    return (
        <div className="flex flex-col">
            <DailyGrind />
            <PinEvent />
            <EventPromo />
        </div>
    );
};

export default EventSidebar;
