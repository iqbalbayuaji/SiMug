export default function DecorativeBlobs() {
    return (
        <>
            <style>{`
                @keyframes glowPulse {
                    0%, 100% {
                        opacity: 0.3;
                        filter: blur(24px);
                    }
                    50% {
                        opacity: 1;
                        filter: blur(12px);
                    }
                }
                
                /* Mobile: Reduced opacity */
                @keyframes glowPulseMobile {
                    0%, 100% {
                        opacity: 0.15;
                        filter: blur(24px);
                    }
                    50% {
                        opacity: 0.4;
                        filter: blur(12px);
                    }
                }
                
                /* Animasi wander untuk blob 1 - bergerak diagonal dan memutar */
                @keyframes wander1 {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    20% {
                        transform: translate(30px, -20px) scale(1.1);
                    }
                    40% {
                        transform: translate(-15px, 25px) scale(0.95);
                    }
                    60% {
                        transform: translate(40px, 15px) scale(1.05);
                    }
                    80% {
                        transform: translate(-25px, -30px) scale(1.1);
                    }
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                }
                
                /* Animasi wander untuk blob 2 - pola berbeda */
                @keyframes wander2 {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(-40px, 20px) scale(1.15);
                    }
                    50% {
                        transform: translate(20px, -35px) scale(0.9);
                    }
                    75% {
                        transform: translate(-20px, -15px) scale(1.1);
                    }
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                }
                
                /* Animasi wander untuk blob 3 - pola lebih lebar */
                @keyframes wander3 {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    15% {
                        transform: translate(50px, 10px) scale(1.05);
                    }
                    35% {
                        transform: translate(-30px, -40px) scale(1.15);
                    }
                    55% {
                        transform: translate(25px, 30px) scale(0.95);
                    }
                    75% {
                        transform: translate(-45px, 5px) scale(1.1);
                    }
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                }
                
                /* Base blob styling with initial blur and opacity */
                .blob-base {
                    opacity: 0.3;
                    filter: blur(24px);
                    will-change: opacity, filter, transform;
                    backface-visibility: hidden;
                }
                
                .blob-1 {
                    animation: glowPulse 3s ease-in-out infinite, wander1 12s ease-in-out infinite;
                    animation-fill-mode: backwards;
                }
                .blob-2 {
                    animation: glowPulse 3s ease-in-out infinite 1s, wander2 15s ease-in-out infinite;
                    animation-fill-mode: backwards;
                }
                .blob-3 {
                    animation: glowPulse 3s ease-in-out infinite 2s, wander3 18s ease-in-out infinite;
                    animation-fill-mode: backwards;
                }
                
                /* Mobile: Use reduced opacity animation */
                @media (max-width: 1023px) {
                    .blob-base {
                        opacity: 0.15;
                        filter: blur(24px);
                    }
                    
                    .blob-1 {
                        animation: glowPulseMobile 3s ease-in-out infinite, wander1 12s ease-in-out infinite;
                        animation-fill-mode: backwards;
                    }
                    .blob-2 {
                        animation: glowPulseMobile 3s ease-in-out infinite 1s, wander2 15s ease-in-out infinite;
                        animation-fill-mode: backwards;
                    }
                    .blob-3 {
                        animation: glowPulseMobile 3s ease-in-out infinite 2s, wander3 18s ease-in-out infinite;
                        animation-fill-mode: backwards;
                    }
                }
            `}</style>
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply blob-base blob-1"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply blob-base blob-2"></div>
            <div className="absolute top-60 left-1/5 w-36 h-36 bg-blue-200 rounded-full mix-blend-multiply blob-base blob-3"></div>
        </>
    );
}
