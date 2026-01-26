import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import gridHiasan from "../assets/images/grid-hiasan.png"
import ImageCard1 from "../assets/images/fitness_training_card.png"
import ImageCard2 from "../assets/images/running_progress_card.png"
import ImageCard3 from "../assets/images/community_fitness_card.png"
import landingAsset1 from "../assets/images/landing-asset1.png"
import landingAsset2 from "../assets/images/landing-asset2.png"
import roadImg1 from "../assets/images/road-img-1.png"
import roadImg2 from "../assets/images/road-img-2.png"
import roadImg3 from "../assets/images/road-img-3.png"
import step1 from "../assets/images/step-1.png"
import step2 from "../assets/images/step-2.png"
import step3 from "../assets/images/step-3.png"
import lineBlue from "../assets/images/lineblue.png"
import bottomBlueComponent from "../assets/images/bottom-blue-component.png"
import { FaArrowTrendUp, FaInstagram, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6"
import { HiLightningBolt, HiMenu, HiX } from "react-icons/hi"
import Footer from '../components/layout/Footer'
import CourseCard from '../components/CourseCard'
import { landingCourses } from '../constants/landingCoursesData'
import { testimonialsRow1, testimonialsRow2 } from '../constants/testimonialsData'

// Mascot imports
import Mascot1 from "../assets/maskot/mascot1.png"
import Mascot2 from "../assets/maskot/mascot2.png"
import Mascot3 from "../assets/maskot/mascot3.png"
import Mascot4 from "../assets/maskot/mascot4.png"
import Mascot5 from "../assets/maskot/mascot5.png"

// Counter component with framer-motion
function Counter({ value, duration = 2 }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => {
        const num = Math.round(latest)
        return num.toLocaleString('id-ID')
    })

    useEffect(() => {
        const controls = animate(count, value, { duration })
        return controls.stop
    }, [count, value, duration])

    return <motion.span>{rounded}</motion.span>
}

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mascotScattered, setMascotScattered] = useState(false)
    const [activeCategory, setActiveCategory] = useState('Kebugaran')
    const mascotSectionRef = useRef(null)

    // Use courses data from separate file
    const courses = landingCourses

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Scroll animation for glassmorphism card
            const scrollElements = document.querySelectorAll('.scroll-animate')
            scrollElements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top
                const elementVisible = 150
                if (elementTop < window.innerHeight - elementVisible) {
                    el.classList.add('opacity-100', 'translate-y-0')
                    el.classList.remove('opacity-0', 'translate-y-8')
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Intersection Observer for mascot scatter animation (reversible)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Set scattered true when entering, false when leaving
                    setMascotScattered(entry.isIntersecting)
                })
            },
            { threshold: 0.3 }
        )

        if (mascotSectionRef.current) {
            observer.observe(mascotSectionRef.current)
        }

        return () => {
            if (mascotSectionRef.current) {
                observer.unobserve(mascotSectionRef.current)
            }
        }
    }, [])

    return (
        <div className="min-h-screen relative overflow-hidden ">
            {/* Decorative Grid Patterns - Hidden on small mobile */}
            <div className='hidden sm:block absolute opacity-50 h-20 w-20 left-30 top-50 lg:h-40 lg:w-40 lg:left-110 lg:top-50'>
                <img src={gridHiasan} alt="" />
            </div>

            <div className='hidden sm:block absolute opacity-50 h-30 w-30 -right-20 top-15 lg:h-40 lg:w-40 lg:-right-20 lg:top-30'>
                <img src={gridHiasan} alt="" />
            </div>

            {/* Decorative Blobs - More subtle and comfortable */}
            <div className="hidden md:block absolute lg:-left-32 lg:top-[750px] -left-24 top-[500px] w-40 h-40 lg:w-80 lg:h-80 rounded-full bg-blue-400/40 blur-[100px]" />
            <div className="hidden md:block absolute lg:-left-20 lg:top-[800px] -left-16 top-[550px] w-32 h-32 lg:w-60 lg:h-60 rounded-full bg-blue-300/30 blur-[80px]" />

            <div className="hidden lg:block absolute top-[850px] left-1/2 -translate-x-1/2 w-[500px] h-32 rounded-full bg-blue-300/25 blur-[120px]" />

            <div className="hidden md:block absolute lg:-right-32 lg:top-[750px] -right-24 top-[500px] w-40 h-40 lg:w-80 lg:h-80 rounded-full bg-blue-400/40 blur-[100px]" />
            <div className="hidden md:block absolute lg:-right-20 lg:top-[800px] -right-16 top-[550px] w-32 h-32 lg:w-60 lg:h-60 rounded-full bg-blue-300/30 blur-[80px]" />

            {/* Navigation Bar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                            SiMug
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                            <a href="#tentang" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                Tentang
                            </a>
                            <a href="#fitur" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                Fitur Kami
                            </a>
                            <a href="#course" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                Course Preview
                            </a>
                            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                                FAQ
                            </a>
                        </div>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                            <Link
                                to="/register"
                                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors px-4 py-2"
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/login"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Sign In
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-blue-600 focus:outline-none"
                            >
                                {isMenuOpen ? (
                                    <HiX className="h-8 w-8" />
                                ) : (
                                    <HiMenu className="h-8 w-8" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-16 left-0 right-0 shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-gray-100 animate-fade-in-down">
                        <a href="#tentang" className="text-gray-600 hover:text-blue-600 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                            Tentang
                        </a>
                        <a href="#fitur" className="text-gray-600 hover:text-blue-600 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                            Fitur Kami
                        </a>
                        <a href="#course" className="text-gray-600 hover:text-blue-600 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                            Course Preview
                        </a>
                        <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
                            FAQ
                        </a>

                        {/* Mobile Auth Buttons */}
                        <div className="flex flex-col gap-3 pt-2">
                            <Link
                                to="/register"
                                className="text-center text-blue-600 font-semibold py-2 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign Up
                            </Link>
                            <Link
                                to="/login"
                                className="text-center bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40">
                <div className="flex flex-col lg:flex-col items-center justify-between relative">
                    {/* Decorative Icon Spans */}
                    {/* Green Icon - Top Left */}
                    <span className="absolute top-8 left-4 lg:top-12 lg:left-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#41FFC9] to-[#2DD4A8] rounded-2xl shadow-lg shadow-green-400/50 rotate-12 animate-fade-in-up">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>

                    {/* Orange Icon - Top Right */}
                    <span className="absolute top-16 right-4 lg:top-20 lg:right-20 inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#FF6741] to-[#FF4520] rounded-2xl shadow-lg shadow-orange-400/50 -rotate-12 animate-fade-in-up delay-100">
                        <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </span>

                    {/* Main Heading */}
                    <div className="grid place-items-center lg:text-center space-y-6 lg:space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-7 shadow-md">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-sm lg:text-base">#1 Platform Edukasi Kesehatan</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold leading-tight flex flex-col items-center gap-3 lg:gap-3">
                            <span className="text-blue-600 animate-fade-in-up">Usaha Aja Gaakan Cukup</span>
                            <div className='flex items-center lg:gap-3 animate-fade-in-up delay-100'>
                                <span className="text-gray-900">Tanpa Arah yang Jelas</span>
                                <span className="inline-flex items-center justify-center w-9 h-9 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-300 to-blue-600 rounded-xl lg:rounded-2xl ml-3 shadow-lg shadow-blue-400/70 -rotate-12">
                                    <FaArrowTrendUp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                </span>
                            </div>

                        </h1>

                        {/* Description */}
                        <p className="text-gray-900 text-base font-normal text-center lg:text-xl max-w-110 mx-auto lg:mx-0 mt-2 leading-relaxed animate-fade-in-up delay-200">
                            Panduan sehat yang jelas, progresif, dan nggak ribet. Dari gratis sampai advance, semua ada jalurnya di <span className="font-bold text-gray-900">SiMug</span>
                        </p>

                        {/* CTA Button */}
                        <div className="pt-15 pb-10 animate-fade-in-up delay-300">
                            <Link
                                to="/register"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                            >
                                Gabung Sekarang
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Mascot Section with Scatter Animation */}
                        <div
                            ref={mascotSectionRef}
                            className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full max-w-5xl mx-auto mb-10"
                        >
                            {/* Mascot 1 - Center (main character with breathing effect) */}
                            <div
                                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                                    transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                    ${mascotScattered ? 'scale-125' : 'scale-100'}`}
                            >
                                <img
                                    src={Mascot1}
                                    alt="Mascot Center"
                                    className={`w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain 
                                        ${mascotScattered ? 'animate-mascot-center mascot-hover-effect' : 'drop-shadow-[0_0_60px_rgba(59,130,246,0.7)]'}`}
                                />
                            </div>

                            {/* Mascot 2 - Top Left */}
                            <div
                                className={`absolute transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                    ${mascotScattered
                                        ? 'left-[0%] md:left-[5%] top-[5%] opacity-100 scale-100'
                                        : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50'}`}
                            >
                                <img
                                    src={Mascot2}
                                    alt="Mascot Top Left"
                                    className={`w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain 
                                        ${mascotScattered ? 'animate-mascot-float-1 mascot-hover-effect' : ''}`}
                                />
                            </div>

                            {/* Mascot 3 - Top Right */}
                            <div
                                className={`absolute transition-all duration-900 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-75
                                    ${mascotScattered
                                        ? 'right-[0%] md:right-[5%] top-[0%] opacity-100 scale-100'
                                        : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50'}`}
                            >
                                <img
                                    src={Mascot3}
                                    alt="Mascot Top Right"
                                    className={`w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain 
                                        ${mascotScattered ? 'animate-mascot-float-2 mascot-hover-effect' : ''}`}
                                />
                            </div>

                            {/* Mascot 4 - Bottom Left */}
                            <div
                                className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-150
                                    ${mascotScattered
                                        ? 'left-[2%] md:left-[8%] bottom-[5%] opacity-100 scale-100'
                                        : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50'}`}
                            >
                                <img
                                    src={Mascot4}
                                    alt="Mascot Bottom Left"
                                    className={`w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain 
                                        ${mascotScattered ? 'animate-mascot-float-3 mascot-hover-effect' : ''}`}
                                />
                            </div>

                            {/* Mascot 5 - Bottom Right */}
                            <div
                                className={`absolute transition-all duration-1100 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200
                                    ${mascotScattered
                                        ? 'right-[2%] md:right-[8%] bottom-[8%] opacity-100 scale-100'
                                        : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50'}`}
                            >
                                <img
                                    src={Mascot5}
                                    alt="Mascot Bottom Right"
                                    className={`w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain 
                                        ${mascotScattered ? 'animate-mascot-float-4 mascot-hover-effect' : ''}`}
                                />
                            </div>
                        </div>

                        {/* Social Proof Stats */}
                        <div className="mx-2 sm:mx-4 md:mx-10">
                            <div className="max-w-screen mx-auto bg-white rounded-2xl self-center shadow-lg p-4 sm:p-6 lg:px-7 lg:py-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center h-full">
                                    {/* Stat 1 - 50.000+ (No border-left) */}
                                    <div className="text-left pl-6 pr-2">
                                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                            <Counter value={50000} duration={2} />+
                                        </h4>
                                        <p className="text-gray-600 text-sm lg:text-base mt-2 leading-relaxed">
                                            User telah aktif dan gabung bersama SiMug
                                        </p>
                                    </div>

                                    {/* Stat 2 - 10.000+ */}
                                    <div className="text-left border-l-2 border-gray-200 pl-6 pr-2">
                                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                            <Counter value={10000} duration={2} />+
                                        </h4>
                                        <p className="text-gray-600 text-sm lg:text-base mt-2 leading-relaxed">
                                            User telah mencoba dan membuktikan hasil mereka
                                        </p>
                                    </div>

                                    {/* Stat 3 - 250+ */}
                                    <div className="text-left border-l-2 border-gray-200 pl-6 pr-2">
                                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                            <Counter value={250} duration={1.5} />+
                                        </h4>
                                        <p className="text-gray-600 text-sm lg:text-base mt-2 leading-relaxed">
                                            Mentor aktif dan terverifikasi
                                        </p>
                                    </div>

                                    {/* Stat 4 - 1.000+ */}
                                    <div className="text-left border-l-2 border-gray-200 pl-6 pr-2">
                                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                            <Counter value={1000} duration={1.8} />+
                                        </h4>
                                        <p className="text-gray-600 text-sm lg:text-base mt-2 leading-relaxed">
                                            Komunitas aktif diseluruh wilayah Indonesia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Why Choose SiMug Section - Smooth blue transition */}
            <div className="relative -mt-36 mb-16 h-40 bg-gradient-to-b from-white via-blue-400/80 to-white"></div>
            <section className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="mb-16 lg:mb-15">
                        <div className="flex gap-4 ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center flex w-full">
                                {/* Left: Main Title */}
                                <div className='flex gap-4'>
                                    <div className="w-1.5 bg-blue-600 h-16 lg:h-23 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                                            Temukan Jalur Sehatmu<br />
                                            dan Bangun Versi Sehatmu
                                        </h2>
                                    </div>
                                </div>

                                {/* Right: Description */}
                                <div>
                                    <h3 className="text-xl lg:text-1xl font-semibold text-gray-900 mb-2">
                                        Kenapa sih harus pilih <span className="text-blue-600">SiMug</span>
                                    </h3>
                                    <p className="text-gray-700 text-base lg:text-ms leading-relaxed">
                                        SiMug itu tempat bagi kamu yang pengin hidup sehat tapi nggak mau ribet. SiMug nyediain course, komunitas, dan AI yang bakal nemenin progres hidup sehat jauh lebih mudah.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                        {/* Card 1 */}
                        <div className="p-3 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="h-64 lg:h-72 overflow-hidden rounded-2xl">
                                <img
                                    src={ImageCard1}
                                    alt="Fitness Training"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="pt-4 px-1">
                                <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-4">
                                    Membantu hidup sehat dengan arah yang jelas
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-2">
                                    SiMug menyediakan program dan course progresif agar pengguna tidak bingung harus mulai dari mana dan bisa berkembang sesuai level.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className=" p-3 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="h-64 lg:h-72 overflow-hidden rounded-2xl">
                                <img
                                    src={ImageCard2}
                                    alt="Fitness Training"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="pt-4 px-1">
                                <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-4">
                                    Membantu hidup sehat dengan arah yang jelas
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-2">
                                    SiMug menyediakan program dan course progresif agar pengguna tidak bingung harus mulai dari mana dan bisa berkembang sesuai level.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className=" p-3 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="h-64 lg:h-72 overflow-hidden rounded-2xl">
                                <img
                                    src={ImageCard3}
                                    alt="Fitness Training"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="pt-4 px-1">
                                <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-4">
                                    Membantu hidup sehat dengan arah yang jelas
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-2">
                                    SiMug menyediakan program dan course progresif agar pengguna tidak bingung harus mulai dari mana dan bisa berkembang sesuai level.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-10 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Title & Description Items */}
                        <div className="flex flex-col h-full mr-10">
                            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-3">
                                Apa aja benefit yang <br className="hidden lg:block" />
                                <span className="text-blue-600">SiMug</span> Tawarkan?
                            </h2>
                            <p className="text-gray-600 text-base lg:text-xl md:text-lg leading-relaxed">
                                Semua fitur disusun secara progresif, bisa dimulai gratis, dan didampingi oleh mentor, komunitas, serta AI assistant.
                            </p>
                        </div>

                        {/* Benefit Card 1 - AI Health Companion */}
                        <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl aspect-[14/5] w-full shadow-xl overflow-hidden p-6 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.02] border border-blue-400/20">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-300 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-300 to-transparent glow-border-right"></div>
                            </div>
                            {/* Animated Circuit Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="circuit1" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                        <path d="M30 0 L30 20 M30 40 L30 60 M0 30 L20 30 M40 30 L60 30" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
                                        <circle cx="30" cy="30" r="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                                        <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.8)"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#circuit1)"/>
                            </svg>
                            {/* Animated Glow Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-blue-300/30 transition-all duration-700"></div>
                            {/* Floating Particles */}
                            <div className="absolute top-4 right-10 w-2 h-2 bg-blue-300/60 rounded-full group-hover:animate-ping"></div>
                            <div className="absolute bottom-6 right-20 w-1.5 h-1.5 bg-blue-200/50 rounded-full group-hover:animate-ping" style={{animationDelay: '0.5s'}}></div>
                            <div className="relative z-10 flex items-center gap-5 h-full">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-500/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-300/30 group-hover:border-blue-200/50 group-hover:bg-blue-400/40 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                    <svg className="w-7 h-7 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-100 transition-colors">AI-Powered Health Companion</h3>
                                    <p className="text-blue-200 text-sm leading-relaxed">Asisten AI cerdas yang siap membantu 24/7 menjawab pertanyaan kesehatan dan memberikan rekomendasi personal.</p>
                                </div>
                            </div>
                        </div>

                        {/* Benefit Card 2 - Personalized Learning Path */}
                        <div className="group relative bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl aspect-[14/5] w-full shadow-xl overflow-hidden p-6 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-500 hover:scale-[1.02] border border-blue-500/20">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-300 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-300 to-transparent glow-border-right"></div>
                            </div>
                            {/* Hexagon Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-15 group-hover:opacity-30 transition-opacity duration-500" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="hexagon2" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                                        <polygon points="25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" transform="translate(0,-3)"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#hexagon2)"/>
                            </svg>
                            {/* Diagonal Lines */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-[1px] bg-gradient-to-r from-blue-300/50 to-transparent rotate-45 group-hover:translate-x-20 group-hover:translate-y-20 transition-transform duration-1000"></div>
                                <div className="absolute -top-5 -right-5 w-32 h-[1px] bg-gradient-to-r from-blue-400/30 to-transparent rotate-45 group-hover:translate-x-16 group-hover:translate-y-16 transition-transform duration-700 delay-100"></div>
                            </div>
                            <div className="absolute top-0 left-1/3 w-24 h-24 bg-blue-500/15 rounded-full blur-2xl group-hover:scale-200 transition-transform duration-1000"></div>
                            <div className="absolute top-2 left-8 w-1 h-8 bg-gradient-to-b from-blue-300/50 to-transparent group-hover:h-12 transition-all duration-500"></div>
                            <div className="relative z-10 flex items-center gap-5 h-full">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-600/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-400/30 group-hover:border-blue-300/50 group-hover:bg-blue-500/40 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                    <svg className="w-7 h-7 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-100 transition-colors">Personalized Learning Path</h3>
                                    <p className="text-blue-200 text-sm leading-relaxed">Jalur belajar yang disesuaikan dengan level dan goalmu. Dari pemula sampai advanced, semua terstruktur rapi.</p>
                                </div>
                            </div>
                        </div>

                        {/* Benefit Card 3 - Expert Mentorship */}
                        <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl aspect-[14/5] w-full shadow-xl overflow-hidden p-6 hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-500 hover:scale-[1.02] border border-blue-300/20">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-200 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-200 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-200 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-200 to-transparent glow-border-right"></div>
                            </div>
                            {/* Network Node Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-35 transition-opacity duration-500" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="nodes3" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                        <circle cx="10" cy="10" r="3" fill="rgba(255,255,255,0.5)"/>
                                        <circle cx="70" cy="30" r="2" fill="rgba(255,255,255,0.4)"/>
                                        <circle cx="40" cy="70" r="2.5" fill="rgba(255,255,255,0.45)"/>
                                        <line x1="10" y1="10" x2="70" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                                        <line x1="70" y1="30" x2="40" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                                        <line x1="40" y1="70" x2="10" y2="10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#nodes3)"/>
                            </svg>
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-blue-300/30 rounded-tr-2xl group-hover:w-24 group-hover:h-24 group-hover:border-blue-200/50 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-300/20 rounded-bl-2xl group-hover:w-20 group-hover:h-20 group-hover:border-blue-200/40 transition-all duration-500"></div>
                            <div className="absolute top-1/2 right-0 w-40 h-40 bg-blue-300/15 rounded-full blur-3xl -translate-y-1/2 translate-x-10 group-hover:scale-125 transition-transform duration-700"></div>
                            <div className="relative z-10 flex items-center gap-5 h-full">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-400/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-200/30 group-hover:border-blue-100/50 group-hover:bg-blue-300/40 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                    <svg className="w-7 h-7 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-50 transition-colors">Expert Mentorship Network</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed">200+ mentor berpengalaman siap membimbing perjalanan sehatmu dengan konsultasi langsung dan feedback personal.</p>
                                </div>
                            </div>
                        </div>

                        {/* Benefit Card 4 - Active Community */}
                        <div className="group relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl aspect-[14/5] w-full shadow-xl overflow-hidden p-6 hover:shadow-2xl hover:shadow-blue-700/40 transition-all duration-500 hover:scale-[1.02] border border-blue-600/20">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-400 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-400 to-transparent glow-border-right"></div>
                            </div>
                            {/* Grid Pattern with Dots */}
                            <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-35 transition-opacity duration-500">
                                <defs>
                                    <pattern id="grid4" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                        <circle cx="15" cy="15" r="1" fill="rgba(147,197,253,0.6)"/>
                                        <line x1="0" y1="15" x2="30" y2="15" stroke="rgba(147,197,253,0.15)" strokeWidth="0.5"/>
                                        <line x1="15" y1="0" x2="15" y2="30" stroke="rgba(147,197,253,0.15)" strokeWidth="0.5"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid4)"/>
                            </svg>
                            {/* Animated Wave Line */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent group-hover:via-blue-300/70 transition-all duration-500"></div>
                            {/* Orbiting Dots */}
                            <div className="absolute top-6 right-16 w-3 h-3 bg-blue-400/40 rounded-full group-hover:animate-bounce"></div>
                            <div className="absolute top-10 right-8 w-2 h-2 bg-blue-300/50 rounded-full group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            <div className="absolute bottom-8 right-12 w-2.5 h-2.5 bg-blue-500/30 rounded-full group-hover:animate-bounce" style={{animationDelay: '0.4s'}}></div>
                            <div className="absolute top-0 left-1/2 w-48 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="relative z-10 flex items-center gap-5 h-full">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-700/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 group-hover:bg-blue-600/50 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                    <svg className="w-7 h-7 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-100 transition-colors">Active Community Hub</h3>
                                    <p className="text-blue-200 text-sm leading-relaxed">Bergabung dengan 10.000+ member aktif. Sharing, diskusi, dan support system yang bikin kamu tetap semangat!</p>
                                </div>
                            </div>
                        </div>

                        {/* Benefit Card 5 - Gamified Progress */}
                        <div className="group relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl aspect-[14/5] w-full shadow-xl overflow-hidden p-6 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.02] border border-blue-400/20">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-300 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-300 to-transparent glow-border-right"></div>
                            </div>
                            {/* Progress Bars Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-15 group-hover:opacity-30 transition-opacity duration-500">
                                <defs>
                                    <pattern id="bars5" x="0" y="0" width="40" height="60" patternUnits="userSpaceOnUse">
                                        <rect x="5" y="40" width="6" height="20" rx="2" fill="rgba(255,255,255,0.3)"/>
                                        <rect x="17" y="25" width="6" height="35" rx="2" fill="rgba(255,255,255,0.4)"/>
                                        <rect x="29" y="10" width="6" height="50" rx="2" fill="rgba(255,255,255,0.5)"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#bars5)"/>
                            </svg>
                            {/* Rising Lines Animation */}
                            <div className="absolute bottom-0 right-20 w-[2px] h-12 bg-gradient-to-t from-blue-400/50 to-transparent group-hover:h-16 transition-all duration-500"></div>
                            <div className="absolute bottom-0 right-28 w-[2px] h-8 bg-gradient-to-t from-blue-300/40 to-transparent group-hover:h-14 transition-all duration-500 delay-100"></div>
                            <div className="absolute bottom-0 right-36 w-[2px] h-16 bg-gradient-to-t from-blue-500/60 to-transparent group-hover:h-20 transition-all duration-500 delay-200"></div>
                            {/* Achievement Star */}
                            <div className="absolute top-4 right-6 opacity-30 group-hover:opacity-60 group-hover:rotate-180 transition-all duration-700">
                                <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-1/4 w-48 h-24 bg-blue-500/15 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="relative z-10 flex items-center gap-5 h-full">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-500/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-300/30 group-hover:border-blue-200/50 group-hover:bg-blue-400/40 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                    <svg className="w-7 h-7 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-100 transition-colors">Gamified Progress System</h3>
                                    <p className="text-blue-200 text-sm leading-relaxed">Level up, kumpulkan badge, dan unlock achievement! Buat perjalanan sehatmu jadi seru kayak main game.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid Section */}
            <section className="py-5 lg:py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                            Fitur-fitur Unggulan <span className="text-blue-600">SiMug</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto md:text-lg text-base lg:text-xl leading-relaxed lg:px-15">
                            Semua fitur disusun secara progresif, bisa dimulai gratis, dan didampingi oleh mentor, komunitas, serta AI assistant.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {/* 1. Top Left Card - Progressive Learning */}
                        <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100/80 rounded-2xl aspect-video w-full overflow-hidden border border-blue-200/60 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/50 hover:scale-[1.02]">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-right"></div>
                            </div>
                            {/* Background Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0">
                                <defs>
                                    <pattern id="feat1-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M0 20 L40 20 M20 0 L20 40" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" fill="none"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat1-grid)"/>
                            </svg>
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/80 via-transparent to-transparent z-0"></div>
                            {/* Animated Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-blue-400/30 transition-all duration-700 z-0"></div>
                            
                            {/* Illustration - Learning Path */}
                            <div className="absolute top-4 right-4 w-24 h-24 md:w-32 md:h-32 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10">
                                <svg viewBox="0 0 120 120" className="w-full h-full">
                                    {/* Steps */}
                                    <rect x="15" y="70" width="25" height="35" rx="4" className="fill-blue-400/50 group-hover:fill-blue-500/70 transition-colors duration-300"/>
                                    <rect x="48" y="50" width="25" height="55" rx="4" className="fill-blue-500/60 group-hover:fill-blue-600/80 transition-colors duration-300"/>
                                    <rect x="81" y="25" width="25" height="80" rx="4" className="fill-blue-600/70 group-hover:fill-blue-700/90 transition-colors duration-300"/>
                                    {/* Progress Line */}
                                    <path d="M27 65 L60 45 L93 20" stroke="rgba(37,99,235,0.6)" strokeWidth="2" fill="none" strokeDasharray="5,3" className="group-hover:stroke-blue-600 transition-colors duration-300"/>
                                    {/* Star */}
                                    <circle cx="93" cy="15" r="8" className="fill-yellow-400 group-hover:animate-pulse"/>
                                </svg>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-400/40">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <span className="text-blue-600 text-xs font-medium uppercase tracking-wider">Progressive</span>
                                </div>
                                <h3 className="text-gray-900 font-semibold text-lg mb-1 group-hover:text-blue-700 transition-colors">Pembelajaran Bertahap</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Mulai dari level dasar hingga mahir dengan kurikulum terstruktur.</p>
                            </div>
                            
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400/40 rounded-tl-2xl group-hover:w-16 group-hover:h-16 group-hover:border-blue-500/60 transition-all duration-500 z-10"></div>
                        </div>

                        {/* 2. Top Middle Card - AI Assistant */}
                        <div className="group relative bg-gradient-to-br from-white via-blue-50 to-blue-100/80 rounded-2xl aspect-video w-full overflow-hidden border border-blue-200/60 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/50 hover:scale-[1.02]">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-right"></div>
                            </div>
                            {/* Animated Dots Background */}
                            <svg className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0">
                                <defs>
                                    <pattern id="feat2-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                        <circle cx="15" cy="15" r="2" fill="rgba(59,130,246,0.3)"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat2-dots)"/>
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/80 via-transparent to-transparent z-0"></div>
                            
                            {/* Animated Particles */}
                            <div className="absolute top-8 right-12 w-2 h-2 bg-blue-500/50 rounded-full group-hover:animate-ping z-10"></div>
                            <div className="absolute top-16 right-6 w-1.5 h-1.5 bg-blue-400/40 rounded-full group-hover:animate-ping z-10" style={{animationDelay: '0.3s'}}></div>
                            
                            {/* Illustration - AI Brain */}
                            <div className="absolute top-3 right-3 w-28 h-28 md:w-36 md:h-36 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-10">
                                <svg viewBox="0 0 120 120" className="w-full h-full">
                                    {/* Brain outline */}
                                    <ellipse cx="60" cy="55" rx="35" ry="30" className="fill-none stroke-blue-400 group-hover:stroke-blue-500 transition-colors" strokeWidth="2"/>
                                    {/* Neural connections */}
                                    <circle cx="45" cy="45" r="6" className="fill-blue-400/60 group-hover:fill-blue-500/80"/>
                                    <circle cx="75" cy="45" r="6" className="fill-blue-400/60 group-hover:fill-blue-500/80"/>
                                    <circle cx="60" cy="65" r="6" className="fill-blue-400/60 group-hover:fill-blue-500/80"/>
                                    <circle cx="50" cy="58" r="4" className="fill-blue-400/50"/>
                                    <circle cx="70" cy="58" r="4" className="fill-blue-400/50"/>
                                    {/* Connections */}
                                    <line x1="45" y1="45" x2="75" y2="45" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
                                    <line x1="45" y1="45" x2="60" y2="65" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
                                    <line x1="75" y1="45" x2="60" y2="65" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
                                    {/* Pulse rings */}
                                    <circle cx="60" cy="55" r="20" className="fill-none stroke-blue-400/40 group-hover:animate-ping" strokeWidth="1"/>
                                    {/* Chat bubbles */}
                                    <rect x="85" y="70" width="25" height="18" rx="4" className="fill-blue-400/50"/>
                                    <circle cx="90" cy="88" r="3" className="fill-blue-400/50"/>
                                </svg>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-400/40 group-hover:animate-pulse">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-blue-600 text-xs font-medium uppercase tracking-wider">AI-Powered</span>
                                </div>
                                <h3 className="text-gray-900 font-semibold text-lg mb-1 group-hover:text-blue-700 transition-colors">AI Chatbot Assistant</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Tanya apa saja tentang kesehatan, dijawab AI 24/7.</p>
                            </div>
                        </div>

                        {/* 3. Right Tall Card - Mentorship (Spans 2 rows) */}
                        <div className="group relative bg-gradient-to-b from-white via-blue-50 to-blue-100/80 rounded-2xl w-full lg:row-span-2 lg:h-full min-h-[300px] overflow-hidden border border-blue-200/60 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/50 hover:scale-[1.01]">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-right"></div>
                            </div>
                            {/* Hexagon Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0">
                                <defs>
                                    <pattern id="feat3-hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                                        <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5" transform="translate(0,-4) scale(0.9)"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat3-hex)"/>
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/80 via-white/30 to-transparent z-0"></div>
                            
                            {/* Floating Gradient Orbs */}
                            <div className="absolute top-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                            <div className="absolute bottom-20 left-5 w-32 h-32 bg-blue-300/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                            
                            {/* Illustration - Mentorship Network */}
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-48 md:w-56 md:h-56 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    {/* Central Mentor */}
                                    <circle cx="100" cy="80" r="25" className="fill-blue-400/50 group-hover:fill-blue-500/70 transition-colors"/>
                                    <circle cx="100" cy="70" r="12" className="fill-blue-500/70"/>
                                    <ellipse cx="100" cy="95" rx="15" ry="8" className="fill-blue-500/60"/>
                                    
                                    {/* Students around */}
                                    <g className="group-hover:animate-pulse">
                                        <circle cx="45" cy="140" r="18" className="fill-blue-400/40"/>
                                        <circle cx="45" cy="132" r="8" className="fill-blue-500/60"/>
                                        <ellipse cx="45" cy="148" rx="10" ry="5" className="fill-blue-500/50"/>
                                    </g>
                                    <g className="group-hover:animate-pulse" style={{animationDelay: '0.2s'}}>
                                        <circle cx="100" cy="160" r="18" className="fill-blue-400/40"/>
                                        <circle cx="100" cy="152" r="8" className="fill-blue-500/60"/>
                                        <ellipse cx="100" cy="168" rx="10" ry="5" className="fill-blue-500/50"/>
                                    </g>
                                    <g className="group-hover:animate-pulse" style={{animationDelay: '0.4s'}}>
                                        <circle cx="155" cy="140" r="18" className="fill-blue-400/40"/>
                                        <circle cx="155" cy="132" r="8" className="fill-blue-500/60"/>
                                        <ellipse cx="155" cy="148" rx="10" ry="5" className="fill-blue-500/50"/>
                                    </g>
                                    
                                    {/* Connection Lines */}
                                    <line x1="100" y1="105" x2="55" y2="125" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeDasharray="4,2"/>
                                    <line x1="100" y1="105" x2="100" y2="140" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeDasharray="4,2"/>
                                    <line x1="100" y1="105" x2="145" y2="125" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeDasharray="4,2"/>
                                    
                                    {/* Sparkles */}
                                    <circle cx="70" cy="60" r="3" className="fill-blue-500/80 group-hover:animate-ping"/>
                                    <circle cx="130" cy="55" r="2" className="fill-blue-500/70 group-hover:animate-ping" style={{animationDelay: '0.5s'}}/>
                                </svg>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-400/40">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-blue-600 text-xs font-medium uppercase tracking-wider">Expert Network</span>
                                </div>
                                <h3 className="text-gray-900 font-bold text-xl mb-2 group-hover:text-blue-700 transition-colors">Jaringan Mentor Profesional</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">Terhubung langsung dengan 200+ ahli kesehatan bersertifikat. Konsultasi langsung, feedback personal, dan bimbingan karir di bidang kesehatan.</p>
                                
                                {/* Stats */}
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">200+</div>
                                        <div className="text-xs text-gray-500">Mentor</div>
                                    </div>
                                    <div className="w-[1px] bg-blue-300/50"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">50+</div>
                                        <div className="text-xs text-gray-500">Spesialisasi</div>
                                    </div>
                                    <div className="w-[1px] bg-blue-300/50"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                                        <div className="text-xs text-gray-500">Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Bottom Wide Card - Community (Spans 2 columns) */}
                        <div className="group relative bg-gradient-to-r from-white via-blue-50 to-blue-100/80 rounded-2xl w-full lg:col-span-2 aspect-[2.1/0.7] overflow-hidden border border-blue-200/60 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/50 hover:scale-[1.01]">
                            {/* Animated Glowing Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-top"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent glow-border-bottom"></div>
                                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-left"></div>
                                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent glow-border-right"></div>
                            </div>
                            {/* Wave Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="feat4-wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M0 10 Q25 0, 50 10 T100 10" stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="none"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat4-wave)"/>
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 z-0"></div>
                            
                            {/* Floating Orbs */}
                            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                            <div className="absolute right-10 top-5 w-32 h-32 bg-blue-300/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                            
                            {/* Illustration - Community */}
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-32 md:w-56 md:h-44 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                <svg viewBox="0 0 220 150" className="w-full h-full">
                                    {/* Chat bubbles */}
                                    <rect x="10" y="20" width="70" height="45" rx="8" className="fill-blue-400/40 group-hover:fill-blue-500/60 transition-colors"/>
                                    <polygon points="25,65 35,65 30,75" className="fill-blue-400/40 group-hover:fill-blue-500/60"/>
                                    <rect x="20" y="32" width="50" height="4" rx="2" className="fill-blue-500/50"/>
                                    <rect x="20" y="42" width="35" height="4" rx="2" className="fill-blue-500/40"/>
                                    
                                    <rect x="100" y="40" width="80" height="50" rx="8" className="fill-blue-400/40 group-hover:fill-blue-500/60 transition-colors"/>
                                    <polygon points="165,90 175,90 170,100" className="fill-blue-400/40 group-hover:fill-blue-500/60"/>
                                    <rect x="110" y="55" width="60" height="4" rx="2" className="fill-blue-500/50"/>
                                    <rect x="110" y="65" width="45" height="4" rx="2" className="fill-blue-500/40"/>
                                    <rect x="110" y="75" width="30" height="4" rx="2" className="fill-blue-500/30"/>
                                    
                                    {/* User avatars */}
                                    <circle cx="30" cy="110" r="18" className="fill-blue-400/50"/>
                                    <circle cx="30" cy="105" r="7" className="fill-blue-500/70"/>
                                    <ellipse cx="30" cy="120" rx="10" ry="5" className="fill-blue-500/60"/>
                                    
                                    <circle cx="80" cy="120" r="15" className="fill-blue-400/50"/>
                                    <circle cx="80" cy="116" r="6" className="fill-blue-500/70"/>
                                    <ellipse cx="80" cy="128" rx="8" ry="4" className="fill-blue-500/60"/>
                                    
                                    <circle cx="130" cy="125" r="18" className="fill-blue-400/50"/>
                                    <circle cx="130" cy="120" r="7" className="fill-blue-500/70"/>
                                    <ellipse cx="130" cy="135" rx="10" ry="5" className="fill-blue-500/60"/>
                                    
                                    {/* Activity dots */}
                                    <circle cx="55" cy="15" r="4" className="fill-green-500/80 group-hover:animate-ping"/>
                                    <circle cx="195" cy="50" r="3" className="fill-green-500/70 group-hover:animate-ping" style={{animationDelay: '0.3s'}}/>
                                    <circle cx="175" cy="115" r="3" className="fill-green-500/60 group-hover:animate-ping" style={{animationDelay: '0.6s'}}/>
                                </svg>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute left-0 top-0 bottom-0 p-6 flex flex-col justify-center max-w-[55%] z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-400/40">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </div>
                                    <span className="text-blue-600 text-xs font-medium uppercase tracking-wider">Community Hub</span>
                                </div>
                                <h3 className="text-gray-900 font-bold text-xl mb-2 group-hover:text-blue-700 transition-colors">Forum Komunitas Aktif</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Diskusi, sharing pengalaman, dan support system dari 10.000+ member aktif. Berbagi tips kesehatan, challenge bersama, dan motivasi harian!</p>
                                
                                {/* Live indicator */}
                                <div className="flex items-center gap-2 mt-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 text-xs font-medium">1,234 online sekarang</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-start">
                        <button className="flex group items-center gap-2 hover:gap-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold pl-4 pr-3 py-2.5 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
                            Cobain Sekarang!
                            <svg className="w-5 h-5 group-hover:rotate-90 ease-out transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* New Section - Kami Terus Update */}
            <section className="py-10 lg:py-16 bg-[#EDF2FF]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                        {/* Left Side - Blue Card with Assets */}
                        <div className="relative">
                            <div className="group relative bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-3xl p-8 lg:p-12 overflow-visible shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/60 min-h-[400px] transition-all duration-500">
                                {/* Corner Circles with Zoom Effect */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-md group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-md group-hover:scale-150 transition-transform duration-500 ease-out"></div>

                                {/* Decorative Circles Inside Card */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

                                {/* Landing Assets - Diagonal Positioning */}
                                <img 
                                    src={landingAsset1} 
                                    alt="Asset 1"
                                    className="absolute top-0 right-5 w-48 h-48 lg:w-80 lg:h-80 object-contain opacity-100 z-10"
                                />
                                <img 
                                    src={landingAsset2} 
                                    alt="Asset 2" 
                                    className="absolute -bottom-2 left-5 w-48 h-48 lg:w-80 lg:h-80 object-contain opacity-100 z-10"
                                />

                                {/* Glassmorphism Card - Top Right (Outside) with Scroll Animation */}
                                <div className="absolute bottom-6 -right-6 lg:right-2 z-20 scroll-animate opacity-0 translate-x-8 transition-all duration-700 hover:scale-105">
                                    <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30 shadow-xl">
                                        <p className="text-white font-bold text-lg mb-0.5">24/7 Update</p>
                                        <p className="text-white/90 text-md">From Feedback</p>
                                    </div>
                                </div>

                                {/* Glassmorphism Card - Left (Outside) with Scroll Animation */}
                                <div className="absolute top-6 -left-6 lg:-left-1 transform -translate-y-1/2 z-20 scroll-animate opacity-0 -translate-x-8 transition-all duration-700 hover:scale-105" style={{transitionDelay: '0.2s'}}>
                                    <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30 shadow-xl">
                                        <p className="text-white font-bold text-lg mb-0.5">New Course</p>
                                        <p className="text-white/90 text-md">Everyday</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 backdrop-blur-sm rounded-full shadow-lg shadow-blue-200/50 scroll-animate opacity-0 translate-x-8 transition-all duration-700">
                                <svg className="w-5 h-5 text-[#4177FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-[#4177FF] text-md font-semibold">Pelayanan no 1</span>
                            </div>

                            {/* Heading with Gradient */}
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight scroll-animate opacity-0 translate-x-8 transition-all duration-700" style={{transitionDelay: '0.1s'}}>
                                <span className="bg-gradient-to-r from-[#4177FF] via-[#7BA3FF] to-[#4177FF] bg-clip-text text-transparent">
                                    Kami Terus Update
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-[#4177FF] via-[#7BA3FF] to-[#4177FF] bg-clip-text text-transparent">
                                    Kamu Fokus Berprogres
                                </span>
                            </h2>

                            {/* Description with 85% opacity blue */}
                            <p className="text-[#4177FF] opacity-85 text-2xl leading-relaxed scroll-animate opacity-0 translate-x-8 transition-all duration-700" style={{transitionDelay: '0.2s'}}>
                                Setiap materi di SiMug akan dirancang untuk membantu kamu tetap konsisten dan berkembang menuju hidup yang lebih sehat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Listing Section */}
            <section className="py-10 lg:py-10 bg-white relative overflow-hidden">
                {/* Decorative Blue Circles and Rounded Squares */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/40 rounded-2xl blur-xl"></div>
                <div className="absolute top-5 right-20 w-24 h-24 bg-blue-200/40 rounded-2xl blur-xl"></div>
                <div className="absolute top-40 right-1/3 w-18 h-18 bg-blue-300/30 rounded-2xl blur-xl"></div>
                
                {/* Small Decorative Rounded Squares */}
                <div className="absolute top-16 left-1/4 w-12 h-12 bg-blue-100/60 rounded-xl blur-sm"></div>
                <div className="absolute top-8 right-1/4 w-10 h-10 bg-blue-200/50 rounded-lg blur-sm"></div>
                <div className="absolute top-32 left-1/2 w-14 h-14 bg-blue-100/50 rounded-xl blur-sm"></div>
                <div className="absolute top-12 right-1/3 w-8 h-8 bg-blue-300/40 rounded-lg blur-sm"></div>
                <div className="absolute top-24 left-2/3 w-10 h-10 bg-blue-200/40 rounded-lg blur-sm"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-8 lg:mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Daftar Kursus <span className="text-blue-600">Relevan SiMug</span>
                        </h2>
                        <p className="text-gray-600 text-base lg:text-xl">
                            Kamu bisa lihat beberapa kursus relevan disini.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex justify-center gap-4 lg:gap-1 mb-8 lg:mb-10 flex-wrap">
                        <button
                            onClick={() => setActiveCategory('Kebugaran')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${
                                activeCategory === 'Kebugaran'
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-200'
                            }`}
                        >
                            Kebugaran
                        </button>
                        <button
                            onClick={() => setActiveCategory('Olahraga')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${
                                activeCategory === 'Olahraga'
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-300'
                            }`}
                        >
                            Olahraga
                        </button>
                        <button
                            onClick={() => setActiveCategory('Nutrisi')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${
                                activeCategory === 'Nutrisi'
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-300'
                            }`}
                        >
                            Nutrisi
                        </button>
                        <button
                            onClick={() => setActiveCategory('Mental')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${
                                activeCategory === 'Mental'
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-300'
                            }`}
                        >
                            Mental
                        </button>
                    </div>

                    {/* Course Grid - Centered with max 8 cards (4 top, 4 bottom) */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 max-w-full">
                            {courses
                                .filter(course => {
                                    if (activeCategory === 'Kebugaran') return course.category === 'kebugaran';
                                    if (activeCategory === 'Olahraga') return course.category === 'sports';
                                    if (activeCategory === 'Nutrisi') return course.category === 'nutrisi';
                                    if (activeCategory === 'Mental') return course.category === 'mental';
                                    return true;
                                })
                                .slice(0, 8)
                                .map((course) => (
                                    <CourseCard
                                        key={course.id}
                                        image={course.image}
                                        title={course.title}
                                        instructor={course.instructor}
                                        date={course.date}
                                        rating={course.rating}
                                        ratingCount={course.ratingCount}
                                        materialsCount={course.materialsCount}
                                        duration={course.duration}
                                        level={course.level}
                                        price={course.price}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cara Kerja SiMug Section */}
            <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
                {/* Blue Line Background - Full Width */}
                {/* PENGATURAN UKURAN BLUELINE: 
                    - Ubah 'h-[700px]' menjadi nilai lain seperti 'h-[600px]' atau 'h-[800px]' untuk mengatur tinggi
                    - Ubah 'opacity-30' menjadi nilai lain (0-100) untuk mengatur transparansi
                    - 'object-contain' memastikan gambar tidak pecah dan menjaga proporsi asli
                */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img 
                        src={lineBlue} 
                        alt="Path Line" 
                        className="w-full h-[700px] object-contain opacity-70"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    {/* Header and Main Tips - Same Row */}
                    <div className="mb-16 lg:mb-20 flex justify-between items-start">
                        {/* Header */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                                <span className="text-blue-600">Cara Kerja SiMug</span>
                            </h2>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                Itu Gimana Sih?
                            </h3>
                        </div>
                            
                    </div>

                    {/* Roadmap Container */}
                    {/* SOLUSI ZOOM: Menggunakan scale(1) pada transform-origin untuk mencegah perubahan posisi saat zoom */}
                    <div className="relative min-h-[700px] lg:min-h-[600px]" style={{transformOrigin: 'center center', transform: 'scale(1)'}}>
                        {/* Step 1 - Cari Kursus (Bottom Left) - Step asset, Icon, Road-img */}
                        <div className="absolute bottom-24 left-0 lg:-left-1 z-10" style={{transformOrigin: 'left bottom'}}>
                            <div className="flex flex-col items-start gap-4 max-w-xs">
                                {/* Step 1 Text Asset */}
                                <img 
                                    src={step1} 
                                    alt="Step 1" 
                                    className="w-48 lg:w-92 h-auto"
                                    style={{transform: 'translate(-4.5rem, 0.5rem)', transformOrigin: 'left top'}}
                                />
                                {/* Search Icon - Adjustable position with margin */}
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 my-5">
                                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                {/* Road Image Illustration */}
                                <div className="relative group">
                                    {/* Hover effect - positioned exactly behind road-img */}
                                    <div 
                                        className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" 
                                        style={{
                                            width: '176px',
                                            height: '176px',
                                            left: '-80px',
                                            top: '20px',
                                            transformOrigin: 'left top'
                                        }}
                                    ></div>
                                    <img 
                                        src={roadImg1} 
                                        alt="Cari Kursus Illustration" 
                                        className="w-44 lg:w-52 h-auto rounded-2xl shadow-lg"
                                        style={{transform: 'translate(-5rem, 1.25rem)', transformOrigin: 'left top'}}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 - Tonton Kursus (Center Top) - Road-img, Icon, Step asset */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10" style={{transformOrigin: 'center top'}}>
                            <div className="flex flex-col items-center gap-4 max-w-sm">
                                {/* Road Image Illustration - No white background */}
                                {/* Play Icon - Adjustable position with margin */}
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 my-2" style={{transform: 'translateX(-3rem)', transformOrigin: 'center center'}}>
                                    <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                                {/* Step 2 Text Asset */}
                                <img 
                                    src={step2} 
                                    alt="Step 2" 
                                    className="w-56 lg:w-96 h-auto"
                                    style={{transform: 'translateY(-16rem)', transformOrigin: 'center top'}}
                                />
                                <div className="relative group">
                                    {/* Hover effect - positioned exactly behind road-img */}
                                    <div 
                                        className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" 
                                        style={{
                                            width: '208px',
                                            height: '208px',
                                            left: '-32px',
                                            top: '-160px',
                                            transformOrigin: 'center top'
                                        }}
                                    ></div>
                                    <img 
                                        src={roadImg2} 
                                        alt="Tonton Kursus Illustration" 
                                        className="w-52 lg:w-60 h-auto rounded-2xl shadow-lg"
                                        style={{transform: 'translate(-2rem, -10rem)', transformOrigin: 'center top'}}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 3 - Dapatkan Reward (Bottom Right) - Step asset, Icon, Road-img */}
                        <div className="absolute bottom-8 right-0 lg:right-8 z-10" style={{transformOrigin: 'right bottom'}}>
                            <div className="flex flex-col items-end gap-4 max-w-xs">
                                {/* Step 3 Text Asset */}
                                <img 
                                    src={step3} 
                                    alt="Step 3" 
                                    className="w-48 lg:w-92 h-auto"
                                    style={{transform: 'translateX(7rem)', transformOrigin: 'right top'}}
                                />
                                {/* Trophy Icon - Adjustable position with margin */}
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 my-2" style={{transform: 'translateY(4rem)', transformOrigin: 'center center'}}>
                                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                {/* Road Image Illustration */}
                                <div className="relative group">
                                    {/* Hover effect - positioned exactly behind road-img */}
                                    <div 
                                        className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" 
                                        style={{
                                            width: '176px',
                                            height: '176px',
                                            left: '80px',
                                            top: '88px',
                                            transformOrigin: 'right top'
                                        }}
                                    ></div>
                                    <img 
                                        src={roadImg3} 
                                        alt="Dapatkan Reward Illustration" 
                                        className="w-44 lg:w-52 h-auto rounded-2xl shadow-lg"
                                        style={{transform: 'translate(5rem, 5.5rem)', transformOrigin: 'right top'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
                {/* Section Header */}
                <div className="text-center mb-12 px-6 lg:px-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        Apa Kata Mereka yang Telah
                    </h2>
                    <h3 className="text-3xl lg:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            Berprogres Bersama SiMUG
                        </span>
                    </h3>
                </div>

                {/* First Row - Scroll Right - Full Width */}
                <div className="relative mb-6 overflow-hidden w-full">
                    <div className="flex gap-6 animate-scroll-right-seamless">
                        {/* Triple duplicate for seamless infinite loop */}
                        {[...Array(3)].map((_, setIndex) => (
                            <div key={setIndex} className="flex gap-6 flex-shrink-0">
                                {testimonialsRow1.map((testimonial) => (
                                    <div 
                                        key={`${setIndex}-${testimonial.id}`}
                                        className={`${testimonial.bgColor === 'white' ? 'bg-white' : 'bg-[#EEF2FF]'} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow w-80 flex-shrink-0`}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <img 
                                                src={testimonial.avatar} 
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
                                            />
                                            <div>
                                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            "{testimonial.testimonial}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row - Scroll Left - Full Width */}
                <div className="relative overflow-hidden w-full">
                    <div className="flex gap-6 animate-scroll-left-seamless">
                        {/* Triple duplicate for seamless infinite loop */}
                        {[...Array(3)].map((_, setIndex) => (
                            <div key={setIndex} className="flex gap-6 flex-shrink-0">
                                {testimonialsRow2.map((testimonial) => (
                                    <div 
                                        key={`${setIndex}-${testimonial.id}`}
                                        className={`${testimonial.bgColor === 'white' ? 'bg-white' : 'bg-[#EEF2FF]'} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow w-80 flex-shrink-0`}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <img 
                                                src={testimonial.avatar} 
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
                                            />
                                            <div>
                                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            "{testimonial.testimonial}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Gabung Sekarang */}
            <section className="py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-3">
                    <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl px-8 py-8 lg:px-10 lg:py-8 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 group">
                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-8 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-6 left-12 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-2xl blur-lg"></div>
                        <div className="absolute bottom-8 right-16 w-14 h-14 bg-white/10 rounded-2xl blur-lg"></div>
                        <div className="absolute top-6 left-1/3 w-10 h-10 bg-white/10 rounded-full blur-md"></div>
                        
                        {/* Small decorative circles */}
                        <div className="absolute top-8 left-20 w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="absolute bottom-12 right-32 w-4 h-4 bg-white/30 rounded-full"></div>
                        <div className="absolute top-16 right-48 w-2 h-2 bg-white/40 rounded-full"></div>
                        <div className="absolute bottom-16 left-40 w-3 h-3 bg-white/30 rounded-full"></div>

                        {/* Bottom Blue Component Illustration - Behind Button */}
                        <div className="absolute bottom-0 right-0 lg:-right-4 opacity-40 pointer-events-none">
                            <img 
                                src={bottomBlueComponent} 
                                alt="Decorative Component" 
                                className="w-64 lg:w-80 h-auto"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                    Hi, udah siap buat cobain kursus?
                                </h2>
                                <p className="text-white/90 text-base lg:text-lg">
                                    Langsung aja join, dijamin ga rugi deh.
                                </p>
                            </div>
                            <Link 
                                to="/login"
                                className="relative bg-white text-lg text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 whitespace-nowrap z-20"
                            >
                                Gabung Sekarang
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            

            <Footer />
        </div>
    )
}