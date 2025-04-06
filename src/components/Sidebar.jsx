import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Sidebar = ({ filters, updateFilters }) => {
  // State for dropdown toggles
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isPriceRangeOpen, setPriceRangeOpen] = useState(false);
  const [isConditionOpen, setConditionOpen] = useState(false);
  const [isManufacturerOpen, setManufacturerOpen] = useState(false);
  const [isRatingsOpen, setIsRatingsOpen] = useState(false);
  
  // State for "See all" expansions
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllManufacturers, setShowAllManufacturers] = useState(false);
  
  // Local price range state
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange);

  const toggleDropdown = (setter, state) => setter(!state);

  // Data for filters
  const allCategories = [
    'Mobile accessory',
    'Electronics',
    'Smartphones',
    'Clothes',
    'Laptops',
    'Tablets',
    'Smartwatches',
    'Headphones',
    'Cameras',
    'Gaming'
  ];

  const allBrands = [
    'Samsung',
    'Apple',
    'Huawei',
    'Pocco',
    'Lenovo',
    'Xiaomi',
    'Nike',
    'OnePlus',
    'Google',
    'Sony',
    'LG'
  ];

  const allFeatures = [
    'Metallic',
    'Plastic cover',
    '8GB Ram',
    'Super power',
    'Large Memory',
    'Waterproof',
    'Wireless charging',
    'Bluetooth 5.0',
    'NFC',
    'OLED Display',
    'Soft Clothes'
    
  ];

  const allManufacturers = [
    'Apple Inc',
    'Nike Inc',
    'Samsung Electronics',
    'Canon Inc',
    'Lenovo Group',
    'Sony Corporation',
    'Pocco Fashion',
    'LG Electronics',
    'Huawei Technologies',
    'OnePlus Ltd',
    'Google LLC',
    'Dell Inc',
    'Fitbit Inc',
  ];

  // Handler functions
  const handleCategoryToggle = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    updateFilters({ categories: newCategories });
  };

  const handleBrandToggle = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    updateFilters({ brands: newBrands });
  };

  const handleFeatureToggle = (feature) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    updateFilters({ features: newFeatures });
  };

  const handlePriceRangeChange = (type, value) => {
    const newPriceRange = { ...localPriceRange, [type]: Number(value) };
    setLocalPriceRange(newPriceRange);
  };

  const applyPriceRange = () => {
    updateFilters({ priceRange: localPriceRange });
  };

  const handleConditionChange = (condition) => {
    updateFilters({ condition });
  };

  const handleRatingChange = (rating) => {
    updateFilters({ rating: rating === filters.rating ? null : rating });
  };

  const handleManufacturerToggle = (manufacturer) => {
    const newManufacturers = filters.manufacturers.includes(manufacturer)
      ? filters.manufacturers.filter(m => m !== manufacturer)
      : [...filters.manufacturers, manufacturer];
    updateFilters({ manufacturers: newManufacturers });
  };

  return (
    <aside className="w-64 border-gray-200 pr-6">
      {/* Category Section */}
      <hr className="my-6 border-gray-300" />
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown(setCategoryOpen, isCategoryOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 mb-4"
        >
          Category
          <span>{isCategoryOpen ? <AiOutlineUp /> : <AiOutlineDown />}</span>
        </button>
        {isCategoryOpen && (
          <ul className="space-y-2">
            {(showAllCategories ? allCategories : allCategories.slice(0, 4)).map((category, index) => (
              <li key={index} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={`category-${index}`}
                  className="mr-2"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                />
                <label htmlFor={`category-${index}`} className="text-gray-600">
                  {category}
                </label>
              </li>
            ))}
            <li>
              <button 
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-blue-500 hover:text-blue-600"
              >
                {showAllCategories ? 'Show less' : 'See all'}
              </button>
            </li>
          </ul>
        )}
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Brands Section */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown(setBrandsOpen, isBrandsOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 mb-4"
        >
          Brands
          <span>{isBrandsOpen ? <AiOutlineUp className='text-base' /> : <AiOutlineDown className='text-base'/>}</span>
        </button>
        {isBrandsOpen && (
          <ul className="space-y-2">
            {(showAllBrands ? allBrands : allBrands.slice(0, 5)).map((brand, index) => (
              <li key={index} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={`brand-${index}`}
                  className="mr-2"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                />
                <label htmlFor={`brand-${index}`} className="text-gray-600">
                  {brand}
                </label>
              </li>
            ))}
            <li>
              <button 
                onClick={() => setShowAllBrands(!showAllBrands)}
                className="text-blue-500 hover:text-blue-600"
              >
                {showAllBrands ? 'Show less' : 'See all'}
              </button>
            </li>
          </ul>
        )}
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown(setFeaturesOpen, isFeaturesOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 mb-4"
        >
          Features
          <span>{isFeaturesOpen ? <AiOutlineUp className='text-base'/> : <AiOutlineDown className='text-base'/>}</span>
        </button>
        {isFeaturesOpen && (
          <ul className="space-y-2">
            {(showAllFeatures ? allFeatures : allFeatures.slice(0, 5)).map((feature, index) => (
              <li key={index} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={`feature-${index}`}
                  className="mr-2"
                  checked={filters.features.includes(feature)}
                  onChange={() => handleFeatureToggle(feature)}
                />
                <label htmlFor={`feature-${index}`} className="text-gray-600">
                  {feature}
                </label>
              </li>
            ))}
            <li>
              <button 
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="text-blue-500 hover:text-blue-600"
              >
                {showAllFeatures ? 'Show less' : 'See all'}
              </button>
            </li>
          </ul>
        )}
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown(setPriceRangeOpen, isPriceRangeOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 mb-4"
        >
          Price Range
          <span>{isPriceRangeOpen ? <AiOutlineUp className='text-base' /> : <AiOutlineDown className='text-base' />}</span>
        </button>

        {isPriceRangeOpen && (
          <div>
            <div className="relative mb-4">
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={localPriceRange.min}
                onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto"
                style={{ zIndex: 2 }}
              />
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={localPriceRange.max}
                onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto"
                style={{ zIndex: 2 }}
              />

              <div className="relative h-1 bg-gray-200 rounded-full">
                <div
                  className="absolute h-1 bg-blue-500 rounded-full"
                  style={{
                    left: `${(localPriceRange.min / 1000) * 100}%`,
                    right: `${100 - (localPriceRange.max / 1000) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-col items-center">
                <label className="text-gray-600 text-sm">Min</label>
                <input
                  type="number"
                  min="0"
                  max="1000"
                  step="10"
                  value={localPriceRange.min}
                  onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                  className="w-24 px-2 py-1 border rounded text-center"
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-gray-600 text-sm">Max</label>
                <input
                  type="number"
                  min="0"
                  max="1000"
                  step="10"
                  value={localPriceRange.max}
                  onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                  className="w-24 px-2 py-1 border rounded text-center"
                />
              </div>
            </div>

            <button
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={applyPriceRange}
            >
              Apply
            </button>
          </div>
        )}

        <hr className="my-4 border-gray-300" />
      </div>

      {/* Condition Section */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown(setConditionOpen, isConditionOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 mb-4"
        >
          Condition
          <span>{isConditionOpen ? <AiOutlineUp className='text-base' /> : <AiOutlineDown className='text-base' />}</span>
        </button>
        {isConditionOpen && (
          <ul className="space-y-2">
            <li className="flex items-center">
              <input 
                type="radio" 
                id="any" 
                name="condition" 
                className="mr-2" 
                checked={filters.condition === null}
                onChange={() => handleConditionChange(null)}
              />
              <label htmlFor="any" className="text-gray-600">
                Any
              </label>
            </li>
            <li className="flex items-center">
              <input 
                type="radio" 
                id="refurbished" 
                name="condition" 
                className="mr-2" 
                checked={filters.condition === 'refurbished'}
                onChange={() => handleConditionChange('refurbished')}
              />
              <label htmlFor="refurbished" className="text-gray-600">
                Refurbished
              </label>
            </li>
            <li className="flex items-center">
              <input 
                type="radio" 
                id="brand-new" 
                name="condition" 
                className="mr-2" 
                checked={filters.condition === 'brand-new'}
                onChange={() => handleConditionChange('brand-new')}
              />
              <label htmlFor="brand-new" className="text-gray-600">
                Brand new
              </label>
            </li>
            <li className="flex items-center">
              <input 
                type="radio" 
                id="old-items" 
                name="condition" 
                className="mr-2" 
                checked={filters.condition === 'old-items'}
                onChange={() => handleConditionChange('old-items')}
              />
              <label htmlFor="old-items" className="text-gray-600">
                Old items
              </label>
            </li>
          </ul>
        )}
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Ratings Section */}
      <div className="mb-6">
        <button
          onClick={() => setIsRatingsOpen(!isRatingsOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 mb-4"
        >
          Ratings
          <span>{isRatingsOpen ? <AiOutlineUp className='text-base' /> : <AiOutlineDown className='text-base' />}</span>
        </button>

        {isRatingsOpen && (
          <ul className="space-y-2">
            {[5, 4, 3, 2].map((rating) => (
              <li key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  className="mr-3 w-5 h-5 accent-blue-500"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                />
                <label htmlFor={`rating-${rating}`} className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={`text-xl ${
                          index < rating ? 'text-orange-500' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                </label>
              </li>
            ))}
          </ul>
        )}
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Manufacturer Section */}
      <div className="mb-6">
        <button
          onClick={() => toggleDropdown(setManufacturerOpen, isManufacturerOpen)}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 mb-4"
        >
          Manufacturer
          <span>{isManufacturerOpen ? <AiOutlineUp className='text-base' /> : <AiOutlineDown className='text-base' />}</span>
        </button>
        {isManufacturerOpen && (
          <ul className="space-y-2">
            {(showAllManufacturers ? allManufacturers : allManufacturers.slice(0, 2)).map((manufacturer, index) => (
              <li key={index} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={`manufacturer-${index}`}
                  className="mr-2"
                  checked={filters.manufacturers.includes(manufacturer)}
                  onChange={() => handleManufacturerToggle(manufacturer)}
                />
                <label htmlFor={`manufacturer-${index}`} className="text-gray-600">
                  {manufacturer}
                </label>
              </li>
            ))}
            <li>
              <button 
                onClick={() => setShowAllManufacturers(!showAllManufacturers)}
                className="text-blue-500 hover:text-blue-600"
              >
                {showAllManufacturers ? 'Show less' : 'See all'}
              </button>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;