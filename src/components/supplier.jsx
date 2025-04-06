import React from 'react';
import backgroundImage from '../../public/assets/images/supplier.png';

const SupplierRequest = () => {
  return (
    <div
    className="border justify-center relative bg-cover bg-center rounded-lg shadow-lg max-w-6xl p-8 mx-auto my-8"
    style={{ backgroundImage: `url(${backgroundImage})`, borderRadius: '0.5rem' }}
  >
    {/* Overlay with varying opacity */}
    <div 
  className="absolute inset-0 rounded-lg"
  style={{ 
    background: 'linear-gradient(to right,rgba(60, 131, 248, 1),rgba(34, 211, 238, 0.3))',
  }}
></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Left Section */}
        <div className="text-white p-6">
          <h1 className="text-4xl font-semibold leading-snug">
            An easy way to send requests to all suppliers
          </h1>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send quote to suppliers
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What item you need?"
              />
            </div>

            <div className="mb-4">
              <textarea
                className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type more details"
                rows="2"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <input
                type="number"
                className=" px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Quantity"
              />
              <select className=" px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Box</option>
              </select>
            </div>

            <button
              type="submit"
              className=" bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupplierRequest;
