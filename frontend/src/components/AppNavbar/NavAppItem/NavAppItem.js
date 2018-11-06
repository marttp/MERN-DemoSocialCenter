import React from 'react'

import { NavLink } from 'react-router-dom'

import './NavAppItem.css'

const NavAppItem = props => {
  return (
    <React.Fragment>
      {/* <NavLink href={props.link}>{props.itemTitle}</NavLink> */}
      <NavLink
        exact
        activeClassName="nav-item-active"
        className="nav-item"
        to={props.link}
      >
        {props.itemTitle}
      </NavLink>
    </React.Fragment>
  )
}

export default NavAppItem
