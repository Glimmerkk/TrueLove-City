import { Link } from "react-router-dom";

export default function Anna() {
  const anna = {
    name: "Anna Yuri",
    age: 26,
    occupation: "Yoga Instructor",
    telegram: "https://t.me/Quenjane2?text=Hi%20Anna",
    about:
      "Yoga instructor by day, bookworm by night. I love meaningful conversations and spontaneous adventures.",
    interests: ["Yoga", "Reading", "Travel", "Cooking"],
    images: [
      "/images/anna/anna1.jpg",
      "/images/anna/anna2.jpg",
      "/images/anna/anna3.jpg",
      "/images/anna/anna4.jpg",
      "/images/anna/anna5.jpg",
      "/images/anna/anna6.jpg",
      "/images/anna/anna7.jpg",
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
            src={anna.images[0]}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black p-4 rounded-b-lg">
            <h2 className="text-2xl font-bold">
              {anna.name}, {anna.age}
            </h2>
            <p className="text-gray-300">{anna.occupation}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* About */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">About</h3>
              <p className="text-gray-300">{anna.about}</p>
            </div>

            {/* Interests */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {anna.interests.map((item, i) => (
                  <span
                    key={i}
                    className="bg-pink-500/20 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Gallery</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {anna.images.map((img, i) => (
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

            {/* Connect */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Connect</h3>

              <a href={anna.telegram} target="_blank">
                <button className="w-full bg-pink-500 py-3 rounded-lg hover:bg-pink-600">
                  Ask for a Date ❤️
                </button>
              </a>
            </div>

            {/* Details */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Details</h3>

              <div className="text-gray-300 space-y-2">
                <div className="flex justify-between">
                  <span>Occupation:</span>
                  <span className="text-white">{anna.occupation}</span>
                </div>

                <div className="flex justify-between">
                  <span>Age:</span>
                  <span className="text-white">{anna.age}</span>
                </div>

                <div className="flex justify-between">
                  <span>Interests:</span>
                  <span className="text-white">
                    {anna.interests.length}
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