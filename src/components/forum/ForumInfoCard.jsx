import React from 'react';
import ForumTopicCard from './ForumTopicCard';

export default function ForumInfoCard({
    adminMessage = "Selamat datang di Komunitas Kebugaran SiMug! Di sini kita saling berbagi tips latihan, resep sehat, dan saling memotivasi untuk mencapai target kesehatan masing-masing. Tanpa drama, fokus pada progres!",
    topics = [
        {
            title: "Program Latihan & Gym",
            description: "Diskusi seputar program latihan beban, kalistenik, dan tips gym pemula hingga pro."
        },
        {
            title: "Nutrisi & Diet Sehat",
            description: "Berbagi resep makanan sehat, panduan nutrisi, dan cara mengatur pola makan."
        },
        {
            title: "Motivasi & Konsistensi",
            description: "Tempat berbagi tips menjaga semangat latihan dan kesehatan mental."
        }
    ]
}) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 text-white font-semibold relative overflow-hidden">
                <div className="absolute top-1/2 right-5 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <span className="relative z-10">Informasi Forum</span>
                <p className="text-sm font-normal text-gray-100 pt-1 leading-relaxed">
                    Beberapa informasi terkait forum ini.
                </p>
            </div>

            {/* Content */}
            <div className="px-5 py-3 space-y-5">
                {/* Beberapa informasi terkait forum ini */}


                {/* Pesan dari Admin */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                        Pesan dari Admin:
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed pl-3">
                        {adminMessage}
                    </p>
                </div>

                {/* Fokus Topik Forum */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                        Fokus Topik Forum
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-3">
                        {topics.map((topic, index) => (
                            <ForumTopicCard
                                key={index}
                                title={topic.title}
                                description={topic.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
