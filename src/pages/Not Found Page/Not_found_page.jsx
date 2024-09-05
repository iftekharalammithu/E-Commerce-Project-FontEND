// src/Not_found_page.js
import React from "react";
import { Link } from "react-router-dom";

const Not_found_page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button className="px-8 py-4 bg-red-500 text-white text-lg rounded-full transition-transform transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Not_found_page;
