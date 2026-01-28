import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'simug_chat_history';

export default function useChatHistory() {
    const [sessions, setSessions] = useState([]);
    const [currentSessionId, setCurrentSessionId] = useState(null);

    // Load history from local storage on mount
    useEffect(() => {
        const storedHistory = localStorage.getItem(STORAGE_KEY);
        if (storedHistory) {
            try {
                const parsed = JSON.parse(storedHistory);
                // Sort by timestamp desc
                const sorted = parsed.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setSessions(sorted);
            } catch (e) {
                console.error("Failed to parse chat history", e);
            }
        }
    }, []);

    // Save to local storage whenever sessions change
    useEffect(() => {
        if (sessions.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
        }
    }, [sessions]);

    const createNewSession = () => {
        const newId = uuidv4();
        const newSession = {
            id: newId,
            title: 'Percakapan Baru',
            messages: [],
            timestamp: new Date().toISOString()
        };
        
        setSessions(prev => [newSession, ...prev]);
        setCurrentSessionId(newId);
        return newId;
    };

    const updateCurrentSession = (messages) => {
        if (!currentSessionId) {
            // If no session is active but we are trying to save messages, create one
            const newId = createNewSession();
            // We need to update the newly created session immediately
            setSessions(prev => prev.map(session => 
                session.id === newId 
                    ? { ...session, messages, title: generateTitle(messages) } 
                    : session
            ));
            return;
        }

        setSessions(prev => prev.map(session => 
            session.id === currentSessionId 
                ? { ...session, messages, title: generateTitle(messages), timestamp: new Date().toISOString() } 
                : session
        ));
    };

    const loadSession = (sessionId) => {
        const session = sessions.find(s => s.id === sessionId);
        if (session) {
            setCurrentSessionId(sessionId);
            return session.messages;
        }
        return [];
    };

    const deleteSession = (e, sessionId) => {
        e.stopPropagation(); // Prevent triggering loadSession
        setSessions(prev => prev.filter(s => s.id !== sessionId));
        if (currentSessionId === sessionId) {
            setCurrentSessionId(null);
        }
    };

    // Helper to generate simple title from first user message
    const generateTitle = (msgs) => {
        if (!msgs || msgs.length === 0) return 'Percakapan Baru';
        const firstUserMsg = msgs.find(m => m.isUser);
        if (firstUserMsg) {
            return firstUserMsg.text.substring(0, 30) + (firstUserMsg.text.length > 30 ? '...' : '');
        }
        return 'Percakapan Baru';
    };

    return {
        sessions,
        currentSessionId,
        createNewSession,
        updateCurrentSession,
        loadSession,
        deleteSession,
        setCurrentSessionId // Exposed if needed to manually clear
    };
}
