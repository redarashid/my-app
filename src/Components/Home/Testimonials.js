import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import test from '../../Imgs/testimonials-01.jpg'
// import rashid from '../../Imgs/rashid.jpg'

const Testimonials = () => {

    var settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      };

  return (
    <div className='testimonials' id='testimonials'>
      <Container>
        <div className='title'>
          <h5>Testimonials</h5>
          <h1>What They Say?</h1>
        </div>

        <div className='content'>
            <Slider {...settings}>
                <div className='items'>
                   <div className='info'>
                      <i class="fa-solid fa-quote-left"></i>
                      <p>“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                      <h4>David Eigenberg</h4>
                      <span>CEO of Mexant</span>
                   </div>
                   <div className='image'>
                    <img src={test} alt='testimonials'/>
                   </div>
                </div>

                <div className='items'>
                   <div className='info'>
                      <i class="fa-solid fa-quote-left"></i>
                      <p>“A Front-End Developer is responsible for building the user interface and ensuring a seamless user experience for websites and web applications. They work with HTML, CSS, and JavaScript to create visually appealing and responsive designs that function across different devices and browsers.”</p>
                      <h4>Rashid Reda</h4>
                      <span>Front End Dev</span>
                   </div>
                   <div className='image'>
                    <img src={test} alt='testimonials'/>
                   </div>
                </div>
            </Slider>
        </div>
      </Container>
    </div>
  )
}

export default Testimonials
