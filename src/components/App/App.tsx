import './App.css';
import React from 'react';
import { User } from './App.types';
import UserList from '../User/UserList';

type Props = {
  user: User;
};

export function App({ user }: Props) {
  return (
    <div>
      <h1>{user.name}</h1>
      <UserList/>
    </div>
  );
}
