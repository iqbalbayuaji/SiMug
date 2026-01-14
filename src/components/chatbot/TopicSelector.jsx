import TopicCard from './TopicCard';

export default function TopicSelector({ topics, selectedTopic, onTopicClick }) {
    return (
        <div className="mb-8">
            <h2 className="text-center text-lg text-blue-400 font-semibold mb-7 animate-fadeIn animation-delay-600">
                Topik-topik pilihan SiMug:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {topics.map((topic, index) => (
                    <TopicCard
                        key={topic.id}
                        topic={topic}
                        isSelected={selectedTopic === topic.id}
                        onClick={onTopicClick}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
