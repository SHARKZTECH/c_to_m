import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBarComp = () => {
  return (
    <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>C-TO-M</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/buy"}>
            <Nav.Link>Buy</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/sell'}>
            <Nav.Link >Sell</Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              More
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarComp