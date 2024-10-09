// "use client";
// import React, {
//     useState,
//     forwardRef,
//     useImperativeHandle,
//     useRef,
//     useEffect,
// } from 'react';
// import { FaPaperPlane, FaRobot, FaUserCircle } from 'react-icons/fa';
// import { RiUserSmileLine } from "react-icons/ri";
// import { VscRobot } from "react-icons/vsc";

// // Define TypeScript interfaces
// interface Message {
//     id: number;
//     text: string;
//     sender: 'user' | 'bot';
//     timestamp: Date;
// }

// interface ChatProps {
//     onSend?: (messageText: string) => void;
// }

// export interface ChatHandles {
//     handleReceiveMessage: (messageText: string) => void;
// }

// // Define the primary color (customize as needed)
// const primaryColor = 'text-blue-500';

// const Chat = forwardRef<ChatHandles, ChatProps>((props, ref) => {
//     const [messages, setMessages] = useState<Message[]>([
//         {
//             id: 1,
//             text: 'Hello! I am Claude, your AI assistant. How can I help you today?',
//             sender: 'bot',
//             timestamp: new Date(),
//         },
//     ]);

//     // Expose functions to parent via ref
//     useImperativeHandle(ref, () => ({
//         handleReceiveMessage: (messageText: string) => {
//             const newMessage: Message = {
//                 id: messages.length + 1,
//                 text: messageText,
//                 sender: 'bot',
//                 timestamp: new Date(),
//             };
//             setMessages((prevMessages) => [...prevMessages, newMessage]);
//         },
//     }));

//     // Handler to add user message
//     const handleSendMessage = (messageText: string) => {
//         const newMessage: Message = {
//             id: messages.length + 1,
//             text: messageText,
//             sender: 'user',
//             timestamp: new Date(),
//         };
//         setMessages((prevMessages) => [...prevMessages, newMessage]);

//         // Notify parent about the new message
//         if (props.onSend) {
//             props.onSend(messageText);
//         }
//     };

//     return (
//         <div className="flex flex-col w-full bg-white h-screen overflow-hidden">
//             {/* <ChatHeader /> */}
//             <MessageList messages={messages} />
//             <ChatInput onSend={handleSendMessage} />
//         </div>
//     );
// });

// export default Chat;

// // Subcomponents

// const ChatHeader: React.FC = () => (
//     <div className={`flex items-center justify-between px-4 py-2 bg-primary`}>
//         <div className="flex items-center">
//             <FaRobot className="text-white text-2xl mr-2" />
//             <h2 className="text-white text-lg font-semibold">Claude AI Chatbot</h2>
//         </div>
//         <div>
//             {/* Additional icons or buttons can be added here */}
//         </div>
//     </div>
// );

// interface MessageListProps {
//     messages: Message[];
// }

// const MessageList: React.FC<MessageListProps> = ({ messages }) => {
//     const messageEndRef = useRef<HTMLDivElement>(null);

//     // Scroll to the bottom when messages change
//     useEffect(() => {
//         messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     return (
//         <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
//             {messages.map((msg) => (
//                 <MessageItem key={msg.id} message={msg} />
//             ))}
//             <div ref={messageEndRef} />
//         </div>
//     );
// };

// interface MessageItemProps {
//     message: Message;
// }

// const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
//     const isUser = message.sender === 'user';
//     return (
//         <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
//             {!isUser && <VscRobot size={25} className="text-xl mr-2 w-10 h-10 p-2 bg-primary rounded-full text-white" />}
//             <div
//                 className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${isUser ? 'bg-slate-200 text-black' : 'bg-white text-black'
//                     } `}
//             >
//                 <p className="text-sm">{message.text}</p>
//                 <span className="block text-xs text-right mt-1">
//                     {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </span>
//             </div>
//             {isUser && <RiUserSmileLine size={25} className="text-xl ml-2 w-10 h-10 p-2 bg-primary rounded-full text-white" />}
//         </div>
//     );
// };

// interface ChatInputProps {
//     onSend: (text: string) => void;
// }

// const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
//     const [input, setInput] = useState<string>('');

//     const handleSend = () => {
//         if (input.trim() === '') return;
//         onSend(input.trim());
//         setInput('');
//     };

//     const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             handleSend();
//         }
//     };

//     return (
//         <div className="flex items-center px-4 py-2 bg-white border-t border-slate-50">
//             <input
//                 type="text"
//                 className="flex-1 px-3 py-2 border border-slate-50 rounded-lg outline-none text-sm h-12 "
//                 placeholder="Type your message..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//             />
//             <button
//                 className={`ml-2 p-4 rounded-full bg-slate-100 text-primary`}
//                 onClick={handleSend}
//             >
//                 <FaPaperPlane className="text-primary" />
//             </button>
//         </div>
//     );
// };
