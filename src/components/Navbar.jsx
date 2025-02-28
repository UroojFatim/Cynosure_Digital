import { useState } from "react";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/hero_bg.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center text-white z-50"
    >
      {/* Logo */}
      <h1 className="text-3xl font-bold">
        CYNOSURE <span className="text-gray-400">Designs</span>
      </h1>

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 bg-white text-black rounded-full"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full-Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-95 text-white flex flex-col items-center justify-center text-xl space-y-6 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}>
          {/* Top Section: Logo and Close Button */}
          <div className="absolute top-6 left-6 flex items-center space-x-4">
            {/* Logo in Top Left */}
            <h1 className="text-3xl font-bold">
              CYNOSURE <span className="text-gray-400">Designs</span>
            </h1>
          </div>

          {/* Close Button in Top Right */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white text-black rounded-full"
          >
            <X size={32} />
          </button>

          {/* Navigation Links */}
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#work" className="hover:text-gray-400">
            Our Work
          </a>
          <a href="#blog" className="hover:text-gray-400">
            Blog
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Let's Talk
          </a>

          {/* About Us with Dropdown */}
          <div className="relative">
            <button
              className="hover:text-gray-400 focus:outline-none"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              About Us
            </button>
            {isAboutOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-lg text-lg text-white flex flex-col"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <a href="#careers" className="p-3 hover:bg-gray-700">
                  Careers
                </a>
                <a href="#industries" className="p-3 hover:bg-gray-700">
                  Industries
                </a>
                <a href="#case-studies" className="p-3 hover:bg-gray-700">
                  Case Studies
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
