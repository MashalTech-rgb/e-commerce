import { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "shipping", label: "Shipping" },
    { id: "seller", label: "About seller" },
  ];

  const features = [
    "Some great feature name here",
    "Lorem ipsum dolor sit amet, consectetur",
    "Duis aute irure dolor in reprehenderit",
    "Some great feature name here",
  ];

  const relatedProducts = [
    { name: "Men Blazers Sets", desc: "Elegant Formal", price: "$700 - $99.50" },
    { name: "Men Shirt Sleeve", desc: "Polo Contrast", price: "$700 - $99.50" },
    { name: "Apple Watch Series", desc: "Space Gray", price: "$700 - $99.50" },
    { name: "Basketball Crew", desc: "Socks Long Stuff", price: "$700 - $99.50" },
    { name: "New Summer Men's", desc: "castrol T-Shirts", price: "$700 - $99.50" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content (Left Side) - Scrollable */}
        <div className="w-full lg:w-3/4 bg-white rounded-lg shadow p-6">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 font-medium ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "description" && (
              <>
                <div className="prose max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  </p>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

    {/* Model Section */}
<div>
  <div className="border border-gray-200 rounded-lg  mt-2 w-2/4">
{/* Data Rows */}
    <div className="divide-y divide-gray-200">
    <div className="grid grid-cols-2">
        <div className="p-1 bg-gray-100">Model</div>
        <div className="p-1">#8786867</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-1 bg-gray-100">Style</div>
        <div className="p-1">Classic style</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-1 bg-gray-100">Certificate</div>
        <div className="p-1">ISO-898921212</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-1 bg-gray-100">Size</div>
        <div className="p-1">34mm x 450mm x 19mm</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-1 bg-gray-100">Memory</div>
        <div className="p-1">36GB RAM</div>
      </div>
    </div>
  </div>

  {/* Feature List */}
  <div className="mt-2 space-y-1">
    {features.map((feature, index) => (
      <div key={index} className="flex items-start">
        <span className="text-gray-400 mr-2 mt-0.5">✓</span>
        <span>{feature}</span>
      </div>
    ))}
  </div>
</div>
              </>
            )}

            {activeTab === "reviews" && (
              <div className="py-4">Reviews content will be displayed here</div>
            )}

            {activeTab === "shipping" && (
              <div className="py-4">Shipping information will be displayed here</div>
            )}

            {activeTab === "seller" && (
              <div className="py-4">Seller information will be displayed here</div>
            )}
          </div>
        </div>

        {/* You May Like Section (Right Side) - Fixed Position */}
        <div className="w-full lg:w-1/4">
  <div className="bg-white rounded-lg shadow p-6 h-fit sticky top-4">
    <h2 className="text-xl font-bold mb-4">You may like</h2>
    <div className="space-y-4">
      {relatedProducts.map((product, index) => (
        <div 
          key={index} 
          className="flex gap-3 items-start p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
        >
          <div className="w-16 h-16 bg-gray-200 rounded">
          <img 
  src={product.image || '/assets/images/7-removebg-preview.png'} 
  alt={product.name}
  className="w-full h-full object-cover"
/>
          </div>
          <div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.desc}</p>
            <p className="text-blue-600 text-sm font-medium mt-1">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ProductDescription;