import React from 'react'
import HomeServices from '../Components/OurServices/HomeServices'
import ServicesContent from '../Components/OurServices/ServicesContent'
import BusinessSolutions from '../Components/OurServices/BusinessSolutions'
import Investment from '../Components/OurServices/Investment'


const ServicesHome = () => {
  return (
    <div>
      <HomeServices/>
      <ServicesContent/>
      <BusinessSolutions/>
      <Investment/>
    </div>
  )
}

export default ServicesHome
