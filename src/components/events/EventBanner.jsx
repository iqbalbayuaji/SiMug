import React from 'react';

const EventBanner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white mb-5 relative overflow-hidden shadow-lg">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-2xl">
                <h1 className="text-3xl font-bold mb-4">
                    Ikut Event, Buktikan Kemampuan,
                    <br />
                    dan Dapatkan Reward!
                </h1>
                <p className="text-blue-50 text-lg leading-relaxed">
                    Setiap event memberi tantangan, arahan,
                    <br />
                    dan reward nyata untuk membantumu
                    <br />
                    terus bergerak maju.
                </p>
            </div>
        </div>
    );
};

export default EventBanner;
