import React, { Component } from 'react'
import './App.css'

import Landing from './Landing'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'
import UserAuth from './UserAuth'
import books from './db/books'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <ItemList books={books}/>
        <ItemDetails />
        <UserAuth />
      </div>
    )
  }
}

export default App
