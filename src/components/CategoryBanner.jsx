import React, { useState } from "react";

const CategoryBanner = () => {
  const [user, setUser] = useState(null); // User state (null if not logged in)

  return (
    <div className="bg-white border rounded-lg p-4 shadow-lg max-w-6xl mx-auto my-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Sidebar - Categories */}
        <div className="md:col-span-2 border-r pr-4">
          <ul className="space-y-1 text-gray-700">
            <button className="w-full text-left font-semibold bg-blue-100 p-2 rounded hover:bg-blue-200 focus:outline-none">
              Automobiles
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              Clothes and wear
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              Home interiors
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              Computer and tech
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              Tools, equipments
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              Sports and outdoor
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              Animal and pets
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              Machinery tools
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-gray-100 focus:outline-none">
              More category
            </button>
          </ul>
        </div>

        {/* Main Banner */}
        <div
          className="md:col-span-7 flex flex-col rounded-lg p-14 relative text-black"
          style={{
            backgroundImage: "url('/assets/images/Banner-board-800x420 2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "full",
          }}
        >
          <h2 className="text-3xl  drop-shadow-lg">Latest trending</h2>
          <h1 className="text-4xl font-semibold drop-shadow-lg">Electronic items</h1>
          <button
            className="mt-4 bg-white hover:bg-slate-50 text-black px-2 py-2 rounded-lg shadow-lg w-40"
            style={{ alignSelf: "flex-start" }} // Align button to the left
          >
            Learn More
          </button>
        </div>

        {/* Right Sidebar - User Panel */}
        <div className="md:col-span-3 flex flex-col gap-4">
          {/* User Section */}
          <div className="bg-blue-100 p-4 rounded-lg">
  <div className="flex items-center gap-4"> {/* Flexbox for one row */}
    {/* Avatar Image */}
    <img
      src="/assets/images/Avatar.png"
      alt="User Avatar"
      className="w-12 h-12 rounded-full"
    />

    {/* Hi, User Section */}
    <div>
      {user ? (
        <p className="text-gray-700">Welcome, {user}!</p>
      ) : (
        <div>
          <p className="text-gray-700">Hi, user <br /> let’s get started</p>
        </div>
      )}
    </div>
  </div>

  {/* Buttons Section */}
  {!user && (
    <div className="flex flex-col gap-2 mt-4"> {/* Buttons in two rows */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        onClick={() => setUser("John Doe")}
      >
        Join now
      </button>
      <button className="border border-gray-500 px-4 py-2 rounded bg-white hover:bg-gray-200 transition-colors">
        Log in
      </button>
    </div>
  )}
</div>

          {/* Offers */}
          <div className="bg-orange-400 text-white p-4 rounded-lg ">
            Get US $10 off <br/>with a new <br/>supplier
          </div>
          <div className="bg-teal-400 text-white p-4 rounded-lg">
            Send quotes with <br/>supplier<br/> preferences
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;