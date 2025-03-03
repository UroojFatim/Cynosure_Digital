import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile toggle

const categories = [
  "All",
  "Body Contouring",
  "Cellulite Treatments",
  "Dental",
  "Hair Removal",
  "Hyperhidrosis",
  "Jawline Contouring",
  "Skin Revitalization",
  "Skincare",
  "Surgical",
  "Tattoo Removal",
  "Treatment Enhancement",
  "Vein Treatments",
  "Veterinary",
  "Women's Health",
];

const CategorySidebar = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden flex items-center px-4 py-2 bg-orange-500 text-white rounded-md fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        <span className="ml-2">{isOpen ? "Close" : "Categories"}</span>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 w-64 md:w-1/4 bg-white p-6 h-full shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-4 text-orange-500 border-b pb-2">Categories</h3>
        <ul className="">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(
                  category === "All"
                    ? "/for-providers"
                    : `/for-providers/${category.replace(/\s+/g, "-").toLowerCase()}`
                );
                setIsOpen(false); // Close sidebar on mobile after selection
              }}
              className={`cursor-pointer p-2 rounded-lg transition-all text-lg font-medium ${
                category === selectedCategory
                  ? "bg-orange-500 text-white font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default CategorySidebar;
