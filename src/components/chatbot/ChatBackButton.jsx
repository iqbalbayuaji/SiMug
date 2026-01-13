export default function ChatBackButton({ onReset }) {
    return (
        <div className="mb-6 animate-slideUp">
            <button
                onClick={onReset}
                className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
                <svg
                    className="w-5 h-5 text-blue-600 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Kembali ke Topik</span>
            </button>
        </div>
    );
}
