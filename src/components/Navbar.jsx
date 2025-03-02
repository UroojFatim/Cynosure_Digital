import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/hero_bg.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center text-white z-50">
      {/* Logo */}
      <h1 className="text-3xl font-bold">
        CYNOSURE <span className="text-gray-400">Designs</span>
      </h1>

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 bg-white text-black rounded-full z-50"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full-Screen Overlay with Enhanced Animation */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center text-xl space-y-6 bg-black bg-opacity-70 transition-all duration-700 ease-in-out transform ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top Section: Logo and Close Button */}
        <div className="absolute top-6 left-6 flex items-center space-x-4">
          <h1 className="text-3xl font-bold">
            CYNOSURE <span className="text-gray-400">Designs</span>
          </h1>
        </div>

        {/* Close Button in Top Right */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-white rounded-full transition"
        >
          <X size={32} />
        </button>

        {/* Navigation Links with Smooth Fade In */}
        <div className="flex flex-col items-center space-y-6 text-white text-2xl font-semibold">
          <Link to="/" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/our-work" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Our Work
          </Link>
          <Link to="/blog" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
            Let's Talk
          </Link>
        </div>

        {/* About Us with Dropdown */}
        <div className="relative mt-4">
          <button
            className="hover:text-gray-400 focus:outline-none transition duration-300"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            About Us
          </button>
          {isAboutOpen && (
            <div
              className="absolute left-0 w-48 bg-opacity-95 shadow-lg rounded-lg text-lg text-white flex flex-col transition-all duration-500 transform scale-95 opacity-0"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
              style={{ opacity: isAboutOpen ? 1 : 0, transform: isAboutOpen ? "scale-100" : "scale-95" }}
            >
              <Link to="/careers" className="p-1 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/industries" className="p-1 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                Industries
              </Link>
              <Link to="/case-studies" className="p-1 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                Case Studies
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
