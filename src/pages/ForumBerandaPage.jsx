import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ForumBanner from '../components/forum/ForumBanner';
import ForumProfileSection from '../components/forum/ForumProfileSection';
import ForumTabs from '../components/forum/ForumTabs';
import ForumAboutCard from '../components/forum/ForumAboutCard';
import ForumInfoCard from '../components/forum/ForumInfoCard';
import ForumThreadSection from '../components/forum/threads/ForumThreadSection';
import ForumQuestionSection from '../components/forum/questions/ForumQuestionSection';
import { forums } from '../constants/forumData';

export default function ForumBerandaPage() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('Tentang');

    // Default to first forum if no ID or not found (or handle 404)
    const activeForum = forums.find(f => f.id === parseInt(id)) || forums[0];

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Gradient Banner */}
            <ForumBanner />

            <div className="-mt-12 bg-transparent relative z-20">
                <ForumProfileSection
                    title={activeForum.name}
                    description={activeForum.description}
                    memberCount={`${activeForum.members} member`}
                    avatarColor={activeForum.color}
                />
            </div>

            {/* Tabs Navigation */}
            <ForumTabs activeTab={activeTab} onTabChange={setActiveTab} forumId={activeForum.id} />

            <div className="mt-8">
                {activeTab === 'Tentang' && (
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
                        {/* Sidebar Kiri - Hidden on mobile, visible on desktop */}
                        <div className="hidden lg:block space-y-6">
                            <ForumAboutCard
                                createdDate={activeForum.foundedDate}
                                location={activeForum.location}
                                memberCount={`${activeForum.stats.members} user`}
                                founder={activeForum.founder}
                            />
                        </div>

                        {/* Content Kanan */}
                        <div className="space-y-6">
                            <ForumInfoCard
                                adminMessage={activeForum.aboutMessage}
                                topics={activeForum.topics}
                            />
                        </div>
                    </div>
                )}

                {activeTab === 'Threads' && (
                    <ForumThreadSection />
                )}

                {(activeTab === 'Diskusi') && (
                    <div className="text-center py-12 text-gray-500">
                        <p>Konten {activeTab} akan muncul di sini.</p>
                    </div>
                )}

                {activeTab === 'Pertanyaan' && (
                    <ForumQuestionSection />
                )}
            </div>
        </div>
    );
}
