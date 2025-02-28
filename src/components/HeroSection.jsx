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
        className="relative max-w-2xl text-white z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src={logo} className="h-16" />
          Global Kidney 
          <span className="text-4xl font-bold">+</span>
          <h1 className="text-5xl font-bold">
            CYNOSURE <span className="text-gray-400">Skincare</span>
          </h1>
        </div>
        <p className="text-lg opacity-80 mb-6">
          Elevating skincare through innovation, branding, and digital expertise.
        </p>
        <p className="text-sm opacity-60">Discover the future of beauty. Scroll down.</p>
      </motion.div>
    </div>
  );
}
