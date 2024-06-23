import React from 'react';
import { UserHooks } from '../hooks/UsersHooks';

const User = ({ user }) => {
  const { users, setUsers } = UserHooks();
  const { id, userName, image } = user;

  const handleDelete = id => {
    const filterData = users.filter(user => user.id !== id);
    setUsers(filterData);
  };
  return (
    <div className="max-w-xs bg-transparent shadow-xl mx-4 rounded-xl overflow-hidden py-4">
      <img
        src={image}
        alt="User Avatar"
        className="w-full h-32 object-cover rounded-xl"
      />
      <div className="pl-3 pt-3">
        <div className="text-black-400">{id}</div>
        <div className="text-gray-600 font-semibold text-lg mb-2">
          {userName}
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="mt-2 py-2 px-4 bg-red-600 hover:bg-red-400 rounded-md text-white outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
