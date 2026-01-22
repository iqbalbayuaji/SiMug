import React from 'react';

export default function ThreadItem({
    avatarColor = "bg-rose-500",
    name = "Rifqi Aditya",
    username = "@rifqirachman",
    time = "Dijawab 1 hari lalu",
    question = {
        author: "@irullfattr",
        text: "Berapa lama waktu ideal per hari supaya latihan tetap konsisten?",
        time: "Pertanyaan 2 hari lalu"
    },
    content = (
        <>
            <p className="mb-4">
                Pertanyaan ini sangat bagus, dan justru menandakan satu hal penting: <em className="italic">kamu peduli dengan proses, bukan cuma hasilnya.</em> Banyak orang gagal dalam program latihan bukan karena kurang motivasi, tapi karena terlalu menuntut diri sendiri di awal.
            </p>
            <p>
                Langkah pertama yang paling penting adalah menentukan durasi yang realistis. Jangan langsung berpikir, "Aku mau latihan 2 jam setiap hari." Itu target yang berat di awal. Untuk pemula, target yang jauh lebih sehat adalah: 30 menit per sesi, 3 kali seminggu. Olahraga itu soal konsistensi jangka panjang, bukan sekadar gaya hidup sesaat.
            </p>
        </>
    ),
    isFollowing = true
}) {
    return (
        <div className="flex gap-4 group">
            {/* Left Column: Avatar & Thread Line */}
            <div className="flex flex-col items-center flex-shrink-0 w-12">
                <div className={`w-12 h-12 rounded-full ${avatarColor} flex-shrink-0 z-10 shadow-sm`} />
                {/* Thread Connector Line */}
                <div className="flex-1 w-full relative">
                    {/* The vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-6 w-[2px] bg-gray-200"></div>

                    {/* The curve connector to question box */}
                    <div className="absolute top-6 left-1/2 -ml-[1px] w-8 h-8 border-b-[2px] border-l-[2px] border-gray-200 rounded-bl-3xl"></div>
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1 pb-10">
                {/* Header Info */}
                <div className="flex items-center gap-2 mb-3 pt-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
                    {isFollowing && (
                        <button className="text-blue-600 text-sm font-bold cursor-pointer hover:underline">
                            • Ikuti
                        </button>
                    )}
                    <span className="text-gray-400 text-sm">
                        • {username} • {time}
                    </span>
                </div>

                {/* Quoted Question Box */}
                {question && (
                    <div className="bg-blue-50/50 rounded-2xl p-6 mb-6 relative">
                        {/* Blue accent on left */}
                        <div className="absolute left-0 top-6 bottom-6 w-1 bg-blue-400 rounded-r-full"></div>

                        <div className="pl-3">
                            <div className="text-sm text-gray-500 mb-1">
                                Pertanyaan oleh <span className="font-medium text-gray-700">{question.author}:</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-xl mb-2 leading-tight">
                                {question.text}
                            </h4>
                            <div className="text-xs text-gray-400 font-medium">
                                {question.time}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                    {content}
                </div>
            </div>
        </div>
    )
}
