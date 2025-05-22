import React, { useState, useEffect } from 'react';

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const getSmartReply = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")) {
      return "Hello! 👋 How can I assist you today?";
    }
    if (lower.includes("price") || lower.includes("cost")) {
      return "Sure! The pricing starts at $99/month.";
    }
    if (lower.includes("issue") || lower.includes("problem")) {
      return "I’m sorry to hear that. Could you explain the issue?";
    }
    if (lower.includes("bye") || lower.includes("thanks")) {
      return "You're welcome! Have a great day 😊";

    }

    const randomReplies = [
      "Hmm... let me look into that 🤔",
      "Could you please clarify?",
      "Interesting! I'll check and get back to you.",
      "That's a great question!",
      "Absolutely! Give me a moment.",
    ];

    return randomReplies[Math.floor(Math.random() * randomReplies.length)];
  };

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

    setMessages((prev) => [...prev, newMsg]);
    const replyText = getSmartReply(input);
    setInput('');

    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        sender: 'user',
        text: replyText,
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  if (!user)
    return (
      <div className="bg-white dark:bg-gray-700 h-full flex items-center justify-center rounded-lg">
        No chat selected
      </div>
    );

  return (
    <div className="flex flex-col h-full border rounded-lg bg-white dark:bg-gray-700 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-4 py-2 rounded-lg transition-all duration-300 ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white self-start'
                : 'bg-gray-300 text-black dark:bg-gray-600 dark:text-white self-end'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="border-t p-3 flex gap-2 bg-gray-100 dark:bg-gray-800">
        <input
          type="text"
          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none dark:bg-gray-700 dark:text-white"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
