import React from "react";
import { useNavigate } from "react-router-dom";

function Sofia() {
  const navigate = useNavigate();

  const images = [
    "/images/sofia/sofia1.jpg",
    "/images/sofia/sofia2.jpg",
    "/images/sofia/sofia3.jpg",
    "/images/sofia/sofia4.jpg",
    "/images/sofia/sofia5.jpg",
    "/images/sofia/sofia6.jpg",
    "/images/sofia/sofia7.jpg",
    "/images/sofia/sofia8.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* HEADER */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          <button
            onClick={() => navigate(-1)}
            className="text-gray-300 hover:text-white"
          >
            ← Back
          </button>

          <h1 className="text-xl font-bold">Profile</h1>

          <div className="w-6"></div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* HERO IMAGE */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="relative h-72">
            <img
              src={images[0]}
              alt="Sofia Lopez"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h2 className="text-3xl font-bold">Sofia Lopez, 27</h2>
              <p className="text-gray-300">Traveler & Food Explorer</p>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* ABOUT */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p className="text-gray-300">
                Traveler and foodie exploring the world. I love discovering new cultures, cuisines, and hidden gems.
              </p>
            </div>

            {/* INTERESTS */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Travel", "Food", "Culture"].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-pink-500/20 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* GALLERY */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Gallery</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden hover:opacity-80"
                  >
                    <img
                      src={img}
                      alt={`Sofia ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            
            {/* BUTTON */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <button className="w-full py-3 bg-pink-500 rounded-lg hover:bg-pink-600">
                Ask for a Date
              </button>
            </div>

            {/* DETAILS */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Details</h3>

              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Age:</span>
                  <span className="text-white">27</span>
                </div>

                <div className="flex justify-between">
                  <span>Interests:</span>
                  <span className="text-white">3</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sofia;