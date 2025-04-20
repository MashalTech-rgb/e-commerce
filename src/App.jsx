// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Layout from './pages/Layout';
import Listing from './pages/listing'; 
import MyCart from './pages/MyCart';
import ProductDetail from './pages/ProductDetail';
const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="/listing" element={<Listing />} /> 
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/MyCart" element={<MyCart />} />
      </Routes>
    </>
  );
};

export default App;