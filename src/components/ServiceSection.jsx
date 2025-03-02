import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const services = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
];

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const gridVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const ServicesSection = () => {
  return (
    <section className="bg-sky-900 py-16 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-14">
      <motion.div 
        className="md:w-1/2 space-y-6"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // triggers animation on scroll
      >
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-orange-500">Skincare Solutions</span>
        </h2>
        <p className="text-gray-100">
          Experience **science-backed skincare** designed to nourish, hydrate, and revitalize your skin for a healthy, radiant glow.
        </p>
        <h3 className="text-xl font-semibold text-orange-500">
          Personalized Care for Every Skin Type
        </h3>
        <p className="text-gray-100">
          From **deep hydration to anti-aging treatments**, our products are formulated to enhance your skin’s natural beauty and promote long-lasting health.
        </p>
        <motion.button 
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Products ✨
        </motion.button>
      </motion.div>

      <motion.div 
        className="md:w-1/2 grid grid-cols-2 gap-6 mt-10 md:mt-0 relative"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // animation triggers on each scroll
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={`transition flex items-center justify-center bg-white p-1 rounded-xl shadow-lg hover:shadow-2xl ${index === 4 ? 'col-span-2 flex justify-center' : ''}`}
            whileHover={{ scale: 1.05 }}
          >
            <img src={service.img} alt={`Service ${index + 1}`} className="rounded-lg h-48 w-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
