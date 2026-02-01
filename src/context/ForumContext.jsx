import React, { createContext, useState, useContext } from 'react';

const ForumContext = createContext();

export const questionTypes = [
    { id: 1, name: 'Pertanyaan Umum', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-blue-100 text-blue-600', active: true },
    { id: 2, name: 'Pertanyaan Forum', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', color: 'text-gray-600', active: false },
    { id: 3, name: 'Ramai didiskusikan', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'text-gray-600', active: false }
];

export const relevantTopics = [
    'Lari Pagi', 'Gym', 'Calisthenics', 'Diet Sehat', 'Kardio', 'Yoga', 'Renang', 'Sepeda', 'Marathon', 'Otot', 'Nutrisi'
];

export function ForumProvider({ children }) {
    const [activeQuestionType, setActiveQuestionType] = useState(questionTypes[0]);
    const [hasSelectedTopics, setHasSelectedTopics] = useState(false);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const addTopic = (topic) => {
        if (!selectedTopics.includes(topic)) {
            setSelectedTopics([...selectedTopics, topic]);
            setHasSelectedTopics(true);
        }
    };

    const removeTopic = (topic) => {
        const updated = selectedTopics.filter(t => t !== topic);
        setSelectedTopics(updated);
        if (updated.length === 0) {
            setHasSelectedTopics(false);
        }
    };

    return (
        <ForumContext.Provider value={{
            activeQuestionType,
            setActiveQuestionType,
            hasSelectedTopics,
            setHasSelectedTopics,
            selectedTopics,
            addTopic,
            removeTopic
        }}>
            {children}
        </ForumContext.Provider>
    );
}

export function useForum() {
    return useContext(ForumContext);
}
