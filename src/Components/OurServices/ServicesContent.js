import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import servicesImg1 from '../../Imgs/service-image-01.jpg'
import servicesImg2 from '../../Imgs/service-image-02.jpg'
import servicesImg3 from '../../Imgs/service-image-03.jpg'
import { motion } from 'framer-motion'

const ServicesContent = () => {
  return (
    <div>
      <div className='content-services'>
        <Container>
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
                    <div className='image'>
                        <img src={servicesImg1} alt='servicesMedia'/>
                    </div>
                    </motion.div>
                </Col>
                <Col lg={6}>
                <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                   <div className='right'>
                      <i class="fa-solid fa-box-archive"></i>
                      <h3>Digital Currencies</h3>
                      <p>
                        You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.
                      </p>
                   </div>
                   </motion.div>
                </Col>
            </Row>

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
                   <div className='right'>
                      <i class="fa-solid fa-box-archive"></i>
                      <h3>Financial Solutions</h3>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ex massa. In ac laoreet urna. Curabitur eu enim nibh. Phasellus sodales nisi vel leo aliquam, ut tempus augue hendrerit. Pellentesque eu risus tincidunt, condimentum eros in, auctor augue. Vivamus et urna blandit, varius sapien sed.</p>
                   </div>
                   </motion.div>
                </Col>
                <Col lg={6}>
                <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                    <div className='image'>
                        <img src={servicesImg2} alt='servicesMedia'/>
                    </div>
                    </motion.div>
                </Col>
            </Row>

            <Row className='row'>
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
                    <div className='image'>
                        <img src={servicesImg3} alt='servicesMedia'/>
                    </div>
                    </motion.div>
                </Col>
                <Col lg={6}>
                <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 2 % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.85, // Animation duration
                },
              }}
              viewport={{ once: true }}>
                   <div className='right'>
                      <i class="fa-solid fa-box-archive"></i>
                      <h3>Cryptocurrency Exchanges</h3>
                      <p>
                      Mauris id efficitur ante, vitae ultrices metus. Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.</p>
                   </div>
                   </motion.div>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default ServicesContent
