import { useState, useRef, useEffect } from 'react';

export default function ChatInput({ message, setMessage, inputMode, setInputMode, onSend }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAttachDropdownOpen, setIsAttachDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const attachDropdownRef = useRef(null);

    const modes = ['Auto', 'Santai', 'Terarah', 'Mendalam'];
    const attachOptions = [
        { id: 'document', label: 'Dokumen', icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
        { id: 'image', label: 'Gambar', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (attachDropdownRef.current && !attachDropdownRef.current.contains(event.target)) {
                setIsAttachDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend?.();
        }
    };

    const handleModeSelect = (mode) => {
        setInputMode(mode);
        setIsDropdownOpen(false);
    };

    const handleAttachOption = (optionId) => {
        console.log('Attach option selected:', optionId);
        // TODO: Implement file upload logic
        setIsAttachDropdownOpen(false);
    };

    return (
        <div className="max-w-screen max-h-[80px] lg:max-h-screen animate-slideUp animation-delay-1200">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col space-y-4">
                    {/* Input Area */}
                    <div className="flex-1">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Mulai percakapan dengan SiMug..."
                            className="w-full resize-none border-0 focus:ring-0 text-gray-700 placeholder-gray-400 text-base sm:text-lg outline-none"
                            rows="3"
                        />
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                            {/* Attach Button */}
                            <div className="relative" ref={attachDropdownRef}>
                                <button
                                    onClick={() => setIsAttachDropdownOpen(!isAttachDropdownOpen)}
                                    className="p-2 bg-white hover:bg-gray-200 border-2 border-gray-200 rounded-full transition-colors duration-200 group"
                                >
                                    <svg className="w-5 h-5 text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>

                                {/* Attach Dropdown Menu */}
                                {isAttachDropdownOpen && (
                                    <div className="absolute bottom-full left-0 mb-2 w-44 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-fadeIn">
                                        {attachOptions.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => handleAttachOption(option.id)}
                                                className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 text-gray-700 hover:bg-gray-50 flex items-center space-x-3"
                                            >
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={option.icon} />
                                                </svg>
                                                <span>{option.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mode Selector */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center space-x-3 px-3 py-1.5 bg-white hover:bg-gray-200 rounded-full border border-gray-300 transition-colors duration-200"
                                >
                                    <span className="text-sm font-medium text-blue-600">{inputMode}</span>
                                    <svg
                                        className={`w-4 h-4 text-blue-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute bottom-full left-0 mb-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-fadeIn">
                                        {modes.map((mode) => (
                                            <button
                                                key={mode}
                                                onClick={() => handleModeSelect(mode)}
                                                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${inputMode === mode
                                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {mode}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Send Button */}
                        <button
                            onClick={onSend}
                            className="p-3 bg-gradient-to-r from-sky-600 from-0% via-blue-400 via- to-blue-200 to- rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg group"
                        >
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
