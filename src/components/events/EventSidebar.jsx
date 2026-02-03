import { BsInfoCircleFill, BsPinAngleFill, BsCalendarEvent, BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PinEvent from './PinEvent';


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




const EventPromo = () => {
    return (
        <motion.div
            whileHover={{ y: -3, scale: 1.00 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-pointer bg-blue-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-md group"
        >
            <div className="absolute left-0 top-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-130"></div>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white opacity-20 rounded-full translate-x-1/2 translate-y-1/2 transition-transform duration-300 group-hover:scale-130"></div>

            <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-1">Bingung mau ikut event apa?</h3>
                <p className="text-blue-100 text-sm mb-4">Tanyain aja ke MUGION sekarang!</p>
                <button className="cursor-pointer bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors w-fit ml-auto">
                    Hi, MUG
                </button>
            </div>
        </motion.div>
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
