import React from "react";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <motion.div
      className="text-center p-8 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website!</h1>
      <p className="text-gray-700 mb-6">
        We're glad to have you here. Explore our features and get started on your journey with us.
      </p>
      <motion.button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert('Getting Started!')}
      >
        Get Started
      </motion.button>
    </motion.div>
  </div>
  );
};

export default Home;