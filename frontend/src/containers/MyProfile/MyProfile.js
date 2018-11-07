import React from 'react'
import { NewPost, MyPosts } from '../../components'
import './MyProfile.css'

const MyProfile = props => {
  return (
    <div className="MyProfile">
      <NewPost />
      <MyPosts />
    </div>
  )
}

export default MyProfile
