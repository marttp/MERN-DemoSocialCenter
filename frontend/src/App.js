import React, { Component } from 'react'
import './App.css'

// import uuidv1 from 'uuid/v1'

import { Layout, Home, MyProfile, PageNotFound } from './containers'

import { Route, Switch, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import * as actionCreator from './redux/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapse: false,
    }
  }

  componentDidMount() {
    this.props.fetchHomePost()
  }

  handlerCollapseOpen = event => {
    event.preventDefault()
    this.setState({ isCollapse: !this.state.isCollapse })
  }

  render() {
    return (
      <div>
        <Layout
          isCollapsedOpen={this.state.isCollapse}
          changeCollapsed={this.handlerCollapseOpen}
        >
          <Switch>
            <Route exact path="/profile" component={MyProfile} />
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHomePost: () => {
      dispatch(actionCreator.fetchHomePost())
    },
  }
}
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
)
