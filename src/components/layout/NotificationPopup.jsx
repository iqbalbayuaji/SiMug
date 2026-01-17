import logo from "../../assets/images/logo.png"

export default function NotificationPopup({ isOpen, onClose }) {
  if (!isOpen) return null

  const notifications = [
    {
      id: 1,
      title: "SiMug Official",
      message: "Segera gabung course supaya diskon tid...",
      time: "16:10",
      isRead: false
    },
    {
      id: 2,
      title: "SiMug Official",
      message: "Makasih banyak udah mau gabung! Yuk...",
      time: "16:05",
      isRead: false
    }
  ]

  const handleMarkAllRead = () => {
    // Logic to mark all as read
    console.log("Mark all as read")
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="absolute right-0 top-full mt-2 w-[400px] h-[350px] bg-white rounded-[10px] shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h3 className="text-xl font-bold text-gray-900">Notifikasi</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#4177FF] opacity-35"></div>

        {/* Sub Header */}
        <div className="flex items-center justify-between px-6 py-3">
          <p className="text-sm text-gray-600">
            Kamu punya <span className="text-[#4177FF] font-semibold">2 notifikasi</span>
          </p>
          <button 
            onClick={handleMarkAllRead}
            className="flex items-center gap-1 text-[#4177FF] text-sm font-medium hover:text-[#3461D9] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
            Tandai baca
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto px-6 py-2">
          <div className="space-y-3">
            {notifications.map((notif) => (
              <div 
                key={notif.id}
                className="bg-[#F5F7FF] rounded-xl p-3 hover:bg-[#EEF2FF] transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  {/* Logo */}
                  <div className="w-12 h-12 rounded-full bg-[#4177FF] flex items-center justify-center flex-shrink-0">
                    <img src={logo} alt="SiMug" className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-sm text-gray-900">{notif.title}</h4>
                      <span className="text-xs text-gray-400 flex-shrink-0">{notif.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{notif.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100">
          <button className="text-sm text-[#4177FF] font-semibold hover:text-[#3461D9] transition-colors ml-auto block">
            Lihat daftar notifikasi
          </button>
        </div>
      </div>
    </>
  )
}
