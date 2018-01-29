import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Landing from './Landing'
import UserAuth from './UserAuth'
import ItemDetails from './ItemDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <UserAuth />
        <ItemDetails />
      </div>
    )
  }
}

export default App
