import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profiles } from "./data";

export default function Profile() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ FIXED: supports BOTH id and name routes
  const profileFromData = profiles.find(
    (p) =>
      p.id === Number(id) ||
      p.name.toLowerCase() === id.toLowerCase()
  );

  const profile = state || profileFromData;

  if (!profile) {
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

        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">

          <img
            src={profile.image || profile.images?.[0]}
            alt={profile.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-6">

            <h1 className="text-3xl font-bold">
              {profile.name}, {profile.age}
            </h1>

            <p className="text-gray-300 mt-3">
              {profile.bio || profile.about}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {(profile.tags || profile.interests)?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">

              <a
                href={profile.telegram || "https://t.me/yourusername"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
              >
                Chat on Telegram
              </a>

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