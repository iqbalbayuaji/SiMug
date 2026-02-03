import { useState, useEffect } from 'react';
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
    ChatBackButton,
    ChatSidebar
} from '../../components/chatbot';

import { sendMessageToGroq } from '../../services/api/groq';
import useChatHistory from '../../hooks/useChatHistory';


export default function ChatbotPage() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [message, setMessage] = useState('');
    const [inputMode, setInputMode] = useState('Auto');
    // messages state is now derived/synced with history, but we keep local state for immediate UI updates
    const [messages, setMessages] = useState([]); 
    const [isTyping, setIsTyping] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const { 
        sessions, 
        currentSessionId, 
        createNewSession, 
        updateCurrentSession, 
        loadSession, 
        deleteSession,
        setCurrentSessionId
    } = useChatHistory();

    // Sync messages to history whenever they change (debounce could be added for performance)
    useEffect(() => {
        if (messages.length > 0) {
            updateCurrentSession(messages);
        }
    }, [messages]);

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
            description: 'Konsultasikan teknik olahraga, dan latihan spesifik cabang olahraga.',
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
        setSelectedTopic(prevTopic => prevTopic === topicId ? null : topicId);
    };

    const handleNewChat = () => {
        createNewSession();
        setMessages([]);
        setSelectedTopic(null);
        // Only close sidebar on mobile
        if (window.innerWidth < 1024) {
             setIsSidebarOpen(false);
        }
    };

    const handleLoadSession = (sessionId) => {
        const loadedMessages = loadSession(sessionId);
        setMessages(loadedMessages);
        setSelectedTopic(null); // Reset topic selection when loading history
        // Only close sidebar on mobile
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false);
        }
    };

    const handleDeleteSession = (e, sessionId) => {
        deleteSession(e, sessionId);
        if (currentSessionId === sessionId) {
            setMessages([]);
            setSelectedTopic(null);
        }
    };

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = {
            text: message,
            isUser: true,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };

        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        
        const currentMessage = message; 
        setMessage('');
        setIsTyping(true);

        try {
            // If a topic is selected, prepend it to the message context
            let query = currentMessage;
            const topicObj = topics.find(t => t.id === selectedTopic);
            
            if (topicObj && messages.length === 0) {
                 query = `[Konteks Topik: ${topicObj.title} - ${topicObj.description}] ${currentMessage}`;
            }

            // Send to Groq API (history is passed directly, Groq service handles format)
            const responseText = await sendMessageToGroq(messages, query, inputMode);

            const botMessage = {
                text: responseText,
                isUser: false,
                timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error("Failed to get response from Groq:", error);
            const errorMessage = {
                text: "Maaf, terjadi kesalahan saat menghubungkan ke SiMug AI. Silakan coba lagi nanti.",
                isUser: false,
                timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleReset = () => {
        // "Reset" inside a specific chat might mean clearing screen, 
        // but for now let's map it to New Chat behavior to avoid confusion
        handleNewChat();
    };

    const isConversationActive = messages.length > 0;

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            {/* Standard Navbar - Fixed at top */}
            <div className="flex-none">
                <Navbar />
            </div>

            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar */}
                <ChatSidebar 
                    sessions={sessions}
                    currentSessionId={currentSessionId}
                    onNewChat={handleNewChat}
                    onLoadSession={handleLoadSession}
                    onDeleteSession={handleDeleteSession}
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col relative w-full h-full overflow-hidden transition-all duration-300">
                    
                    {/* Toggle Button (Hamburger/Close) */}
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="absolute top-4 left-4 z-30 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-500 hover:text-blue-600 transition-all duration-200 border border-gray-200"
                        title={isSidebarOpen ? "Tutup Sidebar" : "Buka Sidebar"}
                    >
                         {isSidebarOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>


                    <div className="flex-1 overflow-y-auto w-full">
                        <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${isConversationActive ? 'pb-32' : 'pb-10'}`}>
                            <DecorativeBlobs />

                            {/* Show Header and Topics only when no conversation */}
                            {!isConversationActive && (
                                <div key="topic-view" className="fade-transition pt-10 lg:pt-0">
                                    <ChatHeader userName="Rizki Fiko" />

                                    <TopicSelector
                                        topics={topics}
                                        selectedTopic={selectedTopic}
                                        onTopicClick={handleTopicClick}
                                    />
                                </div>
                            )}

                            {/* Show Back Button (or maybe just standard list) logic */}
                            {isConversationActive && (
                                <div key="conversation-view" className="fade-transition pt-12 lg:pt-0">
                                   {/* Ideally BackButton shouldn't reset everything if we want persistent chat, 
                                       but for now we keep layout similar */}
                                </div>
                            )}

                            {/* Chat Conversation Area */}
                            {messages.length > 0 && (
                                <ChatConversation messages={messages} />
                            )}

                            {/* Typing Indicator */}
                            {isTyping && <TypingIndicator />}

                            {/* Inline Input Area - Shown when NO conversation is active */}
                            {!isConversationActive && (
                                <div className="mt-10">
                                    <ChatInput
                                        message={message}
                                        setMessage={setMessage}
                                        inputMode={inputMode}
                                        setInputMode={setInputMode}
                                        onSend={handleSendMessage}
                                        selectedTopic={topics.find(t => t.id === selectedTopic)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Input Area - Fixed at bottom of main content - Shown ONLY when conversation IS active */}
                    {isConversationActive && (
                        <div className="flex-none w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                            <ChatInput
                                message={message}
                                setMessage={setMessage}
                                inputMode={inputMode}
                                setInputMode={setInputMode}
                                onSend={handleSendMessage}
                                selectedTopic={topics.find(t => t.id === selectedTopic)}
                            />
                        </div>
                    )}
                </main>
            </div>
            
            <ChatAnimations />
        </div>
    );
}