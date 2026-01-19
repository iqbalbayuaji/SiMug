import calendarIcon from "../../assets/icon/calendar.svg"

export default function ProgressHeader({ userName, activeTab, setActiveTab }) {
  return (
    <>
      {/* Header Section */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 mb-1">
            Selamat Pagi, {userName}
          </h1>
          <p className="text-gray-600 text-lg">
            Hari ini mau melanjutkan kursus apa?
          </p>
        </div>
        <button className="relative overflow-hidden text-white px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
          {/* Two-tone background */}
          <div className="absolute inset-0 bg-[#4177FF]"></div>
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-[#5686FF] rounded-tl-[3rem]"></div>
          
          {/* Content */}
          <img src={calendarIcon} alt="Calendar" className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Tambah Kursus</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("beranda")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === "beranda"
              ? "text-[#4177FF]"
              : "text-[#1E1E1E] hover:text-gray-900"
          }`}
        >
          Beranda
          {activeTab === "beranda" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4177FF] rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("kursus")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === "kursus"
              ? "text-[#4177FF]"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Kursus
          {activeTab === "kursus" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4177FF] rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("sertifikat")}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === "sertifikat"
              ? "text-[#4177FF]"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Sertifikat
          {activeTab === "sertifikat" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4177FF] rounded-full" />
          )}
        </button>
      </div>
    </>
  )
}
