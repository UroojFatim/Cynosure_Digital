import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/img1.jpg"; // Replace with your actual image path
import Button from "./Button";

const ReverseHeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-around gap-10 overflow-hidden relative"
    >
      {/* Left Image Section with Animation */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={img} alt="Skincare" className="rounded-lg shadow-2xl w-full max-w-xs sm:max-w-sm md:w-auto" />
      </motion.div>

      {/* Right Content Section with Animated Elements */}
      <motion.div
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          ACE BEAUTY LAB <span className="text-orange-500">INNOVATION</span>
        </h1>

        <div className="grid grid-cols-1 gap-10">
          {/* Skincare Experts Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Skincare Experts</h2>
            <p className="text-gray-600 text-sm sm:text-base my-4">
              Elevate your skincare routine with our scientifically formulated products for healthier, glowing skin.
            </p>
            <Button text={"DISCOVER MORE"} />
          </motion.div>

          {/* Personalized Skincare Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Personalized Skincare</h2>
            <p className="text-gray-600 text-sm sm:text-base my-4">
              Discover customized solutions designed for your unique skin needs, powered by innovation.
            </p>
            <Button text={"FIND YOUR MATCH"} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReverseHeroSection;
