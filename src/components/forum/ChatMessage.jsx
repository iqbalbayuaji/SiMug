export default function ChatMessage({ message }) {
    const getAvatarColor = (name) => {
        const colors = [
            'bg-yellow-400',
            'bg-blue-400',
            'bg-purple-400',
            'bg-green-400',
            'bg-red-400',
            'bg-pink-400',
            'bg-indigo-400',
            'bg-teal-400'
        ]
        const index = name.charCodeAt(0) % colors.length
        return colors[index]
    }

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <div className="flex gap-3 p-3 md:p-4 ml-0 md:ml-5 hover:bg-gray-50 transition-colors">
            {/* Avatar */}
            <div className={`w-10 h-10 rounded-full ${getAvatarColor(message.username)} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-semibold text-sm">
                    {getInitials(message.username)}
                </span>
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">
                        {message.username}
                    </span>
                    <span className="text-xs text-gray-400">
                        {message.time}
                    </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                    {message.content}
                </p>
            </div>
        </div>
    )
}
