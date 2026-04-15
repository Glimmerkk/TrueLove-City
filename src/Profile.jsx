import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no data (refresh case)
  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">No profile selected</h1>
        <button
          onClick={() => navigate("/browse")}
          className="mt-4 bg-pink-500 px-6 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* MAIN CARD */}
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">

          {/* IMAGE */}
          <img
            src={state.image}
            alt={state.name}
            className="w-full h-96 object-cover"
          />

          {/* CONTENT */}
          <div className="p-6">

            {/* NAME */}
            <h1 className="text-3xl font-bold">
              {state.name}, {state.age}
            </h1>

            {/* BIO */}
            <p className="text-gray-300 mt-3">
              {state.bio}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {state.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">

              {/* TELEGRAM */}
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
              >
                Chat on Telegram
              </a>

              {/* BACK */}
              <button
                onClick={() => navigate(-1)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg"
              >
                Back
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}