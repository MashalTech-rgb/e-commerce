import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaBars, FaTh, FaShippingFast } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';
import ProductDetail from '../pages/ProductDetail';

const ProductList = ({ filters }) => {
  // State declarations
  const [isVerified, setIsVerified] = useState(true);
  const [sortOption, setSortOption] = useState("Featured");
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(2);
  const [favorites, setFavorites] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  // Original products data with additional fields for filtering
  const originalProducts = [
      {
        id: 1,
        name: 'iPhone 15 Pro Max 1TB',
        brand: 'Apple',
        category:'Mobile accessory',
        originalPrice: 1599,
        discountedPrice: 1499,
        rating: 4.9,
        reviews: 3420,
        description: 'Titanium design, A17 Pro chip, and advanced camera system.',
        image: '/public/assets/images/redphone.jpg',
        features: ['5G', 'Face ID', '120Hz ProMotion', 'USB-C'],
        condition: 'brand-new',
        manufacturer: 'Apple Inc',
        freeShipping: true
      },
      {
        id: 2,
        name: 'Nike Dri-FIT Running Shirt',
        brand: 'Nike',
        category: 'Clothes',
        originalPrice: 45,
        discountedPrice: 35,
        rating: 4.5,
        reviews: 420,
        description: 'Lightweight moisture-wicking fabric for intense workouts.',
        image: '/public/assets/images/T-shirt.jpg',
        features: ['Dri-FIT', 'UPF 30+', 'Breathable', 'Quick-dry',"Soft Clothes"],
        condition: 'brand-new',
        manufacturer: 'Nike Inc',
        freeShipping: true
      },
      {
        id: 3,
        name: 'Samsung Smart Watch Series 6 - Silver',
        brand: 'Samsung',
        category: 'Smartphone',
        originalPrice: 1128.00,
        discountedPrice: 998.00,
        rating: 3.5,
        reviews: 154,
        description: 'Smart features and sleek design.',
        image: '/public/assets/images/watch.jpg',
        features: ['Bluetooth 5.0', 'OLED Display'],
        condition: 'refurbished',
        manufacturer: 'Samsung Electronics',
        freeShipping: true
      },
      {
        id: 4,
        name: 'Apple Wireless Noise Cancelling Headphones',
        brand: 'Apple',
        category: 'Mobile accessory',
        originalPrice: 1299.00,
        discountedPrice: 1099.00,
        rating: 5,
        reviews: 154,
        description: 'Noise-cancelling technology and high-quality audio.',
        image: '/public/assets/images/smartphope.jpg',
        features: ['Wireless charging', 'NFC'],
        condition: 'brand-new',
        manufacturer: 'Apple Inc',
        freeShipping: true
      },
      {
        id: 5,
        name: 'Canon Camera EOS 2000, Black 10x zoom',
        brand: 'Canon',
        category: 'Cameras',
        originalPrice: 1129.00,
        discountedPrice: 998.00,
        rating: 4,
        reviews: 154,
        description: 'Great for professional photography.',
        image: '/public/assets/images/blackphone.jpg',
        features: ['Large Memory', 'Metallic'],
        condition: 'brand-new',
        manufacturer: 'Canon Inc',
        freeShipping: true
      },
      {
        id: 6,
        name: 'Apple Smartphone X - Black',
        category: 'Mobile accessory',
        brand: 'Apple',
        originalPrice: 1127.00,
        discountedPrice: 899.00,
        rating: 4.8,
        reviews: 154,
        description: 'Latest smartphone with high-end features.',
        image: '/public/assets/images/smartphope.jpg',
        features: ['Super power', '8GB Ram'],
        condition: 'old-items',
        manufacturer: 'Apple Inc',
        freeShipping: true
      },
      {
        id: 7,
        name: 'Lenovo Laptop Pro 2025',
        brand: 'Lenovo',
        category: 'Smartphone',
        originalPrice: 1899.00,
        discountedPrice: 1599.00,
        rating: 4.2,
        reviews: 154,
        description: 'Powerful laptop for all your computing needs.',
        image: '/public/assets/images/laptop.jpg',
        features: ['Plastic cover', 'Large Memory'],
        condition: 'brand-new',
        manufacturer: 'Lenovo Group',
        freeShipping: true
      },
      {
        id: 8,
        name: 'Sony Camera Black',
        brand: 'Sony',
        category: 'Cameras',
        originalPrice: 899.00,
        discountedPrice: 799.00,
        rating: 4.2,
        reviews: 154,
        description: 'Perfect for all your photography needs.',
        image: '/public/assets/images/camera.jpg',
        features: ['Metallic', 'Waterproof'],
        condition: 'refurbished',
        manufacturer: 'Sony Corporation',
        freeShipping: true
      },
      {
        id: 9,
        name: 'Jeans Shirt',
        category: 'Clothes',
        brand: 'Pocco',
        originalPrice: 59.00,
        discountedPrice: 39.00,
        rating: 4.2,
        reviews: 154,
        description: 'Casual shirt for all occasions.',
        image: '/public/assets/images/Jeans shirt.jpg',
        features: ['Plastic cover',"Soft Clothes"],
        condition: 'old-items',
        manufacturer: 'Pocco Fashion',
        freeShipping: true
      },
      {
        id: 10,
        name: 'Coat Blue',
        category:'Clothes',
        brand: 'Xiaomi',
        originalPrice: 138.00,
        discountedPrice: 98.00,
        rating: 4.2,
        reviews: 154,
        description: 'Stylish and warm coat for winter.',
        image: '/public/assets/images/coat.jpg',
        features: ['Metallic', "Soft Clothes"],
        condition: 'brand-new',
        manufacturer: 'Xiaomi Apparel',
        freeShipping: true
      },
      {
        id: 11,
        name: 'LG Home appliances',
        category: 'Electronics',
        brand: 'LG',
        originalPrice: 128.00,
        discountedPrice: 98.00,
        rating: 4.2,
        reviews: 154,
        description: 'Essential home appliance.',
        image: '/public/assets/images/9.jpg',
        features: ['Super power'],
        condition: 'brand-new',
        manufacturer: 'LG Electronics',
        freeShipping: true
      },
      {
        id: 12,
        name: 'Huawei P50 Pro Smartphone',
        brand: 'Huawei',
        category: 'Smartphones',
        originalPrice: 1100.00,
        discountedPrice: 999.00,
        rating: 4.5,
        reviews: 200,
        description: 'Flagship smartphone with advanced camera features.',
        image: '/public/assets/images/image 23.png',
        features: ['5G', 'OIS Camera'],
        condition: 'brand-new',
        manufacturer: 'Huawei Technologies',
        freeShipping: true
      },
      {
        id: 13,
        name: 'OnePlus 9 Pro 5G',
        brand: 'OnePlus',
        category: 'Smartphones',
        originalPrice: 999.00,
        discountedPrice: 899.00,
        rating: 4.6,
        reviews: 350,
        description: 'Fast performance and beautiful AMOLED display.',
        image: '/public/assets/images/bluephone.jpg',
        features: ['5G', 'AMOLED Display'],
        condition: 'brand-new',
        manufacturer: 'OnePlus Ltd',
        freeShipping: true
      },
      {
        id: 14,
        name: 'Samsung Galaxy Tab S7',
        brand: 'Samsung',
        category: 'Tablets',
        originalPrice: 649.00,
        discountedPrice: 599.00,
        rating: 4.8,
        reviews: 150,
        description: 'High-performance tablet with an amazing display.',
        image: '/public/assets/images/smartphope.jpg',
        features: ['120Hz Display', 'S Pen Included'],
        condition: 'brand-new',
        manufacturer: 'Samsung Electronics',
        freeShipping: true
      },
      {
        id: 15,
        name: 'MacBook Air M1',
        brand: 'Apple',
        category: 'Laptops',
        originalPrice: 999.00,
        discountedPrice: 899.00,
        rating: 4.9,
        reviews: 500,
        description: 'Ultra-light, powerful performance with M1 chip.',
        image: '/public/assets/images/laptop.jpg',
        features: ['M1 Chip', 'Retina Display'],
        condition: 'brand-new',
        manufacturer: 'Apple Inc',
        freeShipping: true
      },
      {
        id: 16,
        name: 'Google Pixel 6',
        brand: 'Google',
        category: 'Smartphones',
        originalPrice: 699.00,
        discountedPrice: 649.00,
        rating: 4.3,
        reviews: 250,
        description: 'Flagship phone with Google’s Tensor chipset.',
        image: '/public/assets/images/redphone.jpg',
        features: ['5G', 'Tensor Chip'],
        condition: 'brand-new',
        manufacturer: 'Google LLC',
        freeShipping: true
      },
      {
        id: 17,
        name: 'Sony WH-1000XM4 Headphones',
        brand: 'Sony',
        category: 'Gaming',
        originalPrice: 348.00,
        discountedPrice: 299.00,
        rating: 4.9,
        reviews: 350,
        description: 'Industry-leading noise cancellation and great sound.',
        image: '/public/assets/images/headphone.jpg',
        features: ['Noise Cancelling', 'Wireless'],
        condition: 'brand-new',
        manufacturer: 'Sony Corporation',
        freeShipping: true
      },
      {
        id: 18,
        name: 'Dell XPS 13 Laptop',
        brand: 'Dell',
        category: 'Laptops',
        originalPrice: 1399.00,
        discountedPrice: 1299.00,
        rating: 4.7,
        reviews: 300,
        description: 'Premium laptop with an ultra-thin design.',
        image: '/public/assets/images/laptop.jpg',
        features: ['InfinityEdge Display', 'Core i7'],
        condition: 'brand-new',
        manufacturer: 'Dell Inc',
        freeShipping: true
      },
      {
        id: 19,
        name: 'OLED Washing machine 65"',
        brand: 'LG',
        category: 'Electronics',
        originalPrice: 1499.00,
        discountedPrice: 1399.00,
        rating: 4.8,
        reviews: 220,
        description: 'Stunning 4K OLED display with deep blacks.',
        image: '/public/assets/images/10.jpg',
        features: ['4K', 'OLED Display'],
        condition: 'brand-new',
        manufacturer: 'LG Electronics',
        freeShipping: true
      },
      {
        id: 20,
        name: 'Fitbit Charge 5',
        brand: 'Fitbit',
        category: 'Tablets',
        originalPrice: 179.00,
        discountedPrice: 149.00,
        rating: 4.6,
        reviews: 400,
        description: 'Advanced fitness tracker with built-in GPS.',
        image: '/public/assets/images/gaming.jpg',
        features: ['GPS', 'Heart Rate Monitor'],
        condition: 'brand-new',
        manufacturer: 'Fitbit Inc',
        freeShipping: true
      },
        {
          id: 21,
          name: 'iPhone 15 Pro Max 1TB',
          brand: 'Apple',
          category: 'Smartwatches',
          originalPrice: 1599,
          discountedPrice: 1499,
          rating: 4.9,
          reviews: 3420,
          description: 'Titanium design, A17 Pro chip, and advanced camera system.',
          image: '/public/assets/images/redphone.jpg',
          features: ['5G', 'Face ID', '120Hz ProMotion', 'USB-C'],
          condition: 'brand-new',
          manufacturer: 'Apple Inc',
          freeShipping: true
        },
        {
          id: 22,
          name: 'Nike Dri-FIT Running Shirt',
          brand: 'Nike',
          category: 'Clothes',
          originalPrice: 45,
          discountedPrice: 35,
          rating: 4.5,
          reviews: 420,
          description: 'Lightweight moisture-wicking fabric for intense workouts.',
          image: '/public/assets/images/T-shirt.jpg',
          features: ['Dri-FIT', 'UPF 30+', 'Breathable', 'Quick-dry',"Soft Clothes"],
          condition: 'brand-new',
          manufacturer: 'Nike Inc',
          freeShipping: true
        },
        {
          id: 23,
          name: 'Men\'s Casual Canon',
          brand: 'Nike',
          category: 'Clothes',
          originalPrice: 55,
          discountedPrice: 40,
          rating: 4.7,
          reviews: 350,
          description: 'Stylish and comfortable jeans for everyday wear.',
          image: '/public/assets/images/Canon.jpg',
          features: ['Stretchable', 'Breathable',"Soft Clothes"],
          condition: 'brand-new',
          manufacturer: 'Levi\'s',
          freeShipping: true
        },
        {
          id: 24,
          name: 'Polo Shirt Black',
          brand: 'Polo Ralph Lauren',
          category: 'Clothes',
          originalPrice: 75,
          discountedPrice: 60,
          rating: 4.8,
          reviews: 450,
          description: 'Premium quality polo shirt in a classic design.',
          image: '/public/assets/images/T-shirt.jpg',
          features: ['Cotton', 'Breathable',"Soft Clothes"],
          condition: 'brand-new',
          manufacturer: 'Nike Inc',
          freeShipping: true
        },
        {
          id: 25,
          name: 'Nike Running Shorts',
          brand: 'Nike',
          category: 'Clothes',
          originalPrice: 30,
          discountedPrice: 25,
          rating: 4.6,
          reviews: 300,
          description: 'Comfortable and breathable running shorts.',
          image: '/public/assets/images/Canon.jpg',
          features: ['Moisture-wicking', 'Lightweight',"Soft Clothes"],
          condition: 'brand-new',
          manufacturer: 'Nike Inc',
          freeShipping: true
        },
        {
          id: 26,
          name: 'Samsung Smart Watch Series 6 - Silver',
          brand: 'Samsung',
          category: 'Smartwatches',
          originalPrice: 1128.00,
          discountedPrice: 998.00,
          rating: 3.5,
          reviews: 154,
          description: 'Smart features and sleek design.',
          image: '/public/assets/images/watch.jpg',
          features: ['Bluetooth 5.0', 'OLED Display'],
          condition: 'refurbished',
          manufacturer: 'Samsung Electronics',
          freeShipping: true
        },
        {
          id: 27,
          name: 'Fitbit Charge 5',
          brand: 'Fitbit',
          category: 'Electronics',
          originalPrice: 179.00,
          discountedPrice: 149.00,
          rating: 4.6,
          reviews: 400,
          description: 'Advanced fitness tracker with built-in GPS.',
          image: '/public/assets/images/10.jpg',
          features: ['GPS', 'Heart Rate Monitor'],
          condition: 'brand-new',
          manufacturer: 'Fitbit Inc',
          freeShipping: true
        },
        {
          id: 28,
          name: 'Canon EOS 2000 Camera, Black 10x Zoom',
          brand: 'Canon',
          category: 'Cameras',
          originalPrice: 1129.00,
          discountedPrice: 998.00,
          rating: 4.0,
          reviews: 154,
          description: 'Great for professional photography.',
          image: '/public/assets/images/blackphone.jpg',
          features: ['Large Memory', 'Metallic'],
          condition: 'brand-new',
          manufacturer: 'Canon Inc',
          freeShipping: true
        },
        {
          id: 29,
          name: 'Sony Alpha 7 III Mirrorless Camera',
          brand: 'Sony',
          category: 'Cameras',
          originalPrice: 2500.00,
          discountedPrice: 2300.00,
          rating: 4.9,
          reviews: 1000,
          description: 'World-class camera for professional photographers.',
          image: '/public/assets/images/camera.jpg',
          features: ['Full-frame', '4K Video'],
          condition: 'brand-new',
          manufacturer: 'Sony Corporation',
          freeShipping: true
        },
        {
          id: 30,
          name: 'Apple AirPods Pro 2nd Gen',
          brand: 'Apple',
          category: 'Electronics',
          originalPrice: 249.00,
          discountedPrice: 199.00,
          rating: 4.8,
          reviews: 500,
          description: 'Active Noise Cancellation with premium sound quality.',
          image: '/public/assets/images/kattle.jpg',
          features: ['Noise Cancellation', 'Apple H2 Chip'],
          condition: 'brand-new',
          manufacturer: 'Apple Inc',
          freeShipping: true
        },
    ];

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
                <a 
  href={`/products/${product.id}`} 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-2 text-blue-600 font-medium"
>
  View details
</a>
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