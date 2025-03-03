import React from "react";

const categories = [
  {
    name: "Body Contouring",
    products: [
      {
        title: "CoolSculpting",
        image: "https://www.cynosure.com/wp-content/uploads/2018/09/Cellulaze_Thumbnail.png",
        description: "A non-invasive procedure to reduce fat layers."
      },
      {
        title: "Ultrasound Therapy",
        image: "/images/ultrasound.jpg",
        description: "Uses ultrasound waves to tighten the skin."
      },
      {
        title: "Cryolipolysis",
        image: "/images/cryolipolysis.jpg",
        description: "Fat freezing technology for body contouring."
      },
      {
        title: "Radiofrequency Therapy",
        image: "/images/radiofrequency.jpg",
        description: "Stimulates collagen production and reduces fat."
      },
      {
        title: "Laser Lipolysis",
        image: "/images/laser-lipo.jpg",
        description: "A laser-based fat reduction technique."
      },
      {
        title: "EMSculpt",
        image: "/images/emsculpt.jpg",
        description: "Enhances muscle tone while reducing fat."
      }
    ]
  },
  {
    name: "Hair Removal",
    products: [
      {
        title: "Laser Hair Removal",
        image: "/images/laser-hair.jpg",
        description: "A safe and effective way to remove unwanted hair."
      },
      {
        title: "IPL Treatment",
        image: "/images/ipl.jpg",
        description: "Intense Pulsed Light therapy for smooth skin."
      }
    ]
  },
  // Other categories can be updated similarly...
];

const CategoryProducts = ({ categoryName }) => {
  const selectedCategory = categories.find(
    (cat) => cat.name.replace(/\s+/g, "-").toLowerCase() === categoryName
  );

  return (
    <main className="w-3/4 p-8">
      <h2 className="text-3xl font-bold">{selectedCategory?.name} Products</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedCategory?.products.map((product, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryProducts;
