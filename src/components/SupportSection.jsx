import React from "react";

const SupportSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      {/* Google Map Embed */}
      <div className="w-full md:w-1/2 h-64 md:h-96">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.9817156321535!2d-71.43731902340707!3d42.564152271166134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39ac69a01f9d7%3A0x999e7c53b05d07ef!2sCynosure%20Lutronic!5e0!3m2!1sen!2sus!4v1709065600000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left">
        <div className="text-5xl font-bold flex items-center justify-center md:justify-start space-x-2">
          <span className="text-black">24</span>
          <span className="text-gray-400 text-lg">HOURS A DAY</span>
          <span className="text-black">/</span>
          <span className="text-black">7</span>
          <span className="text-gray-400 text-lg">DAYS A WEEK</span>
        </div>
        <p className="text-gray-600 mt-4 text-lg">
          Cynosure Lutronic is here to help your practice in any way we can.
        </p>
      </div>
    </div>
  );
};

export default SupportSection;