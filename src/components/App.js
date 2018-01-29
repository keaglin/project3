import React, { Component } from 'react'
import Landing              from './Landing'
import ItemList             from './ItemList'
import ItemDetails          from './ItemDetails'
import ItemContainer        from './ItemContainer'
import UserAuth             from './UserAuth'
import books                from '../db/books'
import { Switch, Route }    from 'react-router-dom'
import Header               from './Header'
import Footer               from './Footer'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' render={() => (<Landing />)}/>
          <Route exact path='/books' render={(props) => (<ItemContainer books={books} {...props}/>)}/>
          <Route path='/books/:title' render={(props) => (<ItemDetails {...props}/>)} />
          <Route exact path='/users' render={() => (<UserAuth />)} />
          <Route path='/*' render={() => (<Landing />)} />
        </Switch>
      <Footer />
      </div>
    )
  }
}

export default App
