import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import gridHiasan from "../assets/images/grid-hiasan.png"
import ImageCard1 from "../assets/images/fitness_training_card.png"
import ImageCard2 from "../assets/images/running_progress_card.png"
import ImageCard3 from "../assets/images/community_fitness_card.png"
import CourseImg1 from "../assets/images/course_english_running.png"
import CourseImg2 from "../assets/images/course_japanese_yoga.png"
import CourseImg3 from "../assets/images/course_korean_basketball.png"
import CourseImg4 from "../assets/images/course_german_nature.png"
import { FaArrowTrendUp, FaInstagram, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6"
import { HiLightningBolt, HiMenu, HiX } from "react-icons/hi"
import Footer from '../components/layout/Footer'
import CourseCard from '../components/CourseCard'

// Mascot imports
import Mascot1 from "../assets/maskot/mascot1.png"
import Mascot2 from "../assets/maskot/mascot2.png"
import Mascot3 from "../assets/maskot/mascot3.png"
import Mascot4 from "../assets/maskot/mascot4.png"
import Mascot5 from "../assets/maskot/mascot5.png"

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mascotScattered, setMascotScattered] = useState(false)
    const [activeCategory, setActiveCategory] = useState('Kebugaran')
    const mascotSectionRef = useRef(null)

    // Course data
    const courses = [
        {
            id: 1,
            image: CourseImg1,
            category: "sports",
            title: "Panduan Lari Marathon untuk Pemula: Dari 0 ke 42K dalam 12 Minggu",
            instructor: "Budi Santoso",
            date: "2 bulan lalu",
            rating: 4.8,
            ratingCount: "9.5k rating",
            materialsCount: "20 materi+",
            duration: "10 jam",
            level: "Semua kalangan",
            price: "Rp. 99.000"
        },
        {
            id: 2,
            image: CourseImg2,
            category: "kebugaran",
            title: "Teknik Dasar Yoga untuk Fleksibilitas dan Ketenangan Mental",
            instructor: "Sari Devi",
            date: "2 bulan lalu",
            rating: 4.8,
            ratingCount: "9.5k rating",
            materialsCount: "20 materi+",
            duration: "10 jam",
            level: "Semua kalangan",
            price: "Rp. 59.000"
        },
        {
            id: 3,
            image: CourseImg3,
            category: "kebugaran",
            title: "Latihan Intensif HIIT: Bakar Kalori Maksimal dalam 30 Menit",
            instructor: "Rian Wijaya",
            date: "2 bulan lalu",
            rating: 4.8,
            ratingCount: "9.5k rating",
            materialsCount: "20 materi+",
            duration: "10 jam",
            level: "Semua kalangan",
            price: "Rp. 79.000"
        },
        {
            id: 4,
            image: CourseImg4,
            category: "nutrisi",
            title: "Nutrisi Olahraga: Atur Pola Makan untuk Performa Atletis",
            instructor: "Dr. Andi Pratama",
            date: "2 bulan lalu",
            rating: 4.8,
            ratingCount: "9.5k rating",
            materialsCount: "20 materi+",
            duration: "10 jam",
            level: "Semua kalangan",
            price: "Rp. 50.000"
        },
        {
            id: 5,
            image: CourseImg1,
            category: "sports",
            title: "Lari Jarak Jauh: Teknik dan Strategi untuk Atlet Menengah",
            instructor: "Budi Santoso",
            date: "1 bulan lalu",
            rating: 4.9,
            ratingCount: "1.2k rating",
            materialsCount: "15 materi+",
            duration: "8 jam",
            level: "Menengah",
            price: "Rp. 129.000"
        },
        {
            id: 6,
            image: CourseImg2,
            category: "mental",
            title: "Mindfulness Berbasis Olahraga: Kelola Stress dengan Aktivitas Fisik",
            instructor: "Sari Devi",
            date: "3 minggu lalu",
            rating: 4.7,
            ratingCount: "800 rating",
            materialsCount: "12 materi+",
            duration: "5 jam",
            level: "Semua kalangan",
            price: "Rp. 49.000"
        },
        {
            id: 7,
            image: CourseImg3,
            category: "kebugaran",
            title: "Calisthenics Fundamental: Kuasai Tubuhmu Tanpa Beban Luar",
            instructor: "Rian Wijaya",
            date: "1 bulan lalu",
            rating: 4.8,
            ratingCount: "2.1k rating",
            materialsCount: "25 materi+",
            duration: "12 jam",
            level: "Semua kalangan",
            price: "Rp. 89.000"
        },
        {
            id: 8,
            image: CourseImg4,
            category: "nutrisi",
            title: "Meal Prep Sehat: Hemat Waktu dan Uang untuk Hidup Lebih Baik",
            instructor: "Dr. Andi Pratama",
            date: "2 minggu lalu",
            rating: 4.9,
            ratingCount: "3.5k rating",
            materialsCount: "18 materi+",
            duration: "6 jam",
            level: "Semua kalangan",
            price: "Rp. 75.000"
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
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
                <div className="flex flex-col lg:flex-col items-center justify-between">
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
                            <span className="text-blue-600">Usaha Aja Gaakan Cukup</span>
                            <div className='flex items-center lg:gap-3'>
                                <span className="text-gray-900">Tanpa Arah yang Jelas</span>
                                <span className="inline-flex items-center justify-center w-9 h-9 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-300 to-blue-600 rounded-xl lg:rounded-2xl ml-3 align-middle shadow-lg shadow-blue-400/70 rotate-350 hover:w-15 hover:h-15 transition-all duration-200">
                                    <FaArrowTrendUp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                </span>
                            </div>

                        </h1>

                        {/* Description */}
                        <p className="text-gray-900 text-base font-normal text-center lg:text-xl max-w-110 mx-auto lg:mx-0 mt-2 leading-relaxed">
                            Panduan sehat yang jelas, progresif, dan nggak ribet. Dari gratis sampai advance, semua ada jalurnya di <span className="font-bold text-gray-900">SiMug</span>
                        </p>

                        {/* CTA Button */}
                        <div className="pt-15 pb-10">
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
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-center h-full">
                                    {/* Title */}
                                    <div className="lg:col-span-1 text-left">
                                        <h3 className="text-2xl lg:text-3xl">
                                            <span className="font-semibold text-blue-600">Key</span>{' '}
                                            <span className="font-normal text-blue-600">For</span>
                                        </h3>
                                        <p className="text-blue-600 text-lg lg:text-3xl font-normal mt-1">Social Proof</p>
                                    </div>

                                    {/* Stats */}
                                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-0">
                                        {/* Stat 1 */}
                                        <div className="text-left border-l-2 border-gray-200 pl-6 pr-2">
                                            <h4 className="text-1xl lg:text-2xl font-bold text-gray-900">10,000+</h4>
                                            <p className="text-gray-600 text-sm lg:text-base mt-2 leading-relaxed">
                                                User telah mencoba dan membuktikan hasil mereka
                                            </p>
                                        </div>

                                        {/* Stat 2 */}
                                        <div className="text-left border-l-2 border-gray-200 pl-6 pr-2">
                                            <h4 className="text-1xl lg:text-2xl font-bold text-gray-900">200+</h4>
                                            <p className="text-gray-600 text-sm lg:text-base mt-2 leading-relaxed">
                                                Mentor aktif dan terverifikasi
                                            </p>
                                        </div>

                                        {/* Stat 3 */}
                                        <div className="text-left border-l-2 border-gray-200 pl-6 pr-2">
                                            <h4 className="text-1xl lg:text-2xl font-bold text-gray-900">1,000+</h4>
                                            <p className="text-gray-600 text-sm lg:text-base mt-2 leading-relaxed">
                                                Komunitas aktif diseluruh wilayah Indonesia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="min-w-screen h-60 bg-gradient-to-t from-white from- via-blue-50 via- to-blue-500/86">

                    </div> */}
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <HiLightningBolt className="w-6 h-6 text-blue-600" />,
                                    title: "Update Materi Baru",
                                    desc: "Materi dan video latihan baru diupdate setiap minggu untuk variasi latihanmu."
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    title: "Komunitas Aktif",
                                    desc: "Bergabung dengan ribuan pejuang sehat lainnya untuk saling berbagi motivasi."
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    ),
                                    title: "Analisis Progres AI",
                                    desc: "Dapatkan analisis mendalam dari AI tentang progres latihan dan nutrisimu."
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: "Akses 24/7",
                                    desc: "Akses semua materi dan forum kapan pun dan di mana pun kamu berada."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Listing Section */}
            <section className="py-10 lg:py-10 g-white relative overflow-hidden">
                {/* Decorative Blue Circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/40 rounded-2xl blur-xl"></div>
                <div className="absolute top-5 right-20 w-24 h-24 bg-blue-200/40 rounded-2xl blur-xl"></div>
                <div className="absolute top-40 right-1/3 w-18 h-18 bg-blue-300/30 rounded-2xl blur-xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-8 lg:mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                            Daftar Kursus <span className="text-blue-600">Relevan SiMug</span>
                        </h2>
                        <p className="text-gray-600 text-base lg:text-lg">
                            Kamu bisa lihat beberapa kursus relevan disini.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex justify-center gap-4 lg:gap-6 mb-8 lg:mb-12 flex-wrap">
                        <button
                            onClick={() => setActiveCategory('Kebugaran')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${activeCategory === 'Kebugaran'
                                ? 'text-blue-600'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Kebugaran
                        </button>
                        <button
                            onClick={() => setActiveCategory('Olahraga')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${activeCategory === 'Olahraga'
                                ? 'text-blue-600'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Olahraga
                        </button>
                        <button
                            onClick={() => setActiveCategory('Nutrisi')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${activeCategory === 'Nutrisi'
                                ? 'text-blue-600'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Nutrisi
                        </button>
                        <button
                            onClick={() => setActiveCategory('Mental')}
                            className={`cursor-pointer px-6 py-2 font-semibold transition-colors ${activeCategory === 'Mental'
                                ? 'text-blue-600'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Mental
                        </button>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                        {courses
                            .filter(course => {
                                if (activeCategory === 'Kebugaran') return course.category === 'kebugaran';
                                if (activeCategory === 'Olahraga') return course.category === 'sports';
                                if (activeCategory === 'Nutrisi') return course.category === 'nutrisi';
                                if (activeCategory === 'Mental') return course.category === 'mental';
                                return true;
                            })
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        {/* 1. Top Left Card: AI Assistant */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl transform hover:-translate-y-1 transition-all">
                            <div>
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">SiMug AI Assistant</h3>
                                <p className="text-blue-100 text-sm leading-relaxed">Asisten cerdas yang siap menjawab pertanyaan seputar fitness dan nutrisi 24/7.</p>
                            </div>
                            <div className="mt-8 flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-blue-600 bg-white/30"></div>
                                <div className="w-8 h-8 rounded-full border-2 border-blue-600 bg-white/40"></div>
                                <div className="w-8 h-8 rounded-full border-2 border-blue-600 bg-white/50"></div>
                            </div>
                        </div>

                        {/* 2. Top Middle Card: Community */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-xl transform hover:-translate-y-1 transition-all">
                            <div>
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Hub</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Ruang diskusi seru dengan topik yang relevan bagi pejuang hidup sehat.</p>
                            </div>
                            <div className="mt-8 bg-blue-50 rounded-xl p-3 flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                                <div className="h-2 w-24 bg-blue-200 rounded-full"></div>
                            </div>
                        </div>

                        {/* 3. Right Tall Card: Personalized Roadmap */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:row-span-2 shadow-xl transform hover:-translate-y-1 transition-all flex flex-col">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.954L9 2l6 3 5.447-2.724A2 2 0 0121 4.227v9.976a2 2 0 01-1.553 1.954L15 19l-6 1z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Roadmap</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">Kurikulum yang disusun agar kamu tidak perlu bingung mulai dari mana. Ikuti jalurnya, capai targetnya!</p>

                            <div className="flex-1 space-y-6 relative">
                                <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-blue-100"></div>
                                {[
                                    { step: 1, label: "Assessment Goals", active: true },
                                    { step: 2, label: "Basic Training", active: false },
                                    { step: 3, label: "Advanced Program", active: false },
                                    { step: 4, label: "Consistency Phase", active: false }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 relative z-10">
                                        <div className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-sm font-bold shadow-sm ${item.active ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                            {item.step}
                                        </div>
                                        <span className={`text-sm font-semibold ${item.active ? 'text-gray-900' : 'text-gray-400'}`}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Bottom Wide Card: Expert Mentor */}
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:col-span-2 shadow-xl transform hover:-translate-y-1 transition-all flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Mentor Support</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Belajar langsung dari mentor profesional yang sudah berpengalaman di bidangnya masing-masing.</p>
                            </div>
                            <div className="flex-1 w-full p-4 bg-blue-50 rounded-2xl flex items-center gap-4">
                                <div className="w-16 h-16 bg-blue-200 rounded-full border-4 border-white shadow-sm"></div>
                                <div>
                                    <div className="h-3 w-32 bg-blue-600 rounded-full mb-2"></div>
                                    <div className="h-2 w-20 bg-blue-300 rounded-full"></div>
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

            {/* Container */}
            <section className='py-5 lg:py-20 bg-white'>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className='group relative bg-blue-600 hover:bg-blue-700 rounded-3xl overflow-hidden px-6 md:px-16 hover:md:py-15 py-10 lg:py-20 group transition-all duration-500 hover:shadow-2xl hover:scale-[1.009]'>
                        {/* Background Decorations */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 rounded-full border-[30px] lg:border-[50px] group-hover:border-[30px] border-white/10 transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-12"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-80 md:h-80 rounded-full border-[30px] lg:border-[50px] group-hover:border-[30px] border-white/10 transition-all duration-500 ease-out group-hover:scale-125 group-hover:-rotate-12"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white group-hover:mb-15 lg:mb-6 mb-10 transition-all duration-500 leading-tight">
                                Lebih dari 10.000+ Mentor <br className="hidden md:block" />
                                Bakal Ngajarin Kamu <br className="hidden md:block" />
                                Mulai dari Nol!
                            </h2>
                            <p className="text-blue-50 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                                Nggak harus langsung jago. Di SiMug, kamu <br className="hidden lg:block" />
                                mulai dari yang basic, naik level sesuai <br className="hidden lg:block" />
                                progres, dan dapet arahan yang jelas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}