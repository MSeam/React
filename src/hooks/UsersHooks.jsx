import React, { useContext } from 'react';
import { UsersContext } from '../contextApi/UsersContext';

export const UserHooks = () => {
  return useContext(UsersContext);
};

