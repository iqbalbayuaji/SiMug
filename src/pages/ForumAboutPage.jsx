import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ForumAboutCard from '../components/forum/ForumAboutCard';

export default function ForumAboutPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <ForumAboutCard
                    createdDate="21 Desember 2022"
                    location="Semarang, Jawa Tengah"
                    memberCount="10.521 user"
                    founder="Moh. Nizam Surya"
                    showBackButton={true}
                    onBackClick={() => navigate(-1)}
                />
            </div>
        </div>
    );
}
