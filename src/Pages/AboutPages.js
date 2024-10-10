import React from 'react'
import AboutHome from '../Components/About/AboutHome'
import AboutContent from '../Components/About/AboutContent'
import AboutBusiness from '../Components/About/AboutBusiness'
import StepsAbout from '../Components/About/StepsAbout'
import Footer from '../Components/Footer'

const AboutPages = () => {
  return (
    <div>
      <AboutHome/>
      <AboutContent/>
      <AboutBusiness/>
      <StepsAbout/>
      <Footer/>
    </div>
  )
}

export default AboutPages
