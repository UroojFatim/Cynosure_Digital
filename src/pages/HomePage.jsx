import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import ServicesSection from '../components/ServiceSection'
import ReverseHeroSection from '../components/ReverseHeroSection'
import Partners from '../components/Partners'
import Innovation from '../components/Innovation'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <ReverseHeroSection/>
      <ServicesSection/>
      <Partners/>
      <Innovation/>
    </>
  )
}

export default HomePage
