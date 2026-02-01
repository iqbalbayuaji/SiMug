import { useState } from 'react'

export default function ProfileTukarCoinPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Dummy data untuk merchandise rewards
  const rewards = [
    {
      id: 1,
      name: 'Merchandise SiMug',
      coin: 750,
      image: 'https://via.placeholder.com/200x150/6B95FF/ffffff?text=Merch',
      description: 'Kaos official SiMug size L',
      stock: 15,
      expired: '31 Des 2026'
    },
    {
      id: 2,
      name: 'Tumbler SiMug',
      coin: 600,
      image: 'https://via.placeholder.com/200x150/6B95FF/ffffff?text=Tumbler',
      description: 'Tumbler stainless steel 500ml',
      stock: 20,
      expired: '31 Des 2026'
    },
    {
      id: 3,
      name: 'Topi SiMug',
      coin: 500,
      image: 'https://via.placeholder.com/200x150/6B95FF/ffffff?text=Topi',
      description: 'Topi baseball official SiMug',
      stock: 30,
      expired: '31 Des 2026'
    },
    {
      id: 4,
      name: 'Tas Gym SiMug',
      coin: 1200,
      image: 'https://via.placeholder.com/200x150/6B95FF/ffffff?text=Tas',
      description: 'Tas gym multifungsi ukuran besar',
      stock: 10,
      expired: '31 Des 2026'
    },
    {
      id: 5,
      name: 'Handuk Olahraga SiMug',
      coin: 400,
      image: 'https://via.placeholder.com/200x150/6B95FF/ffffff?text=Handuk',
      description: 'Handuk microfiber ukuran 40x80cm',
      stock: 25,
      expired: '31 Des 2026'
    },
    {
      id: 6,
      name: 'Botol Minum SiMug',
      coin: 350,
      image: 'https://via.placeholder.com/200x150/6B95FF/ffffff?text=Botol',
      description: 'Botol minum sport 750ml BPA free',
      stock: 40,
      expired: '31 Des 2026'
    }
  ]

  const filteredRewards = rewards.filter(reward => 
    reward.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleRedeem = (reward) => {
    alert(`Menukar ${reward.coin} MugCoin untuk ${reward.name}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tukar MugCoin</h2>
        <p className="text-gray-600">Tukarkan MugCoin kamu dengan berbagai reward menarik</p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari merchandise..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4177FF] focus:border-transparent"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRewards.map(reward => (
          <div key={reward.id} className="bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow flex flex-col p-1.5">
            {/* Image */}
            <div className="relative h-40 bg-gradient-to-br from-[#4177FF] to-[#5B8FFF] rounded-xl overflow-hidden flex-shrink-0 mb-4">
              <img 
                src={reward.image} 
                alt={reward.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                <span className="text-sm font-bold text-[#4177FF]">{reward.coin} Coin</span>
              </div>
            </div>

            {/* Content - Flex grow to push button down */}
            <div className="flex flex-col flex-1 p-2">
              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-2">{reward.name}</h3>
              
              {/* Description - Fixed height with line clamp */}
              <p className="text-sm text-gray-600 mb-4 h-10 line-clamp-2">{reward.description}</p>

              {/* Info */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Stok: {reward.stock}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {reward.expired}
                </span>
              </div>

              {/* Spacer to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button - Always at bottom */}
              <button
                onClick={() => handleRedeem(reward)}
                className="w-full bg-[#4177FF] text-white font-semibold py-3 rounded-xl hover:bg-[#3461D9] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Tukar Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRewards.length === 0 && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Merchandise tidak ditemukan</h3>
          <p className="text-gray-600">Coba ubah kata kunci pencarian</p>
        </div>
      )}
    </div>
  )
}
