import React, { Component } from 'react'
import {Link}               from 'react-router-dom'

const ItemDetails = (props) => {
  console.log(props)
  let book = props.location.state.book
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
            <Link to = {{
              pathname: `/books/${book.title}/edit`, 
              state: {book:book}
            }}>
            Edit
            </Link>
          </button>
          <button>
            <Link to = {{
              pathname: `/books/${book.title}/delete`, 
              state: {book:book}
            }}>
            Delete
            </Link>
          </button>
        </div>
      </div>

    </div>
  )
}


export default ItemDetails 
