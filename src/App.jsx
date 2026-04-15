import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import Browse from "./Browse";
import SecurityPolicy from "./SecurityPolicy";
import Profile from "./Profile"; // ✅ KEEP THIS

// ✅ ADD THESE IMPORTS
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
            <Link to="/security">Security</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/security" element={<SecurityPolicy />} />

          {/* ✅ KEEP EXISTING */}
          <Route path="/profile/:id" element={<Profile />} />

          {/* ✅ ADD THESE ROUTES ONLY */}
          <Route path="/anna" element={<Anna />} />
          <Route path="/bella" element={<Bella />} />
          <Route path="/sofia" element={<Sofia />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}