// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import './index.css'; // Ensure Tailwind CSS is imported
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
createRoot(document.getElementById("root")).render(

  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </StrictMode>
);