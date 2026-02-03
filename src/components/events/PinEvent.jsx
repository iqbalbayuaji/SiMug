import React from 'react';
import { BsInfoCircleFill, BsPinAngleFill, BsCalendarEvent, BsX } from 'react-icons/bs';
import Event1 from '../../assets/images/event1.png';
import Event2 from '../../assets/images/event2.png';
import Event3 from '../../assets/images/event3.png';

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
        <button className="cursor-pointer bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full h-fit self-center">
            Lanjutkan →
        </button>
    </div>
);

const PinEvent = ({ className = "", onClose }) => {
    return (
        <div className={`bg-white border border-gray-100 rounded-2xl p-4 mb-6 shadow-sm ${className}`}>
            <div className="flex justify-between items-center mb-4 text-blue-600">
                <div className="flex items-center gap-2 font-bold text-lg">
                    <BsPinAngleFill /> PIN Event
                </div>
                {onClose ? (
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <BsX size={27} />
                    </button>
                ) : (
                    <BsInfoCircleFill className="opacity-50 text-gray-400" />
                )}
            </div>
            <div className="space-y-3">
                <PinEventItem title="Marathon Campaign Kota..." date="1 Jan - 2 Feb" image={Event1} />
                <PinEventItem title="Train Boxing with Coach..." date="1 Jan - 2 Feb" image={Event2} />
                <PinEventItem title="Train Boxing with Coach..." date="1 Jan - 2 Feb" image={Event3} />
            </div>
        </div>
    );
};

export default PinEvent;
