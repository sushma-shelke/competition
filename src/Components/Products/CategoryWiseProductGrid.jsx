import React, { useState } from "react";
import ProductMainCategory from "./ProductMainCategory";
import ProductGrid from "./ProductGrid";

const CategoryWiseProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (category) => {
    console.log("category", category);
    setSelectedCategory(category);
  };
  return (
    <div>
      <ProductMainCategory onSelectCategory={handleSelectCategory} />
      {selectedCategory && <ProductGrid selectedCategory={selectedCategory} />}
    </div>
  );
};

export default CategoryWiseProductGrid;
