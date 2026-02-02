import profileBanner from '../../assets/images/profilebanner.png'
import kingIcon from '../../assets/icon/king.svg'

export default function PodiumSection({ topThreeUsers, onUserSelect }) {
  return (
    <div className="relative mb-16">
      {/* Decorative Blurred Dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="w-[500px] h-[500px] bg-[#4177FF] rounded-full opacity-3 blur-[100px]"></div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-center">
        {/* Rank 2 - Left */}
        <div className="order-2 md:order-1 transform md:translate-y-16 flex justify-center relative animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          {/* Large Number 2 Background */}
          <div className="absolute -top-30 left-4 text-[120px] font-black bg-gradient-to-b from-[#699FFF] to-[#FFFFFF] bg-clip-text text-transparent select-none pointer-events-none z-0 animate-rank-number-2">
            2
          </div>
          <div className="w-[270px] h-[255px] bg-white rounded-[24px] shadow-xl border border-[#CACACA] overflow-visible hover:shadow-2xl transition-all p-2 relative z-10 animate-podium-2">
            {/* Avatar at top left - positioned outside card */}
            <div className="absolute top-[52px] left-4 z-20">
              <div className="w-20 h-20 rounded-full p-1">
                <img
                  src={topThreeUsers[0].avatar}
                  alt={topThreeUsers[0].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Blue Header Background - Inside card with rounded corners */}
            <div className="h-20 rounded-[16px] relative mb-2 overflow-hidden">
              <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
            </div>

            {/* Level & Progress - Below blue header */}
            <div className="mb-3 ml-24">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-[#4177FF]">LV. {topThreeUsers[0].level}</span>
                <span className="text-sm font-bold text-[#4177FF]">{topThreeUsers[0].progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4177FF] rounded-full"
                  style={{ width: `${topThreeUsers[0].progress}%` }}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-base font-bold text-gray-900 truncate">{topThreeUsers[0].name}</h3>
              </div>
              <p className="text-xs text-gray-400 truncate">{topThreeUsers[0].username}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-3"></div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => onUserSelect(topThreeUsers[0])}
                className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
                Kontribusi
              </button>
              <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1 cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Kunjungi
              </button>
            </div>
          </div>
        </div>

        {/* Rank 1 - Center (Highest) */}
        <div className="order-1 md:order-2 flex justify-center relative -mt-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          {/* Large Number 1 Background */}
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 text-[100px] font-black bg-gradient-to-b from-[#699FFF] to-[#FFFFF] bg-clip-text text-transparent select-none pointer-events-none z-10 animate-rank-number-1">
            1
          </div>
          <div className="w-[270px] h-[255px] bg-white rounded-[24px] shadow-2xl border border-[#CACACA] overflow-visible hover:scale-115 transition-all p-2 relative z-20 animate-podium-1">
            {/* Avatar at top left - positioned outside card */}
            <div className="absolute top-[52px] left-4 z-20">
              <div className="w-20 h-20 rounded-full p-1">
                <img
                  src={topThreeUsers[1].avatar}
                  alt={topThreeUsers[1].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Blue Header Background - Inside card with rounded corners */}
            <div className="h-20 rounded-[16px] relative mb-2 overflow-hidden">
              <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
            </div>

            {/* Level & Progress - Below blue header */}
            <div className="mb-3 ml-24">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-[#4177FF]">LV. {topThreeUsers[1].level}</span>
                <span className="text-sm font-bold text-[#4177FF]">{topThreeUsers[1].progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4177FF] rounded-full"
                  style={{ width: `${topThreeUsers[1].progress}%` }}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-base font-bold text-gray-900 truncate">{topThreeUsers[1].name}</h3>
                <img src={kingIcon} alt="King" className="w-6 h-6 shrink-0" />
              </div>
              <p className="text-xs text-gray-400 truncate">{topThreeUsers[1].username}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-3"></div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => onUserSelect(topThreeUsers[1])}
                className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
                Kontribusi
              </button>
              <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1 cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Kunjungi
              </button>
            </div>
          </div>
        </div>

        {/* Rank 3 - Right */}
        <div className="order-3 transform md:translate-y-16 flex justify-center relative animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          {/* Large Number 3 Background */}
          <div className="absolute -top-2 -right-8 text-[120px] font-black bg-gradient-to-b from-[#699FFF] to-[#FFFFFF] bg-clip-text text-transparent select-none pointer-events-none z-0 animate-rank-number-3">
            3
          </div>
          <div className="w-[270px] h-[255px] bg-white rounded-[24px] shadow-xl border border-[#CACACA] overflow-visible hover:shadow-2xl transition-all p-2 relative z-10 animate-podium-3">
            {/* Avatar at top left - positioned outside card */}
            <div className="absolute top-[52px] left-4 z-20">
              <div className="w-20 h-20 rounded-full p-1">
                <img
                  src={topThreeUsers[2].avatar}
                  alt={topThreeUsers[2].name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Blue Header Background - Inside card with rounded corners */}
            <div className="h-20 rounded-[16px] relative mb-2 overflow-hidden">
              <img src={profileBanner} alt="Profile Banner" className="w-full h-full object-cover" />
            </div>
               
            {/* Level & Progress - Below blue header */}
            <div className="mb-3 ml-24">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-[#4177FF]">LV. {topThreeUsers[2].level}</span>
                <span className="text-sm font-bold text-[#4177FF]">{topThreeUsers[2].progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4177FF] rounded-full"
                  style={{ width: `${topThreeUsers[2].progress}%` }}
                />
              </div>
            </div>

            {/* User Info */}
            <div className="mb-3">
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-base font-bold text-gray-900 truncate">{topThreeUsers[2].name}</h3>
              </div>
              <p className="text-xs text-gray-400 truncate">{topThreeUsers[2].username}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-3"></div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => onUserSelect(topThreeUsers[2])}
                className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
                Kontribusi
              </button>
              <button className="flex-1 py-2 px-2 bg-[#E5ECFF] text-[#4177FF] rounded-xl text-xs font-bold hover:bg-[#D0DFFF] transition-colors flex items-center justify-center gap-1 cursor-pointer">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Kunjungi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
