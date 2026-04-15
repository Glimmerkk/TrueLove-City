import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">

      {/* HERO SECTION */}
      <section>
        <div className="relative w-full overflow-hidden bg-gray-950">
          <div
            className="h-[420px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/loversKissing-MtlkN1XW.jpg')" }}
          ></div>

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-4xl px-6">
              <h1 className="text-4xl text-white font-bold">
                Find a real connection, not just a swipe.
              </h1>

              <p className="text-gray-300 mt-4">
                Curated profiles and meaningful matches.
              </p>

              <a
                href="/browse"
                className="inline-block mt-6 bg-pink-500 px-6 py-3 rounded-full text-white"
              >
                Browse Profiles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 px-4">
        <h2 className="text-white text-2xl text-center mb-6">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-white">Step 1</h3>
            <p className="text-gray-400 text-sm">
              Choose your match
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-white">Step 2</h3>
            <p className="text-gray-400 text-sm">
              Book your experience
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-white">Step 3</h3>
            <p className="text-gray-400 text-sm">
              Confirm details
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-white">Step 4</h3>
            <p className="text-gray-400 text-sm">
              Meet & enjoy
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;