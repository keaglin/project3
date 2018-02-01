import React, { Component }   from 'react'
import { CLIENT_URL }         from '../constants'
import ItemList               from './ItemList'
import axios                  from 'axios'
import { Link }               from 'react-router-dom'

class ItemContainer extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get(`${CLIENT_URL}/books`)
      .then(response => this.setState({books: response.data}))
  }

  render () {
    let books = this.state.books
    console.log(books)
    return (
      <div> <ItemList books={books}/></div>
     
    ) 
  }
}





export default ItemContainer
