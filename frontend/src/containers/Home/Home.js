import React, { Component } from 'react'
import { JumbotronApp } from '../../components'
import Posts from './Posts/Posts'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <JumbotronApp />
        <Posts data={this.props.data} />
      </div>
    )
  }
}

export default Home
