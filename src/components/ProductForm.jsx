import React, { useState } from 'react';
import apiClient from '../api/apiClient';

const ProductForm = () => {
  const [product, setProduct] = useState({ title: '', price: '', image: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/products', product);
      alert('Product added successfully!');
      setProduct({ title: '', price: '', image: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Product Title"
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        className="border p-2 rounded mr-2"
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        className="border p-2 rounded mr-2"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        className="border p-2 rounded mr-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Add Product</button>
    </form>
  );
};

export default ProductForm;