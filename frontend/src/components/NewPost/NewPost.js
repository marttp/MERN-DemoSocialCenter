import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'

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

import { connect } from 'react-redux'
import * as actionCreator from '../../redux/actions/'
class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      postText: '',
    }
  }

  componentDidMount() {
    this.setState({ name: this.props.name })
  }

  handlerNameChanged = event => {
    const { value } = event.target
    this.setState(prevState => {
      return {
        name: value,
      }
    })
  }

  handlerPostChanged = (event, type = 'change') => {
    if (type === 'reset') {
      event.preventDefault()
    }

    const { value } = event.target
    this.setState(prevState => {
      return {
        postText: type === 'reset' ? '' : value,
      }
    })
  }

  onInsertName = event => {
    if (this.state.name.length < 1) {
      return
    }
    if (!this.props.isOnSetName) {
      this.setState({
        postText: '',
      })
    }
    this.props.onInsertName(this.state.name)
    this.props.toggleChangeName()
  }

  handlerOnPost = event => {
    event.preventDefault()
    const newPost = {
      id: uuidv1(),
      name: this.props.name,
      body: this.state.postText,
      timeStamp: new Date(),
    }
    this.props.onAddPost(newPost)
    this.setState({ postText: '' })
  }

  render() {
    return (
      <React.Fragment>
        <Form className="form-margin-bottom">
          <FormGroup>
            <Label for="exampleText">What's your thinking now?</Label>
            <InputGroup className="insert-name">
              <Input
                type="text"
                value={this.state.name}
                onChange={event => this.handlerNameChanged(event)}
                disabled={!this.props.isOnSetName}
              />
              <InputGroupAddon addonType="append">
                <Button
                  color={this.props.isOnSetName ? 'primary' : 'warning'}
                  onClick={() => this.onInsertName()}
                >
                  {this.props.isOnSetName ? 'Insert Name' : 'Change Name'}
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              disabled={this.props.isOnSetName}
              value={this.state.postText}
              onChange={event => this.handlerPostChanged(event)}
            />
          </FormGroup>
          <Container>
            <Row>
              <Col>
                <Button
                  color="primary"
                  block
                  disabled={!this.state.postText}
                  onClick={event => this.handlerOnPost(event)}
                >
                  Posts
                </Button>
              </Col>
              <Col>
                <Button
                  color="danger"
                  block
                  disabled={!this.state.postText}
                  onClick={event => this.handlerPostChanged(event, 'reset')}
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
}

const mapStateToProps = state => {
  return {
    name: state.posts.name,
    isOnSetName: state.posts.isOnSetName,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: newPost => {
      dispatch(actionCreator.addPost(newPost))
    },
    onInsertName: name => {
      dispatch(actionCreator.insertName(name))
    },
    toggleChangeName: () => {
      dispatch(actionCreator.toggleChangeName())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)
