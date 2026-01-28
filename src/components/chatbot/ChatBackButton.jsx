export default function ChatBackButton({ onReset }) {
    return (
        <div className="mb-4 animate-slideUp">
            <button
                onClick={onReset}
                className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg group flex items-center justify-center"
            >
                <svg
                    className="w-5 h-5 text-blue-600 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
        </div>
    );
}
