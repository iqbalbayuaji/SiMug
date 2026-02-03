export default function MemberSidebar({ members }) {
    const getAvatarColor = (name) => {
        const colors = [
            'bg-blue-500',
            'bg-yellow-500',
            'bg-purple-500',
            'bg-green-500',
            'bg-red-500',
            'bg-pink-500',
            'bg-indigo-500',
            'bg-teal-500',
            'bg-gray-500'
        ]
        const index = name.charCodeAt(0) % colors.length
        return colors[index]
    }

    const renderMemberList = (memberList, title) => (
        <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">
                {title}
            </h3>
            <div className="space-y-2">
                {memberList.map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full ${getAvatarColor(member.name)} flex-shrink-0`}></div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {member.name}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                                {member.username}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <div className="w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto">
            {renderMemberList(members.founders, 'Founder')}
            {renderMemberList(members.admins, 'Admin')}
            {renderMemberList(members.members, 'Member')}
        </div>
    )
}
