import React from 'react'
import CategoryFilter from './Categoryfilter';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';

const ProductData = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    useEffect(() => {
      // Fetch products from an API or local data source
      fetch('/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Received non-JSON response");
        }
        return response.json();
      })
      .then(data => {
        // Process your JSON data here
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    
  
    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  return (
    <div className="container mx-auto p-4">
    <div className="flex">
      <div className="w-1/4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProductData
