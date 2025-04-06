import React from 'react';

const RecommendedItems = () => {
  const items = [
    {
      id: 1,
      name: 'T-shirts with multiple colors, for men',
      price: '$10.30',
      image: '/public/assets/images/T-shirt.jpg', 
    },
    {
      id: 2,
      name: 'Jeans shorts for men blue color',
      price: '$10.30',
      image: '/public/assets/images/Jeans shirt.jpg', 
    },
    {
      id: 3,
      name: 'Brown winter coat medium size',
      price: '$12.50',
      image: '/public/assets/images/coat.jpg',
    },
    {
      id: 4,
      name: 'Jeans bag for travel for men',
      price: '$34.00',
      image: '/public/assets/images/bag.jpg',
    },
    {
      id: 5,
      name: 'Leather wallet',
      price: '$99.00',
      image: '/public/assets/images/wallet.jpg',
    },
    {
      id: 6,
      name: 'Canon camera black, 100x zoom',
      price: '$9.99',
      image: '/public/assets/images/Canon.jpg', 
    },
    {
      id: 7,
      name: 'Headset for gaming with mic',
      price: '$8.99',
      image: '/public/assets/images/headphone.jpg', 
    },
    {
      id: 8,
      name: 'Smartwatch silver color modern',
      price: '$10.30',
      image: '/public/assets/images/watch.jpg', 
    },
    {
      id: 9,
      name: 'Blue wallet for men leather material',
      price: '$10.30',
      image: '/public/assets/images/wallet.jpg', 
    },
    {
      id: 10,
      name: 'Jeans bag for travel for men',
      price: '$80.95',
      image: '/public/assets/images/bag.jpg', 
    },
  ];

  return (
    <div className=" bg-white max-w-6xl mx-auto my-6">
      <h1 className="text-2xl font-bold mb-6">Recommended items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-800 font-medium">{item.name}</p>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;