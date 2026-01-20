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
                    title="Ngobrol Santai Pejuang LN"
                    description="Di sini, kita belajar bahasa tanpa tekanan, berbagi pengalaman, latihan ngobrol santai, dan saling menguatkan sesama pejuang luar negeri."
                    memberCount="10.5k member"
                    avatarColor="bg-blue-500"
                />
            </div>

            {/* Tabs Navigation */}
            <ForumTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="mt-8">
                {activeTab === 'Tentang' && (
                    <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
                        {/* Sidebar Kiri */}
                        <div className="space-y-6">
                            <ForumAboutCard
                                createdDate="21 Desember 2022"
                                location="Semarang, Jawa Tengah"
                                memberCount="10.521 user"
                                founder="Moh. Nizam Surya"
                            />
                        </div>

                        {/* Content Kanan */}
                        <div className="space-y-6">
                            <ForumInfoCard
                                adminMessage="Selamat datang di Ngobrol Santai Pejuang LN, tempat belajar bahasa tanpa takut salah, tanpa gengsi, dan tanpa drama. Di sini kita belajar bareng, berbagi tips, dan saling dukung dalam perjalanan menuju luar negeri."
                                topics={[
                                    {
                                        title: "Latihan Bahasa & Percakapan",
                                        description: "Ruang aman untuk latihan bahasa saling secara santai."
                                    },
                                    {
                                        title: "Persiapan Studi & Kerja LN",
                                        description: "Diskusi seputar beasiswa, kerja di luar negeri, CV & motivation letter."
                                    },
                                    {
                                        title: "Cerita, Tips, & Mental Pejuang",
                                        description: "Tempat berbagi cerita perjuangan, culture shock, manajemen mental."
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
