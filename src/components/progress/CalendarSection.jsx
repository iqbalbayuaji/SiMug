import { useState, useEffect } from "react"
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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    duration: ''
  })
  const [modalCalendarDate, setModalCalendarDate] = useState({
    year: 2026,
    month: 0 // January (0-indexed)
  })
  const [dateRangeSelection, setDateRangeSelection] = useState({
    start: null,
    end: null,
    selecting: false
  })

  // Get days in month for modal calendar
  const getModalDaysInMonth = () => {
    return new Date(modalCalendarDate.year, modalCalendarDate.month + 1, 0).getDate()
  }

  // Get start day of month (0 = Sunday, 1 = Monday, etc.)
  const getModalStartDay = () => {
    const firstDay = new Date(modalCalendarDate.year, modalCalendarDate.month, 1).getDay()
    return firstDay === 0 ? 6 : firstDay - 1 // Convert to Monday = 0
  }

  // Format date to YYYY-MM-DD for input
  const formatDateForInput = (year, month, day) => {
    const m = String(month + 1).padStart(2, '0')
    const d = String(day).padStart(2, '0')
    return `${year}-${m}-${d}`
  }

  // Handle calendar day click in modal
  const handleModalDayClick = (day) => {
    const clickedDate = formatDateForInput(modalCalendarDate.year, modalCalendarDate.month, day)

    if (!dateRangeSelection.start || dateRangeSelection.end) {
      // Start new selection
      setDateRangeSelection({
        start: clickedDate,
        end: null,
        selecting: true
      })
      setFormData({ ...formData, startDate: clickedDate, endDate: '' })
    } else {
      // Complete selection
      const startDate = new Date(dateRangeSelection.start)
      const endDate = new Date(clickedDate)

      if (endDate >= startDate) {
        setDateRangeSelection({
          start: dateRangeSelection.start,
          end: clickedDate,
          selecting: false
        })
        setFormData({ ...formData, endDate: clickedDate })
      } else {
        // If clicked date is before start, swap them
        setDateRangeSelection({
          start: clickedDate,
          end: dateRangeSelection.start,
          selecting: false
        })
        setFormData({ ...formData, startDate: clickedDate, endDate: dateRangeSelection.start })
      }
    }
  }

  // Check if day is in selected range
  const isInModalRange = (day) => {
    if (!dateRangeSelection.start) return false

    const currentDate = formatDateForInput(modalCalendarDate.year, modalCalendarDate.month, day)
    const start = new Date(dateRangeSelection.start)
    const current = new Date(currentDate)

    if (dateRangeSelection.end) {
      const end = new Date(dateRangeSelection.end)
      return current >= start && current <= end
    }

    // If only start is selected, only highlight that day
    return currentDate === dateRangeSelection.start
  }

  // Check if day is range start
  const isModalRangeStart = (day) => {
    if (!dateRangeSelection.start) return false
    const currentDate = formatDateForInput(modalCalendarDate.year, modalCalendarDate.month, day)
    return currentDate === dateRangeSelection.start
  }

  // Check if day is range end
  const isModalRangeEnd = (day) => {
    if (!dateRangeSelection.end) return false
    const currentDate = formatDateForInput(modalCalendarDate.year, modalCalendarDate.month, day)
    return currentDate === dateRangeSelection.end
  }

  // Navigate months
  const navigateMonth = (direction) => {
    setModalCalendarDate(prev => {
      let newMonth = prev.month + direction
      let newYear = prev.year

      if (newMonth > 11) {
        newMonth = 0
        newYear++
      } else if (newMonth < 0) {
        newMonth = 11
        newYear--
      }

      return { year: newYear, month: newMonth }
    })
  }

  // Get month name
  const getMonthName = () => {
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    return `${months[modalCalendarDate.month]} ${modalCalendarDate.year}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setShowModal(false)
    // Reset form and selection
    setFormData({ startDate: '', endDate: '', duration: '' })
    setDateRangeSelection({ start: null, end: null, selecting: false })
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
              <h3 className="text-xl sm:text-2xl font-bold text-white">Target Harian</h3>
              <button
                onClick={() => setShowModal(true)}
                className="cursor-pointer bg-[#5F8DFF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#6B95FF] transition-colors flex items-center gap-2"
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
              <h4 className="text-lg sm:text-xl font-semibold text-[#1E1E1E]">Januari 2026</h4>
              <div className="flex gap-2">
                <button className="cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
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
                          className={`absolute bg-[#E5EDFF] -z-10 ${isRangeStart ? 'rounded-l-full' : ''
                            } ${isRangeEnd ? 'rounded-r-full' : ''
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
                        className={`relative w-full aspect-square flex items-center justify-center text-base font-semibold transition-all ${isRangeStart || isRangeEnd || isCurrentDay
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


                <button className="cursor-pointer text-[#4177FF] text-base font-semibold hover:underline">
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-0 lg:p-4 modal-overlay">
          <div className="bg-white rounded-none lg:rounded-3xl max-w-5xl w-full shadow-2xl modal-content overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4177FF] rounded-2xl flex items-center justify-center">
                  <img src={calendarIcon} alt="Calendar" className="w-7 h-7 brightness-0 invert" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Atur Jadwal Belajar</h2>
                  <p className="text-gray-500 text-sm">Jadwal belajar akan membantu konsistensi kamu.</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">{getMonthName()}</h4>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => navigateMonth(-1)}
                        className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateMonth(1)}
                        className="cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
                      >
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

                  <div className="grid grid-cols-7">
                    {/* Empty cells for days before month starts */}
                    {[...Array(getModalStartDay())].map((_, i) => (
                      <div key={`empty-${i}`} className="p-1.5" />
                    ))}

                    {/* Days of month */}
                    {[...Array(getModalDaysInMonth())].map((_, i) => {
                      const day = i + 1
                      const isInRange = isInModalRange(day)
                      const isRangeStart = isModalRangeStart(day)
                      const isRangeEnd = isModalRangeEnd(day)
                      const isMiddleRange = isInRange && !isRangeStart && !isRangeEnd

                      return (
                        <div key={day} className="relative p-1.5">
                          {/* Background bar for range - extends beyond cell */}
                          {isInRange && (
                            <div
                              className={`absolute bg-[#E5EDFF] ${isRangeStart ? 'rounded-l-full' : ''
                                } ${isRangeEnd ? 'rounded-r-full' : ''
                                }`}
                              style={{
                                left: isRangeStart ? '20%' : '-6px',
                                right: isRangeEnd ? '20%' : '-6px',
                                top: '12%',
                                bottom: '12%',
                                zIndex: 0
                              }}
                            />
                          )}

                          <button
                            type="button"
                            onClick={() => handleModalDayClick(day)}
                            className={`relative w-full aspect-square flex items-center justify-center text-base font-semibold transition-all ${isRangeStart || isRangeEnd
                              ? "bg-[#4177FF] text-white hover:bg-[#3461D9] rounded-full"
                              : isMiddleRange
                                ? "text-[#4177FF] hover:bg-[#D0DFFF] rounded-full"
                                : "text-gray-700 hover:bg-gray-100 rounded-full"
                              }`}
                            style={{ zIndex: 10 }}
                          >
                            {day}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Date Inputs - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-base font-semibold text-gray-900 mb-3">
                          Jadwal Mulai:
                        </label>
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4177FF] focus:outline-none transition-colors text-gray-700"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-base font-semibold text-gray-900 mb-3">
                          Jadwal Berakhir:
                        </label>
                        <input
                          type="date"
                          value={formData.endDate}
                          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                          min={formData.startDate}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#4177FF] focus:outline-none transition-colors text-gray-700"
                          required
                        />
                      </div>
                    </div>

                    {/* Duration - Full Width */}
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-3">
                        Durasi Belajar per Hari:
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="10"
                          placeholder="Tulis durasi (min. 10 menit)"
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          className="w-full px-4 py-3 pr-20 border-2 border-gray-200 rounded-xl focus:border-[#4177FF] focus:outline-none transition-colors text-gray-700 placeholder:text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          required
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
                          menit
                        </span>
                      </div>
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
                        className="cursor-pointer flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="cursor-pointer flex-1 px-6 py-3 bg-[#4177FF] text-white font-semibold rounded-xl hover:bg-[#3461D9] transition-colors shadow-lg shadow-blue-500/25"
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
