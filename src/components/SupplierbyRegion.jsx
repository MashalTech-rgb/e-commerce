import React from 'react';

const SuppliersByRegion = () => {
  const regions = [
    {
      id: 1,
      name: 'Arabic Emirates',
      shop: 'shopname.ae',
      flag: '/assets/images/dubai.png', // URL for UAE flag
    },
    {
      id: 2,
      name: 'Denmark',
      shop: 'dennmark.com.dk',
      flag: '/assets/images/scotland.png', // URL for Denmark flag
    },
    {
      id: 3,
      name: 'Australia',
      shop: 'shopname.ae',
      flag: '/assets/images/australia.png', // URL for Australia flag
    },
    {
      id: 4,
      name: 'France',
      shop: 'shopname.com.fr',
      flag: '/assets/images/france.png', // URL for France flag
    },
    {
      id: 5,
      name: 'United States',
      shop: 'shopname.ae',
      flag: '/assets/images/usa.png', // URL for USA flag
    },
    {
      id: 6,
      name: 'Arabic Emirates',
      shop: 'shopname.ae',
      flag: '/assets/images/dubai.png', // URL for UAE flag
    },
    {
      id: 7,
      name: 'Russia',
      shop: 'shopname.ru',
      flag: '/assets/images/russia.png', // URL for Russia flag
    },
    {
      id: 8,
      name: 'China',
      shop: 'shopname.ae',
      flag: '/assets/images/china.png', // URL for China flag
    },
    {
      id: 9,
      name: 'Italy',
      shop: 'shopname.it',
      flag: '/assets/images/itlay.png', // URL for Italy flag
    },
    {
      id: 10,
      name: 'Great Britain',
      shop: 'shopname.co.uk',
      flag: '/assets/images/england.png', // URL for UK flag
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-6">
      <h1 className="text-2xl font-bold mb-6">Suppliers by region</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {regions.map((region) => (
          <div key={region.id} className="flex items-center">
            {/* Flag */}
            <img 
              src={region.flag} 
              alt={`${region.name} flag`} 
              className="w-8 h-8 mr-4" 
            />
            {/* Region and Shop Name */}
            <div>
              <p className="text-lg font-semibold">{region.name}</p>
              <p className="text-gray-600">{region.shop}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersByRegion;