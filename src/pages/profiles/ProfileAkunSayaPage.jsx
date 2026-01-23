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
      <div className="flex items-start justify-between py-3 border-b border-gray-200">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">Status Verifikasi Akun</h3>
          <p className="text-sm text-gray-600">
            Lihat status verifikasi akun kamu untuk memastikan identitas.
          </p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className="text-sm text-gray-500">fikoaja10@gmail.com</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
            unverified
          </span>
        </div>
      </div>

      {/* Password Akun */}
      <div className="flex items-start justify-between py-3 border-b border-gray-200">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">Password Akun</h3>
          <p className="text-sm text-gray-600">
            Perbarui kata sandi akun kamu secara berkala untuk menjaga keamanan.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold hover:bg-blue-50 rounded-lg transition-colors ml-4">
          <FaLock />
          Ubah
        </button>
      </div>

      {/* Jenis Akun */}
      <div className="flex items-start justify-between py-3 border-b border-gray-200">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">Jenis Akun</h3>
          <p className="text-sm text-gray-600">
            Perbarui kata sandi akun kamu secara berkala untuk menjaga keamanan.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold rounded-lg hover:bg-blue-100 transition-colors ml-4">
          <FaUserCircle />
          Free
        </button>
      </div>

      {/* Notifikasi Akun */}
      <div className="flex items-start justify-between py-3 border-b border-gray-200">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">Notifikasi Akun</h3>
          <p className="text-sm text-gray-600">
            Atur jenis notifikasi yang ingin kamu terima.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold hover:bg-blue-50 rounded-lg transition-colors ml-4">
          <FaBell />
          Atur
          <FaChevronRight className="text-xs" />
        </button>
      </div>

      {/* Kebijakan Privasi */}
      <div className="flex items-start justify-between py-3">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">Kebijakan Privasi</h3>
          <p className="text-sm text-gray-600">
            Pelajari bagaimana data pribadi kamu dikumpulkan, digunakan, dan dilindungi.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-[#4177FF] font-semibold hover:bg-blue-50 rounded-lg transition-colors ml-4">
          <FaInfoCircle />
          Detail
        </button>
      </div>
    </div>
  )
}
