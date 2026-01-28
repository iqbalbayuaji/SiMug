import React from 'react';

export default function ChatSidebar({ 
    sessions, 
    currentSessionId, 
    onNewChat, 
    onLoadSession, 
    onDeleteSession,
    isOpen,
    onClose 
}) {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside 
                className={`
                    fixed lg:static inset-y-0 left-0 z-40
                    bg-white border-r border-gray-100 flex flex-col
                    transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    ${isOpen ? 'w-72' : 'w-72 lg:w-0 lg:overflow-hidden lg:border-none'}
                `}
            >

                {/* Header / New Chat */}
                <div className="p-4 border-b border-gray-100">
                    <button
                        onClick={() => {
                            onNewChat();
                            if (window.innerWidth < 1024) onClose(); 
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="font-medium">Percakapan Baru</span>
                    </button>
                </div>

                {/* History List */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin scrollbar-thumb-gray-200">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2 mt-2">
                        Riwayat Chat
                    </h3>
                    
                    {sessions.length === 0 ? (
                        <div className="text-center py-8 px-4">
                            <p className="text-sm text-gray-400">Belum ada riwayat chat.</p>
                        </div>
                    ) : (
                        sessions.map((session) => (
                            <div 
                                key={session.id}
                                onClick={() => {
                                    onLoadSession(session.id);
                                    if (window.innerWidth < 1024) onClose();
                                }}
                                className={`
                                    group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200
                                    ${currentSessionId === session.id 
                                        ? 'bg-blue-50 text-blue-700' 
                                        : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'}
                                `}
                            >
                                <div className="flex items-center space-x-3 overflow-hidden">
                                    <svg 
                                        className={`w-5 h-5 flex-shrink-0 ${currentSessionId === session.id ? 'text-blue-500' : 'text-gray-400'}`} 
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <div className="flex flex-col overflow-hidden">
                                        <span className="text-sm font-medium truncate w-40">
                                            {session.title}
                                        </span>
                                        <span className="text-[10px] opacity-70">
                                            {new Date(session.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                                        </span>
                                    </div>
                                </div>

                                {/* Delete Button (Show on hover or strict active) */}
                                <button
                                    onClick={(e) => onDeleteSession(e, session.id)}
                                    className={`
                                        opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-red-100 hover:text-red-600 transition-all duration-200
                                        ${window.matchMedia('(hover: none)').matches ? 'opacity-100' : ''} 
                                    `}
                                    title="Hapus percakapan"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Info */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-xs text-gray-500 text-center">
                        SiMug AI v2.5
                    </p>
                </div>
            </aside>
        </>
    );
}
