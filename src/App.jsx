// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Layout from './pages/Layout';
import Listing from './pages/listing'; 
import ProductDetail from './pages/ProductDetail';
const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="/listing" element={<Listing />} /> 
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;