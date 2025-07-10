import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App';

// Create a container div instead of using document.body directly
const container = document.getElementsByClassName('vf-body')[0];
const root = createRoot(container);
// const root = ReactDOM.createRoot(document.getElementsByClassName('vf-body')[0]);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);