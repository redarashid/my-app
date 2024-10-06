import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider'
import Services from '../Components/Home/Services'

const HomePage = () => {
  return (
    <div>
      <section id='Home'>
        <HomeSlider />
      </section>
      <section id='Services'>
        <Services />
      </section>
    </div>
  )
}

export default HomePage
