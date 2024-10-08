import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider'
import Services from '../Components/Home/Services'
import Business from '../Components/Home/Business'
import HomeAbout from '../Components/Home/HomeAbout'
import Testimonials from '../Components/Home/Testimonials'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <section id='Home'>
        <HomeSlider />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section id='business'>
        <Business/>
      </section>
      <section>
        <HomeAbout/>
      </section>
      <section id='Testimonials'>
        <Testimonials/>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default HomePage
