import decoDurasi from "../../assets/icon/progress/deco-durasi.svg"
import decoDurasi2 from "../../assets/icon/progress/deco-durasi2.svg"
import decoStreak from "../../assets/icon/progress/deco-streak.svg"
import decoStreak2 from "../../assets/icon/progress/deco-streak2.svg"
import decoKursus from "../../assets/icon/progress/deco-kursus.svg"
import decoKursus2 from "../../assets/icon/progress/deco-kursus2.svg"
import decoEkplor from "../../assets/icon/progress/deco-eksplor.svg"
import decoEksplor2 from "../../assets/icon/progress/deco-eksplor2.svg"
import infoIcon from "../../assets/icon/duo-icons_info.svg"

export default function StatsCards() {
  return (
    <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: '1fr 1fr 1fr 1.5fr' }}>
      {/* Durasi Belajar Card */}
      <div className="bg-[#4177FF] rounded-2xl p-6 text-white relative overflow-hidden h-full">
        {/* Decoration */}
        <img src={decoDurasi} alt="" className="absolute bottom-0 left-0 w-36 h-42" />
        <img src={decoDurasi2} alt="" className="absolute bottom-0 right-0 w-14 h-16" />

        <img src={infoIcon} alt="Info" className=" absolute top-4 right-4 w-6 h-6" />
        <p className="text-base opacity-90 relative z-10">Durasi Belajar</p>
        <div className="flex items-baseline gap-1 relative z-10">
          <span className="text-[3rem] font-bold">7,8</span>
          <span className="text-lg">jam</span>
        </div>
      </div>

      {/* Streak Belajar Card */}
      <div className="bg-[#618EFF] rounded-2xl p-6 text-white relative overflow-hidden h-full">
        {/* Decoration - */}
        <img src={decoStreak} alt="" className="absolute bottom-0 left-0 w-14 h-16" />
        <img src={decoStreak2} alt="" className="absolute bottom-0 right-0 w-36 h-36" />

        <img src={infoIcon} alt="Info" className=" absolute top-4 right-4 w-6 h-6" />
        <p className="text-base opacity-90">Streak Belajar</p>
        <div className="flex items-baseline gap-1">
          <span className="text-[3rem] font-bold z-10">25</span>
          <span className="text-lg">hari</span>
        </div>
      </div>

      {/* Kursus Diikuti Card */}
      <div className="bg-[#86A9FF] rounded-2xl p-6 relative overflow-hidden h-full">
        {/* Decoration - */}
        <img src={decoKursus} alt="" className="absolute top-0 left-0 w-16 h-16" />
        <img src={decoKursus2} alt="" className="absolute bottom-0 right-0 w-16 h-16" />

        <img src={infoIcon} alt="Info" className=" absolute top-4 right-4 w-6 h-6" />
        <p className="text-base text-white relative z-10">Kursus Diikuti</p>
        <div className="flex items-baseline gap-1 relative z-10">
          <span className="text-[3rem] font-bold text-white">5</span>
          <span className="text-lg text-white">kursus</span>
        </div>
      </div>

      {/* Eksplorasi Event Card */}
      <div className="relative rounded-2xl p-4 text-white overflow-hidden h-full">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#3360D0] to-[#3A5EBA]"></div>
        
        {/* Decoration - */}
        <img src={decoEkplor} alt="" className="absolute bottom-0 left-0 w-24 h-24" />
        <img src={decoEksplor2} alt="" className="absolute top-0 right-0 w-24 h-24" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-bold mb-2">Eksplorasi Event Kebugaran</h3>
            <p className="text-sm opacity-90">
              Temukan event bahasa yang <br/> relevan untuk studi dan karier.
            </p>
          </div>
          
          <div className="flex justify-end">
            <button className="bg-[#527ADF] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#6B95FF] transition-colors flex items-center gap-2 w-[90px]">
              Lihat
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
