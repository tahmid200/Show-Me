import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './MainPage';
import App from './App';
import LoginPage from './LoginPage';
import MainPage from './MainPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
