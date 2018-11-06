import React from 'react'

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Container,
  Row,
  Col,
} from 'reactstrap'

import './NewPost.css'

const NewPost = props => {
  return (
    <React.Fragment>
      <Form className="form-margin-bottom">
        <FormGroup>
          <Label for="exampleText">What's your thinking now?</Label>
          <InputGroup className="insert-name">
            <Input
              type="text"
              onChange={event => props.onChangeName(event)}
              disabled={!props.isOnSetName}
            />
            <InputGroupAddon addonType="append">
              <Button
                color={props.isOnSetName ? 'primary' : 'warning'}
                onClick={event => props.onInsertName(event)}
              >
                {props.isOnSetName ? 'Insert Name' : 'Change Name'}
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            disabled={props.isOnSetName}
            value={props.postText}
            onChange={event => props.onChangeTextPost(event)}
          />
        </FormGroup>
        <Container>
          <Row>
            <Col>
              <Button
                color="primary"
                block
                disabled={!props.postText}
                onClick={event => props.onPost(event)}
              >
                Posts
              </Button>
            </Col>
            <Col>
              <Button
                color="danger"
                block
                disabled={!props.postText}
                onClick={event => props.onChangeTextPost(event, 'reset')}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </React.Fragment>
  )
}

export default NewPost
