export default function ChatAnimations() {
    return (
        <style jsx>{`
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes blob {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                }
                33% {
                    transform: translate(30px, -50px) scale(1.1);
                }
                66% {
                    transform: translate(-20px, 20px) scale(0.9);
                }
            }

            .animate-fadeIn {
                animation: fadeIn 0.6s ease-out forwards;
            }

            .animate-slideUp {
                animation: slideUp 0.6s ease-out forwards;
            }

            .animate-slideDown {
                animation: slideDown 0.6s ease-out forwards;
            }

            .animate-blob {
                animation: blob 7s infinite;
            }

            .animation-delay-200 {
                animation-delay: 200ms;
            }

            .animation-delay-400 {
                animation-delay: 400ms;
            }

            .animation-delay-600 {
                animation-delay: 600ms;
            }

            .animation-delay-1200 {
                animation-delay: 1200ms;
            }

            .animation-delay-1400 {
                animation-delay: 1400ms;
            }

            .animation-delay-2000 {
                animation-delay: 2s;
            }

            .animation-delay-4000 {
                animation-delay: 4s;
            }
        `}</style>
    );
}
