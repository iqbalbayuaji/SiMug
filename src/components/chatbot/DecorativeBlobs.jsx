export default function DecorativeBlobs() {
    return (
        <>
            <style>{`
                @keyframes glowPulse {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                        filter: blur(24px);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.15);
                        filter: blur(12px);
                    }
                }
                .blob-glow {
                    animation: glowPulse 3s ease-in-out infinite;
                }
                .blob-glow-delay-1 {
                    animation: glowPulse 3s ease-in-out infinite;
                    animation-delay: 1s;
                }
                .blob-glow-delay-2 {
                    animation: glowPulse 3s ease-in-out infinite;
                    animation-delay: 2s;
                }
            `}</style>
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply blob-glow"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply blob-glow-delay-1"></div>
            <div className="absolute top-60 left-1/5 w-36 h-36 bg-blue-200 rounded-full mix-blend-multiply blob-glow-delay-2"></div>
        </>
    );
}
