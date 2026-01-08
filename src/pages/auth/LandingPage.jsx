import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import gridHiasan from "../../assets/images/grid-hiasan.png"
import ImageCard1 from "../../assets/images/fitness_training_card.png"
import ImageCard2 from "../../assets/images/running_progress_card.png"
import ImageCard3 from "../../assets/images/community_fitness_card.png"
import { FaArrowTrendUp, FaInstagram, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6"
import { HiLightningBolt, HiMenu, HiX } from "react-icons/hi"

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen relative overflow-hidden ">
            <div className='absolute opacity-50 h-20 w-20 left-30 top-50 lg:h-40 lg:w-40 lg:left-110 lg:top-50'>
                <img src={gridHiasan} alt="" />
            </div>

            <div className='absolute opacity-50 h-30 w-30 -right-20 top-15 lg:h-40 lg:w-40 lg:-right-20 lg:top-30'>
                <img src={gridHiasan} alt="" />
            </div>

            <div className="absolute lg:-left-48 lg:top-210 lg:-translate-y-50 -left-48 top-100 translate-y-50 w-70 h-30 lg:w-110 lg:h-100 rounded-full bg-blue-500 blur-3xl lg:blur-3xl lg:opacity-100 opacity-70" />
            <div className="absolute lg:-left-48 lg:top-220 lg:-translate-y-50 -left-48 top-100 translate-y-50 w-70 h-50 lg:w-100 lg:h-80 rounded-full bg-blue-500 blur-xl lg:blur-xl lg:opacity-70 opacity-50" />

            <div className="absolute lg:top-170 top-170 left-1/2 -translate-x-1/2 w-380 h-70 rounded-full bg-blue-500 blur-3xl opacity-40" />

            <div className="absolute lg:-right-48 lg:top-210 lg:-translate-y-50 -right-48 top-100 translate-y-50 w-70 h-30 lg:w-110 lg:h-100 rounded-full bg-blue-500 blur-3xl lg:blur-3xl lg:opacity-100 opacity-70" />
            <div className="absolute lg:-right-48 lg:top-220 lg:-translate-y-50 -right-48 top-100 translate-y-50 w-70 h-50 lg:w-100 lg:h-80 rounded-full bg-blue-500 blur-xl lg:blur-xl lg:opacity-70 opacity-50" />

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
                        <div className="pt-15 pb-20">
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

                        {/* Social Proof Stats */}
                        <div className="mx-10">
                            <div className="max-w-screen mx-auto bg-white rounded-2xl self-center shadow-lg p-8 lg:px-7 lg:py-5">
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

            {/* Why Choose SiMug Section */}
            <div className="relative h-35 bg-gradient-to-b from-blue-500/90 via-blue-300/50 to-white"></div>
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

                        {/* Placeholder Cards */}
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="bg-gray-400/80 rounded-2xl aspect-[14/5] w-full shadow-xl"></div>
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
                        {/* 1. Top Left Card */}
                        <div className="bg-gray-400/80 rounded-2xl aspect-video w-full"></div>

                        {/* 2. Top Middle Card */}
                        <div className="bg-gray-400/80 rounded-2xl aspect-video w-full"></div>

                        {/* 3. Right Tall Card (Spans 2 rows) */}
                        <div className="bg-gray-400/80 rounded-2xl w-full md:row-span-2 md:h-full min-h-[300px]"></div>

                        {/* 4. Bottom Wide Card (Spans 2 columns) */}
                        <div className="bg-gray-400/80 rounded-2xl w-full md:col-span-2 aspect-[2.1/0.7]"></div>
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

            {/* Footer */}
            <footer className="bg-blue-600 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
                        {/* Column 1: Brand */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-2xl font-bold">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                <span>SiMUG</span>
                            </div>
                            <p className="text-blue-100/90 leading-relaxed font-light">
                                Satu Platform, Banyak <br />
                                Cara Jadi Lebih Sehat.
                            </p>

                            <div className="space-y-4 pt-2">
                                <h4 className="font-semibold text-lg">Social Media Kami</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                                        <FaInstagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                                        <FaYoutube className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                                        <FaFacebook className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                                        <FaXTwitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="lg:pl-8 lg:border-l-2 border-blue-400">
                            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
                            <ul className="space-y-4 text-blue-100/90 font-light">
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Beranda</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Progres Tracker</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Daftar Kursus</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Limited Event</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Forum & Artikel</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Layanan Kami */}
                        <div className="lg:pl-8 lg:border-l-2 border-blue-400">
                            <h4 className="font-bold text-xl mb-6">Layanan Kami</h4>
                            <ul className="space-y-4 text-blue-100/90 font-light">
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Kursus Kesehatan</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Asisten AI</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Chart Progres</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Komunitas</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 block transition-all">Gamifikasi</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Hubungi Kami */}
                        <div className="lg:pl-8 lg:border-l-2 border-blue-400">
                            <h4 className="font-bold text-xl mb-6">Hubungi Kami</h4>
                            <ul className="space-y-4 text-blue-100/90 font-light">
                                <li>
                                    <a href="#" className="hover:text-white block transition-colors">+62 890-2456-7891</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white block transition-colors">simugfit@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t-2 border-blue-400 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-100/80 text-sm">
                        <p>Copyright 2026 SiMug. All Right Reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors underline decoration-transparent hover:decoration-white">User Terms & Agreements</a>
                            <a href="#" className="hover:text-white transition-colors underline decoration-transparent hover:decoration-white">Privacy & Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}