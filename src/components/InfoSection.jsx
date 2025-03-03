import React from "react";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <section id="info-section" className="bg-white text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Direct Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-sky-950 text-white p-8 flex flex-col justify-center rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold">Direct Contact</h3>
          <p className="mt-2 text-sm">Address</p>
          <p className="text-gray-300">Ace Beauty Lab, 123 Skincare St, New York, NY</p>
          <p className="mt-2 text-sm">Phone</p>
          <p className="text-blue-300 font-semibold">+1 (123) 456-7890</p>
          <p className="mt-2 text-sm">Email</p>
          <p className="text-blue-300 font-semibold">support@acebeautylab.com</p>
        </motion.div>
        
        {/* Media Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-sky-950 text-white p-8 flex flex-col justify-center rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold">Media Contact</h3>
          <p className="mt-2 text-sm">Press & Collaborations</p>
          <p className="text-gray-300">For media inquiries, partnerships, and promotional requests, contact our team.</p>
          <p className="mt-2 text-blue-300 font-semibold">media@acebeautylab.com</p>
        </motion.div>

        {/* Work With Us */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-sky-950 text-white p-8 flex flex-col justify-center rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold">Join Our Team</h3>
          <p className="mt-2 text-sm">Career & Internships</p>
          <p className="text-gray-300">We are always looking for passionate skincare professionals. Send us your resume!</p>
          <p className="mt-2 text-blue-300 font-semibold">careers@acebeautylab.com</p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
