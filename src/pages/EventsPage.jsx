import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EventBanner from '../components/events/EventBanner';
import EventStats from '../components/events/EventStats';
import EventList from '../components/events/EventList';
import EventSidebar from '../components/events/EventSidebar';

const EventsPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="container mx-auto px-4 py-8">
                {/* <EventBanner />
                <EventStats /> */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2">
                        <EventBanner />
                        <EventStats />
                        <EventList />
                    </div>
                    <div className="lg:col-span-1">
                        <EventSidebar />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default EventsPage;
