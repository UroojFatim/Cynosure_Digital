import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } 
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-gray-700 py-12 px-6"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div>
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Ace Beauty Lab Logo" className="w-12" />
            <h2 className="text-2xl font-bold text-blue-300">Ace Beauty Lab</h2>
          </div>
          <p className="mt-4 text-sm">
            We blend innovation with beauty to provide premium treatments that enhance your natural glow.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-400 hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400 hover:text-orange-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-400 hover:text-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-400 hover:text-orange-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Gallery</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Facial Treatments</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Body Contouring</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Laser Hair Removal</a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition">Skin Revitalization</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Contact Us</h3>
          <p className="text-sm">
            69/9, Floor 1 &amp; 2, MLA Tower,<br />
            New Sangaer Road, Mansarovar,<br />
            Jaipur - 302020
          </p>
          <p className="text-sm mt-2">Email: info@acebeautylab.com</p>
          <p className="text-sm mt-1">Phone: +91 12345 67890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Ace Beauty Lab. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
