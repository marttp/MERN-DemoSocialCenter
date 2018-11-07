import React, { Component } from 'react'
import './App.css'

import uuidv1 from 'uuid/v1'

import { fetchAllPost } from './services/postApi'
import { Layout, Home, MyProfile, PageNotFound } from './containers'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapse: false,
      posts: null,
      myPosts: {
        name: '',
        isOnSetName: true,
        postText: '',
        posts: [
          // {
          //   userId: 1,
          //   id: 8,
          //   name: 'TestUser',
          //   body: 'Test1',
          // },
          // {
          //   userId: 1,
          //   id: 9,
          //   name: 'TestUser',
          //   body: 'Test2',
          // },
          // {
          //   userId: 1,
          //   id: 10,
          //   name: 'TestUser',
          //   body: 'Test3',
          // },
        ],
      },
    }
  }

  componentDidMount() {
    fetchAllPost()
      .then(result => {
        this.setState(
          prevState => {
            return {
              posts: result,
            }
          }
          // () => console.log(this.state.posts)
        )
      })
      .catch(err => {
        console.warn(err)
      })
  }

  handlerCollapseOpen = event => {
    event.preventDefault()
    this.setState({ isCollapse: !this.state.isCollapse })
  }

  handlerNameChanged = event => {
    const { value } = event.target
    this.setState(prevState => {
      return {
        myPosts: {
          ...prevState.myPosts,
          name: value,
        },
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
        myPosts: {
          ...prevState.myPosts,
          postText: type === 'reset' ? '' : value,
        },
      }
    })
  }

  handlerInsertName = event => {
    event.preventDefault()

    if (this.state.myPosts.name.length < 1) {
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
    this.setState(prevState => {
      return {
        myPosts: {
          ...prevState.myPosts,
          posts: [
            ...prevState.myPosts.posts,
            {
              id: uuidv1(),
              name: prevState.myPosts.name,
              body: prevState.myPosts.postText,
              timeStamp: new Date(),
            },
          ],
          postText: '',
        },
      }
    })
  }

  handlerOnDeletePost = (event, id) => {
    event.preventDefault()
    const newPosts = this.state.myPosts.posts.filter(post => post.id !== id)
    this.setState(prevState => {
      return {
        myPosts: {
          ...prevState.myPosts,
          posts: newPosts,
        },
      }
    })
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
                return <Home data={this.state.posts} />
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

export default App
