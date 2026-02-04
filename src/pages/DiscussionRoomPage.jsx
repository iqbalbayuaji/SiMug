import { useState } from 'react'
import { FiMenu, FiSearch, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { MdQuestionAnswer } from 'react-icons/md'
import Navbar from '../components/layout/Navbar'
import ChatMessage from '../components/forum/ChatMessage'
import MessageInput from '../components/forum/MessageInput'
import MemberSidebar from '../components/forum/MemberSidebar'

export default function DiscussionRoomPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [memberSidebarOpen, setMemberSidebarOpen] = useState(false)

    // Sample data
    const messages = [
        {
            id: 1,
            username: 'Aditya Junior',
            time: '10:42',
            content: 'Gue barusan nyoba workout 15 menit dari SiMug, gila langsung keringetan parah! Ada tips biar nggak gampang pegal besoknya?'
        },
        {
            id: 2,
            username: 'Moh. Iqbal Bayu',
            time: '10:43',
            content: 'Wajib stretching bro! Sama jangan lupa minum air putih yang banyak. Kalau masih pegal, kompres air hangat aja.'
        },
        {
            id: 3,
            username: '[Anda]',
            time: '10:45',
            content: 'Setuju sama Iqbal. Gue biasanya minum susu cokelat sehabis latihan berat, katanya bagus buat recovery otot.'
        },
        {
            id: 4,
            username: 'Sarah Wijaya',
            time: '10:47',
            content: 'Guys, ada yang ikutan 14 Days Healthy Challenge nggak? Gue baru hari ke-3 nih, semangat banget!'
        },
        {
            id: 5,
            username: 'Moh. Nizam Surya',
            time: '10:50',
            content: 'Mantap Sarah! Konsistensi itu kunci. Kalau ada kendala di menu makanannya, tanya aja di sini ya.'
        },
        {
            id: 6,
            username: '[Anda]',
            time: '10:52',
            content: 'Gue ikutan juga! Tapi tadi pagi agak males bangun. Untung liat notifikasi SiMug langsung semangat lagi.'
        },
        {
            id: 7,
            username: 'Aditya Junior',
            time: '10:55',
            content: 'Oke Iqbal, ntar gue coba kompres air hangat. Thx sarannya!'
        }
    ]

    const members = {
        founders: [
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' }
        ],
        admins: [
            { name: 'Moh. Iqbal Bayu', username: '@iqbal_bay' },
            { name: 'Rizki Fiko', username: '@rfiko_dev' },
            { name: 'Sarah Wijaya', username: '@sarah_w' }
        ],
        members: [
            { name: 'Aditya Junior', username: '@adit_jr' },
            { name: 'Budi Santoso', username: '@budi_s' },
            { name: 'Citra Kirana', username: '@citra_ok' },
            { name: 'Dedi Kurniawan', username: '@dedi_k' },
            { name: 'Eka Saputra', username: '@eka_s' },
            { name: 'Fitri Yani', username: '@fitriy' }
        ]
    }

    return (
        <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
            <Navbar />

            <div className="flex-1 flex min-h-0 relative">
                {/* Backdrop Overlay for Mobile */}
                {(sidebarOpen || memberSidebarOpen) && (
                    <div
                        className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
                        onClick={() => {
                            setSidebarOpen(false)
                            setMemberSidebarOpen(false)
                        }}
                    />
                )}

                {/* Left Sidebar */}
                <div className={`
                    ${sidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:translate-x-0'} 
                    fixed md:relative inset-y-0 left-0 z-[70] md:z-30
                    bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden
                `}>
                    <div className="p-4">
                        {/* Ruang Diskusi */}
                        <div className="mb-2">
                            <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2.5 bg-blue-50 text-blue-600 rounded-lg font-medium">
                                <HiChatBubbleLeftRight className="w-5 h-5" />
                                <span>Ruang Diskusi</span>
                            </button>
                        </div>

                        {/* Threads */}
                        <div className="mb-2">
                            <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                <BiMessageSquareDetail className="w-5 h-5" />
                                <span>Threads</span>
                            </button>
                        </div>

                        {/* Pertanyaan */}
                        <div className="mb-2">
                            <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                <MdQuestionAnswer className="w-5 h-5" />
                                <span>Pertanyaan</span>
                            </button>
                        </div>

                        {/* Bottom Actions */}
                        <div className="absolute bottom-4 left-4 right-4 space-y-1">
                            <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <FiSettings className="w-5 h-5" />
                                <span className="text-sm">Pengaturan</span>
                            </button>
                            <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <FiHelpCircle className="w-5 h-5" />
                                <span className="text-sm">Bantuan</span>
                            </button>
                            <button className="cursor-pointer w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <FiLogOut className="w-5 h-5" />
                                <span className="text-sm">Keluar Forum</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Room Header */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                    className="cursor-pointer text-gray-600 hover:text-gray-900 md:block" // Always visible to toggle
                                >
                                    <FiMenu className="w-5 h-5" />
                                </button>
                                <div>
                                    <h1 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
                                        Komunitas Olahraga SiMug
                                    </h1>
                                    <p className="text-xs md:text-sm text-gray-500">
                                        10,521 member • <span className="text-blue-500">24 member aktif</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <FiSearch className="w-5 h-5 text-gray-600" />
                                </button>
                                <button
                                    onClick={() => setMemberSidebarOpen(!memberSidebarOpen)}
                                    className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
                                >
                                    <HiChatBubbleLeftRight className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors hidden md:block">
                                    <FiSettings className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto bg-white">
                        {messages.map((message) => (
                            <ChatMessage key={message.id} message={message} />
                        ))}
                    </div>

                    {/* Message Input */}
                    <MessageInput />
                </div>

                {/* Right Sidebar - Members */}
                <MemberSidebar
                    members={members}
                    isOpen={memberSidebarOpen}
                    onClose={() => setMemberSidebarOpen(false)}
                />
            </div>
        </div>
    )
}
