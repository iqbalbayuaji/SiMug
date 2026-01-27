import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function ProfilePusatBantuanPage() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Left Column - Form */}
      <div className="lg:col-span-2">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Hi, adakah kendala saat belajar?</h2>
          <p className="text-gray-600">Jangan ragu untuk menghubungi SiMug!</p>
        </div>

        <form className="space-y-4">
          {/* Nama Depan & Belakang */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Nama Depan:
              </label>
              <input
                type="text"
                placeholder="Input Nama Depan"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Nama Belakang:
              </label>
              <input
                type="text"
                placeholder="Input Nama Belakang"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
            </div>
          </div>

          {/* Alamat Email & No. Telp */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Alamat Email:
              </label>
              <input
                type="email"
                placeholder="Input Alamat Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                No. Telp:
              </label>
              <input
                type="tel"
                placeholder="Input No. Telp"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
            </div>
          </div>

          {/* Keluhan & Saran */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Keluhan & Saran:
            </label>
            <textarea
              placeholder="Tulis keluhan & saran apa saja..."
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent resize-none"
            ></textarea>
          </div>

          {/* Note & Submit Button */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 pt-2">
            <p className="text-xs text-gray-500 pb-2 md:pb-0">
              * Keluhan dan saran akan kami terima dan kami upayakan update terbaru untuk laporan Kamu.
            </p>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4177FF] text-white font-semibold rounded-lg hover:bg-[#3461D9] transition-colors w-full lg:w-auto"
            >
              Submit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Right Column - Contact Info */}
      <div className="lg:col-span-1">
        <div className="bg-[#4177FF] rounded-2xl p-5 text-white">
          <h3 className="text-base font-bold mb-2">Informasi Lanjutan</h3>
          <p className="text-xs mb-5 opacity-90 leading-relaxed">
            SiMug sangat akan menjaga kebutuhanmu terkait apa dan siapapun kita dengan senang hati akan membantu.
          </p>

          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs opacity-75 mb-0.5">Alamat Email</p>
                <p className="font-semibold text-sm">officialsimug@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs opacity-75 mb-0.5">Alamat Kantor</p>
                <p className="font-semibold text-sm">Jl. Mrican Raya, Semarang</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs opacity-75 mb-0.5">Telepon Kantor</p>
                <p className="font-semibold text-sm">+62 889 4240 1123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
