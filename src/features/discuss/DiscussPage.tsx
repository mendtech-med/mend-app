import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { baseURL } from '../../services/api/axios';

class Message {
  text: string;
  type: 'sent' | 'received';
  avatar: string;
  sourceLinks: string[];

  constructor(
    text: string = '',
    type: 'sent' | 'received' = 'sent',
    avatar: string = '',
    sourceLinks: string[] = []
  ) {
    this.text = text;
    this.type = type;
    this.avatar = avatar;
    this.sourceLinks = sourceLinks;
  }
}

const DiscussPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatMessagesRef = useRef<HTMLDivElement | null>(null);

  // Filters State
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  // const [filterPriority, setFilterPriority] = useState<string>('all');

  const AI_AVATAR = 'https://placehold.co/32x32';
  const USER_AVATAR = 'https://placehold.co/32x32';

  const tags = ['Urgent', 'Info', 'Reminder', 'Personal', 'Work'];
  // const priorities = ['all', 'high', 'medium', 'low'];

  // Existing methods remain the same...
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = new Message(inputValue, 'sent', USER_AVATAR);
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const filters = `Filters: ${startDate} to ${endDate}, Tags: ${selectedTags}`;
    const prompt = filters ? `${inputValue}\n${filters}` : inputValue;

    try {
      const response = await fetch(baseURL + "/chatbot", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt,
          newsId : ""
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.news) {
        const botMessage = new Message(
          data.news,
          'received',
          AI_AVATAR,
          data.sources ? data.sources : []
        );
        setMessages((prev) => [...prev, botMessage]);
      } else {
        alert(data.error || 'Error communicating with the API.');
      }
    } catch (error) {
      console.error('Error while sending message:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const parseMessage = (text: string): string => {
    const html: string = marked(text, { breaks: true }) as string;
    return DOMPurify.sanitize(html) as string;
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const FilterPopover = () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button 
          className="filter-popover-trigger hover:bg-gray-100 p-2 rounded-full" 
          aria-label="Open Filters"
        >
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content 
          className="bg-white rounded-lg shadow-lg p-4 w-[300px] z-50"
          sideOffset={5}
        >
          {/* Date Range Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Date Range</h3>
            {/* <div className="flex gap-2">
            </div> */}
            <input
              type="date"
              value={startDate}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
              className="border rounded p-1 flex-1"
            /><br/>
            <input
              type="date"
              value={endDate}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
              className="border rounded p-1 flex-1"
            />
          </div>

          {/* Tag Filters */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`
                    px-2 py-1 rounded-full text-xs cursor-pointer
                    ${selectedTags.includes(tag) 
                      ? 'selected' 
                      : 'not-selected'}
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Priority Filter */}
          {/* <div>
            <h3 className="text-sm font-semibold mb-2">Priority</h3>
            <div className="flex gap-2">
              {priorities.map((priority) => (
                <button
                  key={priority}
                  onClick={() => setFilterPriority(priority)}
                  className={`
                    px-3 py-1 rounded-full text-xs
                    ${filterPriority === priority 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-700'}
                  `}
                >
                  {priority}
                </button>
              ))}
            </div>
          </div> */}

          <Popover.Close 
            className="absolute top-2 right-2 hover:bg-gray-100 rounded-full p-1"
            aria-label="Close"
          >
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="header-content">
          <img src={AI_AVATAR} alt="AI Avatar" className="ai-avatar" />
          <h1>Graf AI</h1>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Active Filters Display */}
          <div className="flex gap-2">
            {selectedTags.map(tag => (
              <span 
                key={tag} 
                className="not-selected px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
            {startDate && endDate && (
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                {startDate} - {endDate}
              </span>
            )}
          </div>

          {/* Filter Popover */}
          <FilterPopover />
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="chat-messages" ref={chatMessagesRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <img
              src={message.avatar}
              alt={`${message.type === 'sent' ? 'User' : 'AI'} Avatar`}
              className="message-avatar"
            />
            <div
              className="message-content"
              dangerouslySetInnerHTML={{ __html: parseMessage(message.text) }}
            />
          </div>
        ))}
        {isTyping && (
          <div className="message received">
            <img src={AI_AVATAR} alt="AI Avatar" className="message-avatar" />
            <div className="message-content">Thinking...</div>
          </div>
        )}
      </div>

      <div className="chat-input bg-theme-main">
        <input
          type="text"
          placeholder="Enter message..."
          value={inputValue}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-theme-main"
          onClick={sendMessage}
          disabled={isTyping}
        >
          {isTyping ? (
            <span className="button-loader"></span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default DiscussPage;