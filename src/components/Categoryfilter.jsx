import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Categories</h3>
      <ul className="space-y-2">
        <li
          className={`cursor-pointer ${!selectedCategory ? 'font-bold' : ''}`}
          onClick={() => onSelectCategory(null)}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer ${selectedCategory === category ? 'font-bold' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
