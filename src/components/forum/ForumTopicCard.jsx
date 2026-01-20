import React from 'react';

export default function ForumTopicCard({ title, description, color = "bg-blue-50" }) {
    return (
        <div className={`${color} rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer border border-blue-100`}>
            <h4 className="font-semibold text-blue-500 text-sm mb-2">{title}</h4>
            <p className="text-xs text-blue-400 leading-relaxed">{description}</p>
        </div>
    );
}
