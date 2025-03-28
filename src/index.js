import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure you're importing the App component where Counter is used
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);

// For performance logging
reportWebVitals();
