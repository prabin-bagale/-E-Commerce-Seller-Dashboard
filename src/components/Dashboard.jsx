import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Analytics from './Analytics';
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
      <Analytics />
    </div>
  );
};

export default Dashboard;