import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className='services' id='services'>
      <Container>
        <div className='title'>
          <h5>Services</h5>
          <h1>Discover More Services</h1>
        </div>
        <Row>
        <Col lg={6}>
          <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                  <div className='services-item'>
                    <i class="fa-solid fa-box-archive"></i>
                    <h4>CSS Templates</h4>
                    <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                  </div>
          </motion.div>
        </Col>

        <Col lg={6}>
          <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                  <div className='services-item'>
                    <i class="fas fa-charging-station"></i>
                    <h4>CSS Templates</h4>
                    <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                  </div>
          </motion.div>
        </Col>

        <Col lg={6}>
          <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                  <div className='services-item'>
                    <i class="fas fa-archway"></i>
                    <h4>CSS Templates</h4>
                    <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                  </div>
          </motion.div>
        </Col>

        <Col lg={6}>
          <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                  <div className='services-item'>
                    <i class="fas fa-cloud"></i>
                    <h4>CSS Templates</h4>
                    <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                  </div>
          </motion.div>
        </Col>

        
        <Col lg={6}>
          <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                  <div className='services-item'>
                    <i class="fas fa-cloud"></i>
                    <h4>CSS Templates</h4>
                    <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                  </div>
          </motion.div>
        </Col>

        
        <Col lg={6}>
          <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 1 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                  <div className='services-item'>
                    <i class="fas fa-cloud"></i>
                    <h4>CSS Templates</h4>
                    <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                  </div>
          </motion.div>
        </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Services
