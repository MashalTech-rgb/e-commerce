import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductListing';
import BreadcrumbItems from '../components/Breadscrumb';

const Listing = () => {
  // State for filters
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    priceRange: { min: 0, max: 1000 },
    condition: null,
    rating: null,
    manufacturers: []
  });

  // Function to update filters
  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <BreadcrumbItems/>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-gray-50">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 pr-6 mb-6 md:mb-0">
            <Sidebar filters={filters} updateFilters={updateFilters} />
          </div>

          {/* Product List */}
          <div className="w-full md:w-3/4">
            <ProductList filters={filters} />
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Listing;