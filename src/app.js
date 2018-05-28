import React, { Component } from 'react'
import Dashboard from './containers/dashboard'
import appStore from './store'
import { Provider } from 'react-redux'

const store = appStore()

export default class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    )
  }
}
