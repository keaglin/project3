import React, { Component } from 'react'
import './App.css'

import Landing from './Landing'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'
import UserAuth from './UserAuth'
import books from './db/books'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={() => (<Landing />)}/>
        <Route exact path='/books' render={() => (<ItemList books={books}/>)}/>
        <Route path='/books/:title' render={() => (<ItemDetails />)} />
        <Route exact path='/users' render={() => (<UserAuth />)} />
        <Route path='/*' render={() => (<Landing />)} />
      </Switch>
      </div>
    )
  }
}

export default App
