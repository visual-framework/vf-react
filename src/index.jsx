import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementsByClassName('vf-body')[0]);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);