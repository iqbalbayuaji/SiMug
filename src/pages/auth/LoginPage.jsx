import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LoginImg from "../../assets/images/thumbnail-login.png"

export default function LoginPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: LoginImg,
      text: "Kamu sudah melangkah sejauh ini.",
      quote: "Yuk, Kita lanjutin perjalanan sehatmu! Pelan-pelan tapi tetap konsisten."
    },
    {
      image: LoginImg,
      text: "Setiap langkah kecil itu berarti.",
      quote: "Jangan berhenti sekarang! Progresmu sudah sangat bagus, terus semangat!"
    },
    {
      image: LoginImg,
      text: "Kesehatan adalah investasi terbaik.",
      quote: "Tubuh sehat, pikiran jernih. Mari jaga kesehatan bersama-sama!"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Section Kiri */}
      <div className="flex lg:w-1/2 relative h-48 rounded-b-lg lg:h-auto lg:m-5 rounded-none lg:rounded-3xl overflow-hidden">
        {/* Carousel Gambar */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`slide-${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />

        <div className="w-full z-10 flex flex-col justify-between px-6 md:px-8 lg:px-10 py-4 lg:py-6 md:py-8 text-white">
          <div className="flex justify-between">
            <div className="flex text-lg md:text-xl font-semibold">
              SiMug
            </div>
            <button className="text-sm md:text-base">← Kembali</button>
          </div>
          <div className="hidden lg:block">
            {/* Carousel Isi */}
            <div className="relative min-h-[200px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <p className="text-xs md:text-sm mb-1">{slide.text}</p>
                  <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                    "{slide.quote}"
                  </h2>
                </div>
              ))}
            </div>

            {/* Titik Carousel */}
            <div className="flex gap-2 md:gap-3 mt-8 md:mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'w-8 md:w-10 bg-white'
                    : 'w-8 md:w-10 bg-white/40 hover:bg-white/60'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Kanan */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-9 sm:px-6 md:px-8 py-6 md:py-7">
        <div className="max-w-md w-full ">
          {/* Link Belum Punya Akun */}
          <div className="flex flex-col items-start text-xs sm:text-sm mb-3 md:mb-4">
            <span className="text-gray-500">Belum Punya Akun?</span>
            <Link to="/register" className="text-blue-500 font-medium">Buat Akun</Link>
          </div>
          <div className="space-y-1.5 md:space-y-2 mb-6 md:mb-10 mt-4 md:mt-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight">Hi, Selamat Datang Kembali, Udah Siap Lanjutin Progress?</h1>
            <p className="text-sm md:text-base text-gray-500 font-normal">Akses kembali course, materi, progres tracker, dan artikel yang kamu simpan. Jangan sampai ketinggalan update terbaru!</p>
          </div>

          {/* Form */}
          <form className="space-y-4 md:space-y-5">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700">
                Email or Username
              </label>
              <input
                type="text"
                placeholder="Masukkan Email atau Username"
                className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full px-4 py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center gap-1.5 sm:gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                Ingat Saya
              </label>
              <a href="#" className="text-blue-500">Lupa Password</a>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 text-sm md:text-base rounded-full bg-blue-500 drop-shadow-lg text-white font-semibold hover:bg-blue-600 transition"
            >
              Masuk Kembali
            </button>
          </form>

          <div className="my-5 md:my-6 flex items-center gap-3 md:gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs sm:text-sm text-gray-400">atau</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button className="w-full py-2.5 sm:py-3 text-sm md:text-base rounded-full border border-gray-400 drop-shadow-lg flex items-center justify-center gap-2 hover:border-gray-900 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
            Lanjutkan dengan Google
          </button>

          <p className="text-xs text-gray-700 text-center mx-4 sm:mx-10 md:mx-20 mt-4 md:mt-5">
            Dengan melanjutkan ini, Saya telah menyetujui
            <span className="font-bold"> kebijakan pengguna </span>
            dan
            <span className="font-bold"> keamanan privasi</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
