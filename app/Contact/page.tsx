import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
      <div className="w-full max-w-3xl bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-300 text-center mb-8">
          Have questions or want to know more? Fill out the form and we’ll get
          back to you soon.
        </p>

        {/* Form */}
        <form className="space-y-4 sm:space-y-6" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-lg bg-black text-white border border-gray-700 hover:bg-gray-800 transition font-semibold text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Email: support@academy.com</p>
          <p>Phone: +91 9999977777</p>
        </div>
      </div>
    </div>
  );
}

