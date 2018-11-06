import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import './MyPost.css'

const MyPost = props => {
  return (
    <React.Fragment>
      <Card body outline color="secondary" className="MyPost">
        <CardTitle className="text-post-center">{props.name}</CardTitle>
        <CardText className="text-post-center">{props.body}</CardText>
      </Card>
    </React.Fragment>
  )
}

export default MyPost
