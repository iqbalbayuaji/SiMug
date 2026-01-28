import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mascot6 from '../../assets/maskot/mascot6.png';
import profileImg from '../../assets/images/profile.jpg';

export default function ChatMessage({ message, isUser, timestamp }) {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
            <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start max-w-[90%] sm:max-w-[85%]`}>
                {/* Avatar */}
                <div className={`shrink-0 ${isUser ? 'ml-3' : 'mr-3'} mt-1`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center overflow-hidden ${isUser
                        ? 'border-2 border-blue-500'
                        : 'bg-white border-2 border-purple-100'
                        } shadow-md`}>
                        {isUser ? (
                            <img 
                                src={profileImg} 
                                alt="User" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <img 
                                src={mascot6} 
                                alt="SiMug AI" 
                                className="w-full h-full object-contain p-0.5"
                            />
                        )}
                    </div>
                </div>

                {/* Message Bubble */}
                <div className="flex flex-col min-w-0">
                    <div className={`px-4 py-3 rounded-2xl shadow-md ${isUser
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                        } transform transition-all duration-200 hover:shadow-lg`}>
                        
                        <div className={`text-sm sm:text-base leading-relaxed break-words ${isUser ? 'text-white' : 'text-gray-800'}`}>
                            {isUser ? (
                                <p className="whitespace-pre-wrap">{message}</p>
                            ) : (
                                <ReactMarkdown 
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        // Code blocks styling
                                        code({node, inline, className, children, ...props}) {
                                            return !inline ? (
                                                <div className="bg-gray-800 rounded-lg p-3 my-2 overflow-x-auto text-gray-100 text-xs sm:text-sm font-mono">
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                </div>
                                            ) : (
                                                <code className="px-1.5 py-0.5 bg-gray-100 text-red-500 rounded text-xs font-mono" {...props}>
                                                    {children}
                                                </code>
                                            );
                                        },
                                        // Table styling - improved
                                        table: ({children}) => (
                                            <div className="overflow-x-auto my-3 rounded-lg border border-gray-300">
                                                <table className="min-w-full text-sm">
                                                    {children}
                                                </table>
                                            </div>
                                        ),
                                        thead: ({children}) => <thead className="bg-blue-50 border-b border-gray-300">{children}</thead>,
                                        tbody: ({children}) => <tbody className="divide-y divide-gray-200">{children}</tbody>,
                                        tr: ({children}) => <tr className="hover:bg-gray-50">{children}</tr>,
                                        th: ({children}) => <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">{children}</th>,
                                        td: ({children}) => <td className="px-4 py-3 text-sm text-gray-700">{children}</td>,
                                        // Text styling
                                        p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                                        ul: ({children}) => <ul className="list-disc ml-5 mb-2 space-y-1">{children}</ul>,
                                        ol: ({children}) => <ol className="list-decimal ml-5 mb-2 space-y-1">{children}</ol>,
                                        li: ({children}) => <li className="pl-1">{children}</li>,
                                        a: ({href, children}) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{children}</a>,
                                        blockquote: ({children}) => <blockquote className="border-l-4 border-blue-200 pl-4 py-1 italic text-gray-600 my-2">{children}</blockquote>,
                                        strong: ({children}) => <strong className="font-bold">{children}</strong>,
                                        em: ({children}) => <em className="italic">{children}</em>,
                                        h1: ({children}) => <h1 className="text-xl font-bold mb-2 mt-3">{children}</h1>,
                                        h2: ({children}) => <h2 className="text-lg font-bold mb-2 mt-3">{children}</h2>,
                                        h3: ({children}) => <h3 className="text-base font-bold mb-1 mt-2">{children}</h3>,
                                    }}
                                >
                                    {message}
                                </ReactMarkdown>
                            )}
                        </div>
                    </div>

                    {/* Timestamp */}
                    {timestamp && (
                        <span className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right mr-2' : 'ml-2'}`}>
                            {timestamp}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
