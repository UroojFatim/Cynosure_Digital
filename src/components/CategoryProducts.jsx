import React from "react";

const categories = [
  { name: "Body Contouring", products: ["CoolSculpting", "Ultrasound Therapy"] },
  { name: "Hair Removal", products: ["Laser Hair Removal", "IPL Treatment"] },
  { name: "Tattoo Removal", products: ["PicoSure Laser", "Q-Switch Laser"] },
  { name: "Surgical", products: ["Micro-Needling", "Skin Grafting"] },
  { name: "Women Health", products: ["Hormonal Therapy", "Skin Rejuvenation"] }
];

const CategoryProducts = ({ categoryName }) => {
  const selectedCategory = categories.find(
    (cat) => cat.name.replace(/\s+/g, "-").toLowerCase() === categoryName
  );

  return (
    <main className="w-3/4 p-8">
      <h2 className="text-3xl font-bold">{selectedCategory?.name} Products</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedCategory?.products.map((product, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{product}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryProducts;
