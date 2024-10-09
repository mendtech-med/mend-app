'use client';
import React, { useRef } from 'react';
// import Chat, { ChatHandles } from './_components/chatbot';

const HomePage: React.FC = () => {
  // const chatRef = useRef<ChatHandles>(null);

  // const handleUserSend = (messageText: string) => {
  //   // Handle sending the message to Claude AI or your backend
  //   // For demonstration, we'll simulate a bot response after 1 second
  //   setTimeout(() => {
  //     if (chatRef.current) {
  //       chatRef.current.handleReceiveMessage('This is a simulated response from Claude AI.');
  //     }
  //   }, 1000);
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {/* <Chat ref={chatRef} onSend={handleUserSend} /> */}
      <p>
        chatbot
      </p>
    </div>
  );
};

export default HomePage;
