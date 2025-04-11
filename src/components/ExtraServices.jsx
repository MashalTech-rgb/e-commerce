import React from 'react';
import {
  FaSearch,
  FaShoppingBasket,
  FaTruck,
  FaShieldAlt,
} from 'react-icons/fa';

const ExtraServices = () => {
  const services = [
    {
      id: 1,
      title: 'Source from Industry Hubs',
      image: '/assets/images/supplier.png',
      icon: <FaSearch className="w-4 h-4 text-black" />, 
    },
    {
      id: 2,
      title: 'Customize Your Products',
      image: '/assets/images/Products.png',
      icon: <FaShoppingBasket className="w-4 h-4 text-black" />, 
    },
    {
      id: 3,
      title: 'Fast, reliable shipping by ocean or air',
      image: '/assets/images/shiping.png',
      icon: <FaTruck className="w-4 h-4 text-black" />, 
    },
    {
      id: 4,
      title: 'Product monitoring and inspection',
      image: '/assets/images/inspection.png',
      icon: <FaShieldAlt className="w-4 h-4 text-black" />, 
    },
  ];

  return (
    <div className="bg-white max-w-6xl mx-auto my-6">
      <h1 className="text-2xl font-bold mb-6">Our extra services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-gray-200 rounded-lg overflow-hidden relative"
          >
            {/* Image container with overlay */}
            <div className="w-full h-40">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-100"
              />
            </div>

            {/* Icon with rounded border */}
            <div className="absolute bottom-14 right-4 bg-blue-100 p-4 rounded-full border border-white shadow-sm">
              {service.icon}
            </div>

            {/* Title */}
            <div className="p-4">
              <h2 className="text-base font-normal">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;