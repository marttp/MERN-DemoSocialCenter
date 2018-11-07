import React from 'react'
import { NewPost, MyPosts } from '../../components'
import './MyProfile.css'

const MyProfile = props => {
  return (
    <div className="MyProfile">
      <NewPost
        onPost={props.onPost}
        onInsertName={props.onInsertName}
        onChangeName={props.onChangeName}
        onChangeTextPost={props.onChangeTextPost}
        isOnSetName={props.myPost.isOnSetName}
        postText={props.myPost.postText}
        postName={props.myPost.name}
      />
      <MyPosts data={props.myPost.posts} onDeletePost={props.onDeletePost} />
    </div>
  )
}

export default MyProfile
