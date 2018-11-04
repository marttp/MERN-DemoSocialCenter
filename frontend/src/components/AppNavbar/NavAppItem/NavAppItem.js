import React from 'react'

import { NavItem, NavLink } from 'reactstrap'

const NavAppItem = props => {
  return (
    <React.Fragment>
      <NavItem>
        <NavLink href={props.link}>{props.itemTitle}</NavLink>
      </NavItem>
    </React.Fragment>
  )
}

export default NavAppItem
