
import LoginImg from "../../assets/images/thumbnail-login.png"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Image Section */}
      <div className="hidden lg:flex w-1/2 relative m-5 rounded-3xl overflow-hidden">
        <img
          src={LoginImg}
          alt="thumbnail-login"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col justify-between p-10 text-white">
          <div className="flex ">
            <div className="flex items-center gap-2 text-xl font-semibold">
              SiMug
            </div>
            <div className="flex items-center gap-2 text-xl font-semibold">
              SiMug
            </div>
          </div>

          <div>
            <p className="text-sm mb-2">Kamu sudah melangkah sejauh ini.</p>
            <h2 className="text-3xl font-bold leading-snug">
              “Yuk, Kita lanjutin perjalanan <br />
              sehatmu! Pelan-pelan tapi <br />
              tetap konsisten.”
            </h2>
          </div>

          <div className="flex gap-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="w-2 h-2 bg-white/40 rounded-full" />
            <span className="w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-7">
        <div className="max-w-md w-full">
          <div className="flex flex-col items-start text-sm mb-4">
            <a className="text-gray-500">Belum Punya Akun?</a>
            <a href="#" className="text-blue-500 font-medium">Buat Akun</a>
          </div>
          <div className="space-y-2 mb-5">
            <h1 className="text-3xl font-medium ">Hi, Selamat Datang Kembali, Udah Siap Lanjutin Progress?</h1>
            <a className="text-gray-500 font-normal">Akses kembali course, materi, progres tracker, dan artikel yang kamu simpan. Jangan sampai ketinggalan update terbaru!</a>
          </div>


          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email or Username</label>
              <input
                type="text"
                placeholder="Masukkan Email atau Username"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Masukkan Password"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                Ingat Saya
              </label>
              <a href="#" className="text-blue-500">Lupa Password</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-blue-500 drop-shadow-lg text-white font-semibold hover:bg-blue-600 transition"
            >
              Masuk Kembali
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">atau</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button className="w-full py-3 rounded-full border border-gray-400 drop-shadow-lg flex items-center justify-center gap-2 hover:border-gray-900">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Lanjutkan dengan Google
          </button>

          <p className="text-xs text-gray-700 text-center mx-20 mt-5">
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
