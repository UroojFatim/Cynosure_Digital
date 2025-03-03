import { FaHandshake, FaTools } from 'react-icons/fa';
import img from "../assets/Providers/laptop.png";

const ProviderBenefits = () => {
  return (
    <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-12 bg-gray-100 rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start p-6">
        <img src={img} alt="Laptop screen" className="w-32 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800">Empowering Your Practice</h2>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Access innovative solutions, marketing support, and expert guidance to grow your aesthetic practice with confidence.
        </p>
        <button className="bg-sky-900 text-white px-6 py-2 mt-5 rounded-lg hover:bg-sky-700 transition font-medium shadow-md">Explore AMPS</button>
        <a href="#" className="text-sky-900 mt-3 font-medium hover:underline">Provider Portal</a>
      </div>

      {/* Partnership Benefits */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold flex items-center text-gray-800"><FaHandshake className="mr-2 text-sky-900" /> Why Partner With Us?</h3>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Join a network of industry leaders utilizing cutting-edge aesthetic technology and dedicated professional support.
        </p>
        <ul className="list-disc ml-6 text-gray-600 mt-4 space-y-2">
          <li>Comprehensive product range tailored for diverse treatments.</li>
          <li>Expand your client base with advanced aesthetic solutions.</li>
          <li>Innovative and cost-effective technology to stay ahead.</li>
        </ul>
        <a href="#" className="text-sky-900 mt-4 inline-block font-medium hover:underline">Learn More</a>
      </div>

      {/* Service */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold flex items-center text-gray-800"><FaTools className="mr-2 text-sky-900" /> Exclusive Services</h3>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Elevate your practice with our tailored solutions, designed to enhance visibility, streamline operations, and drive success.
        </p>
        <ul className="list-disc ml-6 text-gray-600 mt-4 space-y-2">
          <li>Enhanced marketing strategies to attract more clients.</li>
          <li>Exclusive support network for seamless operations.</li>
          <li>Ongoing training and education for growth.</li>
        </ul>
        <a href="#" className="text-sky-900 mt-4 inline-block font-medium hover:underline">Discover More</a>
      </div>
    </section>
  );
};

export default ProviderBenefits;
