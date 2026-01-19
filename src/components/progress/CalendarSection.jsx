import decoCalendar from "../../assets/icon/progress/deco-calendar.svg"

import addTargetIcon from "../../assets/icon/add-target.svg"

export default function CalendarSection({ 
  selectedDate, 
  setSelectedDate, 
  daysInMonth, 
  startDay, 
  currentDay, 
  getDayClass 
}) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-4xl overflow-hidden shadow-lg sticky top-6">
        {/* Header with Gradient Background */}
        <div className="relative bg-[#4177FF] p-4 overflow-hidden">
          {/* Decorative Circles */}
        <img src={decoCalendar} alt="" className="absolute top-0 left-0 h-36" />
          
          <div className="relative z-10 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">Target Harian</h3>
            <button className="bg-[#5F8DFF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#6B95FF] transition-colors flex items-center gap-2">
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
  )
}
