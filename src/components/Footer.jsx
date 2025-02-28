import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const cities = [
  { name: "Jaipur", img: "https://www.cynosuretech.com/images/icons/jaipur.webp" },
  { name: "Delhi", img: "https://www.cynosuretech.com/images/icons/delhi.webp" },
  { name: "Mumbai", img: "https://www.cynosuretech.com/images/icons/mumbai.webp" },
  { name: "Pune", img: "https://www.cynosuretech.com/images/icons/pune.webp" },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="text-gray-400 py-10 px-6"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Cynosure Logo" className="w-10" />
            <h2 className="text-xl font-semibold text-orange-400">CYNOSURE</h2>
          </div>
          <p className="text-sm text-gray-500">Technology &gt; Strategy</p>
          <p className="mt-2 text-gray-500">69/9, Floor 1 & 2, MLA Tower, New Sangaer Road, Mansarovar, Jaipur - 302020</p>
          <p className="mt-1 text-gray-500">info@cynosuretech.com</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg text-orange-400">Our Products</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-white transition">Timelabs</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition">SureTDS</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-orange-400">Important Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Cities */}
        <div className="mt-4 md:mt-0 flex justify-center gap-6 flex-wrap">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <img src={city.img} alt={city.name} className="w-12 mx-auto" />
              <p className="text-gray-500 mt-1">{city.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm mt-8 text-gray-500">
        Copyright © {new Date().getFullYear()} Cynosure Technologies - All rights reserved
      </p>
    </motion.footer>
  );
};

export default Footer;
