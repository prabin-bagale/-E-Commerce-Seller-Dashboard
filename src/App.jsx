import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import necessary modules
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient(); // Create a new QueryClient instance

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}> {/* Wrap your app with QueryClientProvider */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;