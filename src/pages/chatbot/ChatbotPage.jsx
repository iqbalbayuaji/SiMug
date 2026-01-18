import { useState } from 'react';
import Navbar from "../../components/layout/Navbar";

import miIcon from '../../assets/icon/mi.png';
import basketmiIcon from '../../assets/icon/basket.png';
import dumbleIcon from '../../assets/icon/dumble.png';

import {
    DecorativeBlobs,
    ChatHeader,
    TopicSelector,
    ChatInput,
    ChatAnimations,
    ChatConversation,
    TypingIndicator,
    ChatBackButton
} from '../../components/chatbot';


export default function ChatbotPage() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [message, setMessage] = useState('');
    const [inputMode, setInputMode] = useState('Auto');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const topics = [
        {
            id: 'nutrisi',
            title: 'Nutrisi',
            description: 'Bahas pola makan, kebutuhan gizi, resep sehat, serta strategi nutrisi.',
            icon: miIcon,
        },
        {
            id: 'olahraga',
            title: 'Olahraga',
            description: 'Konsultasikan teknik olahraga, dan latihan spesifik cabang sport.',
            icon: basketmiIcon,
        },
        {
            id: 'binaraga',
            title: 'Binaraga',
            description: 'Diskusikan latihan fisik, program gym, dan teknik gerakan.',
            icon: dumbleIcon,
        }
    ];

    const handleTopicClick = (topicId) => {
        // Toggle: if clicking the same topic, deselect it; otherwise select the new topic
        setSelectedTopic(prevTopic => prevTopic === topicId ? null : topicId);
    };

    const handleSendMessage = () => {
        if (!message.trim()) return;

        // Add user message
        const userMessage = {
            text: message,
            isUser: true,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setMessage('');

        // Simulate bot typing
        setIsTyping(true);

        // Simulate bot response after 1.5 seconds
        setTimeout(() => {
            const botMessage = {
                text: `Terima kasih atas pertanyaan Anda tentang ${selectedTopic || 'kesehatan'}! Saya akan membantu Anda dengan informasi yang relevan.`,
                isUser: false,
                timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleReset = () => {
        setMessages([]);
        setMessage('');
        setSelectedTopic(null);
        setIsTyping(false);
    };

    const isConversationActive = messages.length > 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <Navbar />

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <DecorativeBlobs />

                {/* Show Header and Topics only when no conversation */}
                {!isConversationActive && (
                    <div key="topic-view" className="fade-transition">
                        <ChatHeader userName="Rizki Fiko" />

                        <TopicSelector
                            topics={topics}
                            selectedTopic={selectedTopic}
                            onTopicClick={handleTopicClick}
                        />
                    </div>
                )}

                {/* Show Back Button when conversation is active */}
                {isConversationActive && (
                    <div key="conversation-view" className="fade-transition">
                        <ChatBackButton onReset={handleReset} />
                    </div>
                )}

                {/* Chat Conversation Area */}
                {messages.length > 0 && (
                    <ChatConversation messages={messages} />
                )}

                {/* Typing Indicator */}
                {isTyping && <TypingIndicator />}

                <ChatInput
                    message={message}
                    setMessage={setMessage}
                    inputMode={inputMode}
                    setInputMode={setInputMode}
                    onSend={handleSendMessage}
                />
            </div>

            <ChatAnimations />
        </div>
    );
}