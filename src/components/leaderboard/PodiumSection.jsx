import profileBanner from '../../assets/images/profilebanner.png'
import kingIcon from '../../assets/icon/king.svg'

export default function PodiumSection({ topThreeUsers, onUserSelect }) {
  return (
    <div className="relative mb-8 sm:mb-12 md:mb-16">
      {/* Decorative Blurred Dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#4177FF] rounded-full opacity-3 blur-[100px]"></div>
      </div>

      <div className="relative grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 max-w-5xl mx-auto items-center px-2 sm:px-4">
        {/* Rank 2 - Left */}
        <div className="transform md:translate-y-16 flex justify-center relative animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          {/* Large Number 2 Background */}
          <div className="absolute -top-16 xs:-top-20 sm:-top-24 md:-top-30 left-1 xs:left-2 sm:left-4 text-[60px] xs:text-[80px] sm:text-[100px] md:text-[120px] font-black bg-gradient-to-b from-[#699FFF] to-[#FFFFFF] bg-clip-text text-transparent select-none pointer-events-none z-0 animate-rank-number-2">
            2
          </div>
          <div className="w-full max-w-[95px] xs:max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[270px] h-auto aspect-[270/255] bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] shadow-xl border border-[#CACACA] overflow-visible hover:shadow-2xl transition-all p-1 sm:p-1.5 md:p-1.5 lg:p-2 relative z-10 animate-podium-2">
            {/* Avatar at top left - positioned outside card */}
            <div className="absolute top-[18px] xs:top-[24px] sm:top-[30px] md:top-[38px] lg:top-[52px] left-1 xs:left-2 sm:left-2.5 md:left-3 lg:left-4 z-20">
              <div className="w-7 h-7 xs:w-9 xs:h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full p-0.5 sm:p-0.5 md:p-0.5 lg:p-1">
                <img
                  src={topThreeUsers[0].avatar}
                  alt={topThreeUsers[0].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Blue Header Background - Inside card with rounded corners */}
            <div className="h-7 xs:h-9 sm:h-12 md:h-16 lg:h-20 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[16px] relative mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 overflow-hidden">
              <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
            </div>

            {/* Level & Progress - Below blue header */}
            <div className="mb-1 xs:mb-1.5 sm:mb-2 md:mb-2 lg:mb-3 ml-8 xs:ml-10 sm:ml-14 md:ml-18 lg:ml-24">
              <div className="flex items-center justify-between mb-0.5 sm:mb-0.5 md:mb-1">
                <span className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-sm font-semibold text-[#4177FF]">LV. {topThreeUsers[0].level}</span>
                <span className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-sm font-bold text-[#4177FF]">{topThreeUsers[0].progress}%</span>
              </div>
              <div className="w-full h-0.5 sm:h-0.5 md:h-1 lg:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4177FF] rounded-full"
                  style={{ width: `${topThreeUsers[0].progress}%` }}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="mb-1 xs:mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-3">
              <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5 mb-0.5">
                <h3 className="text-[7px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base font-bold text-gray-900 truncate">{topThreeUsers[0].name}</h3>
              </div>
              <p className="text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs text-gray-400 truncate">{topThreeUsers[0].username}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-1 xs:mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-3"></div>

            {/* Action Buttons */}
            <div className="flex gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2">
              <button 
                onClick={() => onUserSelect(topThreeUsers[0])}
                className="flex-1 py-0.5 xs:py-1 sm:py-1.5 md:py-1.5 lg:py-2 px-0.5 xs:px-1 sm:px-1.5 md:px-1.5 lg:px-2 bg-[#E5ECFF] text-[#4177FF] rounded-md xs:rounded-lg sm:rounded-xl text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-0.5 sm:gap-1 cursor-pointer"
              >
                <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 hidden xs:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
                <span className="hidden xs:inline">Kontribusi</span>
                <span className="xs:hidden">K</span>
              </button>
              <button className="flex-1 py-0.5 xs:py-1 sm:py-1.5 md:py-2 px-0.5 xs:px-1 sm:px-1.5 md:px-2 bg-[#E5ECFF] text-[#4177FF] rounded-md xs:rounded-lg sm:rounded-xl text-[5px] xs:text-[6px] sm:text-[8px] md:text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-0.5 sm:gap-1 cursor-pointer">
                <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 hidden xs:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden xs:inline">Kunjungi</span>
                <span className="xs:hidden">V</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rank 1 - Center (Highest) */}
        <div className="flex justify-center relative -mt-4 xs:-mt-6 sm:-mt-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          {/* Large Number 1 Background */}
          <div className="absolute -top-14 xs:-top-18 sm:-top-22 md:-top-28 left-1/2 -translate-x-1/2 text-[50px] xs:text-[65px] sm:text-[85px] md:text-[100px] font-black bg-gradient-to-b from-[#699FFF] to-[#FFFFF] bg-clip-text text-transparent select-none pointer-events-none z-10 animate-rank-number-1">
            1
          </div>
          <div className="w-full max-w-[95px] xs:max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[270px] h-auto aspect-[270/255] bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] shadow-2xl border border-[#CACACA] overflow-visible hover:scale-115 transition-all p-1 sm:p-1.5 md:p-1.5 lg:p-2 relative z-20 animate-podium-1">
            {/* Avatar at top left - positioned outside card */}
            <div className="absolute top-[18px] xs:top-[24px] sm:top-[30px] md:top-[38px] lg:top-[52px] left-1 xs:left-2 sm:left-2.5 md:left-3 lg:left-4 z-20">
              <div className="w-7 h-7 xs:w-9 xs:h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full p-0.5 sm:p-0.5 md:p-0.5 lg:p-1">
                <img
                  src={topThreeUsers[1].avatar}
                  alt={topThreeUsers[1].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Blue Header Background - Inside card with rounded corners */}
            <div className="h-7 xs:h-9 sm:h-12 md:h-16 lg:h-20 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[16px] relative mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 overflow-hidden">
              <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
            </div>

            {/* Level & Progress - Below blue header */}
            <div className="mb-1 xs:mb-1.5 sm:mb-2 md:mb-2 lg:mb-3 ml-8 xs:ml-10 sm:ml-14 md:ml-18 lg:ml-24">
              <div className="flex items-center justify-between mb-0.5 sm:mb-0.5 md:mb-1">
                <span className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-sm font-semibold text-[#4177FF]">LV. {topThreeUsers[1].level}</span>
                <span className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-sm font-bold text-[#4177FF]">{topThreeUsers[1].progress}%</span>
              </div>
              <div className="w-full h-0.5 sm:h-0.5 md:h-1 lg:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4177FF] rounded-full"
                  style={{ width: `${topThreeUsers[1].progress}%` }}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="mb-1 xs:mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-3">
              <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5 mb-0.5">
                <h3 className="text-[7px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base font-bold text-gray-900 truncate">{topThreeUsers[1].name}</h3>
                <img src={kingIcon} alt="King" className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 shrink-0" />
              </div>
              <p className="text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs text-gray-400 truncate">{topThreeUsers[1].username}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-1 xs:mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-3"></div>

            {/* Action Buttons */}
            <div className="flex gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2">
              <button 
                onClick={() => onUserSelect(topThreeUsers[1])}
                className="flex-1 py-0.5 xs:py-1 sm:py-1.5 md:py-1.5 lg:py-2 px-0.5 xs:px-1 sm:px-1.5 md:px-1.5 lg:px-2 bg-[#E5ECFF] text-[#4177FF] rounded-md xs:rounded-lg sm:rounded-xl text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-0.5 sm:gap-1 cursor-pointer"
              >
                <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 hidden xs:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
                <span className="hidden xs:inline">Kontribusi</span>
                <span className="xs:hidden">K</span>
              </button>
              <button className="flex-1 py-0.5 xs:py-1 sm:py-1.5 md:py-1.5 lg:py-2 px-0.5 xs:px-1 sm:px-1.5 md:px-1.5 lg:px-2 bg-[#E5ECFF] text-[#4177FF] rounded-md xs:rounded-lg sm:rounded-xl text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-0.5 sm:gap-1 cursor-pointer">
                <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 hidden xs:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden xs:inline">Kunjungi</span>
                <span className="xs:hidden">V</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rank 3 - Right */}
        <div className="transform md:translate-y-16 flex justify-center relative animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          {/* Large Number 3 Background */}
          <div className="absolute -top-1 xs:-top-1.5 sm:-top-2 md:-top-2 -right-6 xs:-right-6 sm:-right-7 md:-right-8 text-[60px] xs:text-[80px] sm:text-[100px] md:text-[120px] font-black bg-gradient-to-b from-[#699FFF] to-[#FFFFFF] bg-clip-text text-transparent select-none pointer-events-none z-0 animate-rank-number-3">
            3
          </div>
          <div className="w-full max-w-[95px] xs:max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[270px] h-auto aspect-[270/255] bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] shadow-xl border border-[#CACACA] overflow-visible hover:shadow-2xl transition-all p-1 sm:p-1.5 md:p-1.5 lg:p-2 relative z-10 animate-podium-3">
            {/* Avatar at top left - positioned outside card */}
            <div className="absolute top-[18px] xs:top-[24px] sm:top-[30px] md:top-[38px] lg:top-[52px] left-1 xs:left-2 sm:left-2.5 md:left-3 lg:left-4 z-20">
              <div className="w-7 h-7 xs:w-9 xs:h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full p-0.5 sm:p-0.5 md:p-0.5 lg:p-1">
                <img
                  src={topThreeUsers[2].avatar}
                  alt={topThreeUsers[2].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Blue Header Background - Inside card with rounded corners */}
            <div className="h-7 xs:h-9 sm:h-12 md:h-16 lg:h-20 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[16px] relative mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 overflow-hidden">
              <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
            </div>
               
            {/* Level & Progress - Below blue header */}
            <div className="mb-1 xs:mb-1.5 sm:mb-2 md:mb-2 lg:mb-3 ml-8 xs:ml-10 sm:ml-14 md:ml-18 lg:ml-24">
              <div className="flex items-center justify-between mb-0.5 sm:mb-0.5 md:mb-1">
                <span className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-sm font-semibold text-[#4177FF]">LV. {topThreeUsers[2].level}</span>
                <span className="text-[6px] xs:text-[7px] sm:text-[9px] md:text-[11px] lg:text-sm font-bold text-[#4177FF]">{topThreeUsers[2].progress}%</span>
              </div>
              <div className="w-full h-0.5 sm:h-0.5 md:h-1 lg:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4177FF] rounded-full"
                  style={{ width: `${topThreeUsers[2].progress}%` }}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="mb-1 xs:mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-3">
              <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5 mb-0.5">
                <h3 className="text-[7px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base font-bold text-gray-900 truncate">{topThreeUsers[2].name}</h3>
              </div>
              <p className="text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs text-gray-400 truncate">{topThreeUsers[2].username}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-1 xs:mb-1.5 sm:mb-1.5 md:mb-2 lg:mb-3"></div>

            {/* Action Buttons */}
            <div className="flex gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2">
              <button 
                onClick={() => onUserSelect(topThreeUsers[2])}
                className="flex-1 py-0.5 xs:py-1 sm:py-1.5 md:py-1.5 lg:py-2 px-0.5 xs:px-1 sm:px-1.5 md:px-1.5 lg:px-2 bg-[#E5ECFF] text-[#4177FF] rounded-md xs:rounded-lg sm:rounded-xl text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-0.5 sm:gap-1 cursor-pointer"
              >
                <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 hidden xs:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
                <span className="hidden xs:inline">Kontribusi</span>
                <span className="xs:hidden">K</span>
              </button>
              <button className="flex-1 py-0.5 xs:py-1 sm:py-1.5 md:py-1.5 lg:py-2 px-0.5 xs:px-1 sm:px-1.5 md:px-1.5 lg:px-2 bg-[#E5ECFF] text-[#4177FF] rounded-md xs:rounded-lg sm:rounded-xl text-[5px] xs:text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-0.5 sm:gap-1 cursor-pointer">
                <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 hidden xs:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden xs:inline">Kunjungi</span>
                <span className="xs:hidden">V</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
