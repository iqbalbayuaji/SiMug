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
    ChatAnimations
} from '../../components/chatbot';


export default function ChatbotPage() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [message, setMessage] = useState('');
    const [inputMode, setInputMode] = useState('Auto');

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <Navbar />

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <DecorativeBlobs />

                <ChatHeader userName="Rizki Fiko" />

                <TopicSelector
                    topics={topics}
                    selectedTopic={selectedTopic}
                    onTopicClick={handleTopicClick}
                />

                <ChatInput
                    message={message}
                    setMessage={setMessage}
                    inputMode={inputMode}
                    setInputMode={setInputMode}
                />
            </div>

            <ChatAnimations />
        </div>
    );
}