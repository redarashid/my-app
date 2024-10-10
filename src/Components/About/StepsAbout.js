import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const StepsAbout = () => {
  return (
    <div className='steps-about'>
      <Container>
          <Row>
            <Col lg={6}>
                <div className='right'>
                    <h4>Please tell us about your idea and how you want it to bePlease tell us about your idea and how you want it to be</h4>
                    <p>If you need more HTML templates, you can try visiting TooCSS blog and Tooplate websites. You can get many good templates on those websites.</p>
                    <p>Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed dolor condimentum tellus commodo volutpat non malesuada turpis.</p>
                    <motion.button
                        whileTap={{ scale: 0.85 }} className='motion-button'>
                        <Button variant="success" size='lg' className='btn-decover'>Discover More</Button>
                    </motion.button>
                </div>
            </Col>
          
          <Col lg={6}>
          <Row>
            <Col lg={6}>
                <div className='left'>
                    <h5>First Step</h5>
                    <span>01</span>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className='left'>
                    <h5>Scound Step</h5>
                    <span>02</span>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className='left'>
                    <h5>Third Step</h5>
                    <span>03</span>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className='left'>
                    <h5>Four Step</h5>
                    <span>04</span>
                    <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                </div>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StepsAbout
