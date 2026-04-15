import { Link } from "react-router-dom";

export default function Bella() {
  const bella = {
    name: "Bella Martinez",
    age: 28,
    occupation: "Graphic Designer",
    telegram: "https://t.me/Quenjane2?text=Hi%20Bella",
    about: "Creative soul who loves art, food, and exploring new places.",
    interests: ["Art", "Music", "Food", "Museums"],
    images: [
      "/images/bella/bella1.jpg",
      "/images/bella/bella2.jpg",
      "/images/bella/bella3.jpg",
      "/images/bella/bella4.jpg",
      "/images/bella/bella5.jpg",
      "/images/bella/bella6.jpg",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Top bar */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <Link to="/browse" className="text-gray-300 hover:text-white">
          ← Back
        </Link>
        <h1 className="font-bold text-xl">Profile</h1>
        <div></div>
      </div>

      <div className="max-w-5xl mx-auto p-4">

        {/* Hero */}
        <div className="relative mb-6">
          <img
            src={bella.images[0]}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black p-4 rounded-b-lg">
            <h2 className="text-2xl font-bold">
              {bella.name}, {bella.age}
            </h2>
            <p className="text-gray-300">{bella.occupation}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">About</h3>
              <p className="text-gray-300">{bella.about}</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {bella.interests.map((item, i) => (
                  <span
                    key={i}
                    className="bg-pink-500/20 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Gallery</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {bella.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-full h-40 object-cover rounded-lg hover:opacity-80"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Connect</h3>

              <a href={bella.telegram} target="_blank">
                <button className="w-full bg-pink-500 py-3 rounded-lg hover:bg-pink-600">
                  Ask for a Date ❤️
                </button>
              </a>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Details</h3>

              <div className="text-gray-300 space-y-2">
                <div className="flex justify-between">
                  <span>Occupation:</span>
                  <span className="text-white">{bella.occupation}</span>
                </div>

                <div className="flex justify-between">
                  <span>Age:</span>
                  <span className="text-white">{bella.age}</span>
                </div>

                <div className="flex justify-between">
                  <span>Interests:</span>
                  <span className="text-white">
                    {bella.interests.length}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}