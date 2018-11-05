import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

import './Post.css'

const Post = props => (
  <React.Fragment>
    <Card body outline color="secondary" className="Post">
      <CardTitle className="text-post-center">{props.title}</CardTitle>
      <CardText className="text-post-center">{props.body}</CardText>
    </Card>
  </React.Fragment>
)

export default Post
