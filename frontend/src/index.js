import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers'

import App from './App'

import * as serviceWorker from './serviceWorker'
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const AppWithRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
