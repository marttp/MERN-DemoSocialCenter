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
      />
      <MyPosts data={props.myPost.posts} />
    </div>
  )
}

export default MyProfile
