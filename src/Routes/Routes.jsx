import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Services from "../pages/Services";
// import OurWork from "../pages/OurWork";
// import Blog from "../pages/Blog";
// import Careers from "../pages/Careers";
// import Industries from "../pages/Industries";
// import CaseStudies from "../pages/CaseStudies";

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/our-work" element={<OurWork />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/careers" element={<Careers />} /> */}
        {/* <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} /> */}
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRoutes;
