import React from 'react'

import { AppNavbar } from '../components'

const Layout = props => {
  return (
    <React.Fragment>
      <AppNavbar
        isCollapsedOpen={props.isCollapsedOpen}
        handlerCollapsed={props.changeCollapsed}
      />
      {props.children}
    </React.Fragment>
  )
}

export default Layout
