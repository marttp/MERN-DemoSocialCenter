import React from 'react'

import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap'
import { Link } from 'react-router-dom'

import './AppNavbar.css'
import NavAppItem from './NavAppItem/NavAppItem'

const AppNavbar = props => {
  return (
    <React.Fragment>
      <Navbar className="AppNavbar" light expand="md">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo"
              alt="logo of website"
              src={require('../../assets/pc-computer-with-monitor.png')}
            />
          </Link>
        </div>
        <NavbarToggler onClick={event => props.handlerCollapsed(event)} />
        <Collapse navbar isOpen={props.isCollapsedOpen}>
          <Nav className="ml-auto" navbar>
            <NavAppItem link="/" itemTitle="Home" />
            <NavAppItem link="/profile" itemTitle="My Profile" />
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default AppNavbar
