import React, { Component } from 'react'
import './App.css'

import uuidv1 from 'uuid/v1'

import { Layout, Home, MyProfile, PageNotFound } from './containers'

import { Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import * as actionCreator from './redux/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapse: false,
      name: '',
      postText: '',
    }
  }

  componentDidMount() {
    this.props.fetchHomePost()
  }

  handlerCollapseOpen = event => {
    event.preventDefault()
    this.setState({ isCollapse: !this.state.isCollapse })
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

  handlerInsertName = event => {
    event.preventDefault()

    if (this.state.name.length < 1) {
      return
    }

    this.setState(prevState => {
      return {
        myPosts: {
          ...prevState.myPosts,
          isOnSetName: !prevState.myPosts.isOnSetName,
        },
      }
    })
  }

  handlerOnPost = event => {
    event.preventDefault()
    const newPost = {
      id: uuidv1(),
      name: this.state.myPosts.name,
      body: this.state.myPosts.postText,
      timeStamp: new Date(),
    }
    this.props.onAddPost(newPost)
    this.setState({ postText: '' })
  }

  handlerOnDeletePost = (event, id) => {
    event.preventDefault()
    this.props.onDeletePost(id)
  }

  render() {
    return (
      <React.Fragment>
        <Layout
          isCollapsedOpen={this.state.isCollapse}
          changeCollapsed={this.handlerCollapseOpen}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={route => {
                return <Home data={this.props.homePosts} />
              }}
            />
            {/* <Route exact path="/profile" component={MyProfile} /> */}
            <Route
              exact
              path="/profile"
              render={route => {
                return (
                  <MyProfile
                    onPost={this.handlerOnPost}
                    onInsertName={this.handlerInsertName}
                    onChangeName={this.handlerNameChanged}
                    onChangeTextPost={this.handlerPostChanged}
                    onDeletePost={this.handlerOnDeletePost}
                    myPost={this.state.myPosts}
                  />
                )
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    homePosts: state.posts.homePost,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: newPost => {
      dispatch(actionCreator.addPost(newPost))
    },
    onDeletePost: id => {
      dispatch(actionCreator.deletePost(id))
    },
    onInsertName: name => {
      dispatch(actionCreator.insertName(name))
    },
    toggleChangeName: () => {
      dispatch(actionCreator.toggleChangeName())
    },
    fetchHomePost: () => {
      dispatch(actionCreator.fetchHomePost())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
