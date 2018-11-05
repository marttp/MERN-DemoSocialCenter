import React, { Component } from 'react'
import './App.css'

import { AppNavbar, JumbotronApp, Footer } from './components'
import { fetchAllPost } from './services/postApi'
import Posts from './containers/Posts/Posts'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTest: '',
      posts: null,
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

  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <JumbotronApp />
        <Posts data={this.state.posts} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
