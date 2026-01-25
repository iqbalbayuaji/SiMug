import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCog, FaEdit, FaChevronRight, FaPlus } from 'react-icons/fa'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import profileBanner from '../assets/images/profilebanner.png'

// Profile icons
import levelIcon from '../assets/icon/profile/oui_stats.svg'
import descriptionIcon from '../assets/icon/profile/pajamas_text-description.svg'
import chatIcon from '../assets/icon/profile/proicons_chat.svg'
import settingsIcon from '../assets/icon/profile/lets-icons_line-alt.svg'
import updateIcon from '../assets/icon/profile/material-symbols-light_system-update-alt.svg'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  // Mock user data
  const userData = {
    name: 'Rizki Fiko Febriansyah',
    username: '@rizkifiko11',
    email: 'fikouji10@gmail.com',
    phone: '+62 8123 4567 89',
    location: 'Semarang, Jawa Tengah',
    avatar: 'https://ui-avatars.com/api/?name=Rizki+Fiko&background=4177FF&color=fff&size=200',
    level: 11,
    persen: 86,
    xp: 3654,
    totalXp: 5000,
    mugCoin: 2500,
    mugCoinIncrease: '+2%',
    bio: 'Seorang mahasiswa yang memiliki minat tinggi terhadap gaya hidup sehat dan pengembangan diri. Jangan malu untuk follow!',
    favoriteTopics: ['Kebugaran', 'Nutrisi', 'Pola Makan', 'Atletik', 'Healthy Lifestyle'],
    preferences: {
      mainGoal: 'Menaikkan/menurunkan BB',
      secondaryGoal: 'Nutrisi & pola makan',
      learningMethod: 'Campuran'
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'akun-saya', label: 'Akun Saya' },
    { id: 'atur-simug', label: 'Atur SiMug' },
    { id: 'pusat-bantuan', label: 'Pusat Bantuan' },
    { id: 'simug-plus', label: 'SiMug Plus' }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src={profileBanner} 
          alt="Profile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-12">
        {/* Header with Edit Banner Button */}
        <div className="flex items-start justify-between mb-8 pt-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profil Pengguna</h1>
            <p className="text-gray-600">Kustomisasi profil kamu dan atur beberapa hal.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <FaCog className="text-gray-500" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#4177FF] text-[#4177FF] rounded-lg hover:bg-blue-50 transition-colors">
              <FaEdit />
              <span className="text-sm font-semibold">Edit Banner</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Profile Info */}
          <div className="lg:col-span-1">
            {/* Combined Avatar & Personal Information Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              {/* Avatar Upload Section */}
              <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                <div className="relative flex-shrink-0">
                  <img 
                    src={userData.avatar} 
                    alt={userData.name}
                    className="w-24 h-24 rounded-full"
                  />
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#4177FF] rounded-full flex items-center justify-center text-white hover:bg-[#3461D9] transition-colors">
                    <FaEdit className="text-xs" />
                  </button>
                </div>
                <div className="flex-1">
                  <button className="w-fit px-3 py-1.5 border-2 border-gray-300 text-gray-900 text-sm font-regular rounded-xl hover:border-[#4177FF] hover:text-[#4177FF] transition-colors mb-2">
                    Upload foto baru
                  </button>
                  <p className="text-xs text-gray-500">
                    Min. ukuran file 5 MB<br />JPG atau PNG
                  </p>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Informasi Pribadi</h3>
                  <button className="text-[#4177FF] text-sm font-semibold flex items-center gap-1">
                    <FaEdit />
                    Edit
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-[#4177FF]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{userData.name}</p>
                      <p className="text-sm text-gray-500">Nama Lengkap</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-[#4177FF]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{userData.username}</p>
                      <p className="text-sm text-gray-500">Username</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-[#4177FF]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{userData.email}</p>
                      <p className="text-sm text-gray-500">Email</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-[#4177FF]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{userData.phone}</p>
                      <p className="text-sm text-gray-500">No. Telp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-[#4177FF]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{userData.location}</p>
                      <p className="text-sm text-gray-500">Lokasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MugCoin Card */}
            <div className="bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium opacity-90">Total MugCoin</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{userData.mugCoinIncrease}</span>
                  <button className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">{userData.mugCoin.toLocaleString()}</span>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content - Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[670px]">
              {/* Tabs */}
              <div className="border-b border-gray-200 px-6">
                <div className="flex gap-6 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 font-semibold whitespace-nowrap transition-colors relative ${
                        activeTab === tab.id
                          ? 'text-[#4177FF]'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4177FF]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6 lg:pr-8 lg:border-r lg:border-gray-200">
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
                                <div className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#4177FF] transition-colors cursor-pointer">
                                  <span className="font-semibold text-gray-900">{userData.preferences.mainGoal}</span>
                                  <FaChevronRight className="text-gray-400" />
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
                                <div className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#4177FF] transition-colors cursor-pointer">
                                  <span className="font-semibold text-gray-900">{userData.preferences.secondaryGoal}</span>
                                  <FaChevronRight className="text-gray-400" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Metode Belajar */}
                          <div className="relative">
                            <div className="flex items-start gap-4">
                              <div className="w-6 h-6 rounded-full border-4 border-[#4177FF] bg-white flex-shrink-0 z-10"></div>
                              <div className="flex-1">
                                <p className="text-base text-gray-500 mb-2">Metode Belajar</p>
                                <div className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-[#4177FF] transition-colors cursor-pointer">
                                  <span className="font-semibold text-gray-900">{userData.preferences.learningMethod}</span>
                                  <FaChevronRight className="text-gray-400" />
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
                            onClick={() => setShowUpdateModal(true)}
                            className="px-6 py-2 bg-[#4177FF] text-white font-semibold rounded-xl hover:bg-[#3461D9] transition-colors"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab !== 'overview' && (
                  <div className="text-center py-12 text-gray-500">
                    Konten untuk tab {tabs.find(t => t.id === activeTab)?.label} akan segera hadir
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Success Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Profil Berhasil Diupdate!</h3>
            <p className="text-gray-600 mb-6">
              Perubahan profil kamu telah berhasil disimpan.
            </p>
            <button
              onClick={() => setShowUpdateModal(false)}
              className="w-full py-3 bg-[#4177FF] text-white font-semibold rounded-xl hover:bg-[#3461D9] transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
