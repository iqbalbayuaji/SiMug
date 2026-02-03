import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EventBanner from '../components/events/EventBanner';
import EventStats from '../components/events/EventStats';
import EventList from '../components/events/EventList';
import EventSidebar from '../components/events/EventSidebar';

const EventsPage = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const sidebarVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="container mx-auto px-4 py-8">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-5"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div className="lg:col-span-2" variants={containerVariants}>
                        <motion.div variants={itemVariants}>
                            <EventBanner />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <EventStats />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <EventList />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="lg:col-span-1"
                        variants={sidebarVariants}
                    >
                        <EventSidebar />
                    </motion.div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default EventsPage;
