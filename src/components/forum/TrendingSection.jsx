import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../constants/forumData';

export default function TrendingSection() {
    return (
        <section className="mb-1 lg:mt-2">
            <h2 className="block lg:hidden text-lg font-bold text-gray-800 mb-3.5 mt-2">Artikel Populer</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 lg:custom-scrollbar snap-x">
                {articles.map((article) => (
                    <Link
                        key={article.id}
                        to={`/artikel/${article.id}`}
                        className="flex-shrink-0 w-[300px] h-[200px] relative rounded-xl overflow-hidden shadow-md cursor-pointer group snap-center"
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full">
                                {article.category}
                            </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-medium lg:font-bold text-base lg:text-lg leading-tight mb-1 line-clamp-2">
                                {article.title}
                            </h3>
                            <div className="text-gray-300 text-xs flex gap-2">
                                <span>{article.author}</span>
                                <span>•</span>
                                <span>{article.time}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

