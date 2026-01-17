import { Link } from "react-router-dom"
import StackedCarousel from "../../../components/StackedCarousel"
import logo from "../../../assets/images/logo.png"

export default function Step1({
  formData,
  handleInputChange,
  agreeToTerms,
  setAgreeToTerms,
  handleNextStep,
  currentStep,
  totalSteps,
  getStepLabel
}) {
  return (
    <>
      {/* Step 1 - Section Kiri - Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 overflow-y-auto">
        {/* Step Indicator */}
        <div className="mb-4 md:mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[#4177FF]">
              Langkah {currentStep} dari {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {getStepLabel(currentStep)}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="flex gap-1 items-center">
            {[...Array(totalSteps)].map((_, index) => (
              <div key={index} className="flex items-center flex-1">
                {/* Starting Dot */}
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                    index === 0 && currentStep >= 1
                      ? "bg-[#4177FF]"
                      : index > 0 && index < currentStep
                      ? "bg-[#4177FF]"
                      : "bg-white border-3 border-[#4177FF]"
                  }`}
                />
                {/* Progress Line */}
                <div
                  className={`flex-1 h-1.5 mx-1 rounded-full transition-all duration-300 ${
                    index < currentStep
                      ? "bg-[#4177FF]"
                      : "bg-gray-200"
                  }`}
                />
                {/* Ending Dot (only for last step) */}
                {index === totalSteps - 1 && (
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                      currentStep > totalSteps
                        ? "bg-[#4177FF]"
                        : "bg-white border-3 border-[#4177FF]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="mb-4 md:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
            Hi, Selamat Bergabung,
            <br />
            Buruan <span className="text-gray-900">Daftarin Akunmu!</span>
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            Jangan tunda-tunda lagi. Segera daftarkan akun dan
            <br className="hidden sm:block" />
            mulai program pengembangan diri SiMug sekarang.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 md:space-y-5 flex-1">
          {/* Nama Lengkap */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleInputChange}
              placeholder="Masukkan Nama Lengkap"
              className="w-full px-4 py-2.5 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan Email"
              className="w-full px-4 py-2.5 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
            />
          </div>

          {/* No. Telp */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700">
              No. Telp
            </label>
            <input
              type="tel"
              name="noTelp"
              value={formData.noTelp}
              onChange={handleInputChange}
              placeholder="Masukkan No. Telepon"
              className="w-full px-4 py-2.5 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
            />
          </div>

          {/* Password & Konfirmasi Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Masukkan Password"
                className="w-full px-4 py-2.5 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700">
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="konfirmasiPassword"
                value={formData.konfirmasiPassword}
                onChange={handleInputChange}
                placeholder="Masukkan Password"
                className="w-full px-4 py-2.5 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 text-sm mt-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-[#4177FF] focus:ring-[#4177FF]"
            />
            <label htmlFor="terms" className="text-gray-600">
              Saya menyetujui{" "}
              <a href="#" className="text-[#4177FF] underline font-medium">
                Kebijakan
              </a>{" "}
              dan{" "}
              <a href="#" className="text-[#4177FF] underline font-medium">
                Privasi
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleNextStep}
            className="w-full py-2.5 md:py-3 text-sm md:text-base rounded-full bg-[#4177FF] text-white font-semibold hover:bg-[#3461D9] transition-all duration-300 shadow-lg hover:shadow-xl mt-3"
          >
            Verifikasi Identitas
          </button>

          {/* Footer Text */}
          <p className="text-xs text-gray-500 text-center mt-3">
            Dengan melanjutkan ini, Saya telah menyetujui
            <br />
            <span className="font-semibold text-gray-700">kebijakan pengguna</span> dan{" "}
            <span className="font-semibold text-gray-700">keamanan privasi</span>.
          </p>
        </form>
      </div>

      {/* Step 1 - Section Kanan - Blue Background */}
      <div className="hidden lg:flex lg:w-1/2 relative m-5 rounded-3xl overflow-hidden bg-gradient-to-br from-[#4177FF] to-[#3461D9]">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <Link to="/login" className="flex items-center gap-2 text-white text-sm hover:opacity-80 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali
          </Link>
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <img src={logo} alt="SiMug" className="h-6 w-6" />
            SiMug
          </div>
        </div>

        {/* Carousel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[92%] max-w-3xl">
          <StackedCarousel
            slides={[
              {
                title: "Mulai Perjalanan Sehatmu",
                description: "Bergabung dengan ribuan pengguna lain yang sudah memulai gaya hidup sehat bersama SiMug."
              },
              {
                title: "Program Terstruktur",
                description: "Dapatkan akses ke program kesehatan yang dirancang khusus oleh para ahli."
              },
              {
                title: "Komunitas Supportif",
                description: "Temukan teman-teman baru yang memiliki tujuan yang sama dalam perjalanan kesehatanmu."
              }
            ]}
            autoPlayInterval={4000}
            showDots={true}
          />
        </div>
      </div>

      {/* Mobile Blue Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#4177FF] to-[#3461D9] p-4 flex justify-between items-center">
        <Link to="/login" className="flex items-center gap-2 text-white text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali
        </Link>
        <div className="flex items-center gap-2 text-white font-semibold">
          <img src={logo} alt="SiMug" className="h-5 w-5" />
          SiMug
        </div>
      </div>
    </>
  )
}
