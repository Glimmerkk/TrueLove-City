import React from "react";

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                ❤️ TrueLoveCity
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/browse" className="px-3 py-2 text-gray-300 hover:text-pink-400 transition">
                Browse Profiles
              </a>
              <a href="/security-policy" className="px-3 py-2 text-gray-300 hover:text-pink-400 transition">
                Security Policy
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-gray-300">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-16">

        {/* Hero Section */}
        <section className="px-4 pt-12 pb-10 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 text-pink-300 px-4 py-2 text-sm font-semibold">
              Trust & Safety
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              Security policies that protect every connection
            </h1>

            <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-3xl">
              We built TrueLoveCity to be a safe, respectful place to meet. These
              policies explain how we keep users protected and what you can expect
              from every date.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm">
                Verified profiles
              </span>
              <span className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm">
                Secure messaging
              </span>
              <span className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm">
                Transparent fee
              </span>
            </div>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Profile authenticity</h2>
              <p className="mt-3 text-gray-300">
                We review profiles for consistency and remove suspicious activity.
                Users who violate our standards are suspended to keep the
                community trustworthy.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Private, secure messaging</h2>
              <p className="mt-3 text-gray-300">
                Your conversations stay inside the platform. We monitor for abusive
                behavior and provide fast reporting tools to keep chat respectful.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Date facilitation fee</h2>
              <p className="mt-3 text-gray-300">
                We charge <span className="text-pink-400 font-semibold">$100 USD</span> to
                facilitate each date. This supports verification, safety tools,
                and coordination.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Safety-first meetups</h2>
              <p className="mt-3 text-gray-300">
                We encourage public first meetings, clear boundaries, and respectful
                behavior. Report any concerns immediately.
              </p>
            </div>

          </div>
        </section>

        {/* Support Section */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold">
              Need help or want to report something?
            </h2>

            <p className="mt-3 text-gray-300">
              Our safety team is here to assist you. Use the in-app report button
              or reach out through support and we will prioritize your case.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                24/7 Support Coverage
              </span>
              <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg text-sm">
                Response within 24 hours
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 text-center text-gray-400">
        <p>© 2024 LoveConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}