import React from 'react'

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// can use the above  or below, depends on what you want to do

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <> 
      <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
    
      <Navbar.Brand >
        <Link to={'/'} style={{ textDecoration:'none'}}><i class="fa-solid fa-video"></i>
        Media Player</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link  href={'/'} >Home</Nav.Link>
          <Nav.Link href={'/home'}>Add Videos</Nav.Link>
          <NavDropdown title="Catagories" id="navbarScrollingDropdown">
            <NavDropdown.Item href={'/home'}>Avicii</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href={'/home'}>Calvin Harris</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Nothing else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={'/watchhistory'}> Watch History</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search Videos"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Header