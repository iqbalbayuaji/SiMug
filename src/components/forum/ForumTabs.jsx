import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForumTabs({ activeTab, onTabChange, forumId }) {
    const tabs = ['Tentang', 'Threads', 'Diskusi', 'Pertanyaan'];
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const activeTabIndex = tabs.indexOf(activeTab);
        const activeTabElement = tabsRef.current[activeTabIndex];

        if (activeTabElement) {
            setIndicatorStyle({
                left: activeTabElement.offsetLeft,
                width: activeTabElement.offsetWidth
            });
        }
    }, [activeTab]);

    const handleTabClick = (tab) => {
        if (tab === 'Diskusi') {
            navigate(`/forum/room/${forumId}`);
        } else {
            onTabChange && onTabChange(tab);
        }
    };

    return (
        <div className="px-4 lg:px-0 mt-1 lg:mt-6">
            <div className="border-y border-gray-200 lg:px-10 pt-4 relative">
                <div className="flex justify-center lg:justify-start gap-8 relative px-4 lg:px-0">
                    {/* Animated Indicator */}
                    <span
                        className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out"
                        style={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width
                        }}
                    />

                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            ref={(el) => (tabsRef.current[index] = el)}
                            onClick={() => handleTabClick(tab)}
                            className={`cursor-pointer pb-4 px-1 font-medium text-sm transition-colors relative ${activeTab === tab
                                ? 'text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
