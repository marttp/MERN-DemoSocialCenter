import React, { Component } from 'react'
import { JumbotronApp, Loader } from '../../components'
import Posts from './Posts/Posts'

import { connect } from 'react-redux'
class Home extends Component {
  render() {
    let posts = <Loader />
    if (!this.props.isLoading) {
      posts = <Posts data={this.props.homePosts} />
    }
    return (
      <div className="Home">
        <JumbotronApp />
        {posts}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    homePosts: state.posts.homePost,
    isLoading: state.posts.isLoading,
  }
}

export default connect(
  mapStateToProps,
  null
)(Home)
