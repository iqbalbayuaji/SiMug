export default function TopicCard({ topic, isSelected, onClick, index }) {
    return (
        <div
            onClick={() => onClick(topic.id)}
            className={`group rounded-xl sm:rounded-2xl p-3 sm:p-4 cursor-pointer transform transition-all duration-300 ease-out hover:scale-98 hover:shadow-xl border-2 animate-slideUp 
                ${isSelected ? 'bg-blue-500 border-blue-500 shadow-lg' : 'bg-white border-gray-200'}`}
            style={{ animationDelay: `${200 + index * 150}ms` }}
        >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 transform transition-transform duration-300 group-hover:rotate-12 ${isSelected ? 'bg-white border-blue-500 shadow-lg' : 'bg-blue-200 border-gray-200'}`}>
                {(typeof topic.icon === 'string' && (topic.icon.includes('/') || topic.icon.includes('.'))) ? (
                    <img src={topic.icon} alt={topic.title} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                ) : (
                    <span className="text-xl sm:text-2xl">{topic.icon}</span>
                )}
            </div>

            <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 transition-colors ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {topic.title}
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed transition-colors line-clamp-2 sm:line-clamp-none ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                {topic.description}
            </p>
        </div>
    );
}
