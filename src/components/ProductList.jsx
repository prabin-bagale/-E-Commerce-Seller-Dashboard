import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await apiClient.put(`/products/${id}`, editProduct);
      setProducts(products.map((p) => (p.id === id ? { ...p, ...editProduct } : p)));
      alert('Product updated successfully!');
      setEditProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
            {editProduct?.id === product.id ? (
              <div>
                <input
                  type="text"
                  value={editProduct.title}
                  onChange={(e) => setEditProduct({ ...editProduct, title: e.target.value })}
                  className="border p-2 w-full mb-2"
                />
                <button
                  onClick={() => handleUpdate(product.id)}
                  className="bg-green-500 text-white p-2 rounded mr-2"
                >
                  Save
                </button>
                <button onClick={() => setEditProduct(null)} className="bg-gray-400 text-white p-2 rounded">
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p>${product.price}</p>
                <button
                  onClick={() => setEditProduct(product)}
                  className="bg-blue-500 text-white p-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
