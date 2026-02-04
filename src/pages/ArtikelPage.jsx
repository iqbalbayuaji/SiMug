import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/layout/Navbar";
import ForumHeader from "../components/forum/ForumHeader";
import ArtikelContent from "../components/artikel/ArtikelContent";
import ArtikelSidebar from "../components/artikel/ArtikelSidebar";
import { articles } from "../constants/forumData";

export default function ArtikelPage() {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id)) || articles[0];

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Forum Header with Back Button */}
            <ForumHeader showBackButton={true} backTo="/forum" className="animate-slideInLeft" hideBackButtonOnMobile={true} />

            {/* 3. Main Content Container */}
            <div className="w-full max-w-7xl mx-auto mt-2">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column - Main Article */}
                    <main className="w-full lg:flex-1 px-4 lg:px-2 lg:pr-6 animate-slideUp" style={{ animationDelay: '200ms' }}>
                        <ArtikelContent article={article} />
                        <div className="h-6"></div>
                    </main>

                    {/* Right Column - Sidebar (below on mobile, side on desktop) */}
                    <aside className="w-full lg:w-[500px] lg:flex-shrink-0 px-4 lg:px-0 animate-slideUp" style={{ animationDelay: '400ms' }}>
                        <ArtikelSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
}
