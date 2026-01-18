import React from 'react';

export default function ArtikelContent() {
    return (
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Featured Image with Padding */}
            <div className="p-5">
                <div className="relative w-full h-96 bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden rounded-xl group">
                    <img
                        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop"
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
                    Belajar Bahasa itu "Bukan Sekadar Hafalan" aja, tapi juga Proses Bertumbuh.
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
                            <p className="text-xs text-gray-500">2 mingu lalu</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="ml-auto flex items-center gap-2">
                        <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Suka
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        Belajar bahasa sering kali dianggap sebagai <em className="italic font-medium">proses yang rumit dan melelahkan</em>. Banyak orang memulainya dengan semangat tinggi, namun berhenti di tengah jalan karena merasa <strong className="font-semibold">tidak berkembang</strong>. Padahal, inti dari belajar bahasa bukanlah seberapa banyak kosakata yang dihafal, melainkan bagaimana <strong className="font-semibold">proses belajar justru menjadi terhambat</strong>.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Kesalahan itu bagian alami dari pembelajaran bahasa. <em className="italic">Semakin sering salah</em>, semakin terbentuk pula intuisi berbahasa yang kuat.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Bahasa adalah alat komunikasi, bukan kumpulan rumus. Ketika seseorang terlalu fokus pada kesempurnaan—takut salah grammar, takut pengucapan keliru—proses belajar justru menjadi terhambat. Kesalahan itu bagian alami dari pembelajaran bahasa. <em className="italic font-medium">Semakin sering salah</em>, semakin terbentuk pula intuisi berbahasa yang kuat.
                    </p>

                    {/* Quote/Highlight */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-[#4177FF] p-6 rounded-r-xl my-6">
                        <p className="text-lg font-medium text-gray-800 italic">
                            "Bahasa adalah alat komunikasi, bukan kumpulan rumus. Ketika seseorang terlalu fokus pada kesempurnaan—takut salah grammar, takut pengucapan keliru—proses belajar justru menjadi terhambat. Kesalahan itu bagian alami dari pembelajaran bahasa."
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mengapa Proses Lebih Penting?</h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Belajar bahasa bukan hanya tentang menghafal kata-kata atau aturan tata bahasa. Ini adalah perjalanan yang melibatkan pemahaman budaya, konteks, dan cara berpikir yang berbeda. Setiap kesalahan yang kita buat adalah kesempatan untuk belajar dan tumbuh.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Jadi, jangan takut untuk mencoba dan membuat kesalahan. Nikmati prosesnya, dan Anda akan menemukan bahwa belajar bahasa bisa menjadi pengalaman yang menyenangkan dan memuaskan.
                    </p>
                </div>
            </div>
        </article>
    );
}
