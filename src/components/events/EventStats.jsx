import React from 'react';
import { BsCalendarEvent, BsCheckCircleFill, BsClockHistory, BsGraphUp } from 'react-icons/bs'; // Using Bootstrap icons as examples, can be swapped

const StatCard = ({ title, count, icon: Icon, colorClass }) => {
    return (
        <div className={`rounded-2xl p-6 text-white relative overflow-hidden h-32 flex flex-col justify-between shadow-md ${colorClass}`}>
            {/* Decorative circle */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-20 rounded-full"></div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-serif">i</span>
            </div>

            <div className="relative z-10">
                <h3 className="text-sm font-medium mb-1 opacity-90">{title}</h3>
                <div className="text-4xl font-bold flex items-baseline gap-2">
                    {count}
                    <span className="text-lg font-normal opacity-80">Event</span>
                </div>
            </div>
        </div>
    );
};

const EventStats = () => {
    const stats = [
        {
            title: 'Event Tersedia',
            count: 10,
            colorClass: 'bg-blue-600', // Approximate color
        },
        {
            title: 'Event Diikuti',
            count: 2,
            colorClass: 'bg-blue-400', // Lighter blue
        },
        {
            title: 'Event Diselesaikan',
            count: 0,
            colorClass: 'bg-blue-300', // Even lighter
        },
        {
            title: 'Event Mendatang',
            count: 5,
            colorClass: 'bg-blue-200', // Lightest
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default EventStats;
