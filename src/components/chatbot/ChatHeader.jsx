export default function ChatHeader({ userName = "Rizki Fiko" }) {
    return (
        <div className="text-center lg:mb-10 mb-6 relative z-10 animate-fadeIn">
            <div className="inline-block mb-10 animate-float">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-slideDown">
                    AI berbasis <span className="font-bold">Groq</span>
                </span>
            </div>

            {/* Desktop: With line break */}
            <h1 className="hidden lg:block text-5xl font-semibold text-gray-900 mb-9 animate-slideUp">
                Selamat Pagi, <span className="bg-gradient-to-r from-sky-600 via-blue-800 to-blue-400 bg-clip-text text-transparent">{userName}!</span>
                <br />
                Apa yang mau di diskusikan?
            </h1>

            {/* Mobile: Single line */}
            <h1 className="lg:hidden text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 animate-slideUp">
                Selamat Pagi, <span className="bg-gradient-to-r from-sky-600 via-blue-800 to-blue-400 bg-clip-text text-transparent">{userName}!</span> Apa yang mau di diskusikan?
            </h1>

            <p className="text-base font-normal sm:text-lg text-gray-500 max-w-2xl px-3 mx-auto animate-slideUp animation-delay-400 mb-18 md:mb-0">
                Pilih topik, lalu mulai diskusi. Kamu juga bisa mengunggah gambar,
                tautan, atau dokumen untuk dianalisis sesuai kebutuhanmu.
            </p>
        </div>
    );
}
