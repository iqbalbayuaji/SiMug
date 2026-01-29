export default function TopicCard({ topic, isSelected, onClick, index, isMobile = false }) {
    if (isMobile) {
        // Mobile: Slim pill-shaped card without description (smaller size)
        return (
            <div
                onClick={() => onClick(topic.id)}
                className={`group rounded-full px-3 py-1.5 cursor-pointer transform transition-all duration-300 ease-out hover:scale-105 border-2 animate-slideUp flex-shrink-0 flex items-center gap-1.5
                    ${isSelected ? 'bg-blue-500 border-blue-500 shadow-lg' : 'bg-white border-gray-200'}`}
                style={{ 
                    animationDelay: `${200 + index * 150}ms`,
                    boxShadow: '0 4px 20px 0 #E7EEFF'
                }}
            >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-white' : 'bg-blue-200'}`}>
                    {(typeof topic.icon === 'string' && (topic.icon.includes('/') || topic.icon.includes('.'))) ? (
                        <img src={topic.icon} alt={topic.title} className="w-3 h-3 object-contain" />
                    ) : (
                        <span className="text-xs">{topic.icon}</span>
                    )}
                </div>

                <h3 className={`text-xs font-semibold whitespace-nowrap transition-colors ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                    {topic.title}
                </h3>
            </div>
        );
    }

    // Desktop: Full card with description
    return (
        <div
            onClick={() => onClick(topic.id)}
            className={`group rounded-2xl p-4 cursor-pointer transform transition-all duration-300 ease-out hover:scale-98 hover:shadow-xl border-2 animate-slideUp 
                ${isSelected ? 'bg-blue-500 border-blue-500 shadow-lg' : 'bg-white border-gray-200'}`}
            style={{ 
                animationDelay: `${200 + index * 150}ms`,
                boxShadow: '0 4px 20px 0 #E7EEFF'
            }}
        >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transform transition-transform duration-300 group-hover:rotate-12 ${isSelected ? 'bg-white border-blue-500 shadow-lg' : 'bg-blue-200 border-gray-200'}`}>
                {(typeof topic.icon === 'string' && (topic.icon.includes('/') || topic.icon.includes('.'))) ? (
                    <img src={topic.icon} alt={topic.title} className="w-8 h-8 object-contain" />
                ) : (
                    <span className="text-2xl">{topic.icon}</span>
                )}
            </div>

            <h3 className={`text-lg font-bold mb-2 transition-colors ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {topic.title}
            </h3>

            <p className={`text-sm leading-relaxed transition-colors ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                {topic.description}
            </p>
        </div>
    );
}
