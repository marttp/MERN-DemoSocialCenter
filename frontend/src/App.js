import React, { Component } from 'react'
import './App.css'

import { AppNavbar, JumbotronApp, AppInput } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTest: '',
    }
  }

  handleOnChange = event => {
    // this.setState({ textTest: event.target.value }, () =>
    //   console.log(this.state.textTest)
    // )
    const { value } = event.target
    this.setState(
      prevState => {
        return {
          ...prevState,
          textTest: value,
        }
      },
      () => console.log(this.state.textTest)
    )
  }

  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <JumbotronApp />
        <AppInput
          label
          title="test 2 way binding"
          type="text"
          onChange={this.handleOnChange}
          placeholder="Input word for test 2 way binding"
        />
        <p>{this.state.textTest}</p>
      </React.Fragment>
    )
  }
}

export default App
