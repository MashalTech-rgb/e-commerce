import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaRegHeart, FaBars, FaTh, FaShippingFast } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';
import {originalProducts} from '../../public/assets.js'
const ProductList = ({ filters }) => {
  // State declarations
  const [isVerified, setIsVerified] = useState(true);
  const [sortOption, setSortOption] = useState("Featured");
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(2);
  const [favorites, setFavorites] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);



  const toggleFavorite = (productName) => {
    if (favorites.includes(productName)) {
      setFavorites(favorites.filter(name => name !== productName));
    } else {
      setFavorites([...favorites, productName]);
    }
  };

  // Function to sort products
  const sortProducts = (productsToSort, option) => {
    const productsCopy = [...productsToSort];
    
    switch (option) {
      case "Price: Low to High":
        return productsCopy.sort((a, b) => a.discountedPrice - b.discountedPrice);
      case "Price: High to Low":
        return productsCopy.sort((a, b) => b.discountedPrice - a.discountedPrice);
      case "Best Rated":
        return productsCopy.sort((a, b) => b.rating - a.rating);
      default:
        return productsCopy; // Return original order for "Featured"
    }
  };

  // Effect to filter and sort products when filters or sortOption changes
  useEffect(() => {
    let filteredProducts = [...originalProducts];
    
    // Apply filters - FIXED CATEGORY FILTER
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        product.category && 
        filters.categories.some(filterCategory => 
          product.category.toLowerCase().includes(filterCategory.toLowerCase())
        )
      );
    }
    
    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.brands.includes(product.brand)
      );
    }
    
    if (filters.features.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.features.some(feature => 
          product.features.includes(feature)
        )
      );
    }
    
    if (filters.priceRange) {
      filteredProducts = filteredProducts.filter(product => 
        product.discountedPrice >= filters.priceRange.min && 
        product.discountedPrice <= filters.priceRange.max
      );
    }
    
    if (filters.condition) {
      filteredProducts = filteredProducts.filter(product => 
        product.condition === filters.condition
      );
    }
    
    if (filters.rating) {
      filteredProducts = filteredProducts.filter(product => 
        Math.floor(product.rating) === filters.rating
      );
    }
    
    if (filters.manufacturers.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.manufacturers.includes(product.manufacturer)
      );
    }
    
    // Then sort the filtered products
    const sorted = sortProducts(filteredProducts, sortOption);
    setSortedProducts(sorted);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, sortOption]);

  // Initialize sortedProducts on first render
  useEffect(() => {
    setSortedProducts([...originalProducts]);
  }, []);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<IoMdStar key={i} className="text-yellow-400" size={20} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<IoMdStar key={i} className="text-yellow-400" size={20} />);
      } else {
        stars.push(<IoMdStar key={i} className="text-gray-300" size={20} />);
      }
    }
    return stars;
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header with view mode toggle */}
      <div className="flex flex-col md:flex-row bg-white p-4 justify-between items-center border rounded-md mb-4 shadow-sm">
        <span className="text-sm text-gray-700 mb-2 md:mb-0">
          {sortedProducts.length} items in <span className="font-bold">Mobile accessory</span>
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={isVerified}
              onChange={() => setIsVerified(!isVerified)}
              className="mr-1"
            />
            Verified only
          </label>
          <select
            className="border rounded px-3 py-1 text-sm bg-white cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Featured">Featured</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Best Rated">Best Rated</option>
          </select>
          <div className="flex border rounded-md overflow-hidden">
            <button 
              className={`p-2 ${viewMode === "grid" ? "bg-gray-300" : "bg-white"}`} 
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <FaTh />
            </button>
            <button 
              className={`p-2 ${viewMode === "list" ? "bg-gray-300" : "bg-white"}`} 
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Product Display */}
      {viewMode === "list" ? (
        /* LIST VIEW */
        <div className="space-y-4">
          {currentProducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start relative">
              <button 
                onClick={() => toggleFavorite(product.name)}
                className="absolute top-4 right-4 text-blue-500 hover:text-red-500 p-2 border-2 shadow-sm rounded-lg"
              >
                <FaRegHeart className={favorites.includes(product.name) ? "text-red-500" : ""} />
              </button>
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h3 className="text-base font-semibold">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-lg font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex">
                    {renderStars(product.rating)}
                    <span className="text-sm text-yellow-400 font-semibold">{product.rating.toFixed(1)} </span>
                  </div>
                  <span className="text-sm text-gray-500"> •{product.orders} orders</span>
                  {product.freeShipping && (
                    <span className="text-sm text-green-500"> • Free Shipping</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <Link to ={`/products/${product.id}`} 
 
  rel="noopener noreferrer"
  className="mt-2 text-blue-600 font-medium"
>
  View details
</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentProducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {/* Image */}
              <div className="w-full h-48 mb-3">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain rounded" 
                />
              </div>
              
              {/* Horizontal line */}
              <hr className="my-2 border-gray-200" />
              
              {/* Price and heart icon */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => toggleFavorite(product.name)}
                  className=" hover:text-red-500 text-blue-500  p-2 border-2 shadow-sm rounded-lg"
                >
                  <FaRegHeart className={favorites.includes(product.name) ? "text-red-500" : ""} />
                </button>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-2">
                {renderStars(product.rating)}
                <span className="text-ms text-yellow-400 ml-1">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              
              {/* Product name */}
              <h3 className="text-lg font-medium text-gray-600 line-clamp-2 mb-2">{product.name}</h3>
            </div>
          ))}
        </div>
      )}

{/* Pagination */}
<div className="flex flex-col sm:flex-row justify-end mt-6 items-center gap-2">
  <select 
    value={productsPerPage} 
    onChange={(e) => {
      setProductsPerPage(Number(e.target.value));
      setCurrentPage(1);
    }} 
    className="border rounded px-3 py-1 text-sm"
  >
    <option value="2">Show 2</option>
    <option value="4">Show 4</option>
    <option value="6">Show 6</option>
    <option value="8">Show 8</option>
    <option value="10">Show 10</option>
  </select>
  <div className="flex space-x-2">
    <button 
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
      disabled={currentPage === 1}
      className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
      aria-label="Previous page"
    >
      &lt;
    </button>

    {/* Page Buttons */}
    {[...Array(totalPages).keys()]
      .slice(
        Math.max(0, currentPage - 3),  
        Math.min(totalPages, currentPage + 2)  
      )
      .map(page => (
        <button 
          key={page + 1} 
          onClick={() => setCurrentPage(page + 1)} 
          className={`px-3 py-1 border rounded-md ${currentPage === page + 1 ? "bg-gray-300" : "hover:bg-gray-100"}`}
        >
          {page + 1}
        </button>
      ))}

    <button 
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
      disabled={currentPage === totalPages}
      className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
      aria-label="Next page"
    >
      &gt;
    </button>
  </div>
</div>

    </div>
  );
};

export default ProductList;