import React, { useState, useEffect } from "react";

const DealsOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  const products = [
    { id: 1, name: "Smart watches", discount: "-25%", image: "/src/assets/image 35.png" },
    { id: 2, name: "Laptops", discount: "-15%", image: "/src/assets/image 34.png" },
    { id: 3, name: "GoPro cameras", discount: "-40%", image: "/src/assets/image 28.png" },
    { id: 4, name: "Headphones", discount: "-25%", image: "/src/assets/image 29.png" },
    { id: 5, name: "Canon cameras", discount: "-25%", image: "/src/assets/image 23.png" },
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
    <div className="bg-white border rounded-lg p-6 shadow-lg max-w-8xl my-4 mx-16">

      <div className="flex items-center justify-between w-full">
        {/* Timer Section */}
        <div className="flex flex-col items-start pr-8 border-r border-gray-300">
          <h2 className="text-2xl font-semibold">Deals and offers</h2>
          <p className="text-gray-500 text-lg">Hygiene equipments</p>
          <div className="flex space-x-2 mt-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-center"
              >
                <span className="block text-lg font-bold">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="text-xs">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="flex justify-between w-full pl-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center w-full border-r last:border-r-0">
              <img src={product.image} alt={product.name} className="w-30 h-30 object-contain" />
              <p className="mt-2 text-sm font-medium">{product.name}</p>
              <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                {product.discount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsOffers;
