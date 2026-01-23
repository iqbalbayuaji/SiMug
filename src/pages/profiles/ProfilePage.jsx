import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCog, FaEdit } from 'react-icons/fa'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import profileBanner from '../../assets/images/profilebanner.png'
import imgBanner from '../../assets/images/img-banner.png'
import ProfileOverviewPage from './ProfileOverviewPage'
import ProfileAkunSayaPage from './ProfileAkunSayaPage'
import ProfilePusatBantuanPage from './ProfilePusatBantuanPage'
import ProfileSimugPlusPage from './ProfileSimugPlusPage'

export default function ProfilePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showBannerModal, setShowBannerModal] = useState(false)
  const [selectedBanner, setSelectedBanner] = useState(null)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showBannerModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showBannerModal])

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
    { id: 'overview', label: 'Overview', path: '/profile' },
    { id: 'akun-saya', label: 'Akun Saya', path: '/profile/akun-saya' },
    { id: 'atur-simug', label: 'Atur SiMug', path: '/profile/atur-simug' },
    { id: 'pusat-bantuan', label: 'Pusat Bantuan', path: '/profile/pusat-bantuan' },
    { id: 'simug-plus', label: 'SiMug Plus', path: '/profile/simug-plus' }
  ]

  const isActiveTab = (path) => {
    if (path === '/profile') {
      return location.pathname === '/profile'
    }
    return location.pathname === path
  }

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
            <button className="flex items-center gap-2 px-4 py-2 border border-[#4177FF] text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <FaCog className="text-blue-500" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#4177FF] text-[#4177FF] rounded-lg hover:bg-blue-50 transition-colors" onClick={() => setShowBannerModal(true)}>
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              {/* Tabs */}
              <div className="border-b border-gray-200 px-6">
                <div className="flex gap-6 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => navigate(tab.path)}
                      className={`py-4 font-semibold whitespace-nowrap transition-colors relative ${
                        isActiveTab(tab.path)
                          ? 'text-[#4177FF]'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab.label}
                      {isActiveTab(tab.path) && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4177FF]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <Routes>
                  <Route 
                    index 
                    element={
                      <ProfileOverviewPage 
                        userData={userData} 
                        onUpdateClick={() => setShowUpdateModal(true)}
                      />
                    } 
                  />
                  <Route path="akun-saya" element={<ProfileAkunSayaPage />} />
                  <Route 
                    path="atur-simug" 
                    element={
                      <div className="text-center py-12 text-gray-500">
                        Konten untuk tab Atur SiMug akan segera hadir
                      </div>
                    } 
                  />
                  <Route path="pusat-bantuan" element={<ProfilePusatBantuanPage />} />
                  <Route path="simug-plus" element={<ProfileSimugPlusPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Success Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative text-center animate-modal-scale-in">
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

      {/* Edit Banner Modal */}
      {showBannerModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-modal-scale-in">
            {/* Banner Preview */}
            <div className="relative h-32 overflow-hidden">
              <img 
                src={selectedBanner || imgBanner} 
                alt="Banner Preview" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Edit Banner</h2>
              <p className="text-gray-600 mb-5">Perbarui banner profile kamu disini.</p>

              {/* Upload Section */}
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Upload banner baru"
                  className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4177FF] transition-colors text-sm cursor-pointer"
                  readOnly
                />
                <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-[#4177FF] font-semibold rounded-xl hover:bg-blue-100 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Pilih
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-5 flex items-center gap-1">
                <span className="text-[#4177FF]">★</span>
                Pilih file PNG atau JPG max. 5 MB.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-200">
                <button
                  onClick={() => {
                    setShowBannerModal(false)
                    setSelectedBanner(null)
                  }}
                  className="px-5 py-2.5 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Batalkan
                </button>
                <button
                  onClick={() => {
                    setShowBannerModal(false)
                    setShowUpdateModal(true)
                  }}
                  className="px-5 py-2.5 bg-[#4177FF] text-white font-semibold rounded-xl hover:bg-[#3461D9] transition-colors"
                >
                  Simpan Banner
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
