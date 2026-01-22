import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import ForumBanner from '../components/forum/ForumBanner';
import ForumProfileSection from '../components/forum/ForumProfileSection';
import ForumTabs from '../components/forum/ForumTabs';
import ForumAboutCard from '../components/forum/ForumAboutCard';
import ForumInfoCard from '../components/forum/ForumInfoCard';
import ForumThreadSection from '../components/forum/threads/ForumThreadSection';
import ForumQuestionSection from '../components/forum/questions/ForumQuestionSection';

export default function ForumBerandaPage() {
    const [activeTab, setActiveTab] = useState('Tentang');

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Gradient Banner */}
            <ForumBanner />

            <div className="-mt-12 bg-transparent relative z-20">
                <ForumProfileSection
                    title="Komunitas Kebugaran SiMug"
                    description="Wadah berbagi tips kebugaran, pola makan sehat, dan motivasi olahraga harian untuk hidup yang lebih baik."
                    memberCount="12.3k member"
                    avatarColor="bg-blue-500"
                />
            </div>

            {/* Tabs Navigation */}
            <ForumTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="mt-8">
                {activeTab === 'Tentang' && (
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
                        {/* Sidebar Kiri - Hidden on mobile, visible on desktop */}
                        <div className="hidden lg:block space-y-6">
                            <ForumAboutCard
                                createdDate="12 Januari 2023"
                                location="Jakarta, Indonesia"
                                memberCount="12.345 user"
                                founder="Budi Santoso"
                            />
                        </div>

                        {/* Content Kanan */}
                        <div className="space-y-6">
                            <ForumInfoCard
                                adminMessage="Selamat datang di Komunitas Kebugaran SiMug! Di sini kita saling berbagi tips latihan, resep sehat, dan saling memotivasi untuk mencapai target kesehatan masing-masing. Tanpa drama, fokus pada progres!"
                                topics={[
                                    {
                                        title: "Program Latihan & Gym",
                                        description: "Diskusi seputar program latihan beban, kalistenik, dan tips gym pemula hingga pro."
                                    },
                                    {
                                        title: "Nutrisi & Diet Sehat",
                                        description: "Berbagi resep makanan sehat, panduan nutrisi, dan cara mengatur pola makan."
                                    },
                                    {
                                        title: "Motivasi & Konsistensi",
                                        description: "Tempat berbagi tips menjaga semangat latihan dan kesehatan mental."
                                    }
                                ]}
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
