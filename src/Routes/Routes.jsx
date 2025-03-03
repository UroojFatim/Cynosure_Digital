import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "../pages/Providers";
import CategoryDetail from "../pages/CategoryDetail"; // Import Category Detail Page

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/for-providers" element={<Providers />} />
        <Route path="/for-providers/:categoryName" element={<CategoryDetail />} /> {/* Corrected Route */}
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;
