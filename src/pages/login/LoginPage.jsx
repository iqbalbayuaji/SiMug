
import LoginImg from "../../assets/images/thumbnail-login.png"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative lg:m-5 rounded-none lg:rounded-3xl overflow-hidden">
        <img
          src={LoginImg}
          alt="thumbnail-login"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="w-full z-10 flex flex-col justify-between px-6 md:px-8 lg:px-10 py-6 md:py-8 text-white">
          <div className="flex justify-between">
            <div className="flex text-lg md:text-xl font-semibold">
              SiMug
            </div>
            <button className="text-sm md:text-base">← Kembali</button>
          </div>
          <div className="">
            <div>
              <p className="text-xs md:text-sm mb-1">Kamu sudah melangkah sejauh ini.</p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                "Yuk, Kita lanjutin perjalanan <br />
                sehatmu! Pelan-pelan tapi <br />
                tetap konsisten."
              </h2>
            </div>

            <div className="flex gap-2 md:gap-3 mt-8 md:mt-15">
              <span className="w-8 md:w-10 h-1.5 bg-white rounded-full" />
              <span className="w-8 md:w-10 h-1.5 bg-white/40 rounded-full" />
              <span className="w-8 md:w-10 h-1.5 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 py-6 md:py-7">
        <div className="max-w-md w-full">
          <div className="flex flex-col items-start text-xs sm:text-sm mb-3 md:mb-4">
            <a className="text-gray-500">Belum Punya Akun?</a>
            <a href="#" className="text-blue-500 font-medium">Buat Akun</a>
          </div>
          <div className="space-y-1.5 md:space-y-2 mb-6 md:mb-10 mt-4 md:mt-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight">Hi, Selamat Datang Kembali, Udah Siap Lanjutin Progress?</h1>
            <p className="text-sm md:text-base text-gray-500 font-normal">Akses kembali course, materi, progres tracker, dan artikel yang kamu simpan. Jangan sampai ketinggalan update terbaru!</p>
          </div>


          <form className="space-y-4 md:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Email or Username</label>
              <input
                type="text"
                placeholder="Masukkan Email atau Username"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm md:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm md:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
