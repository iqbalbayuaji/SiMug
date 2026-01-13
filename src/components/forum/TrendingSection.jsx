import React from 'react';

const trendingArticles = [
    {
        id: 1,
        category: 'Fitness',
        title: 'Bagaimana cara menjaga konsistensi workout dirumah?',
        author: 'Imam Hambali',
        time: '2 minggu lalu',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Gym/Fitness
    },
    {
        id: 2,
        category: 'Atletik',
        title: 'Bagaimana cara menjaga konsistensi workout dirumah?',
        author: 'Imam Hambali',
        time: '2 minggu lalu',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Home workout
    },
    {
        id: 3,
        category: 'Workout',
        title: 'Bagaimana cara menjaga konsistensi workout dirumah?',
        author: 'Imam Hambali',
        time: '2 minggu lalu',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Outdoor workout
    },
];

export default function TrendingSection() {
    return (
        <section className="mb-8 mt-2">
            <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
                {trendingArticles.map((article) => (
                    <div
                        key={article.id}
                        className="flex-shrink-0 w-[300px] h-[200px] relative rounded-xl overflow-hidden shadow-md cursor-pointer group snap-center"
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-md border border-white/30">
                                {article.category}
                            </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg leading-tight mb-1 line-clamp-2">
                                {article.title}
                            </h3>
                            <div className="text-gray-300 text-xs flex gap-2">
                                <span>{article.author}</span>
                                <span>•</span>
                                <span>{article.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
