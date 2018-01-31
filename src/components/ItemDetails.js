import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ItemDelete from './ItemDelete'
import axios from 'axios'

class ItemDetails extends Component{
  state = {
    book: this.props.location.state.book
  }
  handleDelete = () => {
    axios.delete(`/books/${this.props.location.state.book.title}`)
    .then(res => res.redirect('/books'))
    .catch(err => console.log(err))
  }
render() {
  console.log(this.props)
  let book = this.props.location.state.book
  
  return (
    <div>
      <div>
        <h1>{book.title}</h1>
        <div>
          <p>Written by: {book.author}</p>
          <p>Published: {book.published}</p>
          <p>Quality (out of 5): {book.quality}</p>
          <p>Favorite Quote: {book.quote}</p>
          <p>Owner: {book.owner}</p>
          <button>
            <Link to={{
              pathname: `/books/${book.title}/edit`,
              state: {book: book}
            }}>
            Edit
            </Link></button>
          <button>
            <Link to={{
              pathname: `/books/${book.title}`,
              state: {book: book}
            }}>Delete
        </Link></button>

        </div>
      </div>

    </div>
  )
}
}

export default ItemDetails
