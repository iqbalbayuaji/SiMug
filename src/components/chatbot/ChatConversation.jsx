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
            {/* Messages without container */}
            <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
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
        </div>
    );
}
