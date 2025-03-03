import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const flipVariants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const SupportSection = () => {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Google Map Embed with Animation */}
      <motion.div 
        className="w-full lg:w-1/2 h-56 sm:h-64 md:h-80 lg:h-96"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.9817156321535!2d-71.43731902340707!3d42.564152271166134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39ac69a01f9d7%3A0x999e7c53b05d07ef!2sCynosure%20Lutronic!5e0!3m2!1sen!2sus!4v1709065600000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Animated Text Content */}
      <motion.div 
        className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-12 text-center lg:text-left px-4 sm:px-8"
        variants={textVariants}
      >
        <motion.div 
          className="text-4xl sm:text-5xl font-bold flex flex-wrap items-center justify-center lg:justify-start gap-2"
        >
          <motion.span className="text-black" variants={flipVariants}>24</motion.span>
          <motion.span className="text-gray-400 text-lg sm:text-xl" variants={textVariants}>HOURS A DAY</motion.span>
          <motion.span className="text-black" variants={flipVariants}>/</motion.span>
          <motion.span className="text-black" variants={flipVariants}>7</motion.span>
          <motion.span className="text-gray-400 text-lg sm:text-xl" variants={textVariants}>DAYS A WEEK</motion.span>
        </motion.div>
        <motion.p className="text-gray-600 mt-4 text-base sm:text-lg" variants={textVariants}>
          Ace Beauty Lab is here to help your practice in any way we can.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SupportSection;
