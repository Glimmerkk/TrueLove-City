import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleReserve = (person) => {
    if (person.name === "Anna") navigate("/anna");
    else if (person.name === "Bella") navigate("/bella");
    else navigate(`/profile/${person.name}`, { state: person }); // ✅ FIXED
  };

  return (
    <section>
      <div className="relative w-full overflow-hidden border border-white/10 bg-gray-950 shadow-2xl">
        
        {/* HERO BACKGROUND */}
        <div
          className="relative h-[420px] md:h-[520px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Find a real connection, not just a swipe.
              </h1>
              <p className="mt-4 text-gray-300">
                Curated profiles, verified photos, and meaningful matches.
              </p>

              <Link
                to="/browse"
                className="inline-block mt-6 bg-pink-500 px-6 py-3 rounded-full text-white hover:bg-pink-600"
              >
                Browse Profiles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="py-16 px-4 bg-gray-900">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-10">
          Recommended connections
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-gray-700 rounded-xl overflow-hidden">
            <img
              src="/images/anna/anna1.jpg"
              alt="Anna"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold">Anna, 26</h3>
              <button
                onClick={() =>
                  handleReserve({
                    name: "Anna",
                    age: 26,
                    image: "/images/anna/anna1.jpg",
                  })
                }
                className="mt-3 w-full bg-pink-500 py-2 rounded"
              >
                Book Date
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-700 rounded-xl overflow-hidden">
            <img
              src="/images/bella/bella1.jpg"
              alt="Bella"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold">Bella, 28</h3>
              <button
                onClick={() =>
                  handleReserve({
                    name: "Bella",
                    age: 28,
                    image: "/images/bella/bella1.jpg",
                  })
                }
                className="mt-3 w-full bg-pink-500 py-2 rounded"
              >
                Book Date
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-700 rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
              alt="Olivia"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold">Olivia, 25</h3>
              <button
                onClick={() =>
                  handleReserve({
                    name: "Olivia",
                    age: 25,
                    image:
                      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
                  })
                }
                className="mt-3 w-full bg-gray-500 py-2 rounded"
              >
                Booked
              </button>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-gray-700 rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"
              alt="Ava"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold">Ava, 29</h3>
              <button
                onClick={() =>
                  handleReserve({
                    name: "Ava",
                    age: 29,
                    image:
                      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
                  })
                }
                className="mt-3 w-full bg-gray-500 py-2 rounded"
              >
                Booked
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}