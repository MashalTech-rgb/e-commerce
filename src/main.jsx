// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import './index.css'; // Ensure Tailwind CSS is imported

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);