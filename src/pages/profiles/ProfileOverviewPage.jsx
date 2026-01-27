import { FaChevronRight, FaPlus, FaCog } from 'react-icons/fa'

// Profile icons
import levelIcon from '../../assets/icon/profile/oui_stats.svg'
import descriptionIcon from '../../assets/icon/profile/pajamas_text-description.svg'
import chatIcon from '../../assets/icon/profile/proicons_chat.svg'

export default function ProfileOverviewPage({ userData, onUpdateClick }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Left Column */}
      <div className="space-y-6 lg:pr-8 lg:border-r border-gray-200">
        {/* Level Card */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#B2C8FF] ">
                <img src={levelIcon} alt="Level" className="w-5 h-5" />
              </div>
              Level Saat Ini
            </h3>
            <span className="text-[#4177FF] font-bold text-2xl">{userData.persen}%</span>
          </div>
          <div className="mb-3">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-[#4177FF] h-2 rounded-full transition-all"
                style={{ width: `${(userData.xp / userData.totalXp) * 100}%` }}
              ></div>
            </div>
            <div className="flex items-center gap-2 text-[#4177FF] font-bold">
              <span>LV. {userData.level}</span>
              <span>•</span>
              <span>{userData.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#B2C8FF]">
              <img src={descriptionIcon} alt="Description" className="w-5 h-5 opacity" />
            </div>
            <h3 className="font-bold text-gray-900">Deskripsi Singkat</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{userData.bio}</p>
        </div>

        {/* Favorite Topics */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#B2C8FF] ">
              <img src={chatIcon} alt="Chat" className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900">Topik Favorit</h3>
            <span className="text-sm text-gray-500">Max 6 topik</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {userData.favoriteTopics.map((topic, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-50 text-[#4177FF] rounded-full text-sm font-medium"
              >
                {topic}
              </span>
            ))}
            <button className="px-4 py-2 border-2 border-dashed border-gray-300 text-gray-400 rounded-full text-sm font-medium hover:border-[#4177FF] hover:text-[#4177FF] transition-colors flex items-center gap-1">
              <FaPlus className="text-xs" />
            </button>
          </div>
          <p className="text-xs text-gray-500">
            * Topik favorit membantu hasil pencarian lebih akurat dengan apa yang dibutuhkan.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Preferences */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#B2C8FF] ">
              <img src={levelIcon} alt="Settings" className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900">Preferensi User</h3>
          </div>

          <div className="relative space-y-6 pl-10">
            {/* Vertical Line */} 
            <div className="absolute left-[50px] top-6 bottom-6 w-0.5 bg-[#4177FF]"></div>

            {/* Tujuan Utama */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border-4 border-[#4177FF] bg-white flex-shrink-0 z-10"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">Tujuan Utama</p>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#4177FF] transition-colors cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{userData.preferences.mainGoal}</span>
                    <FaChevronRight className="text-gray-400 text-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* Minat Utama */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border-4 border-[#4177FF] bg-white flex-shrink-0 z-10"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">Minat Utama</p>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#4177FF] transition-colors cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{userData.preferences.secondaryGoal}</span>
                    <FaChevronRight className="text-gray-400 text-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* Metode Belajar */}
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border-4 border-[#4177FF] bg-white flex-shrink-0 z-10"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">Metode Belajar</p>
                  <div className="flex items-center justify-between p-3 lg:p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#4177FF] transition-colors cursor-pointer">
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{userData.preferences.learningMethod}</span>
                    <FaChevronRight className="text-gray-400 text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Update Profile Section */}
        <div>
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#B2C8FF] ">
              <FaCog className="text-[#4177FF]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Update Profil</h3>
              <p className="text-sm text-gray-600">
                Dengan meng-update profil, semua orang dapat melihat perubahan profil kamu.
              </p>
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Reset
            </button>
            <button 
              onClick={onUpdateClick}
              className="px-6 py-2 bg-[#4177FF] text-white font-semibold rounded-xl hover:bg-[#3461D9] transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
