import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/hero_bg.jpg";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center text-white z-50 bg-gradient-to-b from-black to-transparent">
      {/* Logo */}
      <Link to="/" onClick={handleLinkClick}><img src={logo} alt="Ace Beauty Lab" className="h-10 sm:h-18" /></Link>

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 sm:p-3 bg-white text-black rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        {isMenuOpen ? <X size={24} className="sm:hidden" /> : <Menu size={24} className="sm:hidden" />}
        {isMenuOpen ? <X size={28} className="hidden sm:block" /> : <Menu size={28} className="hidden sm:block" />}
      </button>

      {/* Full-Screen Overlay */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center text-xl bg-black bg-opacity-90 backdrop-blur-md overflow-y-auto transition-all duration-700 ease-in-out transform ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Logo inside menu */}
        <Link to="/" onClick={handleLinkClick}><img src={logo} alt="Ace Beauty Lab" className="absolute top-4 left-4 sm:top-6 sm:left-6 h-8 sm:h-12" /></Link>

        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 bg-gray-800 text-white rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <X size={24} className="sm:hidden" />
          <X size={36} className="hidden sm:block" />
        </button>

        {/* Navigation Grid Container */}
        <div className="w-full max-w-5xl mx-auto pt-8 pb-4 px-14 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 text-white text-sm md:text-lg font-semibold">
            {/** Navigation Sections **/}
            {[
              {
                title: "For Providers",
                path: "/for-providers",
                links: [
                  { name: "Body Contouring", path: "/for-providers/body-contouring" },
                  { name: "Skin Revitalization", path: "/for-providers/skin-revitalization" },
                  { name: "Tattoo Removal", path: "/for-providers/tattoo-removal" },
                  { name: "Surgical", path: "/for-providers/surgical" },
                  { name: "View All Products", path: "/for-providers/all-products", special: true },
                ],
              },
              {
                title: "For Patients",
                path: "/for-patients",
                links: [
                  { name: "Laser Hair Removal", path: "/patients/laser-hair-removal" },
                  { name: "Body Contouring (Non-Invasive)", path: "/patients/non-invasive-contouring" },
                  { name: "Tattoo Removal", path: "/patients/tattoo-removal" },
                  { name: "View All Treatments", path: "/patients/all-treatments", special: true },
                ],
              },
              {
                title: "About Us",
                path: "/about",
                links: [
                  { name: "Contact Us", path: "/contact" },
                  { name: "Leadership", path: "/leadership" },
                  { name: "Career", path: "/career" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <Link to={section.path} onClick={handleLinkClick}>
                  <h3 className="text-2xl text-orange-400 mb-2 sm:mb-10 border-b-2 border-blue-300 pb-1 sm:pb-2 ">
                    {section.title}
                  </h3>
                </Link>
                <ul className="space-y-2 sm:space-y-3 text-gray-300">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.path}
                        onClick={handleLinkClick}
                        className={`hover:text-white transition ${
                          link.special
                            ? "text-blue-300 border-2 border-blue-300 px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-bold hover:underline"
                            : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
