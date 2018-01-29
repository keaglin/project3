import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Landing from './Landing'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'
import UserAuth from './UserAuth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <ItemList />
        <ItemDetails />
        <UserAuth />
      </div>
    )
  }
}

export default App
