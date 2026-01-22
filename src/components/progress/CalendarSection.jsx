import { useState } from "react"
import decoCalendar from "../../assets/icon/progress/deco-calendar.svg"
import addTargetIcon from "../../assets/icon/add-target.svg"
import calendarIcon from "../../assets/icon/calendar.svg"

export default function CalendarSection({ 
  selectedDate, 
  setSelectedDate, 
  daysInMonth, 
  startDay, 
  currentDay, 
  getDayClass 
}) {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    duration: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setShowModal(false)
    // Reset form
    setFormData({ startDate: '', endDate: '', duration: '' })
  }

  return (
    <>
      <div className="lg:col-span-1">
        <div className="bg-white rounded-4xl overflow-hidden shadow-lg sticky top-6">
          {/* Header with Gradient Background */}
          <div className="relative bg-[#4177FF] p-4 overflow-hidden">
            {/* Decorative Circles */}
          <img src={decoCalendar} alt="" className="absolute top-0 left-0 h-36" />
            
            <div className="relative z-10 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Target Harian</h3>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#5F8DFF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#6B95FF] transition-colors flex items-center gap-2"
              >
                <img src={addTargetIcon} alt="Add Target" className="w-5 h-5" />
                Tambah
              </button>
            </div>
          </div>

        {/* Calendar Content */}
        <div className="p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-semibold text-[#1E1E1E]">Januari 2026</h4>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="mb-2 border-t border-[#CACACA] pt-6 -mx-6 px-6">
            <div className="grid grid-cols-7 gap-3 mb-3">
              {["SEN", "SEL", "RAB", "KAM", "JUM", "SAB", "MIN"].map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-gray-400">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {/* Empty cells for days before month starts */}
              {[...Array(startDay)].map((_, i) => (
                <div key={`empty-${i}`} className="p-1.5" />
              ))}
              {/* Days of month */}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1
                const isCurrentDay = day === currentDay
                const isRangeStart = day === 4 || day === 16
                const isRangeEnd = day === 7 || day === 19
                const isInRange = (day >= 4 && day <= 7) || (day >= 16 && day <= 19)
                const isMiddleRange = isInRange && !isRangeStart && !isRangeEnd
                
                return (
                  <div key={day} className="relative p-1.5">
                    {/* Background bar for range - extends beyond cell */}
                    {isInRange && (
                      <div 
                        className={`absolute bg-[#E5EDFF] -z-10 ${
                          isRangeStart ? 'rounded-l-full' : ''
                        } ${
                          isRangeEnd ? 'rounded-r-full' : ''
                        }`}
                        style={{
                          left: isRangeStart ? '20%' : '0',
                          right: isRangeEnd ? '20%' : '0',
                          top: '12%',
                          bottom: '12%'
                        }}
                      />
                    )}
                    
                    <button
                      onClick={() => setSelectedDate(day)}
                      className={`relative w-full aspect-square flex items-center justify-center text-base font-semibold transition-all ${
                        isRangeStart || isRangeEnd || isCurrentDay
                          ? "bg-[#4177FF] text-white hover:bg-[#3461D9] rounded-full z-10"
                          : isMiddleRange
                          ? "text-[#4177FF] z-10"
                          : "text-gray-700 hover:bg-gray-100 rounded-full"
                      }`}
                    >
                      {day}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Current Day Info */}
          <div className="border-t border-[#CACACA] pt-4 -mx-6 px-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-base text-gray-800">
                <span className="font-bold">Hari ini</span> <span className="text-[#8F8F8F]">16 Jan 2026</span>
              </p>

              
              <button className="text-[#4177FF] text-base font-semibold hover:underline">
                Lanjut Belajar
              </button>
            </div>
            
            <div className="bg-[#E5EDFF] rounded-2xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 bg-[#4177FF] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-base text-[#4177FF] font-semibold leading-relaxed">
                Bagus, Kamu belajar sesuai target!
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-overlay">
          <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl modal-content overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4177FF] rounded-2xl flex items-center justify-center">
                  <img src={calendarIcon} alt="Calendar" className="w-7 h-7 brightness-0 invert" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Atur Jadwal Belajar</h2>
                  <p className="text-gray-500 text-sm">Jadwal belajar akan membantu konsistensi kamu.</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Left Side - Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">Januari 2026</h4>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-3 mb-4">
                    {["SEN", "SEL", "RAB", "KAM", "JUM", "SAB", "MIN"].map((day) => (
                      <div key={day} className="text-center text-sm font-semibold text-gray-400">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-3">
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1
                      return (
                        <div key={day} className="aspect-square flex items-center justify-center text-base font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                          {day}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="border-l border-gray-200 pl-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Date Inputs - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-base font-semibold text-gray-900 mb-3">
                          Jadwal Mulai:
                        </label>
                        <input
                          type="text"
                          placeholder="DD/MM/YY"
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4177FF] focus:outline-none transition-colors text-gray-700 placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-base font-semibold text-gray-900 mb-3">
                          Jadwal Berakhir:
                        </label>
                        <input
                          type="text"
                          placeholder="DD/MM/YY"
                          value={formData.endDate}
                          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4177FF] focus:outline-none transition-colors text-gray-700 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Duration - Full Width */}
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-3">
                        Durasi Belajar per Hari:
                      </label>
                      <input
                        type="text"
                        placeholder="Tulis durasi (min. 10 menit)"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4177FF] focus:outline-none transition-colors text-gray-700 placeholder:text-gray-400"
                      />
                    </div>

                    {/* Info Text */}
                    <div className="flex items-start gap-2 text-sm text-gray-600 pt-2">
                      <span className="text-[#4177FF] mt-0.5">*</span>
                      <p>Notifikasi akan muncul setelah jadwal diatur.</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-6">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-[#4177FF] text-white font-semibold rounded-xl hover:bg-[#3461D9] transition-colors shadow-lg shadow-blue-500/25"
                      >
                        Jadwalkan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
