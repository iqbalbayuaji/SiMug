export default function ChatInput({ message, setMessage, inputMode, setInputMode }) {
    return (
        <div className="max-w-screen max-h-[80px] lg:max-h-screen animate-slideUp animation-delay-1200">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col space-y-4">
                    {/* Input Area */}
                    <div className="flex-1">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Mulai percakapan dengan SiMug..."
                            className="w-full resize-none border-0 focus:ring-0 text-gray-700 placeholder-gray-400 text-base sm:text-lg outline-none"
                            rows="3"
                        />
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                            {/* Attach Button */}
                            <button className="p-2 bg-white hover:bg-gray-200 border-2 border-gray-200 rounded-full transition-colors duration-200 group">
                                <svg className="w-5 h-5 text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>

                            {/* Mode Selector */}
                            <div className="relative">
                                <button
                                    onClick={() => setInputMode(inputMode === 'Auto' ? 'Manual' : 'Auto')}
                                    className="flex items-center space-x-3 px-3 py-1.5 bg-white hover:bg-gray-200 rounded-full border border-gray-300 transition-colors duration-200"
                                >
                                    <span className="text-sm font-medium text-blue-600">{inputMode}</span>
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Send Button */}
                        <button className="p-3 bg-gradient-to-r from-sky-600 from-0% via-blue-400 via- to-blue-200 to- rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg group">
                            <svg className="w-5 h-5 text-white rotate-90" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <p className="text-center text-xs sm:text-sm text-gray-500 mt-7 px-12 animate-fadeIn animation-delay-1400">
                SiMug AI juga bisa melakukan kesalahan. Pelajari lebih lanjut tentang{' '}
                <a href="#" className="text-gray-700 underline hover:text-blue-600 transition-colors">
                    pedoman pengguna
                </a>
            </p>
        </div>
    );
}
