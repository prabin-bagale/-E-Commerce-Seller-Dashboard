import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
