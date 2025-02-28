import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img1.jpg"; // Replace with your actual image path

const fadeInVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ReverseHeroSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-8 flex flex-col md:flex-row items-center justify-around gap-10">
      {/* Left Image Section */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <img src={img} alt="Treatment" className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:w-auto" />
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          CYNOSURE <span className="text-gray-600">LUTRONIC</span>
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Providers Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Providers</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Enhance your practice. Expand your services. And enjoy all the benefits of partnership.
            </p>
            <motion.button 
              className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              CLICK HERE
            </motion.button>
          </div>

          {/* Patients Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Patients</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Ready to find your beautiful? Get started today by locating a provider near you.
            </p>
            <motion.button 
              className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              CLICK HERE
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReverseHeroSection;
