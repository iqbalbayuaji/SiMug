import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import register1 from "../../../assets/images/register1.png"
import register2 from "../../../assets/images/register2.png"
import register3 from "../../../assets/images/register3.png"

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
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: register1,
      title: "Progres Dapat, Pengalaman Juga Dapat",
      description: "Ikuti berbagai event menarik di SIMUG, kumpulkan pengalaman, dan raih hadiah seru sambil tetap fokus ke kesehatanmu."
    },
    {
      image: register2,
      title: "Dari Mulai Sampai Konsisten",
      description: "SIMUG bukan cuma bantu kamu mulai hidup sehat, tapi juga menjaga ritmenya lewat pendampingan dan sistem progres yang terarah."
    },
    {
      image: register3,
      title: "Belajar Sehat, Nggak Sendirian",
      description: "Di SIMUG, kamu ditemani mentor berpengalaman, forum diskusi aktif, dan chatbot AI yang siap bantu kapan pun kamu butuh."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Step 1 - Section Kiri - Form */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 py-4 md:py-5 lg:py-6 h-screen overflow-hidden">
        {/* Step Indicator */}
        <div className="mb-4 md:mb-4 mt-12">
          <div className="hidden lg:block flex justify-between items-center mb-2">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${index === 0 && currentStep >= 1
                    ? "bg-[#4177FF]"
                    : index > 0 && index < currentStep
                      ? "bg-[#4177FF]"
                      : "bg-white border-3 border-[#4177FF]"
                    }`}
                />
                {/* Progress Line */}
                <div
                  className={`flex-1 h-1.5 mx-1 rounded-full transition-all duration-300 ${index < currentStep
                    ? "bg-[#4177FF]"
                    : "bg-gray-200"
                    }`}
                />
                {/* Ending Dot (only for last step) */}
                {index === totalSteps - 1 && (
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${currentStep > totalSteps
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
        <div className="mb-4 md:mb-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold lg:font-bold text-gray-900 leading-tight mb-2">
            Hi, Selamat Bergabung,
            <br />
            Buruan <span className="text-gray-900">Daftarin Akunmu!</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Jangan tunda-tunda lagi. Segera daftarkan akun dan
            <br className="hidden sm:block" />
            mulai program pengembangan diri SiMug sekarang.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 md:space-y-4 flex-1">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="flex items-center gap-2 text-sm">
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
            className="w-full py-2.5 md:py-3 text-sm md:text-base rounded-full bg-[#4177FF] text-white font-semibold hover:bg-[#3461D9] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Verifikasi Identitas
          </button>

          {/* Footer Text */}
          <p className="text-xs text-gray-500 text-center">
            Dengan melanjutkan ini, Saya telah menyetujui
            <br />
            <span className="font-semibold text-gray-700">kebijakan pengguna</span> dan{" "}
            <span className="font-semibold text-gray-700">keamanan privasi</span>.
          </p>
        </form>
      </div>

      {/* Step 1 - Section Kanan - Blue Background */}
      <div className="hidden lg:flex lg:w-1/2 relative m-5 rounded-3xl overflow-hidden bg-gradient-to-br from-[#4177FF] to-[#3461D9] h-[calc(100vh-2.5rem)]">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <Link to="/login" className="flex items-center gap-2 text-white text-sm hover:opacity-80 transition">
            <FaChevronLeft className="h-5 w-5" />
            Kembali
          </Link>
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            SiMug
          </div>
        </div>

        {/* Center Image with Decorative Dots */}
        <div className="flex items-start justify-center w-full h-full relative pt-32">
          {/* Decorative Dots */}
          {/* Top Left Dots */}
          <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-[#5989FF] opacity-60"></div>
          <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-[#5989FF] opacity-40"></div>
          <div className="absolute top-[12%] left-[18%] w-2.5 h-2.5 rounded-full bg-[#5989FF] opacity-50"></div>
          
          {/* Top Right Dots */}
          <div className="absolute top-[18%] right-[12%] w-3 h-3 rounded-full bg-[#5989FF] opacity-60"></div>
          <div className="absolute top-[25%] right-[8%] w-2 h-2 rounded-full bg-[#5989FF] opacity-40"></div>
          <div className="absolute top-[15%] right-[18%] w-2.5 h-2.5 rounded-full bg-[#5989FF] opacity-50"></div>
          
          {/* Bottom Left Dots */}
          <div className="absolute bottom-[20%] left-[8%] w-3 h-3 rounded-full bg-[#5989FF] opacity-60"></div>
          <div className="absolute bottom-[15%] left-[14%] w-2 h-2 rounded-full bg-[#5989FF] opacity-40"></div>
          <div className="absolute bottom-[25%] left-[12%] w-2.5 h-2.5 rounded-full bg-[#5989FF] opacity-50"></div>
          
          {/* Bottom Right Dots */}
          <div className="absolute bottom-[22%] right-[10%] w-3 h-3 rounded-full bg-[#5989FF] opacity-60"></div>
          <div className="absolute bottom-[18%] right-[16%] w-2 h-2 rounded-full bg-[#5989FF] opacity-40"></div>
          <div className="absolute bottom-[28%] right-[14%] w-2.5 h-2.5 rounded-full bg-[#5989FF] opacity-50"></div>

          {/* Large Background Circles */}
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#5989FF] opacity-10"></div>
          <div className="absolute bottom-[10%] right-[5%] w-72 h-72 rounded-full bg-[#5989FF] opacity-10"></div>

          {/* Main Image */}
          <div className="relative z-10 w-[55%] max-w-[380px] transition-all duration-500">
            <img 
              src={slides[currentSlide].image}
              alt="Register Illustration" 
              className="w-full h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
              draggable="false"
            />
          </div>
        </div>

        {/* Text Content and Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[92%] max-w-2xl text-center">
          {/* Text Content */}
          <div className="mb-6 px-4">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 transition-all duration-500">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed transition-all duration-500">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Blue Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#4177FF] p-4 flex justify-between items-center">
        <Link to="/login" className="flex items-center gap-2 text-white text-sm">
          <FaChevronLeft className="h-5 w-5" />
          Kembali
        </Link>
        <div className="flex items-center gap-2 text-white font-semibold">
          SiMug
        </div>
      </div>
    </>
  )
}
