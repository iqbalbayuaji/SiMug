import { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';

export default function ChatConversation({ messages }) {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (!messages || messages.length === 0) {
        return null;
    }

    return (
        <div className="mb-6 animate-slideUp animation-delay-600">
            {/* Chat Container */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 max-h-[500px] overflow-y-auto custom-scrollbar">
                {/* Messages */}
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <ChatMessage
                            key={index}
                            message={msg.text}
                            isUser={msg.isUser}
                            timestamp={msg.timestamp}
                        />
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Typing Indicator (optional, can be shown when bot is typing) */}
            {/* <div className="flex justify-start mt-4">
                <div className="flex items-center space-x-2 px-4 py-3 bg-white rounded-2xl shadow-md border border-gray-200">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
