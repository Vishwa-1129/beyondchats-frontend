import React, { useState } from 'react';
import { FaComments, FaUsers, FaCog } from 'react-icons/fa';

const chats = [
  { id: 1, name: 'Jane Doe', lastMsg: 'Thanks for your help!', time: '10:45 AM' },
  { id: 2, name: 'John Smith', lastMsg: 'Is there a discount?', time: '9:30 AM' },
  { id: 3, name: 'Ava Patel', lastMsg: 'The product is not working.', time: 'Yesterday' },
];

const Sidebar = ({ setSelectedChat }) => {
  const [search, setSearch] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-20 md:w-64 bg-blue-900 text-white h-screen flex flex-col">
      <div className="p-4 border-b border-blue-800">
        <h2 className="hidden md:block text-xl font-bold">BeyondChats</h2>
      </div>
      <nav className="flex flex-col gap-6 p-4">
        <a href="#" className="flex items-center gap-3 hover:text-blue-300">
          <FaComments />
          <span className="hidden md:block">Chats</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-blue-300">
          <FaUsers />
          <span className="hidden md:block">Users</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-blue-300 mt-auto">
          <FaCog />
          <span className="hidden md:block">Settings</span>
        </a>
      </nav>
      <div className="p-4 overflow-y-auto border-t border-blue-800 flex-1">
        <input
          type="text"
          className="w-full p-2 rounded text-black text-sm mb-4"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="space-y-3">
          {filteredChats.map(chat => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="bg-blue-800 p-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-blue-200 truncate">{chat.lastMsg}</p>
              <p className="text-xs text-blue-300">{chat.time}</p>
            </div>
          ))}
          {filteredChats.length === 0 && (
            <p className="text-blue-300 text-sm">No chats found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
