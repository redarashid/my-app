import React from 'react'
import { Container } from 'react-bootstrap'

const AddressContact = () => {

  return (
    <div className='adresss'>
      <Container>
      <div className='contact'>
        <div className='item'>
           <i class="fa-solid fa-envelope"></i>
           <h4>Email Address</h4>
           <a href="mailto:example@example.com">info@company.com</a>
        </div>

        <div className='item'>
           <i class="fa-solid fa-phone"></i>
           <h4>Phone Number</h4>
           <a href="mailto:example@example.com">010-020-0340</a>
        </div>

        <div className='item'>
           <i class="fa-solid fa-map-location-dot"></i>
           <h4>Address</h4>
           <a href="mailto:example@example.com">Victoria,Australia</a>
        </div>

       </div>
      </Container>
    </div>
  )
}

export default AddressContact
