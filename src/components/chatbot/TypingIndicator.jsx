import mascot6 from '../../assets/maskot/mascot6.png';

export default function TypingIndicator() {
    return (
        <div className="flex justify-start mb-4 animate-fadeIn">
            <div className="flex items-end max-w-[80%] sm:max-w-[70%]">
                {/* Bot Avatar */}
                <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white border-2 border-purple-100 shadow-md overflow-hidden">
                        <img 
                            src={mascot6} 
                            alt="SiMug AI" 
                            className="w-full h-full object-contain p-0.5" 
                        />
                    </div>
                </div>

                {/* Typing Bubble */}
                <div className="px-4 py-3 bg-white rounded-2xl rounded-bl-sm shadow-md border border-gray-200">
                    <div className="flex space-x-1.5">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
