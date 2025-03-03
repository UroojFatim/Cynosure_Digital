import React from "react";
import { useParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import CategoryProducts from "../components/CategoryProducts";

const CategoryDetail = () => {
  const { categoryName } = useParams();

  return (
    <div>
      {/* ✅ Placeholder for Hero Section */}
      <section className="bg-sky-900 text-white py-12 text-center">
        <h1 className="text-4xl font-bold capitalize">{categoryName.replace(/-/g, " ")}</h1>
        <p className="mt-2 text-lg text-gray-300">Explore our advanced treatments</p>
      </section>

      {/* ✅ Sidebar & Products Layout */}
      <div className="flex">
        <CategorySidebar selectedCategory={categoryName.replace(/-/g, " ")} />
        <CategoryProducts categoryName={categoryName} />
      </div>
    </div>
  );
};

export default CategoryDetail;
    