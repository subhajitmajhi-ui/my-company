// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import SingleProduct from './pages/SingleProduct';
import Home from './pages/Home';
import Nopage from './pages/Nopage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Router>
  );
}

export default App;
