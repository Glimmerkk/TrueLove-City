import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import Browse from "./Browse";
import SecurityPolicy from "./SecurityPolicy";
import Profile from "./Profile";

import Anna from "./Anna";
import Bella from "./Bella";
import Sofia from "./Sofia";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen text-white">

        {/* Navbar */}
        <nav className="bg-gray-800 p-4 flex justify-between">
          <h1 className="text-pink-500 text-xl font-bold">
            TrueLoveCity
          </h1>

          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/browse">Browse</Link>

            {/* ✅ FIX: route name must match */}
            <Link to="/security-policy">Security</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/browse" element={<Browse />} />

          {/* ✅ FIX: must match navbar link */}
          <Route path="/security-policy" element={<SecurityPolicy />} />

          {/* ✅ KEEP (optional if still used) */}
          <Route path="/profile/:id" element={<Profile />} />

          {/* Individual pages */}
          <Route path="/anna" element={<Anna />} />
          <Route path="/bella" element={<Bella />} />
          <Route path="/sofia" element={<Sofia />} />

          {/* ✅ OPTIONAL: fallback to prevent "Not Found" */}
          <Route path="*" element={<Hero />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}