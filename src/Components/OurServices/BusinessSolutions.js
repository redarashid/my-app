import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const BusinessSolutions = () => {
  return (
    <div>
     <div className='business'>
      <Container>
       <div className='items d-flex justify-content-between align-items-center'>
        <h1>Business <span>Solutions</span> and <br/>
        <span>Crypto</span> Investments</h1>

          <div>
          <motion.button
            whileTap={{ scale: 0.85 }} className='motion-button'>
            <Button variant="success" size='lg' className='btn-decover'>Discover More</Button>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }} className='motion-button'>
            <Button variant="success" size='lg'>Contact Us</Button>
          </motion.button>
          </div>
       </div>
      </Container>
    </div>
    </div>
  )
}

export default BusinessSolutions
