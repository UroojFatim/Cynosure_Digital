import { useState } from "react";
import { motion } from "framer-motion";
import contactimg from "../assets/contactform.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 text-orange-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Contact Us
      </motion.h2>

      {/* Form & Image Container */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between bg-sky-950 text-white rounded-lg shadow-xl">
        
        {/* Form Section */}
        <motion.div
          className="w-full md:w-1/2 px-4 md:px-6 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg bg-transparent focus:ring-2 focus:ring-orange-500 transition"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg bg-transparent focus:ring-2 focus:ring-orange-500 transition"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg bg-transparent focus:ring-2 focus:ring-orange-500 transition"
              required
              rows="4"
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 px-4 md:px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={contactimg}
            alt="Contact Us"
            className="w-full max-w-md mx-auto md:max-w-none rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
