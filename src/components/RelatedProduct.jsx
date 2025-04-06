import React from "react";

const RelatedProducts = () => {
  const products = [
    { 
      name: "Xiaomi Redmi 8", 
      description: "Original", 
      price: "$32.00-$40.00",
      image: "/assets/images/wallet-removebg-preview (1).png" 
    },
    { 
      name: "Xiaomi Redmi Note 9", 
      description: "Pro Version", 
      price: "$35.00-$45.00",
      image: "/assets/images/watch-removebg-preview.png" 
    },
    { 
      name: "Xiaomi Mi 10", 
      description: "5G Edition", 
      price: "$45.00-$55.00",
      image: "/assets/images/headphone-removebg-preview (1).png" 
    },
    { 
      name: "Xiaomi Poco X3", 
      description: "NFC Version", 
      price: "$28.00-$38.00",
      image: "/assets/images/Canon-removebg-preview.png" 
    },
    { 
      name: "Xiaomi Black Shark", 
      description: "Gaming Phone", 
      price: "$50.00-$60.00",
      image: "/assets/images/7-removebg-preview.png" 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Products Grid */}
      <div className="bg-white my-4 p-4 border rounded-lg shadow">
        <h2 className="text-lg font-bold mb-6">Related products</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full object-contain p-2"
                />
              </div>
              <div className="flex-grow">
                <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                <p className="text-xs text-gray-500 mb-2">{product.description}</p>
              </div>
              <p className="text-sm font-semibold text-blue-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Banner */}
      <div className="border rounded-lg shadow bg-blue-500 my-4 p-4">
  <div className="flex justify-between items-start">
    <div>
      <p className="font-bold text-lg text-white">Super discount on more than 100 USD</p>
      <p className="text-xs text-white mt-1">Have you ever finally just write dummy info</p>
    </div>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded text-xs transition-colors whitespace-nowrap mt-3">
      Shop now
    </button>
  </div>
</div>
</div>
  );
};

export default RelatedProducts;