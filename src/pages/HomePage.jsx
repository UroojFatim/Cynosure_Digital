import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import ServicesSection from '../components/ServiceSection'
import ReverseHeroSection from '../components/ReverseHeroSection'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ReverseHeroSection/>
      <ServicesSection/>
      <Footer/>
    </>
  )
}

export default HomePage
