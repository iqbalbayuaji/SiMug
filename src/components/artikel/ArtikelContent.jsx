import React, { useState } from 'react';

export default function ArtikelContent() {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    return (
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Featured Image with Padding */}
            <div className="p-5">
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden rounded-xl group">
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop"
                        alt="Featured Article"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* View Stats Overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="text-sm font-medium">4.2k</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span className="text-sm font-medium">1.3k</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="px-8 pb-8">
                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    Olahraga itu "Bukan Sekadar Aktivitas Fisik" aja, tapi juga Proses Bertumbuh.
                </h1>

                {/* Author & Meta Info */}
                <div className="flex items-center gap-4 mb-6 pb-6 pt-2 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://ui-avatars.com/api/?name=Imam+Hambali&background=4177FF&color=fff"
                            alt="Imam Hambali"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-semibold text-gray-900">Imam Hambali</p>
                            <p className="text-xs text-gray-500">2 minggu lalu</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="ml-auto flex items-center gap-2">
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isLiked
                                ? 'border-red-500 bg-red-50 text-red-600'
                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <svg className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Suka
                        </button>
                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isSaved
                                    ? 'border-blue-500 bg-blue-50 text-blue-600'
                                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <svg className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            Simpan
                        </button>
                        <button className="p-2 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Berolahraga sering kali dianggap sebagai <em className="italic font-medium">aktivitas yang melelahkan dan membosankan</em>. Banyak orang memulainya dengan semangat tinggi, namun berhenti di tengah jalan karena merasa <strong className="font-semibold">tidak ada perubahan signifikan</strong>. Padahal, inti dari berolahraga bukanlah seberapa berat latihan yang dilakukan, melainkan bagaimana <strong className="font-semibold">konsistensi dalam prosesnya</strong>.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Kelelahan dan rasa sakit otot adalah bagian alami dari proses latihan. <em className="italic">Semakin konsisten berlatih</em>, semakin kuat pula tubuh dan mental kita terbentuk.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Olahraga adalah investasi untuk kesehatan, bukan sekadar rutinitas. Ketika seseorang terlalu fokus pada hasil instan—takut tidak langsung kurus, takut tidak langsung berotot—proses latihan justru menjadi terhambat. Kelelahan dan tantangan adalah bagian alami dari olahraga. <em className="italic font-medium">Semakin konsisten berlatih</em>, semakin kuat pula tubuh dan mental kita terbentuk.
                    </p>

                    {/* Quote/Highlight */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-[#4177FF] p-6 rounded-r-xl my-6">
                        <p className="text-lg font-medium text-gray-800 italic">
                            "Olahraga adalah investasi untuk kesehatan, bukan sekadar rutinitas. Ketika seseorang terlalu fokus pada hasil instan—takut tidak langsung kurus, takut tidak langsung berotot—proses latihan justru menjadi terhambat. Konsistensi adalah kunci dari segala pencapaian."
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mengapa Konsistensi Lebih Penting?</h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Berolahraga bukan hanya tentang membakar kalori atau membentuk otot. Ini adalah perjalanan yang melibatkan disiplin, kesabaran, dan komitmen jangka panjang. Setiap sesi latihan yang kita lakukan adalah investasi untuk kesehatan masa depan.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Jadi, jangan takut untuk memulai dan menghadapi tantangan. Nikmati prosesnya, dan Anda akan menemukan bahwa berolahraga bisa menjadi pengalaman yang menyenangkan dan memuaskan.
                    </p>
                </div>
            </div>
        </article>
    );
}
