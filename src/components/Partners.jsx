import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-gray-100 py-16 px-6 md:px-16 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl flex flex-col md:flex-row items-center md:items-start bg-white p-10 rounded-2xl shadow-xl relative"
      >
        {/* Decorative Element */}
        <motion.div 
          className="absolute top-4 left-4 h-3 w-12 bg-sky-900" 
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        {/* Text Content */}
        <motion.div 
          className="md:w-3/5"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            We are <span className="text-sky-800">Ace Beauty Lab Partners</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            As an official partner, we bring innovative skincare solutions powered by science and nature. 
            Our mission is to revolutionize skincare with clinically proven ingredients and advanced 
            formulations that ensure healthy, radiant skin.
          </p>
        </motion.div>

        {/* Logo/Badge Section */}
        <motion.div 
          className="md:w-2/5 flex justify-center md:justify-end mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a href="#" target="_blank" className="hover:scale-105 transition transform duration-300">
            <img 
              src="https://cynosuredesigns.co.uk/img/PartnerBadgeClickable.svg" 
              alt="Ace Beauty Lab Partner" 
              className="w-32 h-auto drop-shadow-lg"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Partners;