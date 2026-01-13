export default function DecorativeBlobs() {
    return (
        <>
            <div className="absolute top-60 left-20 lg:top-25 lg:left-270 w-10 h-10 lg:w-32 lg:h-32 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-30 left-20 lg:top-40 lg:right-10 w-10 h-10 lg:w-27 lg:h-27 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-60 left-90 lg:top-80 lg:left-40 w-10 h-10 lg:w-36 lg:h-36 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </>
    );
}
