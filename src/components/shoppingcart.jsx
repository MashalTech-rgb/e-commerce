import React, { useState } from "react";
import { IoArrowBack } from 'react-icons/io5';
import { FaCcVisa, FaPaypal, FaCcMastercard } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';
const ShoppingCart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 78.99,
      quantity: 9,
      image: "/assets/images/7-removebg-preview.png"
    },
    {
      id: 2,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      price: 39.0,
      quantity: 3,
      image:"/assets/images/watch-removebg-preview.png"
    },
    {
      id: 3,
      title: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 170.5,
      quantity: 1,
      image: "/public/assets/images/headphone-removebg-preview.png"
    }
  ]);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 60.0;
  const tax = 14.0;
  const total = subtotal - discount + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6">My cart(3)</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Cart Items with border and shadow */}
        <div className="flex-1 border border-gray-200 rounded-lg shadow-sm bg-white p-6">
          {items.map((item) => (
            <div key={item.id} className="border-b border-gray-200 py-4 flex gap-4 last:border-b-0">
              {/* Product Image */}
              <div className="w-20 h-20 bg-gray-100 flex items-center justify-center">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
              </div>
              
              {/* Product Details */}
              <div className="flex-1 relative">
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  Size: {item.size}, Color: {item.color}, Material: {item.material}
                </p>
                <p className="text-sm text-gray-600">Seller: {item.seller}</p>
                
                <div className="mt-2">
                  <button className="border border-gray-300 rounded px-3 py-1 text-red-500 hover:bg-gray-100 text-sm mr-4">
                    Remove
                  </button>
                  <button className="border border-gray-300 rounded px-3 py-1 text-blue-600 hover:bg-gray-100 text-sm">
                    Save for later
                  </button>
                </div>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex flex-col items-end">
                <div className="font-bold">${item.price.toFixed(2)}</div>
                <div className="flex items-center mt-1">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="border border-gray-300 rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="border border-gray-300 rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Buttons positioned side by side */}
          <div className="flex gap-4 mt-6 justify-between">
            
          <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 text-white bg-blue-600 text-sm hover:bg-blue-700 transition-colors">
  <IoArrowBack size={14} />
  Back to shop
</button>
            <button className="border border-gray-300 rounded px-3 py-1 text-blue-600 hover:bg-gray-100 text-sm">
              Remove all
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:w-80 space-y-4">
          {/* Coupon Section */}
          <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-4">
            <p className="text-sm mb-2">Have a coupon?</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Add coupon"
                className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r text-sm hover:bg-blue-700 border border-blue-700">
                Apply
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-4">
            <h3 className="font-medium mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount:</span>
                <span className="text-red-600">- ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="text-green-600">+ ${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Checkout Button */}
            <button className="w-full bg-green-600 hover:bg-green-400 text-white font-medium py-3 rounded mt-6 ">
              Checkout
            </button>
            
            {/* Payment Methods */}
            <div className="flex justify-end gap-4 mt-4 items-center">
  <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 text-sm font-bold hover:bg-gray-50 transition-colors">
    <FaCcVisa className="text-blue-900 text-lg" /> 
  </button>
  <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 transition-colors">
    <SiPaytm className="text-blue-600 text-lg" /> 
  </button>
  <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-50 transition-colors">
    <FaPaypal className="text-blue-700 text-lg" />
  </button>
  <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 text-sm font-bold hover:bg-gray-50 transition-colors">
    <FaCcMastercard className="text-red-600 text-lg" />
  </button>
</div>
               </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;