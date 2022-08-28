import React from 'react';
import ReactDOM from 'react-dom/client';
import Reset from 'styled-modern-css-reset';
import App from './App';
import { BlockStyles } from './styles/abstracts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <BlockStyles />
    <App />
  </React.StrictMode>
);
