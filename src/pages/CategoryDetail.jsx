import React from "react";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import CategorySidebar from "../components/CategorySidebar";
import CategoryProducts from "../components/CategoryProducts";
import ProviderBenefits from "../components/ProviderBenefits";
import Innovation from "../components/Innovation";

const CategoryDetail = () => {
  const { categoryName } = useParams();

  return (
    <div>
      {/* ✅ Placeholder for Hero Section */}
      <section className="relative bg-sky-950 text-white min-h-[50vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold capitalize">{categoryName.replace(/-/g, " ")}</h1>
        <p className="mt-2 text-lg text-gray-300">Explore our advanced treatments</p>
      
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </motion.div>

      
      </section>

      {/* ✅ Sidebar & Products Layout */}
      <div className="flex">
        <CategorySidebar selectedCategory={categoryName.replace(/-/g, " ")} />
        <CategoryProducts categoryName={categoryName} />
      </div>
      <ProviderBenefits/>
      <Innovation/>
    </div>
  );
};

export default CategoryDetail;
