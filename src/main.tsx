import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = (container as any)._reactRoot ?? ReactDOM.createRoot(container);
(container as any)._reactRoot = root;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
