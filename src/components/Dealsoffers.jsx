import React, { useState, useEffect } from "react";

const DealsOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  const products = [
    { id: 1, name: "Smart watches", discount: "-25%", image: "/public/assets/images/image 35.png" },
    { id: 2, name: "Laptops", discount: "-15%", image: "/public/assets/images/image 34.png" },
    { id: 3, name: "GoPro cameras", discount: "-40%", image: "/public/assets/images/image 28.png" },
    { id: 4, name: "Headphones", discount: "-25%", image: "/public/assets/images/image 29.png" },
    { id: 5, name: "Canon cameras", discount: "-25%", image: "/public/assets/images/image 23.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white border rounded-lg p-4 shadow-lg max-w-6xl mx-auto my-6">
      {/* Timer Section */}
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0">
        <h2 className="text-xl md:text-2xl font-semibold">Deals and offers</h2>
        <p className="text-gray-500 text-sm md:text-lg">Hygiene equipments</p>
        <div className="flex space-x-2 mt-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-gray-900 text-white px-2 py-1 md:px-3 md:py-2 rounded-md text-center"
            >
              <span className="block text-sm md:text-lg font-bold">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-xs">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:flex justify-between pl-0 md:pl-8 gap-4 md:gap-0 mt-4 md:mt-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center w-full border-r last:border-r-0 p-2"
          >
            {/* Product Image on Top */}
            <div className="mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            
            {/* Product Name and Discount Below */}
            <div className="flex flex-col items-center w-full">
              <p className="text-xs md:text-sm font-medium text-center mt-2">{product.name}</p>
              <span className="bg-red-200 text-red-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold mt-1">
                {product.discount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOffers;