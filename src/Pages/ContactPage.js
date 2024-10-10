import React from 'react'
import HomeContact from '../Components/Contact/HomeContact'
import MapContact from '../Components/Contact/MapContact'
import FormConact from '../Components/Contact/FormConact'
import Footer from '../Components/Footer'

const ContactPage = () => {
  return (
    <div>
      <HomeContact/>
      <MapContact/>
      <FormConact/>
      <Footer/>
    </div>
  )
}

export default ContactPage
