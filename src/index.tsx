import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { todoList } from './store';

const root = createRoot(document.getElementById('root')!);
root.render(<App todoList={todoList} />);
