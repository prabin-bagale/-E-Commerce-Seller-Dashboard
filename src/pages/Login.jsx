import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Invalid username or password!');
      return;
    }
  
    login(username, password).catch(() => {
      setError('Invalid username or password!');
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Animated login form container */}
      <motion.form
        onSubmit={handleSubmit}
        className="p-8 border rounded-lg shadow-lg bg-white w-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Input fields with animation */}
        <motion.input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-4 rounded focus:ring-2 focus:ring-blue-400"
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4 rounded focus:ring-2 focus:ring-blue-400"
          whileFocus={{ scale: 1.05 }}
          required
        />

        {/* Error Message with Shake Animation */}
        {error && (
  <motion.p
    className="text-red-500 mb-2 text-center"
    initial={{ x: 0 }}
    animate={{ x: [-10, 10, -10, 10, 0] }} // More natural shaking
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {error}
  </motion.p>
)}


        {/* Animated button */}
        <motion.button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full mt-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Login;
