import React from 'react'
import MyPost from './MyPost/MyPost'

const MyPosts = props => {
  const { data } = props

  let myPosts = null

  if (data.length > 0) {
    myPosts = data.map(post => (
      <MyPost key={post.id} data={post} onDeletePost={props.onDeletePost} />
    ))
  }

  return <React.Fragment>{myPosts}</React.Fragment>
}

export default MyPosts
