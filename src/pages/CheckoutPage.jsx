import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCreditCard, FaWallet, FaUniversity, FaLock, FaInfoCircle, FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import { HiTicket } from 'react-icons/hi';
import BniPayment from '../assets/images/bni-payment.png';
import MandiriPayment from '../assets/images/mandiri-payment.png';
import BcaPayment from '../assets/images/bca-payment.png';
import BrivaPayment from '../assets/images/briva-payment.png';

const CheckoutPage = () => {
    const navigate = useNavigate();

    // State
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        country: '',
        phone: ''
    });

    const [paymentMethod, setPaymentMethod] = useState(''); // 'mandiri', 'bri', etc.
    const [paymentType, setPaymentType] = useState('bank'); // 'ewallet', 'card', 'bank'

    // Validation
    const isValid = formData.fullName && formData.email && formData.country && formData.phone && paymentMethod;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const banks = [
        { id: 'mandiri', name: 'Mandiri Virtual Account', img: MandiriPayment },
        { id: 'bri', name: 'BRI Virtual Account', img: BrivaPayment },
        { id: 'bca', name: 'BCA Virtual Account', img: BcaPayment },
        { id: 'bni', name: 'BNI Virtual Account', img: BniPayment },
    ];

    return (
        <div className="min-h-screen bg-white pb-10 font-poppins">
            {/* Header */}
            <header className="hidden lg:flex bg-white py-8 px-6 md:px-12 justify-between items-center sticky top-0 z-50 mb-4">
                {/* Logo part - simplistic based on image */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-3">
                    <div className="w-8 h-1 bg-[#4177ff] rounded-full"></div>
                    <h1 className="text-2xl font-bold text-gray-700">Checkout Kursus</h1>
                    <div className="w-8 h-1 bg-[#4177ff] rounded-full"></div>
                </div>
                <button onClick={() => navigate(-1)} className="hidden lg:block cursor-pointer text-[#4177ff] hover:text-blue-700 flex items-center gap-1 font-medium text-sm md:text-base underline underline-offset-4">
                    Batalkan
                </button>
            </header>

            {/* Mobile Title */}
            <div className="md:hidden text-center py-6 px-5 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700">
                    Checkout Kursus
                </h1>
                <button onClick={() => navigate(-1)} className="cursor-pointer text-[#4177ff] hover:text-blue-700 flex items-center gap-1 font-medium text-sm md:text-base underline underline-offset-4">
                    Batalkan
                </button>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 lg:space-y-8 space-y-4">

                    {/* Billing Address */}
                    <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                        <div className="bg-[#4177ff] px-5 py-3 flex items-center gap-4 text-white">
                            <div className="bg-white/20 p-2.5 rounded-full">
                                <FaUser className="text-xl" />
                            </div>
                            <h2 className="font-semibold text-xl">Alamat Penagihan</h2>
                        </div>
                        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Nama Lengkap:</label>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Masukkan Nama Lengkap"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4177ff]/50 focus:border-[#4177ff] transition-all text-sm placeholder-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Alamat E-Mail:</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="contoh: example@gmail.com"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4177ff]/50 focus:border-[#4177ff] transition-all text-sm placeholder-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Asal Negara:</label>
                                <div className="relative">
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className={`w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4177ff]/50 focus:border-[#4177ff] transition-all text-sm appearance-none bg-white cursor-pointer ${!formData.country ? 'text-gray-400' : 'text-gray-900'}`}
                                    >
                                        <option value="" disabled>Masukkan ID Negara</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="SG">Singapore</option>
                                    </select>
                                    <FaChevronDown className="absolute right-4 top-4 text-gray-400 text-xs pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">No. Telp:</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="contoh: +62 8123 4567 89"
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4177ff]/50 focus:border-[#4177ff] transition-all text-sm placeholder-gray-400"
                                />
                            </div>

                            <div className="md:col-span-2 text-xs text-[#4177ff] mt-2 font-medium">
                                * SiMug diwajibkan oleh hukum untuk menagih pajak transaksi yang berlaku untuk pembelian yang dilakukan dalam yuridiksi tertentu.
                            </div>

                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                        <div className="bg-[#4177ff] px-5 py-3 flex items-center gap-4 text-white relative overflow-hidden">
                            <div className="bg-white/20 p-2.5 rounded-full z-10">
                                <FaCreditCard className="text-xl" />
                            </div>
                            <h2 className="font-semibold text-xl z-10">Metode Pembayaran</h2>

                            {/* Decorative circles */}
                            <div className="absolute right-0 top-0 h-full w-32 bg-white/10 rounded-l-full transform translate-x-12"></div>
                            <div className="absolute right-20 top-0 h-full w-32 bg-white/5 rounded-l-full transform translate-x-12"></div>
                        </div>

                        <div className="p-5">
                            <p className="font-bold text-gray-700 mb-4">Pilih Metode Pembayaran:</p>

                            {/* Tabs */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[
                                    { id: 'ewallet', label: 'E-Wallet', icon: FaWallet },
                                    { id: 'card', label: 'Card', icon: FaCreditCard },
                                    { id: 'bank', label: 'Bank', icon: FaUniversity }
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setPaymentType(type.id)}
                                        className={`cursor-pointer flex flex-col items-center justify-center py-6 border rounded-xl transition-all duration-200 group ${paymentType === type.id
                                            ? 'bg-white border-blue-200 ring-2 ring-blue-50 shadow-sm'
                                            : 'bg-white border-gray-200 text-gray-400 hover:border-blue-300 hover:text-blue-400'
                                            }`}
                                    >
                                        <type.icon className={`text-2xl mb-2 ${paymentType === type.id ? 'text-[#4177ff]' : 'text-gray-300 group-hover:text-blue-400'}`} />
                                        <span className={`text-sm font-semibold capitalize ${paymentType === type.id ? 'text-gray-800' : ''}`}>{type.label}</span>
                                    </button>
                                ))}
                            </div>

                            <p className="font-bold text-gray-700 mb-4">Opsi-opsi Tersedia:</p>
                            <div className="space-y-4">
                                {banks.map((bank) => (
                                    <div
                                        key={bank.id}
                                        onClick={() => setPaymentMethod(bank.id)}
                                        className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${paymentMethod === bank.id
                                            ? 'border-[#4177ff] ring-1 ring-[#4177ff] bg-blue-50/30'
                                            : 'border-gray-200 hover:border-[#4177ff]/50 hover:shadow-sm'
                                            }`}
                                    >
                                        <div className="w-20 h-10 flex items-center justify-center mr-6 bg-white rounded border border-gray-100 p-1">
                                            <img src={bank.img} alt={bank.id} className="h-full object-contain" />
                                        </div>
                                        <span className="font-semibold text-gray-700 text-lg">{bank.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className="lg:col-span-1 lg:space-y-8 space-y-4">
                    {/* Order Summary */}
                    <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden top-24">
                        <div className="bg-[#4177ff] px-5 py-3 flex items-center gap-4 text-white relative overflow-hidden">
                            <div className="bg-white/20 p-2.5 rounded-full z-10">
                                <HiTicket className="text-xl translate-y-[1px]" />
                            </div>
                            <h2 className="font-semibold text-xl z-10">Ringkasan Pembayaran</h2>
                            {/* Decorative circles */}
                            <div className="absolute right-[-20px] top-[-20px] h-24 w-24 bg-white/10 rounded-full"></div>
                        </div>

                        <div className="p-5">
                            {/* Course Card */}
                            <div className="flex gap-4 mb-5 items-center">
                                <div className="w-20 h-14 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                                    <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Course" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-800 text-sm line-clamp-2 leading-tight mb-2">
                                        Workout di Rumah aja Tanpa Alat
                                    </h3>
                                    <div className="flex justify-between items-end">
                                        <p className="text-xs text-gray-500">Oleh Moh. Hambali</p>
                                        <p className="text-xs text-gray-500 font-medium">Kuantitas: 1</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 border-t border-gray-100 pt-5 text-sm">
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span className="w-32">Harga Kursus</span>
                                    <span>:</span>
                                    <span className="font-bold text-[#4177ff] text-right flex-1">Rp. 50.000</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span className="w-32">Diskon Kursus</span>
                                    <span>:</span>
                                    <span className="font-bold text-[#4177ff] text-right flex-1">-Rp. 10.000</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span className="w-32">Mug Poin (5.000)</span>
                                    <span>:</span>
                                    <span className="font-bold text-[#4177ff] text-right flex-1">-Rp. 5.000</span>
                                </div>

                                <div className="border-t border-gray-100 my-2"></div>

                                <div className="flex justify-between font-bold text-lg text-gray-800 items-center">
                                    <span>Total Harga</span>
                                    <span className="mx-2">:</span>
                                    <span className="text-[#4177ff]">Rp. 35.000</span>
                                </div>
                            </div>

                            <div className="mt-4 text-[11px] text-gray-400 space-y-2 leading-relaxed">
                                <p className="flex items-start gap-1.5">
                                    <span className="text-[#4177ff] font-bold text-xs mt-[1px]">*</span>
                                    <span>Dengan menyelesaikan pembayaran ini, Anda menyetujui <span className="text-[#4177ff] cursor-pointer hover:underline font-medium">persyaratan dan penggunaan</span> SiMug.</span>
                                </p>
                                <p className="flex items-start gap-1.5">
                                    <span className="text-[#4177ff] font-bold text-xs mt-[1px]">*</span>
                                    <span>Pembayaran Ini sudah termasuk pajak.</span>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Pay Button */}
                    <button
                        disabled={!isValid}
                        className={`cursor-pointer w-full py-4 rounded-xl font-bold text-white shadow-[0_4px_14px_0_rgba(65,119,255,0.39)] flex items-center justify-center gap-3 transition-all duration-300 transform ${isValid
                            ? 'bg-[#4177ff] hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1'
                            : 'bg-[#4177ff]/60 cursor-not-allowed shadow-none'
                            }`}
                    >
                        {!isValid && <FaLock className="text-lg opacity-80" />}
                        <span className="text-lg">Lanjut Bayar</span>
                    </button>

                    {/* Guarantee */}
                    <div className="flex items-start gap-3 mt-2 px-2">
                        <div className="mt-1 flex-shrink-0 text-gray-400">
                            {/* Placeholder for optional icon if needed, but text is fine */}
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-gray-700 flex items-center gap-2">
                                Jaminan Uang Kembali <FaInfoCircle className="text-gray-300 text-sm" />
                            </h4>
                            <p className="text-xs mt-1 leading-relaxed text-gray-500">
                                Tidak puas dengan kursus ini? Dapatkan refund penuh dalam 30 hari. Cepat dan mudah!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;
