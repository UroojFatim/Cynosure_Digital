import logo from "../assets/logo.png"

const Footer = () => {
    return (
      <footer className="p-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 ">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 ">
              <img src={logo} alt="Cynosure Logo" className="w-10" />
              <h2 className="text-xl font-semibold text-light-blue-300">CYNOSURE</h2>
            </div>
            <p className="text-sm text-gray-600">Technology &gt; Strategy</p>
            <p className="mt-2 text-gray-600">69/9, Floor 1 & 2, MLA Tower, New Sangaer Road, Mansarovar, Jaipur - 302020</p>
            <p className="mt-1 text-gray-600">info@cynosuretech.com</p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg text-light-blue-400">Our Products</h3>
            <ul className="mt-2">
              <li><a href="#" className="text-gray-600 hover:text-white">Timelabs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white">SureTDS</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-light-blue-400">Important Links</h3>
            <ul className="mt-2">
              <li><a href="#" className="text-gray-600 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white">Contact</a></li>
            </ul>
          </div>

        {/* Cities */}
        <div className="mt-6 flex justify-center gap-10">
          <div className="text-center">
            <img src="https://www.cynosuretech.com/images/icons/jaipur.webp" alt="Jaipur" className="w-12 mx-auto" />
            <p className="text-gray-600">Jaipur</p>
          </div>
          <div className="text-center">
            <img src="https://www.cynosuretech.com/images/icons/delhi.webp" alt="Delhi" className="w-12 mx-auto" />
            <p className="text-gray-600">Delhi</p>
          </div>
          <div className="text-center">
            <img src="https://www.cynosuretech.com/images/icons/mumbai.webp" alt="Mumbai" className="w-12 mx-auto" />
            <p className="text-gray-600">Mumbai</p>
          </div>
          <div className="text-center">
            <img src="https://www.cynosuretech.com/images/icons/pune.webp" alt="Pune" className="w-12 mx-auto" />
            <p className="text-gray-600">Pune</p>
          </div>
        </div>
        </div>
        
  
        {/* Copyright */}
        <p className="text-center text-sm mt-6 text-gray-400">Copyright © Cynosure Technologies - All rights reserved</p>
      </footer>
    );
  };
  
  export default Footer;
  