import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're using 'react-dom/client' for React 18
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Only one Router wrapping the entire app */}
      <App />
    </Router>
  </React.StrictMode>
);
