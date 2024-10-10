import React from 'react'
import HomeContact from '../Components/Contact/HomeContact'
import MapContact from '../Components/Contact/MapContact'
import FormConact from '../Components/Contact/FormConact'
import { useMediaQuery } from 'react-responsive'
import AddressContact from '../Components/Contact/AddressContact'

const ContactPage = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  return (
    <div>
      <HomeContact/>
      <MapContact/>
      {
        isTabletOrMobile && <AddressContact/>
      }
      <FormConact/>
    </div>
  )
}

export default ContactPage
