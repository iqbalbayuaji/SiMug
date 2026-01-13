import React from 'react';

export default function ActionCards() {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tambah atau Jawab Diskusi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tambah Pertanyaan */}
                <div className="rounded-xl p-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <h3 className="font-bold text-xl w-2/3 leading-tight">Tambah Pertanyaan</h3>
                        <div className="self-end mt-4">
                            <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-colors">
                                Buat
                            </button>
                        </div>
                    </div>
                </div>

                {/* Jawab Pertanyaan */}
                <div className="rounded-xl p-5 bg-gradient-to-br from-[#4F86F7] to-[#4578E6] text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <h3 className="font-bold text-xl w-2/3 leading-tight">Jawab Pertanyaan</h3>
                        <div className="self-end mt-4">
                            <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-colors">
                                Jawab
                            </button>
                        </div>
                    </div>
                </div>

                {/* Daftar Tanya Jawab */}
                <div className="rounded-xl p-5 bg-gradient-to-br from-[#7AA0FA] to-[#688DEB] text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="absolute right-4 top-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <h3 className="font-bold text-xl w-2/3 leading-tight">Daftar Tanya dan Jawab</h3>
                        <div className="self-end mt-4">
                            <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-colors">
                                Lihat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
