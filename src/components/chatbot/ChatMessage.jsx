export default function ChatMessage({ message, isUser, timestamp }) {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
            <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-center max-w-[80%] sm:max-w-[70%]`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${isUser
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                        : 'bg-gradient-to-br from-purple-500 to-pink-500'
                        } shadow-md`}>
                        {isUser ? (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Message Bubble */}
                <div className="flex flex-col">
                    <div className={`px-4 py-3 rounded-2xl shadow-md ${isUser
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                        } transform transition-all duration-200 hover:shadow-lg`}>
                        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
                            {message}
                        </p>
                    </div>

                    {/* Timestamp */}
                    {timestamp && (
                        <span className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right mr-2' : 'ml-2'}`}>
                            {timestamp}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
