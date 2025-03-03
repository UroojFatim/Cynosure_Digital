import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bodycoutouring from "../assets/Providers/Body-Contouring.png";
import cellulite from "../assets/Providers/Cellulite.png";
import hairremoval from "../assets/Providers/Hair-Removal.png";
import skinrevitalization from "../assets/Providers/Skin-Revitalization.png";
import surgical from "../assets/Providers/Surgical.png";
import tattoremoval from "../assets/Providers/Tattoo-Removal.png";
import womenshealth from "../assets/Providers/Womens-Health.png";

// Define categories
const categories = [
  {
    name: "Body Contouring",
    description:
      "Body image will always be a high priority. Help patients target problem areas and achieve their desired shape.",
    image: bodycoutouring,
  },
  {
    name: "Cellulite Treatments",
    description:
      "Help patients feel good about the body they're in with Cynosure Lutronic's state-of-the-art cellulite treatment technology.",
    image: cellulite,
  },
  {
    name: "Hair Removal",
    description:
      "Hair removal makes up more than 40% of all non-invasive treatments—see how our innovations give you an edge.",
    image: hairremoval,
  },
  {
    name: "Skin Revitalization",
    description:
      "With over $390m¹ spent in 2017, learn how we're leading the way with light-based laser technology.",
    image: skinrevitalization,
  },
  {
    name: "Tattoo Removal",
    description:
      "From permanent to gone—help patients remove unwanted body ink with Cynosure Lutronic's leading-edge technologies.",
    image: tattoremoval,
  },
  {
    name: "Surgical",
    description:
      "Advanced RF technology delivering precise incisions and excellent cosmetic results.",
    image: surgical,
  },
  {
    name: "Women's Health",
    description: "An innovative, laser technology for gynecologic use.",
    image: womenshealth,
  },
];

const ProviderProduct = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] px-6 md:px-12 py-16">
      {/* Page Heading with Animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Products by Type
      </motion.h2>

      {/* Grid Layout with Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.3 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Link
              to={`/for-providers/${category.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="group relative overflow-hidden rounded-xl shadow-xl bg-white"
            >
              {/* Image Section */}
              <div className="relative w-full h-60">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-50 transition-all"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-all">
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProviderProduct;
