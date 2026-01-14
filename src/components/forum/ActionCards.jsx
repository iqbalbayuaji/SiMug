import React from 'react';

export default function ActionCards() {
    return (
        <section className="mb-5">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tambah atau Jawab Diskusi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tambah Pertanyaan */}
                <div className="h-23 rounded-xl px-5 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="absolute -right-11 -top-14 w-24 h-24 bg-white/20 rounded-full pointer-events-none"></div>
                    <div className="absolute right-63 top-14 w-24 h-24 bg-white/20 rounded-full pointer-events-none"></div>
                    <div className="relative z-10 flex flex-row justify-between h-full">
                        <h3 className="font-bold text-lg leading-tight self-center">Tambah<br />Pertanyaan</h3>
                        <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-colors shrink-0 self-end">
                            Buat
                        </button>
                    </div>
                </div>

                {/* Jawab Pertanyaan */}
                <div className="h-23 rounded-xl px-5 py-3 bg-gradient-to-br from-[#4F86F7] to-[#4578E6] text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="absolute -left-10 bottom-12 w-24 h-24 border-10 border-white/13 rounded-full pointer-events-none flex items-center justify-center">
                        <div className="w-15 h-15 border-10 border-white/20 rounded-full"></div>
                    </div>
                    <div className="absolute left-63 -bottom-12 w-24 h-24 border-10 border-white/13 rounded-full pointer-events-none flex items-center justify-center">
                        <div className="w-15 h-15 border-10 border-white/20 rounded-full"></div>
                    </div>
                    <div className="relative z-10 flex flex-row justify-between h-full">
                        <h3 className="font-bold text-lg leading-tight self-center">Jawab<br />Pertanyaan</h3>
                        <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-colors shrink-0 self-end">
                            Jawab
                        </button>
                    </div>
                </div>

                {/* Daftar Tanya Jawab */}
                <div className="h-23 rounded-xl px-5 py-3 bg-gradient-to-br from-[#7AA0FA] to-[#688DEB] text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="absolute right-63 -top-14 w-24 h-24 bg-white/20 rounded-full pointer-events-none"></div>
                    <div className="absolute -right-11 top-14 w-24 h-24 bg-white/20 rounded-full pointer-events-none"></div>
                    <div className="relative z-10 flex flex-row justify-between h-full">
                        <h3 className="font-bold text-lg leading-tight self-center">Daftar Tanya<br />dan Jawab</h3>
                        <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-colors shrink-0 self-end">
                            Lihat
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
