import React from 'react';
import ReactDOM from 'react-dom/client';
import Reset from 'styled-modern-css-reset';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
