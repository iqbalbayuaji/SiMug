import { FaShieldAlt, FaLock, FaUserCircle, FaBell, FaInfoCircle, FaChevronRight } from 'react-icons/fa'

export default function ProfileAkunSayaPage() {
  return (
    <div className="space-y-4">
      {/* Verification Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="text-[#4177FF] font-bold mb-1">Verifikasi akunmu sekarang</h3>
        <p className="text-sm text-blue-600 mb-3">
          Verifikasi akun untuk keamanan lebih lanjut. <button className="text-[#4177FF] font-semibold underline">Klik disini</button>
        </p>
      </div>

      {/* Status Verifikasi Akun */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 md:pb-6 border-b border-gray-200 gap-2">
        <h3 className="font-bold text-gray-900">Status Verifikasi Akun</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-sm text-gray-500">fikoaja10@gmail.com</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full w-fit">
            unverified
          </span>
        </div>
      </div>

      {/* Password Akun */}
      <div className="flex items-center justify-between py-2 md:py-3 border-b border-gray-200">
        <h3 className="font-bold text-gray-900">Password Akun</h3>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold hover:bg-blue-50 rounded-lg transition-colors">
          <FaLock />
          Ubah
        </button>
      </div>

      {/* Jenis Akun */}
      <div className="flex items-center justify-between py-2 md:py-3 border-b border-gray-200">
        <h3 className="font-bold text-gray-900">Jenis Akun</h3>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold rounded-lg hover:bg-blue-100 transition-colors">
          <FaUserCircle />
          Free
        </button>
      </div>

      {/* Notifikasi Akun */}
      <div className="flex items-center justify-between py-2 md:py-3 border-b border-gray-200">
        <h3 className="font-bold text-gray-900">Notifikasi Akun</h3>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold hover:bg-blue-50 rounded-lg transition-colors">
          <FaBell />
          Atur
          <FaChevronRight className="text-xs" />
        </button>
      </div>

      {/* Kebijakan Privasi */}
      <div className="flex items-center justify-between py-2 md:py-3">
        <h3 className="font-bold text-gray-900">Kebijakan Privasi</h3>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold hover:bg-blue-50 rounded-lg transition-colors">
          <FaInfoCircle />
          Detail
        </button>
      </div>
    </div>
  )
}
