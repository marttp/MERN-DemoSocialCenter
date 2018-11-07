import React, { Component } from 'react'
import { JumbotronApp } from '../../components'
import Posts from './Posts/Posts'

import { connect } from 'react-redux'
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <JumbotronApp />
        <Posts data={this.props.homePosts} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    homePosts: state.posts.homePost,
  }
}

export default connect(
  mapStateToProps,
  null
)(Home)
