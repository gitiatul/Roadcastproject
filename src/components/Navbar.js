import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav"  className="mx-auto" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="mx-auto headingnav">
                  <LinkContainer to="/">
                <Nav.Link className="headlinks">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Aboutme">
                <Nav.Link className="headlinks" >AboutMe</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                <Nav.Link className="headlinks">Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Signup">
                <Nav.Link className="headlinks">Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Login">
                <Nav.Link className="headlinks">Login</Nav.Link>
                </LinkContainer>
                <form class="d-flex searchbar">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success " type="submit">GO</button>
                </form>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;