import TopicCard from './TopicCard';

export default function TopicSelector({ topics, selectedTopic, onTopicClick }) {
    return (
        <div className="mb-8">
            <h2 className="text-center text-lg text-blue-400 font-semibold mb-5 md:mb-7 animate-fadeIn animation-delay-600">
                Topik-topik pilihan SiMug:
            </h2>

            {/* Mobile: Horizontal Scroll */}
            <div className="flex lg:hidden gap-3 overflow-x-auto scrollbar-hide mb-8 pb-2 px-4 snap-x">
                {topics.map((topic, index) => (
                    <TopicCard
                        key={topic.id}
                        topic={topic}
                        isSelected={selectedTopic === topic.id}
                        onClick={onTopicClick}
                        index={index}
                        isMobile={true}
                    />
                ))}
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
                {topics.map((topic, index) => (
                    <TopicCard
                        key={topic.id}
                        topic={topic}
                        isSelected={selectedTopic === topic.id}
                        onClick={onTopicClick}
                        index={index}
                        isMobile={false}
                    />
                ))}
            </div>
        </div>
    );
}
