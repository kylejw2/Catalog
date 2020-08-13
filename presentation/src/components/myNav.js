import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
      <Navbar style={{padding: "25px"}} color="light" light sticky={"top"}>
        <NavbarBrand href="/" className="mr-auto">Web Development Glossary</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/"><i className="fa fa-home"></i> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/glossary/"><i className="fa fa-book"></i> Glossary</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/kylejw2" target="_blank"><i className="fa fa-github"></i> GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Example;