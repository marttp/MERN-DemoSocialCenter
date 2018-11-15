import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

import './Post.css'

const Post = props => (
  <React.Fragment>
    <Card body outline color="secondary" className="Post">
      <CardTitle className="text-post-center">{props.name}</CardTitle>
      <CardText className="text-post-center">{props.text}</CardText>
    </Card>
  </React.Fragment>
)

export default Post
