import './App.css';
import React from 'react';
import { User } from './App.types';

type Props = {
  user: User;
};

export function App({ user }: Props) {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
