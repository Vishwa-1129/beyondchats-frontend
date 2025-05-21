import React from 'react';

const CustomerInfo = ({ user }) => {
  if (!user) return <div className="w-full md:w-80 p-4 bg-white dark:bg-gray-700 rounded-lg text-center">No user selected</div>;

  return (
    <div className="w-full md:w-80 bg-white dark:bg-gray-700 border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-3">Customer Info</h2>
      <div className="space-y-2">
        <div>
          <p className="text-sm text-gray-400">Name</p>
          <p className="font-medium text-white">{user.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Email</p>
          <p className="font-medium text-white">{user.name.toLowerCase().replace(' ', '.')}@example.com</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Status</p>
          <p className={`font-medium ${user.status === 'Online' ? 'text-green-400' : 'text-red-400'}`}>
            {user.status || 'Online'}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Tags</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
