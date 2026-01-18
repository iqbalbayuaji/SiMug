import React from 'react';
import Navbar from "../components/layout/Navbar";
import ForumHeader from "../components/forum/ForumHeader";
import ArtikelContent from "../components/artikel/ArtikelContent";
import ArtikelSidebar from "../components/artikel/ArtikelSidebar";

export default function ArtikelPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Forum Header with Back Button */}
            <ForumHeader showBackButton={true} backTo="/forum" className="animate-slideInLeft" />

            {/* 3. Main Content Container */}
            <div className="w-full max-w-7xl mx-auto mt-2">
                <div className="flex ">
                    {/* Left Column - Main Article */}
                    <main className="flex-1 pr-6 animate-slideUp" style={{ animationDelay: '200ms' }}>
                        <ArtikelContent />
                        {/* Extra padding at bottom for comfortable scrolling */}
                        <div className="h-20"></div>
                    </main>

                    {/* Right Column - Sidebar */}
                    <aside className="hidden lg:block flex-shrink-0 w-[500px] animate-slideUp" style={{ animationDelay: '400ms' }}>
                        <ArtikelSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
}
