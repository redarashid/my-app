import React from 'react'
import HomeServices from '../Components/OurServices/HomeServices'
import ServicesContent from '../Components/OurServices/ServicesContent'
import BusinessSolutions from '../Components/OurServices/BusinessSolutions'
import Investment from '../Components/OurServices/Investment'
import Footer from '../Components/Footer'


const ServicesHome = () => {
  return (
    <div>
      <HomeServices/>
      <ServicesContent/>
      <BusinessSolutions/>
      <Investment/>
      <Footer/>
    </div>
  )
}

export default ServicesHome
