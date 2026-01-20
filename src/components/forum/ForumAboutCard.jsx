import React from 'react';

export default function ForumAboutCard({
    createdDate = "21 Desember 2022",
    location = "Semarang, Jawa Tengah",
    memberCount = "10.521 user",
    founder = "Moh. Nizam Surya"
}) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 px-5 py-3.5 text-white font-semibold">
                Tentang Forum
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
                {/* Tanggal dibuat */}
                <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-0.5">Tanggal dibuat:</p>
                        <p className="text-base font-medium text-gray-900">{createdDate}</p>
                    </div>
                </div>

                {/* Lokasi Asal */}
                <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-0.5">Lokasi Asal:</p>
                        <p className="text-base font-medium text-gray-900">{location}</p>
                    </div>
                </div>

                {/* Jumlah Member */}
                <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-0.5">Jumlah Member:</p>
                        <p className="text-base font-medium text-gray-900">{memberCount}</p>
                    </div>
                </div>

                {/* Didirikan Oleh */}
                <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm    text-gray-500 mb-0.5">Didirikan Oleh:</p>
                        <p className="text-base font-medium text-gray-900">{founder}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
