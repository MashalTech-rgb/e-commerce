import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed Email:", email);
      alert(`You have subscribed with: ${email}`);
      setEmail(""); // Clear input after submission
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4 flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold mb-2">
        Subscribe on our newsletter
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      {/* Form */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-md bg-white">
        <div className="px-3 text-gray-500">
          <FaEnvelope />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 outline-none text-gray-700"
        />
        <button
          className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 transition-colors"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
