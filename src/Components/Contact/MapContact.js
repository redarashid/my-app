import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContact = () => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

  return (
    <div className='map-contact'>
       <Container>
       <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

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

export default MapContact
