import React from "react";
import "./CategoryFilter.css";

const categories = ["All", "Electronics", "Clothing", "Footwear"];

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
