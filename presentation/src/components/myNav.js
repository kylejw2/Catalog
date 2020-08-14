import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MyNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
      <Navbar style={{padding: "25px"}} light >
        <NavbarBrand href="/" className="mr-auto">Web Development Glossary</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" className='nav-link'><i className="fa fa-home"></i> Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/glossary/" className='nav-link'><i className="fa fa-book"></i> Glossary</Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/kylejw2" target="_blank"><i className="fa fa-github"></i> GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default MyNav;