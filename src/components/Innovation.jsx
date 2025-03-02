import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Innovation_Bg from "../assets/innovationbg.jpg";

const Innovation = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative bg-sky-950 text-white py-16 px-6 md:px-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background with Fixed Position */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30" 
        style={{ backgroundImage: `url(${Innovation_Bg})`, filter: 'blur(4px)' }}
      ></div>

      {/* Overlay to Add Bluish Tint */}
      <div className="absolute inset-0 bg-sky-950 opacity-60"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl flex flex-col md:flex-row items-center md:items-start relative z-10"
      >
        <div className="md:w-1/2 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-semibold text-orange-500"
          >
            <span className="italic font-light text-white">Revolutionizing</span> Skincare. <span className="italic font-light text-white">Redefining</span> Beauty.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg"
          >
            At Ace Beauty Lab, we craft advanced skincare solutions that blend nature and science to help you achieve timeless beauty and radiant skin.
          </motion.p>
          <motion.a 
            href="#" 
            className="text-white underline hover:text-orange-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Our Innovations
          </motion.a>
        </div>
        
        <div className="md:w-1/2 flex flex-col space-y-6 mt-10 md:mt-0 md:pl-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold">SCIENCE MEETS BEAUTY.</h3>
            <p className="text-lg text-gray-200">
              Our formulas are developed with cutting-edge technology, using clinically proven ingredients to restore and rejuvenate your skin.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold">NATURAL. POWERFUL. EFFECTIVE.</h3>
            <p className="text-lg text-gray-200">
              Experience the synergy of nature and science with skincare that deeply nourishes, protects, and revitalizes your skin from within.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle Rotating Glow Effect */}
      <motion.div 
        className="absolute inset-0 flex justify-center items-center"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <div className="w-64 h-64 border-4 border-white rounded-full opacity-20 shadow-lg"></div>
      </motion.div>
    </section>
  );
};

export default Innovation;