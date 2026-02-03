import { useState } from 'react'
import { FiPaperclip, FiSmile, FiSend } from 'react-icons/fi'

export default function MessageInput() {
    const [message, setMessage] = useState('')

    const handleSend = () => {
        if (message.trim()) {
            // Handle send message
            console.log('Sending:', message)
            setMessage('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3">
                <button className="text-blue-500 hover:text-blue-600 transition-colors">
                    <FiPaperclip className="w-5 h-5" />
                </button>

                <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Kirim pesan ke forum"
                        className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    />
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                        <FiSmile className="w-5 h-5" />
                    </button>
                </div>

                <button
                    onClick={handleSend}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2.5 transition-colors"
                >
                    <FiSend className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
