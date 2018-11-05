import React from 'react'
import Post from './Post/Post'
import './Posts.css'

const Posts = props => {
  let posts = null
  let postsShowed = null

  if (props.data !== null) {
    posts = props.data
    postsShowed = posts.map(post => (
      <Post key={post.id} title={post.title} body={post.body} />
    ))
  }

  return <div className="Posts">{postsShowed}</div>
}

export default Posts
