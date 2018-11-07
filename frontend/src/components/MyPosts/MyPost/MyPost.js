import React from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'
import './MyPost.css'

const MyPost = props => {
  return (
    <React.Fragment>
      <Card body outline color="secondary" className="MyPost">
        <CardTitle className="text-post-center">
          {props.data.name}
          <Button
            close
            onClick={event => props.onDeletePost(event, props.data.id)}
          />
        </CardTitle>
        <CardText className="text-post-center">{props.data.body}</CardText>
      </Card>
    </React.Fragment>
  )
}

export default MyPost
