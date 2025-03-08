import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import routing tools from react-router-dom
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes go here */}
      </Routes>
    </div>
  );
};

export default App;
