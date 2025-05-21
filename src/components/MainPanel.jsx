import React from 'react';
import ChatWindow from './ChatWindow';
import CustomerInfo from './CustomerInfo';

const MainPanel = ({ selectedChat }) => {
  return (
    <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 flex flex-col md:flex-row gap-4">
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">
          {selectedChat ? `Chat with ${selectedChat.name}` : 'Select a chat'}
        </h1>
        <ChatWindow user={selectedChat} />
      </div>
      <CustomerInfo user={selectedChat} />
    </div>
  );
};

export default MainPanel;
