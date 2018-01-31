import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ItemDelete from './ItemDelete'
import axios from 'axios'
import { CLIENT_URL } from '../constants'
import { Redirect } from 'react-router-dom'

class ItemDetails extends Component {
  state = {
    book: this.props.location.state.book,
    toDashboard: false
  }
  handleDelete = () => {
    axios.delete(`${CLIENT_URL}/${this.state.book.title}`)
    .then(this.setState({ toDashboard: true }))
    .catch(err => console.log(err))
  }
  render() {
    // console.log(this.props)
    let book = this.state.book
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/books`
        // ,
        // state: {book:book}
      }}/>
    }
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
              </Link>
            </button>
            <button onClick={this.handleDelete}>
              <Link to={{
                pathname: `/books/${book.title}`,
                state: {book: book}
              }}>
                Delete
              </Link>
            </button>

          </div>
        </div>

      </div>
    )
  }
}

export default ItemDetails
