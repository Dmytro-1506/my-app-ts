import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';
import { User } from './components/App/App.types';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

const user: User = {
  id: 1,
  name: 'Jon',
  email: 'mail@example.com',
};

root.render(
  <StrictMode>
    <App user={user} />
  </StrictMode>
);
