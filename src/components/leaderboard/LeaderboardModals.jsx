import { useState } from 'react'

export default function LeaderboardModals({ showTipsModal, showProfileModal, selectedUser, onCloseTips, onCloseProfile }) {
  const [profileTab, setProfileTab] = useState('bulanan')

  return (
    <>
      {/* SIMUG Tips Modal */}
      {showTipsModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-4"
          onClick={onCloseTips}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-[500px] h-[210px] relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onCloseTips}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#4177FF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">SIMUG Tips</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">Ringkasan seluruh progres user</p>

              {/* Divider Line */}
              <div className="border-t border-gray-200 mb-4"></div>

              {/* Tips Content */}
              <p className="text-base text-gray-800 leading-relaxed">
                <span className="font-semibold">Tinggal tingkatkan satu kebiasaan kecil:</span> Lanjutkan progres course. Mentor siap menemani dan leaderboard siap menunggu namamu naik!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && selectedUser && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-4"
          onClick={onCloseProfile}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-[700px] max-h-[90vh] overflow-y-auto relative animate-fadeIn p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* User Header */}
            <div className="flex items-start gap-4 mb-3">
              <div className="w-14 h-14 rounded-full bg-[#FF8C42] p-1 shadow-lg shrink-0">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{selectedUser.name}</h2>
                <p className="text-gray-400 text-sm">{selectedUser.username}</p>
              </div>
              
              {/* Level & Progress - Top Right */}
              <div className="text-right">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4177FF] font-bold text-base">Lv. {selectedUser.level}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[#4177FF] font-semibold text-base">{selectedUser.xp.toLocaleString()} XP</span>
                  </div>
                  <span className="text-[#4177FF] font-bold text-lg">{selectedUser.progress}%</span>
                </div>
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4177FF] rounded-full"
                    style={{ width: `${selectedUser.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-3"></div>

            {/* Contribution Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-[#4177FF]">Kontribusi Keseluruhan</h3>
                  <p className="text-sm text-gray-400">Ringkasan seluruh progres user</p>
                </div>
                <div className="bg-[#B2C8FF]/80 rounded-xl p-1 flex gap-1">
                  <button
                    onClick={() => setProfileTab('bulanan')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                      profileTab === 'bulanan'
                        ? 'bg-[#4177FF] text-white'
                        : 'bg-transparent text-white/80 hover:text-white'
                    }`}
                  >
                    Bulanan
                  </button>
                  <button
                    onClick={() => setProfileTab('mingguan')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
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
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-2xl p-3 text-white">
                  <div className="text-3xl font-bold mb-0.5">22</div>
                  <div className="text-sm font-semibold mb-0.5">Hari</div>
                  <div className="text-xs opacity-90">Streak Aktif User</div>
                </div>
                <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-2xl p-3 text-white">
                  <div className="text-3xl font-bold mb-0.5">14</div>
                  <div className="text-sm font-semibold mb-0.5">Fase</div>
                  <div className="text-xs opacity-90">Total diselesaikan</div>
                </div>
                <div className="bg-gradient-to-br from-[#6B9FFF] to-[#8BB5FF] rounded-2xl p-3 text-white">
                  <div className="text-3xl font-bold mb-0.5">20</div>
                  <div className="text-sm font-semibold mb-0.5">Jawaban</div>
                  <div className="text-xs opacity-90">Pertanyaan Forum</div>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-[#CACACA] mb-3"></div>

            {/* Back Button */}
            <div className="flex justify-end">
              <button
                onClick={onCloseProfile}
                className="bg-[#E5ECFF] text-[#4177FF] px-6 py-2 rounded-4xl font-bold hover:bg-[#D0DFFF] transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
