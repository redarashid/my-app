import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../Imgs/logo.png"
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <div className='navBar p-2'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"}>
            <img src={logo} alt='logo'/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="align-items-center">
            <Nav.Link href="#home" className='active'>Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <Link to="/pages/about">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/pages/services">
                <NavDropdown.Item href="#action/3.1">Services Us</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <motion.div
  whileTap={{ scale: 0.85 }} className='motion-button'>
  <Button variant="success">Contact Us</Button>
</motion.div>

        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default NavBar









