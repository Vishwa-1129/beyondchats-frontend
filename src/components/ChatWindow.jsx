import React, { useState, useEffect } from 'react';

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (user) {
      setMessages([
        { id: 1, sender: 'user', text: 'Hi, I have a question.' },
        { id: 2, sender: 'admin', text: 'Sure, go ahead!' },
      ]);
    } else {
      setMessages([]);
    }
  }, [user]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      sender: 'admin',
      text: input,
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  if (!user) return <div className="bg-white dark:bg-gray-700 h-full flex items-center justify-center rounded-lg">No chat selected</div>;

  return (
    <div className="flex flex-col h-full border rounded-lg bg-white dark:bg-gray-700 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-4 py-2 rounded-lg text-white ${
              msg.sender === 'user'
                ? 'bg-blue-500 self-start'
                : 'bg-gray-600 self-end'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="border-t p-3 flex gap-2 bg-gray-100 dark:bg-gray-800">
        <input
          type="text"
          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
