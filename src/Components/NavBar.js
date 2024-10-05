import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../Imgs/logo.png"

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
            <Nav.Link href="#contact_us">Contact Us</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <Link to="/pages/about">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              </Link>
              <Link to="/pages/services">
                <NavDropdown.Item href="#action/3.1">Services Us</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default NavBar

