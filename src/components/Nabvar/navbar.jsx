import React from "react";
import France from './img/france.svg'
import Italy from './img/italy.svg'
import Spain from './img/spain.svg'
import United from './img/united.svg'
import { Nav, Navbar, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
 import './navbar.css'
 
import { useTranslation } from "react-i18next";

function Navigation(props) {
  const [t] = useTranslation("global");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top"
    >
      <Navbar.Brand href="/">
        {" "}
     
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        
          <NavDropdown
            title="Lang"
            className="liens"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="lng" onClick={() => props.changeLng("fr")}>
              FR    <img className="country" src={France} alt="france" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  className="lng" onClick={() => props.changeLng("en")}>
              EN <img className="country" src={United} alt="united" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="lng" onClick={() => props.changeLng("es")}>
              ES <img className="country" src={Spain} alt="spain" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  className="lng"onClick={() => props.changeLng("it")}>
              IT <img className="country" src={Italy} alt="italy" />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>Hello Mehdi</Nav.Link>
          <Button onClick={()=> console.log('test')}>Deconnexion</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
