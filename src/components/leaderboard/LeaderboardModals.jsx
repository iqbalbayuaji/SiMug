import { useState } from 'react'

export default function LeaderboardModals({ showTipsModal, showProfileModal, selectedUser, onCloseTips, onCloseProfile }) {
  const [profileTab, setProfileTab] = useState('bulanan')

  return (
    <>
      {/* SIMUG Tips Modal */}
      {showTipsModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-3 xs:px-4"
          onClick={onCloseTips}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="bg-white rounded-2xl xs:rounded-3xl shadow-2xl w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[500px] h-auto min-h-[180px] xs:min-h-[190px] sm:min-h-[200px] md:min-h-[210px] relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onCloseTips}
              className="absolute top-2 xs:top-3 md:top-4 right-2 xs:right-3 md:right-4 w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-4 xs:p-5 md:p-6">
              {/* Header */}
              <div className="flex items-center gap-1.5 xs:gap-2 mb-2 xs:mb-2.5 md:mb-3">
                <div className="w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 md:w-5 md:h-5 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                  </svg>
                </div>
                <h3 className="text-base xs:text-lg md:text-xl font-bold text-gray-900">SIMUG Tips</h3>
              </div>
              <p className="text-xs xs:text-sm text-gray-400 mb-3 xs:mb-3.5 md:mb-4">Ringkasan seluruh progres user</p>

              {/* Divider Line */}
              <div className="border-t border-gray-200 mb-3 xs:mb-3.5 md:mb-4"></div>

              {/* Tips Content */}
              <p className="text-xs xs:text-sm md:text-base text-gray-800 leading-relaxed">
                <span className="font-semibold">Tinggal tingkatkan satu kebiasaan kecil:</span> Lanjutkan progres course. Mentor siap menemani dan leaderboard siap menunggu namamu naik!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && selectedUser && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-3 xs:px-4"
          onClick={onCloseProfile}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="bg-white rounded-2xl xs:rounded-3xl shadow-2xl w-full max-w-[300px] xs:max-w-[360px] sm:max-w-[500px] md:max-w-[700px] max-h-[90vh] overflow-y-auto relative animate-fadeIn p-3 xs:p-4 md:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* User Header */}
            <div className="flex flex-col xs:flex-row items-start gap-2 xs:gap-3 md:gap-4 mb-2 xs:mb-2.5 md:mb-3">
              <div className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 rounded-full bg-[#FF8C42] p-0.5 xs:p-1 shadow-lg shrink-0">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base xs:text-lg md:text-xl font-bold text-gray-900 mb-0.5 xs:mb-1 truncate">{selectedUser.name}</h2>
                <p className="text-gray-400 text-xs xs:text-sm truncate">{selectedUser.username}</p>
              </div>
              
              {/* Level & Progress - Top Right */}
              <div className="w-full xs:w-auto text-left xs:text-right">
                <div className="flex flex-wrap xs:flex-nowrap items-center justify-start xs:justify-end gap-1 xs:gap-2 mb-1.5 xs:mb-2">
                  <span className="text-[#4177FF] font-bold text-xs xs:text-sm md:text-base whitespace-nowrap">Lv. {selectedUser.level}</span>
                  <span className="text-gray-400 hidden xs:inline">•</span>
                  <span className="text-[#4177FF] font-semibold text-xs xs:text-sm md:text-base whitespace-nowrap">{selectedUser.xp.toLocaleString()} XP</span>
                  <span className="text-[#4177FF] font-bold text-sm xs:text-base md:text-lg ml-auto xs:ml-2">{selectedUser.progress}%</span>
                </div>
                <div className="w-full xs:w-48 sm:w-56 md:w-64 h-1.5 xs:h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4177FF] rounded-full"
                    style={{ width: `${selectedUser.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-2 xs:mb-2.5 md:mb-3"></div>

            {/* Contribution Section */}
            <div className="mb-3 xs:mb-3.5 md:mb-4">
              <div className="flex items-center justify-between gap-1.5 xs:gap-2 mb-2 xs:mb-2.5 md:mb-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs xs:text-sm sm:text-base md:text-xl font-bold text-[#4177FF] truncate">Kontribusi Keseluruhan</h3>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-gray-400">Ringkasan seluruh progres user</p>
                </div>
                <div className="bg-[#B2C8FF]/80 rounded-md xs:rounded-lg md:rounded-xl p-0.5 flex gap-0.5 flex-shrink-0">
                  <button
                    onClick={() => setProfileTab('bulanan')}
                    className={`px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1 sm:py-1.5 md:py-2 rounded-sm xs:rounded-md md:rounded-lg font-semibold transition-all text-[9px] xs:text-[10px] sm:text-xs md:text-sm whitespace-nowrap ${
                      profileTab === 'bulanan'
                        ? 'bg-[#4177FF] text-white'
                        : 'bg-transparent text-white/80 hover:text-white'
                    }`}
                  >
                    Bulanan
                  </button>
                  <button
                    onClick={() => setProfileTab('mingguan')}
                    className={`px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1 sm:py-1.5 md:py-2 rounded-sm xs:rounded-md md:rounded-lg font-semibold transition-all text-[9px] xs:text-[10px] sm:text-xs md:text-sm whitespace-nowrap ${
                      profileTab === 'mingguan'
                        ? 'bg-[#4177FF] text-white'
                        : 'bg-transparent text-white/80 hover:text-white'
                    }`}
                  >
                    Mingguan
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-2 xs:gap-2.5 md:gap-3 mt-3 xs:mt-3.5 md:mt-4">
                <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-xl xs:rounded-2xl p-2 xs:p-2.5 md:p-3 text-white">
                  <div className="text-xl xs:text-2xl md:text-3xl font-bold mb-0.5">22</div>
                  <div className="text-[10px] xs:text-xs md:text-sm font-semibold mb-0.5">Hari</div>
                  <div className="text-[8px] xs:text-[10px] md:text-xs opacity-90">Streak Aktif User</div>
                </div>
                <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-xl xs:rounded-2xl p-2 xs:p-2.5 md:p-3 text-white">
                  <div className="text-xl xs:text-2xl md:text-3xl font-bold mb-0.5">14</div>
                  <div className="text-[10px] xs:text-xs md:text-sm font-semibold mb-0.5">Fase</div>
                  <div className="text-[8px] xs:text-[10px] md:text-xs opacity-90">Total diselesaikan</div>
                </div>
                <div className="bg-gradient-to-br from-[#6B9FFF] to-[#8BB5FF] rounded-xl xs:rounded-2xl p-2 xs:p-2.5 md:p-3 text-white">
                  <div className="text-xl xs:text-2xl md:text-3xl font-bold mb-0.5">20</div>
                  <div className="text-[10px] xs:text-xs md:text-sm font-semibold mb-0.5">Jawaban</div>
                  <div className="text-[8px] xs:text-[10px] md:text-xs opacity-90">Pertanyaan Forum</div>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-[#CACACA] mb-2 xs:mb-2.5 md:mb-3"></div>

            {/* Back Button */}
            <div className="flex justify-end">
              <button
                onClick={onCloseProfile}
                className="bg-[#E5ECFF] text-[#4177FF] px-3 xs:px-4 sm:px-5 md:px-6 py-1 xs:py-1.5 sm:py-2 rounded-lg xs:rounded-xl md:rounded-4xl font-bold hover:bg-[#D0DFFF] transition-colors flex items-center gap-1 xs:gap-1.5 md:gap-2 text-[10px] xs:text-xs sm:text-sm md:text-base"
              >
                <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
