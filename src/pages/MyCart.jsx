import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ShoppingCart from '../components/shoppingcart'
import RelatedProducts from '../components/RelatedProduct'
import { FaLock, FaHeadset, FaTruck } from "react-icons/fa";

const MyCart = () => {
  const features = [
    {
      icon: <FaLock className="text-blue-600" size={20} />,
      title: "Secure payment",
      description: "Have you ever finally just"
    },
    {
      icon: <FaHeadset className="text-blue-600" size={20} />,
      title: "Customer support",
      description: "Have you ever finally just"
    },
    {
      icon: <FaTruck className="text-blue-600" size={20} />,
      title: "Free delivery",
      description: "Have you ever finally just"
    }
  ];

  return (
    <div>
      <Header/>
      <ShoppingCart/>
      <div className="max-w-6xl mx-auto px-2 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 ">
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-sm  text-gray-900">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}

export default MyCart
