import React from 'react'
import StarsRating from 'stars-rating'

import { Navbar, Container,Form , Nav,FormControl} from 'react-bootstrap'
const NavBar = ({farkes, nejma }) => {
    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Egybest 2.0</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
     
      </Nav>
      <StarsRating
  count={5}
  onChange={nejma}
  size={24}
  color2={'#ffd700'} />
      <Form className="d-flex">

        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>farkes(e)}
        />
        
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar
