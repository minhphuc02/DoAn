import React from 'react';
import { createRoot } from 'react-dom/client'; // Sử dụng createRoot từ react-dom/client
import './index.css';
import App from './App';

// Sử dụng createRoot để gắn App vào DOM.
const container = document.getElementById('root');
const root = createRoot(container); // Tạo một root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
