import React from 'react';
import { UserHooks } from '../hooks/UsersHooks';
import User from './User';

const Users = () => {
  const { users } = UserHooks();

  return (
    <div className="grid grid-cols-4 gap-3 py-4">
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
