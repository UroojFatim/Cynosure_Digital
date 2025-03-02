import React from 'react'
import contactimg from "../assets/Contact.jpg"

const ContactSection = () => {
  return (
    <div className="relative">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-black opacity-70 max-h-full"
    style={{ backgroundImage: `url(${contactimg})` }}></div>

    <div className="relative z-10 max-w-5xl mx-auto py-16 px-6 text-center text-white">
      <h2 className="text-4xl font-bold">Contact Us</h2>
      <p className="mt-4 text-lg">
        Get in touch with us, or find a Cynosure Design provider by using our Practitioner Locator.
      </p>
    </div>


  </div>
  )
}

export default ContactSection
