import React from "react";
import image92 from "/assets/images/image92.png"; 
import img1 from "/assets/images/1.jpg"; 
import img2 from "/assets/images/2.jpg";
import img3 from "/assets/images/3.jpg";
import img4 from "/assets/images/4.jpg";
import img5 from "/assets/images/5.jpg";
import img6 from "/assets/images/6.jpg";
import img7 from "/assets/images/7.jpg";
import img8 from "/assets/images/8.jpg";

const HomeOutdoor = () => {
  const products = [
    { id: 1, name: "Soft Chairs", price: "USD 19", image: img1 },
    { id: 2, name: "Sofa & Chair", price: "USD 19", image: img2 },
    { id: 3, name: "Kitchen Dishes", price: "USD 19", image: img3 },
    { id: 4, name: "Smart Watches", price: "USD 19", image: img4 },
    { id: 5, name: "Kitchen Mixer", price: "USD 100", image: img5 },
    { id: 6, name: "Blenders", price: "USD 39", image: img6 },
    { id: 7, name: "Home Appliance", price: "USD 19", image: img7 },
    { id: 8, name: "Coffee Maker", price: "USD 10", image: img8 },
  ];

  return (
    <div className="bg-white border rounded-md shadow-lg max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Banner Section */}
        <div
          className="w-full md:w-1/4 flex flex-col items-start p-6 text-white relative"
          style={{
            backgroundImage: `url(${image92})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-sm md:text-3xl font-semibold relative z-10 text-black">Home &<br/> Outdoor</h2>
          <button className="bg-white text-black px-4 py-2 mt-4 rounded-lg text-sm font-medium relative z-10 hover:bg-gray-200 transition">
            Source Now
          </button>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border flex flex-col justify-between p-4 md:p-6 relative hover:bg-gray-100 transition"
            >
              <div className="mb-12 md:mb-16">
                <p className="text-base md:text-lg font-semibold text-gray-800">{product.name}</p>
                <span className="text-gray-500 text-xs md:text-sm mt-1">From {product.price}</span>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain absolute bottom-4 right-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOutdoor;