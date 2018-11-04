import React from 'react'

import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap'

import './AppNavbar.css'
import NavAppItem from './NavAppItem/NavAppItem'

const AppNavbar = props => {
  return (
    <React.Fragment>
      <Navbar className="AppNavbar" light expand="md">
        <div className="logo-container">
          <img
            className="logo"
            alt="logo of website"
            src={require('../../assets/pc-computer-with-monitor.png')}
          />
        </div>
        <NavbarToggler />
        <Collapse navbar isOpen={true}>
          <Nav className="ml-auto" navbar>
            <NavAppItem link="/" itemTitle="Home" />
            <NavAppItem link="/" itemTitle="My Profile" />
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default AppNavbar
