import React from 'react';
import Navbar from "../components/layout/Navbar";
import ForumHeader from "../components/forum/ForumHeader";
import TrendingSection from "../components/forum/TrendingSection";
import ActionCards from "../components/forum/ActionCards";
import ThreadFeed from "../components/forum/ThreadFeed";
import ForumSidebar from "../components/forum/ForumSidebar";

export default function Forum() {
    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden font-sans">
            {/* 1. Navbar (Fixed at top) */}
            <div className="flex-shrink-0 z-50">
                <Navbar />
            </div>

            {/* 2. Forum Header (Fixed below Navbar) */}
            <div className="flex-shrink-0 z-40">
                <ForumHeader />
            </div>

            {/* 3. Main Content Container */}
            <div className="flex-1 flex overflow-hidden w-full max-w-7xl mx-auto">
                {/* Left Column - Scrollable */}
                <main className="flex-1 overflow-y-auto custom-scrollbar p-6">
                    <TrendingSection />
                    <ActionCards />
                    <ThreadFeed />
                    {/* Extra padding at bottom for comfortable scrolling */}
                    <div className="h-20"></div>
                </main>

                {/* Right Column - Fixed Sidebar (Non-scrollable as requested) */}
                <aside className="hidden lg:block w-96 flex-shrink-0 border-l border-gray-100 p-6 h-full overflow-hidden">
                    <ForumSidebar />
                </aside>
            </div>
        </div>
    );
}