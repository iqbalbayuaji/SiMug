import React from 'react';
import { BsCalendarEvent, BsCheckCircleFill, BsClockHistory, BsGraphUp } from 'react-icons/bs'; // Using Bootstrap icons as examples, can be swapped

const StatCard = ({ title, count, icon: Icon, colorClass }) => {
    return (
        <div className={`snap-center flex-shrink-0 w-[50%] md:w-full h-25 md:h-32 rounded-2xl lg:py-6 py-4 px-4 text-white relative overflow-hidden flex flex-col justify-between shadow-md ${colorClass}`}>
            {/* Decorative circle */}
            <div className="absolute lg:-right-7 lg:-bottom-10 -right-9 -bottom-11 w-24 h-24 bg-white opacity-20 rounded-full"></div>
            <div className="hidden lg:flex absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-serif">i</span>
            </div>

            <div className="relative z-10">
                <h3 className="text-sm font-medium lg:mb-1 mb-3 opacity-90">{title}</h3>
                <div className="lg:text-4xl text-2xl font-semibold lg:font-bold flex items-baseline gap-2">
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
            colorClass: 'bg-blue-600',
        },
        {
            title: 'Event Diikuti',
            count: 2,
            colorClass: 'bg-blue-500',
        },
        {
            title: 'Event Diselesaikan',
            count: 0,
            colorClass: 'bg-blue-400',
        },
        {
            title: 'Event Mendatang',
            count: 5,
            colorClass: 'bg-blue-300',
        },
    ];

    return (
        <div className="flex overflow-x-auto lg:pb-4 gap-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 mb-5">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default EventStats;
