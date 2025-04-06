import React from "react";
import gadgets from "../../public/assets/images/gadgets.png";
import watch from "../../public/assets/images/watch.jpg";
import Camera from "../../public/assets/images/camera.jpg";
import headphone from "../../public/assets/images/headphone.jpg";
import kattle from "../../public/assets/images/kattle.jpg";
import gaming from "../../public/assets/images/gaming.jpg";
import Laptop from "../../public/assets/images/laptop.jpg";
import smartphone from "../../public/assets/images/smartphope.jpg";
import redphone from "../../public/assets/images/redphone.jpg";

const Electronics = () => {
  const products = [
    { id: 1, name: "Smart Watches", price: "USD 19", image: watch },
    { id: 2, name: "Cameras", price: "USD 89", image: Camera },
    { id: 3, name: "Headphones", price: "USD 10", image: headphone },
    { id: 4, name: "Electric Kettle", price: "USD 90", image: kattle },
    { id: 5, name: "Gaming Set", price: "USD 35", image: gaming },
    { id: 6, name: "Laptop & PC", price: "USD 340", image: Laptop },
    { id: 7, name: "Smartphones", price: "USD 19", image: smartphone },
    { id: 8, name: "Smartphones", price: "USD 240", image: redphone },
  ];

  return (
    <div className="bg-white border rounded-md shadow-lg max-w-6xl mx-auto my-8">
      <div className="flex flex-col md:flex-row">
        {/* Left Banner Section */}
        <div
          className="w-full md:w-1/4 flex flex-col items-start p-6 text-white relative"
          style={{
            backgroundImage: `url(${gadgets})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-sm md:text-3xl font-semibold relative z-10 text-black">
            Consumer electronics and gadgets
          </h2>
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

export default Electronics;