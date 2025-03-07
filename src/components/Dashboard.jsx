import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Analytics from './Analytics'; // Import Analytics
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>
        <button onClick={logout} className="bg-red-500 text-white p-2 rounded">Logout</button>
      </div>
      <ProductForm />
      <ProductList />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Analytics Dashboard</h2>
        <Analytics /> {/* Display Analytics Component */}
      </div>
    </div>
  );
};

export default Dashboard;