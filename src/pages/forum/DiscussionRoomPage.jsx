import { useState } from 'react'
import { FiMenu, FiSearch, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { MdQuestionAnswer } from 'react-icons/md'
import Navbar from '../../components/layout/Navbar'
import ChatMessage from '../../components/forum/ChatMessage'
import MessageInput from '../../components/forum/MessageInput'
import MemberSidebar from '../../components/forum/MemberSidebar'

export default function DiscussionRoomPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    // Sample data
    const messages = [
        {
            id: 1,
            username: 'Aditya Junior',
            time: '10:42',
            content: 'Gue join forum bahasa biar jago speaking... tapi tiap mau ngomong, otak gue auto loading'
        },
        {
            id: 2,
            username: 'Moh. Iqbal Bayu',
            time: '10:42',
            content: 'Wajar. Otak lo trauma grammar, bukan trauma masa kecil'
        },
        {
            id: 3,
            username: '[Anda]',
            time: '10:42',
            content: 'Wajar. Otak lo trauma grammar, bukan trauma masa kecil'
        },
        {
            id: 4,
            username: 'Aditya Junior',
            time: '10:42',
            content: 'Lah iya juga... gue kebanyakan save konten, praktiknya nol.'
        },
        {
            id: 5,
            username: 'Moh. Iqbal Bayu',
            time: '10:42',
            content: 'Makanya forum ini namanya Ngobrol Santai, bukan Ngumpulin Materi Tanpa Aksi'
        },
        {
            id: 6,
            username: '[Anda]',
            time: '10:42',
            content: 'Di sini salah ngomong nggak di-judge. Paling diketawain dikit. Abis itu lanjut.'
        },
        {
            id: 7,
            username: 'Aditya Junior',
            time: '10:42',
            content: 'Jadi intinya gue harus mulai ngomong walau belepot an?'
        }
    ]

    const members = {
        founders: [
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' }
        ],
        admins: [
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' }
        ],
        members: [
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' },
            { name: 'Moh. Nizam Surya', username: '@mohnizam7' }
        ]
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="flex h-[calc(100vh-73px)]">
                {/* Left Sidebar */}
                <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}>
                    <div className="p-4">
                        {/* Ruang Diskusi */}
                        <div className="mb-6">
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-blue-50 text-blue-600 rounded-lg font-medium">
                                <HiChatBubbleLeftRight className="w-5 h-5" />
                                <span>Ruang Diskusi</span>
                            </button>
                        </div>

                        {/* Threads */}
                        <div className="mb-6">
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                <BiMessageSquareDetail className="w-5 h-5" />
                                <span>Threads</span>
                            </button>
                        </div>

                        {/* Pertanyaan */}
                        <div className="mb-6">
                            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                <MdQuestionAnswer className="w-5 h-5" />
                                <span>Pertanyaan</span>
                            </button>
                        </div>

                        {/* Bottom Actions */}
                        <div className="absolute bottom-4 left-4 right-4 space-y-2">
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                <FiSettings className="w-5 h-5" />
                                <span className="text-sm">Pengaturan</span>
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                <FiHelpCircle className="w-5 h-5" />
                                <span className="text-sm">Bantuan</span>
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
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
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <FiMenu className="w-5 h-5" />
                                </button>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">
                                        Ngobrol Santai Pejuang LN
                                    </h1>
                                    <p className="text-sm text-gray-500">
                                        10,521 member • <span className="text-blue-500">24 member aktif</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <FiSearch className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <FiSettings className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto">
                        {messages.map((message) => (
                            <ChatMessage key={message.id} message={message} />
                        ))}
                    </div>

                    {/* Message Input */}
                    <MessageInput />
                </div>

                {/* Right Sidebar - Members */}
                <MemberSidebar members={members} />
            </div>
        </div>
    )
}
