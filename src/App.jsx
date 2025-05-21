import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Sidebar setSelectedChat={setSelectedChat} />
        <div className="absolute top-2 right-2 z-50">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-black"
          >
            {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <MainPanel selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default App;
