import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('/your-image.jpg')" }}>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
