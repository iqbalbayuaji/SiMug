import React from 'react';
import Navbar from "../components/layout/Navbar";
import ForumHeader from "../components/forum/ForumHeader";
import TrendingSection from "../components/forum/TrendingSection";
import ActionCards from "../components/forum/ActionCards";
import ThreadFeed from "../components/forum/ThreadFeed";
import ForumSidebar from "../components/forum/ForumSidebar";

export default function Forum() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Forum Header */}
            <ForumHeader className="animate-slideInLeft" />

            {/* 3. Main Content Container */}
            <div className="w-full max-w-7xl mx-auto mt-2">
                <div className="flex gap-3">
                    {/* Left Column */}
                    <main className="flex-1 pr-6 animate-slideUp" style={{ animationDelay: '200ms' }}>
                        <TrendingSection />
                        <ActionCards />
                        <ThreadFeed />
                        {/* Extra padding at bottom for comfortable scrolling */}
                        <div className="h-20"></div>
                    </main>

                    {/* Right Column */}
                    <aside className="hidden lg:block flex-shrink-0 w-80 animate-slideUp" style={{ animationDelay: '400ms' }}>
                        <ForumSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
}