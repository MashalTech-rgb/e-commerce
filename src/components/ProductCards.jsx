import { useState } from "react";
import { FaStar, FaRegComment, FaShoppingCart, FaBox, FaCheckCircle, FaGlobeAmericas, FaEnvelope, FaUserAlt, FaRegBookmark } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const ProductCard = () => {
  const product = {
    name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    priceTiers: [
      { price: 98, range: "50-100 pes" },
      { price: 90, range: "100-700 pes" },
      { price: 78, range: "700+ pes" },
    ],
    stockStatus: "In stock",
    rating: 5,
    reviews: 32,
    sold: 154,
    details: {
      type: "Classic shoes",
      material: "Plastic material",
      design: "Modern nice",
      customization: "Customized logo and design custom packages",
      protection: "Refund Policy",
      warranty: "2 years full warranty"
    },
    images: [
      "/assets/images/image34.png",
      "/assets/images/image40.png",
      "/assets/images/image36.png",
      "/assets/images/image37.png",
      "/assets/images/image39.png",
    ],
    supplier: {
      name: "Guanjoi Trading LLC",
      location: "Germany, Berlin",
      verified: true,
      shipping: "Worldwide shipping",
    },
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="p-6 max-w-6xl mx-auto border rounded-lg shadow bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - Image Gallery */}
        <div className="w-full md:w-1/4">
          <div className="border rounded-lg p-2">
            <img 
              src={selectedImage} 
              alt="Product" 
              className="w-full h-72 object-contain"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <div 
                key={index}
                className={`w-16 h-16 cursor-pointer border rounded p-1 ${
                  selectedImage === img ? 'border-blue-500 border-2' : 'border-gray-300'
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Product Details */}
        <div className="w-full md:w-2/4">
          <span className="text-green-700 font-medium"> ✓ {product.stockStatus}</span>
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          
          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>
            <span className="text-yellow-500">9.3</span>
            <span className="text-gray-400">●</span>
            <span className="flex items-center">
              <FaRegComment className="mr-1 text-gray-400" /> {product.reviews} reviews
            </span>
            <span className="text-gray-400">●</span>
            <span className="flex items-center">
              <FaShoppingCart className="mr-1 text-gray-400" /> {product.sold} sold
            </span>
          </div>
          
          {/* Pricing Table */}
          <div className="bg-orange-100 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              {product.priceTiers.map((tier, index) => (
                <div key={index}>
                  <p className="text-red-600 font-bold text-lg">${tier.price.toFixed(2)}</p>
                  <p className="text-gray-600 text-sm">{tier.range}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <p><strong>Price:</strong> Negotiable</p>
          </div>
          
          <hr className="my-4 border-t border-gray-300" />
          
          {/* Product Info */}
          <div className="grid grid-cols-5 gap-1 mt-4 text-gray-500">
            <div className="col-span-2 space-y-2">
              <p>Type:</p>
              <p>Material:</p>
              <p>Design:</p>
              <hr className="my-3 border-t border-gray-300 w-full" />
              <p>Customization:</p>
              <p>Protection:</p>
              <p>Warranty:</p>
            </div>
            <div className="col-span-3 space-y-2">
              <p className="text-gray-800">{product.details.type}</p>
              <p className="text-gray-800">{product.details.material}</p>
              <p className="text-gray-800">{product.details.design}</p>
              <hr className="my-3 border-t border-gray-300 w-full" />
              <p className="text-gray-800">{product.details.customization}</p>
              <p className="text-gray-800">{product.details.protection}</p>
              <p className="text-gray-800">{product.details.warranty}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Supplier Info */}
        <div className="w-full md:w-1/4">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="flex items-center">
              <FaBox className="text-gray-500 mr-1 text-sm" />
              <p className="text-gray-500 text-sm">Supplier</p>
            </div>
            <p className="font-medium mt-1">{product.supplier.name}</p>
            
            <hr className="my-3 border-t border-gray-300" />
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="mr-2 flex items-center">
                  <div className="relative w-4 h-4">
                    <div className="absolute top-0 w-full h-1/3 bg-black"></div>
                    <div className="absolute top-1/3 w-full h-1/3 bg-red-600"></div>
                    <div className="absolute bottom-0 w-full h-1/3 bg-yellow-400"></div>
                  </div>
                </div>
                <span>{product.supplier.location}</span>
              </div>
              
              {product.supplier.verified && (
                <div className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-600" />
                  <span className="text-green-600">Verified Seller</span>
                </div>
              )}
              
              <div className="flex items-center">
                <FaGlobeAmericas className="mr-2 text-gray-500" />
                <span>{product.supplier.shipping}</span>
              </div>
            </div>
            
            <hr className="my-4 border-t border-gray-300" />
            
            <div className="space-y-2">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full text-sm flex items-center justify-center">
                <FaEnvelope className="mr-2" />
                Send inquiry
              </button>
              <button className="border text-blue-600 border-gray-300 py-2 px-4 rounded hover:bg-gray-100 w-full text-sm flex items-center justify-center">
                <FaUserAlt className="mr-2" />
                Seller's profile
              </button>
            </div>
          </div>
          <button className="text-blue-600 py-2 px-4 rounded w-full text-sm flex items-center justify-center">
                <FaRegBookmark className="mr-2" />
                Save for later
              </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;