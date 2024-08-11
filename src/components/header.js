import React from 'react'
import {Container, Nav, Navbar, NavDropdown, Button, Offcanvas, Form} from 'react-bootstrap'
import myImage from '../assets/HPH-Logo-Transparent.png';

function header() {
  return (<div className='header'>
    <Navbar  expand={'lg'} className="bg-body-tertiary p-0 nav-box-shadow">
    <Container fluid className='w-1200 p-0 ps-2 pe-2'>
      <Navbar.Brand href="#" className='p-0'>
      <img src={myImage} width={200} height={74} alt='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-lg`}
        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
            <img src={myImage} alt='logo' width={200} height={74}/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link className='navlink-padding' href="#action1">About Us</Nav.Link>
            <NavDropdown className='nav-dropdown navlink-padding' align='start' title="Services " id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navlink-padding' href="#action1">Blog</Nav.Link>
            <Nav.Link className='navlink-padding' href="#action2">FAQs</Nav.Link>
            <Nav.Link className='navlink-padding' href="#action2">Pricing</Nav.Link>
            <Nav.Link className='navlink-padding' href="#action1">Testimonials </Nav.Link>
            <Nav.Link className='navlink-padding' href="#action2">Seminar</Nav.Link>
            <Nav.Link className='navlink-padding' href="#action2">Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  </div>)
}

export default header
