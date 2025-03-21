import React from 'react';

const ProductCard = ({ product }) => {
  const { image, title, description, price, discount } = product;
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={title} className="h-40 w-full object-cover mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2">
        <span className="text-gray-500 line-through">${price.toFixed(2)}</span>
        <span className="text-red-500 ml-2">${discountedPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
