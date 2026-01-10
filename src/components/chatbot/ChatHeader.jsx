export default function ChatHeader({ userName = "Rizki Fiko" }) {
    return (
        <div className="text-center lg:mb-10 mb-6 relative z-10 animate-fadeIn">
            <div className="inline-block mb-10">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-slideDown">
                    AI berbasis ngrok
                </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-9 animate-slideUp">
                Selamat Pagi, <span className="bg-gradient-to-r from-sky-600 via-blue-800 to-blue-400 bg-clip-text text-transparent">{userName}!</span>
                <br />
                Apa yang mau di diskusikan?
            </h1>


            <p className="text-base font-normal sm:text-base text-gray-500 max-w-2xl mx-auto animate-slideUp animation-delay-400">
                Pilih topik, lalu mulai diskusi. Kamu juga bisa mengunggah gambar,
                tautan, atau dokumen untuk dianalisis sesuai kebutuhanmu.
            </p>
        </div>
    );
}
