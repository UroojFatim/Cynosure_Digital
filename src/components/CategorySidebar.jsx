import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "All" },
  { name: "Body Contouring" },
  { name: "Cellulite Treatments" },
  { name: "Dental" },
  { name: "Hair Removal" },
  { name: "Hyperhidrosis" },
  { name: "Jawline Contouring" },
  { name: "Skin Revitalization" },
  { name: "Skincare" },
  { name: "Surgical" },
  { name: "Tattoo Removal" },
  { name: "Treatment Enhancement" },
  { name: "Vein Treatments" },
  { name: "Veterinary" },
  { name: "Women's Health" }
];

const CategorySidebar = ({ selectedCategory }) => {
  const navigate = useNavigate();

  return (
    <aside className="w-1/4 bg-white p-4 h-full border-r">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() =>
              navigate(
                category.name === "All"
                  ? "/for-providers"
                  : `/for-providers/${category.name.replace(/\s+/g, "-").toLowerCase()}`
              )
            }
            className={`cursor-pointer p-2 rounded-lg transition-all ${
              category.name === selectedCategory
                ? "bg-orange-500 text-white font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
