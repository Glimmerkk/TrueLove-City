import React from "react";
import { useNavigate } from "react-router-dom";

function Browse() {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Anna Yuri",
      age: 26,
      image: "/images/anna/anna1.jpg", // ✅ LOCAL
      bio: "Yoga instructor by day, bookworm by night.",
      tags: ["Yoga", "Reading", "Travel"],
      available: true,
    },
    {
      name: "Bella Martinez",
      age: 28,
      image: "/images/bella/bella1.jpg", // ✅ LOCAL
      bio: "Creative soul who loves art, music, and food.",
      tags: ["Art", "Music", "Food"],
      available: true,
    },
    {
      name: "Sofia Lopez",
      age: 27,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      bio: "Traveler and foodie exploring the world.",
      tags: ["Travel", "Food", "Culture"],
      available: true,
    },

    // ❌ BOOKED BELOW
    {
      name: "Olivia Chen",
      age: 25,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      bio: "Tech enthusiast and fitness junkie.",
      tags: ["Fitness", "Technology", "Hiking"],
      available: false,
    },
    {
      name: "Ava Johnson",
      age: 29,
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
      bio: "Marketing manager who loves coffee and beaches.",
      tags: ["Coffee", "Beach", "Dogs"],
      available: false,
    },
    {
      name: "Mia Anderson",
      age: 24,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      bio: "Fitness lover and outdoor adventurer.",
      tags: ["Fitness", "Hiking", "Nature"],
      available: false,
    },
    {
      name: "Emily Clark",
      age: 30,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      bio: "Photographer capturing life's moments.",
      tags: ["Photography", "Art", "Travel"],
      available: false,
    },
    {
      name: "Grace Kim",
      age: 26,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      bio: "Music lover and coffee enthusiast.",
      tags: ["Music", "Coffee", "Books"],
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <h1 className="text-3xl text-white text-center mb-8 font-bold">
        Nearby Girls
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={profile.image}
                className="w-full h-56 object-cover"
                alt={profile.name}
              />

              <div
                className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full text-white ${
                  profile.available ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {profile.available ? "Online" : "Booked"}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="text-white text-lg font-semibold">
                {profile.name}, {profile.age}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                {profile.bio}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-3">
                {profile.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  if (!profile.available) return;

                  if (profile.name === "Anna Yuri") navigate("/anna");
                  else if (profile.name === "Bella Martinez") navigate("/bella");
                  else if (profile.name === "Sofia Lopez") navigate("/sofia");
                }}
                className={`mt-4 w-full py-2 rounded-lg font-medium ${
                  profile.available
                    ? "bg-pink-500 hover:bg-pink-600"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
                disabled={!profile.available}
              >
                {profile.available ? "Reserve" : "Booked"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;