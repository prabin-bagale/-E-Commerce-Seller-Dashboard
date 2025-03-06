import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default Dashboard;