import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';
import ProductData from './components/ProductData';

 
const App =() =>{
 
  return (
    
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/productlist" element={<ProductData />} />
        </Routes>
      </AuthProvider>
    </Router>

  );
}

export default App;