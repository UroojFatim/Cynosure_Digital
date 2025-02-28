import { motion } from "framer-motion";
import bgImage from "../assets/hero_bg.jpg";
import logo from "../assets/logo.png"

export default function HeroSection() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🔹 Semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-xl text-white z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-center md:text-left">
          <img src={logo} className="h-12 md:h-28" />
          Global Kidney 
          <span className="text-4xl font-bold">+</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            CYNOSURE <span className="text-gray-400">Skincare</span>
          </h1>
        </div>
        <p className="text-base sm:text-lg opacity-80 mb-4">
          Elevating skincare through innovation, branding, and digital expertise.
        </p>
        <p className="text-xs sm:text-sm opacity-60">Discover the future of beauty. Scroll down.</p>
      </motion.div>
    </div>
  );
}
