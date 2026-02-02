import { useState } from "react"

export default function SertifikatTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("semua")

  const certificates = [
    {
      id: 1,
      certNumber: "CERT-2026-000123",
      courseName: "Workout dirumah...",
      focusProgram: "Kebugaran Jasmani",
      completionDate: "28 Desember 2025",
      status: "Aktif"
    },
    {
      id: 2,
      certNumber: "CERT-2026-000124",
      courseName: "Mengatur pernafa...",
      focusProgram: "Sports & Atletik",
      completionDate: "18 Januari 2026",
      status: "Aktif"
    },
    {
      id: 3,
      certNumber: "CERT-2026-000124",
      courseName: "Mengatur pernafa...",
      focusProgram: "Sports & Atletik",
      completionDate: "24 Januari 2026",
      status: "Aktif"
    },
    {
      id: 4,
      certNumber: "CERT-2026-000124",
      courseName: "Mengatur pernafa...",
      focusProgram: "Sports & Atletik",
      completionDate: "24 Januari 2026",
      status: "Aktif"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header with Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-gray-600">
            Sertifikat yang kamu punya: <span className="text-[#4177FF] font-bold">"{certificates.length} sertifikat"</span>
          </p>
        </div>

        <div className="w-full sm:w-auto flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Cari sertifikat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-80 pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button className="cursor-pointer flex items-center gap-2 px-4 py-2.5 bg-[#F0F4FF] rounded-full text-[#4177FF] font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
              Semua
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-sm overflow-hidden overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-[#F0F4FF]">
              <th className="text-left py-4 px-6 text-[#4177FF] opacity-70 font-semibold text-base">No.</th>
              <th className="text-left py-4 px-6 text-[#4177FF] opacity-70 font-semibold text-base">No. Sertifikat</th>
              <th className="text-left py-4 px-6 text-[#4177FF] opacity-70 font-semibold text-base">Nama Kursus</th>
              <th className="text-left py-4 px-6 text-[#4177FF] opacity-70 font-semibold text-base">Fokus Program</th>
              <th className="text-left py-4 px-6 text-[#4177FF] opacity-70 font-semibold text-base">Tgl. Penyelesaian</th>
              <th className="text-left py-4 px-6 text-[#4177FF] opacity-70 font-semibold text-base">Status</th>
              <th className="text-left py-4 px-6 text-[#4177FF] opacity-70 font-semibold text-base">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={cert.id} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-gray-900">{index + 1}</td>
                <td className="py-4 px-6 text-gray-900">{cert.certNumber}</td>
                <td className="py-4 px-6 text-gray-900">{cert.courseName}</td>
                <td className="py-4 px-6 text-gray-900">{cert.focusProgram}</td>
                <td className="py-4 px-6 text-gray-900">{cert.completionDate}</td>
                <td className="py-4 px-6">
                  <span className="text-gray-900">{cert.status}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#F0F4FF] text-[#4177FF] font-semibold rounded-full hover:bg-[#E5EDFF] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Lihat
                    </button>
                    <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-[#F0F4FF] text-[#4177FF] font-semibold rounded-full hover:bg-[#E5EDFF] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Unduh
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
