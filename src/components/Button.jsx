import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 text-lg font-bold text-white bg-sky-900 rounded-full shadow-lg 
      transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
    >
      {/* 🔹 Background Hover Effect (Text Will Not Hide) */}
      <span className="absolute inset-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20"></span>
      
      {/* 🔹 Button Text (Will Always Stay on Top) */}
      <span className="relative">{text}</span>
    </button>
  );
}
