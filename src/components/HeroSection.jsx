import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import bgImage from "../assets/hero_bg.jpg";
import { FaArrowDown } from "react-icons/fa";
import Button from "./Button";

export default function HeroSection() {
  const { scrollY } = useScroll(); // Scroll tracking
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]); // Parallax Effect

  // Opacity Change on Scroll
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let newOpacity = 1 - window.scrollY / 400; // Fades on scroll
      setOpacity(newOpacity < 0.2 ? 0.2 : newOpacity); // Min opacity 0.2
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-center p-6 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, scale }}
    >
      {/* 🔹 Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ opacity }} // Opacity effect
        className="relative max-w-3xl text-white z-10 px-4"
      >
        {/* 🔹 Logo & Title Section */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Ace <span className="text-blue-300">Beauty</span> Lab
        </h1>
        <motion.span
          className="text-lg sm:text-2xl font-medium tracking-wide opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Skincare Innovation, Luxury, and Science
        </motion.span>

        {/* 🔹 Description */}
        <p className="text-base sm:text-lg opacity-75 my-4">
          Redefining beauty with groundbreaking skincare formulas, cutting-edge
          branding, and digital excellence.
        </p>

        {/* 🔹 Call to Action */}
        <Button text="Explore More" />
      </motion.div>

      {/* 🔹 Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center justify-center"
      >
        <span className="text-white text-sm mb-2 opacity-75">Scroll Down</span>
        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
          <FaArrowDown className="text-white text-lg" />
        </div>
      </motion.div>
    </motion.div>
  );
}
