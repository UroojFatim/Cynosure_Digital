import React from "react";
import { motion } from "framer-motion";
import contactimg from "../assets/Contact.jpg";

const ContactSection = () => {
  return (
    <div className="relative min-h-[50vh] flex flex-col justify-center items-center text-center px-4 sm:px-8">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${contactimg})` }}
      >
        <div className="absolute inset-0 bg-sky-950 opacity-70"></div> {/* Dark Overlay */}
      </div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 text-white max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Triggers every time in view
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          Get in touch with us, or find a Cynosure Design provider by using our Practitioner Locator.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactSection;
