import React, { Component } from 'react'
import MyPost from './MyPost/MyPost'
import { Loader } from '..'

import { connect } from 'react-redux'
import * as actionCreator from '../../redux/actions'

class MyPosts extends Component {
  handlerOnDeletePost = (event, id) => {
    event.preventDefault()
    this.props.onDeletePost(id)
  }

  render() {
    const data = [...this.props.myPosts]
    let myPosts = null

    if (data.length > 0) {
      myPosts = data.map(post => (
        <MyPost
          key={post._id}
          data={post}
          onDeletePost={this.handlerOnDeletePost}
        />
      ))
    }

    if (this.props.isLoading) {
      myPosts = <Loader />
    }

    return <React.Fragment>{myPosts}</React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    myPosts: state.posts.myPosts,
    isLoading: state.posts.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: id => {
      dispatch(actionCreator.deletePost(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)
