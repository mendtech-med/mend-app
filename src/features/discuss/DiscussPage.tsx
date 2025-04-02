import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { DropdownMenu } from '@radix-ui/themes';
import { INews } from '../../services/api/types';
import { newsHandlers } from '../../services/handlers/news';
import { axiosInstanceChatbot } from '../../services/api/axios';
import { useAuth } from '../../context/authContext';
import { GrafSVG } from '../../assets/images/svgs';

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
  const [selectedNews, setSelectedNews] = useState<INews | null>(null);
  const [news, setNews] = useState<INews[]>([]);
  const [isLoadingNews, setIsLoadingNews] = useState<boolean>(true);
  // const [filterPriority, setFilterPriority] = useState<string>('all');
  const { user } = useAuth();

  const AI_AVATAR = '../../assets/images/svgs/graf.png';
  const USER_AVATAR = 'https://placehold.co/32x32';

  const tags = ['Urgent', 'Info', 'Reminder', 'Personal', 'Work'];
  // const priorities = ['all', 'high', 'medium', 'low'];

  // Existing methods remain the same...
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const getNews = async () => {
      setIsLoadingNews(true); // Start loader
      try {
        const fetchedNews = await newsHandlers.getAllNews();
        setNews(fetchedNews.data as INews[]);
        console.log(fetchedNews)
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setTimeout(() => {
          setIsLoadingNews(false); // Stop loader
        }, 1000);
      }
    };
    if (news.length === 0) {
      getNews();
    }
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = new Message(inputValue, 'sent', USER_AVATAR);
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const filters = `Filters: ${startDate} to ${endDate}, Tags: ${selectedTags}`;
    const prompt = filters ? `${inputValue}\n${filters}` : inputValue;

    try {
      
      // const data = await newsHandlers.chatbot(prompt);
      const payload = JSON.stringify({
        query: prompt,
        user_id: user?.email ?? "gust user",
      });
      const response = await axiosInstanceChatbot.post("/chatbot", payload);
      const data = response.data;
      if (data.answer) {
        const botMessage = new Message(
          data.answer,
          'received',
          AI_AVATAR,
          []
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStartDate(e.target.value)
              }
              className="border rounded p-1 flex-1"
            />
            <br />
            <input
              type="date"
              value={endDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEndDate(e.target.value)
              }
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
                    ${selectedTags.includes(tag) ? 'selected' : 'not-selected'}
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
          <div className='bg-theme-main/5 p-2 rounded-full font-bold text-theme-main h-8 w-12'>
            <img src={GrafSVG} alt="Logo" />
          </div>
          <h1>Graf AI</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Active Filters Display */}
          <div className="flex gap-2">
            {selectedTags.map((tag) => (
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

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className='btn bg-theme-main/5 p-2 rounded-xl flex items-center content-between gap-2 truncate text-theme-main'>
                <div data-tooltip={selectedNews?.newsTitle || 'Select chat context'} className='tooltip truncate w-40'>
                  {selectedNews?.newsTitle || 'Select chat context'}
                </div>
                <DropdownMenu.TriggerIcon />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content color="gray" variant="soft">
              {isLoadingNews ? (
                <div className="loader">Loading...</div> // Loader for news
              ) : (
                news.map((newsItem) => (
                  <DropdownMenu.Item
                    key={newsItem._id}
                    className='hover:bg-theme-main/5 hover:text-theme-main '
                    onClick={() => setSelectedNews(newsItem)}
                  >
                    {newsItem.newsTitle}
                  </DropdownMenu.Item>
                ))
              )}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="chat-messages" ref={chatMessagesRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className='bg-theme-main/5 p-2 rounded-full'>
              {message.type === 'sent' ? 
                (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2711 12.0426C13.9255 12.0426 15.3579 11.4492 16.5286 10.2784C17.699 9.10794 18.2925 7.67572 18.2925 6.02113C18.2925 4.36703 17.6992 2.93466 16.5284 1.76372C15.3577 0.593358 13.9253 0 12.2711 0C10.6164 0 9.18417 0.593358 8.01366 1.76391C6.84315 2.93447 6.24955 4.36689 6.24955 6.02113C6.24955 7.67572 6.84311 9.10814 8.01371 10.2787C9.18461 11.449 10.617 12.0426 12.271 12.0426H12.2711ZM9.04974 2.7998C9.94788 1.90161 11.0015 1.46504 12.2711 1.46504C13.5404 1.46504 14.5942 1.90161 15.4926 2.7998C16.3907 3.69814 16.8275 4.75194 16.8275 6.02108C16.8275 7.29061 16.3907 8.34427 15.4926 9.24261C14.5942 10.141 13.5404 10.5776 12.2711 10.5776C11.0019 10.5776 9.94832 10.1408 9.04974 9.24261C8.15135 8.34447 7.71459 7.29066 7.71459 6.02113C7.71459 4.75194 8.15135 3.69814 9.04974 2.7998ZM22.807 19.2237C22.7733 18.7366 22.705 18.2052 22.6045 17.6441C22.503 17.0787 22.3724 16.5443 22.2159 16.0558C22.0542 15.5509 21.8347 15.0524 21.5629 14.5746C21.2811 14.0787 20.9501 13.6468 20.5785 13.2915C20.19 12.9198 19.7143 12.6209 19.1642 12.4029C18.616 12.1861 18.0085 12.0762 17.3587 12.0762C17.1035 12.0762 16.8567 12.1809 16.38 12.4912C16.0412 12.7119 15.7014 12.9309 15.3606 13.1485C15.0331 13.3572 14.5894 13.5527 14.0414 13.7297C13.5068 13.9027 12.964 13.9904 12.428 13.9904C11.8925 13.9904 11.3496 13.9027 10.8146 13.7297C10.2672 13.5528 9.82337 13.3573 9.49642 13.1487C9.11703 12.9062 8.77377 12.685 8.47601 12.491C7.99974 12.1807 7.75292 12.076 7.49774 12.076C6.8477 12.076 6.24042 12.186 5.69242 12.4031C5.14272 12.6207 4.66684 12.9196 4.27793 13.2917C3.90639 13.6472 3.57529 14.0788 3.29375 14.5746C3.02236 15.0524 2.80264 15.5508 2.64087 16.056C2.48462 16.5445 2.354 17.0787 2.25254 17.6441C2.15181 18.2045 2.08374 18.736 2.04995 19.2243C2.01675 19.7017 2 20.1986 2 20.7006C2 22.0056 2.41484 23.0621 3.23291 23.8412C4.04087 24.6102 5.10976 25 6.40995 25H18.4476C19.7474 25 20.8163 24.6101 21.6245 23.8413C22.4427 23.0626 22.8576 22.0058 22.8576 20.7004C22.8574 20.1967 22.8404 19.6998 22.807 19.2237ZM20.6144 22.7798C20.0805 23.2879 19.3717 23.5349 18.4474 23.5349H6.41C5.48554 23.5349 4.77675 23.2879 4.24306 22.78C3.71953 22.2816 3.46508 21.6013 3.46508 20.7006C3.46508 20.2321 3.48051 19.7696 3.51147 19.3256C3.54155 18.89 3.60317 18.4114 3.69458 17.9029C3.78476 17.4007 3.89956 16.9294 4.03613 16.5028C4.16718 16.0936 4.34589 15.6885 4.56752 15.2983C4.77905 14.9263 5.02241 14.6072 5.29096 14.3501C5.54218 14.1096 5.85883 13.9128 6.23188 13.7652C6.5769 13.6285 6.96469 13.5538 7.38563 13.5425C7.4369 13.5698 7.52831 13.6219 7.67631 13.7184C7.97748 13.9147 8.3246 14.1386 8.70838 14.3837C9.141 14.6595 9.69828 14.9086 10.3641 15.1235C11.0449 15.3436 11.7391 15.4554 12.4283 15.4554C13.1174 15.4554 13.8118 15.3436 14.4922 15.1237C15.1586 14.9084 15.7157 14.6595 16.1489 14.3833C16.5417 14.1323 16.8791 13.9149 17.1802 13.7184C17.3282 13.622 17.4196 13.5698 17.4709 13.5426C17.8921 13.5538 18.2798 13.6285 18.625 13.7651C18.9979 13.9128 19.3146 14.1098 19.5657 14.3501C19.8343 14.607 20.0777 14.9261 20.2892 15.2985C20.511 15.6885 20.69 16.0938 20.8208 16.5026C20.9575 16.9298 21.0725 17.4009 21.1626 17.9027C21.2537 18.4122 21.3155 18.8909 21.3457 19.3258V19.3262C21.3768 19.7685 21.3924 20.2308 21.3926 20.7006C21.3924 21.6015 21.138 22.2816 20.6144 22.7798H20.6144Z" fill="currentColor"></path></svg>) : 
                'AI'
              }
            </div>
            
            <div
              className={`message-content ${message.type === 'sent' ? 'bg-theme-main/20 text-black' : ''}`}
              dangerouslySetInnerHTML={{ __html: parseMessage(message.text) }}
            />
          </div>
        ))}
        {isTyping && (
          <div className="message received">
            <div className='bg-theme-main/5 p-2 rounded-full'>
              AI  
            </div>
            <div className="message-content">Thinking...</div>
          </div>
        )}
      </div>

      <div className="chat-input bg-theme-main">
        <input
          type="text"
          placeholder="Enter message..."
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
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